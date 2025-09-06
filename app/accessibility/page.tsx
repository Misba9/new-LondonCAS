import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Accessibility, 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  Monitor,
  Keyboard,
  Mouse,
  Mail,
  Phone
} from 'lucide-react';

export const metadata = {
  title: 'Accessibility Statement | London College of Advanced Studies',
  description: 'LCAS is committed to making our website and services accessible to everyone. Learn about our accessibility features and how to get support.',
  keywords: 'accessibility, disability support, WCAG, inclusive design, LCAS, accessibility statement'
};

export default function AccessibilityPage() {
  const lastUpdated = '18 July 2025';

  const accessibilityFeatures = [
    {
      category: 'Visual Accessibility',
      icon: Eye,
      features: [
        'High contrast color schemes',
        'Scalable text and images',
        'Alternative text for images',
        'Clear visual hierarchy',
        'Consistent navigation structure'
      ]
    },
    {
      category: 'Hearing Accessibility',
      icon: Ear,
      features: [
        'Captions for video content',
        'Transcripts for audio materials',
        'Visual indicators for audio alerts',
        'Text alternatives for audio content'
      ]
    },
    {
      category: 'Motor Accessibility',
      icon: Hand,
      features: [
        'Keyboard navigation support',
        'Large clickable areas',
        'No time-sensitive interactions',
        'Skip navigation links',
        'Accessible form controls'
      ]
    },
    {
      category: 'Cognitive Accessibility',
      icon: Brain,
      features: [
        'Clear and simple language',
        'Consistent page layouts',
        'Helpful error messages',
        'Progress indicators',
        'Multiple ways to find content'
      ]
    }
  ];

  const assistiveTechnologies = [
    {
      technology: 'Screen Readers',
      icon: Monitor,
      description: 'Compatible with JAWS, NVDA, VoiceOver, and other screen reading software',
      support: 'Full support with semantic HTML and ARIA labels'
    },
    {
      technology: 'Keyboard Navigation',
      icon: Keyboard,
      description: 'Complete website functionality available via keyboard',
      support: 'Tab navigation, skip links, and keyboard shortcuts'
    },
    {
      technology: 'Voice Control',
      icon: Mouse,
      description: 'Works with Dragon NaturallySpeaking and similar voice control software',
      support: 'Proper labeling and voice-friendly interface elements'
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
            <span className="text-foreground">Accessibility</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              <Accessibility className="h-3 w-3 mr-1" />
              Inclusive Design
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Accessibility Statement
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              LCAS is committed to ensuring our website and services are accessible 
              to everyone, regardless of ability or technology used.
            </p>
            <p className="text-sm text-slate-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Our Commitment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Accessibility className="h-5 w-5 mr-2" />
                  Our Commitment to Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  London College of Advanced Studies (LCAS) is committed to ensuring that our website 
                  and digital services are accessible to people with disabilities. We believe that 
                  everyone should have equal access to information and functionality.
                </p>
                <p>
                  We are continually improving the user experience for everyone and applying the 
                  relevant accessibility standards to ensure we provide equal access to all users.
                </p>
                <p>
                  This accessibility statement applies to the LCAS website (londoncas.co.uk) and 
                  our student portal and learning management systems.
                </p>
              </CardContent>
            </Card>

            {/* Standards Compliance */}
            <Card>
              <CardHeader>
                <CardTitle>Standards and Compliance</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 
                  at Level AA. These guidelines explain how to make web content more accessible for 
                  people with disabilities and user-friendly for everyone.
                </p>
                
                <h4>We follow these key principles:</h4>
                <ul>
                  <li><strong>Perceivable:</strong> Information and user interface components must be presentable to users in ways they can perceive</li>
                  <li><strong>Operable:</strong> User interface components and navigation must be operable</li>
                  <li><strong>Understandable:</strong> Information and the operation of user interface must be understandable</li>
                  <li><strong>Robust:</strong> Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies</li>
                </ul>

                <p>
                  We also consider the UK Public Sector Bodies (Websites and Mobile Applications) 
                  Accessibility Regulations 2018 and the Equality Act 2010 in our accessibility efforts.
                </p>
              </CardContent>
            </Card>

            {/* Accessibility Features */}
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  We have implemented various features to make our website accessible to users with different needs:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {accessibilityFeatures.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <div key={index} className="border rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <Icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <h4 className="text-lg font-semibold">{category.category}</h4>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {category.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2">
                              <span className="text-green-600 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Assistive Technology Support */}
            <Card>
              <CardHeader>
                <CardTitle>Assistive Technology Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Our website is designed to work with assistive technologies:
                </p>
                
                <div className="space-y-6">
                  {assistiveTechnologies.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{tech.technology}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{tech.description}</p>
                          <p className="text-sm font-medium text-green-600">{tech.support}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Known Issues */}
            <Card>
              <CardHeader>
                <CardTitle>Known Accessibility Issues</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  We are continuously working to improve accessibility. Currently, we are aware of 
                  the following issues and are working to address them:
                </p>
                
                <ul>
                  <li>Some older PDF documents may not be fully accessible - we are working to update these</li>
                  <li>Some third-party embedded content may not meet full accessibility standards</li>
                  <li>Video content is being updated to include captions and transcripts</li>
                </ul>

                <p>
                  We are committed to addressing these issues in our ongoing development work. 
                  If you encounter any accessibility barriers, please let us know.
                </p>
              </CardContent>
            </Card>

            {/* How to Use Our Website */}
            <Card>
              <CardHeader>
                <CardTitle>How to Use Our Website Accessibly</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <h4>Keyboard Navigation</h4>
                <ul>
                  <li>Use Tab to move forward through links and form controls</li>
                  <li>Use Shift + Tab to move backward</li>
                  <li>Use Enter or Space to activate links and buttons</li>
                  <li>Use arrow keys to navigate within menus and lists</li>
                  <li>Use Escape to close dialogs and menus</li>
                </ul>

                <h4>Text Size and Zoom</h4>
                <ul>
                  <li>Use Ctrl + Plus (+) to increase text size</li>
                  <li>Use Ctrl + Minus (-) to decrease text size</li>
                  <li>Use Ctrl + 0 to reset to default size</li>
                  <li>Our website supports zoom up to 200% without loss of functionality</li>
                </ul>

                <h4>Screen Reader Users</h4>
                <ul>
                  <li>Use heading navigation to quickly move through page sections</li>
                  <li>Use landmark navigation to jump to main content areas</li>
                  <li>Form labels are properly associated with their controls</li>
                  <li>Error messages are announced clearly</li>
                </ul>
              </CardContent>
            </Card>

            {/* Browser and Device Support */}
            <Card>
              <CardHeader>
                <CardTitle>Browser and Device Support</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>Our website is designed to work with:</p>
                
                <h4>Desktop Browsers</h4>
                <ul>
                  <li>Chrome (latest version)</li>
                  <li>Firefox (latest version)</li>
                  <li>Safari (latest version)</li>
                  <li>Edge (latest version)</li>
                </ul>

                <h4>Mobile Devices</h4>
                <ul>
                  <li>iOS Safari (latest version)</li>
                  <li>Android Chrome (latest version)</li>
                  <li>Responsive design for all screen sizes</li>
                </ul>

                <h4>Assistive Technologies</h4>
                <ul>
                  <li>JAWS (Windows)</li>
                  <li>NVDA (Windows)</li>
                  <li>VoiceOver (macOS/iOS)</li>
                  <li>TalkBack (Android)</li>
                  <li>Dragon NaturallySpeaking</li>
                </ul>
              </CardContent>
            </Card>

            {/* Getting Help */}
            <Card>
              <CardHeader>
                <CardTitle>Getting Accessibility Support</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  If you need help accessing any content on our website or would like to request 
                  content in an alternative format, please contact us:
                </p>

                <h4>Student Support</h4>
                <p>
                  Our student support team can provide additional assistance with accessing 
                  course materials and using our learning platforms:
                </p>
                <ul>
                  <li>Email: support@londoncas.co.uk</li>
                  <li>Phone: Coming Soon</li>
                  <li>Live chat: Available during office hours</li>
                </ul>

                <h4>Alternative Formats</h4>
                <p>We can provide information in alternative formats such as:</p>
                <ul>
                  <li>Large print documents</li>
                  <li>Audio recordings</li>
                  <li>Braille (arranged through specialist services)</li>
                  <li>Easy read versions</li>
                  <li>Different file formats (Word, PDF, etc.)</li>
                </ul>

                <p>
                  Please allow extra time for us to prepare alternative formats. 
                  We aim to provide these within 5 working days of your request.
                </p>
              </CardContent>
            </Card>

            {/* Feedback and Complaints */}
            <Card>
              <CardHeader>
                <CardTitle>Feedback and Complaints</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  We welcome feedback about the accessibility of our website and services. 
                  If you encounter accessibility barriers or have suggestions for improvement, 
                  please let us know.
                </p>

                <h4>How to Contact Us</h4>
                <p>You can contact us about accessibility issues by:</p>
                <ul>
                  <li>Email: accessibility@londoncas.co.uk</li>
                  <li>Phone: Coming Soon</li>
                  <li>Post: Accessibility Team, LCAS, 9 New Road, London, E1 1HE</li>
                  <li>Online form: <Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
                </ul>

                <h4>What to Include</h4>
                <p>When reporting accessibility issues, please include:</p>
                <ul>
                  <li>The web page or content you were trying to access</li>
                  <li>What you were trying to do</li>
                  <li>The assistive technology you were using (if any)</li>
                  <li>Your browser and operating system</li>
                  <li>A description of the problem</li>
                </ul>

                <p>
                  We aim to respond to accessibility feedback within 5 working days and 
                  will work with you to resolve any issues.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Accessibility Team</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-blue-600" />
                        <a href="mailto:accessibility@londoncas.co.uk" className="hover:text-blue-600">
                          accessibility@londoncas.co.uk
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-green-600" />
                        <span>Coming Soon</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Postal Address</h4>
                    <div className="text-sm text-muted-foreground">
                      <p>London College of Advanced Studies</p>
                      <p>9 New Road</p>
                      <p>London, E1 1HE</p>
                      <p>United Kingdom</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link href="/contact">
                      Contact Accessibility Team
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/support">
                      Get Support
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}