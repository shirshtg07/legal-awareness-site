import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import EmergencyButton from '@/components/EmergencyButton.jsx';
import SearchBar from '@/components/SearchBar.jsx';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FileText, Shield, AlertTriangle, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  const quickAccessButtons = [
    {
      title: 'File a complaint',
      description: 'Learn how to file FIR, consumer, or cyber complaints',
      icon: <FileText className="w-6 h-6" />,
      link: '/complaint-guide',
      color: 'bg-primary/10 text-primary'
    },
    {
      title: 'Know your rights',
      description: 'Understand your fundamental and legal rights',
      icon: <Shield className="w-6 h-6" />,
      link: '/know-your-rights',
      color: 'bg-secondary/10 text-secondary'
    },
    {
      title: 'Cyber crime help',
      description: 'Get help with online fraud, scams, and hacking',
      icon: <AlertTriangle className="w-6 h-6" />,
      link: '/cyber-crime-help',
      color: 'bg-destructive/10 text-destructive'
    },
    {
      title: 'Consumer complaints',
      description: 'File complaints against defective products or services',
      icon: <ShoppingCart className="w-6 h-6" />,
      link: '/complaint-guide',
      color: 'bg-accent/10 text-accent'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Legal Awareness for Common Citizens in India - Know Your Rights, Stay Protected</title>
        <meta name="description" content="Comprehensive legal awareness platform helping Indian citizens understand their rights, file complaints, and navigate the justice system with confidence." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <EmergencyButton />

        <section 
          className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1568092806323-8ec1dfa9b92)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
          
          <motion.div 
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ letterSpacing: '-0.02em', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Know your rights, stay protected
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your guide to understanding legal rights, filing complaints, and accessing justice in India
            </p>
            
            <div className="max-w-2xl mx-auto mb-12">
              <SearchBar 
                placeholder="Search for legal information, rights, or procedures..."
                className="shadow-2xl"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/know-your-rights">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] min-h-[44px] px-6 shadow-lg">
                  Explore your rights
                </Button>
              </Link>
              <Link to="/complaint-guide">
                <Button size="lg" variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-200 active:scale-[0.98] min-h-[44px] px-6 shadow-lg">
                  File a complaint
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={cardsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Quick access to legal help
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Get started with the most common legal needs and questions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {quickAccessButtons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={item.link}>
                    <Card className="bg-card border-border shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed flex-grow">{item.description}</p>
                        <div className="mt-4">
                          <span className="text-primary font-medium text-sm hover:underline">Learn more →</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Why legal awareness matters
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Understanding your legal rights helps you make informed decisions, protect yourself from fraud and exploitation, and access justice when needed. This platform provides clear, beginner-friendly information about Indian laws, rights, and legal procedures in both English and Hindi.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2,847</div>
                  <p className="text-muted-foreground">Citizens helped</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">47.2%</div>
                  <p className="text-muted-foreground">Faster complaint resolution</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">12.4k</div>
                  <p className="text-muted-foreground">Legal terms explained</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;