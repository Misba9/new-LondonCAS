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
import { Checkbox } from '@/components/ui/checkbox';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useLoading } from '@/contexts/LoadingContext';

export default function ApplyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [formDataState, setFormDataState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    nationality: '',
    courseLevel: '',
    specificCourse: '',
    startDate: '',
    education: '',
    workExperience: '',
    motivation: '',
    support: '',
    funding: '',
    terms: false,
    marketing: false
  });
  const { showLoading, hideLoading } = useLoading();

  const courseLevels = [
    { value: 'level2', label: 'Level 2 Diploma' },
    { value: 'level3', label: 'Level 3 Diploma' },
    { value: 'level4', label: 'Level 4 Diploma' },
    { value: 'level5', label: 'Level 5 Diploma' }
  ];

  const courses = [
    { value: 'health-social-care-l2', label: 'Health and Social Care Level 2' },
    { value: 'health-social-care-l3', label: 'Health and Social Care Level 3' },
    { value: 'health-social-care-l4', label: 'Health and Social Care Level 4' },
    { value: 'health-social-care-l5', label: 'Health and Social Care Level 5' },
    { value: 'adult-care-l2', label: 'Diploma in Adult Care Level 2' },
    { value: 'adult-care-l3', label: 'Diploma in Adult Care Level 3' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormDataState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormDataState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormDataState(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    showLoading();

    // Create FormData from our state
    const formData = new FormData();
    formData.append('access_key', 'c739b377-5ab4-40f6-ac58-8eee4c0eb00b');
    formData.append('subject', 'New Application Form Submission');
    formData.append('firstName', formDataState.firstName);
    formData.append('lastName', formDataState.lastName);
    formData.append('email', formDataState.email);
    formData.append('phone', formDataState.phone);
    formData.append('address', formDataState.address);
    formData.append('dateOfBirth', formDataState.dateOfBirth);
    formData.append('nationality', formDataState.nationality);
    formData.append('courseLevel', formDataState.courseLevel);
    formData.append('specificCourse', formDataState.specificCourse);
    formData.append('startDate', formDataState.startDate);
    formData.append('education', formDataState.education);
    formData.append('workExperience', formDataState.workExperience);
    formData.append('motivation', formDataState.motivation);
    formData.append('support', formDataState.support);
    formData.append('funding', formDataState.funding);
    formData.append('terms', formDataState.terms.toString());
    formData.append('marketing', formDataState.marketing.toString());
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
        setSubmitStatus({ success: true, message: "Thank you! Your application has been submitted successfully. We'll review it and contact you within 3 working days." });
        toast.success('Application submitted successfully!');
        // Reset form
        setFormDataState({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          dateOfBirth: '',
          nationality: '',
          courseLevel: '',
          specificCourse: '',
          startDate: '',
          education: '',
          workExperience: '',
          motivation: '',
          support: '',
          funding: '',
          terms: false,
          marketing: false
        });
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
      <input type="hidden" name="subject" value="New Application Form Submission" />
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
        <Label htmlFor="address">Full Address *</Label>
        <Textarea 
          id="address" 
          name="address"
          value={formDataState.address}
          onChange={(e) => handleInputChange(e)}
          placeholder="Enter your full address including postcode"
          rows={3}
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <Input 
            id="dateOfBirth" 
            name="dateOfBirth" 
            type="date" 
            value={formDataState.dateOfBirth}
            onChange={handleInputChange}
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="nationality">Nationality *</Label>
          <Input 
            id="nationality" 
            name="nationality" 
            value={formDataState.nationality}
            onChange={handleInputChange}
            placeholder="Enter your nationality" 
            required 
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="courseLevel">Course Level *</Label>
          <Select 
            name="courseLevel" 
            value={formDataState.courseLevel} 
            onValueChange={(value) => handleSelectChange('courseLevel', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select course level" />
            </SelectTrigger>
            <SelectContent>
              {courseLevels.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="specificCourse">Specific Course *</Label>
          <Select 
            name="specificCourse" 
            value={formDataState.specificCourse} 
            onValueChange={(value) => handleSelectChange('specificCourse', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select specific course" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((course) => (
                <SelectItem key={course.value} value={course.value}>
                  {course.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="startDate">Preferred Start Date *</Label>
        <Input 
          id="startDate" 
          name="startDate" 
          type="date" 
          value={formDataState.startDate}
          onChange={handleInputChange}
          required 
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="education">Educational Background *</Label>
        <Textarea 
          id="education" 
          name="education"
          value={formDataState.education}
          onChange={(e) => handleInputChange(e)}
          placeholder="List your educational qualifications and any relevant certifications..."
          rows={3}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="workExperience">Work Experience</Label>
        <Textarea 
          id="workExperience" 
          name="workExperience"
          value={formDataState.workExperience}
          onChange={(e) => handleInputChange(e)}
          placeholder="Describe any relevant work experience, including voluntary work..."
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="motivation">Why do you want to study this course? *</Label>
        <Textarea 
          id="motivation" 
          name="motivation"
          value={formDataState.motivation}
          onChange={(e) => handleInputChange(e)}
          placeholder="Explain your motivation for choosing this course and your career goals..."
          rows={4}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="support">Do you require any additional support? *</Label>
        <Textarea 
          id="support" 
          name="support"
          value={formDataState.support}
          onChange={(e) => handleInputChange(e)}
          placeholder="Please let us know if you require any additional support during your studies..."
          rows={2}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="funding">How will you fund your studies? *</Label>
        <Textarea 
          id="funding" 
          name="funding"
          value={formDataState.funding}
          onChange={(e) => handleInputChange(e)}
          placeholder="Please describe how you plan to fund your studies..."
          rows={2}
          required
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-2">
          <Checkbox 
            id="terms" 
            checked={formDataState.terms}
            onCheckedChange={(checked) => handleCheckboxChange('terms', checked as boolean)}
            required
          />
          <Label htmlFor="terms">
            I agree to the Terms and Conditions and Privacy Policy. I understand that the information provided will be used to process my application. *
          </Label>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox 
            id="marketing" 
            checked={formDataState.marketing}
            onCheckedChange={(checked) => handleCheckboxChange('marketing', checked as boolean)}
          />
          <Label htmlFor="marketing">
            I would like to receive marketing communications about courses and events.
          </Label>
        </div>
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
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}