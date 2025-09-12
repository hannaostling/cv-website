type Props = {
  src: string;
  size: number;
  color?: string;
};

export function TintableIcon({ src, size, color = "var(--icon)" }: Props) {
  return (
    <span
      style={{
        width: size,
        height: size,
        display: "inline-block",
        backgroundColor: color,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        mask: `url(${src}) no-repeat center / contain`,
      }}
      aria-hidden="true"
    />
  );
}
