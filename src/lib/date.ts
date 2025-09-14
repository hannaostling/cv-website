import { useCallback } from "react";
import type { YearMonth, YearMonthDay } from "@/data/schema";
import { useTranslated } from "@/i18n/useTranslated";

/** "YYYY-MM" → localized string (e.g., "Jun 2019") or translated "present" if null */
export function useYearMonthOrPresent() {
  const present = useTranslated("present");
  const dateFormat = useTranslated("dateFormat");

  return useCallback(
    (dateStr?: YearMonth): string => {
      if (!dateStr) return present;
      const [year, month] = dateStr.split("-");
      const date = new Date(Number(year), Number(month) - 1);
      return date.toLocaleString(dateFormat, { year: "numeric", month: "short" });
    },
    [present, dateFormat]
  );
}

/** "YYYY-MM-DD" → localized string (e.g., "13 Feb 2023")  */
export function useYearMonthDay() {
  const dateFormat = useTranslated("dateFormat");

  return useCallback(
    (ymd: YearMonthDay): string => {
      const [y, m, d] = ymd.split("-").map(Number);
      const date = new Date(y, m - 1, d);
      return date.toLocaleString(dateFormat, {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    },
    [dateFormat]
  );
}

/** Calculates duration between two dates and returns a localized string (e.g., "1 year 3 mo") */
export function useCalculateDuration() {
  const oneYearLabel = useTranslated("oneYear");
  const yearsLabel = useTranslated("years");
  const monthsShortLabel = useTranslated("monthsShort");

  return useCallback(
    (start: YearMonth, end?: YearMonth): string => {
      const startDate = new Date(`${start}-01`);
      const endDate = end ? new Date(`${end}-01`) : new Date();
      const months =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;

      if (years == 0 && remainingMonths == 0) {
        return `1 ${monthsShortLabel}`;
      }

      const yearStr = years > 0 ? `${years} ${years > 1 ? yearsLabel : oneYearLabel}` : "";
      const monthStr = remainingMonths > 0 ? `${remainingMonths} ${monthsShortLabel}` : "";

      return [yearStr, monthStr].filter(Boolean).join(" ");
    },
    [oneYearLabel, yearsLabel, monthsShortLabel]
  );
}
