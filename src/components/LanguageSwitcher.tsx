"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <nav className="no-print language-switcher-text">
      <Link href="/" className={!isEnglish ? "active" : ""}>
        🇸🇪 Svenska
      </Link>
      <Link href="/en" className={isEnglish ? "active" : ""}>
        🇬🇧 English
      </Link>
    </nav>
  );
}
