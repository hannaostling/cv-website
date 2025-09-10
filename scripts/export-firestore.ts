import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "node:fs";

type JsonMap = Record<string, unknown>;

const [, , collectionName, filePath] = process.argv;
if (!collectionName || !filePath) {
  console.error("Usage: tsx import-firestore.ts <collectionName> <filePath>");
  process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync("./private/serviceAccountKey.json", "utf8"));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function importCollection(collectionName: string, filePath: string) {
  const raw = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(raw) as Record<string, JsonMap>;

  let batch = db.batch();
  let ops = 0;

  for (const [docId, docData] of Object.entries(data)) {
    const ref = db.collection(collectionName).doc(docId);
    batch.set(ref, docData);
    ops++;

    if (ops % 400 === 0) {
      await batch.commit();
      batch = db.batch();
      console.log(`Committed ${ops} docs so far…`);
    }
  }

  await batch.commit();
  console.log(`✅ Imported ${ops} docs into '${collectionName}'`);
}

importCollection(collectionName, filePath).catch((e) => {
  console.error("Import failed:", e);
  process.exit(1);
});
