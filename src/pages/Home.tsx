import { Section } from "@/components/ui/section";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/home/Partners";

export default function Home() {
  return (
    <>
      <Hero />

      <Section>
        <Services />
      </Section>

      <Section className="bg-accent/50">
        <Stats />
      </Section>

      <Section size="lg">
        <Testimonials />
      </Section>

      <Section size="sm">
        <Partners />
      </Section>
    </>
  );
}
