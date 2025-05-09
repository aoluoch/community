import { Program } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, Clock, MapPin, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgramModalProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProgramModal({ program, isOpen, onClose }: ProgramModalProps) {
  if (!program) return null;

  const statusColor = {
    "Ongoing": "bg-blue-500",
    "New": "bg-green-500",
    "Coming Soon": "bg-amber-500",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl overflow-hidden">
        <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
          <img 
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
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
        <DialogHeader>
          <DialogTitle className="text-2xl">{program.title}</DialogTitle>
          <DialogDescription>
            <Badge variant="outline" className="bg-primary/5 mt-2">
              {program.category}
            </Badge>
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p>{program.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2 text-muted-foreground" />
              <span>Duration: 12 weeks</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
              <span>Schedule: Weekly sessions</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
              <span>Location: GetMore Centre</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-muted-foreground" />
              <span>Capacity: 20 participants</span>
            </div>
          </div>

          <div className="bg-primary/5 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Program Objectives</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Develop practical skills in {program.category}</li>
              <li>Build confidence and professional networks</li>
              <li>Connect participants with industry opportunities</li>
              <li>Provide ongoing mentorship and support</li>
            </ul>
          </div>
        </div>
        <DialogFooter className="flex sm:justify-between gap-4 sm:gap-0 flex-col sm:flex-row mt-6">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <div className="space-x-2">
            <Button variant="secondary">
              Download Syllabus
            </Button>
            <Button>
              Apply Now
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}