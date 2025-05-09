import { Program } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Target } from "lucide-react";

interface ProgramModalProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProgramModal({
  program,
  isOpen,
  onClose,
}: ProgramModalProps) {
  if (!program) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[90vw]">
        <div className="relative aspect-video mb-6">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <Badge
            className="absolute top-3 right-3 text-base"
            variant={
              program.status === "New"
                ? "default"
                : program.status === "Coming Soon"
                ? "secondary"
                : "outline"
            }
          >
            {program.status}
          </Badge>
        </div>

        <DialogHeader>
          <DialogTitle className="text-2xl lg:text-3xl font-bold mb-4">
            {program.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center text-base lg:text-lg text-muted-foreground">
              <Calendar className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center text-base lg:text-lg text-muted-foreground">
              <Clock className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
              <span>{program.schedule}</span>
            </div>
            <div className="flex items-center text-base lg:text-lg text-muted-foreground">
              <Users className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
              <span>{program.participants} participants max</span>
            </div>
            <div className="flex items-center text-base lg:text-lg text-muted-foreground">
              <Target className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
              <span>{program.level}</span>
            </div>
          </div>

          <div>
            <Badge variant="outline" className="bg-primary/5 text-base mb-4">
              {program.category}
            </Badge>
            <p className="text-base lg:text-lg leading-relaxed text-muted-foreground whitespace-pre-line mb-6">
              {program.description}
            </p>
          </div>

          {program.curriculum && (
            <div className="space-y-4">
              <h3 className="text-xl lg:text-2xl font-semibold">Curriculum</h3>
              <ul className="list-disc list-inside space-y-2 text-base lg:text-lg text-muted-foreground">
                {program.curriculum.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              variant="outline"
              className="flex-1 text-base lg:text-lg py-6"
              onClick={onClose}
            >
              Close
            </Button>
            <Button className="flex-1 text-base lg:text-lg py-6">
              {program.status === "Coming Soon"
                ? "Join Waitlist"
                : "Enroll Now"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
