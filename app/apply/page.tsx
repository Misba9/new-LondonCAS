import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'Apply Now | London College of Advanced Studies',
  description: 'Apply for Highfield qualifications in Health and Social Care at LCAS. Start your application today with our simple online form.',
  keywords: 'apply, application, health and social care courses, LCAS, London college, Highfield qualifications'
};

export default function ApplyPage() {
  const applicationSteps = [
    {
      step: 1,
      title: 'Complete Application',
      description: 'Fill out our online application form with your personal and educational details.',
      icon: FileText
    },
    {
      step: 2,
      title: 'Document Review',
      description: 'We review your application and supporting documents within 5 working days.',
      icon: Clock
    },
    {
      step: 3,
      title: 'Interview & Assessment',
      description: 'Attend an informal interview to discuss your goals and course suitability.',
      icon: User
    },
    {
      step: 4,
      title: 'Enrollment',
      description: 'Receive your offer and complete enrollment to secure your place.',
      icon: CheckCircle
    }
  ];

  const requiredDocuments = [
    'Valid photo ID (passport or driving licence)',
    'Educational certificates or transcripts',
    'CV or employment history',
    'Personal statement (500 words)',
    'Two professional references'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-4 bg-slate-50 border-b">
        <div className="container px-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Apply Now</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              Start Your Journey Today
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Apply Now
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Take the first step towards advancing your career in Health and Social Care. 
              Our simple application process gets you started quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Application Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined application process is designed to be simple and efficient, 
              getting you enrolled quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {applicationSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.step} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                          <Icon className="h-8 w-8 text-blue-600" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Online Application Form</h2>
              <p className="text-lg text-muted-foreground">
                Complete the form below to start your application. All fields marked with * are required.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Application Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Application Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input id="firstName" placeholder="Enter your first name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input id="lastName" placeholder="Enter your last name" required />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input id="email" type="email" placeholder="your.email@example.com" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input id="phone" type="tel" placeholder="+44 7XXX XXXXXX" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">Address *</Label>
                          <Textarea id="address" placeholder="Enter your full address" required />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                            <Input id="dateOfBirth" type="date" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="nationality">Nationality *</Label>
                            <Input id="nationality" placeholder="e.g., British" required />
                          </div>
                        </div>
                      </div>

                      {/* Course Selection */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b pb-2">Course Selection</h3>
                        
                        <div className="space-y-2">
                          <Label htmlFor="courseLevel">Course Level *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select course level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="level-2">Level 2 Courses</SelectItem>
                              <SelectItem value="level-3">Level 3 Courses</SelectItem>
                              <SelectItem value="level-4">Level 4 Courses</SelectItem>
                              <SelectItem value="level-5">Level 5 Courses</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="specificCourse">Specific Course *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select specific course" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="adult-care-cert">Adult Social Care Certificate</SelectItem>
                              <SelectItem value="adult-care-diploma">Adult Care Diploma</SelectItem>
                              <SelectItem value="leadership-cert">Leadership & Management Certificate</SelectItem>
                              <SelectItem value="other">Other - Please specify in comments</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="startDate">Preferred Start Date *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select start date" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="september-2025">September 2025</SelectItem>
                              <SelectItem value="january-2026">January 2026</SelectItem>
                              <SelectItem value="april-2026">April 2026</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Education & Experience */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b pb-2">Education & Experience</h3>
                        
                        <div className="space-y-2">
                          <Label htmlFor="education">Highest Level of Education *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select education level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="gcse">GCSE or equivalent</SelectItem>
                              <SelectItem value="a-level">A-Level or equivalent</SelectItem>
                              <SelectItem value="btec">BTEC/NVQ</SelectItem>
                              <SelectItem value="degree">University Degree</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="workExperience">Relevant Work Experience</Label>
                          <Textarea 
                            id="workExperience" 
                            placeholder="Describe any relevant work experience in health and social care..."
                            rows={4}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="motivation">Why do you want to study this course? *</Label>
                          <Textarea 
                            id="motivation" 
                            placeholder="Tell us about your motivation and career goals..."
                            rows={4}
                            required
                          />
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b pb-2">Additional Information</h3>
                        
                        <div className="space-y-2">
                          <Label htmlFor="support">Do you require any additional support or have any disabilities we should be aware of?</Label>
                          <Textarea 
                            id="support" 
                            placeholder="Please provide details of any support needs..."
                            rows={3}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="funding">How do you plan to fund your studies? *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select funding method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="self-funded">Self-funded</SelectItem>
                              <SelectItem value="employer">Employer funded</SelectItem>
                              <SelectItem value="apprenticeship">Apprenticeship</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Terms and Conditions */}
                      <div className="space-y-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox id="terms" required />
                          <Label htmlFor="terms" className="text-sm leading-relaxed">
                            I agree to the <Link href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link> and 
                            <Link href="/privacy" className="text-blue-600 hover:underline ml-1">Privacy Policy</Link> *
                          </Label>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <Checkbox id="marketing" />
                          <Label htmlFor="marketing" className="text-sm leading-relaxed">
                            I would like to receive updates about courses, events, and news from LCAS
                          </Label>
                        </div>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Submit Application
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Required Documents */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Required Documents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Please prepare these documents for your application:
                    </p>
                    <ul className="space-y-2">
                      {requiredDocuments.map((doc, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Our admissions team is here to help with your application.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-blue-600" />
                        <a href="mailto:admissions@londoncas.co.uk" className="text-sm hover:text-blue-600">
                          admissions@londoncas.co.uk
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Coming Soon</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Mon-Fri: 9AM-6PM</span>
                      </div>
                    </div>

                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">
                        Contact Admissions
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Application Timeline */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Application Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Application Review:</span>
                        <span className="font-medium">5 working days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Interview Scheduling:</span>
                        <span className="font-medium">1-2 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Final Decision:</span>
                        <span className="font-medium">3-5 working days</span>
                      </div>
                    </div>
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