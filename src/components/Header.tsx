import Link from 'next/link';
import { MountainSnow, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/map', label: 'Trail Map' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/ai-assistant', label: 'AI Assistant' },
  ];

  return (
    <header className="bg-background sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
          <MountainSnow className="h-8 w-8" />
          <span className="text-2xl font-headline font-bold">Trailblaze</span>
        </Link>
        <ul className="flex items-center space-x-4 md:space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-foreground hover:text-accent transition-colors font-medium">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-2">
          <Link href="/profile">
            <Button variant="ghost" size="icon" aria-label="User Profile">
              <UserCircle className="h-6 w-6 text-accent" />
            </Button>
          </Link>
          {/* Basic Login/Signup placeholder */}
           <Link href="/login">
             <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">Login</Button>
           </Link>
           <Link href="/signup">
             <Button variant="default" className="bg-primary hover:bg-primary/90">Sign Up</Button>
           </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
