type Props = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export function MenuIcon({ size, strokeWidth = 2, className }: Props) {
  return (
    <svg
      width={size ?? undefined}
      height={size ?? undefined}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
