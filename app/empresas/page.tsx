import type { Metadata } from "next";
import { Check } from "@/components/Icons";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { RisingBubbles } from "@/components/RisingBubbles";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Planes para empresas",
  description: "Planes de limpieza para oficinas y consultorios en Bello y Medellín: visita única, semanal o diaria.",
  alternates: { canonical: "/empresas" },
};

const planes = [
  {
    name: "Visita única",
    for: "Para una limpieza profunda, una entrega de oficina o antes de un evento.",
    items: ["Limpieza profunda completa", "Vidrios y pisos", "Revisión al terminar"],
  },
  {
    name: "Semanal",
    for: "Para oficinas pequeñas y consultorios que necesitan mantenerse al día.",
    items: ["Uno o más días fijos por semana", "Plan de tareas por zona", "Revisión en cada visita"],
    featured: true,
  },
  {
    name: "Diario",
    for: "Para oficinas con equipo completo y visitas de clientes todos los días.",
    items: ["Personal asignado a tu oficina", "Horario que no interrumpe la operación", "Supervisión periódica"],
  },
];

export default function Empresas() {
  return (
    <>
      <PageIntro
        crumb="Planes para empresas"
        icons={["oficinas", "consultorios", "mantenimiento"]}
        title="Planes para empresas"
        text="Elige la frecuencia que necesita tu oficina. El precio depende del tamaño del espacio y lo definimos después de conocerlo, sin compromiso."
      />

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {planes.map((p) => (
            <article
              key={p.name}
              className={`relative isolate flex flex-col overflow-hidden rounded-2xl p-8 ${p.featured ? "bg-navy text-white" : "border border-line bg-white"}`}
            >
              {p.featured && <RisingBubbles count={8} scale={0.7} />}
              <div className="flex items-center justify-between gap-3">
                <h2 className={`font-display text-3xl ${p.featured ? "text-white" : "text-navy"}`}>{p.name}</h2>
                {p.featured && <span className="rounded-full bg-gold px-3 py-1 text-sm font-semibold text-navy-deep">El más pedido</span>}
              </div>
              <p className={`mt-4 leading-relaxed ${p.featured ? "text-white/75" : "text-slate"}`}>{p.for}</p>
              <ul className="mt-8 flex-1 space-y-3.5">
                {p.items.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`mt-1 size-4 shrink-0 ${p.featured ? "text-gold" : "text-gold-ink"}`} />
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hola Ofcasa Pro, quiero cotizar el plan ${p.name.toLowerCase()} para mi empresa.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-10 flex min-h-12 items-center justify-center rounded-full font-semibold transition-colors ${
                  p.featured ? "bg-gold text-navy-deep hover:bg-[#d8b465]" : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                }`}
              >
                Cotizar plan {p.name.toLowerCase()}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-2">
          <h2 className="font-display text-4xl leading-[1.1] text-navy md:text-5xl">Lo que todos los planes tienen</h2>
          <ul className="space-y-6 text-lg">
            <li className="border-b border-line pb-6">
              <span className="font-semibold text-navy">Personal uniformado e identificado.</span>{" "}
              <span className="text-slate">Siempre sabes quién entra a tu oficina.</span>
            </li>
            <li className="border-b border-line pb-6">
              <span className="font-semibold text-navy">Insumos incluidos.</span>{" "}
              <span className="text-slate">Productos adecuados para cada superficie.</span>
            </li>
            <li className="border-b border-line pb-6">
              <span className="font-semibold text-navy">Revisión de calidad.</span>{" "}
              <span className="text-slate">El resultado se revisa antes de terminar.</span>
            </li>
            <li>
              <span className="font-semibold text-navy">Cambios cuando los necesites.</span>{" "}
              <span className="text-slate">Ajustamos días y tareas a medida que tu oficina cambia.</span>
            </li>
          </ul>
        </div>
      </section>

      <CtaBand title="Agenda una visita de diagnóstico" text="Conocemos tu oficina, te recomendamos un plan y te damos el precio. Sin compromiso." />
    </>
  );
}
