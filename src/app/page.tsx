export const dynamic = "force-static";

import { NextIntlClientProvider } from "next-intl";
import CvPage from "../components/CvPage";

export default async function RootSv() {
  const messages = (await import("@/i18n/locales/sv.json")).default;

  return (
    <NextIntlClientProvider locale="sv" messages={messages}>
      <CvPage />
    </NextIntlClientProvider>
  );
}
