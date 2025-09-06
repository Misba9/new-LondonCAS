import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Eye, Lock, UserCheck, Mail, Phone } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | London College of Advanced Studies',
  description: 'Learn how LCAS protects your personal data and privacy. Our comprehensive privacy policy explains data collection, usage, and your rights.',
  keywords: 'privacy policy, data protection, GDPR, personal data, privacy rights, LCAS'
};

export default function PrivacyPage() {
  const lastUpdated = '18 July 2025';

  const dataTypes = [
    {
      category: 'Personal Information',
      examples: ['Name, address, phone number', 'Email address', 'Date of birth', 'Emergency contact details'],
      icon: UserCheck
    },
    {
      category: 'Educational Data',
      examples: ['Academic qualifications', 'Course enrollment details', 'Assessment results', 'Learning progress'],
      icon: Eye
    },
    {
      category: 'Technical Data',
      examples: ['IP address', 'Browser type and version', 'Device information', 'Usage analytics'],
      icon: Lock
    }
  ];

  const yourRights = [
    {
      right: 'Right to Access',
      description: 'You can request a copy of the personal data we hold about you.'
    },
    {
      right: 'Right to Rectification',
      description: 'You can ask us to correct any inaccurate or incomplete personal data.'
    },
    {
      right: 'Right to Erasure',
      description: 'You can request deletion of your personal data in certain circumstances.'
    },
    {
      right: 'Right to Restrict Processing',
      description: 'You can ask us to limit how we use your personal data.'
    },
    {
      right: 'Right to Data Portability',
      description: 'You can request your data in a structured, machine-readable format.'
    },
    {
      right: 'Right to Object',
      description: 'You can object to certain types of processing of your personal data.'
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
            <span className="text-foreground">Privacy Policy</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              <Shield className="h-3 w-3 mr-1" />
              GDPR Compliant
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
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
                  <Shield className="h-5 w-5 mr-2" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  London College of Advanced Studies ("LCAS", "we", "us", or "our") is committed to protecting 
                  and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, 
                  and safeguard your information when you visit our website, apply for courses, or use our services.
                </p>
                <p>
                  This policy applies to all personal data we process about you, whether you are a prospective 
                  student, current student, graduate, website visitor, or other individual whose personal data 
                  we process in connection with our educational services.
                </p>
                <p>
                  We are registered as a data controller with the Information Commissioner's Office (ICO) 
                  and comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
              </CardContent>
            </Card>

            {/* Data We Collect */}
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  We collect and process various types of personal data depending on your relationship with us:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {dataTypes.map((type, index) => {
                    const Icon = type.icon;
                    return (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <Icon className="h-5 w-5 text-blue-600 mr-2" />
                          <h4 className="font-semibold">{type.category}</h4>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {type.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex}>• {example}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Data */}
            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>We use your personal information for the following purposes:</p>
                
                <h4>Educational Services</h4>
                <ul>
                  <li>Processing applications and enrollment</li>
                  <li>Delivering courses and educational content</li>
                  <li>Assessing and recording academic progress</li>
                  <li>Providing student support services</li>
                  <li>Issuing certificates and qualifications</li>
                </ul>

                <h4>Communication</h4>
                <ul>
                  <li>Responding to inquiries and providing information</li>
                  <li>Sending course updates and important notices</li>
                  <li>Marketing communications (with your consent)</li>
                  <li>Alumni relations and networking</li>
                </ul>

                <h4>Legal and Regulatory</h4>
                <ul>
                  <li>Complying with legal obligations</li>
                  <li>Reporting to regulatory bodies (e.g., Highfield Qualifications)</li>
                  <li>Maintaining records for audit purposes</li>
                  <li>Protecting our rights and interests</li>
                </ul>

                <h4>Website and Technology</h4>
                <ul>
                  <li>Improving website functionality and user experience</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Security and fraud prevention</li>
                  <li>Technical support and troubleshooting</li>
                </ul>
              </CardContent>
            </Card>

            {/* Legal Basis */}
            <Card>
              <CardHeader>
                <CardTitle>Legal Basis for Processing</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>We process your personal data based on the following legal grounds:</p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Contract Performance</h4>
                    <p>Processing necessary for the performance of a contract with you or to take steps prior to entering into a contract (e.g., course enrollment, delivery of educational services).</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">Legal Obligation</h4>
                    <p>Processing required to comply with legal obligations (e.g., reporting to regulatory bodies, maintaining educational records).</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">Legitimate Interests</h4>
                    <p>Processing necessary for our legitimate interests (e.g., improving services, marketing to existing students, security measures).</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold">Consent</h4>
                    <p>Processing based on your explicit consent (e.g., marketing communications, optional services).</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card>
              <CardHeader>
                <CardTitle>How We Share Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>We may share your personal information with the following parties:</p>
                
                <h4>Educational Partners</h4>
                <ul>
                  <li><strong>Highfield Qualifications:</strong> For course registration, assessment, and certification</li>
                  <li><strong>External Assessors:</strong> For qualification verification and quality assurance</li>
                  <li><strong>Placement Providers:</strong> For work-based learning opportunities</li>
                </ul>

                <h4>Service Providers</h4>
                <ul>
                  <li><strong>IT Service Providers:</strong> For website hosting, email services, and technical support</li>
                  <li><strong>Payment Processors:</strong> For secure payment processing</li>
                  <li><strong>Communication Services:</strong> For email marketing and SMS notifications</li>
                </ul>

                <h4>Legal and Regulatory</h4>
                <ul>
                  <li><strong>Government Agencies:</strong> When required by law or regulation</li>
                  <li><strong>Legal Advisors:</strong> For legal advice and representation</li>
                  <li><strong>Law Enforcement:</strong> When legally required or to protect rights and safety</li>
                </ul>

                <p>
                  We ensure that all third parties we share data with have appropriate security measures 
                  in place and are contractually bound to protect your personal information.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Under UK GDPR, you have the following rights regarding your personal data:
                </p>
                
                <div className="space-y-4">
                  {yourRights.map((right, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">{right.right}</h4>
                      <p className="text-sm text-muted-foreground">{right.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2">How to Exercise Your Rights</h4>
                  <p className="text-sm text-muted-foreground">
                    To exercise any of these rights, please contact our Data Protection Officer using 
                    the contact details provided below. We will respond to your request within one month.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  data against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                
                <ul>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and user authentication</li>
                  <li>Staff training on data protection</li>
                  <li>Incident response procedures</li>
                  <li>Regular backups and disaster recovery plans</li>
                </ul>

                <p>
                  While we strive to protect your personal information, no method of transmission over 
                  the internet or electronic storage is 100% secure. We cannot guarantee absolute security 
                  but are committed to protecting your data using industry-standard practices.
                </p>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card>
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy:</p>
                
                <ul>
                  <li><strong>Student Records:</strong> Retained for 6 years after course completion for regulatory compliance</li>
                  <li><strong>Application Data:</strong> Retained for 2 years for unsuccessful applications</li>
                  <li><strong>Marketing Data:</strong> Retained until you withdraw consent or for 3 years of inactivity</li>
                  <li><strong>Website Analytics:</strong> Retained for 26 months</li>
                  <li><strong>Financial Records:</strong> Retained for 7 years for tax and accounting purposes</li>
                </ul>

                <p>
                  After the retention period expires, we will securely delete or anonymize your personal data 
                  unless we are required to retain it for legal reasons.
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience 
                  and analyze website usage. For detailed information about our use of cookies, please see our 
                  <Link href="/cookies" className="text-blue-600 hover:underline"> Cookie Policy</Link>.
                </p>
                
                <p>You can control cookie settings through your browser preferences:</p>
                <ul>
                  <li>Accept or reject cookies</li>
                  <li>Delete existing cookies</li>
                  <li>Set preferences for specific websites</li>
                  <li>Receive notifications when cookies are set</li>
                </ul>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, 
                  technology, legal requirements, or other factors. We will notify you of any material changes by:
                </p>
                
                <ul>
                  <li>Posting the updated policy on our website</li>
                  <li>Updating the "Last Updated" date</li>
                  <li>Sending email notifications for significant changes</li>
                  <li>Providing prominent notice on our website</li>
                </ul>

                <p>
                  We encourage you to review this policy periodically to stay informed about how we 
                  protect your personal information.
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
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Data Protection Officer</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-blue-600" />
                        <a href="mailto:dpo@londoncas.co.uk" className="hover:text-blue-600">
                          dpo@londoncas.co.uk
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

                <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Complaints</h4>
                  <p className="text-sm text-muted-foreground">
                    If you are not satisfied with our response to your data protection concerns, 
                    you have the right to lodge a complaint with the Information Commissioner's Office (ICO) 
                    at <a href="https://ico.org.uk" className="text-blue-600 hover:underline">ico.org.uk</a> 
                    or by calling 0303 123 1113.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}