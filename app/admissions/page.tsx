import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  Users, 
  Calendar,
  ArrowRight,
  BookOpen,
  Award,
  Target,
  AlertCircle
} from 'lucide-react';

export const metadata = {
  title: 'Admissions | London College of Advanced Studies',
  description: 'Learn about admission requirements, application process, and timelines for LCAS courses. Start your journey in Health and Social Care education.',
  keywords: 'admissions, requirements, application process, LCAS, health and social care courses, entry requirements'
};

export default function AdmissionsPage() {
  const admissionSteps = [
    {
      step: 1,
      title: 'Research & Choose',
      description: 'Explore our courses and find the right qualification for your career goals.',
      duration: '1-2 weeks',
      icon: BookOpen
    },
    {
      step: 2,
      title: 'Apply Online',
      description: 'Complete our online application form with all required information.',
      duration: '30 minutes',
      icon: FileText
    },
    {
      step: 3,
      title: 'Document Review',
      description: 'We review your application and supporting documents.',
      duration: '5 working days',
      icon: Clock
    },
    {
      step: 4,
      title: 'Interview',
      description: 'Attend an informal interview to discuss your goals and suitability.',
      duration: '30-45 minutes',
      icon: Users
    },
    {
      step: 5,
      title: 'Decision',
      description: 'Receive your admission decision and enrollment information.',
      duration: '3-5 working days',
      icon: CheckCircle
    },
    {
      step: 6,
      title: 'Enrollment',
      description: 'Complete enrollment paperwork and secure your place.',
      duration: '1-2 weeks',
      icon: Award
    }
  ];

  const levelRequirements = {
    'level-2': {
      title: 'Level 2 Entry Requirements',
      requirements: [
        'No formal qualifications required',
        'Basic literacy and numeracy skills',
        'Commitment to learning and development',
        'Interest in health and social care'
      ],
      ideal: [
        'GCSE English and Maths (Grade D/3 or above)',
        'Some life experience or work experience',
        'Positive attitude towards caring for others'
      ]
    },
    'level-3': {
      title: 'Level 3 Entry Requirements',
      requirements: [
        'Level 2 qualification in relevant subject OR',
        'GCSE English and Maths (Grade C/4 or above) OR',
        'Equivalent qualifications or experience',
        'Working in or access to adult care setting'
      ],
      ideal: [
        'Previous Level 2 health and social care qualification',
        '6+ months experience in care sector',
        'Strong communication skills'
      ]
    },
    'level-4': {
      title: 'Level 4 Entry Requirements',
      requirements: [
        'Level 3 qualification in relevant subject OR',
        'Significant management experience in care',
        'Currently in supervisory/management role',
        'Employer support for workplace assessment'
      ],
      ideal: [
        'Level 3 Diploma in Adult Care',
        '2+ years management experience',
        'Team leadership responsibilities'
      ]
    },
    'level-5': {
      title: 'Level 5 Entry Requirements',
      requirements: [
        'Level 4 qualification OR extensive senior experience',
        'Senior management role in care setting',
        '5+ years management experience',
        'Strategic leadership responsibilities'
      ],
      ideal: [
        'Level 4 management qualification',
        'Executive or director level experience',
        'Multi-service management experience'
      ]
    }
  };

  const applicationTimeline = [
    { period: 'September Intake', application: 'June - August', interviews: 'July - August', start: 'September' },
    { period: 'January Intake', application: 'October - December', interviews: 'November - December', start: 'January' },
    { period: 'April Intake', application: 'January - March', interviews: 'February - March', start: 'April' }
  ];

  const supportServices = [
    {
      title: 'Academic Support',
      description: 'One-to-one tutoring, study skills workshops, and learning resources.',
      icon: BookOpen
    },
    {
      title: 'Career Guidance',
      description: 'Career counseling, CV writing support, and job placement assistance.',
      icon: Target
    },
    {
      title: 'Financial Advice',
      description: 'Information about funding options, payment plans, and financial support.',
      icon: FileText
    },
    {
      title: 'Personal Support',
      description: 'Counseling services, disability support, and wellbeing resources.',
      icon: Users
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
            <span className="text-foreground">Admissions</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
              Your Journey Starts Here
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Admissions
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Join LCAS and advance your career in Health and Social Care. 
              Our admissions process is designed to be supportive and straightforward.
            </p>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Link href="/apply">
                Start Your Application
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Admission Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our six-step admission process is designed to ensure you choose the right course 
              and receive the support you need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.step} className="relative hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {step.duration}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Entry Requirements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our entry requirements vary by course level. We welcome applications from 
              candidates with diverse backgrounds and experiences.
            </p>
          </div>

          <Tabs defaultValue="level-2" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="level-2">Level 2</TabsTrigger>
              <TabsTrigger value="level-3">Level 3</TabsTrigger>
              <TabsTrigger value="level-4">Level 4</TabsTrigger>
              <TabsTrigger value="level-5">Level 5</TabsTrigger>
            </TabsList>

            {Object.entries(levelRequirements).map(([level, data]) => (
              <TabsContent key={level} value={level}>
                <Card>
                  <CardHeader>
                    <CardTitle>{data.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-2 text-red-600" />
                          Minimum Requirements
                        </h4>
                        <ul className="space-y-2">
                          {data.requirements.map((req, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Target className="h-4 w-4 mr-2 text-blue-600" />
                          Ideal Candidate
                        </h4>
                        <ul className="space-y-2">
                          {data.ideal.map((ideal, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm">
                              <Award className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>{ideal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        <strong>Note:</strong> If you don't meet the formal requirements but have relevant 
                        experience, we encourage you to apply. We consider each application individually 
                        and value practical experience alongside formal qualifications.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Application Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer three intake periods throughout the year to provide flexibility 
              for your study schedule.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {applicationTimeline.map((intake, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-center">{intake.period}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium">Applications</span>
                        <span className="text-sm text-blue-600">{intake.application}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium">Interviews</span>
                        <span className="text-sm text-green-600">{intake.interviews}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                        <span className="text-sm font-medium">Course Start</span>
                        <span className="text-sm text-purple-600">{intake.start}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Applications are processed on a rolling basis. Early applications are encouraged 
                to secure your preferred start date.
              </p>
              <Button asChild size="lg">
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Student Support Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive support services to help you succeed throughout 
              your studies and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Take the first step towards advancing your career in Health and Social Care. 
              Our admissions team is here to support you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
                <Link href="/apply">
                  Start Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <Link href="/contact">
                  Contact Admissions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}