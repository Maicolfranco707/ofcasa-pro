import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Plus, WhatsAppIcon } from "@/components/Icons";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { RisingBubbles } from "@/components/RisingBubbles";
import { ServiceIcon } from "@/components/ServiceIcon";
import { TikTokVideos } from "@/components/TikTokVideos";
import { AntesDespuesSection } from "@/components/AntesDespuesSection";
import { faqs, galeriaMuebles, serviceBySlug, services, site, waLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    alternates: { canonical: `/servicios/${s.slug}` },
    openGraph: { title: `${s.seoTitle} | Ofcasa Pro`, description: s.seoDescription, url: `/servicios/${s.slug}` },
  };
}

const pasos = [
  { title: "Nos escribes", text: "Por WhatsApp o con el formulario. Nos cuentas qué necesitas y cuándo te sirve." },
  { title: "Visitamos y cotizamos", text: "Conocemos el espacio y te damos una propuesta clara, sin compromiso." },
  { title: "Limpiamos y revisamos", text: "Llegamos a la hora acordada y antes de irnos revisamos el resultado contigo." },
];

export default async function ServicioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();

  const otros = services.filter((o) => o.id !== s.id);
  const mensaje = `Hola Ofcasa Pro, quiero cotizar: ${s.name}.`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          serviceType: s.name,
          description: s.seoDescription,
          url: `${site.url}/servicios/${s.slug}`,
          areaServed: [
            { "@type": "City", name: "Bello" },
            { "@type": "City", name: "Medellín" },
            { "@type": "Place", name: "Valle de Aburrá" },
          ],
          provider: {
            "@type": "LocalBusiness",
            name: site.name,
            telephone: `+${site.phoneIntl}`,
            url: site.url,
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
            { "@type": "ListItem", position: 2, name: "Servicios", item: `${site.url}/servicios` },
            { "@type": "ListItem", position: 3, name: s.name, item: `${site.url}/servicios/${s.slug}` },
          ],
        }}
      />

      {/* Encabezado */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <RisingBubbles count={12} />
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-8 md:pb-24 md:pt-10">
          <nav aria-label="Ruta" className="text-[15px] text-white/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-white">Inicio</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/servicios" className="text-white/70 hover:text-white">Servicios</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">{s.name}</li>
            </ol>
          </nav>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h1 className="font-display text-[40px] leading-[1.05] sm:text-5xl lg:text-6xl">{s.h1}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{s.intro[0]}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={waLink(mensaje)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-13 items-center gap-2 rounded-full bg-wa px-7 font-semibold text-white transition-colors hover:bg-[#158a45]"
                >
                  <WhatsAppIcon className="size-5" />
                  Cotizar por WhatsApp
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex min-h-13 items-center rounded-full border border-white/30 px-6 font-semibold text-white transition-colors hover:border-white"
                >
                  Reservar una visita
                </Link>
              </div>
            </div>
            <div className="hidden justify-self-center lg:block">
              <span className="grid size-56 place-items-center rounded-[2.5rem] bg-white/[0.07] ring-1 ring-white/10">
                <ServiceIcon name={s.id} light className="size-36" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Fotos (solo lavado de muebles) */}
      {s.id === "hogar" && (
        <section className="bg-sky">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-10 md:grid-cols-4 md:gap-5 md:py-14">
            {galeriaMuebles.map((g) => (
              <li key={g.src}>
                <figure>
                  <div className="photo aspect-[4/3] rounded-xl" style={{ backgroundImage: `url(${g.src})` }} role="img" aria-label={g.alt} />
                  <figcaption className="mt-3 font-medium text-navy">{g.titulo}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      )}

      {s.id === "hogar" && <AntesDespuesSection tone="white" />}
      {s.id === "hogar" && <TikTokVideos />}

      {/* Detalle */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="font-display text-4xl leading-[1.1] text-navy md:text-5xl">Cómo lo hacemos</h2>
          {s.intro.slice(1).map((p) => (
            <p key={p} className="mt-6 max-w-xl text-lg leading-relaxed text-slate">{p}</p>
          ))}
          <p className="mt-8 rounded-xl bg-mist px-5 py-4 text-[16px] text-ink">
            <span className="font-semibold text-navy">Ideal para:</span> {s.goodFor}
          </p>
        </div>
        <div className="self-start rounded-2xl bg-sky p-7 md:p-9">
          <h2 className="text-xl font-semibold text-navy">Qué incluye</h2>
          <ul className="mt-5 space-y-3.5">
            {s.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[17px]">
                <Check className="mt-1 size-4 shrink-0 text-gold-ink" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={waLink(mensaje)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex min-h-12 items-center justify-center rounded-full bg-navy font-semibold text-white transition-colors hover:bg-navy-deep"
          >
            Pedir cotización
          </a>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
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
        </div>
      </section>

      {/* Preguntas */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1fr_1.4fr]">
        <h2 className="font-display text-4xl leading-[1.1] text-navy md:text-5xl">Preguntas frecuentes</h2>
        <div className="border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="border-b border-line">
              <summary className="flex min-h-14 items-center justify-between gap-4 py-4 text-lg font-medium text-navy">
                {f.q}
                <Plus className="chev size-5 shrink-0 text-gold-ink transition-transform" />
              </summary>
              <p className="pb-5 leading-relaxed text-slate">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Otros servicios */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="font-display text-3xl text-navy md:text-4xl">Otros servicios</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otros.map((o) => (
              <li key={o.id}>
                <Link href={`/servicios/${o.slug}`} className="group flex items-center gap-4 rounded-xl border border-line p-4 hover:border-navy">
                  <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-sky">
                    <ServiceIcon name={o.id} className="size-9" />
                  </span>
                  <span className="font-medium text-navy group-hover:text-gold-ink">{o.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
