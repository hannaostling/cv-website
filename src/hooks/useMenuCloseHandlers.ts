import { useEffect } from "react";

export function useMenuCloseHandlers(
  open: boolean,
  onClose: () => void,
  buttonRef?: React.RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!open) return;

    const onHashChange = () => onClose();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        // Keep focus behavior: return focus to the button when pressing ESC
        buttonRef?.current?.focus();
      }
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, buttonRef]);
}
