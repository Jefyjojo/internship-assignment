import React from 'react';
import { HOME_CONTENT } from '../../data/content';
import { IMAGES } from '../../data/images';
import { Button } from '../ui/Button';

interface HeroProps {
  onNavigate: (page: string) => void;
  onLearnMoreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onLearnMoreClick }) => {
  const { hero } = HOME_CONTENT;

  return (
    <section className="pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="inline-block">
              <span className="text-xs md:text-sm font-medium tracking-widest text-warmgray uppercase border-b border-border-subtle pb-1">
                {hero.eyebrow}
              </span>
            </div>

            <h1 className="text-charcoal font-serif font-normal text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.12] tracking-tight">
              {hero.heading}
            </h1>

            <p className="text-warmgray text-lg sm:text-xl md:text-[19px] leading-relaxed max-w-xl font-sans font-light">
              {hero.supportingText}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto"
              >
                {hero.primaryCta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onLearnMoreClick || (() => onNavigate('about'))}
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta}
              </Button>
            </div>
          </div>

          {/* Right Column: Natural Portrait with Warm Beige Architectural Shape */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] lg:max-w-none">
              
              {/* Subtle warm beige background shape */}
              <div 
                className="absolute -inset-3 sm:-inset-4 bg-beige-soft rounded-[10px] -rotate-1 transform translate-x-1 translate-y-2 z-0"
                aria-hidden="true"
              />

              {/* Portrait container */}
              <div className="relative z-10 overflow-hidden rounded-md border border-border-subtle/80 bg-beige-soft aspect-[3/4] shadow-sm">
                <img
                  src={IMAGES.portrait}
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.01] transition-transform duration-700 ease-out"
                  loading="eager"
                />
              </div>

              {/* Discreet subtitle label on image corner */}
              <div className="absolute -bottom-3 left-4 right-4 z-20 bg-ivory/95 backdrop-blur-sm border border-border-subtle/80 py-2.5 px-4 rounded-subtle shadow-sm flex items-center justify-between">
                <span className="text-xs font-serif font-medium text-charcoal tracking-wide">
                  Dr. Maya Reynolds, PsyD
                </span>
                <span className="text-[11px] text-warmgray tracking-wider uppercase font-sans">
                  Santa Monica, CA
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Below Hero: Trust Statement */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-border-subtle/80 flex items-center justify-center text-center">
          <p className="text-warmgray text-sm sm:text-base font-serif italic max-w-xl flex items-center justify-center gap-2">
            <span className="w-6 h-[1px] bg-border-subtle inline-block" />
            &ldquo;{hero.trustStatement}&rdquo;
            <span className="w-6 h-[1px] bg-border-subtle inline-block" />
          </p>
        </div>

      </div>
    </section>
  );
};
