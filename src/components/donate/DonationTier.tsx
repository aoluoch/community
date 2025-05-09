import { motion } from "framer-motion";
import { DonationTier as DonationTierType } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DonationTierProps {
  tier: DonationTierType;
  onSelect: (tier: DonationTierType) => void;
  isSelected: boolean;
}

export default function DonationTier({
  tier,
  onSelect,
  isSelected,
}: DonationTierProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Card
        className={cn(
          "h-full cursor-pointer border-2 transition-all duration-300",
          isSelected
            ? "border-primary shadow-xl"
            : "border-border hover:border-primary/50 hover:shadow-lg"
        )}
        onClick={() => onSelect(tier)}
      >
        <CardContent className="p-6 lg:p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl lg:text-3xl font-bold">{tier.title}</h3>
            {isSelected && (
              <div className="h-7 w-7 lg:h-8 lg:w-8 rounded-full bg-primary flex items-center justify-center">
                <CheckIcon className="h-4 w-4 lg:h-5 lg:w-5 text-primary-foreground" />
              </div>
            )}
          </div>

          <div className="mb-6">
            <span className="text-3xl lg:text-4xl font-bold">
              ${tier.amount}
            </span>
          </div>

          <p className="text-muted-foreground text-base lg:text-lg mb-8">
            {tier.description}
          </p>

          <div className="space-y-4 mb-8">
            <p className="font-semibold text-base lg:text-lg">Perks:</p>
            <ul className="space-y-3">
              {tier.perks.map((perk, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-5 w-5 lg:h-6 lg:w-6 text-primary mt-0.5 mr-3" />
                  <span className="text-base lg:text-lg">{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            variant={isSelected ? "default" : "outline"}
            size="lg"
            className="w-full text-base lg:text-lg h-12 lg:h-14"
          >
            {isSelected ? "Selected" : "Select"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
