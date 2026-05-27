import { DividerOrnament } from "./Ornament";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  script?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  script,
  align = "center",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const textColor = tone === "dark" ? "text-maroon-deep" : "text-cream";
  const scriptColor = tone === "dark" ? "text-gold" : "text-gold-light";
  const eyebrowColor =
    tone === "dark" ? "text-maroon/60" : "text-cream/70";

  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {script && (
        <p
          className={`font-script text-4xl md:text-5xl leading-none ${scriptColor}`}
        >
          {script}
        </p>
      )}
      {eyebrow && (
        <p
          className={`font-display uppercase tracking-[0.3em] text-[11px] ${eyebrowColor} mt-4`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display uppercase text-4xl md:text-5xl lg:text-6xl ${textColor} mt-3 tracking-[0.08em]`}
      >
        {title}
      </h2>
      {align === "center" && (
        <div className={`mt-6 ${scriptColor} flex justify-center`}>
          <DividerOrnament />
        </div>
      )}
    </div>
  );
}
