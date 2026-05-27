import Image from "next/image";
import { Button } from "@/components/Button";
import { DividerOrnament, Ornament } from "@/components/Ornament";
import { Reveal, RevealGroup, RevealChild } from "@/components/Reveal";

export const metadata = {
  title: "Founder — SHE",
  description:
    "Meet Miti Vyas — the founder of SHE. A message on why SHE exists and who inspired it.",
};

export default function FounderPage() {
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
            Founder
          </p>
          <h1
            className="font-script text-6xl md:text-8xl text-gold-light leading-none"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Meet
          </h1>
          <h2
            className="mt-2 font-display uppercase text-5xl md:text-7xl tracking-[0.06em] text-cream leading-[1.05]"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Miti Vyas
          </h2>
          <div
            className="mt-8 flex justify-center text-gold"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <DividerOrnament />
          </div>
          <p
            className="mt-6 font-display uppercase tracking-[0.28em] text-sm text-cream/85"
            style={{ "--i": 4 } as React.CSSProperties}
          >
            Founder · SHE
          </p>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
            <div className="md:col-span-2 md:sticky md:top-28">
              <Reveal className="relative">
                <div className="relative aspect-[4/5] border-[6px] border-ivory shadow-[0_20px_60px_-20px_rgba(78,31,56,0.6)] overflow-hidden bg-plum">
                  <Image
                    src="/brand/miti-1.png"
                    alt="Miti Vyas, founder of SHE"
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-cream">
                    <div>
                      <p className="font-script text-4xl text-gold-light leading-none drop-shadow-lg">
                        Miti
                      </p>
                      <p className="mt-1 font-display uppercase tracking-[0.22em] text-xs text-cream/90">
                        Vyas
                      </p>
                    </div>
                    <p className="font-display uppercase tracking-[0.24em] text-[10px] text-gold-light/85">
                      Founder
                    </p>
                  </div>
                  <div className="absolute top-3 left-3 text-gold/70">
                    <Ornament size={36} corner="tl" />
                  </div>
                  <div className="absolute bottom-3 right-3 text-gold/70">
                    <Ornament size={36} corner="br" />
                  </div>
                </div>

                <div className="relative mt-6 aspect-[5/6] border-[6px] border-ivory shadow-[0_20px_60px_-20px_rgba(78,31,56,0.5)] overflow-hidden bg-plum -rotate-1">
                  <Image
                    src="/brand/miti-2.png"
                    alt="Miti Vyas in traditional wear"
                    fill
                    sizes="(min-width: 768px) 35vw, 80vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="mt-8 bg-cream border border-maroon/10 p-6 relative">
                  <div className="absolute -top-3 left-6 px-3 bg-cream font-display uppercase tracking-[0.22em] text-[10px] text-gold">
                    My SHE Spotlight
                  </div>
                  <p className="font-script text-3xl text-maroon leading-none">
                    My Nani
                  </p>
                  <p className="mt-2 font-display uppercase tracking-[0.14em] text-sm text-maroon-deep">
                    Rani
                  </p>
                  <p className="mt-3 font-serif italic text-ink/75 leading-relaxed">
                    My biggest inspiration — she chose to live her life by her
                    rules instead of conforming to societal expectations.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-3">
              <p className="font-display uppercase tracking-[0.24em] text-[11px] text-gold">
                A Message From
              </p>
              <h3 className="mt-2 font-display uppercase text-3xl md:text-5xl text-maroon tracking-[0.06em] leading-[1.1]">
                Our Founder
              </h3>

              <RevealGroup className="mt-10 space-y-8 font-serif text-xl md:text-[1.35rem] leading-[1.75] text-ink/85">
                <RevealChild>
                  <p className="relative">
                    <span className="absolute -left-6 -top-4 font-script text-6xl text-gold/60 leading-none select-none">
                      &ldquo;
                    </span>
                    SHE was created because I saw how easily women&apos;s
                    voices could be overlooked.
                  </p>
                </RevealChild>
                <RevealChild>
                  <p>
                    I saw dreams being reshaped to fit expectations. I saw
                    creativity dismissed. I saw potential waiting for
                    permission.
                  </p>
                </RevealChild>
                <RevealChild>
                  <p className="font-display uppercase tracking-[0.12em] text-maroon text-2xl md:text-3xl leading-[1.35]">
                    SHE exists to change that.
                  </p>
                </RevealChild>
                <RevealChild>
                  <p>
                    This is not just an initiative. It is a safe space for
                    women to rise, express, and be seen.
                  </p>
                </RevealChild>
                <RevealChild>
                  <p className="italic">
                    Thank you for being part of the beginning of something
                    powerful and purposeful.
                  </p>
                </RevealChild>
              </RevealGroup>

              <div className="mt-14 flex items-baseline gap-5">
                <span className="h-px flex-1 bg-maroon/20" />
                <p className="font-script text-5xl text-gold leading-none whitespace-nowrap">
                  Miti Vyas
                </p>
              </div>
              <p className="mt-3 text-right font-display uppercase tracking-[0.28em] text-[10px] text-maroon/60">
                Founder · SHE
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="painterly-rose relative text-cream py-24 md:py-32 overflow-hidden">
        <Reveal className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="font-script text-5xl md:text-6xl text-gold-light leading-none">
            Stand with her
          </p>
          <p className="mt-6 font-display uppercase tracking-[0.28em] text-sm text-cream/90">
            The beginning of something powerful
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/donate" size="lg" variant="primary">
              Donate Today
            </Button>
            <Button href="/about" size="lg" variant="gold-outline">
              Our Mission
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
