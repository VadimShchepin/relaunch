export function HouseMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 20L24 4l20 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
      />
      <path
        d="M10 18v18h28V18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
      />
      <path
        d="M20 36V24h8v12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
