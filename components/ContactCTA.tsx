import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Educational Journey?
            </h2>
            <p className="text-lg text-blue-100">
              Get in touch with our admissions team today. We're here to help you 
              choose the right qualification and guide you through the application process.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link href="/apply">
                  Apply Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-white">Visit Us</p>
                    <p className="text-blue-100">9 New Road, London, E1 1HE</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:info@londoncas.co.uk" className="text-blue-100 hover:text-white">
                      info@londoncas.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-blue-100">Coming Soon</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-white">Live Chat</p>
                    <p className="text-blue-100">Available Mon-Fri, 9am-5pm</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                <p className="text-sm text-blue-100">
                  <strong className="text-white">Office Hours:</strong><br />
                  Monday to Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;