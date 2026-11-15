import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/Icons";
import { RisingBubbles } from "@/components/RisingBubbles";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Links",
  description: "Cotiza, conoce nuestros servicios y síguenos. Ofcasa Pro, aseo en Bello y Medellín.",
  alternates: { canonical: "/links" },
  robots: { index: false, follow: true },
};

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-11 place-items-center rounded-full text-white/90 transition-colors hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}

const btn =
  "flex min-h-[60px] w-full items-center justify-center gap-2.5 rounded-2xl px-5 text-center text-[17px] font-semibold transition-transform active:scale-[0.98]";

export default function Links() {
  return (
    <div className="fixed inset-0 z-[60] isolate overflow-y-auto bg-navy text-white">
      <RisingBubbles count={14} />
      <main className="mx-auto flex min-h-full w-full max-w-md flex-col items-center px-5 pb-10 pt-14">
        {/* Logo */}
        <span className="grid size-24 place-items-center rounded-full border-[3px] border-gold bg-navy-deep font-display text-[26px] font-bold tracking-wide text-gold shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          OPA
        </span>
        <h1 className="mt-5 font-display text-4xl">Ofcasa Pro</h1>
        <p className="mt-2 text-center text-[16px] text-white/75">Limpieza de hogar y oficinas en Bello y Medellín</p>

        {/* Redes */}
        <div className="mt-4 flex items-center gap-1">
          <Social href={waLink()} label="WhatsApp">
            <WhatsAppIcon className="size-[22px]" />
          </Social>
          <Social href={site.social.instagram} label="Instagram">
            <svg viewBox="0 0 24 24" className="size-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </Social>
          <Social href={site.social.tiktok} label="TikTok">
            <svg viewBox="0 0 24 24" className="size-[22px]" fill="currentColor" aria-hidden="true">
              <path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.2v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.6a5.8 5.8 0 1 0 5 5.8V9.1a7.4 7.4 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5z" />
            </svg>
          </Social>
          <Social href={site.social.facebook} label="Facebook">
            <svg viewBox="0 0 24 24" className="size-[22px]" fill="currentColor" aria-hidden="true">
              <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21z" />
            </svg>
          </Social>
        </div>

        {/* Botones */}
        <nav className="mt-7 flex w-full flex-col gap-3" aria-label="Enlaces">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className={`${btn} bg-wa text-white`}>
            <WhatsAppIcon className="size-5" />
            Cotizar por WhatsApp
          </a>
          <Link href="/" className={`${btn} bg-gold text-navy-deep`}>
            Ver página web
          </Link>
          <Link href="/servicios/limpieza-de-oficinas-medellin" className={`${btn} bg-white text-navy`}>
            Limpieza de oficinas
          </Link>
          <Link href="/contacto" className={`${btn} bg-white text-navy`}>
            Reservar una visita
          </Link>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${btn} border border-white/25 bg-white/[0.06] text-white`}>
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Cómo llegar
          </a>
        </nav>

        <p className="mt-auto pt-10 text-center text-[15px] text-white/60">
          Atendemos en Bello, Medellín y el Valle de Aburrá
        </p>
      </main>
    </div>
  );
}
