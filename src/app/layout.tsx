import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Hanna Ösling - CV",
  icons: {
    icon: "/icons/FavIcon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
