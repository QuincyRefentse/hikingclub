export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Event {
  id: string;
  name: string;
  date: string; // Consider using Date object or ISO string
  description: string;
  difficulty: Difficulty;
  location: string;
  imageUrl: string;
  dataAiHint?: string; // Added hint for event images
  capacity?: number; // Optional, for booking limits
  slug: string;
}

export interface Photo {
  id: string;
  imageUrl: string;
  caption: string;
  eventId?: string; // Optional: link photo to an event
  dataAiHint?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio?: string;
  hikesAttended?: number; // Example custom field
}
