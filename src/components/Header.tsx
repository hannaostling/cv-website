"use client";
import styles from "./Header.module.css";
import { useTranslated } from "@/i18n/useTranslated";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useCloseOnOutsideClick } from "@/hooks/useCloseOnOutsideClick";
import { useRef, useState } from "react";
import { useScrolledPast } from "@/hooks/useScrolledPast";
import { MenuButton } from "./MenuButton";
import type { Profile } from "@/data/schema";

export default function Header({ profile }: { profile: Profile }) {
  const SECTIONS = [
    { id: "about", label: useTranslated("about") },
    { id: "experience", label: useTranslated("experience") },
    { id: "education", label: useTranslated("education") },
    { id: "recommendations", label: useTranslated("recommendations") },
    { id: "skills", label: useTranslated("skills") },
  ];

  const active = useActiveSection(SECTIONS.map((s) => s.id));
  const [openMenu, setOpenMenu] = useState(false);
  const isSmall = useMediaQuery("(max-width: 850px)");
  const renderSmall = isSmall === true;
  const pastAbout = useScrolledPast("about-heading", 80);
  const showHeader = renderSmall && pastAbout;

  const menuPanelId = "menu-panel";
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const menuAriaLabel = useTranslated("menu");

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
              {profile.name}
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
              aria-label={menuAriaLabel}
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
