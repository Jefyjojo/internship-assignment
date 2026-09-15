import React from 'react';
import { Hero } from '../components/home/Hero';
import { IntroSection } from '../components/home/IntroSection';
import { SupportPreviewSection } from '../components/home/SupportPreviewSection';
import { ApproachPreviewSection } from '../components/home/ApproachPreviewSection';
import { AboutPreviewSection } from '../components/home/AboutPreviewSection';
import { OfficePreviewSection } from '../components/home/OfficePreviewSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const handleLearnMore = () => {
    const introEl = document.getElementById('home-intro');
    if (introEl) {
      introEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('about');
    }
  };

  return (
    <div>
      <Hero onNavigate={onNavigate} onLearnMoreClick={handleLearnMore} />
      <div id="home-intro">
        <IntroSection onNavigate={onNavigate} />
      </div>
      <SupportPreviewSection onNavigate={onNavigate} />
      <ApproachPreviewSection onNavigate={onNavigate} />
      <AboutPreviewSection onNavigate={onNavigate} />
      <OfficePreviewSection onNavigate={onNavigate} />
      <FinalCtaSection onNavigate={onNavigate} />
    </div>
  );
};
