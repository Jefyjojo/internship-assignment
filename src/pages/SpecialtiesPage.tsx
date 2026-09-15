import React from 'react';
import { SPECIALTIES_CONTENT } from '../data/content';
import { FinalCtaSection } from '../components/home/FinalCtaSection';
import { Button } from '../components/ui/Button';

interface SpecialtiesPageProps {
  onNavigate: (page: string) => void;
}

export const SpecialtiesPage: React.FC<SpecialtiesPageProps> = ({ onNavigate }) => {
  const { heading, items, individualizedNote } = SPECIALTIES_CONTENT;

  return (
    <div className="pt-6 md:pt-12">
      
      {/* Header Banner */}
      <section className="max-w-content mx-auto px-6 sm:px-8 pb-12 md:pb-16 border-b border-border-subtle">
        <div className="max-w-3xl">
          <span className="text-xs md:text-sm font-medium tracking-widest text-warmgray uppercase block mb-3">
            Clinical Focus
          </span>
          <h1 className="text-charcoal font-serif font-normal text-4xl sm:text-5xl md:text-[58px] leading-tight tracking-tight">
            {heading}
          </h1>
          <p className="text-warmgray text-base sm:text-lg mt-4 leading-relaxed font-light">
            Support for adults who look functional on the outside but feel overwhelmed, exhausted, or stuck on the inside.
          </p>
        </div>
      </section>

      {/* 8 Specialties Grid (Clean, Editorial, Non-SaaS, Thin dividers) */}
      <section className="max-w-content mx-auto px-6 sm:px-8 py-16 md:py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="pb-8 border-b border-border-subtle group"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h2 className="text-charcoal font-serif text-2xl sm:text-3xl font-normal group-hover:text-sage transition-colors duration-200">
                  {item.title}
                </h2>
                <span className="font-mono text-xs text-warmgray/50 tracking-widest">
                  0{idx + 1}
                </span>
              </div>
              <p className="text-warmgray text-base sm:text-[17px] leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Individualized Note Alert Banner */}
        <div className="mt-16 p-8 bg-beige-soft/60 rounded-md border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-widest text-warmgray uppercase block mb-1">
              Personalized Care
            </span>
            <p className="text-charcoal font-serif text-lg sm:text-xl font-normal">
              &ldquo;{individualizedNote}&rdquo;
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={() => onNavigate('contact')}
            className="shrink-0"
          >
            Schedule a Consultation
          </Button>
        </div>

      </section>

      {/* Final CTA */}
      <FinalCtaSection onNavigate={onNavigate} />

    </div>
  );
};
