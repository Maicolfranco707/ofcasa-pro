import Link from "next/link";
import { Check, Plus } from "@/components/Icons";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CtaBand } from "@/components/CtaBand";
import { MapSection } from "@/components/MapSection";
import { QuickQuote } from "@/components/QuickQuote";
import { Bubbles } from "@/components/Bubbles";
import { RisingBubbles } from "@/components/RisingBubbles";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Testimonios } from "@/components/Testimonios";
import { antesDespues, bannerImage, faqs, galeriaMuebles, promises, services, testimonios } from "@/lib/site";

const categorias = [
  { icon: "oficinas", label: "Oficinas", href: "/servicios/limpieza-de-oficinas-medellin" },
  { icon: "hogar", label: "Casas", href: "/servicios/lavado-de-muebles-y-colchones-medellin" },
  { icon: "consultorios", label: "Consultorios", href: "/servicios/limpieza-de-consultorios-y-edificios-medellin" },
  { icon: "vidrios-pisos", label: "Vidrios y pisos", href: "/servicios/limpieza-de-vidrios-y-pisos-medellin" },
  { icon: "alfombras", label: "Alfombras", href: "/servicios/lavado-de-muebles-y-colchones-medellin" },
  { icon: "muebles", label: "Muebles y colchones", href: "/servicios/lavado-de-muebles-y-colchones-medellin" },
];

const revision = [
  "Escritorios y superficies sin polvo",
  "Vidrios y espejos sin marcas",
  "Baños desinfectados",
  "Pisos trapeados y secos",
  "Papeleras vacías",
  "Recepción lista para clientes",
];

const pasos = [
  { title: "Nos escribes", text: "Por WhatsApp o con el formulario. Nos cuentas qué espacio es y cuándo te sirve." },
  { title: "Visitamos y cotizamos", text: "Conocemos el lugar y te damos una propuesta clara, sin compromiso." },
  { title: "Limpiamos y revisamos", text: "Llegamos a la hora acordada y antes de irnos revisamos todo contigo." },
];

