import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Award, 
  Clock, 
  Users, 
  Search, 
  Filter,
  BookOpen,
  ArrowRight 
} from 'lucide-react';

export default function CoursesPage() {
  const courseCategories = [
    {
      level: 'Level 2',
      title: 'Level 2 Courses',
      description: 'Entry-level qualifications perfect for beginners or those returning to education.',
      count: 9,
      href: '/courses/level-2',
      color: 'bg-green-50 border-green-200',
      badgeColor: 'bg-green-100 text-green-800',
      courses: [
        'Adult Social Care Certificate',
        'Awareness of Dementia Award',
        'Health and Safety Award',
        'Preparing to Work in Adult Social Care Certificate',
        'And 5 more qualifications...'
      ]
    },
    {
      level: 'Level 3',
      title: 'Level 3 Courses',
      description: 'Intermediate qualifications equivalent to A-levels for career progression.',
      count: 2,
      href: '/courses/level-3',
      color: 'bg-blue-50 border-blue-200',
      badgeColor: 'bg-blue-100 text-blue-800',
      courses: [
        'Certificate in Preparing to Work in Adult Social Care',
        'Diploma in Adult Care'
      ]
    },
    {
      level: 'Level 4',
      title: 'Level 4 Courses',
      description: 'Higher education level qualifications for supervisory and management roles.',
      count: 2,
      href: '/courses/level-4',
      color: 'bg-purple-50 border-purple-200',
      badgeColor: 'bg-purple-100 text-purple-800',
      courses: [
        'Certificate in Principles of Leadership and Management',
        'Diploma in Adult Care'
      ]
    },
    {
      level: 'Level 5',
      title: 'Level 5 Courses',
      description: 'Advanced qualifications equivalent to the second year of university.',
      count: 3,
      href: '/courses/level-5',
      color: 'bg-orange-50 border-orange-200',
      badgeColor: 'bg-orange-100 text-orange-800',
      courses: [
        'Award in Digital Leadership',
        'Certificate in Principles of Commissioning',
        'Diploma in Leadership for Health and Social Care'
      ]
    }
  ];

  const featuredCourses = [
    {
      title: 'Highfield Level 3 Diploma in Adult Care',
      level: 'Level 3',
      duration: '12-18 months',
      mode: 'Part-time',
      popular: true,
      href: '/courses/level-3/adult-care-diploma'
    },
    {
      title: 'Highfield Level 2 Certificate in Adult Social Care',
      level: 'Level 2',
      duration: '6-12 months',
      mode: 'Part-time',
      popular: true,
      href: '/courses/level-2/adult-social-care-certificate'
    },
    {
      title: 'Highfield Level 4 Diploma in Adult Care',
      level: 'Level 4',
      duration: '15-24 months',
      mode: 'Part-time',
      popular: false,
      href: '/courses/level-4/adult-care-diploma'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              Highfield Approved Qualifications
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Our Courses
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of Highfield qualifications in Health and Social Care, 
              from entry-level certificates to advanced diplomas.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">16</div>
                <div className="text-sm text-slate-300">Total Qualifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">4</div>
                <div className="text-sm text-slate-300">Study Levels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">100%</div>
                <div className="text-sm text-slate-300">Highfield Approved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">2025</div>
                <div className="text-sm text-slate-300">Centre Approved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-slate-50">
        <div className="container px-4">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">Search Courses</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search for qualifications..." 
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="md:w-48">
                <label className="text-sm font-medium mb-2 block">Level</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="level-2">Level 2</SelectItem>
                    <SelectItem value="level-3">Level 3</SelectItem>
                    <SelectItem value="level-4">Level 4</SelectItem>
                    <SelectItem value="level-5">Level 5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:w-48">
                <label className="text-sm font-medium mb-2 block">Duration</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Duration</SelectItem>
                    <SelectItem value="short">6-12 months</SelectItem>
                    <SelectItem value="medium">12-18 months</SelectItem>
                    <SelectItem value="long">18+ months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="md:w-auto w-full">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Courses by Level</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our qualifications are structured across four levels, providing clear progression 
              pathways from entry-level to advanced management positions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courseCategories.map((category, index) => (
              <Card key={index} className={`${category.color} hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <Badge className={category.badgeColor}>
                      {category.level}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {category.count} Qualifications
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <p className="text-slate-600">{category.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Available Qualifications:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {category.courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="flex items-center space-x-2">
                          <BookOpen className="h-3 w-3 text-blue-600 flex-shrink-0" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button asChild className="w-full">
                      <Link href={category.href}>
                        View {category.level} Courses
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Popular Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These are our most sought-after qualifications, perfect for career starters 
              and professionals looking to advance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                {course.popular && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                      Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <Badge variant="outline" className="w-fit text-xs mb-2">
                    {course.level}
                  </Badge>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
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

                  <div className="pt-4">
                    <Button asChild className="w-full">
                      <Link href={course.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our admissions team is here to help you choose the right qualification 
              and guide you through the application process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/contact">
                  Get Advice
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}