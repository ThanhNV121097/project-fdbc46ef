import { T } from "../editable";

export default function Visit() {
  return (
    <section id="visit" className="mx-auto max-w-page px-[var(--gutter)] py-20 border-t border-line grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
      <div>
        <T k="visit.heading" as="h2" className="text-[clamp(32px,4vw,48px)]" />
        <T k="visit.address" as="p" className="mt-5 text-lg text-ink-soft" />
        <T
          k="visit.cta.label"
          as="a"
          href="https://maps.google.com/?q=19+Duy+Tan,+Ha+Noi"
          className="mt-8 inline-block rounded-[var(--radius-pill)] border border-line px-7 py-3 text-ink"
        />
      </div>
      <div className="aspect-[16/10] rounded-[var(--radius)] bg-surface flex items-end p-5">
        <T k="visit.image.caption" as="span" className="text-sm text-ink-soft" />
      </div>
    </section>
  );
}
