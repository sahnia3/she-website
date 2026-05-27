type OrnamentProps = {
  className?: string;
  size?: number;
  corner?: "tl" | "tr" | "bl" | "br";
};

export function Ornament({
  className,
  size = 64,
  corner = "tl",
}: OrnamentProps) {
  const rotations: Record<NonNullable<OrnamentProps["corner"]>, string> = {
    tl: "",
    tr: "translate(100,0) scale(-1,1)",
    bl: "translate(0,100) scale(1,-1)",
    br: "translate(100,100) scale(-1,-1)",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <g transform={rotations[corner]}>
        <path d="M4 4 L28 4 M4 4 L4 28" />
        <path d="M12 4 Q24 4 28 16" />
        <path d="M4 12 Q4 24 16 28" />
        <path d="M16 16 Q24 16 28 24 Q28 16 36 16" />
        <path d="M16 16 Q16 24 24 28 Q16 28 16 36" />
        <circle cx="20" cy="20" r="1.5" fill="currentColor" stroke="none" />
        <path d="M32 10 Q40 14 44 22" />
        <path d="M10 32 Q14 40 22 44" />
        <circle cx="36" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="36" r="1" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

export function DividerOrnament({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 24"
      width="120"
      height="24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <path d="M4 12 L40 12" opacity="0.4" />
      <path d="M80 12 L116 12" opacity="0.4" />
      <path d="M50 12 Q55 4 60 12 Q65 20 70 12" />
      <circle cx="60" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="46" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="74" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
