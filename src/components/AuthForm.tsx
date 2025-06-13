"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, LogIn, UserPlus, KeyRound, Mail } from 'lucide-react';

interface AuthFormProps {
  mode: 'login' | 'signup';
}

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

const signupSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
});

type LoginFormValues = z.infer<typeof loginSchema>;
type SignupFormValues = z.infer<typeof signupSchema>;

export default function AuthForm({ mode }: AuthFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const isLogin = mode === 'login';
  const schema = isLogin ? loginSchema : signupSchema;

  const form = useForm<LoginFormValues | SignupFormValues>({
    resolver: zodResolver(schema),
    defaultValues: isLogin 
      ? { email: "", password: "" }
      : { name: "", email: "", password: "", confirmPassword: "" },
  });

  const onSubmit: SubmitHandler<LoginFormValues | SignupFormValues> = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);

    toast({
      title: isLogin ? "Login Successful!" : "Signup Successful!",
      description: isLogin ? "Welcome back!" : "Your account has been created. Please login.",
    });
    
    if (isLogin) {
      router.push('/profile'); 
    } else {
      router.push('/login'); 
    }
  };
  
  const Icon = isLogin ? LogIn : UserPlus;

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl bg-card">
      <CardHeader className="text-center">
        <Icon className="h-12 w-12 text-primary mx-auto mb-3" />
        <CardTitle className="text-3xl font-headline text-primary">
          {isLogin ? "Welcome Back!" : "Create Your Account"}
        </CardTitle>
        <CardDescription className="text-md text-muted-foreground">
          {isLogin ? "Login to access your Pretoria Hiking Club account." : "Join our community of nature lovers."}
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            {!isLogin && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Full Name</FormLabel>
                     <div className="flex items-center">
                        <UserPlus className="h-5 w-5 text-muted-foreground mr-3 ml-1"/>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="text-base py-3 bg-input" />
                        </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Password</FormLabel>
                   <div className="flex items-center">
                    <KeyRound className="h-5 w-5 text-muted-foreground mr-3 ml-1"/>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} className="text-base py-3 bg-input" />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!isLogin && (
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Confirm Password</FormLabel>
                     <div className="flex items-center">
                        <KeyRound className="h-5 w-5 text-muted-foreground mr-3 ml-1"/>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} className="text-base py-3 bg-input" />
                        </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-4">
            <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
              {isLoading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (isLogin ? "Login" : "Sign Up")}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <Link href={isLogin ? "/signup" : "/login"} className="font-medium text-accent hover:underline">
                {isLogin ? "Sign Up" : "Login"}
              </Link>
            </p>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
