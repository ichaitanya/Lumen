import { Reveal, SectionLabel } from "./Reveal";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    desc: "For founders validating an idea.",
    features: ["1 active site", "AI generation", "Lumen subdomain", "Community support"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Growth",
    price: "$49",
    desc: "For teams shipping real work.",
    features: ["Unlimited sites", "Custom domain", "Priority rendering", "Integrations & analytics", "Visual CMS"],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For organizations at scale.",
    features: ["SSO & SCIM", "White-labeling", "Dedicated manager", "SLA & audit logs", "Custom integrations"],
    cta: "Contact sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel label="Pricing" />
        <Reveal>
          <h2 className="font-display text-5xl md:text-6xl tracking-tight max-w-[18ch] leading-[0.95]">
            Plans that <em className="italic text-gradient">scale</em> with you.
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={`h-full p-10 flex flex-col ${
                  p.featured
                    ? "bg-gradient-to-b from-violet/15 to-background relative"
                    : "bg-background"
                }`}
              >
                {p.featured && (
                  <span className="absolute top-6 right-6 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-violet/20 text-violet-glow border border-violet/30">
                    Most popular
                  </span>
                )}
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{p.name}</span>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-6xl">{p.price}</span>
                  {p.price !== "Custom" && <span className="text-sm text-muted-foreground">/ mo</span>}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-10 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="size-4 mt-0.5 text-violet-glow shrink-0" strokeWidth={2} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-10 inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                    p.featured
                      ? "bg-foreground text-background hover:bg-foreground/90"
                      : "border border-border hover:border-violet/40"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
