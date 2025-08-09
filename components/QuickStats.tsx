import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, BookOpen, TrendingUp } from 'lucide-react';

const QuickStats = () => {
  const stats = [
    {
      icon: Award,
      value: '16',
      label: 'Highfield Qualifications',
      description: 'Across 4 levels',
    },
    {
      icon: Users,
      value: '100+',
      label: 'Students Enrolled',
      description: 'Growing community',
    },
    {
      icon: BookOpen,
      value: '4',
      label: 'Study Levels',
      description: 'From Level 2 to 5',
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Success Rate',
      description: 'Student completion',
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm font-medium text-slate-900">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;