import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import EmergencyButton from '@/components/EmergencyButton.jsx';
import LegalTermCard from '@/components/LegalTermCard.jsx';
import SearchBar from '@/components/SearchBar.jsx';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const LegalDictionaryPage = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const legalTerms = [
    {
      term: 'FIR (First Information Report)',
      explanation: 'A written document prepared by police when they receive information about a cognizable offense. It is the first step in the criminal justice process.',
      example: 'If your mobile phone is stolen, you go to the police station and give details about the theft. The police will write down this information and give you a copy - this is your FIR.',
      category: 'Criminal'
    },
    {
      term: 'Affidavit',
      explanation: 'A written statement made under oath before a notary public or magistrate. It is used as evidence in court or for official purposes.',
      example: 'When applying for a passport, you may need to submit an affidavit stating your current address if you do not have other address proof documents.',
      category: 'Civil'
    },
    {
      term: 'Bail',
      explanation: 'Temporary release of an accused person from custody while awaiting trial, usually on payment of money or surety as a guarantee that they will appear in court.',
      example: 'If someone is arrested for a non-serious crime, they can apply for bail. The court may release them if they pay a certain amount or provide a guarantor.',
      category: 'Criminal'
    },
    {
      term: 'Complaint',
      explanation: 'A formal allegation made to a court or authority about a wrong or injury suffered. It is the first step to seek legal remedy.',
      example: 'If you buy a defective product and the seller refuses to replace it, you can file a complaint with the consumer forum.',
      category: 'Civil'
    },
    {
      term: 'Petition',
      explanation: 'A formal written request to a court or authority seeking a specific legal remedy or action.',
      example: 'If you want to change your name legally, you file a name change petition in court with supporting documents.',
      category: 'Civil'
    },
    {
      term: 'Summons',
      explanation: 'An official order from a court requiring a person to appear before the court on a specific date and time.',
      example: 'If you are a witness in a case, the court may send you a summons requiring you to come and give your testimony.',
      category: 'Criminal'
    },
    {
      term: 'Warrant',
      explanation: 'A written order issued by a judge or magistrate authorizing police to arrest a person or search a place.',
      example: 'If someone does not appear in court after multiple summons, the judge may issue an arrest warrant against them.',
      category: 'Criminal'
    },
    {
      term: 'Plea',
      explanation: 'The formal response of an accused person to criminal charges, stating whether they are guilty or not guilty.',
      example: 'When charges are read in court, the accused must enter a plea - either admitting guilt or denying the charges.',
      category: 'Criminal'
    },
    {
      term: 'Verdict',
      explanation: 'The final decision made by a judge or jury in a court case, determining guilt or innocence in criminal cases or liability in civil cases.',
      example: 'After hearing all evidence and arguments, the judge announces the verdict - either convicting or acquitting the accused.',
      category: 'Criminal'
    },
    {
      term: 'Appeal',
      explanation: 'A request to a higher court to review and change the decision of a lower court.',
      example: 'If you lose a case in the District Court and believe the decision was wrong, you can file an appeal in the High Court.',
      category: 'Civil'
    },
    {
      term: 'Cognizable offense',
      explanation: 'A serious crime where police can arrest without a warrant and start investigation without court permission.',
      example: 'Murder, theft, and kidnapping are cognizable offenses. Police can immediately arrest suspects and begin investigation.',
      category: 'Criminal'
    },
    {
      term: 'Non-cognizable offense',
      explanation: 'A less serious crime where police cannot arrest without a warrant and need court permission to investigate.',
      example: 'Simple assault or defamation are non-cognizable offenses. Police must get court permission before investigating.',
      category: 'Criminal'
    }
  ];

  const categories = ['all', 'Criminal', 'Civil'];

  const filteredTerms = legalTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.explanation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Legal Dictionary - Common Legal Terms Explained in Simple Language</title>
        <meta name="description" content="Understand common legal terms used in Indian courts and legal procedures. Simple explanations with real-world examples for FIR, bail, affidavit, and more." />
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
                Legal dictionary
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Simple explanations of common legal terms you may encounter in courts, police stations, or legal documents. No complicated jargon - just clear, easy-to-understand definitions.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto mb-8">
              <SearchBar
                placeholder="Search legal terms..."
                onSearch={setSearchTerm}
                className="mb-6"
              />

              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    className="transition-all duration-200 active:scale-[0.98] min-h-[44px] capitalize"
                  >
                    {category === 'all' ? 'All terms' : category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              {filteredTerms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredTerms.map((term, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <LegalTermCard {...term} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No terms found matching your search.</p>
                  <Button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    variant="outline"
                    className="mt-4 transition-all duration-200 active:scale-[0.98]"
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </div>

            <div className="mt-12 max-w-5xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Need more help understanding legal terms?</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you cannot find a term you are looking for or need more detailed explanation, visit our FAQ page or contact a legal aid office in your area for free legal advice.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LegalDictionaryPage;