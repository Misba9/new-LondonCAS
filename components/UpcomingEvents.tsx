import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const UpcomingEvents = () => {
  const events = [
    {
      id: 'open-day-march',
      title: 'Open Day - Health & Social Care',
      date: '2025-03-15',
      time: '10:00 AM - 2:00 PM',
      location: '9 New Road, London E1 1HE',
      type: 'Open Day',
      description: 'Join us to learn about our Highfield qualifications, meet tutors, and tour our facilities.',
      attendees: 25,
      maxAttendees: 50,
      featured: true
    },
    {
      id: 'webinar-level3',
      title: 'Level 3 Adult Care - Information Webinar',
      date: '2025-03-22',
      time: '6:00 PM - 7:00 PM',
      location: 'Online',
      type: 'Webinar',
      description: 'Learn about career opportunities and course structure for our Level 3 Diploma.',
      attendees: 15,
      maxAttendees: 100,
      featured: false
    },
    {
      id: 'career-fair',
      title: 'Health & Social Care Career Fair',
      date: '2025-04-05',
      time: '1:00 PM - 5:00 PM',
      location: 'East London Community Centre',
      type: 'Career Fair',
      description: 'Meet local employers and discover career paths in health and social care.',
      attendees: 40,
      maxAttendees: 200,
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for open days, information sessions, and career events. 
            Get to know LCAS and start your educational journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <Card key={event.id} className={`relative group hover:shadow-lg transition-all duration-300 ${event.featured ? 'border-blue-200 bg-blue-50/50' : ''}`}>
              {event.featured && (
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                    Featured
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {event.type}
                  </Badge>
                  {event.location === 'Online' && (
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                      Online
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                  {event.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                    {event.attendees}/{event.maxAttendees} registered
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Button asChild className="w-full">
                    <Link href={`/events/${event.id}`}>
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;