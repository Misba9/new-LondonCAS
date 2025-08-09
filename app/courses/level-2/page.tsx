import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, BookOpen, Award, ArrowRight, Target } from 'lucide-react';

export default function Level2CoursesPage() {
  const level2Courses = [
    {
      id: 'adult-social-care-certificate',
      title: 'Highfield Level 2 Adult Social Care Certificate',
      code: 'HSC-L2-001',
      duration: '6-12 months',
      mode: 'Part-time',
      credits: '15 credits',
      description: 'Perfect introduction to adult social care for new entrants to the sector.',
      objectives: [
        'Understand person-centred care principles',
        'Learn communication skills in care settings',
        'Develop knowledge of health and safety',
        'Build confidence in care environments'
      ],
      suitableFor: [
        'New entrants to social care',
        'Healthcare assistants',
        'Support workers',
        'Career changers'
      ],
      href: '/courses/level-2/adult-social-care-certificate'
    },
    {
      id: 'dementia-awareness',
      title: 'Highfield Level 2 Award in Awareness of Dementia',
      code: 'HSC-L2-002',
      duration: '2-4 months',
      mode: 'Part-time',
      credits: '3 credits',
      description: 'Essential knowledge about dementia for care workers and family members.',
      objectives: [
        'Understand different types of dementia',
        'Learn person-centred dementia care',
        'Develop communication strategies',
        'Support families and carers'
      ],
      suitableFor: [
        'Care workers',
        'Family carers',
        'Healthcare assistants',
        'Community workers'
      ],
      href: '/courses/level-2/dementia-awareness'
    },
    {
      id: 'end-of-life-care',
      title: 'Highfield Level 2 Award in Awareness of End of Life Care',
      code: 'HSC-L2-003',
      duration: '2-4 months',
      mode: 'Part-time',
      credits: '3 credits',
      description: 'Compassionate care for individuals approaching end of life.',
      objectives: [
        'Understand end of life care principles',
        'Learn about pain and symptom management',
        'Develop communication skills',
        'Support bereaved families'
      ],
      suitableFor: [
        'Care workers',
        'Healthcare assistants',
        'Hospice volunteers',
        'Support workers'
      ],
      href: '/courses/level-2/end-of-life-care'
    },
    {
      id: 'health-safety-care',
      title: 'Highfield Level 2 Award in Health and Safety within Health and Social Care Setting',
      code: 'HSC-L2-004',
      duration: '1-3 months',
      mode: 'Part-time',
      credits: '2 credits',
      description: 'Essential health and safety knowledge for care environments.',
      objectives: [
        'Understand health and safety legislation',
        'Learn risk assessment techniques',
        'Develop incident reporting skills',
        'Promote safe working practices'
      ],
      suitableFor: [
        'All care workers',
        'Healthcare assistants',
        'Support workers',
        'Care coordinators'
      ],
      href: '/courses/level-2/health-safety-care'
    },
    {
      id: 'autism-awareness',
      title: 'Highfield Level 2 Certificate in Introduction to Autistic Spectrum Conditions',
      code: 'HSC-L2-005',
      duration: '4-6 months',
      mode: 'Part-time',
      credits: '6 credits',
      description: 'Understanding and supporting individuals with autism spectrum conditions.',
      objectives: [
        'Understand autism spectrum conditions',
        'Learn person-centred support approaches',
        'Develop communication strategies',
        'Promote independence and choice'
      ],
      suitableFor: [
        'Care workers',
        'Support workers',
        'Special needs assistants',
        'Family carers'
      ],
      href: '/courses/level-2/autism-awareness'
    },
    {
      id: 'preparing-adult-care',
      title: 'Highfield Level 2 Certificate in Preparing to Work in Adult Social Care',
      code: 'HSC-L2-006',
      duration: '6-9 months',
      mode: 'Part-time',
      credits: '12 credits',
      description: 'Comprehensive preparation for working in adult social care settings.',
      objectives: [
        'Understand the care sector',
        'Learn professional values and ethics',
        'Develop practical care skills',
        'Build confidence for employment'
      ],
      suitableFor: [
        'Job seekers',
        'Career changers',
        'Returning to work',
        'School leavers'
      ],
      href: '/courses/level-2/preparing-adult-care'
    },
    {
      id: 'equality-diversity-rights',
      title: 'Highfield Level 2 Certificate in Principles of Equality, Diversity and Rights in Care',
      code: 'HSC-L2-007',
      duration: '4-6 months',
      mode: 'Part-time',
      credits: '6 credits',
      description: 'Promoting equality, diversity and human rights in care settings.',
      objectives: [
        'Understand equality and diversity principles',
        'Learn about human rights in care',
        'Develop inclusive care practices',
        'Challenge discrimination'
      ],
      suitableFor: [
        'Care workers',
        'Support workers',
        'Healthcare assistants',
        'Care managers'
      ],
      href: '/courses/level-2/equality-diversity-rights'
    },
    {
      id: 'medication-handling',
      title: 'Highfield Level 2 Certificate in Principles of Medication Handling and Administration for Care Settings',
      code: 'HSC-L2-008',
      duration: '4-8 months',
      mode: 'Part-time',
      credits: '9 credits',
      description: 'Safe medication handling and administration in care environments.',
      objectives: [
        'Understand medication legislation',
        'Learn safe handling procedures',
        'Develop administration skills',
        'Maintain accurate records'
      ],
      suitableFor: [
        'Senior care workers',
        'Healthcare assistants',
        'Medication coordinators',
        'Care team leaders'
      ],
      href: '/courses/level-2/medication-handling'
    },
    {
      id: 'diploma-care',
      title: 'Highfield Level 2 Diploma in Care',
      code: 'HSC-L2-009',
      duration: '12-18 months',
      mode: 'Part-time',
      credits: '37 credits',
      description: 'Comprehensive diploma covering all aspects of care work.',
      objectives: [
        'Master fundamental care principles',
        'Develop advanced care skills',
        'Build professional competence',
        'Prepare for career progression'
      ],
      suitableFor: [
        'Committed care workers',
        'Career progressors',
        'Team leaders',
        'Supervisors'
      ],
      href: '/courses/level-2/diploma-care'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-800 to-emerald-700 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
              Entry Level • Perfect for Beginners
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Level 2 Courses
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Entry-level qualifications perfect for beginners or those returning to education. 
              Build foundational skills in health and social care.
            </p>
            
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">9</div>
                <div className="text-sm text-green-200">Qualifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">2-18</div>
                <div className="text-sm text-green-200">Months Duration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">Part</div>
                <div className="text-sm text-green-200">Time Study</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">Entry</div>
                <div className="text-sm text-green-200">Level</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-green-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Level 2?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Level 2 qualifications are perfect for those starting their career in health and social care 
              or looking to gain formal recognition for existing skills. These courses provide essential 
              knowledge and practical skills for working effectively in care environments.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <Card className="p-6 text-center">
                <Target className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Entry Level</h3>
                <p className="text-slate-600 text-sm">Perfect starting point with no prior qualifications required</p>
              </Card>
              <Card className="p-6 text-center">
                <Award className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Career Ready</h3>
                <p className="text-slate-600 text-sm">Develop practical skills for immediate workplace application</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Progression Path</h3>
                <p className="text-slate-600 text-sm">Foundation for advancing to Level 3 qualifications</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Level 2 Qualifications</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              All courses are Highfield approved and provide nationally recognised qualifications 
              in health and social care.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {level2Courses.map((course, index) => (
              <Card key={course.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                      {course.code}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {course.credits}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight hover:text-green-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Course Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-slate-600">
                      <Clock className="h-4 w-4 mr-2 text-green-600" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Users className="h-4 w-4 mr-2 text-green-600" />
                      {course.mode}
                    </div>
                  </div>

                  {/* Learning Objectives */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-slate-900">Key Learning Objectives:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {course.objectives.slice(0, 3).map((objective, objIndex) => (
                        <li key={objIndex} className="flex items-start space-x-2">
                          <BookOpen className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suitable For */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-slate-900">Suitable For:</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.suitableFor.slice(0, 3).map((suitable, suitIndex) => (
                        <Badge key={suitIndex} variant="secondary" className="text-xs">
                          {suitable}
                        </Badge>
                      ))}
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Start Your Care Career Today
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Level 2 qualifications are your gateway to a rewarding career in health and social care. 
              No prior experience needed - just commitment to making a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <Link href="/admissions">
                  Admissions Info
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}