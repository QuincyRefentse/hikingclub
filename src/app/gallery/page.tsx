import PhotoCard from '@/components/PhotoCard';
import { mockPhotos } from '@/lib/mockData';
import { Camera } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8 bg-card rounded-lg shadow-md">
        <Camera className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary mb-4">Trailblaze Photo Gallery</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Relive the moments and get inspired for your next adventure. A collection of memories from our past hikes and events.
        </p>
      </section>

      <section>
        {mockPhotos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-10">
            No photos in the gallery yet. Check back after our next event!
          </p>
        )}
      </section>
    </div>
  );
}
