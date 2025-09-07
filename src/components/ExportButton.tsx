"use client";

import styles from "./Footer.module.css";
import { useTranslated } from "@/i18n/useTranslated";
import { ExportIcon } from "@/icons/ExportIcon";

export function ExportButton() {
  return (
    <button className={`${styles.footerBtn} no-print`} type="button" onClick={() => window.print()}>
      <ExportIcon />
      {useTranslated("exportCv")}
    </button>
  );
}
