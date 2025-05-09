import { Section } from "@/components/ui/section";
import { Grid } from "@/components/ui/grid";
import PageHeader from "@/components/shared/PageHeader";
import Mission from "@/components/about/Mission";
import Timeline from "@/components/about/Timeline";
import Team from "@/components/about/Team";

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Learn about our mission, history, and the team behind GetMore Centre."
      />

      <Section>
        <Mission />
      </Section>

      <Section className="bg-accent/50">
        <Timeline />
      </Section>

      <Section size="lg">
        <Team />
      </Section>
    </>
  );
}
