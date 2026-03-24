import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import EmergencyButton from '@/components/EmergencyButton.jsx';
import CyberCrimeTypeCard from '@/components/CyberCrimeTypeCard.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CreditCard, Lock, Mail, MessageSquare, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const CyberCrimeHelpPage = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [typesRef, typesVisible] = useScrollAnimation(0.1);
  const [checklistRef, checklistVisible] = useScrollAnimation(0.1);

  const cyberCrimeTypes = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Online financial fraud',
      description: 'Unauthorized transactions, fake payment links, lottery scams, investment frauds, and credit/debit card cloning.',
      example: 'You receive a message claiming you won a lottery and asking for bank details or advance payment to claim the prize.'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Hacking and data theft',
      description: 'Unauthorized access to your accounts, email hacking, social media account takeover, and personal data theft.',
      example: 'Someone gains access to your email account and sends messages to your contacts asking for money.'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Phishing and spoofing',
      description: 'Fake emails or websites that look like legitimate organizations to steal your passwords, credit card numbers, or personal information.',
      example: 'You receive an email that looks like it is from your bank, asking you to click a link and update your account details.'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Cyber bullying and harassment',
      description: 'Online threats, stalking, morphing of photos, spreading rumors, or posting offensive content to harass someone.',
      example: 'Someone creates a fake profile using your photos and posts inappropriate content or sends threatening messages.'
    }
  ];

  const actionChecklist = [
    'Stay calm - Do not panic. Most cyber crimes can be resolved if reported quickly.',
    'Stop all communication with the fraudster immediately',
    'If it is a financial fraud, call your bank helpline right away to block your card or account',
    'Take screenshots of all evidence (messages, emails, transaction details, websites)',
    'Do not delete any messages or emails - they are important evidence',
    'Report the crime on cybercrime.gov.in or call 1930 immediately',
    'File an FIR at your local police station if needed',
    'Change all your passwords for email, banking, and social media accounts',
    'Enable two-factor authentication on all important accounts',
    'Inform your contacts if your account was hacked to prevent them from being scammed'
  ];

  return (
    <>
      <Helmet>
        <title>Cyber Crime Help - Report Online Fraud, Hacking, and Scams</title>
        <meta name="description" content="Get help with cyber crimes including online fraud, hacking, phishing, and cyber bullying. Learn what to do if you are a victim and how to report cyber crimes in India." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <EmergencyButton />

        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 20 }}
              animate={headerVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Cyber crime help
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Get immediate help if you are a victim of online fraud, hacking, or cyber harassment. Learn about different types of cyber crimes and how to protect yourself.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto mb-16">
              <motion.div
                ref={typesRef}
                initial={{ opacity: 0, y: 20 }}
                animate={typesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Types of cyber crimes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cyberCrimeTypes.map((type, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={typesVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CyberCrimeTypeCard {...type} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <motion.div
                ref={checklistRef}
                initial={{ opacity: 0, y: 20 }}
                animate={checklistVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-card border-border shadow-lg rounded-2xl">
                  <CardHeader className="bg-destructive/5 border-b border-border">
                    <CardTitle className="text-2xl font-semibold text-foreground">
                      What to do if you are a victim
                    </CardTitle>
                    <p className="text-muted-foreground mt-2">Follow these steps immediately after experiencing a cyber crime</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ol className="space-y-3">
                      {actionChecklist.map((item, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                            {index + 1}
                          </span>
                          <span className="text-muted-foreground leading-relaxed pt-1">{item}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground">Emergency contacts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background rounded-xl p-4 border border-border">
                      <div className="flex items-center gap-3 mb-2">
                        <Phone className="w-5 h-5 text-destructive" />
                        <span className="font-semibold text-foreground">Cyber Crime Helpline</span>
                      </div>
                      <p className="text-2xl font-bold text-destructive">1930</p>
                      <p className="text-sm text-muted-foreground mt-1">Available 24/7 for immediate assistance</p>
                    </div>

                    <div className="bg-background rounded-xl p-4 border border-border">
                      <div className="flex items-center gap-3 mb-2">
                        <ExternalLink className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">Online Portal</span>
                      </div>
                      <p className="text-lg font-semibold text-primary">cybercrime.gov.in</p>
                      <p className="text-sm text-muted-foreground mt-1">File complaints and track status online</p>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-4 border border-border">
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong className="text-foreground">Email:</strong> complaints@cybercrime.gov.in
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Local police:</strong> Visit your nearest police station to file an FIR for serious cyber crimes
                    </p>
                  </div>

                  <div className="pt-4">
                    <Link to="/complaint-guide">
                      <Button className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all duration-200 active:scale-[0.98] min-h-[44px] text-lg font-semibold">
                        Report cyber crime now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CyberCrimeHelpPage;