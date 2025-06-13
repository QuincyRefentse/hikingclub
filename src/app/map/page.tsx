
import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function MapPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8 bg-card rounded-lg shadow-md">
        <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary mb-4">Explore Our Trails</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the diverse hiking trails curated by Pretoria Hiking Club around Pretoria. Plan your next adventure with our interactive map.
        </p>
      </section>

      <section className="bg-card p-4 md:p-8 rounded-lg shadow-xl">
        <div className="aspect-[16/9] w-full relative overflow-hidden rounded-md border-2 border-primary shadow-inner bg-black">
          {/* Placeholder for interactive map. Using a static image for now. */}
          <Image
            src="https://placehold.co/1200x675.png" 
            alt="Interactive Trail Map Placeholder"
            layout="fill"
            objectFit="cover"
            data-ai-hint="terrain map"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <p className="text-2xl text-white font-semibold p-4 bg-black/70 rounded">
              Interactive Map Coming Soon!
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
            <p className="text-muted-foreground">
                In the future, this map will feature clickable trails, points of interest, elevation data, and more.
            </p>
        </div>
      </section>

       <section className="py-8">
        <h2 className="text-3xl font-headline font-semibold text-center mb-6 text-primary">Featured Trail Areas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Wonderboom', 'Faerie Glen', 'Groenkloof'].map(area => (
            <div key={area} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-headline text-accent mb-2">{area} Nature Reserve</h3>
              <p className="text-sm text-muted-foreground">Popular trails for various skill levels. Known for its scenic beauty and wildlife.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
