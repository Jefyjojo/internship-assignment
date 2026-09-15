import React from 'react';
import { PRACTICE_INFO } from '../../data/content';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ivory border-t border-border-subtle pt-16 pb-12 transition-colors">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-subtle/70">
          
          {/* Practice Branding & Service area */}
          <div className="md:col-span-6 lg:col-span-5 space-y-3">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group focus-visible:outline-sage rounded-subtle"
            >
              <span className="font-serif text-2xl font-medium tracking-tight text-charcoal block">
                {PRACTICE_INFO.name}
              </span>
              <span className="text-xs tracking-wider text-warmgray uppercase font-sans block mt-1">
                {PRACTICE_INFO.title}
              </span>
            </button>
            
            <p className="text-[15px] text-warmgray max-w-md pt-2">
              {PRACTICE_INFO.location} &mdash; {PRACTICE_INFO.sessionFormats}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col md:flex-row md:justify-end items-start md:items-center space-y-3 md:space-y-0 md:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-[15px] text-warmgray hover:text-charcoal transition-colors focus-visible:outline-sage rounded-subtle py-1"
              >
                {item.label}
              </button>
            ))}
          </div>

        </div>

        {/* Bottom Legal & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-warmgray/80">
          <p>
            &copy; {PRACTICE_INFO.copyrightYear} {PRACTICE_INFO.name}. All rights reserved.
          </p>
          <p className="italic text-warmgray/70">
            {PRACTICE_INFO.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};
