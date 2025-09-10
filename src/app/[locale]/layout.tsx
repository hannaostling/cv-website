import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

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
      {children}
    </NextIntlClientProvider>
  );
}
