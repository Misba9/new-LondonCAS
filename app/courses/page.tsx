import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Users, TrendingUp, Award, Calendar, Star } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Courses | London College of Advanced Studies',
  description: 'Explore our range of Health and Social Care courses from Level 2 to Level 5 diplomas. Career-focused education with flexible learning options in East London.',
  keywords: 'courses, health and social care, diplomas, qualifications, education, London, adult learning'
};

// Mock course data
const courses = [
  {
    id: 'health-social-care-l2',
    title: 'Level 2 Diploma in Health and Social Care',
    level: 'Level 2',
    duration: '6-12 months',
    students: '200+ enrolled',
    rating: 4.8,
    description: 'An introductory course for those starting a career in health and social care. Covers essential knowledge and skills for working in care settings.',
    modules: 10,
    qualification: 'NQF Level 2',
    awardingBody: 'Highfield'
  },
  {
    id: 'health-social-care-l3',
    title: 'Level 3 Diploma in Health and Social Care',
    level: 'Level 3',
    duration: '12-18 months',
    students: '150+ enrolled',
    rating: 4.9,
    description: 'Advanced course for practitioners seeking to develop their knowledge and skills in health and social care environments.',
    modules: 12,
    qualification: 'NQF Level 3',
    awardingBody: 'Highfield'
  },
  {
    id: 'health-social-care-l4',
    title: 'Level 4 Diploma in Health and Social Care',
    level: 'Level 4',
    duration: '18-24 months',
    students: '100+ enrolled',
    rating: 4.7,
    description: 'Professional development course for senior care workers and those aspiring to management roles.',
    modules: 15,
    qualification: 'NQF Level 4',
    awardingBody: 'Highfield'
  },
  {
    id: 'health-social-care-l5',
    title: 'Level 5 Diploma in Health and Social Care',
    level: 'Level 5',
    duration: '24-30 months',
    students: '80+ enrolled',
    rating: 4.9,
    description: 'Management-level qualification for those in leadership positions or aspiring to management roles.',
    modules: 18,
    qualification: 'NQF Level 5',
    awardingBody: 'Highfield'
  },
  {
    id: 'adult-care-l2',
    title: 'Diploma in Adult Care Level 2',
    level: 'Level 2',
    duration: '6-12 months',
    students: '120+ enrolled',
    rating: 4.6,
    description: 'Specialized qualification for those working specifically with adults in care settings.',
    modules: 8,
    qualification: 'NQF Level 2',
    awardingBody: 'Highfield'
  },
  {
    id: 'adult-care-l3',
    title: 'Diploma in Adult Care Level 3',
    level: 'Level 3',
    duration: '12-18 months',
    students: '90+ enrolled',
    rating: 4.8,
    description: 'Advanced qualification for adult care practitioners seeking to enhance their skills and knowledge.',
    modules: 10,
    qualification: 'NQF Level 3',
    awardingBody: 'Highfield'
  }
];

// Course Card Component
const CourseCard = ({ course }: { course: typeof courses[0] }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow group">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="outline" className="mb-2">{course.level}</Badge>
            <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
              {course.title}
            </CardTitle>
          </div>
          <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium ml-1">{course.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{course.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            {course.duration}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            {course.students}
          </div>
        </div>
        
        <Button asChild variant="outline" className="w-full">
          <Link href={`/courses/${course.id}`}>
            View Details
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-4 bg-slate-50 border-b">
        <div className="container px-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Courses</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              Career-Focused Learning
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Our Courses
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover our range of Health and Social Care qualifications designed to advance your career 
              and make a meaningful impact in the lives of others.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/apply">
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Course Levels</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right level for your career stage and aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Level 2 Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Entry-level qualifications for those starting a career in health and social care.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Introduction to care principles</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Communication in care settings</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Safeguarding and protection</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6" asChild>
                  <Link href="#level-2">View Courses</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Level 3 Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Advanced qualifications for practitioners seeking to develop their knowledge and skills.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Person-centred care approaches</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Leadership and management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Specialist care pathways</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6" asChild>
                  <Link href="#level-3">View Courses</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Level 4-5 Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Professional development qualifications for senior practitioners and managers.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Strategic leadership in care</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Quality improvement and compliance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Research and evidence-based practice</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6" asChild>
                  <Link href="#level-4-5">View Courses</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our complete range of Health and Social Care qualifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Learning Approach</h2>
              <p className="text-lg text-muted-foreground">
                Flexible, supportive education designed for working professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Flexible Learning</h3>
                      <p className="text-muted-foreground">
                        Study at your own pace with online materials and flexible assessment deadlines. 
                        Perfect for working professionals balancing work and study.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                      <p className="text-muted-foreground">
                        Dedicated tutors and support staff provide guidance throughout your learning journey. 
                        Regular feedback helps you progress and succeed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Practical Focus</h3>
                      <p className="text-muted-foreground">
                        Real-world case studies and practical assignments ensure you develop 
                        skills directly applicable to your career in health and social care.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Career Advancement</h3>
                      <p className="text-muted-foreground">
                        Our qualifications are recognized by employers and can lead to 
                        promotions, new roles, or career changes in the health and social care sector.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
}