import { useState } from 'react';
import { motion } from 'framer-motion';
import { DonationTier as DonationTierType } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DonationTierProps {
  tier: DonationTierType;
  onSelect: (tier: DonationTierType) => void;
  isSelected: boolean;
}

export default function DonationTier({ 
  tier, 
  onSelect, 
  isSelected 
}: DonationTierProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className={cn(
          "h-full cursor-pointer border-2 transition-all duration-200",
          isSelected 
            ? "border-primary shadow-lg" 
            : "border-border hover:border-primary/50"
        )}
        onClick={() => onSelect(tier)}
      >
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">{tier.title}</h3>
            {isSelected && (
              <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <CheckIcon className="h-4 w-4 text-primary-foreground" />
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <span className="text-3xl font-bold">${tier.amount}</span>
          </div>
          
          <p className="text-muted-foreground mb-6">{tier.description}</p>
          
          <div className="space-y-2 mb-6">
            <p className="font-semibold">Perks:</p>
            <ul className="space-y-1">
              {tier.perks.map((perk, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">{perk}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Button
            variant={isSelected ? "default" : "outline"} 
            className="w-full"
          >
            {isSelected ? "Selected" : "Select"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}