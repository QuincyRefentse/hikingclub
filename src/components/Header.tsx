
"use client";

import Link from 'next/link';
import { MountainSnow, UserCircle, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState, useEffect } from 'react'; // useEffect for potential client-side only logic if needed

const Header = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/map', label: 'Trail Map' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/ai-assistant', label: 'AI Assistant' },
  ];

  // Close sheet on navigation (useful if SheetClose asChild isn't enough for some reason, but usually it is)
  // const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
          <MountainSnow className="h-8 w-8" />
          <span className="text-xl sm:text-2xl font-headline font-bold">Pretoria Hiking Club</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-foreground hover:text-accent transition-colors font-medium">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center space-x-2">
          <Link href="/profile">
            <Button variant="ghost" size="icon" aria-label="User Profile">
              <UserCircle className="h-6 w-6 text-accent" />
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">Login</Button>
          </Link>
          <Link href="/signup">
            <Button variant="default" className="bg-primary hover:bg-primary/90">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6 text-accent" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-background p-6">
              <div className="flex flex-col space-y-6 h-full">
                <Link href="/" className="flex items-center gap-2 text-primary mb-6">
                  <MountainSnow className="h-7 w-7" />
                  <span className="text-xl font-headline font-bold">Pretoria Hiking Club</span>
                </Link>
                
                <ul className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <Link href={link.href} className="block py-2 text-lg text-foreground hover:text-accent transition-colors font-medium">
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-3 pt-6 border-t border-border">
                  <SheetClose asChild>
                    <Link href="/profile" className="flex items-center gap-3 py-2 text-lg text-foreground hover:text-accent transition-colors font-medium">
                      <UserCircle className="h-6 w-6 text-accent" />
                      Profile
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/login" className="block w-full">
                      <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg">Login</Button>
                    </Link>
                  </SheetClose>
                   <SheetClose asChild>
                    <Link href="/signup" className="block w-full">
                      <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-lg">Sign Up</Button>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
