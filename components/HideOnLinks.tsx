"use client";

import { usePathname } from "next/navigation";

/* Oculta el menú, el footer y los botones flotantes en la página /links (link-in-bio). */
export function HideOnLinks({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/links") return null;
  return <>{children}</>;
}
