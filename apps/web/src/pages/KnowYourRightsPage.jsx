import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import EmergencyButton from '@/components/EmergencyButton.jsx';
import ExpandableCard from '@/components/ExpandableCard.jsx';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Scale, ShoppingBag, Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const KnowYourRightsPage = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);

  const rightsCategories = [
    {
      title: 'Fundamental rights',
      icon: <Scale className="w-5 h-5" />,
      content: (
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Right to equality:</strong> All citizens are equal before the law. No discrimination based on religion, race, caste, sex, or place of birth.</li>
          <li><strong>Right to freedom:</strong> Freedom of speech, expression, assembly, association, movement, and residence anywhere in India.</li>
          <li><strong>Right against exploitation:</strong> Prohibition of human trafficking, forced labor, and child labor in hazardous industries.</li>
          <li><strong>Right to freedom of religion:</strong> Freedom to practice, profess, and propagate any religion of your choice.</li>
          <li><strong>Cultural and educational rights:</strong> Protection of language, script, and culture of minorities. Right to establish educational institutions.</li>
          <li><strong>Right to constitutional remedies:</strong> Right to approach courts if your fundamental rights are violated.</li>
        </ul>
      )
    },
    {
      title: 'Consumer rights',
      icon: <ShoppingBag className="w-5 h-5" />,
      content: (
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Right to safety:</strong> Protection against products and services that are hazardous to life and property.</li>
          <li><strong>Right to be informed:</strong> Access to complete information about quality, quantity, potency, purity, standard, and price of goods.</li>
          <li><strong>Right to choose:</strong> Access to a variety of goods and services at competitive prices with assurance of quality.</li>
          <li><strong>Right to be heard:</strong> Your interests will be considered in appropriate forums when making consumer policies.</li>
          <li><strong>Right to seek redressal:</strong> Right to fair settlement of genuine grievances and compensation for defective goods or deficient services.</li>
          <li><strong>Right to consumer education:</strong> Right to acquire knowledge and skills to be an informed consumer throughout life.</li>
        </ul>
      )
    },
    {
      title: 'Women rights',
      icon: <Users className="w-5 h-5" />,
      content: (
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Right to live with dignity:</strong> Protection against domestic violence, dowry harassment, and workplace harassment.</li>
          <li><strong>Right to education:</strong> Equal access to education at all levels without discrimination.</li>
          <li><strong>Right to equal pay:</strong> Equal remuneration for equal work regardless of gender.</li>
          <li><strong>Right to maternity benefits:</strong> Paid maternity leave and protection from dismissal during pregnancy.</li>
          <li><strong>Right to property:</strong> Equal rights in ancestral property and right to own and inherit property.</li>
          <li><strong>Protection from sexual harassment:</strong> Legal protection against sexual harassment at workplace and public places.</li>
          <li><strong>Right to file complaints:</strong> Can file FIR for crimes against women. Police must register complaints without delay.</li>
        </ul>
      )
    },
    {
      title: 'Cyber safety rights',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Right to privacy:</strong> Your personal data and online activities are protected under privacy laws.</li>
          <li><strong>Right to report cyber crimes:</strong> You can report online fraud, hacking, identity theft, and cyber bullying to authorities.</li>
          <li><strong>Protection against online harassment:</strong> Legal protection against cyber stalking, morphing, and defamation online.</li>
          <li><strong>Right to data protection:</strong> Companies must protect your personal information and cannot share it without consent.</li>
          <li><strong>Right to digital transactions safety:</strong> Banks and payment platforms must ensure secure transactions and refund fraudulent charges.</li>
          <li><strong>Right to remove harmful content:</strong> You can request removal of defamatory, obscene, or harmful content about you from websites.</li>
          <li><strong>24/7 helpline access:</strong> Call 1930 for immediate help with cyber crimes. Online portal available at cybercrime.gov.in</li>
        </ul>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>Know Your Rights - Legal Awareness for Common Citizens in India</title>
        <meta name="description" content="Understand your fundamental rights, consumer rights, women rights, and cyber safety rights in India. Clear explanations in beginner-friendly language." />
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
                Know your rights
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Understanding your legal rights is the first step toward protecting yourself and accessing justice. Explore the key rights every Indian citizen should know.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {rightsCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={headerVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ExpandableCard items={[category]} />
                </motion.div>
              ))}
            </div>

            <div className="mt-12 max-w-4xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Need help understanding your rights?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you believe your rights have been violated or need clarification on any legal matter, you can:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Contact your local legal aid office for free legal advice</li>
                <li>File a complaint with the appropriate authority (police, consumer forum, etc.)</li>
                <li>Consult with a lawyer for personalized legal guidance</li>
                <li>Visit our FAQ section for answers to common questions</li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default KnowYourRightsPage;