import type { Event, Photo } from '@/types';

export const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Sunrise Hike at Wonderboom Nature Reserve',
    date: '2024-08-15T06:00:00Z',
    description: 'Experience a breathtaking sunrise over Pretoria from the top of Wonderboom Hill. This moderate hike is suitable for most fitness levels.',
    difficulty: 'Medium',
    location: 'Wonderboom Nature Reserve',
    imageUrl: 'https://placehold.co/400x250.png',
    capacity: 20,
    slug: 'sunrise-wonderboom'
  },
  {
    id: '2',
    name: 'Faerie Glen Nature Reserve Trail Run',
    date: '2024-08-22T08:00:00Z',
    description: 'A challenging trail run through the beautiful Faerie Glen Nature Reserve. Expect varied terrain and stunning views.',
    difficulty: 'Hard',
    location: 'Faerie Glen Nature Reserve',
    imageUrl: 'https://placehold.co/400x250.png',
    capacity: 15,
    slug: 'faerie-glen-trail-run'
  },
  {
    id: '3',
    name: 'Groenkloof Nature Reserve Family Walk',
    date: '2024-09-01T09:00:00Z',
    description: 'An easy and enjoyable walk perfect for families and beginners. Discover the wildlife in South Africa\'s oldest nature reserve.',
    difficulty: 'Easy',
    location: 'Groenkloof Nature Reserve',
    imageUrl: 'https://placehold.co/400x250.png',
    capacity: 30,
    slug: 'groenkloof-family-walk'
  },
  {
    id: '4',
    name: 'Hennops Hiking Trail Adventure',
    date: '2024-09-10T07:30:00Z',
    description: 'Explore the diverse Hennops trails, featuring river crossings, caves, and scenic viewpoints. A full day of adventure.',
    difficulty: 'Medium',
    location: 'Hennops Hiking Trail',
    imageUrl: 'https://placehold.co/400x250.png',
    capacity: 25,
    slug: 'hennops-adventure'
  }
];

export const mockPhotos: Photo[] = [
  { id: 'p1', imageUrl: 'https://placehold.co/400x300.png', caption: 'Group at Wonderboom Summit', dataAiHint: "group photo hiking" },
  { id: 'p2', imageUrl: 'https://placehold.co/400x300.png', caption: 'Trail views in Faerie Glen', dataAiHint: "scenic overlook" },
  { id: 'p3', imageUrl: 'https://placehold.co/400x300.png', caption: 'Wildlife spotting at Groenkloof', dataAiHint: "wildlife nature" },
  { id: 'p4', imageUrl: 'https://placehold.co/400x300.png', caption: 'Hennops River Crossing Fun', dataAiHint: "river crossing" },
  { id: 'p5', imageUrl: 'https://placehold.co/400x300.png', caption: 'Sunset over the Magaliesberg', dataAiHint: "mountain sunset" },
  { id: 'p6', imageUrl: 'https://placehold.co/400x300.png', caption: 'Exploring ancient caves', dataAiHint: "cave exploration" },
];
