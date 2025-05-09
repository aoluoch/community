import { motion } from "framer-motion";
import { Program } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InfoIcon } from "lucide-react";

interface ProgramCardProps {
  program: Program;
  onClick: () => void;
}

export default function ProgramCard({ program, onClick }: ProgramCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <img
            src={program.image}
            alt={program.title}
            className="w-full aspect-video object-cover"
            loading="lazy"
          />
          <Badge
            className={cn(
              "absolute top-3 right-3 text-base",
              program.status === "Ongoing" && "bg-blue-500 hover:bg-blue-600",
              program.status === "New" && "bg-green-500 hover:bg-green-600",
              program.status === "Coming Soon" &&
                "bg-amber-500 hover:bg-amber-600"
            )}
          >
            {program.status}
          </Badge>
        </div>
        <CardContent className="p-6 lg:p-8">
          <div className="space-y-4">
            <h3 className="font-bold text-xl lg:text-2xl leading-tight">
              {program.title}
            </h3>
            <Badge variant="outline" className="bg-primary/5 text-base">
              {program.category}
            </Badge>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              {program.description}
            </p>
            <Button
              variant="ghost"
              className="mt-4 w-full text-primary text-base lg:text-lg py-6"
              onClick={onClick}
            >
              <InfoIcon className="h-5 w-5 mr-2" />
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
