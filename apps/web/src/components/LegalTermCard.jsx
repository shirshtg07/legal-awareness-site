import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LegalTermCard = ({ term, explanation, example, category }) => {
  return (
    <Card className="bg-card border-border shadow-sm rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl font-semibold text-foreground">{term}</CardTitle>
          {category && (
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-muted-foreground leading-relaxed">{explanation}</p>
        {example && (
          <div className="bg-muted/30 rounded-lg p-3">
            <p className="text-sm text-foreground">
              <span className="font-medium">Example:</span> {example}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LegalTermCard;