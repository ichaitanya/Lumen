import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const quotes = [
  {
    q: "Lumen replaced a quarter of agency work with a weekend. The output looks like it cost ten times more.",
    name: "Adelina Voss",
    role: "Founder, Studio Kai",
  },
  {
    q: "We launched four marketing sites in the time it used to take to scope one. The compounding effect is real.",
    name: "Marcus Renaud",
    role: "Head of Growth, Vertex",
  },
  {
    q: "Editorial quality without an editorial team. Our brand finally feels like itself online.",
    name: "Priya Shah",
    role: "Creative Director, Noir Mode",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const q = quotes[i];

  return (
    <section className="py-32 border-t border-border bg-card/20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel label="Testimonials" />
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-12">
          <Reveal>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-[24ch]"
              >
                <span className="text-violet-glow">&ldquo;</span>
                {q.q}
                <span className="text-violet-glow">&rdquo;</span>
              </motion.blockquote>
            </AnimatePresence>
            <div className="mt-10">
              <div className="text-base font-medium">{q.name}</div>
              <div className="text-sm text-muted-foreground">{q.role}</div>
            </div>
          </Reveal>
          <div className="flex gap-3">
            <button
              onClick={() => setI((i - 1 + quotes.length) % quotes.length)}
              className="size-12 rounded-full border border-border grid place-items-center hover:border-violet/40 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => setI((i + 1) % quotes.length)}
              className="size-12 rounded-full border border-border grid place-items-center hover:border-violet/40 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
