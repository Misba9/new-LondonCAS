import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  HelpCircle,
  Send,
  BookOpen,
  User,
  Settings,
  AlertCircle,
  CheckCircle,
  FileText,
  Headphones
} from 'lucide-react';

export const metadata = {
  title: 'Contact Support | London College of Advanced Studies',
  description: 'Get help and support from LCAS. Submit a support ticket, access our knowledge base, or chat with our support team.',
  keywords: 'support, help, contact support, LCAS, student support, technical support, helpdesk'
};

export default function SupportPage() {
  const supportCategories = [
    { value: 'technical', label: 'Technical Issues', icon: Settings },
    { value: 'academic', label: 'Academic Support', icon: BookOpen },
    { value: 'account', label: 'Account & Login', icon: User },
    { value: 'enrollment', label: 'Enrollment Issues', icon: FileText },
    { value: 'general', label: 'General Inquiry', icon: HelpCircle }
  ];

  const priorityLevels = [
    { value: 'low', label: 'Low - General question', color: 'text-green-600' },
    { value: 'medium', label: 'Medium - Affecting studies', color: 'text-yellow-600' },
    { value: 'high', label: 'High - Urgent issue', color: 'text-orange-600' },
    { value: 'critical', label: 'Critical - Cannot access course', color: 'text-red-600' }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team during office hours.',
      availability: 'Mon-Fri: 9AM-6PM',
      responseTime: 'Immediate',
      icon: MessageCircle,
      action: 'Start Chat',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Support Ticket',
      description: 'Submit a detailed support request for complex issues.',
      availability: '24/7 Submission',
      responseTime: 'Within 24 hours',
      icon: FileText,
      action: 'Create Ticket',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our support team for urgent matters.',
      availability: 'Mon-Fri: 9AM-6PM',
      responseTime: 'Immediate',
      icon: Phone,
      action: 'Call Now',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Email Support',
      description: 'Send detailed questions and receive comprehensive responses.',
      availability: '24/7 Submission',
      responseTime: 'Within 48 hours',
      icon: Mail,
      action: 'Send Email',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const faqCategories = [
    {
      title: 'Getting Started',
      questions: [
        {
          q: 'How do I access my course materials?',
          a: 'Log into your student portal using your credentials. Course materials are available in the "My Courses" section.'
        },
        {
          q: 'I forgot my login details. How can I reset them?',
          a: 'Use the "Forgot Password" link on the login page, or contact support for assistance with username recovery.'
        },
        {
          q: 'When do courses start and how long do they take?',
          a: 'We have three intake periods: September, January, and April. Course duration varies from 6-24 months depending on the level.'
        }
      ]
    },
    {
      title: 'Technical Issues',
      questions: [
        {
          q: 'The website is not loading properly. What should I do?',
          a: 'Try clearing your browser cache, disable browser extensions, or try a different browser. Contact support if issues persist.'
        },
        {
          q: 'I cannot upload my assignment. What\'s wrong?',
          a: 'Check file size (max 10MB) and format (PDF, DOC, DOCX). Ensure stable internet connection and try again.'
        },
        {
          q: 'Videos are not playing in my course. How can I fix this?',
          a: 'Update your browser, enable JavaScript, and check your internet connection. Try using Chrome or Firefox for best compatibility.'
        }
      ]
    },
    {
      title: 'Academic Support',
      questions: [
        {
          q: 'How can I contact my tutor?',
          a: 'Use the messaging system in your student portal, or email your tutor directly. Contact details are in your course information.'
        },
        {
          q: 'What support is available if I\'m struggling with my studies?',
          a: 'We offer one-to-one tutoring, study skills workshops, and academic counseling. Contact student support to arrange assistance.'
        },
        {
          q: 'How do I submit an assignment?',
          a: 'Assignments are submitted through your student portal. Go to your course, find the assignment, and use the upload feature.'
        }
      ]
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
            <span className="text-foreground">Contact Support</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800">
              We're Here to Help
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Contact Support
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Get the help you need to succeed in your studies. Our support team is available 
              to assist with technical issues, academic questions, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Can We Help You?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the support channel that works best for your needs. 
              We're committed to providing quick and effective assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${channel.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
                    <div className="space-y-2 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="h-3 w-3" />
                        <span>{channel.availability}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-3 w-3" />
                        <span>{channel.responseTime}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      {channel.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Form and FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4">
          <Tabs defaultValue="ticket" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ticket">Submit Support Ticket</TabsTrigger>
              <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
            </TabsList>

            <TabsContent value="ticket">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Support Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="h-5 w-5 mr-2" />
                        Create Support Ticket
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Provide detailed information about your issue to help us assist you quickly.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
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

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="your.email@example.com" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="studentId">Student ID (if applicable)</Label>
                          <Input id="studentId" placeholder="Enter your student ID" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="category">Issue Category *</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                {supportCategories.map((category) => (
                                  <SelectItem key={category.value} value={category.value}>
                                    {category.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="priority">Priority Level *</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select priority" />
                              </SelectTrigger>
                              <SelectContent>
                                {priorityLevels.map((priority) => (
                                  <SelectItem key={priority.value} value={priority.value}>
                                    <span className={priority.color}>{priority.label}</span>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input id="subject" placeholder="Brief description of your issue" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="description">Detailed Description *</Label>
                          <Textarea 
                            id="description" 
                            placeholder="Please provide as much detail as possible about your issue, including any error messages, steps you've taken, and when the problem started..."
                            rows={6}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="attachment">Attachments (optional)</Label>
                          <Input id="attachment" type="file" multiple />
                          <p className="text-xs text-muted-foreground">
                            You can attach screenshots, documents, or other files that might help us understand your issue.
                          </p>
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                          Submit Support Ticket
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Response Times */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        Response Times
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-red-600">Critical</span>
                          <span className="font-medium">Within 2 hours</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-orange-600">High</span>
                          <span className="font-medium">Within 8 hours</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-yellow-600">Medium</span>
                          <span className="font-medium">Within 24 hours</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-green-600">Low</span>
                          <span className="font-medium">Within 48 hours</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Direct Contact</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Mail className="h-4 w-4 text-blue-600" />
                          <a href="mailto:support@londoncas.co.uk" className="text-sm hover:text-blue-600">
                            support@londoncas.co.uk
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Coming Soon</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MessageCircle className="h-4 w-4 text-purple-600" />
                          <span className="text-sm">Live Chat Available</span>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        <Headphones className="h-4 w-4 mr-2" />
                        Start Live Chat
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Tips */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertCircle className="h-5 w-5 mr-2" />
                        Quick Tips
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• Include your student ID for faster assistance</li>
                        <li>• Attach screenshots of error messages</li>
                        <li>• Describe steps you've already tried</li>
                        <li>• Check our FAQ section first</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Find quick answers to common questions. If you can't find what you're looking for, 
                    please submit a support ticket.
                  </p>
                </div>

                {faqCategories.map((category, categoryIndex) => (
                  <Card key={categoryIndex}>
                    <CardHeader>
                      <CardTitle>{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.questions.map((faq, faqIndex) => (
                          <div key={faqIndex} className="border-b border-slate-200 last:border-b-0 pb-4 last:pb-0">
                            <h4 className="font-medium mb-2 text-slate-900">{faq.q}</h4>
                            <p className="text-sm text-muted-foreground">{faq.a}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Still need help? Our support team is ready to assist you.
                  </p>
                  <Button size="lg">
                    <FileText className="h-4 w-4 mr-2" />
                    Submit Support Ticket
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}