import { Program } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";

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
      <DialogContent className="max-w-4xl overflow-hidden p-0">
        <div className="relative w-full aspect-video mb-6 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <Badge
            className={cn(
              "absolute top-4 right-4 text-base",
              program.status === "Ongoing" && "bg-blue-500 hover:bg-blue-600",
              program.status === "New" && "bg-green-500 hover:bg-green-600",
              program.status === "Coming Soon" &&
                "bg-amber-500 hover:bg-amber-600"
            )}
          >
            {program.status}
          </Badge>
        </div>
        <div className="px-6 lg:px-8">
          <DialogHeader>
            <DialogTitle className="text-2xl lg:text-3xl font-bold">
              {program.title}
            </DialogTitle>
            <DialogDescription>
              <Badge variant="outline" className="bg-primary/5 mt-2 text-base">
                {program.category}
              </Badge>
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 my-6">
            <p className="text-base lg:text-lg leading-relaxed">
              {program.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center">
                <CalendarIcon className="h-6 w-6 mr-3 text-muted-foreground" />
                <span className="text-base lg:text-lg">Duration: 12 weeks</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-3 text-muted-foreground" />
                <span className="text-base lg:text-lg">
                  Schedule: Weekly sessions
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-3 text-muted-foreground" />
                <span className="text-base lg:text-lg">
                  Location: GetMore Centre
                </span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-3 text-muted-foreground" />
                <span className="text-base lg:text-lg">
                  Capacity: 20 participants
                </span>
              </div>
            </div>

            <div className="bg-primary/5 p-6 lg:p-8 rounded-lg mt-6">
              <h4 className="font-semibold text-lg lg:text-xl mb-4">
                Program Objectives
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-base lg:text-lg">
                <li>Develop practical skills in {program.category}</li>
                <li>Build confidence and professional networks</li>
                <li>Connect participants with industry opportunities</li>
                <li>Provide ongoing mentorship and support</li>
              </ul>
            </div>
          </div>
          <DialogFooter className="flex sm:justify-between gap-4 sm:gap-0 flex-col sm:flex-row py-6">
            <Button
              variant="outline"
              size="lg"
              onClick={onClose}
              className="text-base"
            >
              Close
            </Button>
            <div className="space-x-3">
              <Button variant="secondary" size="lg" className="text-base">
                Download Syllabus
              </Button>
              <Button size="lg" className="text-base">
                Apply Now
              </Button>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
