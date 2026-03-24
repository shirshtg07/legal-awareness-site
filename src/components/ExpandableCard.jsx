import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

const ExpandableCard = ({ items }) => {
  return (
    <Card className="p-6 bg-card border-border shadow-lg rounded-2xl">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
            <AccordionTrigger className="text-left hover:no-underline py-4">
              <div className="flex items-start gap-4">
                {item.icon && (
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                )}
                <span className="font-semibold text-lg text-foreground">{item.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4 text-muted-foreground leading-relaxed">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
};

export default ExpandableCard;