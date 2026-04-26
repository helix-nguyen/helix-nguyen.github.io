import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { Identity } from "@/components/site/Identity";
import { Experience } from "@/components/site/Experience";
import { Awards } from "@/components/site/Awards";
import { Activities } from "@/components/site/Activities";
import { Toolkit } from "@/components/site/Toolkit";
import { Closing } from "@/components/site/Closing";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Manifesto />
      <Identity />
      <Experience />
      <Awards />
      <Activities />
      <Toolkit />
      <Closing />
      <SiteFooter />
    </main>
  );
};

export default Index;
