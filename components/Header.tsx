'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, ChevronDown, User, Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const courseCategories = [
    { title: 'Level 2 Courses', href: '/courses/level-2', count: 9 },
    { title: 'Level 3 Courses', href: '/courses/level-3', count: 2 },
    { title: 'Level 4 Courses', href: '/courses/level-4', count: 2 },
    { title: 'Level 5 Courses', href: '/courses/level-5', count: 3 },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <Image 
              src="/images/London college.png" 
              alt="LCAS" 
              width={120}
              height={48}
              className="h-12 w-auto"
            />
          </div>
          <div className=" sm:flex flex-col">
            <h1 className="text-sm font-bold leading-none">London College Of Advanced Studies</h1>
            {/* <span className="text-xs text-muted-foreground">Advanced Studies</span> */}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          
          {/* Courses Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors">
              Courses <ChevronDown className="ml-1 h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {courseCategories.map((category) => (
                <DropdownMenuItem key={category.href} asChild>
                  <Link href={category.href} className="flex items-center justify-between">
                    {category.title}
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </Link>
                </DropdownMenuItem>
              ))}
              {/* <DropdownMenuItem asChild>
                <Link href="/courses">View All Courses</Link>
              </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/admissions" className="text-sm font-medium hover:text-primary transition-colors">
            Admissions
          </Link>
          {/* <Link href="/news" className="text-sm font-medium hover:text-primary transition-colors">
            News
          </Link> */}
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-4 w-4" />
          </Button>
          
          {/* User Menu */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/login">Student Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/staff-login">Staff Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admin">Admin</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}

          <Button asChild className="hidden sm:flex">
            <Link href="/apply">Apply Now</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <div className="space-y-2">
                  <span className="text-sm font-medium">Courses</span>
                  {courseCategories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="block pl-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/admissions"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Admissions
                </Link>
                <Link
                  href="/news"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  News
                </Link>
                <Link
                  href="/faqs"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  FAQs
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Button asChild className="w-full">
                  <Link href="/apply" onClick={() => setIsOpen(false)}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};



export default Header;