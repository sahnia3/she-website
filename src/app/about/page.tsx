import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { DividerOrnament, Ornament } from "@/components/Ornament";
import { Logo } from "@/components/Logo";
import { Reveal, RevealGroup, RevealChild } from "@/components/Reveal";

export const metadata = {
  title: "About — SHE",
  description:
    "What SHE is, what we believe, and why we exist. A global movement rooted in culture, creativity, and community.",
};

export default function AboutPage() {
  return (
    <>
      <section className="painterly-maroon relative text-cream pt-32 pb-24 overflow-hidden">
        <div className="absolute top-10 left-10 text-gold/40">
          <Ornament size={80} corner="tl" />
        </div>
        <div className="absolute top-10 right-10 text-gold/40">
          <Ornament size={80} corner="tr" />
        </div>

        <div className="enter-stagger relative max-w-4xl mx-auto px-6 text-center">
          <p
            className="font-display uppercase tracking-[0.32em] text-[11px] text-gold mb-4"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            About
          </p>
          <h1
            className="font-display uppercase text-5xl md:text-7xl tracking-[0.06em] text-cream leading-[1.05]"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            What Is SHE?
          </h1>
          <div
            className="mt-8 flex justify-center text-gold"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <DividerOrnament />
          </div>
          <p
            className="mt-8 font-script text-4xl md:text-5xl text-gold-light leading-none"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            a space to let it rise
          </p>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <RevealGroup className="max-w-3xl mx-auto px-6">
          <RevealChild>
            <p className="font-serif text-xl md:text-[1.35rem] leading-[1.75] text-ink/85">
              Shakti Through Harmony &amp; Empowerment was founded on lived
              experiences, shaped by stories shared in silence, and rooted in
              the belief that the limitations placed on women were never meant
              to define them.
            </p>
          </RevealChild>
          <RevealChild>
            <p className="mt-8 font-display uppercase tracking-[0.14em] text-maroon text-2xl md:text-3xl leading-[1.35]">
              SHE was created to be part of that transformation.
            </p>
          </RevealChild>
          <RevealChild>
            <p className="mt-8 font-serif text-lg md:text-xl leading-[1.8] text-ink/80">
              It is a global movement rooted in culture, creativity, and
              community. Through artistic expression, education, and
              storytelling, SHE exists to empower women to rediscover their
              voice, reclaim their space, and realize their strength.
            </p>
          </RevealChild>
          <RevealChild>
            <p className="mt-6 font-serif text-lg md:text-xl leading-[1.8] text-ink/80">
              We believe that tradition and progress can exist together. We
              believe that every woman carries Shakti, and that sometimes, all
              she needs is the space to let it rise.
            </p>
          </RevealChild>
          <RevealChild>
            <p className="mt-10 font-script text-5xl md:text-6xl text-gold leading-none text-center">
              SHE is that space.
            </p>
          </RevealChild>
        </RevealGroup>
      </section>

      <section className="bg-cream border-y border-maroon/10 py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <SectionHeading
              script="Our"
              title="Mission"
              eyebrow="Why We Exist"
            />
          </Reveal>

          <RevealGroup className="mt-16 grid md:grid-cols-2 gap-12 md:gap-20 items-start max-w-5xl mx-auto">
            <RevealChild>
              <p className="font-display uppercase tracking-[0.14em] text-maroon text-2xl md:text-3xl leading-[1.4]">
                SHE exists to empower women through culture, creativity, and
                education.
              </p>
            </RevealChild>
            <RevealChild>
              <p className="font-serif text-lg leading-[1.8] text-ink/80">
                Creating platforms where women&apos;s voices can be seen,
                heard, and valued. Our mission is to fundraise for
                women&apos;s initiatives through artistic and cultural
                expression — supporting programs that advance girls&apos;
                education, provide safe and supportive spaces, and create
                pathways for women to grow and succeed.
              </p>
            </RevealChild>
          </RevealGroup>
        </div>
      </section>

      <section className="painterly-plum relative text-cream py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence baseFrequency='0.8' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <SectionHeading
              script="Your"
              title="Impact"
              eyebrow="Every Contribution"
              tone="light"
            />
          </Reveal>

          <Reveal className="mt-16 max-w-3xl mx-auto text-center">
            <p className="font-serif text-xl md:text-2xl leading-[1.7] text-cream/90">
              Every contribution to SHE directly supports initiatives that
              empower women and girls around the world.
            </p>
          </Reveal>

          <RevealGroup className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                word: "Access",
                body: "Funds support girls' access to education — scholarships, supplies, and seminars that open doors.",
              },
              {
                word: "Safety",
                body: "Resources go directly to women's shelters and safe spaces, giving women room to breathe and rebuild.",
              },
              {
                word: "Opportunity",
                body: "Programs, mentorship, and direct aid for women building careers, businesses, and futures of their own.",
              },
            ].map((p) => (
              <RevealChild
                key={p.word}
                className="relative h-full bg-maroon-deep/40 border border-gold/20 p-10 backdrop-blur-sm"
              >
                <div className="absolute top-3 left-3 text-gold/50">
                  <Ornament size={36} corner="tl" />
                </div>
                <div className="absolute bottom-3 right-3 text-gold/50">
                  <Ornament size={36} corner="br" />
                </div>
                <p className="font-display uppercase tracking-[0.12em] text-3xl text-gold-light">
                  {p.word}
                </p>
                <p className="mt-5 font-serif text-lg text-cream/85 leading-relaxed">
                  {p.body}
                </p>
              </RevealChild>
            ))}
          </RevealGroup>

          <Reveal>
            <p className="mt-16 text-center font-serif italic text-xl md:text-2xl text-cream/85 max-w-2xl mx-auto leading-relaxed">
              Your support is not just a donation. It is the chance for women
              to build their own future.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-28 md:py-36">
        <Reveal className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-10">
            <Logo variant="lockup" size={80} className="text-maroon" />
          </div>

          <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
            {["Shakti", "Harmony", "Empowerment"].map((word, i) => (
              <div key={word} className="flex items-center gap-6 md:gap-10">
                <p className="font-display uppercase tracking-[0.28em] text-xl md:text-3xl text-maroon">
                  {word}
                </p>
                {i < 2 && (
                  <span className="text-gold text-2xl">·</span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-10 font-script text-3xl md:text-4xl text-gold leading-none">
            where movement meets purpose
          </p>

          <div className="mt-14">
            <Button href="/donate" size="lg" variant="secondary">
              Stand With Us
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
