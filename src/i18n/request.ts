import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async (params) => {
  const locale = (await params.requestLocale) ?? "sv";

  const messages = (await import(`./locales/${locale}.json`)).default;
  return { locale, messages };
});
