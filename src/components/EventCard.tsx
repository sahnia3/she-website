import Image from "next/image";
import { Ornament } from "./Ornament";
import type { Event } from "@/lib/events";

export function EventCard({ event }: { event: Event }) {
  return (
    <article className="group relative">
      <div className="painterly-plum relative aspect-square overflow-hidden text-cream transition-transform duration-500 ease-out group-hover:-translate-y-1 shadow-[0_12px_40px_-20px_rgba(58,15,28,0.7)]">
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

        {event.image ? (
          <div className="absolute inset-8 overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/20 to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-8 flex items-center justify-center">
            <p className="font-script text-7xl text-gold/30 select-none">
              SHE
            </p>
          </div>
        )}

        <div className="absolute inset-0 flex flex-col justify-end p-8 pb-12 z-10">
          <p className="font-display uppercase tracking-[0.28em] text-[10px] text-gold">
            {event.date} · {event.location}
          </p>
          <h3 className="font-display text-2xl md:text-3xl text-cream mt-3 leading-tight tracking-[0.04em]">
            {event.title}
          </h3>
          <p className="font-serif text-cream/80 text-base mt-3 line-clamp-2 max-w-xs">
            {event.description}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="font-display uppercase tracking-[0.2em] text-[11px] text-maroon">
          {event.price}
        </span>
        <a
          href={event.squareCheckoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display uppercase tracking-[0.22em] text-[11px] text-maroon hover:text-gold transition-colors inline-flex items-center gap-2 group/link"
        >
          Get Tickets
          <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
            →
          </span>
        </a>
      </div>
    </article>
  );
}
