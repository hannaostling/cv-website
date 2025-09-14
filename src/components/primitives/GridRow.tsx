"use client";

import { IconContainer } from "./IconContainer";

type Props = {
  title?: string;
  subtitle?: string;
  dateText: string;
  image?: string;
  imageFallback: string;
  roundImage?: boolean;
};

export function GridRow({ title, subtitle, dateText, image, imageFallback, roundImage = false }: Props) {
  const imageClass = roundImage ? "gridRowImageRound" : "gridRowImage";

  return (
    <div className="gridRow">
      <IconContainer image={image} imageFallback={imageFallback} size={40} className={imageClass} />
      <div>
        {title && <h3 className="gridRowTitle">{title}</h3>}
        {subtitle && <p className="gridRowSubtitle">{subtitle}</p>}
        <p className="gridRowDateText">{dateText}</p>
      </div>
    </div>
  );
}
