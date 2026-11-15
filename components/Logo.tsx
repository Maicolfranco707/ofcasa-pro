import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Ofcasa Pro, ir al inicio">
      <span className="grid size-11 place-items-center rounded-full border-2 border-gold bg-navy font-display text-[15px] font-bold tracking-wide text-gold">
        OPA
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[22px] font-semibold ${light ? "text-white" : "text-navy"}`}>
          Ofcasa Pro
        </span>
        <span className={`mt-1 text-[12px] ${light ? "text-white/70" : "text-slate"}`}>
          Aseo en El Poblado
        </span>
      </span>
    </Link>
  );
}
