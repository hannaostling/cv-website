"use client";

import { useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ExportButton } from "@/components/ExportButton";
import { GlobeIcon } from "@/components/GlobeIcon";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useCloseOnOutsideClick } from "@/hooks/useCloseOnOutsideClick";
import styles from "./Footer.module.css";

export default function Footer() {
  const [openLang, setOpenLang] = useState(false);
  const langBtnRef = useRef<HTMLButtonElement>(null);
  const langPanelRef = useRef<HTMLDivElement>(null);
  const langPanelId = useId();
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  useCloseOnOutsideClick(openLang, [langBtnRef, langPanelRef], () => {
    setOpenLang(false);
    // Keep focus behavior: return focus to the button when pressing ESC
    langBtnRef.current?.focus();
  });

  return (
    <footer className={`${styles.footer} section-secondary no-print`} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.left}>
          <button
            ref={langBtnRef}
            id={`${langPanelId}-button`}
            type="button"
            className={styles.footerBtn}
            aria-expanded={openLang}
            aria-controls={`${langPanelId}-panel`}
            aria-haspopup="menu"
            onClick={() => setOpenLang((v) => !v)}
          >
            <GlobeIcon />
            <span>{isEnglish ? "Language" : "Språk"}</span>
            <span className={styles.caret} aria-hidden>
              ▾
            </span>
          </button>

          <div
            id={`${langPanelId}-panel`}
            ref={langPanelRef}
            className={`${styles.langPanel} ${openLang ? styles.openLang : ""}`}
            role="region"
            aria-labelledby={`${langPanelId}-button`}
            hidden={!openLang}
            onClick={() => setOpenLang(false)}
          >
            <LanguageSwitcher />
          </div>

          <ExportButton />
        </div>

        <div className={styles.copyright}>
          <span>© Östling IT {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
