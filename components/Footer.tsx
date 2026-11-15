import Link from "next/link";
import { Logo } from "./Logo";
import { RisingBubbles } from "./RisingBubbles";
import { nav, services, site, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-navy-deep text-white/80">
      <RisingBubbles count={10} scale={0.8} />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_1.2fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo light />
          <p className="mt-5 leading-relaxed">
            Limpieza de oficinas, consultorios y hogares en Bello, Medellín y el Valle de Aburrá.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-white">Servicios</h2>
          <ul className="mt-4 space-y-3">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={`/servicios/${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg text-white">Páginas</h2>
          <ul className="mt-4 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg text-white">Contacto</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {site.address}, {site.city}
              </a>
            </li>
            <li>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                TikTok
              </a>
            </li>
            <li>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-white/60">
          © {new Date().getFullYear()} Ofcasa Pro. Medellín, Colombia.
        </p>
      </div>
    </footer>
  );
}
