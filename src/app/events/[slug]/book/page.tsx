"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { mockEvents } from '@/lib/mockData'; 
import { useParams, useRouter } from 'next/navigation';
import { CalendarCheck, User, Mail } from 'lucide-react';

export default function BookEventPage() {
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams();
  const eventSlug = params.slug as string;

  const event = mockEvents.find(e => e.slug === eventSlug);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Booking Confirmed!",
      description: `You're all set for ${event?.name || 'the event'}. Check your email for details.`,
      variant: "default", 
    });
    router.push('/events'); 
  };

  if (!event) {
    return <div className="text-center py-10 text-lg text-muted-foreground">Event not found. It might have been moved or cancelled.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <Card className="shadow-xl bg-card">
        <CardHeader className="text-center">
          <CalendarCheck className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-3xl font-headline text-primary">Book Your Spot</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            for {event.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">Full Name</Label>
              <div className="flex items-center">
                <User className="h-5 w-5 text-muted-foreground mr-3 ml-1"/>
                <Input id="name" type="text" placeholder="John Doe" required className="text-base py-3 bg-input" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">Email Address</Label>
               <div className="flex items-center">
                <Mail className="h-5 w-5 text-muted-foreground mr-3 ml-1"/>
                <Input id="email" type="email" placeholder="you@example.com" required className="text-base py-3 bg-input" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests" className="text-base">Number of Guests (including yourself)</Label>
              <Input id="guests" type="number" defaultValue="1" min="1" max={event.capacity || 5} required className="text-base py-3 bg-input" />
            </div>
             <p className="text-xs text-muted-foreground pt-2">
              By clicking "Confirm Booking", you agree to our terms and conditions for event participation.
            </p>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
              Confirm Booking
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground text-center w-full">
            Limited spots available. Book now to secure your adventure!
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
