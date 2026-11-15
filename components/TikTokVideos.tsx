"use client";

import { useEffect, useRef } from "react";
import { WhatsAppIcon } from "./Icons";
import { RisingBubbles } from "./RisingBubbles";
import { site, videosTikTok, waLink } from "@/lib/site";

const params = "music_info=0&description=0&rel=0&force_muted=1&volume_control=0&loop=1";

function send(frame: HTMLIFrameElement | null, type: string) {
  frame?.contentWindow?.postMessage({ type, "x-tiktok-player": true }, "*");
}

/* Un video de TikTok que se reproduce solo (sin sonido) cuando aparece en pantalla
   y se pausa cuando la persona sigue bajando. */
function AutoVideo({ id, titulo, tilt }: { id: string; titulo: string; tilt: string }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    let visible = false;
    let ready = false;

    const onMessage = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow) return;
      const data = typeof e.data === "string" ? safeParse(e.data) : e.data;
      if (data?.type === "onPlayerReady") {
        ready = true;
        if (visible) {
          send(frame.current, "mute");
          send(frame.current, "play");
        }
      }
      // Al terminar, vuelve a empezar
      if (data?.type === "onStateChange" && data?.value === 0) send(frame.current, "play");
    };
    window.addEventListener("message", onMessage);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (!ready) return;
        send(frame.current, "mute");
        send(frame.current, visible ? "play" : "pause");
      },
      { threshold: 0.5 },
    );
    io.observe(el);

    // Respaldo por si el reproductor no avisa que está listo
    const t = window.setTimeout(() => {
      ready = true;
      if (visible) {
        send(frame.current, "mute");
        send(frame.current, "play");
      }
    }, 3000);

    return () => {
      window.removeEventListener("message", onMessage);
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  return (
    <figure className={`w-[72%] shrink-0 snap-center sm:w-[46%] md:w-[270px] ${tilt}`}>
      <div ref={box} className="rounded-[2.4rem] bg-navy-deep p-2.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-gold/40">
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.9rem] bg-navy">
          <span className="absolute left-1/2 top-2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/40" aria-hidden="true" />
          <iframe
            ref={frame}
            src={`https://www.tiktok.com/player/v1/${id}?${params}`}
            title={`Video: ${titulo}`}
            className="block h-full w-full"
            loading="lazy"
            allow="autoplay; fullscreen; encrypted-media"
          />
        </div>
      </div>
      <figcaption className="mt-4 flex justify-center">
        <span className="rounded-full bg-gold px-4 py-1.5 text-[15px] font-semibold text-navy-deep">{titulo}</span>
      </figcaption>
    </figure>
  );
}

function safeParse(s: string) {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}

const tilts = ["md:-rotate-3", "md:rotate-2 md:translate-y-8", "md:-rotate-1"];

/* Sección "Así trabajamos": videos reales del equipo, en marcos tipo celular sobre azul con burbujas. */
export function TikTokVideos({ compact = false }: { compact?: boolean }) {
  if (videosTikTok.length === 0) return null;
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <RisingBubbles count={14} />
      <div className={`mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.3fr] ${compact ? "py-16 md:py-20" : "py-16 md:py-24"}`}>
        <div>
          <p className="text-[15px] text-gold">Directo desde nuestro TikTok</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.1] md:text-5xl">Así trabajamos</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
            Videos reales de nuestro equipo en casa de clientes. Así queda tu sofá, tu colchón o tu oficina.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink("Hola Ofcasa Pro, vi sus videos y quiero cotizar.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-wa px-6 font-semibold text-white transition-colors hover:bg-[#158a45]"
            >
              <WhatsAppIcon className="size-5" />
              Quiero que vengan
            </a>
            <a
              href={site.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/30 px-6 font-semibold text-white transition-colors hover:border-white"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
                <path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.2v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.6a5.8 5.8 0 1 0 5 5.8V9.1a7.4 7.4 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5z" />
              </svg>
              Ver más en TikTok
            </a>
          </div>
        </div>
        <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-10 md:mx-0 md:justify-center md:gap-8 md:overflow-visible md:px-0">
          {videosTikTok.map((v, i) => (
            <AutoVideo key={v.id} id={v.id} titulo={v.titulo} tilt={tilts[i % tilts.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}
