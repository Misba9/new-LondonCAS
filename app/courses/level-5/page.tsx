import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, BookOpen, Award, ArrowRight, Crown, Target, Briefcase, GraduationCap } from 'lucide-react';

export default function Level5CoursesPage() {
  const level5Courses = [
    {
      id: 'digital-leadership',
      title: 'Highfield Level 5 Award in Understanding Digital Leadership in Adult Social Care',
      code: 'HSC-L5-001',
      duration: '6-9 months',
      mode: 'Part-time',
      credits: '12 credits',
      description: 'Cutting-edge qualification focusing on digital transformation and technology leadership in care settings.',
      objectives: [
        'Master digital transformation strategies in care environments',
        'Understand emerging technologies and their care applications',
        'Learn data management and digital governance principles',
        'Develop skills in leading technological change',
        'Build digital literacy across care teams'
      ],
      suitableFor: [
        'Senior care managers',
        'Technology coordinators',
        'Innovation leads',
        'Digital transformation specialists'
      ],
      entryRequirements: [
        'Level 4 qualification or significant management experience',
        'Senior management role in care setting',
        'Basic understanding of digital technologies',
        'Access to digital systems in workplace'
      ],
      keyTopics: [
        'Digital strategy development',
        'Emerging care technologies',
        'Data governance and security',
        'Change management in digital contexts',
        'Digital ethics and privacy'
      ],
      href: '/courses/level-5/digital-leadership'
    },
    {
      id: 'commissioning-principles',
      title: 'Highfield Level 5 Certificate in Principles of Commissioning for Wellbeing',
      code: 'HSC-L5-002',
      duration: '9-12 months',
      mode: 'Part-time',
      credits: '18 credits',
      description: 'Advanced qualification for professionals involved in commissioning health and social care services.',
      objectives: [
        'Understand commissioning frameworks and processes',
        'Learn needs assessment and service design principles',
        'Master contract management and procurement',
        'Develop quality assurance and monitoring skills',
        'Build strategic partnership and collaboration capabilities'
      ],
      suitableFor: [
        'Commissioning managers',
        'Service development leads',
        'Contract managers',
        'Strategic planners'
      ],
      entryRequirements: [
        'Level 4 qualification or extensive senior experience',
        'Experience in commissioning or service development',
        'Understanding of public sector procurement',
        'Access to commissioning activities'
      ],
      keyTopics: [
        'Commissioning cycle and frameworks',
        'Needs assessment and market analysis',
        'Service specification and design',
        'Contract management and monitoring',
        'Partnership working and collaboration'
      ],
      href: '/courses/level-5/commissioning-principles'
    },
    {
      id: 'leadership-diploma',
      title: 'Highfield Level 5 Diploma in Leadership for Health and Social Care and Children and Young People\'s Services',
      code: 'HSC-L5-003',
      duration: '18-24 months',
      mode: 'Part-time',
      credits: '58 credits',
      description: 'Comprehensive executive-level diploma for senior leaders across health, social care, and children\'s services.',
      objectives: [
        'Develop executive leadership and strategic thinking skills',
        'Master complex service integration and partnership working',
        'Learn advanced financial and resource management',
        'Understand multi-agency working and governance',
        'Build expertise in service transformation and innovation',
        'Develop skills in managing across diverse service areas'
      ],
      suitableFor: [
        'Executive directors',
        'Senior service managers',
        'Area managers',
        'Strategic leads'
      ],
      entryRequirements: [
        'Level 4 diploma or equivalent senior experience',
        'Minimum 5 years senior management experience',
        'Executive or strategic leadership responsibilities',
        'Multi-service or complex service management experience'
      ],
      keyTopics: [
        'Executive leadership and governance',
        'Strategic planning and implementation',
        'Financial management and sustainability',
        'Multi-agency partnership working',
        'Service transformation and innovation',
        'Performance management and quality assurance'
      ],
      href: '/courses/level-5/leadership-diploma'
    }
  ];

  const executiveCompetencies = [
    {
      title: 'Strategic Leadership',
      description: 'Executive-level strategic thinking and organisational leadership',
      icon: Crown
    },
    {
      title: 'Digital Innovation',
      description: 'Leading technological transformation in care environments',
      icon: GraduationCap
    },
    {
      title: 'Service Commissioning',
      description: 'Advanced commissioning and procurement expertise',
      icon: Briefcase
    },
    {
      title: 'System Integration',
      description: 'Managing complex, multi-agency service delivery',
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-800 to-red-700 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-800">
              Executive Level • University Year 2 Equivalent
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Level 5 Courses
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Advanced executive qualifications equivalent to the second year of university. 
              Develop strategic leadership capabilities for the most senior positions in care services.
            </p>
            
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300">3</div>
                <div className="text-sm text-orange-200">Qualifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300">6-24</div>
                <div className="text-sm text-orange-200">Months Duration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300">Executive</div>
                <div className="text-sm text-orange-200">Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300">Advanced</div>
                <div className="text-sm text-orange-200">Leadership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Competencies */}
      <section className="py-16 bg-orange-50">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Executive Leadership</h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Level 5 qualifications represent the pinnacle of professional education in health and social care, 
                developing strategic leaders capable of transforming services and managing complex systems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {executiveCompetencies.map((competency, index) => {
                const Icon = competency.icon;
                return (
                  <Card key={index} className="p-6 text-center border-orange-200 hover:shadow-lg transition-shadow">
                    <Icon className="h-10 w-10 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{competency.title}</h3>
                    <p className="text-slate-600 text-sm">{competency.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Requirements */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-red-50">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Executive-Level Education</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Level 5 qualifications are designed for senior executives and strategic leaders who manage 
                  complex care systems, drive organisational transformation, and shape the future of care services.
                </p>
                
                <div className="grid lg:grid-cols-2 gap-12 text-left pt-8">
                  <div className="space-y-6">
                    <h3 className="font-bold text-slate-900 text-xl">Executive Prerequisites:</h3>
                    <ul className="text-sm text-slate-600 space-y-3">
                      <li className="flex items-start space-x-3">
                        <Crown className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Level 4 qualification</strong> or extensive executive experience</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Crown className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span><strong>5+ years senior management</strong> experience</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Crown className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Strategic leadership role</strong> with significant responsibilities</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Crown className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Complex service management</strong> across multiple areas</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="font-bold text-slate-900 text-xl">Perfect for:</h3>
                    <ul className="text-sm text-slate-600 space-y-3">
                      <li className="flex items-start space-x-3">
                        <GraduationCap className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Executive Directors</strong> and Chief Executives</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <GraduationCap className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Strategic Service Leaders</strong> and Area Managers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <GraduationCap className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Commissioning Directors</strong> and Senior Commissioners</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <GraduationCap className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Innovation and Transformation</strong> Leaders</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Level 5 Qualifications</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              These advanced qualifications provide executive-level expertise in digital leadership, 
              commissioning, and strategic management across health and social care services.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {level5Courses.map((course, index) => (
              <Card key={course.id} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500">
                <CardHeader className="pb-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-sm bg-orange-50 text-orange-700 border-orange-200">
                        {course.code}
                      </Badge>
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                        Executive Level
                      </Badge>
                    </div>
                    <div className="text-right space-y-1">
                      <Badge variant="secondary" className="text-sm">
                        {course.credits}
                      </Badge>
                      <div className="text-xs text-slate-500">University Equivalent</div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl leading-tight hover:text-orange-600 transition-colors mb-4">
                    {course.title}
                  </CardTitle>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {course.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-10">
                  {/* Course Details */}
                  <div className="grid md:grid-cols-2 gap-4 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                    <div className="flex items-center text-sm">
                      <Clock className="h-5 w-5 mr-3 text-orange-600" />
                      <span><strong>Duration:</strong> {course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-5 w-5 mr-3 text-orange-600" />
                      <span><strong>Mode:</strong> {course.mode}</span>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Learning Objectives */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-900 text-xl">Strategic Learning Objectives:</h4>
                      <ul className="text-sm text-slate-600 space-y-3">
                        {course.objectives.map((objective, objIndex) => (
                          <li key={objIndex} className="flex items-start space-x-3">
                            <BookOpen className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Topics */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-900 text-xl">Advanced Topics:</h4>
                      <ul className="text-sm text-slate-600 space-y-3">
                        {course.keyTopics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start space-x-3">
                            <Award className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Entry Requirements */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-900 text-xl">Executive Entry Requirements:</h4>
                      <ul className="text-sm text-slate-600 space-y-3">
                        {course.entryRequirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-3">
                            <Target className="h-4 w-4 text-orange-600 mt-1 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Suitable For */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-900 text-xl">Executive Roles:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {course.suitableFor.map((suitable, suitIndex) => (
                          <Badge key={suitIndex} variant="outline" className="justify-start text-sm border-orange-200 text-orange-700 px-4 py-2">
                            <Crown className="h-4 w-4 mr-2" />
                            {suitable}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-orange-200">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="flex-1">
                        <Link href={course.href}>
                          Executive Application
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="flex-1">
                        <Link href="/contact">
                          Executive Consultation
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Executive Leadership Awaits
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Level 5 qualifications represent the highest level of professional education in health and social care. 
              Join the ranks of strategic leaders transforming care services across the UK.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                <Link href="/apply">
                  Executive Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                <Link href="/contact">
                  Strategic Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}