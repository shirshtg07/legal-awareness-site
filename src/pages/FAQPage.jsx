import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import EmergencyButton from '@/components/EmergencyButton.jsx';
import ExpandableCard from '@/components/ExpandableCard.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const FAQPage = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [faqRef, faqVisible] = useScrollAnimation(0.1);

  const faqs = [
    {
      title: 'What is my right if I am cheated online?',
      content: 'If you are a victim of online fraud, you have the right to file a cyber crime complaint on cybercrime.gov.in or call 1930. You can also file an FIR at your local police station. Banks are required to investigate fraudulent transactions and may refund your money if you report within the specified time (usually 3 days). Keep all evidence like screenshots, transaction details, and messages.'
    },
    {
      title: 'How do I file a complaint against a company for defective products?',
      content: 'You can file a consumer complaint with the District Consumer Forum if the claim is up to ₹1 crore. First, try to resolve the issue directly with the company. If they do not respond, file a complaint online at consumerhelpline.gov.in or visit the consumer forum office. You will need the purchase receipt, warranty card, photos of the defect, and any correspondence with the company. The process usually takes 3-6 months.'
    },
    {
      title: 'What should I do if I receive a threatening message?',
      content: 'Do not respond to the threatening message. Take screenshots immediately as evidence. File a complaint with the cyber crime portal (cybercrime.gov.in) if it is online harassment. For serious threats, file an FIR at your local police station. Police are required to register your complaint and investigate. If the threat is immediate, call 100 for emergency police assistance.'
    },
    {
      title: 'How long does FIR filing take?',
      content: 'Filing an FIR typically takes 30-60 minutes at the police station. Police are legally required to register your FIR immediately for cognizable offenses (serious crimes). If police refuse to file your FIR, you can approach the Superintendent of Police or file a Zero FIR at any police station. You will receive a copy of the FIR with the FIR number on the same day.'
    },
    {
      title: 'What is the Consumer Protection Act?',
      content: 'The Consumer Protection Act, 2019 protects consumers from unfair trade practices and defective goods/services. It gives you six key rights: right to safety, right to be informed, right to choose, right to be heard, right to seek redressal, and right to consumer education. You can file complaints for defective products, deficient services, unfair contracts, or misleading advertisements. The act covers all goods and services except those specifically exempted.'
    },
    {
      title: 'Can I file an FIR online?',
      content: 'Yes, many states in India now allow online FIR filing for certain types of crimes. Visit your state police website to check if online FIR is available. Common crimes that can be reported online include theft, lost documents, vehicle theft, and cyber crimes. For serious crimes like assault or murder, you must visit the police station in person. After filing online, you may still need to visit the police station for verification.'
    },
    {
      title: 'What documents do I need to file a consumer complaint?',
      content: 'You need: (1) Purchase receipt or invoice, (2) Warranty or guarantee card, (3) Photos of the defective product, (4) Any correspondence with the seller (emails, letters, messages), (5) Medical bills if the defect caused health issues, (6) Expert opinion or test reports if available. Keep copies of all documents for your records. The original receipt is very important as proof of purchase.'
    },
    {
      title: 'How can I protect myself from cyber fraud?',
      content: 'Follow these safety tips: (1) Never share OTP, PIN, or CVV with anyone, (2) Do not click on suspicious links in emails or messages, (3) Verify website URLs before entering personal information, (4) Use strong, unique passwords for each account, (5) Enable two-factor authentication, (6) Keep your software and apps updated, (7) Do not download apps from unknown sources, (8) Be cautious of lottery wins or investment schemes promising high returns, (9) Verify caller identity before sharing information, (10) Regularly check your bank statements for unauthorized transactions.'
    },
    {
      title: 'What is the difference between FIR and complaint?',
      content: 'An FIR (First Information Report) is filed for cognizable offenses (serious crimes) where police can arrest without a warrant. A complaint is filed for non-cognizable offenses (less serious crimes) where police need court permission to investigate. FIR starts immediate police investigation, while a complaint requires you to approach a magistrate first. Examples: theft, assault, murder require FIR; simple hurt, defamation require complaint.'
    },
    {
      title: 'Can I withdraw an FIR after filing?',
      content: 'You cannot directly withdraw an FIR once filed. However, you can submit an affidavit to the court stating you do not wish to pursue the case. The court will decide whether to accept your request based on the nature of the crime. For serious crimes (cognizable offenses), the court may continue the case even if you withdraw. For compoundable offenses (minor crimes), the court may allow withdrawal if both parties agree.'
    },
    {
      title: 'What are my rights if I am arrested?',
      content: 'If arrested, you have the right to: (1) Know the reason for arrest, (2) Be informed of your right to bail, (3) Consult a lawyer of your choice, (4) Be produced before a magistrate within 24 hours, (5) Not be detained beyond 24 hours without magistrate permission, (6) Be examined by a doctor if you claim injury, (7) Inform a friend or relative about your arrest, (8) Not be subjected to torture or cruel treatment. Police must follow proper arrest procedures and maintain an arrest memo.'
    },
    {
      title: 'How do I find free legal aid?',
      content: 'Free legal aid is available through: (1) District Legal Services Authority (DLSA) offices in every district, (2) State Legal Services Authority (SLSA) in each state, (3) National Legal Services Authority (NALSA) at the national level, (4) Legal aid clinics at law colleges, (5) NGOs providing legal assistance. Eligibility: women, children, SC/ST, persons with disabilities, victims of trafficking, those with annual income below ₹3 lakh. Visit nalsa.gov.in or your district court to apply.'
    },
    {
      title: 'What should I do if police refuse to file my FIR?',
      content: 'If police refuse to file your FIR: (1) Request written reasons for refusal, (2) Approach the Superintendent of Police with your complaint, (3) File a Zero FIR at any police station (it will be transferred to the correct jurisdiction), (4) Send a written complaint by registered post to the SP, (5) File a private complaint directly with the magistrate, (6) Contact the State Human Rights Commission if your rights are violated. Police refusing to file FIR for cognizable offenses is illegal and punishable.'
    },
    {
      title: 'How long does a consumer complaint case take?',
      content: 'Consumer complaint cases typically take 3-6 months for resolution, but this can vary. The Consumer Protection Act requires cases to be decided within 3 months if possible. Complex cases may take longer. District Forums handle claims up to ₹1 crore, State Commissions handle ₹1-10 crore, and National Commission handles above ₹10 crore. You can track your case status online. If the seller does not comply with the order, you can file an execution petition.'
    },
    {
      title: 'What is the National Cyber Crime Helpline number?',
      content: 'The National Cyber Crime Helpline number is 1930. It is available 24/7 for reporting cyber crimes and getting immediate assistance. You can call this number for online financial fraud, hacking, identity theft, cyber bullying, or any other cyber crime. The helpline provides guidance on next steps and helps you file a complaint. You can also report cyber crimes online at cybercrime.gov.in and track your complaint status.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Legal Awareness for Common Citizens</title>
        <meta name="description" content="Find answers to common legal questions about filing complaints, consumer rights, cyber crimes, FIR procedures, and more. Ask your own question if you need help." />
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
                Frequently asked questions
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Find answers to common questions about legal rights, complaint procedures, and the justice system in India.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto mb-16">
              <motion.div
                ref={faqRef}
                initial={{ opacity: 0, y: 20 }}
                animate={faqVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <ExpandableCard items={faqs} />
              </motion.div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Still have questions?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cannot find the answer you are looking for? Submit your question and we will get back to you.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FAQPage;