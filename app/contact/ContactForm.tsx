'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useLoading } from '@/contexts/LoadingContext';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [formDataState, setFormDataState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    subjectField: '',
    message: ''
  });
  const { showLoading, hideLoading } = useLoading();

  const departments = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'admissions', label: 'Admissions' },
    { value: 'courses', label: 'Course Information' },
    { value: 'support', label: 'Student Support' },
    { value: 'careers', label: 'Careers' },
    { value: 'partnerships', label: 'Partnerships' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormDataState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormDataState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    showLoading();

    // Create FormData from our state
    const formData = new FormData();
    formData.append('access_key', 'c739b377-5ab4-40f6-ac58-8eee4c0eb00b');
    formData.append('subject', 'New Contact Form Submission');
    formData.append('firstName', formDataState.firstName);
    formData.append('lastName', formDataState.lastName);
    formData.append('email', formDataState.email);
    formData.append('phone', formDataState.phone);
    formData.append('department', formDataState.department);
    formData.append('subjectField', formDataState.subjectField);
    formData.append('message', formDataState.message);
    formData.append('botcheck', '');

    // Debug: Log all form data
    console.log('Form Data being sent:');
    const entries = Array.from(formData.entries());
    entries.forEach(([key, value]) => {
      console.log(key, value);
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log('Web3Forms API Response:', result);

      if (result.success) {
        setSubmitStatus({ success: true, message: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours." });
        toast.success('Message sent successfully!');
        // Reset form
        setFormDataState({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          department: '',
          subjectField: '',
          message: ''
        });
      } else {
        console.error('Web3Forms API Error:', result);
        setSubmitStatus({ success: false, message: 'Sorry, there was an error sending your message. Please try again later.' });
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ success: false, message: 'Sorry, there was an error sending your message. Please try again later.' });
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
      hideLoading();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="access_key" value="c739b377-5ab4-40f6-ac58-8eee4c0eb00b" />
      <input type="hidden" name="subject" value="New Contact Form Submission" />
      <input type="text" name="botcheck" className="hidden" style={{ display: 'none' }} />
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input 
            id="firstName" 
            name="firstName" 
            value={formDataState.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name" 
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input 
            id="lastName" 
            name="lastName" 
            value={formDataState.lastName}
            onChange={handleInputChange}
            placeholder="Enter your last name" 
            required 
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          value={formDataState.email}
          onChange={handleInputChange}
          placeholder="your.email@example.com" 
          required 
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input 
          id="phone" 
          name="phone" 
          type="tel" 
          value={formDataState.phone}
          onChange={handleInputChange}
          placeholder="+44 7XXX XXXXXX" 
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="department">Department</Label>
        <Select 
          name="department" 
          value={formDataState.department} 
          onValueChange={(value) => handleSelectChange('department', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((dept) => (
              <SelectItem key={dept.value} value={dept.value}>
                {dept.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subjectField">Subject *</Label>
        <Input 
          id="subjectField" 
          name="subjectField" 
          value={formDataState.subjectField}
          onChange={handleInputChange}
          placeholder="Brief subject of your inquiry" 
          required 
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea 
          id="message" 
          name="message"
          value={formDataState.message}
          onChange={(e) => handleInputChange(e)}
          placeholder="Please provide details about your inquiry..."
          rows={6}
          required
        />
      </div>

      {submitStatus && (
        <div className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          <div className="flex items-center">
            {submitStatus.success ? (
              <CheckCircle className="h-5 w-5 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2" />
            )}
            <p>{submitStatus.message}</p>
          </div>
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}