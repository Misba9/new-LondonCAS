import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, User } from 'lucide-react';

const NewsSection = () => {
  const newsArticles = [
    {
      id: 'highfield-approval-announcement',
      title: 'LCAS Becomes Approved Centre for Highfield Qualifications',
      excerpt: 'We are excited to announce our official approval as a centre for delivering Highfield regulated qualifications in health and social care.',
      date: '2025-07-18',
      category: 'Announcements',
      author: 'LCAS Administration',
      featured: true,
      readTime: '3 min read'
    },
    {
      id: 'health-social-care-opportunities',
      title: 'Career Opportunities in Health and Social Care 2025',
      excerpt: 'Explore the growing job market in health and social care, salary expectations, and how our qualifications can help you succeed.',
      date: '2025-07-10',
      category: 'Career Guidance',
      author: 'Dr. Sarah Johnson',
      featured: false,
      readTime: '5 min read'
    },
    {
      id: 'flexible-learning-approach',
      title: 'Our Flexible Learning Approach for Working Professionals',
      excerpt: 'Learn how our part-time courses and flexible delivery methods help working professionals advance their careers.',
      date: '2025-07-05',
      category: 'Education',
      author: 'Mark Thompson',
      featured: false,
      readTime: '4 min read'
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
    <section className="py-16 bg-slate-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about college news, industry insights, and educational opportunities 
            in health and social care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.map((article) => (
            <Card key={article.id} className={`relative group hover:shadow-lg transition-all duration-300 ${article.featured ? 'border-blue-200' : ''}`}>
              {article.featured && (
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white">
                    Latest
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors line-clamp-2">
                  <Link href={`/news/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-2" />
                    {formatDate(article.date)}
                  </div>
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-2" />
                    {article.author}
                  </div>
                </div>

                <div className="pt-2">
                  <Button asChild variant="ghost" className="p-0 h-auto font-medium text-sm hover:text-blue-600">
                    <Link href={`/news/${article.id}`} className="flex items-center">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/news">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;