import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change or resize
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'approach', label: 'Approach' },
    { id: 'specialties', label: 'Specialties' },
    { id: 'office', label: 'Office' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'nav-frosted border-b border-border-subtle/80 py-3.5 shadow-sm'
          : 'bg-ivory border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-content mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group focus-visible:outline-sage rounded-subtle transition-opacity hover:opacity-85"
          aria-label="Dr. Maya Reynolds, PsyD - Return to Home"
        >
          <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-charcoal block">
            Dr. Maya Reynolds, PsyD
          </span>
          <span className="text-[12px] sm:text-[13px] tracking-wider text-warmgray uppercase font-sans font-normal block -mt-0.5">
            Licensed Clinical Psychologist
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[15px] tracking-wide font-sans transition-colors relative py-1 focus-visible:outline-sage rounded-subtle ${
                  isActive
                    ? 'text-charcoal font-medium'
                    : 'text-warmgray hover:text-charcoal'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-sage rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center">
          <Button
            variant="primary"
            size="sm"
            onClick={() => handleNavClick('contact')}
            className="tracking-normal"
          >
            Schedule a Consultation
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-subtle text-charcoal hover:text-sage transition-colors focus-visible:outline-sage"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-ivory/98 backdrop-blur-md border-b border-border-subtle shadow-xl px-6 py-8 animate-fadeIn">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between text-left py-3 text-lg border-b border-border-subtle/50 transition-colors ${
                    isActive
                      ? 'text-charcoal font-medium pl-2 border-l-2 border-l-sage'
                      : 'text-warmgray hover:text-charcoal'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={16} className={`transition-transform ${isActive ? 'text-sage' : 'text-warmgray/40'}`} />
                </button>
              );
            })}
            
            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => handleNavClick('contact')}
              >
                Schedule a Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
