export const dynamic = "force-static";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CvPage from "@/components/CvPage";
import { NextIntlClientProvider } from "next-intl";
import { hanna } from "@/data/person";

export default async function RootSv() {
  const messages = (await import("@/i18n/locales/sv.json")).default;

  return (
    <NextIntlClientProvider locale="sv" messages={messages}>
      <Header profile={hanna.profile} />
      <CvPage />
      <Footer />
    </NextIntlClientProvider>
  );
}
