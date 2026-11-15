import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "@/components/Icons";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { galeriaMuebles, services, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de limpieza en Medellín: oficinas, limpieza profunda, mantenimiento, vidrios y pisos, consultorios y lavado de muebles y colchones.",
  alternates: { canonical: "/servicios" },
};

export default function Servicios() {
  return (
    <>
      <PageIntro
        title="Servicios de limpieza"
        text="Desde una limpieza profunda puntual hasta el mantenimiento diario de tu oficina. Todos con personal uniformado y revisión al final de la visita."
      />

      <nav aria-label="Servicios" className="sticky top-[69px] z-30 border-b border-line bg-white/95 backdrop-blur">
        <ul className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-4 text-[15px] whitespace-nowrap">
          {services.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-slate hover:text-navy">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-6xl px-5">
        {services.map((s) => (
          <section key={s.id} id={s.id} className="grid scroll-mt-36 gap-10 border-b border-line py-20 last:border-b-0 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="grid size-20 place-items-center rounded-2xl bg-sky">
                <ServiceIcon name={s.id} className="size-14" />
              </span>
              <h2 className="mt-6 font-display text-4xl leading-[1.1] text-navy">{s.name}</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">{s.description}</p>
              <p className="mt-6 text-[15px] text-ink">
                <span className="font-semibold">Ideal para:</span> {s.goodFor}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/servicios/${s.slug}`}
                  className="inline-flex min-h-12 items-center rounded-full bg-navy px-6 font-semibold text-white transition-colors hover:bg-navy-deep"
                >
                  Ver más
                </Link>
                <a
                  href={waLink(`Hola Ofcasa Pro, quiero cotizar: ${s.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center rounded-full border-2 border-navy px-6 font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  Cotizar este servicio
                </a>
              </div>
            </div>
            <div className="self-start">
            {s.id === "hogar" && (
              <div className="mb-5 grid grid-cols-2 gap-3">
                {galeriaMuebles.map((g) => (
                  <div key={g.src} className="photo aspect-[4/3] rounded-xl" style={{ backgroundImage: `url(${g.src})` }} role="img" aria-label={g.alt} />
                ))}
              </div>
            )}
            <div className="rounded-xl bg-sky p-7 md:p-9">
              <h3 className="text-lg font-semibold text-navy">Qué incluye</h3>
              <ul className="mt-5 space-y-3.5">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-gold-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 text-lg text-slate">
          ¿Tu espacio necesita algo que no está aquí?{" "}
          <Link href="/contacto" className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-[6px]">
            Cuéntanos
          </Link>{" "}
          y armamos un plan a la medida.
        </div>
      </section>

      <CtaBand />
    </>
  );
}
