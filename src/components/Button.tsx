import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "gold-outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-display uppercase tracking-[0.18em] transition duration-200 ease-[var(--ease-out-quart)] will-change-transform active:scale-[0.97] motion-reduce:active:scale-100 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-maroon-deep hover:bg-gold-light hover:shadow-[0_8px_24px_-8px_rgba(199,146,58,0.6)] hover:-translate-y-0.5",
  secondary:
    "bg-maroon text-cream hover:bg-maroon-deep hover:shadow-[0_8px_24px_-8px_rgba(92,26,43,0.8)] hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-ink hover:text-maroon border border-ink/20 hover:border-maroon",
  "gold-outline":
    "bg-transparent text-gold border border-gold hover:bg-gold hover:text-maroon-deep",
};

const sizes: Record<Size, string> = {
  sm: "text-[11px] px-4 py-2",
  md: "text-xs px-6 py-3",
  lg: "text-sm px-8 py-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "className" | "href" | "children">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...rest
  } = props as CommonProps & Record<string, unknown>;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, external, ...linkRest } = rest as {
      href: string;
      external?: boolean;
      [k: string]: unknown;
    };
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...(linkRest as ComponentPropsWithoutRef<"a">)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        {...(linkRest as Omit<ComponentPropsWithoutRef<"a">, "className" | "href">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
}