const segmentos = [
  {
    title: "Para empresas",
    text: "Oficinas, consultorios y edificios. Visita única, semanal o diaria.",
    href: "/empresas",
    cta: "Ver planes para empresas",
    icon: "oficinas",
    dark: true,
  },
  {
    title: "Para tu hogar",
    text: "Apartamentos y casas, lavado de sofás, colchones y alfombras.",
    href: "/servicios/lavado-de-muebles-y-colchones-medellin",
    cta: "Ver servicio de hogar",
    icon: "hogar",
    dark: false,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero: mensaje + cotizador rápido */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        {bannerImage && (
          <>
            <div className="photo absolute inset-0 -z-20" style={{ backgroundImage: `url(${bannerImage})` }} />
            <div className="absolute inset-0 -z-10 bg-navy/80" />
          </>
        )}
        <RisingBubbles />
        <Bubbles className="pointer-events-none absolute -right-24 -top-10 -z-10 w-[520px] md:w-[680px]" />
        <Bubbles className="pointer-events-none absolute -bottom-40 -left-32 -z-10 w-[420px] rotate-180 opacity-60" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:gap-14 md:pb-24 md:pt-20 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-[15px] text-gold">Limpieza de oficinas y hogares en Bello y Medellín</p>
            <h1 className="sheen mt-5 font-display text-[40px] leading-[1.04] tracking-[-0.01em] sm:text-6xl lg:text-[72px]">
              Que tu oficina hable bien de ti antes de que digas una palabra.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
              Personal uniformado, insumos de calidad y una revisión al final de cada visita.
            </p>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-white/85">
              {["Cotización sin compromiso", "Respuesta el mismo día", "Bello, Medellín y alrededores"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-4 text-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <QuickQuote />
        </div>
      </section>

      {/* Lo que limpiamos: franja celeste con íconos */}
      <section className="bg-sky">
        <ul className="mx-auto grid max-w-6xl grid-cols-3 gap-y-6 px-5 py-8 sm:grid-cols-6 md:py-10">
          {categorias.map((c) => (
            <li key={c.label}>
              <Link href={c.href} className="group flex flex-col items-center gap-2 text-center">
                <span className="grid size-16 place-items-center rounded-2xl bg-white transition-transform group-hover:-translate-y-0.5 md:size-20">
                  <ServiceIcon name={c.icon} className="size-11 md:size-14" />
                </span>
                <span className="text-[15px] font-medium text-navy">{c.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Empresas / Hogar */}
      <section className="mx-auto max-w-6xl px-5 pt-16 md:pt-24">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {segmentos.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className={`group relative isolate flex flex-col justify-between overflow-hidden rounded-2xl p-7 md:min-h-64 md:p-9 ${
                s.dark ? "bg-navy" : "bg-sky"
              }`}
            >
              {s.dark && <RisingBubbles count={8} scale={0.7} />}
              <ServiceIcon name={s.icon} light={s.dark} className="absolute -bottom-3 -right-3 size-36 opacity-90 transition-transform group-hover:scale-105 md:size-44" />
              <div className="relative max-w-[70%]">
                <h2 className={`font-display text-3xl md:text-4xl ${s.dark ? "text-white" : "text-navy"}`}>{s.title}</h2>
                <p className={`mt-3 max-w-sm text-lg leading-relaxed ${s.dark ? "text-white/75" : "text-slate"}`}>{s.text}</p>
              </div>
              <span className={`relative mt-8 inline-flex items-center gap-2 font-semibold ${s.dark ? "text-gold" : "text-navy group-hover:text-gold-ink"}`}>
                {s.cta}
                <svg viewBox="0 0 24 24" className="size-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display text-4xl leading-[1.1] text-navy md:text-5xl">Lo que hacemos</h2>
          <Link href="/servicios" className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-[6px] hover:text-gold-ink">
            Ver todos los servicios
          </Link>
        </div>
        <ul className="mt-10 grid border-t border-line md:mt-12 md:grid-cols-2 md:gap-x-16">
          {services.map((s) => (
            <li key={s.id} className="border-b border-line">
              <Link href={`/servicios/${s.slug}`} className="group flex items-center justify-between gap-5 py-5 md:py-6">
                <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-sky">
                  <ServiceIcon name={s.id} className="size-10" />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-[22px] text-navy group-hover:text-gold-ink md:text-2xl">{s.name}</span>
                  <span className="mt-1.5 block text-slate">{s.short}</span>
                </span>
                <svg viewBox="0 0 24 24" className="size-5 shrink-0 text-slate transition-transform group-hover:translate-x-1 group-hover:text-gold-ink" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Lavado de muebles y colchones: fotos */}
      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-4xl leading-[1.1] text-navy md:text-5xl">Lavado de muebles y colchones</h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate">
                Con máquinas de inyección y succión que sacan la suciedad de adentro y secan rápido.
              </p>
            </div>
            <Link href="/servicios/lavado-de-muebles-y-colchones-medellin" className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-[6px] hover:text-gold-ink">
              Ver el servicio
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {galeriaMuebles.map((g) => (
              <li key={g.src}>
                <figure>
                  <div className="photo aspect-[4/3] w-full overflow-hidden rounded-xl md:aspect-[4/5]" style={{ backgroundImage: `url(${g.src})` }} role="img" aria-label={g.alt} />
                  <figcaption className="mt-3 font-medium text-navy">{g.titulo}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Revisión de salida */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <RisingBubbles count={12} />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl leading-[1.1] md:text-5xl">Antes de irnos, revisamos todo</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
              Cada visita termina con una revisión de calidad. Si algo no está como se acordó, se arregla en ese momento.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md lg:rotate-[1.5deg]">
            <div className="rounded-xl bg-white p-7 text-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] md:p-9">
              <div className="flex items-baseline justify-between border-b border-line pb-4">
                <h3 className="font-display text-2xl text-navy">Revisión de salida</h3>
                <span className="text-sm text-slate">Cada visita</span>
              </div>
              <ul className="mt-5 space-y-3.5">
                {revision.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded border border-gold-ink/40 bg-gold/15 text-gold-ink">
                      <Check className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-end justify-between gap-4 border-t border-dashed border-line pt-5">
                <div>
                  <p className="font-display text-xl italic text-navy">Ofcasa Pro</p>
                  <p className="text-sm text-slate">Firma del supervisor</p>
                </div>
                <span className="grid size-14 place-items-center rounded-full border-2 border-gold font-display text-sm font-bold text-gold-ink">OPA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Antes y después (solo si hay fotos en lib/site.ts) */}
      {antesDespues.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="font-display text-4xl leading-[1.1] text-navy md:text-5xl">Antes y después</h2>
          <p className="mt-4 text-lg text-slate">Desliza la barra para ver la diferencia.</p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {antesDespues.map((a) => (
              <BeforeAfter key={a.titulo} {...a} />
            ))}
          </div>
        </section>
      )}

      {/* Por qué */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-display text-4xl leading-[1.1] text-navy md:text-5xl">Gente de confianza dentro de tu espacio</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate">
              Sabes quién entra, qué productos usa y que alguien revisa el resultado.
            </p>
          </div>
          <dl className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {promises.map((p) => (
              <div key={p.title} className="border-t-2 border-navy pt-5">
                <dt className="text-xl font-semibold text-navy">{p.title}</dt>
                <dd className="mt-2 leading-relaxed text-slate">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Proceso */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="font-display text-4xl leading-[1.1] text-navy md:text-5xl">Así funciona</h2>
        <ol className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-12">
          {pasos.map((p, i) => (
            <li key={p.title} className="flex gap-5 md:block">
              <span className="font-display text-5xl leading-none text-gold md:text-6xl">{i + 1}</span>
              <div>
                <h3 className="text-xl font-semibold text-navy md:mt-5">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-slate">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonios (solo si hay reales en lib/site.ts) */}
      {testimonios.length > 0 && <Testimonios items={testimonios} />}

      {/* Preguntas + zona */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-display text-4xl leading-[1.1] text-navy md:text-5xl">Preguntas frecuentes</h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-slate">
              Atendemos en Bello, Medellín y el Valle de Aburrá. ¿Otra duda?{" "}
              <Link href="/contacto" className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-[6px]">
                Escríbenos
              </Link>
              .
            </p>
          </div>
          <div className="border-t border-line">
            {faqs.slice(0, 4).map((f) => (
              <details key={f.q} className="border-b border-line">
                <summary className="flex min-h-14 items-center justify-between gap-4 py-4 text-lg font-medium text-navy">
                  {f.q}
                  <Plus className="chev size-5 shrink-0 text-gold-ink transition-transform" />
                </summary>
                <p className="pb-5 leading-relaxed text-slate">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <MapSection />

      <CtaBand />
    </>
  );
}
