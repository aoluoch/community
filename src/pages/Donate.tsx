import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Grid } from "@/components/ui/grid";
import PageHeader from "@/components/shared/PageHeader";
import DonationTier from "@/components/donate/DonationTier";
import DonationForm from "@/components/donate/DonationForm";
import { donationTiers } from "@/lib/data";

export default function Donate() {
  const [selectedTier, setSelectedTier] = useState(donationTiers[1]);

  return (
    <>
      <PageHeader
        title="Support Our Mission"
        description="Your contribution helps us create lasting impact in our community."
      />

      <Section>
        <div className="max-w-3xl mx-auto mb-16">
          <Grid cols={3} gap="lg">
            {donationTiers.map((tier) => (
              <DonationTier
                key={tier.id}
                tier={tier}
                isSelected={selectedTier?.id === tier.id}
                onSelect={setSelectedTier}
              />
            ))}
          </Grid>
        </div>

        <div className="max-w-2xl mx-auto">
          <DonationForm selectedTier={selectedTier} />
        </div>
      </Section>
    </>
  );
}
