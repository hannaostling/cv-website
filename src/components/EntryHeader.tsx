"use client";

import styles from "./EntryHeader.module.css";
import Image from "next/image";

type Props = {
  first: string;
  second: string;
  third: string;
  image: string;
};

export function EntryHeader({ first, second, third, image }: Props) {
  return (
    <div>
      <div className={styles.entryHeader}>
        <Image src={image} alt="" aria-hidden="true" width={50} height={50} className={styles.entryImg} />
        <div>
          <h3>{first}</h3>
          <p className={styles.entrySecond}>{second}</p>
          <p className={styles.entryThird}>{third}</p>
        </div>
      </div>
    </div>
  );
}
