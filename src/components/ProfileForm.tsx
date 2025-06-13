"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2, UserCircle, Mail, BookOpen } from 'lucide-react';
import type { UserProfile } from '@/types';


const profileSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  bio: z.string().max(200, { message: "Bio cannot exceed 200 characters." }).optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

interface ProfileFormProps {
  userProfile: UserProfile; 
}

export default function ProfileForm({ userProfile }: ProfileFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: userProfile.name || "",
      email: userProfile.email || "",
      bio: userProfile.bio || "",
    },
  });

  const onSubmit: SubmitHandler<ProfileFormValues> = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);

    toast({
      title: "Profile Updated!",
      description: "Your profile information has been successfully saved.",
    });
  };

  return (
    <Card className="w-full max-w-xl mx-auto shadow-xl bg-card">
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-primary">Edit Your Profile</CardTitle>
        <CardDescription className="text-md text-muted-foreground">
          Keep your information up to date.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Full Name</FormLabel>
                  <div className="flex items-center">
                    <UserCircle className="h-5 w-5 text-muted-foreground mr-3 ml-1"/>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="text-base py-3 bg-input" />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Email Address</FormLabel>
                   <div className="flex items-center">
                    <Mail className="h-5 w-5 text-muted-foreground mr-3 ml-1"/>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} className="text-base py-3 bg-input" />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Bio / About Yourself</FormLabel>
                   <div className="flex items-start"> 
                    <BookOpen className="h-5 w-5 text-muted-foreground mr-3 ml-1 mt-2.5"/>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a bit about your hiking experiences or interests..."
                        className="resize-none text-base py-3 bg-input min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
