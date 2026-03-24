import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });
  const [submissions, setSubmissions] = useLocalStorage('faq-submissions', []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.category || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      const newSubmission = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      setSubmissions([...submissions, newSubmission]);
      
      toast({
        title: "Question submitted",
        description: "We have received your question and will respond soon."
      });
      
      setFormData({ name: '', email: '', category: '', message: '' });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <Card className="bg-card border-border shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-foreground">Ask a question</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background text-foreground border-border min-h-[44px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background text-foreground border-border min-h-[44px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-foreground font-medium">Category</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger className="bg-background text-foreground border-border min-h-[44px]">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fundamental-rights">Fundamental rights</SelectItem>
                <SelectItem value="consumer-rights">Consumer rights</SelectItem>
                <SelectItem value="cyber-crime">Cyber crime</SelectItem>
                <SelectItem value="legal-procedure">Legal procedure</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background text-foreground border-border min-h-[120px] resize-none"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 active:scale-[0.98] min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit question'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;