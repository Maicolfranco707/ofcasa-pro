import { site, videosTikTok } from "@/lib/site";

/* Videos reales de TikTok del equipo trabajando. Se cargan solo cuando la persona llega a la sección. */
export function TikTokVideos({ compact = false }: { compact?: boolean }) {
  if (videosTikTok.length === 0) return null;
  return (
    <section className={compact ? "bg-mist" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl leading-[1.1] text-navy md:text-5xl">Así trabajamos</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate">Videos reales de nuestro equipo en casa de clientes.</p>
          </div>
          <a
            href={site.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-navy underline decoration-gold decoration-2 underline-offset-[6px] hover:text-gold-ink"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
              <path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.2v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.6a5.8 5.8 0 1 0 5 5.8V9.1a7.4 7.4 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5z" />
            </svg>
            Ver más en TikTok
          </a>
        </div>
        <ul className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible">
          {videosTikTok.map((v) => (
            <li key={v.id} className="w-[78%] shrink-0 snap-start sm:w-[55%] md:w-[300px]">
              <figure>
                <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl bg-navy">
                  <iframe
                    src={`https://www.tiktok.com/player/v1/${v.id}?music_info=0&description=0&rel=0&force_muted=1&volume_control=0`}
                    title={`Video: ${v.titulo}`}
                    className="block h-full w-full"
                    loading="lazy"
                    allow="fullscreen; encrypted-media"
                    allowFullScreen
                  />
                </div>
                <figcaption className="mt-3 font-medium text-navy">{v.titulo}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
