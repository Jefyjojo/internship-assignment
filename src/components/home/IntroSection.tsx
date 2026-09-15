import React from 'react';
import { HOME_CONTENT } from '../../data/content';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface IntroSectionProps {
  onNavigate: (page: string) => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onNavigate }) => {
  const { intro } = HOME_CONTENT;

  return (
    <section className="py-20 md:py-28 bg-beige-soft/60 border-y border-border-subtle/70">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        
        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Major Heading */}
          <div className="lg:col-span-6">
            <h2 className="text-charcoal font-serif font-normal text-3xl sm:text-4xl md:text-[44px] leading-tight tracking-tight">
              {intro.heading}
            </h2>
          </div>

          {/* Right Column: Narrative Body & CTA */}
          <div className="lg:col-span-6 space-y-6">
            {intro.body.map((para, idx) => (
              <p key={idx} className="text-warmgray text-base sm:text-lg leading-relaxed font-light">
                {para}
              </p>
            ))}

            <div className="pt-4">
              <Button
                variant="outline"
                size="md"
                onClick={() => onNavigate('approach')}
                className="group"
              >
                <span>{intro.cta}</span>
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
