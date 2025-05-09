import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface DonationTierProps {
  tier: {
    id: number;
    amount: number;
    title: string;
    description: string;
    perks: string[];
  };
  isSelected?: boolean;
  onSelect: (tier: any) => void;
}

export default function DonationTier({
  tier,
  isSelected,
  onSelect,
}: DonationTierProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`relative h-full border-2 transition-standard ${
          isSelected
            ? "border-primary shadow-lg"
            : "border-transparent shadow-md hover:shadow-xl"
        }`}
      >
        <CardContent className="p-6 lg:p-8 flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-xl lg:text-2xl font-bold mb-2">{tier.title}</h3>
            <p className="text-muted-foreground text-base lg:text-lg mb-4">
              {tier.description}
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl lg:text-4xl font-bold">
                ${tier.amount}
              </span>
              <span className="text-muted-foreground">/one-time</span>
            </div>
          </div>

          <div className="flex-1 mb-6">
            <ul className="space-y-3">
              {tier.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            size="lg"
            variant={isSelected ? "default" : "outline"}
            className="w-full text-base lg:text-lg h-12 lg:h-14"
            onClick={() => onSelect(tier)}
          >
            {isSelected ? "Selected" : `Select ${tier.title}`}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
