import type { Metadata } from "next";
import { Albert_Sans, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileBar } from "@/components/MobileBar";
import { JsonLd } from "@/components/JsonLd";
import { services, site } from "@/lib/site";

const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-bodoni", display: "swap" });
const albert = Albert_Sans({ subsets: ["latin"], variable: "--font-albert", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ofcasa-pro.vercel.app"),
  title: {
    default: "Ofcasa Pro | Limpieza de oficinas y hogares en Bello y Medellín",
    template: "%s | Ofcasa Pro",
  },
  description:
    "Limpieza de oficinas, consultorios y hogares en Bello y Medellín. Lavado de muebles y colchones. Personal uniformado y revisión de calidad en cada visita. Cotiza por WhatsApp: 304 459 9438.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ofcasa Pro | Limpieza de oficinas y hogares en Bello y Medellín",
    description: "Personal uniformado, puntual y con revisión de calidad en cada visita. Cotiza por WhatsApp.",
    locale: "es_CO",
    type: "website",
    siteName: "Ofcasa Pro",
    url: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bodoni.variable} ${albert.variable}`}>
      <body className="pb-[72px] md:pb-0">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">
          Saltar al contenido
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${site.url}/#negocio`,
            name: site.name,
            description:
              "Limpieza de oficinas, consultorios y hogares, y lavado de muebles y colchones en Bello, Medellín y el Valle de Aburrá.",
            url: site.url,
            telephone: `+${site.phoneIntl}`,
            image: `${site.url}/opengraph-image.jpg`,
            logo: `${site.url}/icon.png`,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address,
              addressLocality: site.city,
              addressRegion: "Antioquia",
              addressCountry: "CO",
            },
            hasMap: site.mapsUrl,
            areaServed: [
              { "@type": "City", name: "Bello" },
              { "@type": "City", name: "Medellín" },
              { "@type": "Place", name: "Valle de Aburrá" },
            ],
            sameAs: [site.social.instagram, site.social.tiktok, site.social.facebook],
            makesOffer: services.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.name, url: `${site.url}/servicios/${s.slug}` },
            })),
          }}
        />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBar />
      </body>
    </html>
  );
}
