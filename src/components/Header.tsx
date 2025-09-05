"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useCloseOnOutsideClick } from "@/hooks/useCloseOnOutsideClick";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useScrolledPast } from "@/hooks/useScrolledPast";
import { MenuButton } from "./MenuButton";
import styles from "./Header.module.css";

export default function Header() {
  const sections = ["about", "experience", "education", "recommendations", "skills"];
  const active = useActiveSection(sections);
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const [openMenu, setOpenMenu] = useState(false);
  const isSmall = useMediaQuery("(max-width: 850px)");
  const renderSmall = isSmall === true;
  const pastAbout = useScrolledPast("about-heading", 80);
  const showHeader = renderSmall && pastAbout;

  const SECTIONS = [
    { id: "about", label: isEnglish ? "About" : "Om" },
    { id: "experience", label: isEnglish ? "Work Experience" : "Arbetslivserfarenhet" },
    { id: "education", label: isEnglish ? "Education" : "Utbildning" },
    { id: "recommendations", label: isEnglish ? "Recommendations" : "Rekommendationer" },
    { id: "skills", label: isEnglish ? "Skills" : "Kompetenser" },
  ];

  const menuPanelId = "menu-panel";
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useCloseOnOutsideClick(openMenu, [menuBtnRef, menuPanelRef], () => {
    setOpenMenu(false);
    menuBtnRef.current?.focus();
  });

  return (
    <header className={`${styles.header} no-print ${active === "about" ? styles.noBorder : ""}`}>
      <div className={styles.inner} suppressHydrationWarning>
        {renderSmall ? (
          <div className={styles.iconMode}>
            <h2 className={`${styles.headerTitle} ${showHeader ? styles.fadeIn : styles.fadeOut}`}>
              Hanna Östling
            </h2>

            <MenuButton
              ref={menuBtnRef}
              open={openMenu}
              onClick={() => setOpenMenu((v) => !v)}
              controlsId={menuPanelId}
            />

            <div
              id={menuPanelId}
              ref={menuPanelRef}
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
