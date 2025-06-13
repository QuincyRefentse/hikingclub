import type { Photo } from '@/types';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <CardContent className="p-0">
        <Image
          src={photo.imageUrl}
          alt={photo.caption}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
          data-ai-hint={photo.dataAiHint || "hiking scenery"}
        />
      </CardContent>
      <CardFooter className="p-3 bg-card/80 backdrop-blur-sm">
        <p className="text-sm text-foreground font-medium truncate">{photo.caption}</p>
      </CardFooter>
    </Card>
  );
};

export default PhotoCard;
