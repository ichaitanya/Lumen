import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Features } from "@/components/site/Features";
import { Process } from "@/components/site/Process";
import { Showcase } from "@/components/site/Showcase";
import { Benefits } from "@/components/site/Benefits";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumen — Launch your website in days, not months" },
      {
        name: "description",
        content:
          "Lumen is the AI-powered platform that helps founders, agencies, and creators launch editorial-grade websites in days. Start building free.",
      },
      { property: "og:title", content: "Lumen — Launch your website in days, not months" },
      {
        property: "og:description",
        content: "AI-powered website creation, rapid deployment, and editorial design — without the agency timeline.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-clip">
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <Process />
      <Showcase />
      <Benefits />
      <Testimonials />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
