import Image from "next/image";
import { DividerOrnament, Ornament } from "@/components/Ornament";
import { Logo } from "@/components/Logo";
import { Reveal, RevealGroup, RevealChild } from "@/components/Reveal";

export const metadata = {
  title: "Donate — SHE",
  description:
    "Support SHE. Your contribution is access to education, safety, and opportunity for women and girls.",
};

export default function DonatePage() {
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
            Donate
          </p>
          <p
            className="font-script text-5xl md:text-7xl text-gold-light leading-none"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Make a difference
          </p>
          <h1
            className="mt-2 font-display uppercase text-5xl md:text-7xl tracking-[0.06em] text-cream leading-[1.05]"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Donate Today
          </h1>
          <div
            className="mt-8 flex justify-center text-gold"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <DividerOrnament />
          </div>
          <p
            className="mt-8 font-serif italic text-xl md:text-2xl text-cream/85 max-w-xl mx-auto leading-relaxed"
            style={{ "--i": 4 } as React.CSSProperties}
          >
            Your support is not just a donation. It is access. It is safety.
            It is opportunity.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <Reveal className="order-2 md:order-1">
              <p className="font-script text-4xl md:text-5xl text-gold leading-none">
                Scan · Share · Support
              </p>
              <h2 className="mt-4 font-display uppercase text-3xl md:text-4xl text-maroon tracking-[0.08em] leading-[1.2]">
                Three ways to give
              </h2>

              <ul className="mt-10 space-y-8">
                <li className="flex gap-5">
                  <span className="font-script text-4xl text-gold leading-none w-10 shrink-0">
                    01
                  </span>
                  <div>
                    <p className="font-display uppercase tracking-[0.16em] text-sm text-maroon">
                      Scan the QR
                    </p>
                    <p className="mt-2 font-serif text-lg text-ink/75 leading-relaxed">
                      Point your phone at the code and follow the prompts —
                      takes less than a minute.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <span className="font-script text-4xl text-gold leading-none w-10 shrink-0">
                    02
                  </span>
                  <div>
                    <p className="font-display uppercase tracking-[0.16em] text-sm text-maroon">
                      Email us
                    </p>
                    <a
                      href="mailto:shaktiharmonyempowerment@gmail.com"
                      className="mt-2 block font-serif text-lg text-maroon hover:text-gold transition-colors break-all"
                    >
                      shaktiharmonyempowerment@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-5">
                  <span className="font-script text-4xl text-gold leading-none w-10 shrink-0">
                    03
                  </span>
                  <div>
                    <p className="font-display uppercase tracking-[0.16em] text-sm text-maroon">
                      Follow our journey
                    </p>
                    <a
                      href="https://instagram.com/shakti.harmony.empowerment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block font-serif text-lg text-maroon hover:text-gold transition-colors"
                    >
                      @shakti.harmony.empowerment
                    </a>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal className="order-1 md:order-2">
              <div className="relative painterly-plum border-[10px] border-ivory shadow-[0_30px_80px_-30px_rgba(78,31,56,0.8)] text-cream p-8 md:p-10">
                <div className="absolute top-3 left-3 text-gold/60">
                  <Ornament size={44} corner="tl" />
                </div>
                <div className="absolute top-3 right-3 text-gold/60">
                  <Ornament size={44} corner="tr" />
                </div>
                <div className="absolute bottom-3 left-3 text-gold/60">
                  <Ornament size={44} corner="bl" />
                </div>
                <div className="absolute bottom-3 right-3 text-gold/60">
                  <Ornament size={44} corner="br" />
                </div>

                <div className="flex justify-center mt-2">
                  <Logo variant="mark" size={52} className="text-gold-light" />
                </div>

                <p className="mt-6 text-center font-display uppercase tracking-[0.28em] text-[11px] text-gold">
                  Make a difference
                </p>
                <p className="mt-1 text-center font-script text-4xl text-cream leading-none">
                  Donate Today
                </p>

                <div className="mt-8 relative aspect-square bg-cream mx-auto max-w-[260px] p-4">
                  <Image
                    src="/brand/donate-qr.png"
                    alt="SHE donation QR code"
                    fill
                    sizes="260px"
                    className="object-contain p-2"
                  />
                </div>

                <p className="mt-6 text-center font-display uppercase tracking-[0.24em] text-[10px] text-cream/75">
                  Contact us at
                </p>
                <p className="mt-1 text-center font-serif text-sm text-gold-light break-all">
                  shaktiharmonyempowerment@gmail.com
                </p>
              </div>
            </Reveal>
          </div>
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
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="font-script text-5xl md:text-6xl text-gold-light leading-none">
              Where your gift goes
            </p>
            <h2 className="mt-4 font-display uppercase text-3xl md:text-4xl text-cream tracking-[0.08em]">
              Every dollar, a doorway
            </h2>
          </Reveal>

          <RevealGroup className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                word: "Education",
                body: "Scholarships, seminars, and supplies for girls and young women — direct, no middlemen.",
              },
              {
                word: "Safety",
                body: "Funding for women's shelters and safe spaces. Safety is not a privilege — it is her right.",
              },
              {
                word: "Opportunity",
                body: "Mentorship, resources, and direct aid for women building their own futures.",
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
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-28">
        <Reveal className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif italic text-2xl md:text-3xl text-ink/85 leading-[1.6]">
            &ldquo;Thank you for being part of the beginning of something
            powerful and purposeful.&rdquo;
          </p>
          <p className="mt-8 font-script text-4xl text-gold leading-none">
            — Miti Vyas
          </p>
          <p className="font-display uppercase tracking-[0.28em] text-[10px] text-maroon/60 mt-2">
            Founder
          </p>
        </Reveal>
      </section>
    </>
  );
}
