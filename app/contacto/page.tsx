import type { Metadata } from "next";
import { Plus, WhatsAppIcon } from "@/components/Icons";
import { ReservaForm } from "@/components/ReservaForm";
import { JsonLd } from "@/components/JsonLd";
import { faqs, site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto y reservas",
  description: "Reserva una visita de limpieza en Bello y Medellín. Escríbenos por WhatsApp al 304 459 9438.",
  alternates: { canonical: "/contacto" },
};

export default function Contacto() {
  return (
    <section className="bg-mist">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:py-24 lg:grid-cols-[1fr_1.15fr] lg:gap-x-14">
        <div className="lg:col-start-1 lg:row-start-1">
          <h1 className="font-display text-5xl leading-[1.04] text-navy md:text-6xl">Hablemos de tu espacio</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate">
            Llena el formulario o escríbenos directo. Respondemos el mismo día.
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:sticky lg:top-24 lg:self-start">
          <ReservaForm />
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <div className="space-y-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-line bg-white p-5 hover:border-navy"
            >
              <span className="grid size-11 place-items-center rounded-full bg-wa text-white">
                <WhatsAppIcon className="size-5" />
              </span>
              <span>
                <span className="block font-semibold text-navy">WhatsApp</span>
                <span className="text-slate">{site.phoneDisplay}</span>
              </span>
            </a>
            <a href={`tel:+${site.phoneIntl}`} className="flex items-center gap-4 rounded-xl border border-line bg-white p-5 hover:border-navy">
              <span className="grid size-11 place-items-center rounded-full bg-navy text-white">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
              </span>
              <span>
                <span className="block font-semibold text-navy">Llamar</span>
                <span className="text-slate">{site.phoneDisplay}</span>
              </span>
            </a>

            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-line bg-white p-5 hover:border-navy"
            >
              <span className="grid size-11 place-items-center rounded-full bg-gold text-navy-deep">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <span>
                <span className="block font-semibold text-navy">Dirección</span>
                <span className="text-slate">
                  {site.address}, {site.city}
                </span>
              </span>
            </a>
          </div>

          <h2 className="mt-16 font-display text-3xl text-navy">Preguntas frecuentes</h2>
          <div className="mt-6 border-t border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-line">
                <summary className="flex min-h-14 items-center justify-between gap-4 py-4 text-lg font-medium text-navy">
                  {f.q}
                  <Plus className="chev size-5 shrink-0 text-gold-ink transition-transform" />
                </summary>
                <p className="pb-5 leading-relaxed text-slate">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
