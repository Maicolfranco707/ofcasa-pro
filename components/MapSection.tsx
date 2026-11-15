import { WhatsAppIcon } from "./Icons";
import { site, waLink } from "@/lib/site";

/* Mapa de Google con la ubicación del negocio y los datos de contacto al lado. */
export function MapSection() {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:py-20 lg:grid-cols-[1fr_1.6fr] lg:items-center">
        <div>
          <h2 className="font-display text-4xl leading-[1.1] text-navy md:text-5xl">Dónde estamos</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Estamos en Bello y atendemos en Bello, Medellín y el Valle de Aburrá. Vamos hasta tu oficina o tu casa.
          </p>
          <ul className="mt-8 space-y-4 text-[17px]">
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" className="mt-0.5 size-5 shrink-0 text-gold-ink" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <span>
                {site.address}, {site.city}, Antioquia
              </span>
            </li>
            <li className="flex items-start gap-3">
              <WhatsAppIcon className="mt-0.5 size-5 shrink-0 text-wa" />
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-navy">
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center rounded-full border-2 border-navy px-6 font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Cómo llegar
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-line bg-mist">
          <iframe
            src={site.mapsEmbed}
            title={`Mapa: ${site.address}, ${site.city}`}
            className="block h-[320px] w-full md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
