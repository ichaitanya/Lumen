import { Reveal, SectionLabel } from "./Reveal";
import { Sparkles, Rocket, Palette, Search, Smartphone, BarChart3, FileText } from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI-Powered Creation", desc: "Describe your vision in plain English. Our engine maps intent to high-conversion patterns." },
  { icon: Rocket, title: "Rapid Deployment", desc: "One-click global edge delivery. Sub-second TTFB on every continent, day one." },
  { icon: Palette, title: "Custom Branding", desc: "Tokenized design system means every pixel adapts to your visual identity." },
  { icon: Search, title: "SEO Optimized", desc: "Semantic markup, structured data, and meta-perfect pages — automatic." },
  { icon: Smartphone, title: "Mobile Responsive", desc: "Fluid layouts that feel handcrafted on every device, from phone to ultrawide." },
  { icon: BarChart3, title: "Analytics & Integrations", desc: "Plug into Stripe, HubSpot, GA4, Linear — without a single line of code." },
  { icon: FileText, title: "Effortless CMS", desc: "Update copy, swap images, ship new pages from a visual editor your team will love." },
];

export function Features() {
  return (
    <section id="features" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel label="Capabilities" />
        <Reveal>
          <h2 className="font-display text-5xl md:text-6xl tracking-tight max-w-[18ch] leading-[0.95]">
            Everything you need. <em className="italic text-muted-foreground">Nothing you don&apos;t.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.04}>
              <div className="bg-background p-10 h-full group hover:bg-card/40 transition-colors">
                <div className="size-11 rounded-xl border border-border grid place-items-center mb-8 group-hover:border-violet/40 group-hover:shadow-glow transition-all">
                  <f.icon className="size-4 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium mb-3 tracking-tight">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
          <div className="bg-gradient-to-br from-violet/20 to-background p-10 hidden lg:flex flex-col justify-end">
            <p className="font-display text-3xl leading-tight">More shipping soon.</p>
            <p className="text-sm text-muted-foreground mt-2">A/B testing, multi-language, headless commerce.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
