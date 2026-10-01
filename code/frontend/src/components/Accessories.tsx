import { T, useList } from "../editable";

export default function Accessories() {
  const items = useList<{ name: string; detail: string }>("accessories.items");
  return (
    <section id="accessories" className="mx-auto max-w-page px-[var(--gutter)] py-20 border-t border-line">
      <T k="accessories.heading" as="h2" className="text-[clamp(32px,4vw,48px)]" />
      <ul className="mt-10">
        {items.map((_, i) => (
          <li key={i} className="grid gap-2 md:grid-cols-[1fr_2fr] py-6 border-t border-line first:border-t-0 md:py-8">
            <T k={`accessories.items.${i}.name`} as="h3" className="text-2xl" />
            <T k={`accessories.items.${i}.detail`} as="p" className="text-ink-soft max-w-[52ch]" />
          </li>
        ))}
      </ul>
    </section>
  );
}
