import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import PhotoCard from '@/components/PhotoCard';
import { mockEvents, mockPhotos } from '@/lib/mockData';
import { Sparkles, Users } from 'lucide-react';

export default function Home() {
  const featuredEvents = mockEvents.slice(0, 2);
  const galleryPreviewPhotos = mockPhotos.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-200px)] min-h-[400px] md:min-h-[500px] flex items-center justify-center text-center rounded-lg overflow-hidden shadow-2xl">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Majestic mountain sunrise"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="mountain sunrise"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 p-6 text-white max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-4 leading-tight">
            Discover Your Next <span className="text-primary">Adventure</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-foreground/80">
            Join Trailblaze, the premier hiking club in Pretoria. Explore breathtaking trails, connect with nature, and forge new friendships.
          </p>
          <Link href="/events" passHref legacyBehavior>
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground text-lg px-8 py-6">
              Explore Events
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-headline font-semibold mb-6 text-primary">Welcome to Trailblaze</h2>
            <p className="text-lg text-foreground/90 mb-4">
              We are a passionate community of hikers based in Pretoria, dedicated to exploring the great outdoors. 
              Our club organizes a variety of activities, from leisurely nature treks to challenging mountain hikes, catering to all skill levels.
            </p>
            <p className="text-lg text-foreground/90 mb-6">
              At Trailblaze, we believe in the power of nature to inspire, rejuvenate, and connect us. Whether you're a seasoned hiker or just starting out, you'll find a welcoming group and unforgettable experiences with us.
            </p>
            <Link href="/signup" passHref legacyBehavior>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Group of hikers enjoying a view" 
              width={600} 
              height={400}
              className="object-cover"
              data-ai-hint="hiking group" 
            />
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-12">
        <h2 className="text-4xl font-headline font-semibold text-center mb-10 text-primary">Upcoming Hikes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/events" passHref legacyBehavior>
            <Button size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
              View All Events
            </Button>
          </Link>
        </div>
      </section>

      {/* Photo Gallery Preview Section */}
      <section className="py-12 bg-card rounded-lg shadow-lg">
        <h2 className="text-4xl font-headline font-semibold text-center mb-10 text-primary">Memories from the Trail</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPreviewPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/gallery" passHref legacyBehavior>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Explore Full Gallery
            </Button>
          </Link>
        </div>
      </section>
      
      {/* AI Assistant CTA Section */}
      <section className="py-12 text-center">
        <Sparkles className="h-16 w-16 text-accent mx-auto mb-4" />
        <h2 className="text-4xl font-headline font-semibold mb-4 text-primary">Need Hiking Advice?</h2>
        <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
          Our AI Hiking Assistant can provide personalized tips, gear recommendations, and safety advice for your next adventure.
        </p>
        <Link href="/ai-assistant" passHref legacyBehavior>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Try the AI Assistant
          </Button>
        </Link>
      </section>
    </div>
  );
}
