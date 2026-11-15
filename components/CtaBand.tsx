import Link from "next/link";
import { WhatsAppIcon } from "./Icons";
import { RisingBubbles } from "./RisingBubbles";
import { waLink } from "@/lib/site";

export function CtaBand({
  title = "¿Cuándo quieres que pasemos?",
  text = "Cuéntanos qué espacio es y te respondemos el mismo día con una cotización sin compromiso.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <RisingBubbles count={12} />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-20 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl leading-[1.1] md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contacto"
            className="inline-flex min-h-13 items-center rounded-full bg-gold px-7 font-semibold text-navy-deep transition-colors hover:bg-[#d8b465]"
          >
            Reservar una visita
          </Link>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-13 items-center gap-2 rounded-full border border-white/30 px-6 font-semibold text-white transition-colors hover:border-white"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
