import { Reveal, SectionLabel } from "./Reveal";

const pains = [
  { p: "Agencies quote 6 months", s: "We ship in 3 days" },
  { p: "Templates feel generic", s: "Editorial-grade by default" },
  { p: "Devs are expensive", s: "Zero engineers needed" },
  { p: "Iteration is slow", s: "Update copy in seconds" },
];

export function Problem() {
  return (
    <section className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel label="The Problem" />
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] tracking-tight">
              The web is full of <em className="italic text-muted-foreground">unfinished</em> websites.
            </h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-[44ch]">
              Most teams know what they want. Few have the months — or budget — to get there. Lumen collapses the
              gap between brief and deployment.
            </p>
          </Reveal>
          <div className="divide-y divide-border border-y border-border">
            {pains.map((row, i) => (
              <Reveal key={row.p} delay={i * 0.06}>
                <div className="grid grid-cols-2 py-6 group">
                  <div className="text-muted-foreground line-through decoration-violet/40">{row.p}</div>
                  <div className="text-foreground font-medium">{row.s}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
