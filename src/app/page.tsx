import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { DividerOrnament, Ornament } from "@/components/Ornament";
import { Reveal, RevealGroup, RevealChild } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <section className="painterly-maroon relative overflow-hidden text-cream min-h-[92vh] flex items-center">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence baseFrequency='0.7' numOctaves='3'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
              mixBlendMode: "overlay",
            }}
          />
        </div>

        <div className="absolute top-8 left-8 text-gold/40">
          <Ornament size={96} corner="tl" />
        </div>
        <div className="absolute top-8 right-8 text-gold/40">
          <Ornament size={96} corner="tr" />
        </div>
        <div className="absolute bottom-8 left-8 text-gold/40">
          <Ornament size={96} corner="bl" />
        </div>
        <div className="absolute bottom-8 right-8 text-gold/40">
          <Ornament size={96} corner="br" />
        </div>

        <div className="enter-stagger relative max-w-5xl mx-auto px-6 py-24 text-center w-full">
          <h1 className="sr-only">SHE — Shakti Through Harmony &amp; Empowerment</h1>
          <div
            className="flex justify-center"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            <Logo variant="lockup" size={120} animate className="text-gold-light" />
          </div>

          <div
            className="mt-10 flex justify-center text-gold"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            <DividerOrnament />
          </div>

          <p
            className="mt-8 font-display uppercase tracking-[0.42em] text-sm md:text-base text-cream/90"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Shakti · Harmony · Empowerment
          </p>

          <p
            className="mt-5 font-script text-4xl md:text-5xl text-gold-light leading-none"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            where movement meets purpose
          </p>

          <p
            className="mt-10 max-w-xl mx-auto font-serif italic text-lg md:text-xl text-cream/80 leading-relaxed"
            style={{ "--i": 4 } as React.CSSProperties}
          >
            A global movement rooted in culture, creativity, and community.
            A safe space for women to rise, express, and be seen.
          </p>

          <div
            className="mt-14 flex flex-col sm:flex-row gap-4 items-center justify-center"
            style={{ "--i": 5 } as React.CSSProperties}
          >
            <Button href="/donate" size="lg" variant="primary">
              Make a Difference
            </Button>
            <Button href="/events" size="lg" variant="gold-outline">
              Upcoming Events
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <SectionHeading
              script="Our"
              title="Three Pillars"
              eyebrow="Mission"
            />
          </Reveal>

          <RevealGroup className="mt-20 grid md:grid-cols-3 gap-0 md:gap-12">
            {[
              {
                num: "01",
                title: "Culture",
                body: "Artistic expression as a vessel for healing. We honor tradition while holding space for new stories to emerge.",
              },
              {
                num: "02",
                title: "Creativity",
                body: "Every woman carries a voice worth hearing. We fund platforms where creative fire meets community.",
              },
              {
                num: "03",
                title: "Education",
                body: "Access to learning is access to opportunity. We support girls' education, shelters, and safe spaces.",
              },
            ].map((p, i) => (
              <RevealChild
                key={p.num}
                className={`relative text-center md:text-left p-8 md:p-10 ${
                  i > 0
                    ? "border-t md:border-t-0 md:border-l border-maroon/15"
                    : ""
                }`}
              >
                <p className="font-script text-5xl text-gold leading-none">
                  {p.num}
                </p>
                <h3 className="mt-4 font-display uppercase text-2xl text-maroon tracking-[0.12em]">
                  {p.title}
                </h3>
                <p className="mt-5 font-serif text-lg text-ink/75 leading-relaxed">
                  {p.body}
                </p>
              </RevealChild>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="painterly-plum relative overflow-hidden text-cream py-28 md:py-36">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence baseFrequency='0.8' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
            }}
          />
        </div>

        <RevealGroup className="relative max-w-4xl mx-auto px-6 text-center">
          <RevealChild>
            <p className="font-script text-5xl md:text-6xl text-gold-light leading-none">
              A message from our founder
            </p>
          </RevealChild>

          <RevealChild>
            <blockquote className="mt-12 font-serif italic text-2xl md:text-3xl leading-[1.6] text-cream">
              <span className="font-script text-6xl text-gold align-top leading-none">
                &ldquo;
              </span>
              SHE was created because I saw how easily women&apos;s voices
              could be overlooked. I saw dreams being reshaped to fit
              expectations. I saw creativity dismissed. I saw potential waiting
              for permission.{" "}
              <span className="text-gold-light not-italic font-display uppercase tracking-wider text-xl md:text-2xl">
                SHE exists to change that.
              </span>
            </blockquote>
          </RevealChild>

          <RevealChild>
            <p className="mt-10 font-script text-4xl text-gold">— Miti Vyas</p>
            <p className="font-display uppercase tracking-[0.32em] text-[10px] text-cream/50 mt-2">
              Founder
            </p>
          </RevealChild>

          <RevealChild>
            <div className="mt-14">
              <Button href="/founder" variant="gold-outline">
                Read Her Full Story
              </Button>
            </div>
          </RevealChild>
        </RevealGroup>
      </section>

      <section className="bg-ivory py-28 md:py-36">
        <RevealGroup className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {[
              {
                eyebrow: "01",
                title: "Learn Our Story",
                body: "The stories, silences, and beliefs that shaped SHE.",
                href: "/about",
                cta: "About Us",
              },
              {
                eyebrow: "02",
                title: "Come Together",
                body: "Events, gatherings, and moments where SHE comes alive.",
                href: "/events",
                cta: "View Events",
              },
              {
                eyebrow: "03",
                title: "Stand With Us",
                body: "Every contribution is access, safety, and opportunity.",
                href: "/donate",
                cta: "Donate",
              },
            ].map((c) => (
              <RevealChild key={c.href} className="h-full">
              <Link
                href={c.href}
                className="group relative flex h-full flex-col bg-cream border border-maroon/10 p-10 transition-[transform,background-color,color,box-shadow] duration-500 ease-[var(--ease-out-quart)] hover:bg-maroon hover:text-cream hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(92,26,43,0.5)]"
              >
                <div className="absolute top-5 right-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Ornament size={40} corner="tr" />
                </div>
                <p className="font-script text-3xl text-gold leading-none">
                  {c.eyebrow}
                </p>
                <h3 className="mt-4 font-display uppercase text-2xl tracking-[0.08em] text-maroon group-hover:text-cream transition-colors">
                  {c.title}
                </h3>
                <p className="mt-4 font-serif text-lg text-ink/70 group-hover:text-cream/80 transition-colors leading-relaxed">
                  {c.body}
                </p>
                <p className="mt-auto pt-8 font-display uppercase tracking-[0.2em] text-[11px] text-maroon group-hover:text-gold-light transition-colors inline-flex items-center gap-2">
                  {c.cta}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </Link>
              </RevealChild>
            ))}
          </RevealGroup>
      </section>
    </>
  );
}
