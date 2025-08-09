import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Calendar, 
  User, 
  Clock, 
  Search, 
  Filter,
  ArrowRight,
  Tag
} from 'lucide-react';

export default function NewsPage() {
  const newsArticles = [
    {
      id: 'highfield-approval-announcement',
      title: 'LCAS Becomes Approved Centre for Highfield Qualifications',
      excerpt: 'We are excited to announce our official approval as a centre for delivering Highfield regulated qualifications in health and social care.',
      content: 'London College of Advanced Studies is proud to announce that we have received official approval as an approved centre for Highfield Qualifications...',
      date: '2025-07-18',
      category: 'Announcements',
      author: 'LCAS Administration',
      featured: true,
      readTime: '3 min read',
      tags: ['Highfield', 'Approval', 'Qualifications'],
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 'health-social-care-opportunities',
      title: 'Career Opportunities in Health and Social Care 2025',
      excerpt: 'Explore the growing job market in health and social care, salary expectations, and how our qualifications can help you succeed.',
      content: 'The health and social care sector continues to show strong growth with excellent career prospects...',
      date: '2025-07-10',
      category: 'Career Guidance',
      author: 'Dr. Sarah Johnson',
      featured: false,
      readTime: '5 min read',
      tags: ['Careers', 'Health Care', 'Social Care'],
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 'flexible-learning-approach',
      title: 'Our Flexible Learning Approach for Working Professionals',
      excerpt: 'Learn how our part-time courses and flexible delivery methods help working professionals advance their careers.',
      content: 'At LCAS, we understand that many of our students are working professionals who need flexible learning options...',
      date: '2025-07-05',
      category: 'Education',
      author: 'Mark Thompson',
      featured: false,
      readTime: '4 min read',
      tags: ['Flexible Learning', 'Part-time', 'Professional Development'],
      image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 'student-success-stories',
      title: 'Student Success Stories: From Care Assistant to Team Leader',
      excerpt: 'Read inspiring stories from our graduates who have advanced their careers through LCAS qualifications.',
      content: 'Meet Sarah, who started as a care assistant and is now a team leader after completing her Level 3 Diploma...',
      date: '2025-06-28',
      category: 'Success Stories',
      author: 'Emma Wilson',
      featured: false,
      readTime: '6 min read',
      tags: ['Success Stories', 'Career Progression', 'Graduates'],
      image: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 'digital-transformation-care',
      title: 'Digital Transformation in Health and Social Care',
      excerpt: 'How technology is reshaping the care sector and why digital skills are essential for modern care professionals.',
      content: 'The integration of digital technologies in health and social care is accelerating rapidly...',
      date: '2025-06-20',
      category: 'Technology',
      author: 'Dr. James Mitchell',
      featured: false,
      readTime: '7 min read',
      tags: ['Digital Health', 'Technology', 'Innovation'],
      image: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 'mental-health-awareness',
      title: 'Mental Health Awareness in Care Settings',
      excerpt: 'Understanding the importance of mental health support for both care workers and service users.',
      content: 'Mental health awareness has become increasingly important in care settings...',
      date: '2025-06-15',
      category: 'Health & Wellbeing',
      author: 'Dr. Lisa Chen',
      featured: false,
      readTime: '5 min read',
      tags: ['Mental Health', 'Wellbeing', 'Care Settings'],
      image: 'https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    }
  ];

  const categories = [
    'All Categories',
    'Announcements',
    'Career Guidance',
    'Education',
    'Success Stories',
    'Technology',
    'Health & Wellbeing'
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              Latest Updates & Insights
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              News & Blog
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Stay informed about college news, industry insights, and educational opportunities 
              in health and social care.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-slate-50">
        <div className="container px-4">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">Search Articles</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search news and articles..." 
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="md:w-48">
                <label className="text-sm font-medium mb-2 block">Category</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase().replace(' ', '-')}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button className="md:w-auto w-full">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Article</h2>
            </div>

            <Card className="max-w-6xl mx-auto overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                      Featured
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <Badge variant="outline">{featuredArticle.category}</Badge>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                      {featuredArticle.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(featuredArticle.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{featuredArticle.author}</span>
                        </div>
                      </div>
                      
                      <Button asChild>
                        <Link href={`/news/${featuredArticle.id}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover insights, updates, and expert perspectives on health and social care education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-slate-700">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2 text-xs text-muted-foreground">
                    <span>{article.readTime}</span>
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    
                    <Button asChild variant="ghost" size="sm">
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

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, course updates, 
              and industry insights directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="bg-white text-slate-900 border-0"
              />
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-blue-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}