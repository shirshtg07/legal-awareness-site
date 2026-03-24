import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import EmergencyButton from '@/components/EmergencyButton.jsx';
import StepGuideCard from '@/components/StepGuideCard.jsx';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const ComplaintGuidePage = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);

  const guides = [
    {
      number: '01',
      title: 'FIR filing (First Information Report)',
      steps: [
        'Visit the nearest police station in person or file online at your state police website',
        'Provide complete details: your name, address, date/time of incident, location, and description of the crime',
        'Police must register your FIR immediately. If they refuse, you can approach the Superintendent of Police',
        'Get a copy of the FIR with the FIR number for your records',
        'Follow up with the investigating officer for updates on your case',
        'If needed, you can file a Zero FIR at any police station, which will be transferred to the correct jurisdiction'
      ],
      documents: [
        'Valid ID proof (Aadhaar, PAN, Voter ID, or Passport)',
        'Address proof',
        'Any evidence related to the crime (photos, videos, messages, receipts)',
        'Witness contact information if available'
      ],
      contactInfo: 'Emergency: 100 | Women Helpline: 1091 | Senior Citizen Helpline: 14567',
      estimatedTime: '30-60 minutes for filing, investigation timeline varies by case'
    },
    {
      number: '02',
      title: 'Cybercrime complaint',
      steps: [
        'Visit the National Cyber Crime Reporting Portal at cybercrime.gov.in',
        'Click on "Report Other Cyber Crime" or "Report and Track" for financial fraud',
        'Create an account or login if you already have one',
        'Fill in the complaint form with incident details, date, time, and description',
        'Upload supporting documents (screenshots, transaction details, emails, messages)',
        'Submit the complaint and note down the acknowledgment number',
        'Track your complaint status online using the acknowledgment number',
        'For urgent cases, call the Cyber Crime Helpline at 1930'
      ],
      documents: [
        'Screenshots of fraudulent messages, emails, or websites',
        'Bank transaction details or payment receipts',
        'Communication records (emails, SMS, WhatsApp chats)',
        'Your ID proof and contact information',
        'Details of the accused if known (phone number, email, account details)'
      ],
      contactInfo: 'Cyber Crime Helpline: 1930 | Email: complaints@cybercrime.gov.in',
      estimatedTime: '15-30 minutes for online filing, response within 7-10 working days'
    },
    {
      number: '03',
      title: 'Consumer complaint',
      steps: [
        'Determine the appropriate forum based on claim value: District Forum (up to ₹1 crore), State Commission (₹1-10 crore), National Commission (above ₹10 crore)',
        'File online through the National Consumer Helpline portal (consumerhelpline.gov.in) or visit the consumer forum office',
        'Prepare your complaint with details of the product/service, seller/service provider, defect/deficiency, and relief sought',
        'Attach all supporting documents: purchase receipt, warranty card, correspondence with seller, photos of defect',
        'Pay the prescribed court fee (varies by claim amount)',
        'Submit the complaint and get the case number',
        'Attend hearings as scheduled by the forum',
        'If you win, the seller must comply with the order within the specified time'
      ],
      documents: [
        'Purchase receipt or invoice',
        'Warranty or guarantee card',
        'Product photos showing the defect',
        'Correspondence with the seller (emails, letters, messages)',
        'Medical bills (if applicable for health-related issues)',
        'Expert opinion or test reports (if available)'
      ],
      contactInfo: 'National Consumer Helpline: 1800-11-4000 | Timings: 9:30 AM - 5:30 PM (Mon-Sat)',
      estimatedTime: '30-45 minutes for filing, case resolution typically 3-6 months'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Complaint Guide - How to File FIR, Cyber Crime, and Consumer Complaints</title>
        <meta name="description" content="Step-by-step guides for filing FIR, cybercrime complaints, and consumer complaints in India. Learn the process, required documents, and timelines." />
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
                Complaint filing guide
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Follow these step-by-step guides to file complaints for different situations. Each guide includes required documents, contact information, and estimated timelines.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={headerVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <StepGuideCard {...guide} />
                </motion.div>
              ))}
            </div>

            <div className="mt-12 max-w-5xl mx-auto bg-secondary/5 border border-secondary/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Important tips for filing complaints</h3>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside leading-relaxed">
                <li>Keep copies of all documents and correspondence for your records</li>
                <li>Note down complaint/FIR numbers and keep them safe</li>
                <li>Follow up regularly on your complaint status</li>
                <li>If you face difficulties, seek help from legal aid services or consumer organizations</li>
                <li>For urgent matters, always call the emergency helpline numbers</li>
                <li>Be honest and accurate in your complaint - false complaints can lead to legal consequences</li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ComplaintGuidePage;