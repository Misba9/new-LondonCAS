import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Building,
  Navigation
} from 'lucide-react';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us | London College of Advanced Studies',
  description: 'Get in touch with LCAS. Find our contact details, office hours, and location. Send us a message or visit our campus in East London.',
  keywords: 'contact, LCAS, London college, address, phone, email, location, East London'
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['9 New Road', 'London, E1 1HE', 'United Kingdom'],
      action: 'Get Directions'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hoc@londoncas.co.uk', 'director@londoncas.co.uk'],
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['Main: Coming Soon', 'Admissions: Coming Soon', 'Support: Coming Soon'],
      action: 'Call Now'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: Closed', 'Sunday: Closed'],
      action: 'Plan Visit'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-4 bg-slate-50 border-b">
        <div className="container px-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Contact</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Contact Us
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              We're here to help with any questions about our courses, admissions process,
              or student support services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{method.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground mb-4">
                      {method.details.map((detail, detailIndex) => (
                        <p key={detailIndex}>{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Map and Location Info */}
            <div className="space-y-6">
              {/* Google Maps Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Navigation className="h-5 w-5 mr-2" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Interactive Map</p>
                      <p className="text-xs">Google Maps integration</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Building className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">London College of Advanced Studies</p>
                        <p className="text-sm text-muted-foreground">9 New Road, London, E1 1HE</p>
                      </div>
                    </div>

                    <div className="pt-4 space-y-2">
                      <h4 className="font-medium">Getting Here:</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p><strong>By Tube:</strong> Whitechapel Station (5 min walk)</p>
                        <p><strong>By Bus:</strong> Routes 25, 205, 254</p>
                        <p><strong>By Car:</strong> Limited street parking available</p>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium">General Inquiries</span>
                      </div>
                      <a href="mailto:hoc@londoncas.co.uk" className="text-sm text-blue-600 hover:underline">
                        Email
                      </a>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">Admissions</span>
                      </div>
                      <a href="mailto:hoc@londoncas.co.uk" className="text-sm text-green-600 hover:underline">
                        Email
                      </a>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium">Student Support</span>
                      </div>
                      <a href="mailto:director@londoncas.co.uk" className="text-sm text-purple-600 hover:underline">
                        Email
                      </a>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm font-medium">Head of Courses</span>
                      </div>
                      <a href="mailto:hoc@londoncas.co.uk" className="text-sm text-yellow-600 hover:underline">
                        Email
                      </a>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-red-600" />
                        <span className="text-sm font-medium">Director</span>
                      </div>
                      <a href="mailto:director@londoncas.co.uk" className="text-sm text-red-600 hover:underline">
                        Email
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Response Times:</strong>
                    </p>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>• General inquiries: Within 24 hours</p>
                      <p>• Admissions: Within 48 hours</p>
                      <p>• Urgent matters: Same day</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Need Immediate Help?
            </h2>
            <p className="text-xl text-blue-100">
              Our live chat support is available during office hours for instant assistance.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <MessageCircle className="h-4 w-4 mr-2" />
              Start Live Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}