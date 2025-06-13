"use client";

import type { HikingAssistanceInput, HikingAssistanceOutput } from '@/ai/flows/hiking-assistant';
import { getHikingAssistance } from '@/ai/flows/hiking-assistant';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Loader2, Sparkles, Compass, CalendarClock } from 'lucide-react';

const formSchema = z.object({
  location: z.string().min(3, { message: "Location must be at least 3 characters." }),
  timeOfYear: z.string().min(3, { message: "Time of year must be at least 3 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function HikingAssistantForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<HikingAssistanceOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      timeOfYear: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const assistanceInput: HikingAssistanceInput = {
        location: data.location,
        timeOfYear: data.timeOfYear,
      };
      const output = await getHikingAssistance(assistanceInput);
      setResult(output);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
      console.error("Error fetching hiking assistance:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl bg-card">
      <CardHeader className="text-center">
        <Sparkles className="h-12 w-12 text-primary mx-auto mb-3" />
        <CardTitle className="text-3xl font-headline text-primary">AI Hiking Assistant</CardTitle>
        <CardDescription className="text-md text-muted-foreground">
          Get personalized hiking tips, gear recommendations, and safety advice.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Hike Location</FormLabel>
                  <div className="flex items-center">
                    <Compass className="h-5 w-5 text-muted-foreground mr-3 ml-1" />
                    <FormControl>
                      <Input placeholder="e.g., Drakensberg Mountains" {...field} className="text-base py-3 bg-input" />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timeOfYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Time of Year / Season</FormLabel>
                  <div className="flex items-center">
                    <CalendarClock className="h-5 w-5 text-muted-foreground mr-3 ml-1" />
                    <FormControl>
                      <Input placeholder="e.g., Summer or December" {...field} className="text-base py-3 bg-input" />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-stretch">
            <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Getting Advice...
                </>
              ) : (
                "Get Hiking Advice"
              )}
            </Button>
            {error && <p className="mt-4 text-sm text-destructive text-center">{error}</p>}
          </CardFooter>
        </form>
      </Form>

      {result && (
        <div className="mt-6 p-6 border-t border-border">
          <h3 className="text-2xl font-headline font-semibold mb-4 text-accent">Your Personalized Hiking Plan:</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-1">Tips:</h4>
              <Textarea readOnly value={result.tips} className="bg-input/50 min-h-[100px] text-base" rows={4}/>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-1">Gear Recommendations:</h4>
              <Textarea readOnly value={result.gearRecommendations} className="bg-input/50 min-h-[100px] text-base" rows={4}/>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-1">Safety Advice:</h4>
              <Textarea readOnly value={result.safetyAdvice} className="bg-input/50 min-h-[100px] text-base" rows={4}/>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
