import { motion } from 'framer-motion';
import { Event } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { format, parseISO } from 'date-fns';

interface EventCardProps {
  event: Event;
  onClick: () => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  const formattedDate = format(parseISO(event.date), 'MMMM d, yyyy');

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full border-none shadow-md overflow-hidden">
        <CardContent className="p-0">
          <div className="px-4 pt-6 pb-4">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-primary/10 text-primary text-center p-2 rounded-lg w-16">
                <span className="text-xs block font-medium">
                  {format(parseISO(event.date), 'MMM')}
                </span>
                <span className="text-2xl font-bold block leading-none">
                  {format(parseISO(event.date), 'd')}
                </span>
              </div>
              <Badge>{event.category}</Badge>
            </div>
            
            <h3 className="font-bold text-lg mb-2">{event.title}</h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{event.location}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {event.description}
            </p>
            
            <div className="flex justify-between gap-2">
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={onClick}
              >
                Details
              </Button>
              <Button 
                className="w-full"
              >
                RSVP
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}