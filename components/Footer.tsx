import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      { title: 'Level 2 Courses', href: '/courses/level-2' },
      { title: 'Level 3 Courses', href: '/courses/level-3' },
      { title: 'Level 4 Courses', href: '/courses/level-4' },
      { title: 'Level 5 Courses', href: '/courses/level-5' },
    ],
    admissions: [
      { title: 'Apply Now', href: '/apply' },
      { title: 'Application Process', href: '/admissions/process' },
      { title: 'Entry Requirements', href: '/admissions/requirements' },
      { title: 'Fees & Finance', href: '/admissions/fees' },
    ],
    support: [
      { title: 'Student Portal', href: '/portal/student' },
      { title: 'Staff Portal', href: '/portal/staff' },
      { title: 'Contact Support', href: '/support' },
      { title: 'FAQs', href: '/faqs' },
    ],
    college: [
      { title: 'About Us', href: '/about' },
      { title: 'Events', href: '/events' },
      // { title: 'News & Blog', href: '/news' },
      { title: 'Careers', href: '/careers' },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand and Contact */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-sm font-bold">LCAS</span>
                </div>
                <div>
                  <div className="text-sm font-bold">London College Of Advanced Studies</div>
                  {/* <div className="text-xs text-slate-400">London College</div> */}
                </div>
              </div>
              <p className="text-sm text-slate-300 max-w-sm">
                London College of Advanced Studies - delivering high-quality, 
                career-focused education in Health and Social Care.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div className="text-sm">
                  <p>9 New Road</p>
                  <p className="text-slate-400">London, E1 1HE</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@londoncas.co.uk" className="text-sm hover:text-blue-400">
                  info@londoncas.co.uk
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 text-blue-400 border-slate-700 hover:border-blue-400 hover:text-blue-400"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Courses</h4>
            <ul className="space-y-2">
              {footerLinks.courses.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Admissions</h4>
            <ul className="space-y-2">
              {footerLinks.admissions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* College */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">College</h4>
            <ul className="space-y-2">
              {footerLinks.college.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Bottom Footer */}
      <div className="container px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-slate-400">
            © {currentYear} London College of Advanced Studies. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;