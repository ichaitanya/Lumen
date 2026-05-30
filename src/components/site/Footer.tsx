const cols = [
  {
    title: "Product",
    links: ["Features", "Showcase", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Manifesto", "Customers", "Careers", "Press"],
  },
  {
    title: "Resources",
    links: ["Docs", "Templates", "Community", "Support", "Status"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div className="max-w-[34ch]">
            <div className="flex items-center gap-2.5">
              <span className="size-6 rounded-md bg-gradient-to-br from-violet-glow to-violet" />
              <span className="font-display text-xl">Lumen</span>
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              The precision engine for modern web publishing. Built for those who demand more from their
              digital presence.
            </p>
            <p className="mt-8 text-sm">hello@lumen.studio</p>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="flex flex-col gap-4">
              <span className="text-[11px] uppercase tracking-widest text-muted-foreground">{c.title}</span>
              {c.links.map((l) => (
                <a key={l} href="#" className="text-sm hover:text-violet-glow transition-colors">
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row gap-6 items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            &copy; 2026 Lumen Engine. All rights reserved.
          </p>
          <div className="flex gap-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="mt-16 overflow-hidden">
          <p className="font-display text-[22vw] leading-none text-foreground/[0.04] tracking-tighter select-none">
            Lumen
          </p>
        </div>
      </div>
    </footer>
  );
}
