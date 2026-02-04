'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { mainNavigation, ctaNavigation } from '@/content/navigation';
import { siteConfig } from '@/content/site';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 sm:px-6 lg:px-8 flex h-14 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg sm:text-xl">{siteConfig.name}</span>
        </Link>

        {/* Desktop/Tablet Navigation - hidden on mobile */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile/Tablet Menu */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link href={ctaNavigation.primary.href}>
              <Button size="sm">{ctaNavigation.primary.name}</Button>
            </Link>
          </div>

          {/* Mobile/Tablet Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[340px]">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu principal</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6 mt-6">
                {/* Mobile Nav Links */}
                <nav className="flex flex-col space-y-3 sm:space-y-4">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base sm:text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <hr />

                {/* Mobile CTA */}
                <div className="flex flex-col space-y-3">
                  <Link
                    href={ctaNavigation.primary.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button className="w-full" size="lg">
                      {ctaNavigation.primary.name}
                    </Button>
                  </Link>
                  <Link
                    href={ctaNavigation.secondary.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button variant="outline" className="w-full" size="lg">
                      {ctaNavigation.secondary.name}
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
