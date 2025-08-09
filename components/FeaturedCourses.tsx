import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, ArrowRight } from 'lucide-react';

const FeaturedCourses = () => {
  const featuredCourses = [
    {
      id: 'level-3-adult-care',
      title: 'Level 3 Diploma in Adult Care',
      level: 'Level 3',
      category: 'Health & Social Care',
      duration: '12-18 months',
      mode: 'Part-time',
      description: 'Comprehensive qualification for those working or wanting to work in adult social care settings.',
      features: ['Work-based learning', 'Practical assessments', 'Career progression'],
      popular: true,
      href: '/courses/level-3/adult-care-diploma'
    },
    {
      id: 'level-2-adult-care',
      title: 'Level 2 Certificate in Adult Social Care',
      level: 'Level 2',
      category: 'Health & Social Care',
      duration: '6-12 months',
      mode: 'Part-time',
      description: 'Perfect introduction to adult social care for new entrants to the sector.',
      features: ['Entry-level', 'Flexible learning', 'Support included'],
      popular: false,
      href: '/courses/level-2/adult-social-care-certificate'
    },
    {
      id: 'level-4-leadership',
      title: 'Level 4 Certificate in Leadership and Management',
      level: 'Level 4',
      category: 'Leadership',
      duration: '9-15 months',
      mode: 'Part-time',
      description: 'Advanced qualification for those in supervisory or management roles in adult care.',
      features: ['Management skills', 'Leadership development', 'Career advancement'],
      popular: false,
      href: '/courses/level-4/leadership-management-certificate'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Highfield Approved Qualifications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular Highfield qualifications designed to advance your career 
            in health and social care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="relative group hover:shadow-lg transition-all duration-300">
              {course.popular && (
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                    Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {course.level}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {course.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {course.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {course.description}
                </p>

                {/* Course Details */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {course.mode}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <Award className="h-3 w-3 mr-2 text-green-600" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full group">
                    <Link href={course.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;