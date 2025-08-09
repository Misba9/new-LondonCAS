import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  BookOpen, 
  Award, 
  CheckCircle2,
  TrendingUp,
  Globe
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: BookOpen,
      title: 'Learning for All',
      description: 'Education should be inclusive, empowering, and accessible to everyone.'
    },
    {
      icon: Users,
      title: 'Collaborative and Innovative Teaching',
      description: 'We blend academic rigour with real-world relevance for practical learning.'
    },
    {
      icon: Heart,
      title: 'Equal Opportunity',
      description: 'We celebrate diversity and support every learner\'s unique journey.'
    },
    {
      icon: TrendingUp,
      title: 'Excellent Student Services',
      description: 'Outstanding support to help students succeed academically and personally.'
    }
  ];

  const expansionAreas = [
    'Business Management',
    'Information Technology',
    'Digital Marketing',
    'Project Management',
    'Customer Service',
    'Leadership & Management'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              Established 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              About LCAS
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              The London College of Advanced Studies is more than just a place to study — 
              it's a place to grow, achieve, and belong.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <Card className="p-8 md:p-12 shadow-lg">
              <CardContent className="space-y-6 p-0">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Established in 2025, LCAS was created to respond to the need for inclusive, 
                  flexible, and forward-thinking education. Our programmes are chosen to meet 
                  academic standards and shape skilled professionals who are ready to make a 
                  positive impact in their fields.
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our college is starting with courses in <strong>Health and Social Care</strong>, 
                  with an ambitious vision to expand into Business Management, Information Technology, 
                  and other key disciplines that meet the demands of a rapidly evolving workforce.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Highfield Approved Centre</h4>
                      <p className="text-sm text-slate-600">Official approval for regulated qualifications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Career-Focused Learning</h4>
                      <p className="text-sm text-slate-600">Real-world skills for professional success</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Flexible Delivery</h4>
                      <p className="text-sm text-slate-600">Part-time options for working professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Experienced Tutors</h4>
                      <p className="text-sm text-slate-600">Industry professionals and academic experts</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <Card className="p-8 shadow-lg">
              <CardContent className="space-y-6 p-0">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To become a leading centre of inclusive, career-focused education that empowers 
                  individuals to make a meaningful impact across diverse sectors, shaping resilient 
                  communities and building a skilled, adaptable workforce for the future.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="p-8 shadow-lg">
              <CardContent className="space-y-6 p-0">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    To deliver high-quality, accessible education in Health and Social Care, 
                    equipping learners with the knowledge, skills, and values needed for 
                    professional excellence and personal growth.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-700">We are committed to continuous growth through:</p>
                    <ul className="text-sm text-slate-600 space-y-1 ml-4">
                      <li>• Innovative and industry-relevant teaching</li>
                      <li>• Expansion across multiple disciplines</li>
                      <li>• A learner-first environment</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We live by values that guide every decision we make and shape our educational approach.
              </p>
              <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="space-y-4 p-0">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold">{value.title}</h4>
                          <p className="text-slate-600 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Future Expansion */}
      <section id="expansion" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="mb-2">
                Coming Soon
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Future Course Expansion</h2>
              <p className="text-lg text-slate-600">
                Our vision extends beyond health and social care. We're planning to expand 
                into these exciting disciplines:
              </p>
            </div>

            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {expansionAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-slate-200">
                      <Globe className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-sm text-slate-500 italic">
                Stay tuned for updates on our course expansion plans. 
                <br />
                Follow our news section for the latest announcements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highfield Partnership */}
      <section id="highfield" className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Highfield Partnership</h2>
              <p className="text-lg text-slate-600">
                Our official approval as a Highfield centre ensures you receive 
                globally recognised qualifications.
              </p>
            </div>

            <Card className="p-8 shadow-lg border-2 border-blue-200 bg-blue-50/50">
              <CardContent className="space-y-6 p-0">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Award className="h-12 w-12 text-blue-600" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">Highfield Qualifications</h3>
                    <p className="text-slate-600">Global leader in compliance and work-based training</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">What This Means for You:</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Nationally recognised qualifications</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Industry-standard training</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Enhanced career prospects</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Quality assured content</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Our Qualifications:</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• 16 Highfield qualifications available</li>
                      <li>• Levels 2-5 progression pathways</li>
                      <li>• Certificates, Awards, and Diplomas</li>
                      <li>• Regular updates and new additions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}