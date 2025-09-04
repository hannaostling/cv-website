import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const getMatch = () => (typeof window !== "undefined" ? window.matchMedia(query).matches : false);
  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = () => setMatches(mql.matches);
    handler(); // sync on mount
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}
