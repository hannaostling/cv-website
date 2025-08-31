export function formatDate(dateStr: string | null, isEnglish: boolean): string {
  if (!dateStr) return isEnglish ? "Present" : "Nu";

  const [year, month] = dateStr.split("-");
  const date = new Date(Number(year), Number(month) - 1);

  return date.toLocaleString(isEnglish ? "en-GB" : "sv-SE", {
    year: "numeric",
    month: "short",
  });
}

export function calculateDuration(
  start: string,
  end: string | null,
  isEnglish: boolean
): string {
  const startDate = new Date(start + "-01");
  const endDate = end ? new Date(end + "-01") : new Date();

  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const yearStr =
    years > 0
      ? `${years} ${isEnglish ? (years > 1 ? "years" : "year") : "år"}`
      : "";
  const monthStr =
    remainingMonths > 0 ? `${remainingMonths} ${isEnglish ? "mo" : "mån"}` : "";

  return [yearStr, monthStr].filter(Boolean).join(" ");
}
