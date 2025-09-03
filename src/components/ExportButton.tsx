"use client";

import { usePathname } from "next/navigation";
import { ExportIcon } from "@/components/ExportIcon";
import styles from "./About.module.css";

export function ExportButton() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <div className={styles.aboutButtonWrapper}>
      <button
        className={`${styles.aboutBtn} no-print`}
        type="button"
        onClick={() => window.print()}
      >
        <ExportIcon />
        {isEnglish ? "Export CV" : "Exportera CV"}
      </button>
    </div>
  );
}
