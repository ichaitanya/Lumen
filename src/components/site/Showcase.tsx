import { Reveal, SectionLabel } from "./Reveal";
import show1 from "@/assets/showcase-1.jpg";
import show2 from "@/assets/showcase-2.jpg";
import { ArrowUpRight } from "lucide-react";

const cases = [
  { img: show1, name: "Vertex Analytics", tag: "SaaS Dashboard", time: "Shipped in 3 days" },
  { img: show2, name: "Bureau Noir", tag: "Agency Portfolio", time: "Shipped in 48 hours" },
];

export function Showcase() {
  return (
    <section id="showcase" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel label="Showcase" />
        <div className="flex items-end justify-between mb-16 gap-12">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight max-w-[18ch] leading-[0.95]">
              Visual excellence, <em className="italic text-muted-foreground">at speed.</em>
            </h2>
          </Reveal>
          <a href="#" className="hidden md:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            View all case studies <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1} className={i === 1 ? "md:mt-24" : ""}>
              <a href="#" className="block group">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card relative">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    width={1280}
                    height={1280}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity grid place-items-end p-6">
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest">
                      View case study <ArrowUpRight className="size-3" />
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-2xl tracking-tight">{c.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{c.tag}</p>
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-violet-glow">{c.time}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
