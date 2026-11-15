/* Íconos ilustrados propios para cada servicio. Trazo navy con acento dorado y celeste. */
type Props = { name: string; className?: string; light?: boolean };

const G = "#c9a24e";
const S = "#7fbfe8";

export function ServiceIcon({ name, className = "size-14", light = false }: Props) {
  const N = light ? "#ffffff" : "#0e2a47";
  const common = { fill: "none", strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {name === "oficinas" && (
        <g {...common}>
          <rect x="14" y="10" width="24" height="44" rx="2" fill={S} fillOpacity="0.25" stroke={N} />
          <path d="M38 24h12v30H38" stroke={N} />
          <path d="M20 18h4M28 18h4M20 26h4M28 26h4M20 34h4M28 34h4M43 31h3M43 38h3M43 45h3" stroke={N} />
          <path d="M23 54v-8h6v8M8 54h48" stroke={N} />
          <path d="M50 8l1.5 3.5L55 13l-3.5 1.5L50 18l-1.5-3.5L45 13l3.5-1.5z" fill={G} stroke="none" />
        </g>
      )}
      {name === "profunda" && (
        <g {...common}>
          <path d="M24 22h12l4 8v24H20V30z" fill={S} fillOpacity="0.25" stroke={N} />
          <path d="M26 22v-6h8v6M34 16h8l4 4M20 38h20" stroke={N} />
          <circle cx="48" cy="26" r="1.6" fill={N} stroke="none" />
          <circle cx="53" cy="22" r="1.6" fill={N} stroke="none" />
          <circle cx="53" cy="30" r="1.6" fill={N} stroke="none" />
          <path d="M12 10l1.5 3.5L17 15l-3.5 1.5L12 20l-1.5-3.5L7 15l3.5-1.5z" fill={G} stroke="none" />
          <path d="M50 42l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" fill={G} stroke="none" />
        </g>
      )}
      {name === "mantenimiento" && (
        <g {...common}>
          <rect x="10" y="14" width="44" height="40" rx="4" fill={S} fillOpacity="0.25" stroke={N} />
          <path d="M10 24h44M22 9v9M42 9v9" stroke={N} />
          <path d="M20 33l3 3 5-6M36 33l3 3 5-6M20 45l3 3 5-6" stroke={N} />
          <circle cx="40" cy="45" r="3" fill={G} stroke="none" />
        </g>
      )}
      {name === "vidrios-pisos" && (
        <g {...common}>
          <rect x="12" y="8" width="40" height="34" rx="2" fill={S} fillOpacity="0.25" stroke={N} />
          <path d="M32 8v34M12 25h40" stroke={N} />
          <path d="M17 14l6-0M17 19l10-5M37 14l9-0" stroke="#ffffff" strokeWidth="2.5" />
          <path d="M8 50h48M14 56h36" stroke={N} />
          <path d="M50 46l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" fill={G} stroke="none" />
        </g>
      )}
      {name === "consultorios" && (
        <g {...common}>
          <path d="M12 26L32 10l20 16v28H12z" fill={S} fillOpacity="0.25" stroke={N} />
          <rect x="24" y="28" width="16" height="16" rx="3" fill="#ffffff" stroke={N} />
          <path d="M32 32v8M28 36h8" stroke={G} strokeWidth="2.8" />
          <path d="M8 54h48" stroke={N} />
        </g>
      )}
      {name === "hogar" && (
        <g {...common}>
          <path d="M10 30L32 12l22 18" stroke={N} />
          <path d="M16 26v28h32V26" fill={S} fillOpacity="0.25" stroke={N} />
          <path d="M22 54V40h20v14" stroke={N} />
          <path d="M22 40c0-4 3-6 10-6s10 2 10 6" stroke={N} />
          <path d="M46 10l1.5 3.5L51 15l-3.5 1.5L46 20l-1.5-3.5L41 15l3.5-1.5z" fill={G} stroke="none" />
        </g>
      )}
      {name === "alfombras" && (
        <g {...common}>
          <rect x="12" y="14" width="40" height="36" rx="2" fill={S} fillOpacity="0.25" stroke={N} />
          <rect x="19" y="21" width="26" height="22" rx="1" stroke={N} />
          <path d="M16 10v4M24 10v4M32 10v4M40 10v4M48 10v4M16 50v4M24 50v4M32 50v4M40 50v4M48 50v4" stroke={N} />
          <circle cx="32" cy="32" r="3" fill={G} stroke="none" />
        </g>
      )}
      {name === "muebles" && (
        <g {...common}>
          <path d="M16 30v-8a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v8" fill={S} fillOpacity="0.25" stroke={N} />
          <path d="M10 34a4 4 0 0 1 8 0v6h28v-6a4 4 0 0 1 8 0v12H10z" fill={S} fillOpacity="0.25" stroke={N} />
          <path d="M14 46v6M50 46v6" stroke={N} />
          <path d="M48 6l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" fill={G} stroke="none" />
        </g>
      )}
    </svg>
  );
}
