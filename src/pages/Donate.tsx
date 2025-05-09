import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Grid } from "@/components/ui/grid";
import PageHeader from "@/components/shared/PageHeader";
import DonationTier from "@/components/donate/DonationTier";
import DonationForm from "@/components/donate/DonationForm";
import { donationTiers } from "@/lib/data";

export default function Donate() {
  const [selectedTierId, setSelectedTierId] = useState<number | null>(null);
  const selectedTier = selectedTierId
    ? donationTiers.find((tier) => tier.id === selectedTierId)
    : null;

  return (
    <>
      <PageHeader
        page="donate"
        title="Support Our Mission"
        description="Your generosity helps us continue our work in the community."
      />

      <Section>
        <Grid cols={3} gap="lg" className="mb-16">
          {donationTiers.map((tier) => (
            <DonationTier
              key={tier.id}
              tier={tier}
              isSelected={selectedTierId === tier.id}
              onSelect={() => setSelectedTierId(tier.id)}
            />
          ))}
        </Grid>

        <div className="max-w-[800px] mx-auto">
          {selectedTier && <DonationForm selectedTier={selectedTier} />}
        </div>
      </Section>
    </>
  );
}
