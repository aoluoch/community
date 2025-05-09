import { Event } from '@/types';
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
import { Calendar, Clock, MapPin, Share2, Users } from 'lucide-react';
import { format, parseISO } from 'date-fns';

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventModal({ event, isOpen, onClose }: EventModalProps) {
  if (!event) return null;

  const formattedDate = format(parseISO(event.date), 'MMMM d, yyyy');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <Badge className="w-fit mb-2">{event.category}</Badge>
          <DialogTitle className="text-2xl">{event.title}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                <span>{event.location}</span>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-accent/50 p-5 rounded-lg">
            <p className="text-lg">{event.description}</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Event Details</h4>
              <div className="space-y-2">
                <div className="flex items-start">
                  <Users className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Who should attend</p>
                    <p className="text-muted-foreground">Community members interested in {event.category.toLowerCase()} opportunities and skill development.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Location Details</p>
                    <p className="text-muted-foreground">{event.location}</p>
                    <p className="text-muted-foreground">Parking available on premises</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">What to Expect</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Interactive sessions with industry experts</li>
                <li>Networking opportunities</li>
                <li>Practical demonstrations and hands-on activities</li>
                <li>Refreshments will be provided</li>
              </ul>
            </div>
          </div>
        </div>
        <DialogFooter className="flex sm:justify-between gap-4 sm:gap-0 flex-col sm:flex-row mt-6">
          <Button variant="outline" size="icon" className="hidden sm:flex">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
          <div className="space-x-2">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button>
              RSVP Now
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}