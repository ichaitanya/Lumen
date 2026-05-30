import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Platform", href: "#features" },
  { label: "Process", href: "#process" },
  { label: "Showcase", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 border-b border-border backdrop-blur-xl bg-background/60"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="size-6 rounded-md bg-gradient-to-br from-violet-glow to-violet shadow-glow" />
          <span className="font-display text-xl tracking-tight">Lumen</span>
        </a>
        <div className="hidden md:flex items-center gap-9 text-[13px] text-muted-foreground">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#cta"
          className="group inline-flex items-center gap-1.5 text-[13px] font-medium pl-4 pr-2 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
        >
          Start Building
          <span className="size-5 rounded-full bg-background/10 grid place-items-center">
            <ArrowUpRight className="size-3" />
          </span>
        </a>
      </div>
    </motion.nav>
  );
}
