import React from 'react';
import { HOME_CONTENT } from '../../data/content';
import { Button } from '../ui/Button';

interface FinalCtaSectionProps {
  onNavigate: (page: string) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onNavigate }) => {
  const { finalCta } = HOME_CONTENT;

  return (
    <section className="py-20 md:py-28 bg-beige-soft border-t border-border-subtle text-center">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
          
          <h2 className="text-charcoal font-serif font-normal text-3xl sm:text-4xl md:text-5xl leading-tight">
            {finalCta.heading}
          </h2>

          <p className="text-warmgray text-base sm:text-lg md:text-[19px] leading-relaxed font-light">
            {finalCta.copy}
          </p>

          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto"
            >
              {finalCta.button}
            </Button>
          </div>

          <p className="text-xs sm:text-sm text-warmgray/80 tracking-wide font-sans pt-2">
            {finalCta.secondaryText}
          </p>

        </div>
      </div>
    </section>
  );
};
