import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-32">
      <h1 className="font-display text-5xl text-navy">Esta página no existe</h1>
      <p className="mt-4 text-lg text-slate">Puede que el enlace esté mal escrito o que la página se haya movido.</p>
      <Link href="/" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-navy px-6 font-semibold text-white">
        Volver al inicio
      </Link>
    </section>
  );
}
