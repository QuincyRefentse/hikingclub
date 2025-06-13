
import type { Event } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CalendarDays, MapPin, Users, Zap } from 'lucide-react'; // Zap for difficulty

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card">
      <CardHeader className="p-0 relative">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
          data-ai-hint={event.dataAiHint || "hiking landscape"}
        />
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl font-headline mb-2 text-primary">{event.name}</CardTitle>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-accent" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-accent" />
            <span>Difficulty: {event.difficulty}</span>
          </div>
          {event.capacity && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-accent" />
              <span>Capacity: {event.capacity}</span>
            </div>
          )}
        </div>
        <CardDescription className="mt-3 text-foreground line-clamp-3">{event.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 border-t border-border">
        <Link href={`/events/${event.slug}/book`}>
          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Book Now</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
