import { T, useList } from "./editable";
import Hero from "./components/Hero";
import Accessories from "./components/Accessories";
import Visit from "./components/Visit";

export default function App() {
  const links = useList<{ label: string; href: string }>("nav.links");
  return (
    <div className="min-h-screen bg-ground text-ink font-body">
      <header className="mx-auto max-w-page px-[var(--gutter)] py-6 flex items-center justify-between">
        <T k="site.name" as="a" href="/" className="font-display text-lg" />
        <nav className="flex items-center gap-6 text-sm">
          {links.map((l, i) => <T key={i} k={`nav.links.${i}.label`} as="a" href={l.href} />)}
          <T
            k="nav.cta.label"
            as="a"
            href="https://maps.google.com/?q=19+Duy+Tan,+Ha+Noi"
            className="rounded-[var(--radius-pill)] bg-accent px-4 py-2 text-accent-ink"
          />
        </nav>
      </header>
      <main>
        <Hero />
        <Accessories />
        <Visit />
      </main>
      <footer className="mx-auto max-w-page px-[var(--gutter)] py-12 text-sm text-ink-soft border-t border-line">
        <T k="footer.line" />
      </footer>
    </div>
  );
}
