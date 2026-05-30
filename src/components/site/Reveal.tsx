import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="size-1.5 rounded-full bg-violet" />
      <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      <div className="flex-1 h-px hairline" />
    </div>
  );
}
