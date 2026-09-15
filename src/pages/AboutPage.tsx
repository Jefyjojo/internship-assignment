import React from 'react';
import { ABOUT_CONTENT } from '../data/content';
import { IMAGES } from '../data/images';
import { Button } from '../components/ui/Button';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { heading, subheading, paragraphs } = ABOUT_CONTENT;

  return (
    <div className="pt-6 md:pt-12">
      
      {/* Header Banner */}
      <section className="max-w-content mx-auto px-6 sm:px-8 pb-12 md:pb-16">
        <div className="max-w-3xl">
          <span className="text-xs md:text-sm font-medium tracking-widest text-warmgray uppercase block mb-3">
            {subheading}
          </span>
          <h1 className="text-charcoal font-serif font-normal text-4xl sm:text-5xl md:text-[58px] leading-tight tracking-tight">
            {heading}
          </h1>
        </div>
      </section>

      {/* Main Editorial Content & Portrait */}
      <section className="max-w-content mx-auto px-6 sm:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait & Sticky Details */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative">
              
              {/* Subtle background container */}
              <div 
                className="absolute -inset-3 bg-beige-soft rounded-[8px] transform translate-x-1 translate-y-2 -z-0"
                aria-hidden="true"
              />

              {/* Portrait image preserving natural proportions */}
              <div className="relative z-10 overflow-hidden rounded-md border border-border-subtle bg-beige-soft aspect-[3/4] shadow-xs">
                <img
                  src={IMAGES.portrait}
                  alt="Dr. Maya Reynolds, PsyD"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>

            {/* Practice Quick Facts Card */}
            <div className="mt-8 p-6 bg-beige-soft/60 rounded-md border border-border-subtle space-y-3.5">
              <h3 className="font-serif text-lg font-medium text-charcoal">
                Practice Highlights
              </h3>
              <ul className="space-y-2.5 text-sm text-warmgray font-light">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0 mt-2" />
                  <span>Licensed Clinical Psychologist (Santa Monica, CA)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0 mt-2" />
                  <span>Integrative: CBT, EMDR, Mindfulness, Somatic</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0 mt-2" />
                  <span>In-person Santa Monica office & California Telehealth</span>
                </li>
              </ul>
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onNavigate('contact')}
                  className="w-full justify-center text-xs"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Exact 8 Paragraphs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-7">
            
            {/* Opening Paragraph (Slightly emphasized) */}
            <p className="text-charcoal text-lg sm:text-xl md:text-[20px] leading-relaxed font-serif font-normal">
              {paragraphs[0]}
            </p>

            {/* Paragraphs 2-8 */}
            {paragraphs.slice(1).map((para, idx) => (
              <p key={idx} className="text-warmgray text-base sm:text-lg leading-relaxed font-light">
                {para}
              </p>
            ))}

            <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate('contact')}
              >
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate('approach')}
              >
                Explore My Approach
              </Button>
            </div>

          </div>

        </div>
      </section>

      {/* Final CTA */}
      <FinalCtaSection onNavigate={onNavigate} />

    </div>
  );
};
