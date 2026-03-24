import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CyberCrimeTypeCard = ({ icon, title, description, example }) => {
  return (
    <Card className="bg-card border-border shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive flex-shrink-0">
            {icon}
          </div>
          <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        {example && (
          <div className="bg-muted/30 rounded-lg p-3 border-l-4 border-destructive/50">
            <p className="text-sm text-foreground">
              <span className="font-medium">Example:</span> {example}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CyberCrimeTypeCard;