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

export default function CareersForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [formDataState, setFormDataState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    motivation: '',
    availability: ''
  });
  // const [cvFile, setCvFile] = useState<File | null>(null);
  // const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const { showLoading, hideLoading } = useLoading();

  const currentOpenings = [
    {
      id: 'tutor-health-social-care',
      title: 'Tutor - Health and Social Care'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormDataState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormDataState(prev => ({ ...prev, [name]: value }));
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'cv' | 'coverLetter') => {
  //   if (e.target.files && e.target.files[0]) {
  //     const file = e.target.files[0];
  //     if (fileType === 'cv') {
  //       setCvFile(file);
  //     } else {
  //       setCoverLetterFile(file);
  //     }
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    showLoading();

    // Create FormData from our state
    const formData = new FormData();
    formData.append('access_key', 'c739b377-5ab4-40f6-ac58-8eee4c0eb00b');
    formData.append('subject', 'New Careers Application Form Submission');
    formData.append('firstName', formDataState.firstName);
    formData.append('lastName', formDataState.lastName);
    formData.append('email', formDataState.email);
    formData.append('phone', formDataState.phone);
    formData.append('position', formDataState.position);
    formData.append('experience', formDataState.experience);
    formData.append('motivation', formDataState.motivation);
    formData.append('availability', formDataState.availability);
    formData.append('botcheck', '');

    // Add files if they exist
    // if (cvFile) {
    //   formData.append('cv', cvFile);
    // }
    // if (coverLetterFile) {
    //   formData.append('coverLetter', coverLetterFile);
    // }

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
        setSubmitStatus({ success: true, message: "Thank you! Your application has been submitted successfully. We'll review it and contact you within 5 working days." });
        toast.success('Application submitted successfully!');
        // Reset form
        setFormDataState({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          motivation: '',
          availability: ''
        });
        // setCvFile(null);
        // setCoverLetterFile(null);
      } else {
        console.error('Web3Forms API Error:', result);
        setSubmitStatus({ success: false, message: 'Sorry, there was an error submitting your application. Please try again later.' });
        toast.error('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ success: false, message: 'Sorry, there was an error submitting your application. Please try again later.' });
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
      hideLoading();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="access_key" value="c739b377-5ab4-40f6-ac58-8eee4c0eb00b" />
      <input type="hidden" name="subject" value="New Careers Application Form Submission" />
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

      <div className="grid md:grid-cols-2 gap-4">
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
          <Label htmlFor="phone">Phone Number *</Label>
          <Input 
            id="phone" 
            name="phone" 
            type="tel" 
            value={formDataState.phone}
            onChange={handleInputChange}
            placeholder="+44 7XXX XXXXXX" 
            required 
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="position">Position Applied For *</Label>
        <Select 
          name="position" 
          value={formDataState.position} 
          onValueChange={(value) => handleSelectChange('position', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select position" />
          </SelectTrigger>
          <SelectContent>
            {currentOpenings.map((job) => (
              <SelectItem key={job.id} value={job.id}>
                {job.title}
              </SelectItem>
            ))}
            <SelectItem value="speculative">Speculative Application</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience">Relevant Experience *</Label>
        <Textarea 
          id="experience" 
          name="experience"
          value={formDataState.experience}
          onChange={(e) => handleInputChange(e)}
          placeholder="Please describe your relevant work experience and qualifications..."
          rows={4}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="motivation">Why do you want to work at LCAS? *</Label>
        <Textarea 
          id="motivation" 
          name="motivation"
          value={formDataState.motivation}
          onChange={(e) => handleInputChange(e)}
          placeholder="Tell us what motivates you to join our team..."
          rows={4}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="availability">Availability</Label>
        <Textarea 
          id="availability" 
          name="availability"
          value={formDataState.availability}
          onChange={(e) => handleInputChange(e)}
          placeholder="When are you available to start? Any notice period requirements?"
          rows={2}
        />
      </div>

      {/* <div className="space-y-2">
        <Label htmlFor="cv">CV/Resume *</Label>
        <Input 
          id="cv" 
          type="file" 
          accept=".pdf,.doc,.docx" 
          onChange={(e) => handleFileChange(e, 'cv')}
          required 
        />
        <p className="text-xs text-muted-foreground">
          Please upload your CV in PDF, DOC, or DOCX format (max 5MB)
        </p>
      </div> */}

      {/* <div className="space-y-2">
        <Label htmlFor="coverLetter">Cover Letter</Label>
        <Input 
          id="coverLetter" 
          type="file" 
          accept=".pdf,.doc,.docx" 
          onChange={(e) => handleFileChange(e, 'coverLetter')}
        />
        <p className="text-xs text-muted-foreground">
          Optional: Upload a cover letter (PDF, DOC, or DOCX format)
        </p>
      </div> */}

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
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}