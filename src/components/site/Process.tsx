import { Reveal, SectionLabel } from "./Reveal";

const steps = [
  { n: "01", t: "Tell us your requirements", d: "Brief us in plain language — goals, audience, references. Five minutes is plenty." },
  { n: "02", t: "AI generates your website", d: "Our engine drafts structure, copy, layout, and visuals tailored to your brand." },
  { n: "03", t: "Customize & launch", d: "Refine in our visual editor or hand off to your team. Deploy to the edge in one click." },
  { n: "04", t: "Scale your business", d: "Iterate weekly, A/B test, plug in integrations. Lumen grows with you." },
];

export function Process() {
  return (
    <section id="process" className="py-32 border-t border-border bg-card/20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel label="How It Works" />
        <Reveal>
          <h2 className="font-display text-5xl md:text-6xl tracking-tight max-w-[16ch] leading-[0.95]">
            From brief to <em className="italic text-gradient">live</em> in four moves.
          </h2>
        </Reveal>
        <div className="mt-24 space-y-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="grid md:grid-cols-[120px_1fr_1fr] gap-8 items-baseline py-8 border-t border-border">
                <span className="font-display text-6xl text-violet-glow/60">{s.n}</span>
                <h3 className="font-display text-3xl md:text-4xl tracking-tight">{s.t}</h3>
                <p className="text-muted-foreground max-w-[44ch] leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
