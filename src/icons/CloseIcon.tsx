type Props = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export function CloseIcon({ size, strokeWidth = 2.5, className }: Props) {
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
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
