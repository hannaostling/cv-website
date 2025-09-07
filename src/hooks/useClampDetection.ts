import { useEffect, useState } from "react";

/**
 * Detects if an element's content is visually clamped (its scrollHeight exceeds clientHeight).
 * Returns `true` when clamped. Automatically re-checks on element resize and when deps change.
 */
export function useClampDetection(
  ref: React.RefObject<HTMLElement | null>,
  isOpen: boolean,
  deps: React.DependencyList = []
) {
  const [isClamped, setIsClamped] = useState(false);

  useEffect(() => {
    if (isOpen || !ref.current) {
      setIsClamped(false);
      return;
    }
    const el = ref.current;

    const check = () => {
      const full = el.scrollHeight;
      const visible = el.clientHeight;
      setIsClamped(full > visible + 1);
    };

    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);

    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, ref, ...deps]);

  return isClamped;
}
