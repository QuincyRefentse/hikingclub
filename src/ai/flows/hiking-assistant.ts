'use server';

/**
 * @fileOverview Provides personalized hiking tips, gear recommendations, and safety advice based on location and time of year.
 *
 * - getHikingAssistance - A function that provides personalized hiking assistance.
 * - HikingAssistanceInput - The input type for the getHikingAssistance function.
 * - HikingAssistanceOutput - The return type for the getHikingAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HikingAssistanceInputSchema = z.object({
  location: z.string().describe('The location of the hike.'),
  timeOfYear: z.string().describe('The time of year of the hike.'),
});
export type HikingAssistanceInput = z.infer<typeof HikingAssistanceInputSchema>;

const HikingAssistanceOutputSchema = z.object({
  tips: z.string().describe('Personalized hiking tips for the specified location and time of year.'),
  gearRecommendations: z.string().describe('Gear recommendations for the specified location and time of year.'),
  safetyAdvice: z.string().describe('Safety advice for the specified location and time of year.'),
});
export type HikingAssistanceOutput = z.infer<typeof HikingAssistanceOutputSchema>;

export async function getHikingAssistance(input: HikingAssistanceInput): Promise<HikingAssistanceOutput> {
  return hikingAssistanceFlow(input);
}

const hikingAssistancePrompt = ai.definePrompt({
  name: 'hikingAssistancePrompt',
  input: {schema: HikingAssistanceInputSchema},
  output: {schema: HikingAssistanceOutputSchema},
  prompt: `You are an expert hiking assistant. Provide personalized hiking tips, gear recommendations, and safety advice based on the user's location and the time of year.

Location: {{{location}}}
Time of Year: {{{timeOfYear}}}

Tips: 
Gear Recommendations:
Safety Advice:`,
});

const hikingAssistanceFlow = ai.defineFlow(
  {
    name: 'hikingAssistanceFlow',
    inputSchema: HikingAssistanceInputSchema,
    outputSchema: HikingAssistanceOutputSchema,
  },
  async input => {
    const {output} = await hikingAssistancePrompt(input);
    return output!;
  }
);
