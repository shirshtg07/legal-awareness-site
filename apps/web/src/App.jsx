import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from '@/components/ui/sonner';
import HomePage from './pages/HomePage.jsx';
import KnowYourRightsPage from './pages/KnowYourRightsPage.jsx';
import ComplaintGuidePage from './pages/ComplaintGuidePage.jsx';
import CyberCrimeHelpPage from './pages/CyberCrimeHelpPage.jsx';
import LegalDictionaryPage from './pages/LegalDictionaryPage.jsx';
import FAQPage from './pages/FAQPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/know-your-rights" element={<KnowYourRightsPage />} />
        <Route path="/complaint-guide" element={<ComplaintGuidePage />} />
        <Route path="/cyber-crime-help" element={<CyberCrimeHelpPage />} />
        <Route path="/legal-dictionary" element={<LegalDictionaryPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;