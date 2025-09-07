"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslated } from "@/i18n/useTranslated";

const languages = [
  { code: "sv", label: "🇸🇪 Svenska" },
  { code: "en", label: "🇬🇧 English" },
];

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const langCode = useTranslated("languageCode");
  const basePath = pathname.replace(/^\/(sv|en)/, "") || "/";

  return (
    <nav className="language-switcher no-print">
      {languages.map((lang) => {
        const href = lang.code === "sv" ? basePath : `/${lang.code}${basePath}`;
        const active = lang.code === langCode;

        return (
          <Link key={lang.code} href={href} className={active ? "active" : ""}>
            {lang.label}
          </Link>
        );
      })}
    </nav>
  );
}
