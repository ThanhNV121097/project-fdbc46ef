import { T } from "../editable";

export default function Hero() {
  return (
    <section className="mx-auto max-w-page px-[var(--gutter)] pt-16 pb-20 grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-end">
      <div>
        <T
          k="hero.headline"
          as="h1"
          className="text-[clamp(48px,8vw,112px)] max-w-[12ch]"
        />
        <T k="hero.sub" as="p" className="mt-6 text-lg text-ink-soft max-w-[42ch]" />
        <T
          k="hero.cta.label"
          as="a"
          href="#accessories"
          className="mt-10 inline-block rounded-[var(--radius-pill)] bg-accent px-7 py-3 text-accent-ink font-medium"
        />
      </div>
      <div className="aspect-[4/5] rounded-[var(--radius)] bg-surface flex items-end p-5">
        <T k="hero.image.caption" as="span" className="text-sm text-ink-soft" />
      </div>
    </section>
  );
}
