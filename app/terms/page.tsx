import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Scale, AlertTriangle, Shield } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | London College of Advanced Studies',
  description: 'Read the terms and conditions for using LCAS services and website. Understand your rights and responsibilities as a student or website user.',
  keywords: 'terms and conditions, terms of service, legal terms, LCAS, student terms, website terms'
};

export default function TermsPage() {
  const lastUpdated = '18 July 2025';

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-4 bg-slate-50 border-b">
        <div className="container px-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Terms & Conditions</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              <Scale className="h-3 w-3 mr-1" />
              Legal Terms
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Terms & Conditions
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              These terms govern your use of our website and services.
              Please read them carefully before using our services.
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
                  <FileText className="h-5 w-5 mr-2" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  Welcome to London College of Advanced Studies ("LCAS", "we", "us", or "our").
                  These Terms and Conditions ("Terms") govern your use of our website, services,
                  and educational programs.
                </p>
                <p>
                  By accessing our website, applying for courses, or using our services, you agree
                  to be bound by these Terms. If you do not agree with any part of these Terms,
                  you must not use our services.
                </p>
                <p>
                  These Terms apply to all users of our services, including prospective students,
                  current students, graduates, website visitors, and any other individuals who
                  interact with our services.
                </p>
              </CardContent>
            </Card>

            {/* Definitions */}
            <Card>
              <CardHeader>
                <CardTitle>Definitions</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>In these Terms, the following definitions apply:</p>

                <ul>
                  <li><strong>"College" or "LCAS"</strong> means London College of Advanced Studies</li>
                  <li><strong>"Student"</strong> means any person enrolled in a course or program offered by LCAS</li>
                  <li><strong>"Course"</strong> means any educational program, qualification, or training offered by LCAS</li>
                  <li><strong>"Services"</strong> means all services provided by LCAS, including educational services, website access, and support services</li>
                  <li><strong>"Website"</strong> means the LCAS website at londoncas.co.uk and any related subdomains</li>
                  <li><strong>"Content"</strong> means all text, images, videos, documents, and other materials provided through our services</li>
                </ul>
              </CardContent>
            </Card>

            {/* Website Use */}
            <Card>
              <CardHeader>
                <CardTitle>Website Use</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <h4>Permitted Use</h4>
                <p>You may use our website for:</p>
                <ul>
                  <li>Browsing information about our courses and services</li>
                  <li>Applying for courses and programs</li>
                  <li>Accessing student portal and course materials (if enrolled)</li>
                  <li>Contacting us for legitimate inquiries</li>
                  <li>Downloading materials we make available for download</li>
                </ul>

                <h4>Prohibited Use</h4>
                <p>You must not use our website to:</p>
                <ul>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the website</li>
                  <li>Use automated systems to access or scrape content</li>
                  <li>Impersonate another person or entity</li>
                </ul>

                <h4>Account Security</h4>
                <p>
                  If you create an account with us, you are responsible for maintaining the
                  confidentiality of your login credentials and for all activities that occur
                  under your account. You must notify us immediately of any unauthorized use
                  of your account.
                </p>
              </CardContent>
            </Card>

            {/* Educational Services */}
            <Card>
              <CardHeader>
                <CardTitle>Educational Services</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <h4>Course Enrollment</h4>
                <p>
                  Enrollment in our courses is subject to meeting entry requirements, availability,
                  and acceptance of your application. We reserve the right to refuse enrollment
                  or terminate enrollment for academic or disciplinary reasons.
                </p>

                <h4>Course Delivery</h4>
                <p>
                  We will make reasonable efforts to deliver courses as described in our course
                  information. However, we reserve the right to:
                </p>
                <ul>
                  <li>Modify course content, structure, or delivery methods</li>
                  <li>Change course schedules or locations</li>
                  <li>Cancel courses due to insufficient enrollment</li>
                  <li>Substitute tutors or instructors</li>
                </ul>

                <h4>Student Responsibilities</h4>
                <p>As a student, you agree to:</p>
                <ul>
                  <li>Attend classes and complete assignments as required</li>
                  <li>Behave professionally and respectfully</li>
                  <li>Comply with college policies and procedures</li>
                  <li>Pay fees and charges on time</li>
                  <li>Provide accurate and complete information</li>
                  <li>Notify us of any changes to your circumstances</li>
                </ul>

                <h4>Assessment and Certification</h4>
                <p>
                  Assessment methods and certification requirements are determined by LCAS
                  and our awarding body (Highfield Qualifications). Students must meet all
                  assessment requirements to receive certification.
                </p>
              </CardContent>
            </Card>

            {/* Fees and Payments */}
            <Card>
              <CardHeader>
                <CardTitle>Fees and Payments</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <h4>Course Fees</h4>
                <p>
                  Course fees are as published on our website or in course documentation.
                  Fees are subject to change, but changes will not affect students already
                  enrolled unless agreed in writing.
                </p>

                <h4>Payment Terms</h4>
                <ul>
                  <li>Fees must be paid according to the agreed payment schedule</li>
                  <li>Late payment may result in suspension of access to course materials</li>
                  <li>Payment plans may be available subject to approval</li>
                  <li>All fees are non-refundable except as specified in our refund policy</li>
                </ul>

                <h4>Refund Policy</h4>
                <p>Refunds may be available in the following circumstances:</p>
                <ul>
                  <li>Course cancellation by LCAS: Full refund</li>
                  <li>Withdrawal within 14 days of enrollment: Full refund minus administration fee</li>
                  <li>Withdrawal after course commencement: Pro-rata refund may apply</li>
                  <li>Exceptional circumstances: Considered on a case-by-case basis</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <h4>Our Content</h4>
                <p>
                  All content on our website and in our courses, including text, images, videos,
                  logos, and course materials, is owned by LCAS or our licensors and is protected
                  by copyright and other intellectual property laws.
                </p>

                <h4>Limited License</h4>
                <p>
                  We grant you a limited, non-exclusive, non-transferable license to access and
                  use our content for personal, educational purposes only. You may not:
                </p>
                <ul>
                  <li>Reproduce, distribute, or publicly display our content</li>
                  <li>Create derivative works based on our content</li>
                  <li>Use our content for commercial purposes</li>
                  <li>Remove copyright or other proprietary notices</li>
                </ul>

                <h4>Student Work</h4>
                <p>
                  You retain ownership of original work you create as part of your studies.
                  However, you grant us a license to use your work for educational, promotional,
                  and quality assurance purposes.
                </p>
              </CardContent>
            </Card>

            {/* Privacy and Data Protection */}
            <Card>
              <CardHeader>
                <CardTitle>Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  We are committed to protecting your privacy and personal data. Our collection,
                  use, and protection of your personal information is governed by our
                  <Link href="/privacy" className="text-blue-600 hover:underline"> Privacy Policy</Link>,
                  which forms part of these Terms.
                </p>

                <p>By using our services, you consent to:</p>
                <ul>
                  <li>The collection and processing of your personal data as described in our Privacy Policy</li>
                  <li>The use of cookies and similar technologies on our website</li>
                  <li>Communication from us regarding your studies and our services</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  To the fullest extent permitted by law, LCAS shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages, including
                  but not limited to loss of profits, data, or business opportunities.
                </p>

                <p>Our total liability to you for any claims arising from these Terms or your use of our services shall not exceed the amount of fees you have paid to us in the 12 months preceding the claim.</p>

                <p>Nothing in these Terms excludes or limits our liability for:</p>
                <ul>
                  <li>Death or personal injury caused by our negligence</li>
                  <li>Fraud or fraudulent misrepresentation</li>
                  <li>Any other liability that cannot be excluded by law</li>
                </ul>
              </CardContent>
            </Card>

            {/* Force Majeure */}
            <Card>
              <CardHeader>
                <CardTitle>Force Majeure</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  We shall not be liable for any failure or delay in performing our obligations
                  under these Terms if such failure or delay results from circumstances beyond
                  our reasonable control, including but not limited to:
                </p>

                <ul>
                  <li>Natural disasters, pandemics, or public health emergencies</li>
                  <li>Government actions, laws, or regulations</li>
                  <li>War, terrorism, or civil unrest</li>
                  <li>Labor disputes or strikes</li>
                  <li>Technical failures or cyber attacks</li>
                  <li>Supplier or third-party failures</li>
                </ul>

                <p>
                  In such circumstances, we will make reasonable efforts to minimize disruption
                  and may provide alternative delivery methods or arrangements.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <CardTitle>Termination</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <h4>Termination by You</h4>
                <p>
                  You may terminate your enrollment or use of our services at any time by
                  providing written notice. Refunds, if applicable, will be processed according
                  to our refund policy.
                </p>

                <h4>Termination by Us</h4>
                <p>We may terminate your access to our services immediately if you:</p>
                <ul>
                  <li>Breach these Terms or our policies</li>
                  <li>Fail to pay fees when due</li>
                  <li>Engage in misconduct or illegal activities</li>
                  <li>Provide false or misleading information</li>
                </ul>

                <h4>Effect of Termination</h4>
                <p>
                  Upon termination, your right to access our services will cease immediately.
                  Provisions of these Terms that by their nature should survive termination
                  will remain in effect.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle>Governing Law and Jurisdiction</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  These Terms are governed by and construed in accordance with the laws of
                  England and Wales. Any disputes arising from these Terms or your use of
                  our services shall be subject to the exclusive jurisdiction of the courts
                  of England and Wales.
                </p>

                <h4>Dispute Resolution</h4>
                <p>
                  We encourage you to contact us first to resolve any disputes informally.
                  If we cannot resolve a dispute through direct discussion, we may suggest
                  mediation or other alternative dispute resolution methods before pursuing
                  formal legal proceedings.
                </p>
              </CardContent>
            </Card>

            {/* General Provisions */}
            <Card>
              <CardHeader>
                <CardTitle>General Provisions</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <h4>Entire Agreement</h4>
                <p>
                  These Terms, together with our Privacy Policy and any other policies
                  referenced herein, constitute the entire agreement between you and LCAS
                  regarding your use of our services.
                </p>

                <h4>Amendments</h4>
                <p>
                  We may update these Terms from time to time. We will notify you of material
                  changes by posting the updated Terms on our website and updating the "Last Updated"
                  date. Your continued use of our services after changes take effect constitutes
                  acceptance of the new Terms.
                </p>

                <h4>Severability</h4>
                <p>
                  If any provision of these Terms is found to be invalid or unenforceable,
                  the remaining provisions will remain in full force and effect.
                </p>

                <h4>Waiver</h4>
                <p>
                  Our failure to enforce any provision of these Terms does not constitute
                  a waiver of that provision or any other provision.
                </p>

                <h4>Assignment</h4>
                <p>
                  You may not assign or transfer your rights under these Terms without our
                  written consent. We may assign our rights and obligations under these Terms
                  without restriction.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about these Terms, please contact us:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Legal Department</h4>
                    <div className="space-y-2 text-sm">
                      <p>Email: director@londoncas.co.uk</p>
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

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Company Registration:</strong> London College of Advanced Studies is a private limited company
                    registered in England and Wales. Company registration details available upon request.
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