import { Reveal, SectionLabel } from "./Reveal";

const items = [
  { k: "01", t: "Faster time-to-market", d: "Days instead of quarters. Beat your roadmap, not the other way around." },
  { k: "02", t: "Lower development costs", d: "Replace a six-figure build with a monthly subscription. Reinvest the difference." },
  { k: "03", t: "Professional design", d: "Editorial typography, considered motion, taste-led layouts — without hiring a studio." },
  { k: "04", t: "No technical expertise", d: "If you can write an email, you can run your Lumen site. No code, no jargon." },
  { k: "05", t: "Scalable infrastructure", d: "Built on global edge. Whether you serve 100 or 100 million, we don't flinch." },
];

export function Benefits() {
  return (
    <section className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel label="Why Lumen" />
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
              Compounding <em className="italic text-gradient">advantage.</em>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-[40ch]">
              Every benefit reinforces the next. Faster shipping unlocks more iteration, lower costs free up
              budget for growth, and a polished surface earns trust that converts.
            </p>
          </Reveal>
          <div>
            {items.map((b, i) => (
              <Reveal key={b.k} delay={i * 0.05}>
                <div className="grid grid-cols-[60px_1fr] gap-8 py-6 border-t border-border last:border-b">
                  <span className="text-xs uppercase tracking-widest text-violet-glow">{b.k}</span>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">{b.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-[52ch]">{b.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
