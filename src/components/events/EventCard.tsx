import { motion } from "framer-motion";
import { Event } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import { format } from "date-fns";

interface EventCardProps {
  event: Event;
  onClick: () => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  const formattedDate = format(new Date(event.date), "MMMM d, yyyy");

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-xl transition-standard">
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full aspect-video object-cover"
            loading="lazy"
          />
        </div>

        <CardContent className="p-6 lg:p-8">
          <div className="space-y-6">
            <h3 className="font-bold text-xl lg:text-2xl line-clamp-2 leading-tight">
              {event.title}
            </h3>

            <div className="space-y-3">
              <div className="flex items-center text-base lg:text-lg text-muted-foreground">
                <Calendar className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center text-base lg:text-lg text-muted-foreground">
                <Clock className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-base lg:text-lg text-muted-foreground">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="line-clamp-1">{event.location}</span>
              </div>
            </div>

            <p className="text-base lg:text-lg text-muted-foreground line-clamp-3">
              {event.description}
            </p>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="w-full text-base py-6"
                onClick={onClick}
              >
                View Details
              </Button>
              <Button className="w-full text-base py-6">RSVP Now</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
