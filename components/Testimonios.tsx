type Testimonio = { texto: string; nombre: string; lugar: string; estrellas?: number };

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-1 text-gold" aria-label={`${n} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={`size-5 ${i < n ? "" : "opacity-25"}`} fill="currentColor" aria-hidden="true">
          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t, hidden = false }: { t: Testimonio; hidden?: boolean }) {
  return (
    <li
      aria-hidden={hidden || undefined}
      className="mr-5 flex w-[300px] shrink-0 flex-col justify-between rounded-2xl bg-white p-7 sm:w-[380px]"
    >
      <div>
        <Stars n={t.estrellas ?? 5} />
        <blockquote className="mt-5 text-[17px] leading-relaxed text-ink">“{t.texto}”</blockquote>
      </div>
      <div className="mt-7 flex items-center gap-3">
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-navy font-display text-lg text-gold">
          {t.nombre.trim().charAt(0).toUpperCase()}
        </span>
        <span>
          <span className="block font-semibold text-navy">{t.nombre}</span>
          <span className="text-[15px] text-slate">{t.lugar}</span>
        </span>
      </div>
    </li>
  );
}

/* Carrusel continuo: las opiniones se deslizan solas todo el tiempo.
   Se pausa al pasar el mouse o al tocarlo para poder leer. */
export function Testimonios({ items }: { items: Testimonio[] }) {
  const segundos = items.length * 9;
  return (
    <section className="overflow-hidden bg-sky">
      <div className="mx-auto max-w-6xl px-5 pt-16 md:pt-24">
        <h2 className="font-display text-4xl leading-[1.1] text-navy md:text-5xl">Quiénes nos prefieren</h2>
        <p className="mt-3 text-lg text-slate">Clientes en El Poblado y alrededores.</p>
      </div>

      <div className="marquee group mt-10" style={{ ["--marquee-duration" as string]: `${segundos}s` }}>
        <ul className="marquee-track flex w-max py-2" aria-label="Opiniones de clientes">
          {items.map((t) => (
            <Card key={"a" + t.nombre} t={t} />
          ))}
          {/* Copia para que el movimiento sea continuo, sin saltos */}
          {items.map((t) => (
            <Card key={"b" + t.nombre} t={t} hidden />
          ))}
        </ul>
      </div>

      <p className="mx-auto max-w-6xl px-5 pb-16 pt-8 text-center text-lg font-medium text-navy md:pb-24">
        Cada servicio habla por nosotros.
      </p>
    </section>
  );
}
