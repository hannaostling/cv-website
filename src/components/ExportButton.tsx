"use client";

import { usePathname } from "next/navigation";
import { ExportIcon } from "@/components/ExportIcon";
import styles from "./Footer.module.css";

export function ExportButton() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <div>
      <button className={`${styles.footerBtn} no-print`} type="button" onClick={() => window.print()}>
        <ExportIcon />
        {isEnglish ? "Export CV" : "Exportera CV"}
      </button>
    </div>
  );
}
