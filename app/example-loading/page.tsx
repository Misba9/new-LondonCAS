'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLoading } from '@/contexts/LoadingContext';

export default function ExampleLoadingPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { showLoading, hideLoading } = useLoading();

  // Simulate data fetching
  const fetchData = async () => {
    setLoading(true);
    showLoading();
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock data
      const mockData = [
        { id: 1, name: 'Example Item 1', description: 'This is a sample item' },
        { id: 2, name: 'Example Item 2', description: 'This is another sample item' },
        { id: 3, name: 'Example Item 3', description: 'This is a third sample item' }
      ];
      
      setData(mockData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      hideLoading();
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Loading Animation Example</h1>
            <p className="text-lg text-muted-foreground">
              This page demonstrates how to use the global loading animation during data fetching
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Data Fetching Example</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <p>Click the button below to simulate fetching data with loading animation:</p>
                  <Button onClick={fetchData} disabled={loading}>
                    {loading ? 'Loading...' : 'Fetch Data'}
                  </Button>
                </div>

                {data.length > 0 ? (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Fetched Data:</h3>
                    <div className="grid gap-4">
                      {data.map((item) => (
                        <Card key={item.id} className="p-4">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </Card>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No data loaded yet. Click "Fetch Data" to load sample data.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}