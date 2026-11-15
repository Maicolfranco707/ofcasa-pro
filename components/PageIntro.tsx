import Link from "next/link";
import { Bubbles } from "./Bubbles";
import { RisingBubbles } from "./RisingBubbles";
import { ServiceIcon } from "./ServiceIcon";

/* Encabezado de las páginas internas: azul con burbujas, ruta de navegación
   e íconos ilustrados a la derecha. */
export function PageIntro({
  title,
  text,
  crumb,
  icons = ["oficinas", "hogar", "muebles"],
}: {
  title: string;
  text: string;
  crumb: string;
  icons?: string[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <RisingBubbles count={12} />
      <Bubbles className="pointer-events-none absolute -right-28 -top-16 -z-10 w-[460px] opacity-80 md:w-[560px]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-8 md:pb-20 md:pt-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <nav aria-label="Ruta" className="text-[15px] text-white/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="inline-flex min-h-11 items-center text-white/70 hover:text-white">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                {crumb}
              </li>
            </ol>
          </nav>
          <h1 className="mt-6 max-w-3xl font-display text-[42px] leading-[1.04] sm:text-5xl md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{text}</p>
        </div>
        <div className="hidden justify-self-end lg:block" aria-hidden="true">
          <div className="grid grid-cols-2 gap-4">
            {icons.slice(0, 3).map((n, i) => (
              <span
                key={n}
                className={`grid size-36 place-items-center rounded-[2rem] bg-white/[0.07] ring-1 ring-white/10 ${
                  i === 2 ? "col-span-2 justify-self-center" : ""
                } ${i === 1 ? "translate-y-6" : ""}`}
              >
                <ServiceIcon name={n} light className="size-20" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
