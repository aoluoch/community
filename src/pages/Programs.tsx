import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Grid } from "@/components/ui/grid";
import PageHeader from "@/components/shared/PageHeader";
import ProgramCard from "@/components/programs/ProgramCard";
import ProgramModal from "@/components/programs/ProgramModal";
import { programs } from "@/lib/data";
import { Program } from "@/types";

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <>
      <PageHeader
        title="Our Programs"
        description="Discover our range of educational and support programs designed to empower our community members."
      />

      <Section>
        <Grid cols={3} gap="lg">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onClick={() => setSelectedProgram(program)}
            />
          ))}
        </Grid>
      </Section>

      <ProgramModal
        program={selectedProgram}
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </>
  );
}
