import { Event } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Link as LinkIcon } from "lucide-react";
import { format } from "date-fns";

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventModal({
  event,
  isOpen,
  onClose,
}: EventModalProps) {
  if (!event) return null;

  const formattedDate = format(new Date(event.date), "MMMM d, yyyy");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[90vw]">
        <div className="relative aspect-video mb-6">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <DialogHeader>
          <DialogTitle className="text-2xl lg:text-3xl font-bold mb-4">
            {event.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center text-base lg:text-lg text-muted-foreground">
              <Calendar className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center text-base lg:text-lg text-muted-foreground">
              <Clock className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-base lg:text-lg text-muted-foreground">
              <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-base lg:text-lg text-muted-foreground">
              <Users className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
              <span>{event.capacity} attendees max</span>
            </div>
          </div>

          <div>
            <Badge variant="outline" className="bg-primary/5 text-base mb-4">
              {event.category}
            </Badge>
            <p className="text-base lg:text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
              {event.description}
            </p>
          </div>

          {event.link && (
            <div className="flex items-center text-base lg:text-lg text-muted-foreground">
              <LinkIcon className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Event Website
              </a>
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
              Register Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
