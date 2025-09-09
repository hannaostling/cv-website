import { useEffect, useRef, useState } from "react";

type Options = {
  rootMargin?: string;
  minRatio?: number;
  hysteresis?: number;
  headerOffsetPx?: number;
};

export function useActiveSection(
  ids: string[],
  { rootMargin = "-64px 0px -60% 0px", minRatio = 0.2, hysteresis = 0.08, headerOffsetPx = 64 }: Options = {}
) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  const ratiosRef = useRef<Record<string, number>>({});
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);

    ratiosRef.current = Object.fromEntries(ids.map((id) => [id, 0]));

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = (e.target as HTMLElement).id;
          ratiosRef.current[id] = e.isIntersecting ? e.intersectionRatio : 0;
        }

        // Always know the max-visible section
        let maxId = ids[0] ?? "";
        let maxR = 0;
        for (const id of ids) {
          const r = ratiosRef.current[id] ?? 0;
          if (r > maxR) {
            maxR = r;
            maxId = id;
          }
        }

        const currentId = activeRef.current;
        const currentR = ratiosRef.current[currentId] ?? 0;

        // Fallback when no section is visible
        if (maxR === 0) {
          const doc = document.documentElement;
          const atTop = window.scrollY <= 1;
          const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 1;
          const lastId = ids[ids.length - 1];

          const fallbackId = atBottom ? lastId : atTop ? ids[0] ?? "" : currentId;
          if (fallbackId !== currentId) setActive(fallbackId);
          return;
        }

        // Normal hysteresis logic
        const canOvertake = maxR >= minRatio && maxR > currentR + hysteresis;
        const currentBarelyVisible = currentR < 0.05;
        const nextId = canOvertake || currentBarelyVisible ? maxId : currentId;

        if (nextId !== currentId) setActive(nextId);
      },
      { root: null, threshold: [0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], rootMargin }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids, rootMargin, minRatio, hysteresis, headerOffsetPx]);

  return active;
}
