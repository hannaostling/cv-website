"use client";

import "./globals.css";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "sv";

  return (
    <html lang={lang}>
      <body>
        <head>
          <link rel="icon" href="/icon.png" sizes="any" />
        </head>
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  );
}
