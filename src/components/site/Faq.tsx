import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const faqs = [
  { q: "How fast can I actually launch?", a: "Most customers go from brief to live site in 2–4 days. Simple landing pages can ship within hours." },
  { q: "Do I need to know how to code?", a: "No. Lumen is built for non-technical founders, marketers, and designers. If you want to drop into code, you can — but you never have to." },
  { q: "Can I use my own domain?", a: "Yes. Connect any custom domain on the Growth plan and above. SSL is automatic." },
  { q: "What if I outgrow the AI-generated design?", a: "You can refine every section in our visual editor, override with custom components, or export the codebase entirely." },
  { q: "Is my data and content secure?", a: "Bank-grade encryption at rest and in transit. SOC 2 Type II in flight. Enterprise customers get SSO, SCIM, and audit logs." },
  { q: "Do you offer refunds?", a: "30-day money-back on all paid plans, no questions asked." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-32 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel label="FAQ" />
        <Reveal>
          <h2 className="font-display text-5xl md:text-6xl tracking-tight max-w-[16ch] leading-[0.95]">
            Questions, <em className="italic text-muted-foreground">answered.</em>
          </h2>
        </Reveal>
        <div className="mt-16 border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-8 border-b border-border flex items-start justify-between gap-8 group"
                >
                  <span className="font-display text-2xl md:text-3xl tracking-tight">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="size-10 rounded-full border border-border grid place-items-center shrink-0 group-hover:border-violet/40 transition-colors"
                  >
                    <Plus className="size-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="overflow-hidden border-b border-border"
                    >
                      <p className="pb-8 pr-16 text-muted-foreground leading-relaxed max-w-[60ch]">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
