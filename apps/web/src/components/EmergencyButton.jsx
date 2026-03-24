import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const EmergencyButton = () => {
  const handleEmergencyClick = () => {
    window.location.href = 'tel:1930';
  };

  return (
    <Button
      onClick={handleEmergencyClick}
      className="fixed top-20 right-4 z-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg transition-all duration-200 active:scale-[0.98] min-h-[44px] px-4 py-2 rounded-xl font-semibold"
      size="lg"
    >
      <Phone className="w-5 h-5 mr-2" />
      Emergency help
    </Button>
  );
};

export default EmergencyButton;