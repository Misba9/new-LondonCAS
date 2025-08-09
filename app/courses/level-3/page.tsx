import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, BookOpen, Award, ArrowRight, TrendingUp, Target } from 'lucide-react';

export default function Level3CoursesPage() {
  const level3Courses = [
    {
      id: 'preparing-adult-care',
      title: 'Highfield Level 3 Certificate in Preparing to Work in Adult Social Care',
      code: 'HSC-L3-001',
      duration: '9-12 months',
      mode: 'Part-time',
      credits: '18 credits',
      description: 'Advanced preparation for senior roles in adult social care with leadership elements.',
      objectives: [
        'Develop advanced care knowledge and skills',
        'Understand complex care needs assessment',
        'Learn leadership and supervision principles',
        'Master professional development planning',
        'Apply evidence-based care practices'
      ],
      suitableFor: [
        'Experienced care workers',
        'Team leaders',
        'Supervisors',
        'Career progressors'
      ],
      entryRequirements: [
        'Level 2 qualification in care or equivalent experience',
        'Working in or have access to a care setting',
        'Basic literacy and numeracy skills'
      ],
      progression: [
        'Level 4 qualifications',
        'Management roles',
        'Specialist care positions',
        'Higher education'
      ],
      href: '/courses/level-3/preparing-adult-care'
    },
    {
      id: 'adult-care-diploma',
      title: 'Highfield Level 3 Diploma in Adult Care',
      code: 'HSC-L3-002',
      duration: '12-18 months',
      mode: 'Part-time',
      credits: '58 credits',
      description: 'Comprehensive diploma for senior care practitioners and those aspiring to supervisory roles.',
      objectives: [
        'Master advanced person-centred care approaches',
        'Develop leadership and management skills',
        'Learn quality assurance and improvement methods',
        'Understand safeguarding and risk management',
        'Build mentoring and coaching capabilities'
      ],
      suitableFor: [
        'Senior care workers',
        'Team leaders',
        'Aspiring managers',
        'Care coordinators'
      ],
      entryRequirements: [
        'Level 2 in care or significant experience',
        'Currently working in adult care setting',
        'Employer support for workplace assessment'
      ],
      progression: [
        'Level 4 and 5 qualifications',
        'Management and leadership roles',
        'Specialist care pathways',
        'Professional registration opportunities'
      ],
      href: '/courses/level-3/adult-care-diploma'
    }
  ];

  const progressionPaths = [
    {
      from: 'Level 2 Certificate',
      to: 'Level 3 Certificate',
      duration: '9-12 months',
      role: 'Senior Care Worker'
    },
    {
      from: 'Level 3 Certificate',
      to: 'Level 3 Diploma',
      duration: '6-9 months',
      role: 'Team Leader'
    },
    {
      from: 'Level 3 Diploma',
      to: 'Level 4 Qualification',
      duration: '12-15 months',
      role: 'Care Manager'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-indigo-700 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              Intermediate Level • A-Level Equivalent
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Level 3 Courses
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Intermediate qualifications equivalent to A-levels, perfect for career progression 
              into senior care positions and leadership roles.
            </p>
            
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">2</div>
                <div className="text-sm text-blue-200">Qualifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">9-18</div>
                <div className="text-sm text-blue-200">Months Duration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">Advanced</div>
                <div className="text-sm text-blue-200">Level Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">Leadership</div>
                <div className="text-sm text-blue-200">Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-blue-50">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Advance Your Care Career</h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Level 3 qualifications are designed for experienced care workers ready to take on greater 
                responsibilities, lead teams, and make strategic decisions in care environments.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center border-blue-200">
                <TrendingUp className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Career Progression</h3>
                <p className="text-slate-600 text-sm">Move into senior and supervisory positions</p>
              </Card>
              <Card className="p-6 text-center border-blue-200">
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Leadership Skills</h3>
                <p className="text-slate-600 text-sm">Develop team management and mentoring capabilities</p>
              </Card>
              <Card className="p-6 text-center border-blue-200">
                <Target className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Specialisation</h3>
                <p className="text-slate-600 text-sm">Focus on specific care areas and advanced practices</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Progression Pathway */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Career Progression Pathway</h2>
              <p className="text-lg text-slate-600">
                See how Level 3 qualifications fit into your career journey
              </p>
            </div>

            <div className="space-y-6">
              {progressionPaths.map((path, index) => (
                <Card key={index} className="p-6 border-blue-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="font-semibold text-slate-900">{path.from}</div>
                        <div className="text-sm text-slate-500">Current Level</div>
                      </div>
                      <ArrowRight className="h-6 w-6 text-blue-600" />
                      <div className="text-center">
                        <div className="font-semibold text-blue-600">{path.to}</div>
                        <div className="text-sm text-slate-500">Next Step</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-slate-900">{path.role}</div>
                      <div className="text-sm text-slate-500">{path.duration}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Level 3 Qualifications</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Both qualifications provide comprehensive training for senior care positions 
              and management opportunities.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {level3Courses.map((course, index) => (
              <Card key={course.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                      {course.code}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {course.credits}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl leading-tight hover:text-blue-600 transition-colors mb-3">
                    {course.title}
                  </CardTitle>
                  <p className="text-slate-600 leading-relaxed">
                    {course.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  {/* Course Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-slate-600">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      Duration: {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Users className="h-4 w-4 mr-2 text-blue-600" />
                      Mode: {course.mode}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Learning Objectives */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900">Key Learning Objectives:</h4>
                      <ul className="text-sm text-slate-600 space-y-2">
                        {course.objectives.map((objective, objIndex) => (
                          <li key={objIndex} className="flex items-start space-x-2">
                            <BookOpen className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Entry Requirements & Progression */}
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-900">Entry Requirements:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {course.entryRequirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2">
                              <Target className="h-3 w-3 text-blue-600 mt-1 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-900">Career Progression:</h4>
                        <div className="flex flex-wrap gap-1">
                          {course.progression.map((prog, progIndex) => (
                            <Badge key={progIndex} variant="secondary" className="text-xs">
                              {prog}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Suitable For */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Ideal For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.suitableFor.map((suitable, suitIndex) => (
                        <Badge key={suitIndex} variant="outline" className="text-xs border-blue-200 text-blue-700">
                          {suitable}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button asChild className="w-full sm:w-auto" size="lg">
                      <Link href={course.href}>
                        Learn More & Apply
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready for Leadership?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Level 3 qualifications prepare you for senior positions and management roles 
              in health and social care. Take the next step in your career journey.
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
                  Get Career Advice
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}