import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  HelpCircle,
  Search,
  BookOpen,
  Users,
  CreditCard,
  Settings,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';

export const metadata = {
  title: 'Frequently Asked Questions | London College of Advanced Studies',
  description: 'Find answers to common questions about LCAS courses, admissions, fees, and student support. Get the information you need quickly.',
  keywords: 'FAQ, frequently asked questions, LCAS, course information, admissions, fees, student support'
};

export default function FAQsPage() {
  const faqCategories = [
    {
      id: 'general',
      title: 'General Information',
      icon: HelpCircle,
      faqs: [
        {
          question: 'What is London College of Advanced Studies (LCAS)?',
          answer: 'LCAS is a dynamic and inclusive private college established in 2025, delivering high-quality, career-focused education in Health and Social Care. We are an approved centre for Highfield Qualifications, offering nationally recognised qualifications from Level 2 to Level 5.'
        },
        {
          question: 'Where is LCAS located?',
          answer: 'Our main campus is located at 9 New Road, London, E1 1HE. We are easily accessible by public transport, with Whitechapel Station just a 5-minute walk away.'
        },
        {
          question: 'What qualifications do you offer?',
          answer: 'We offer 16 Highfield qualifications across 4 levels (Level 2-5) in Health and Social Care. These include certificates, awards, and diplomas covering areas such as adult social care, dementia awareness, leadership and management, and digital leadership.'
        },
        {
          question: 'Are your qualifications recognised?',
          answer: 'Yes, all our qualifications are provided by Highfield Qualifications, a leading awarding body regulated by Ofqual. Our qualifications are nationally recognised and accepted by employers and other educational institutions.'
        },
        {
          question: 'What makes LCAS different from other colleges?',
          answer: 'LCAS focuses specifically on Health and Social Care education with experienced tutors who have real-world industry experience. We offer flexible learning options, small class sizes, and comprehensive student support to ensure your success.'
        }
      ]
    },
    {
      id: 'courses',
      title: 'Courses & Learning',
      icon: BookOpen,
      faqs: [
        {
          question: 'How are courses delivered?',
          answer: 'Our courses are delivered part-time to accommodate working professionals. We use a blend of face-to-face teaching, online learning, and practical assessments. Most courses include workplace-based learning components.'
        },
        {
          question: 'How long do courses take to complete?',
          answer: 'Course duration varies by level: Level 2 courses typically take 6-12 months, Level 3 courses take 12-18 months, Level 4 courses take 9-24 months, and Level 5 courses take 6-24 months, depending on the specific qualification.'
        },
        {
          question: 'Do I need work experience to enroll?',
          answer: 'Requirements vary by course level. Level 2 courses generally don\'t require prior experience, while higher levels may require relevant work experience or access to a care setting. Check specific course requirements for details.'
        },
        {
          question: 'Can I study while working full-time?',
          answer: 'Yes! Our courses are designed for working professionals. We offer flexible scheduling, evening classes, and online learning components to fit around your work commitments.'
        },
        {
          question: 'What support is available during my studies?',
          answer: 'We provide comprehensive support including one-to-one tutoring, study skills workshops, academic counseling, career guidance, and technical support. Our student support team is available throughout your studies.'
        },
        {
          question: 'How are courses assessed?',
          answer: 'Assessment methods vary by course but typically include written assignments, practical assessments, portfolios, and workplace observations. All assessments are designed to be relevant to real-world practice.'
        }
      ]
    },
    {
      id: 'admissions',
      title: 'Admissions & Applications',
      icon: Users,
      faqs: [
        {
          question: 'How do I apply for a course?',
          answer: 'You can apply online through our website by completing the application form. The process includes submitting personal details, educational background, work experience, and a personal statement explaining your motivation.'
        },
        {
          question: 'What are the entry requirements?',
          answer: 'Entry requirements vary by course level. Level 2 courses have minimal requirements, while higher levels require previous qualifications or relevant experience. We also consider life experience and commitment to learning.'
        },
        {
          question: 'When can I start a course?',
          answer: 'We offer three intake periods per year: September, January, and April. Applications are processed on a rolling basis, so we recommend applying early to secure your preferred start date.'
        },
        {
          question: 'How long does the application process take?',
          answer: 'We aim to review applications within 5 working days. The complete process, including interview and enrollment, typically takes 2-3 weeks from initial application to course start.'
        },
        {
          question: 'Do I need to attend an interview?',
          answer: 'Yes, all applicants are invited to an informal interview. This helps us understand your goals, assess course suitability, and provide guidance on your learning journey.'
        },
        {
          question: 'Can I transfer credits from previous qualifications?',
          answer: 'We may be able to recognize prior learning (RPL) from previous qualifications or experience. Each case is assessed individually. Contact our admissions team to discuss your specific situation.'
        }
      ]
    },
    {
      id: 'fees',
      title: 'Fees & Funding',
      icon: CreditCard,
      faqs: [
        {
          question: 'How much do courses cost?',
          answer: 'Course fees vary depending on the level and duration of the qualification. Detailed fee information is available on individual course pages or by contacting our admissions team for a personalized quote.'
        },
        {
          question: 'What payment options are available?',
          answer: 'We offer flexible payment options including full payment, monthly installments, and employer-sponsored funding. Payment plans can be arranged to suit your financial circumstances.'
        },
        {
          question: 'Is financial assistance available?',
          answer: 'We offer various funding options including payment plans, employer funding, and guidance on accessing government funding schemes. Our admissions team can help you explore available options.'
        },
        {
          question: 'Can my employer pay for my course?',
          answer: 'Yes, many employers fund employee training. We can provide documentation and invoicing to support employer funding arrangements. We also work with apprenticeship levy funds where applicable.'
        },
        {
          question: 'What is your refund policy?',
          answer: 'We offer full refunds if you withdraw within 14 days of enrollment. After course commencement, refunds are calculated on a pro-rata basis. Full details are available in our Terms & Conditions.'
        },
        {
          question: 'Are there any additional costs?',
          answer: 'Course fees include tuition, learning materials, and assessment costs. Additional costs may include textbooks, travel to work placements, and certification fees, which will be clearly outlined before enrollment.'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: Settings,
      faqs: [
        {
          question: 'How do I access my course materials?',
          answer: 'Course materials are available through our student portal. You\'ll receive login credentials after enrollment. Materials include lecture notes, assignments, videos, and additional resources.'
        },
        {
          question: 'What technology do I need?',
          answer: 'You\'ll need a computer or tablet with internet access, a web browser (Chrome or Firefox recommended), and basic software like Microsoft Office or Google Workspace. Specific requirements are provided before course start.'
        },
        {
          question: 'I\'m having trouble logging in. What should I do?',
          answer: 'First, try resetting your password using the "Forgot Password" link. If problems persist, contact our technical support team at director@londoncas.co.uk or use the live chat feature during office hours.'
        },
        {
          question: 'Can I access course materials on my mobile phone?',
          answer: 'Yes, our student portal is mobile-friendly. However, for the best experience with assignments and detailed materials, we recommend using a computer or tablet with a larger screen.'
        },
        {
          question: 'How do I submit assignments?',
          answer: 'Assignments are submitted through the student portal. Navigate to your course, find the assignment section, and upload your completed work. You\'ll receive confirmation when successfully submitted.'
        },
        {
          question: 'What if I experience technical problems during an online class?',
          answer: 'Contact our technical support immediately via live chat or phone. We also record online sessions, so you won\'t miss important content if technical issues occur.'
        }
      ]
    }
  ];

  const quickLinks = [
    { title: 'Apply Now', href: '/apply', icon: Users },
    { title: 'Contact Support', href: '/support', icon: MessageCircle },
    { title: 'Course Information', href: '/courses', icon: BookOpen },
    { title: 'Admissions Guide', href: '/admissions', icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-4 bg-slate-50 border-b">
        <div className="container px-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">FAQs</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-emerald-100 text-emerald-800">
              <HelpCircle className="h-3 w-3 mr-1" />
              Get Answers Fast
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Find quick answers to common questions about our courses, admissions,
              and student services. Can't find what you're looking for? Contact us directly.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-emerald-600" />
                <Input
                  placeholder="Search FAQs..."
                  className="pl-10 bg-white text-slate-900 border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-slate-50">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Button key={index} asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
                  <Link href={link.href}>
                    <Icon className="h-5 w-5" />
                    <span className="text-sm">{link.title}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="general" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
                {faqCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2">
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{category.title}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {faqCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <category.icon className="h-5 w-5 mr-2" />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="space-y-2">
                        {category.faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`${category.id}-${index}`} className="border rounded-lg px-4">
                            <AccordionTrigger className="text-left hover:no-underline">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Still Need Help?</h2>
            <p className="text-lg text-muted-foreground">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get instant help during office hours
                  </p>
                  <Button variant="outline" size="sm">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Send us a detailed message
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/contact">
                      Send Email
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Speak with our team directly
                  </p>
                  <Button variant="outline" size="sm">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="pt-8">
              <Button asChild size="lg">
                <Link href="/support">
                  Contact Support Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Help Us Improve</h2>
            <p className="text-xl text-emerald-100">
              Was this FAQ section helpful? Let us know how we can make it better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                This Was Helpful
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                Suggest Improvements
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}