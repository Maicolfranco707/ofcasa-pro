import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { equipoImage, promises } from "@/lib/site";
import { RisingBubbles } from "@/components/RisingBubbles";
import { ServiceIcon } from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Quiénes somos y cómo trabajamos en Ofcasa Pro, limpieza de oficinas y hogares en Bello y Medellín.",
  alternates: { canonical: "/nosotros" },
};

export default function Nosotros() {
  return (
    <>
      <PageIntro
        title="Cuidamos los espacios como si fueran nuestros"
        text="Ofcasa Pro es un equipo de limpieza de Bello. Trabajamos en oficinas, consultorios y hogares con el mismo cuidado en cada visita."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 lg:grid-cols-2">
        {equipoImage ? (
          <div
            className="photo relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
            style={{ backgroundImage: `url(${equipoImage})` }}
            role="img"
            aria-label="Equipo de Ofcasa Pro uniformado"
          >
            <div className="absolute inset-x-5 bottom-5 rounded-xl bg-white/95 p-5 backdrop-blur">
              <p className="font-display text-xl text-navy">El equipo Ofcasa Pro</p>
              <p className="mt-1 text-slate">Uniformado, identificado y con todo el equipo profesional.</p>
            </div>
          </div>
        ) : (
          <div className="relative isolate aspect-[4/5] w-full overflow-hidden rounded-2xl bg-navy p-8 text-white md:p-10">
            <RisingBubbles count={12} />
            <div className="grid grid-cols-3 gap-4">
              {["oficinas", "hogar", "consultorios", "vidrios-pisos", "muebles", "alfombras"].map((n) => (
                <span key={n} className="grid aspect-square place-items-center rounded-2xl bg-white/[0.07] ring-1 ring-white/10">
                  <ServiceIcon name={n} light className="size-3/5" />
                </span>
              ))}
            </div>
            <div className="absolute inset-x-6 bottom-6 rounded-xl bg-white p-6 text-ink md:inset-x-8 md:bottom-8">
              <p className="font-display text-2xl text-navy">El equipo Ofcasa Pro</p>
              <p className="mt-2 leading-relaxed text-slate">
                Uniformado, identificado y con todo el equipo profesional para oficinas, consultorios y hogares.
              </p>
            </div>
          </div>
        )}
        <div>
          <h2 className="font-display text-4xl leading-[1.1] text-navy md:text-5xl">Cómo trabajamos</h2>
          <dl className="mt-10 space-y-8">
            {promises.map((p) => (
              <div key={p.title} className="border-l-2 border-gold pl-5">
                <dt className="text-xl font-semibold text-navy">{p.title}</dt>
                <dd className="mt-1.5 leading-relaxed text-slate">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center">
          <p className="font-display text-3xl leading-snug text-navy md:text-4xl">
            Un espacio limpio se nota al entrar. Uno bien cuidado se nota todos los días.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="font-display text-4xl leading-[1.1] text-navy md:text-5xl">Dónde estamos</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
          Estamos en Bello y atendemos sobre todo en Bello y los sectores cercanos, además de Medellín y el resto del Valle de Aburrá. Si estás en otra zona, escríbenos y te decimos si podemos
          llegar.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
