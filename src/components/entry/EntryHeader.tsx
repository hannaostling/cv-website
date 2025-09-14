"use client";

import styles from "./EntryHeader.module.css";
import { IconContainer } from "../primitives/IconContainer";

type Props = {
  first?: string | null;
  second?: string | null;
  third?: string | null;
  image?: string | null;
  imageFallback: string;
};

export function EntryHeader({ first, second, third, image, imageFallback }: Props) {
  return (
    <div>
      <div className={styles.entryHeader}>
        <IconContainer image={image} imageFallback={imageFallback} size={50} className={styles.entryImg} />
        <div>
          {first && <h3>{first}</h3>}
          {second && <p className={styles.entrySecond}>{second}</p>}
          {third && <p className={styles.entryThird}>{third}</p>}
        </div>
      </div>
    </div>
  );
}
