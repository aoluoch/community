import { Event } from "@/types";
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
import { Calendar, Clock, MapPin, Share2, Users } from "lucide-react";
import { format, parseISO } from "date-fns";

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

  const formattedDate = format(parseISO(event.date), "MMMM d, yyyy");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0">
        <div className="px-6 lg:px-8 py-6">
          <DialogHeader className="mb-6">
            <Badge className="w-fit mb-3 text-base">{event.category}</Badge>
            <DialogTitle className="text-2xl lg:text-3xl font-bold">
              {event.title}
            </DialogTitle>
            <DialogDescription>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span className="text-base lg:text-lg">{formattedDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span className="text-base lg:text-lg">{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span className="text-base lg:text-lg">{event.location}</span>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 lg:space-y-8">
            <div className="bg-accent/50 p-6 lg:p-8 rounded-lg">
              <p className="text-lg lg:text-xl leading-relaxed">
                {event.description}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-xl lg:text-2xl mb-4">
                  Event Details
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Users className="h-6 w-6 mr-3 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium text-lg mb-1">
                        Who should attend
                      </p>
                      <p className="text-muted-foreground text-base lg:text-lg">
                        Community members interested in{" "}
                        {event.category.toLowerCase()} opportunities and skill
                        development.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-3 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium text-lg mb-1">
                        Location Details
                      </p>
                      <p className="text-muted-foreground text-base lg:text-lg">
                        {event.location}
                      </p>
                      <p className="text-muted-foreground text-base lg:text-lg">
                        Parking available on premises
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-xl lg:text-2xl mb-4">
                  What to Expect
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-base lg:text-lg">
                    Interactive sessions with industry experts
                  </li>
                  <li className="text-base lg:text-lg">
                    Networking opportunities
                  </li>
                  <li className="text-base lg:text-lg">
                    Practical demonstrations and hands-on activities
                  </li>
                  <li className="text-base lg:text-lg">
                    Refreshments will be provided
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <DialogFooter className="flex sm:justify-between gap-4 sm:gap-0 flex-col sm:flex-row mt-8 pt-6 border-t">
            <Button variant="outline" size="lg" className="hidden sm:flex">
              <Share2 className="h-5 w-5 mr-2" />
              Share Event
            </Button>
            <div className="space-x-3">
              <Button
                variant="outline"
                size="lg"
                onClick={onClose}
                className="text-base"
              >
                Close
              </Button>
              <Button size="lg" className="text-base">
                RSVP Now
              </Button>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
