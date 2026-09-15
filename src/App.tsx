import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ApproachPage } from './pages/ApproachPage';
import { SpecialtiesPage } from './pages/SpecialtiesPage';
import { OfficePage } from './pages/OfficePage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  // Get initial page from hash or default to 'home'
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages = ['home', 'about', 'approach', 'specialties', 'office', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getPageFromHash);

  // Sync state with browser back/forward and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans selection:bg-beige-soft selection:text-charcoal antialiased">
      {/* Sticky Header with Frosted Blur on Scroll */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'approach' && <ApproachPage onNavigate={handleNavigate} />}
        {currentPage === 'specialties' && <SpecialtiesPage onNavigate={handleNavigate} />}
        {currentPage === 'office' && <OfficePage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Persistent Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
