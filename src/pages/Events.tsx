import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Grid } from "@/components/ui/grid";
import PageHeader from "@/components/shared/PageHeader";
import EventCard from "@/components/events/EventCard";
import EventModal from "@/components/events/EventModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, CalendarIcon } from "lucide-react";
import { Event } from "@/types";
import { events } from "@/lib/data";

const categories = ["All", "Workshop", "Seminar", "Community", "Fundraising"];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const upcomingEvents = filteredEvents.filter(
    (event) => new Date(event.date) >= new Date()
  );
  const pastEvents = filteredEvents.filter(
    (event) => new Date(event.date) < new Date()
  );

  return (
    <>
      <PageHeader
        title="Our Events"
        description="Join us at our upcoming events and activities."
      />

      <Section>
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              className="pl-9 w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {upcomingEvents.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            <Grid cols={3} gap="lg" className="mb-16">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
            </Grid>
          </>
        )}

        {pastEvents.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-6">Past Events</h2>
            <Grid cols={3} gap="lg">
              {pastEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
            </Grid>
          </>
        )}

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <CalendarIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No events found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </Section>

      <EventModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
}
