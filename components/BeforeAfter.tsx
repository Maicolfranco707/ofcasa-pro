"use client";

import { useState } from "react";

/* Comparador antes/después: se arrastra la barra para ver el cambio. */
export function BeforeAfter({ titulo, antes, despues }: { titulo: string; antes: string; despues: string }) {
  const [pos, setPos] = useState(50);
  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-mist select-none">
        <div className="photo absolute inset-0" style={{ backgroundImage: `url(${despues})` }} />
        <div className="photo absolute inset-0" style={{ backgroundImage: `url(${antes})`, clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-navy shadow">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
            </svg>
          </span>
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-navy/85 px-3 py-1 text-sm text-white">Antes</span>
        <span className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-sm text-navy">Después</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Comparar antes y después: ${titulo}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 text-[15px] text-slate">{titulo}</figcaption>
    </figure>
  );
}
