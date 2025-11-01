import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Heart,
  TrendingUp,
  Award,
  Coffee,
  Laptop,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import CareersForm from './CareersForm';

export const metadata = {
  title: 'Careers | London College of Advanced Studies',
  description: 'Join the LCAS team. Explore career opportunities in education, administration, and student support. Apply for current job openings.',
  keywords: 'careers, jobs, employment, LCAS, education jobs, teaching positions, London jobs'
};

export default function CareersPage() {
  const currentOpenings = [
    {
      id: 'tutor-health-social-care',
      title: 'Tutor - Health and Social Care',
      department: 'Academic',
      location: 'London, E1',
      type: 'Full-time',
      salary: '£28,000 - £35,000',
      posted: '2025-07-15',
      description: 'We are seeking an experienced tutor to deliver Highfield qualifications in Health and Social Care.',
      requirements: [
        'Relevant degree in Health and Social Care or related field',
        'Teaching qualification (PGCE, Cert Ed, or equivalent)',
        'Minimum 3 years experience in adult education',
        'Experience with Highfield qualifications preferred',
        'Strong communication and interpersonal skills'
      ],
      responsibilities: [
        'Deliver high-quality teaching and learning experiences',
        'Assess student progress and provide feedback',
        'Support student development and achievement',
        'Contribute to curriculum development',
        'Maintain accurate records and documentation'
      ]
    },
    // {
    //   id: 'student-support-advisor',
    //   title: 'Student Support Advisor',
    //   department: 'Student Services',
    //   location: 'London, E1',
    //   type: 'Full-time',
    //   salary: '£24,000 - £28,000',
    //   posted: '2025-07-10',
    //   description: 'Join our student support team to help students succeed in their educational journey.',
    //   requirements: [
    //     'Degree in relevant field or equivalent experience',
    //     'Experience in student support or counseling',
    //     'Understanding of adult learning principles',
    //     'Excellent communication and listening skills',
    //     'Ability to work with diverse student populations'
    //   ],
    //   responsibilities: [
    //     'Provide academic and personal support to students',
    //     'Conduct initial assessments and support planning',
    //     'Liaise with tutors and external agencies',
    //     'Maintain student records and case notes',
    //     'Contribute to student retention and success initiatives'
    //   ]
    // },
    // {
    //   id: 'admissions-coordinator',
    //   title: 'Admissions Coordinator',
    //   department: 'Admissions',
    //   location: 'London, E1',
    //   type: 'Part-time',
    //   salary: '£20,000 - £24,000 (pro rata)',
    //   posted: '2025-07-05',
    //   description: 'Support the admissions process and help prospective students begin their educational journey.',
    //   requirements: [
    //     'Strong administrative and organizational skills',
    //     'Experience in customer service or education',
    //     'Excellent written and verbal communication',
    //     'Attention to detail and accuracy',
    //     'Proficiency in Microsoft Office and databases'
    //   ],
    //   responsibilities: [
    //     'Process applications and enrollment documentation',
    //     'Conduct initial interviews with prospective students',
    //     'Provide information and guidance to applicants',
    //     'Maintain accurate admissions records',
    //     'Support marketing and recruitment activities'
    //   ]
    // }
  ];

  const benefits = [
    {
      title: 'Professional Development',
      description: 'Continuous learning opportunities and career progression support',
      icon: GraduationCap
    },
    {
      title: 'Flexible Working',
      description: 'Hybrid working options and flexible hours where possible',
      icon: Laptop
    },
    {
      title: 'Competitive Benefits',
      description: 'Competitive salary, pension scheme, and annual leave',
      icon: Award
    },
    {
      title: 'Supportive Culture',
      description: 'Collaborative environment with focus on wellbeing',
      icon: Heart
    },
    {
      title: 'Growth Opportunities',
      description: 'Be part of an expanding college with exciting prospects',
      icon: TrendingUp
    },
    {
      title: 'Great Location',
      description: 'Central East London location with excellent transport links',
      icon: MapPin
    }
  ];

  const companyValues = [
    {
      title: 'Student-Centered',
      description: 'Everything we do is focused on student success and achievement'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in education and service'
    },
    {
      title: 'Inclusivity',
      description: 'We celebrate diversity and ensure equal opportunities for all'
    },
    {
      title: 'Innovation',
      description: 'We embrace new ideas and approaches to enhance learning'
    },
    {
      title: 'Integrity',
      description: 'We act with honesty, transparency, and ethical principles'
    },
    {
      title: 'Collaboration',
      description: 'We work together to achieve common goals and support each other'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-4 bg-slate-50 border-b">
        <div className="container px-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Careers</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-indigo-100 text-indigo-800">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Careers at LCAS
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Be part of our mission to deliver high-quality, career-focused education. 
              Join a dynamic team that's shaping the future of adult learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
                <Link href="#openings">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                <Link href="#apply">
                  Submit Application
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              LCAS is more than just a workplace – it's a community of passionate educators 
              and professionals committed to making a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-indigo-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do and shape the culture we're building at LCAS.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="py-16">
        <div className="container px-4">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our current job opportunities and find your next career move with LCAS.
            </p>
          </div> */}

          {/* <div className="space-y-8">
            {currentOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-600">{job.salary}</div>
                      <div className="text-sm text-muted-foreground">Posted: {formatDate(job.posted)}</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{job.description}</p>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3">Key Requirements:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-green-600 mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {job.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="flex-1">
                      Apply for This Position
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Save Job
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> */}

          {currentOpenings.length === 1 && (
            <Card className="text-center p-12">
              <CardContent>
                <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Current Openings</h3>
                {/* <p className="text-muted-foreground mb-6">
                  We don't have any open positions at the moment, but we're always interested 
                  in hearing from talented individuals.
                </p> */}
                <p className="text-muted-foreground mb-6">
                 Currently, we don't have any open positions. Please check back later for future opportunities.
                </p>
                {/* <Button >
                  Submit Speculative Application
                </Button> */}
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 bg-slate-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Apply Now</h2>
              <p className="text-lg text-muted-foreground">
                Ready to join our team? Submit your application and we'll be in touch.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Application Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Application Form</CardTitle>
                    <p className="text-muted-foreground">
                      Please complete all required fields. We'll review your application and contact you within 5 working days.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <CareersForm />
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Application Tips */}
                <Card>
                  <CardHeader>
                    <CardTitle>Application Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>• Tailor your application to the specific role</li>
                      <li>• Highlight relevant experience and qualifications</li>
                      <li>• Show your passion for education and student success</li>
                      <li>• Proofread your application before submitting</li>
                      <li>• Include specific examples of your achievements</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Questions?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Have questions about a position or the application process?
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <p><strong>HR Department:</strong></p>
                      <p>Email: hr@londoncas.co.uk</p>
                      <p>Phone: Coming Soon</p>
                    </div>

                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">
                        Contact HR
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Equal Opportunities */}
                <Card>
                  <CardHeader>
                    <CardTitle>Equal Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      LCAS is an equal opportunities employer. We welcome applications 
                      from all qualified candidates regardless of age, gender, race, 
                      religion, sexual orientation, or disability.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}