"use client";

import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  dateText: string;
  image: string;
  roundImage?: boolean;
};

export function GridRow({ title, subtitle, dateText, image, roundImage = false }: Props) {
  const imageClass = roundImage ? "gridRowImageRound" : "gridRowImage";

  return (
    <div className="gridRow">
      <Image src={image} alt="" aria-hidden="true" width={40} height={40} className={imageClass} />
      <div>
        <h3 className="gridRowTitle">{title}</h3>
        <p className="gridRowSubtitle">{subtitle}</p>
        <p className="gridRowDateText">{dateText}</p>
      </div>
    </div>
  );
}
