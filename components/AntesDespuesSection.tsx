import { WhatsAppIcon } from "./Icons";
import { BeforeAfter } from "./BeforeAfter";
import { antesDespues, waLink } from "@/lib/site";

/* Antes y después con fotos reales. Una imagen ya combinada se muestra completa;
   un par de fotos del mismo ángulo se muestra con comparador deslizable. */
export function AntesDespuesSection({ tone = "sky" }: { tone?: "sky" | "white" }) {
  if (antesDespues.length === 0) return null;
  return (
    <section className={tone === "sky" ? "bg-sky" : "bg-white"}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-[15px] font-medium text-gold-ink">Resultados reales</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.1] text-navy md:text-5xl">Antes y después</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-slate">
            Fotos de trabajos de nuestro equipo. Manchas que parecían imposibles, fuera en una sola visita.
          </p>
          <a
            href={waLink("Hola Ofcasa Pro, vi el antes y después y quiero cotizar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-wa px-6 font-semibold text-white transition-colors hover:bg-[#158a45]"
          >
            <WhatsAppIcon className="size-5" />
            Quiero el mío así
          </a>
        </div>
        <ul className="flex flex-wrap justify-center gap-6 lg:justify-end">
          {antesDespues.map((a) => (
            <li key={a.titulo} className={a.imagen ? "w-full max-w-[340px]" : "w-full max-w-[460px]"}>
              {a.imagen ? (
                <figure>
                  <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-[0_24px_50px_-24px_rgba(9,28,48,0.45)] ring-1 ring-navy/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={a.imagen}
                      alt={`Antes y después: ${a.titulo}`}
                      loading="lazy"
                      className="block w-full rounded-xl"
                    />
                  </div>
                  <figcaption className="mt-4 flex justify-center">
                    <span className="rounded-full bg-navy px-4 py-1.5 text-[15px] font-semibold text-white">{a.titulo}</span>
                  </figcaption>
                </figure>
              ) : a.antes && a.despues ? (
                <BeforeAfter titulo={a.titulo} antes={a.antes} despues={a.despues} />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
