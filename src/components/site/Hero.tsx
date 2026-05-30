import { motion, type Variants } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const fade: Variants = {
  hidden: { y: 24, opacity: 0 },
  show: (i: number = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay: i * 0.08, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      {/* Animated purple texture */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover animate-drift"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-[800px] rounded-full bg-violet/20 blur-[160px] -z-10 pointer-events-none animate-drift" />

      <div className="max-w-7xl mx-auto px-6 relative">

        <motion.h1
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-display text-[15vw] md:text-[8.5rem] lg:text-[10rem] leading-[0.85] tracking-tight text-balance max-w-[14ch]"
        >
          Launch your site in <em className="italic text-gradient">days</em>, not months.
        </motion.h1>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-10 text-lg md:text-xl text-muted-foreground max-w-[52ch] leading-relaxed"
        >
          Lumen is the precision engine for modern web publishing. Describe what you need — we generate, design,
          and deploy a production-grade website overnight.
        </motion.p>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all"
          >
            Start Building
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-violet/40 transition-all"
          >
            <PlayCircle className="size-4" />
            Book a Demo
          </a>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border"
        >
          {[
            ["3.2 days", "Avg. time to launch"],
            ["100+", "Sites shipped weekly"],
            ["99.99%", "Edge uptime"],
            ["A+", "Lighthouse default"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background p-6">
              <div className="font-display text-3xl md:text-4xl">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
