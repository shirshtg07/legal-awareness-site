import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const StepGuideCard = ({ number, title, steps, documents, contactInfo, estimatedTime }) => {
  return (
    <Card className="bg-card border-border shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader className="bg-muted/50 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="text-6xl font-bold text-primary/20" style={{ letterSpacing: '-0.02em' }}>
            {number}
          </div>
          <CardTitle className="text-2xl font-semibold text-foreground">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div>
          <h4 className="font-semibold text-foreground mb-3">Steps to follow:</h4>
          <ol className="space-y-2 list-decimal list-inside text-muted-foreground leading-relaxed">
            {steps.map((step, index) => (
              <li key={index} className="pl-2">{step}</li>
            ))}
          </ol>
        </div>
        
        {documents && documents.length > 0 && (
          <div>
            <h4 className="font-semibold text-foreground mb-3">Required documents:</h4>
            <ul className="space-y-1 list-disc list-inside text-muted-foreground">
              {documents.map((doc, index) => (
                <li key={index} className="pl-2">{doc}</li>
              ))}
            </ul>
          </div>
        )}
        
        {contactInfo && (
          <div className="bg-muted/30 rounded-xl p-4">
            <h4 className="font-semibold text-foreground mb-2">Contact information:</h4>
            <p className="text-muted-foreground text-sm">{contactInfo}</p>
          </div>
        )}
        
        {estimatedTime && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium">Estimated time:</span>
            <span>{estimatedTime}</span>
          </div>
        )}
        
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 active:scale-[0.98]">
          <Download className="w-4 h-4 mr-2" />
          Download guide
        </Button>
      </CardContent>
    </Card>
  );
};

export default StepGuideCard;