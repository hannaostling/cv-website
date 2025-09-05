import { useEffect, useState } from "react";

export function useScrolledPast(id: string, offsetTop = 0) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => setPast(!entry.isIntersecting), {
      root: null,
      threshold: 0,
      rootMargin: `-${offsetTop}px 0px 0px 0px`,
    });

    obs.observe(el);
    return () => obs.disconnect();
  }, [id, offsetTop]);

  return past;
}
