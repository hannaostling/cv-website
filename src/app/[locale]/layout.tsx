import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { profile } from "@/data/profile";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = raw === "en" ? "en" : "sv";
  setRequestLocale(locale);

  const messages =
    locale === "en"
      ? (await import("@/i18n/locales/en.json")).default
      : (await import("@/i18n/locales/sv.json")).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header profile={profile} />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
