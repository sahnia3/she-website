import { EventCard } from "@/components/EventCard";
import { SectionHeading } from "@/components/SectionHeading";
import { DividerOrnament, Ornament } from "@/components/Ornament";
import { Button } from "@/components/Button";
import { Reveal, RevealGroup, RevealChild } from "@/components/Reveal";
import { events } from "@/lib/events";

export const metadata = {
  title: "Events — SHE",
  description:
    "Upcoming SHE events. Gatherings of art, story, and purpose. Tickets via Square.",
};

export default function EventsPage() {
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
            Gatherings
          </p>
          <p
            className="font-script text-5xl md:text-7xl text-gold-light leading-none"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Join us
          </p>
          <h1
            className="mt-2 font-display uppercase text-5xl md:text-7xl tracking-[0.06em] text-cream leading-[1.05]"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Events
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
            Every event we host is a doorway — to story, to community, to
            the women and girls who need us most.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {events.length > 0 ? (
            <>
              <Reveal>
                <SectionHeading
                  script="What's"
                  title="Upcoming"
                  eyebrow="Come Together"
                />
              </Reveal>

              <RevealGroup className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                {events.map((event) => (
                  <RevealChild key={event.id}>
                    <EventCard event={event} />
                  </RevealChild>
                ))}
              </RevealGroup>

              <p className="mt-16 text-center text-sm text-ink/60 font-serif italic max-w-xl mx-auto">
                Tickets handled securely by Square. Your purchase directly
                funds women&apos;s and girls&apos; initiatives.
              </p>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="font-script text-5xl text-gold leading-none">
                No events yet
              </p>
              <p className="mt-6 font-serif text-xl text-ink/75 max-w-md mx-auto">
                New gatherings are being planned. Follow us on Instagram for
                announcements.
              </p>
              <div className="mt-10">
                <Button
                  href="https://instagram.com/shakti.harmony.empowerment"
                  external
                  variant="secondary"
                >
                  Follow @shakti.harmony.empowerment
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-cream border-t border-maroon/10 py-24 md:py-28">
        <Reveal className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-script text-4xl md:text-5xl text-gold leading-none">
            Can&apos;t make it?
          </p>
          <h2 className="mt-4 font-display uppercase text-3xl md:text-4xl text-maroon tracking-[0.08em]">
            Your donation still lifts her
          </h2>
          <p className="mt-6 font-serif text-lg md:text-xl text-ink/75 leading-relaxed">
            Every contribution funds safe spaces, education, and opportunity —
            whether you&apos;re in the room with us or not.
          </p>
          <div className="mt-10">
            <Button href="/donate" size="lg" variant="secondary">
              Donate Today
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
