import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Cookie, Settings, Shield, Eye } from 'lucide-react';

export const metadata = {
  title: 'Cookie Policy | London College of Advanced Studies',
  description: 'Learn about how LCAS uses cookies and similar technologies. Understand your choices and how to manage cookie preferences.',
  keywords: 'cookie policy, cookies, tracking, privacy, LCAS, website cookies'
};

export default function CookiesPage() {
  const lastUpdated = '18 July 2025';

  const cookieTypes = [
    {
      type: 'Essential Cookies',
      purpose: 'Required for basic website functionality',
      examples: ['Session management', 'Security features', 'Form submissions', 'Login authentication'],
      canDisable: false,
      icon: Shield
    },
    {
      type: 'Performance Cookies',
      purpose: 'Help us understand how visitors use our website',
      examples: ['Google Analytics', 'Page load times', 'Error tracking', 'Usage statistics'],
      canDisable: true,
      icon: Eye
    },
    {
      type: 'Functional Cookies',
      purpose: 'Remember your preferences and choices',
      examples: ['Language preferences', 'Cookie consent', 'Form data', 'Accessibility settings'],
      canDisable: true,
      icon: Settings
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
            <span className="text-foreground">Cookie Policy</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-800">
              <Cookie className="h-3 w-3 mr-1" />
              Cookie Information
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Cookie Policy
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Learn about how we use cookies and similar technologies to improve 
              your experience on our website.
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
            
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cookie className="h-5 w-5 mr-2" />
                  What Are Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
                  when you visit a website. They are widely used to make websites work more efficiently 
                  and to provide information to website owners.
                </p>
                <p>
                  This Cookie Policy explains how London College of Advanced Studies ("LCAS", "we", "us", or "our") 
                  uses cookies and similar technologies on our website at londoncas.co.uk.
                </p>
                <p>
                  By continuing to use our website, you consent to our use of cookies as described in this policy. 
                  You can manage your cookie preferences at any time using the settings described below.
                </p>
              </CardContent>
            </Card>

            {/* Types of Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  We use different types of cookies for various purposes. Here's what each type does:
                </p>
                
                <div className="space-y-6">
                  {cookieTypes.map((cookie, index) => {
                    const Icon = cookie.icon;
                    return (
                      <div key={index} className="border rounded-lg p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Icon className="h-5 w-5 text-blue-600" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-lg font-semibold">{cookie.type}</h4>
                              <Badge variant={cookie.canDisable ? "secondary" : "destructive"}>
                                {cookie.canDisable ? "Optional" : "Required"}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">{cookie.purpose}</p>
                            <div>
                              <h5 className="font-medium mb-2">Examples:</h5>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                {cookie.examples.map((example, exampleIndex) => (
                                  <li key={exampleIndex}>• {example}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Specific Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>Specific Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <h4>Google Analytics</h4>
                <p>
                  We use Google Analytics to understand how visitors interact with our website. 
                  This helps us improve our content and user experience. Google Analytics uses 
                  cookies to collect information such as:
                </p>
                <ul>
                  <li>Number of visitors to our site</li>
                  <li>Pages visited and time spent on each page</li>
                  <li>How visitors found our website</li>
                  <li>General location information (country/city level)</li>
                </ul>
                <p>
                  The information collected is anonymous and cannot be used to identify individual users. 
                  You can opt out of Google Analytics tracking by installing the 
                  <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Google Analytics Opt-out Browser Add-on
                  </a>.
                </p>

                <h4>Session Cookies</h4>
                <p>
                  These cookies are essential for the proper functioning of our website. They help us:
                </p>
                <ul>
                  <li>Remember your login status</li>
                  <li>Maintain your session while browsing</li>
                  <li>Ensure forms work correctly</li>
                  <li>Provide security features</li>
                </ul>

                <h4>Preference Cookies</h4>
                <p>
                  These cookies remember your choices and preferences to provide a more personalized experience:
                </p>
                <ul>
                  <li>Cookie consent preferences</li>
                  <li>Language and region settings</li>
                  <li>Accessibility preferences</li>
                  <li>Form data to prevent loss during navigation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Third-Party Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  Some cookies on our website are set by third-party services that we use to enhance 
                  your experience. These may include:
                </p>

                <h4>Google Services</h4>
                <ul>
                  <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                  <li><strong>Google Fonts:</strong> Web fonts for improved typography</li>
                  <li><strong>Google Maps:</strong> Interactive maps and location services</li>
                </ul>

                <h4>Social Media</h4>
                <ul>
                  <li><strong>Social Media Plugins:</strong> If you interact with social media buttons or embedded content</li>
                  <li><strong>Social Login:</strong> If we implement social media login options in the future</li>
                </ul>

                <p>
                  These third-party services have their own privacy policies and cookie practices. 
                  We recommend reviewing their policies to understand how they use cookies:
                </p>
                <ul>
                  <li><a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                  <li><a href="https://policies.google.com/technologies/cookies" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Cookie Policy</a></li>
                </ul>
              </CardContent>
            </Card>

            {/* Managing Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>Managing Your Cookie Preferences</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  You have several options for managing cookies on our website:
                </p>

                <h4>Cookie Consent Banner</h4>
                <p>
                  When you first visit our website, you'll see a cookie consent banner. You can:
                </p>
                <ul>
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your preferences</li>
                </ul>

                <h4>Browser Settings</h4>
                <p>
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul>
                  <li>View and delete existing cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies (may affect website functionality)</li>
                  <li>Receive notifications when cookies are set</li>
                </ul>

                <p>Here are links to cookie management instructions for popular browsers:</p>
                <ul>
                  <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
                  <li><a href="https://support.microsoft.com/en-us/help/4027947/microsoft-edge-delete-cookies" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                </ul>

                <h4>Mobile Devices</h4>
                <p>
                  For mobile devices, you can manage cookies through your browser app settings 
                  or device privacy settings. The exact steps vary by device and browser.
                </p>
              </CardContent>
            </Card>

            {/* Impact of Disabling Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>Impact of Disabling Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  While you can disable cookies, doing so may affect your experience on our website:
                </p>

                <h4>Essential Cookies</h4>
                <p>
                  Disabling essential cookies may result in:
                </p>
                <ul>
                  <li>Inability to log into your student account</li>
                  <li>Forms not working properly</li>
                  <li>Loss of security features</li>
                  <li>Need to re-enter information repeatedly</li>
                </ul>

                <h4>Performance and Functional Cookies</h4>
                <p>
                  Disabling these cookies may result in:
                </p>
                <ul>
                  <li>Less personalized experience</li>
                  <li>Need to reset preferences on each visit</li>
                  <li>Reduced ability to improve our website</li>
                  <li>Some features may not work as expected</li>
                </ul>
              </CardContent>
            </Card>

            {/* Updates to Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our 
                  practices, technology, or legal requirements. When we make changes, we will:
                </p>
                <ul>
                  <li>Update the "Last Updated" date at the top of this policy</li>
                  <li>Post the updated policy on our website</li>
                  <li>Notify you of significant changes through our website or email</li>
                </ul>
                <p>
                  We encourage you to review this policy periodically to stay informed about 
                  how we use cookies.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Data Protection Officer</h4>
                    <div className="space-y-2 text-sm">
                      <p>Email: dpo@londoncas.co.uk</p>
                      <p>Phone: Coming Soon</p>
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
                      Contact Us
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/privacy">
                      View Privacy Policy
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