import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, BookOpen, Award, ArrowRight, Crown, Target, Building } from 'lucide-react';

export default function Level4CoursesPage() {
  const level4Courses = [
    {
      id: 'leadership-management-principles',
      title: 'Highfield Level 4 Certificate in Principles of Leadership and Management for Adult Care',
      code: 'HSC-L4-001',
      duration: '9-15 months',
      mode: 'Part-time',
      credits: '25 credits',
      description: 'Advanced leadership qualification for those in supervisory or management roles in adult care settings.',
      objectives: [
        'Develop strategic leadership skills for care environments',
        'Master financial management and budgeting in care',
        'Learn quality assurance and performance management',
        'Understand regulatory compliance and governance',
        'Build change management and innovation capabilities',
        'Develop staff recruitment, development and retention strategies'
      ],
      suitableFor: [
        'Care managers',
        'Team leaders',
        'Senior supervisors',
        'Deputy managers'
      ],
      entryRequirements: [
        'Level 3 qualification in care or equivalent experience',
        'Currently in a supervisory or management role',
        'Minimum 2 years experience in adult care',
        'Employer support for management activities'
      ],
      progression: [
        'Level 5 qualifications',
        'Senior management roles',
        'Care home management',
        'Area/Regional management',
        'Director positions'
      ],
      keyTopics: [
        'Strategic planning and development',
        'Financial management and budgeting',
        'Quality assurance systems',
        'Staff management and development',
        'Regulatory compliance',
        'Risk management and governance'
      ],
      href: '/courses/level-4/leadership-management-principles'
    },
    {
      id: 'adult-care-diploma',
      title: 'Highfield Level 4 Diploma in Adult Care',
      code: 'HSC-L4-002',
      duration: '15-24 months',
      mode: 'Part-time',
      credits: '65 credits',
      description: 'Comprehensive management-level diploma for senior practitioners and care home managers.',
      objectives: [
        'Master advanced care management principles',
        'Develop comprehensive leadership and business skills',
        'Learn advanced safeguarding and protection strategies',
        'Understand complex care needs assessment and planning',
        'Build expertise in service improvement and innovation',
        'Develop strategic thinking and decision-making skills'
      ],
      suitableFor: [
        'Care home managers',
        'Service managers',
        'Senior care professionals',
        'Aspiring directors'
      ],
      entryRequirements: [
        'Level 3 diploma in care or equivalent',
        'Minimum 3 years management experience',
        'Currently managing a care service or team',
        'Access to comprehensive management activities'
      ],
      progression: [
        'Level 5 and above qualifications',
        'Executive management roles',
        'Care group management',
        'Consultancy opportunities',
        'Higher education pathways'
      ],
      keyTopics: [
        'Advanced care management',
        'Business development and strategy',
        'Advanced safeguarding practices',
        'Service design and improvement',
        'Leadership and organisational development',
        'Complex care coordination'
      ],
      href: '/courses/level-4/adult-care-diploma'
    }
  ];

  const managementCompetencies = [
    {
      title: 'Strategic Leadership',
      description: 'Develop vision, strategy and long-term planning skills',
      icon: Crown
    },
    {
      title: 'Financial Management',
      description: 'Master budgeting, cost control and resource allocation',
      icon: Target
    },
    {
      title: 'Quality Assurance',
      description: 'Implement and monitor quality systems and standards',
      icon: Award
    },
    {
      title: 'Organisational Development',
      description: 'Build effective teams and organisational culture',
      icon: Building
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-800 to-violet-700 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800">
              Management Level • Higher Education Equivalent
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Level 4 Courses
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Higher education level qualifications for supervisory and management roles. 
              Develop strategic leadership skills for senior positions in adult care.
            </p>
            
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">2</div>
                <div className="text-sm text-purple-200">Qualifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">9-24</div>
                <div className="text-sm text-purple-200">Months Duration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">Management</div>
                <div className="text-sm text-purple-200">Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">Strategic</div>
                <div className="text-sm text-purple-200">Skills</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Competencies */}
      <section className="py-16 bg-purple-50">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Management Excellence</h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Level 4 qualifications develop the strategic thinking and management competencies 
                required for senior leadership positions in health and social care.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {managementCompetencies.map((competency, index) => {
                const Icon = competency.icon;
                return (
                  <Card key={index} className="p-6 text-center border-purple-200 hover:shadow-lg transition-shadow">
                    <Icon className="h-10 w-10 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{competency.title}</h3>
                    <p className="text-slate-600 text-sm">{competency.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-purple-200 bg-purple-50/50">
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Ready for Management?</h2>
                <p className="text-slate-600 leading-relaxed">
                  Level 4 qualifications are designed for experienced professionals who are ready 
                  to take on significant management responsibilities. These courses require:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900">Minimum Requirements:</h3>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li className="flex items-start space-x-2">
                        <Target className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Level 3 qualification or equivalent experience</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Target className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>2-3 years management/supervisory experience</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Target className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Current management responsibilities</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Target className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Employer support for study activities</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900">Ideal Candidates:</h3>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li className="flex items-start space-x-2">
                        <Crown className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Care home managers and deputy managers</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Crown className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Service managers and team leaders</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Crown className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Senior supervisors with management aspirations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Crown className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Experienced professionals seeking advancement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Level 4 Qualifications</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Both qualifications provide comprehensive management training for senior positions 
              in adult care services.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {level4Courses.map((course, index) => (
              <Card key={course.id} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
                      {course.code}
                    </Badge>
                    <div className="text-right">
                      <Badge variant="secondary" className="text-xs mb-1">
                        {course.credits}
                      </Badge>
                      <div className="text-xs text-slate-500">Higher Education Level</div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl leading-tight hover:text-purple-600 transition-colors mb-4">
                    {course.title}
                  </CardTitle>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {course.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  {/* Course Details */}
                  <div className="grid md:grid-cols-2 gap-4 p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-purple-600" />
                      <span><strong>Duration:</strong> {course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-purple-600" />
                      <span><strong>Mode:</strong> {course.mode}</span>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-10">
                    {/* Learning Objectives */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 text-lg">Key Learning Objectives:</h4>
                      <ul className="text-sm text-slate-600 space-y-3">
                        {course.objectives.map((objective, objIndex) => (
                          <li key={objIndex} className="flex items-start space-x-3">
                            <BookOpen className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Topics */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 text-lg">Key Topics Covered:</h4>
                      <ul className="text-sm text-slate-600 space-y-3">
                        {course.keyTopics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start space-x-3">
                            <Award className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-10">
                    {/* Entry Requirements */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 text-lg">Entry Requirements:</h4>
                      <ul className="text-sm text-slate-600 space-y-2">
                        {course.entryRequirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2">
                            <Target className="h-3 w-3 text-purple-600 mt-1 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Career Progression */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 text-lg">Career Progression:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.progression.map((prog, progIndex) => (
                          <Badge key={progIndex} variant="outline" className="text-xs border-purple-200 text-purple-700">
                            {prog}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Suitable For */}
                  <div className="space-y-4 p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold text-slate-900">Ideal For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.suitableFor.map((suitable, suitIndex) => (
                        <Badge key={suitIndex} variant="secondary" className="text-sm bg-purple-100 text-purple-800">
                          {suitable}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-violet-600 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Advance to Senior Management
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Level 4 qualifications provide the strategic skills and knowledge needed 
              for senior management positions in health and social care services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                <Link href="/contact">
                  Management Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}