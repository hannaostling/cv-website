"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useMenuCloseHandlers } from "@/hooks/useMenuCloseHandlers";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const sections = ["about", "experience", "education", "recommendations", "skills"];
  const active = useActiveSection(sections);
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const [openMenu, setOpenMenu] = useState(false);
  const isSmall = useMediaQuery("(max-width: 850px)");
  const showHeader = isSmall && active !== "about";

  const SECTIONS = [
    { id: "about", label: isEnglish ? "About" : "Om" },
    { id: "experience", label: isEnglish ? "Work Experience" : "Arbetslivserfarenhet" },
    { id: "education", label: isEnglish ? "Education" : "Utbildning" },
    { id: "recommendations", label: isEnglish ? "Recommendations" : "Rekommendationer" },
    { id: "skills", label: isEnglish ? "Skills" : "Kompetenser" },
  ];

  const menuPanelId = "menu-panel";
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  useMenuCloseHandlers(openMenu, () => setOpenMenu(false), menuBtnRef);

  return (
    <header className={`${styles.header} no-print ${active === "about" ? styles.noBorder : ""}`}>
      <div className={styles.inner}>
        {isSmall ? (
          <div className={styles.iconMode}>
            <h2 className={`${styles.headerTitle} ${showHeader ? styles.fadeIn : styles.fadeOut}`}>
              Hanna Östling
            </h2>

            <button
              ref={menuBtnRef}
              type="button"
              className={styles.menuToggle}
              aria-haspopup="menu"
              aria-expanded={openMenu}
              aria-controls={menuPanelId}
              onClick={() => setOpenMenu((v) => !v)}
            >
              <svg className={styles.menuIcon} viewBox="0 0 20 20" aria-hidden="true">
                {openMenu ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>

            <div
              id={menuPanelId}
              className={`${styles.menuPanel} ${openMenu ? styles.openMenu : ""}`}
              role="region"
              aria-label={isEnglish ? "Main menu" : "Huvudmeny"}
            >
              <div className={styles.menuList}>
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    data-active={active === s.id || undefined}
                    onClick={() => setOpenMenu(false)}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <nav className={styles.navInline} aria-label="Main">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                data-active={active === s.id || undefined}
                aria-current={active === s.id ? "page" : undefined}
              >
                {s.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
