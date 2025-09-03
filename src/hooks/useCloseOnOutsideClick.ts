import { useEffect } from "react";

export function useCloseOnOutsideClick(
  open: boolean,
  refs: Array<React.RefObject<HTMLElement | null>>,
  onClose: () => void
) {
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      // Don't close if the click happened inside one of the specified elements
      if (refs.some((r) => r.current && r.current.contains(target))) return;
      onClose();
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, refs, onClose]);
}
