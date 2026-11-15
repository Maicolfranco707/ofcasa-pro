/* Decoración del banner: burbujas y destellos, como espuma de limpieza. Estática. */
export function Bubbles({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" fill="none">
      <circle cx="300" cy="90" r="70" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="2" />
      <circle cx="275" cy="68" r="14" fill="#ffffff" fillOpacity="0.10" />
      <circle cx="170" cy="250" r="44" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="2" />
      <circle cx="156" cy="236" r="8" fill="#ffffff" fillOpacity="0.10" />
      <circle cx="350" cy="300" r="28" stroke="#7fbfe8" strokeOpacity="0.35" strokeWidth="2" />
      <circle cx="90" cy="120" r="18" stroke="#7fbfe8" strokeOpacity="0.3" strokeWidth="2" />
      <circle cx="240" cy="360" r="10" fill="#7fbfe8" fillOpacity="0.25" />
      <path d="M360 170l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#c9a24e" fillOpacity="0.9" />
      <path d="M60 300l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#c9a24e" fillOpacity="0.7" />
      <path d="M210 40l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" fill="#ffffff" fillOpacity="0.6" />
    </svg>
  );
}
