import { WhatsAppIcon } from "./Icons";
import { site, waLink } from "@/lib/site";

/* Barra fija en celular: las dos acciones que más importan, siempre a un toque. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a
        href={`tel:+${site.phoneIntl}`}
        className="flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-navy font-semibold text-navy"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
        Llamar
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-wa font-semibold text-white"
      >
        <WhatsAppIcon className="size-5" />
        WhatsApp
      </a>
    </div>
  );
}
