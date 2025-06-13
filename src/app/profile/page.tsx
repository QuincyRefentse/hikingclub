import ProfileForm from '@/components/ProfileForm';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle, Mountain, History } from 'lucide-react';
import type { UserProfile as UserProfileType } from '@/types';

const mockUserProfile: UserProfileType = {
  id: 'user123',
  name: 'Alex Hiker',
  email: 'alex.hiker@example.com',
  bio: 'Passionate about exploring new trails and photographing nature. Always up for a challenge!',
  hikesAttended: 12,
};

export default function ProfilePage() {
  const user = mockUserProfile; 

  return (
    <div className="space-y-8 py-8">
      <section className="text-center">
        <UserCircle className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary mb-2">My Profile</h1>
        <p className="text-lg text-muted-foreground">Manage your Trailblaze account and preferences.</p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="md:col-span-1 shadow-lg bg-card">
          <CardHeader className="items-center text-center">
            <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
              <AvatarImage src={`https://placehold.co/100x100.png?text=${user.name.charAt(0)}`} alt={user.name} data-ai-hint="profile avatar" />
              <AvatarFallback className="text-3xl bg-muted text-muted-foreground">{user.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl font-headline text-accent">{user.name}</CardTitle>
            <CardDescription className="text-muted-foreground">{user.email}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {user.bio && (
              <div className="text-sm">
                <strong className="text-foreground/80 block mb-1">Bio:</strong>
                <p className="text-muted-foreground italic">{user.bio}</p>
              </div>
            )}
            <div className="flex items-center text-sm">
              <Mountain className="h-4 w-4 mr-2 text-accent" />
              <strong className="text-foreground/80">Hikes Attended:</strong>
              <span className="ml-2 text-muted-foreground">{user.hikesAttended || 0}</span>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <ProfileForm userProfile={user} />
        </div>
      </div>

      <section className="mt-12">
         <Card className="shadow-lg bg-card">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary flex items-center">
                    <History className="h-6 w-6 mr-2 text-accent" />
                    My Activity (Coming Soon)
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                    View your past bookings, favorite trails, and community contributions.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground italic">This section will display your hike history and preferences in the future.</p>
            </CardContent>
         </Card>
      </section>
    </div>
  );
}
