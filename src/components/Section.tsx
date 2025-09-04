import { PropsWithChildren } from "react";

export type SectionType = "primary" | "secondary";

type SectionProps = PropsWithChildren<{
  type: SectionType;
  id?: string;
  className?: string;
  ariaHeading?: string;
}>;

export function Section({ type, children, id, className, ariaHeading }: SectionProps) {
  return (
    <section id={id} className={`section-${type} ${className ?? ""}`} aria-labelledby={ariaHeading ?? ""}>
      <div className="common-padding">{children}</div>
    </section>
  );
}
