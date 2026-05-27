import type { CSSProperties } from "react";

type LogoProps = {
  className?: string;
  variant?: "mark" | "lockup";
  /** Height of the trishul mark in px. The wordmark scales from it. */
  size?: number;
  /** Draw the mark in on mount. Use once, above the fold. */
  animate?: boolean;
};

// Trishul artwork box. Tall, so width follows from height.
const MARK_RATIO = 48 / 116;

const cssVar = (i: number) => ({ "--i": i }) as CSSProperties;

function Trishul({ height }: { height: number }) {
  const width = Math.round(height * MARK_RATIO);

  return (
    <svg
      viewBox="0 0 48 116"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Central shaft running through the head down to the base. */}
      <path data-draw pathLength={1} d="M24 16 V100" style={cssVar(0)} />

      {/* The two outer prongs sweeping up from the collar. */}
      <path
        data-draw
        pathLength={1}
        d="M24 41 C 14 37 8 29 9 16"
        style={cssVar(1)}
      />
      <path
        data-draw
        pathLength={1}
        d="M24 41 C 34 37 40 29 39 16"
        style={cssVar(1)}
      />

      <g fill="currentColor" stroke="none">
        {/* Center spearhead. */}
        <path
          data-pop
          d="M24 4 C 28.5 9 29.5 13 24 18 C 18.5 13 19.5 9 24 4 Z"
          style={cssVar(0)}
        />
        {/* Outer prong tips. */}
        <path
          data-pop
          d="M9 7 C 11 10 11 13 9 16 C 7 13 7 10 9 7 Z"
          style={cssVar(1)}
        />
        <path
          data-pop
          d="M39 7 C 41 10 41 13 39 16 C 37 13 37 10 39 7 Z"
          style={cssVar(1)}
        />
        {/* Collar where prongs meet the shaft. */}
        <ellipse data-pop cx="24" cy="40" rx="9" ry="3" style={cssVar(2)} />
        <ellipse data-pop cx="24" cy="46" rx="4" ry="2" style={cssVar(2)} />
        {/* Shaft beads. */}
        <ellipse data-pop cx="24" cy="64" rx="3.1" ry="1.9" style={cssVar(3)} />
        <ellipse data-pop cx="24" cy="84" rx="3.1" ry="1.9" style={cssVar(3)} />
        {/* Base finial. */}
        <ellipse data-pop cx="24" cy="101" rx="4.4" ry="2.8" style={cssVar(4)} />
        <path
          data-pop
          d="M24 104 C 26 108 26 110 24 113 C 22 110 22 108 24 104 Z"
          style={cssVar(4)}
        />
      </g>
    </svg>
  );
}

export function Logo({
  className = "",
  variant = "lockup",
  size = 56,
  animate = false,
}: LogoProps) {
  const drawClass = animate ? "logo-draw" : "";

  if (variant === "lockup") {
    return (
      <span
        className={`inline-flex flex-col items-center ${drawClass} ${className}`}
        role="img"
        aria-label="SHE"
      >
        <Trishul height={size} />
        <span
          className="logo-word font-display uppercase leading-none mt-3"
          style={{
            fontSize: size * 0.44,
            letterSpacing: "0.16em",
            fontWeight: 600,
          }}
          aria-hidden="true"
        >
          SHE
        </span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex ${drawClass} ${className}`}
      role="img"
      aria-label="SHE"
    >
      <Trishul height={size} />
    </span>
  );
}
