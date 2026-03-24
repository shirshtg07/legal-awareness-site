import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-bold text-lg text-foreground">Legal Awareness for Common Citizens</span>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Helping Indian citizens understand their legal rights and navigate the justice system with confidence.
            </p>
          </div>

          <div>
            <span className="font-semibold text-foreground">Quick links</span>
            <div className="mt-3 space-y-2">
              <Link to="/know-your-rights" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Know your rights
              </Link>
              <Link to="/complaint-guide" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Complaint guide
              </Link>
              <Link to="/cyber-crime-help" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Cyber crime help
              </Link>
              <Link to="/legal-dictionary" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Legal dictionary
              </Link>
            </div>
          </div>

          <div>
            <span className="font-semibold text-foreground">Emergency contacts</span>
            <div className="mt-3 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-destructive" />
                <span className="text-muted-foreground">
                  Cyber Crime Helpline: <span className="font-semibold text-foreground">1930</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-destructive" />
                <span className="text-muted-foreground">
                  Police Emergency: <span className="font-semibold text-foreground">100</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  complaints@cybercrime.gov.in
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Legal Awareness for Common Citizens in India. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;