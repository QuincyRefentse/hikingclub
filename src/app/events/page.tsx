import EventCard from '@/components/EventCard';
import { mockEvents } from '@/lib/mockData';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8 bg-card rounded-lg shadow-md">
        <h1 className="text-5xl font-headline font-bold text-primary mb-4">Upcoming Hikes & Events</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover your next adventure. Browse our list of upcoming hikes, trail runs, and outdoor activities.
        </p>
      </section>

      {/* Filter Section - Mock UI */}
      <section className="p-6 bg-card rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label htmlFor="search-event" className="block text-sm font-medium text-muted-foreground mb-1">Search by Name</label>
            <Input id="search-event" placeholder="e.g., Sunrise Hike" className="bg-background" />
          </div>
          <div>
            <label htmlFor="filter-month" className="block text-sm font-medium text-muted-foreground mb-1">Month</label>
            <Select>
              <SelectTrigger id="filter-month" className="bg-background">
                <SelectValue placeholder="Any Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="august">August</SelectItem>
                <SelectItem value="september">September</SelectItem>
                <SelectItem value="october">October</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="filter-difficulty" className="block text-sm font-medium text-muted-foreground mb-1">Difficulty</label>
            <Select>
              <SelectTrigger id="filter-difficulty" className="bg-background">
                <SelectValue placeholder="Any Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full md:w-auto bg-primary hover:bg-primary/90">
            <Filter className="mr-2 h-4 w-4" /> Apply Filters
          </Button>
        </div>
      </section>

      {/* Event Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        {mockEvents.length === 0 && (
           <p className="text-center text-muted-foreground py-10">No upcoming events found. Check back soon!</p>
        )}
      </section>
    </div>
  );
}
