import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section id="cta" className="py-32 border-t border-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full bg-violet/25 blur-[140px] pointer-events-none animate-drift" />
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <Reveal>
          <h2 className="font-display text-6xl md:text-8xl tracking-tight leading-[0.9] text-balance">
            Build your website <em className="italic text-gradient">today.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-lg text-muted-foreground max-w-[48ch] mx-auto">
            Join hundreds of founders, agencies, and creators shipping the future of the web with Lumen.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all"
            >
              Start building free
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-violet/40 transition-all"
            >
              Talk to sales
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
