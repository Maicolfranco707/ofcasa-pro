/* Burbujas que suben despacio por el fondo de las secciones azules, como espuma de limpieza.
   Solo CSS (sin JavaScript). Suben lo que mida la sección, sea un banner o una tarjeta.
   Se ocultan si el usuario prefiere menos movimiento. */

const all = [
  { left: 4, size: 18, dur: 14, delay: 0 },
  { left: 12, size: 42, dur: 19, delay: 3 },
  { left: 21, size: 12, dur: 11, delay: 7 },
  { left: 29, size: 28, dur: 16, delay: 1 },
  { left: 37, size: 16, dur: 13, delay: 9 },
  { left: 46, size: 54, dur: 22, delay: 5 },
  { left: 54, size: 20, dur: 15, delay: 11 },
  { left: 61, size: 34, dur: 18, delay: 2 },
  { left: 69, size: 14, dur: 12, delay: 6 },
  { left: 76, size: 46, dur: 21, delay: 8 },
  { left: 83, size: 22, dur: 14, delay: 4 },
  { left: 90, size: 30, dur: 17, delay: 10 },
  { left: 96, size: 16, dur: 13, delay: 12 },
  { left: 8, size: 26, dur: 18, delay: 13 },
  { left: 50, size: 12, dur: 10, delay: 14 },
  { left: 72, size: 18, dur: 15, delay: 15 },
];

export function RisingBubbles({ count = 16, scale = 1 }: { count?: number; scale?: number }) {
  const step = all.length / count;
  const list = Array.from({ length: count }, (_, i) => all[Math.floor(i * step)]);
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {list.map((b, i) => (
        <span
          key={i}
          className="bubble-lane"
          style={{
            left: `${b.left}%`,
            animationDuration: `${b.dur * (0.6 + 0.4 * scale)}s`,
            animationDelay: `-${b.delay}s`,
          }}
        >
          <span className="bubble" style={{ width: b.size * scale, height: b.size * scale }} />
        </span>
      ))}
    </div>
  );
}
