"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./Icons";
import { nav, site, waLink } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-[15px] font-medium transition-colors hover:text-navy ${
                  active ? "text-navy" : "text-slate"
                }`}
              >
                {item.label}
                {active && <span className="absolute inset-x-0 -bottom-[13px] h-0.5 bg-gold" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-navy px-5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-deep sm:inline-flex"
          >
            <WhatsAppIcon className="size-[18px]" />
            {site.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid size-11 place-items-center rounded-full border border-line text-navy lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-movil" className="border-t border-line bg-white px-5 pb-6 pt-2 lg:hidden" aria-label="Menú móvil">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block border-b border-line py-4 text-lg ${
                    pathname === item.href ? "font-semibold text-navy" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy font-semibold text-white"
          >
            <WhatsAppIcon className="size-5" />
            Escribir por WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
