import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


const HighfieldApproval = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container px-4">
        <Card className="relative overflow-hidden border-2 border-blue-200 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-sm">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    Latest Update: 18.7.2025
                  </Badge>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    We are now an{' '}
                    <span className="text-blue-600">Approved Centre</span>{' '}
                    for Highfield Qualifications
                  </h2>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    London College of Advanced Studies is proud to be an officially approved centre 
                    for delivering regulated qualifications from <strong>Highfield</strong>, 
                    a global leader in compliance and work-based training.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/courses">
                      View Our Qualifications
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/about#highfield">
                      Learn More
                    </Link>
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">16</div>
                    <div className="text-sm text-slate-600">Qualifications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">4</div>
                    <div className="text-sm text-slate-600">Levels</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">100%</div>
                    <div className="text-sm text-slate-600">Regulated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">2025</div>
                    <div className="text-sm text-slate-600">Approved</div>
                  </div>
                </div>
              </div>

              {/* Logo and Visual */}
              <div className="flex flex-col items-center space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                  {/* <div className="flex items-center justify-center space-x-4">
                    <Award className="h-16 w-16 text-blue-600" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">Highfield</div>
                      <div className="text-sm text-slate-600">Approved Centre</div>
                    </div>
                  </div> */}

 {/* Image here */}
      <Image
        src="/images/highfield-logo.png" // Place image in public/images folder
        alt="Highfield Approved Centre Logo"
        width={280}
        height={220}
        className="rounded-lg"
      />
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-sm text-slate-600 italic">
                    "Global leader in compliance and work-based training"
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HighfieldApproval;