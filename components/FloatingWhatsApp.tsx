import { WhatsAppIcon } from "./Icons";
import { waLink } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 hidden size-14 md:grid place-items-center rounded-full bg-wa text-white shadow-[0_8px_24px_rgba(9,28,48,0.28)] transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
