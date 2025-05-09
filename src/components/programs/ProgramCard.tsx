import { motion } from 'framer-motion';
import { Program } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { InfoIcon } from 'lucide-react';

interface ProgramCardProps {
  program: Program;
  onClick: () => void;
}

export default function ProgramCard({ program, onClick }: ProgramCardProps) {
  const statusColor = {
    "Ongoing": "bg-blue-500",
    "New": "bg-green-500",
    "Coming Soon": "bg-amber-500",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden h-full border-none shadow-md">
        <div className="relative">
          <img 
            src={program.image}
            alt={program.title}
            className="w-full aspect-video object-cover"
          />
          <Badge className={cn(
            "absolute top-2 right-2",
            program.status === "Ongoing" && "bg-blue-500 hover:bg-blue-600",
            program.status === "New" && "bg-green-500 hover:bg-green-600",
            program.status === "Coming Soon" && "bg-amber-500 hover:bg-amber-600",
          )}>
            {program.status}
          </Badge>
        </div>
        <CardContent className="p-5">
          <div className="space-y-2">
            <h3 className="font-bold text-lg">{program.title}</h3>
            <Badge variant="outline" className="bg-primary/5">{program.category}</Badge>
            <p className="text-muted-foreground">{program.description}</p>
            <Button 
              variant="ghost" 
              className="mt-2 w-full text-primary" 
              onClick={onClick}
            >
              <InfoIcon className="h-4 w-4 mr-2" />
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}