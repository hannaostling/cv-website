"use client";

import "./globals.css";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "sv";

  return (
    <html lang={lang}>
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
