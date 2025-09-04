import { PropsWithChildren } from "react";

export type SectionType = "primary" | "primary-no-seperator" | "secondary";

type SectionProps = PropsWithChildren<{
  type: SectionType;
  id?: string;
  className?: string;
  ariaHeading?: string;
}>;

export function Section({ type, children, id, className, ariaHeading }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-${type} ${className ?? ""} section-separator`}
      aria-labelledby={ariaHeading ?? ""}
    >
      <div className="common-padding">{children}</div>
    </section>
  );
}
