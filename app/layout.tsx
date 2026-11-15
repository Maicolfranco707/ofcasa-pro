import type { Metadata } from "next";
import { Albert_Sans, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileBar } from "@/components/MobileBar";

const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-bodoni", display: "swap" });
const albert = Albert_Sans({ subsets: ["latin"], variable: "--font-albert", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ofcasapro.com"),
  title: {
    default: "Ofcasa Pro | Limpieza de oficinas y hogares en El Poblado, Medellín",
    template: "%s | Ofcasa Pro",
  },
  description:
    "Limpieza de oficinas, consultorios y hogares en El Poblado, Medellín. Personal uniformado y revisión de calidad en cada visita. Cotiza por WhatsApp: 304 459 9438.",
  openGraph: {
    title: "Ofcasa Pro | Limpieza de oficinas y hogares en El Poblado",
    description: "Personal uniformado, puntual y con revisión de calidad en cada visita. Cotiza por WhatsApp.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bodoni.variable} ${albert.variable}`}>
      <body className="pb-[72px] md:pb-0">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBar />
      </body>
    </html>
  );
}
