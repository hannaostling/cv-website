import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["sv", "en"],
  defaultLocale: "sv",
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/", "/(sv|en)/:path*"],
};
