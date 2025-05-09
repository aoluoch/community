import { motion } from "framer-motion";
import { Event } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import { format, parseISO } from "date-fns";

interface EventCardProps {
  event: Event;
  onClick: () => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  const formattedDate = format(parseISO(event.date), "MMMM d, yyyy");

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <CardContent className="p-0">
          <div className="p-6 lg:p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-primary/10 text-primary text-center p-3 rounded-lg w-20">
                <span className="text-sm lg:text-base block font-medium">
                  {format(parseISO(event.date), "MMM")}
                </span>
                <span className="text-2xl lg:text-3xl font-bold block leading-none">
                  {format(parseISO(event.date), "d")}
                </span>
              </div>
              <Badge className="text-base">{event.category}</Badge>
            </div>

            <h3 className="font-bold text-xl lg:text-2xl mb-4">
              {event.title}
            </h3>

            <div className="space-y-3 mb-6">
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
                <span>{event.location}</span>
              </div>
            </div>

            <p className="text-base lg:text-lg text-muted-foreground mb-6 line-clamp-2">
              {event.description}
            </p>

            <div className="flex justify-between gap-3">
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
