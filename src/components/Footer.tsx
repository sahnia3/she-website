import Link from "next/link";
import { Logo } from "./Logo";
import { DividerOrnament } from "./Ornament";

export function Footer() {
  return (
    <footer className="painterly-maroon text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence baseFrequency='0.8' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-20 items-start">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-gold hover:text-gold-light transition-colors"
            >
              <Logo variant="mark" size={44} />
              <span className="font-display uppercase tracking-[0.28em] text-lg">
                SHE
              </span>
            </Link>
            <p className="mt-6 font-display uppercase tracking-[0.24em] text-[11px] text-cream/70 leading-[1.8]">
              Shakti · Harmony · Empowerment
            </p>
            <p className="mt-3 font-script text-2xl text-gold-light leading-none">
              where movement meets purpose
            </p>
          </div>

          <div>
            <p className="font-display uppercase tracking-[0.22em] text-[11px] text-cream/50 mb-5">
              Explore
            </p>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/founder", label: "The Founder" },
                { href: "/events", label: "Events" },
                { href: "/donate", label: "Donate" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-cream/85 hover:text-gold transition-colors text-lg"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display uppercase tracking-[0.22em] text-[11px] text-cream/50 mb-5">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/shakti.harmony.empowerment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/85 hover:text-gold transition-colors text-lg inline-flex items-center gap-2"
                >
                  <span className="font-script text-2xl text-gold-light leading-none">
                    @
                  </span>
                  shakti.harmony.empowerment
                </a>
              </li>
              <li>
                <a
                  href="mailto:shaktiharmonyempowerment@gmail.com"
                  className="text-cream/85 hover:text-gold transition-colors text-lg break-all"
                >
                  shaktiharmonyempowerment@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gold/80">
            <DividerOrnament className="w-24 h-5" />
          </div>
          <p className="font-display uppercase tracking-[0.22em] text-[10px] text-cream/50">
            © 2026 SHE — All stories sacred
          </p>
        </div>
      </div>
    </footer>
  );
}
