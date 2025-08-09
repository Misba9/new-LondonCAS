import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90" />
      </div>

      <div className="relative container px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                Founded 2025 • East London
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Learn. <br />
                <span className="text-blue-400">Advance.</span> <br />
                Succeed.
              </h1>
              <p className="text-xl text-slate-200 max-w-xl">
                Dynamic and inclusive private college delivering high-quality, 
                career-focused education in Health and Social Care.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Highfield Approved Centre</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Experienced Tutors</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Flexible Learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Career-Focused</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/apply">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Link href="/courses">
                  View Courses
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Card */}
          <div className="flex justify-center">
            <Card className="p-6 w-full max-w-md bg-white/95 backdrop-blur">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Get Started Today</h3>
                  <p className="text-sm text-muted-foreground">
                    Contact us for course information and admissions guidance
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium">9 New Road</p>
                      <p className="text-muted-foreground">London, E1 1HE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <a href="mailto:info@londoncas.co.uk" className="text-sm font-medium hover:text-blue-600">
                      info@londoncas.co.uk
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-medium">Coming Soon</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      Contact Us Today
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;