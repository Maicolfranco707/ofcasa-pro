export function PageIntro({ title, text }: { title: string; text: string }) {
  return (
    <section className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-20 md:pb-20 md:pt-24">
        <h1 className="max-w-3xl font-display text-5xl leading-[1.04] text-navy md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate md:text-xl">{text}</p>
      </div>
    </section>
  );
}
