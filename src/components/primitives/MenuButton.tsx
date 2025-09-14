"use client";

import { forwardRef } from "react";
import { MenuIcon } from "../../icons/MenuIcon";
import { CloseIcon } from "../../icons/CloseIcon";
import styles from "../header/Header.module.css";

type Props = {
  open: boolean;
  onClick: () => void;
  controlsId: string;
};

export const MenuButton = forwardRef<HTMLButtonElement, Props>(({ open, onClick, controlsId }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      className={styles.menuToggle}
      aria-haspopup="menu"
      aria-expanded={open}
      aria-controls={controlsId}
      onClick={onClick}
    >
      <span className={styles.menuIcon} aria-hidden="true">
        {open ? <CloseIcon /> : <MenuIcon />}
      </span>
    </button>
  );
});

MenuButton.displayName = "MenuButton";
