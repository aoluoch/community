import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Event } from '@/types';
import { events } from '@/lib/data';
import PageHeader from '@/components/shared/PageHeader';
import EventCard from '@/components/events/EventCard';
import EventModal from '@/components/events/EventModal';
import { Calendar as CalendarIcon, ListIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format, parseISO } from 'date-fns';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewType, setViewType] = useState<'list' | 'calendar'>('list');
  const [date, setDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    document.title = 'Events - GetMore Centre';
  }, []);

  const handleOpenModal = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filteredEvents = date
    ? events.filter(event => {
        const eventDate = parseISO(event.date);
        return (
          eventDate.getDate() === date.getDate() &&
          eventDate.getMonth() === date.getMonth() &&
          eventDate.getFullYear() === date.getFullYear()
        );
      })
    : events;

  // Highlighted dates for the calendar
  const highlightedDates = events.map(event => parseISO(event.date));

  return (
    <>
      <PageHeader 
        title="Events Calendar" 
        description="Stay updated with our upcoming events and activities." 
      />

      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <Button
                variant={viewType === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewType('list')}
              >
                <ListIcon className="h-4 w-4 mr-2" />
                List View
              </Button>
              <Button
                variant={viewType === 'calendar' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewType('calendar')}
              >
                <CalendarIcon className="h-4 w-4 mr-2" />
                Calendar View
              </Button>
            </div>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  {date ? format(date, 'PPP') : 'Filter by date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  modifiers={{ highlight: highlightedDates }}
                  modifiersStyles={{
                    highlight: { 
                      backgroundColor: 'hsl(var(--primary) / 0.1)',
                      fontWeight: 'bold',
                      borderRadius: '0px' 
                    }
                  }}
                />
                {date && (
                  <div className="p-3 border-t">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setDate(undefined)}
                      className="w-full justify-start text-muted-foreground"
                    >
                      Clear filter
                    </Button>
                  </div>
                )}
              </PopoverContent>
            </Popover>
          </div>

          {viewType === 'list' ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredEvents.map(event => (
                <EventCard 
                  key={event.id}
                  event={event}
                  onClick={() => handleOpenModal(event)}
                />
              ))}
            </motion.div>
          ) : (
            <div className="bg-background shadow rounded-lg p-4">
              {/* Calendar view would be more complex, showing a simplified version */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Upcoming Events</h3>
                
                {filteredEvents.length === 0 ? (
                  <p className="text-muted-foreground p-4 text-center">
                    No events found for the selected date.
                  </p>
                ) : (
                  filteredEvents.map(event => (
                    <div 
                      key={event.id}
                      className="p-4 border rounded-lg flex hover:bg-accent cursor-pointer"
                      onClick={() => handleOpenModal(event)}
                    >
                      <div className="bg-primary/10 text-primary text-center p-2 rounded-lg w-16 h-16 flex-shrink-0 flex flex-col justify-center">
                        <span className="text-xs block font-medium">
                          {format(parseISO(event.date), 'MMM')}
                        </span>
                        <span className="text-2xl font-bold block leading-none">
                          {format(parseISO(event.date), 'd')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.time}</p>
                        <p className="text-sm text-muted-foreground">{event.location}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <EventModal 
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}