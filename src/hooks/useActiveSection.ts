import { useEffect, useRef, useState } from "react";

type Options = {
  rootMargin?: string;
  minRatio?: number;
  hysteresis?: number;
  headerOffsetPx?: number;
};

export function useActiveSection(
  ids: string[],
  {
    rootMargin = "-64px 0px -60% 0px",
    minRatio = 0.2,
    hysteresis = 0.08,
    headerOffsetPx = 64,
  }: Options = {}
) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  const ratiosRef = useRef<Record<string, number>>({});
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

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

        // Strong bottom-of-page fallback: if we're at (or ~at) bottom and the last section is even slightly visible, activate it.
        const doc = document.documentElement;
        const bottomReached =
          window.innerHeight + window.scrollY >= doc.scrollHeight - 2;
        const lastId = ids[ids.length - 1];
        if (bottomReached && (ratiosRef.current[lastId] ?? 0) > 0) {
          if (currentId !== lastId) setActive(lastId);
          return;
        }

        // Normal hysteresis rule: allow takeover only if max beats current by margin and passes minRatio
        const canOvertake = maxR >= minRatio && maxR > currentR + hysteresis;

        // If current section is basically gone, allow the best visible to take over even if minRatio not reached
        const currentBarelyVisible = currentR < 0.05;

        // Choose next
        const nextId = canOvertake || currentBarelyVisible ? maxId : currentId;

        if (nextId !== currentId) {
          setActive(nextId);
        }
      },
      {
        root: null,
        // Denser thresholds -> smoother ratio updates; we gate swap by hysteresis/minRatio
        threshold: [
          0, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
        ],
        rootMargin,
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids, rootMargin, minRatio, hysteresis, headerOffsetPx]);

  return active;
}
