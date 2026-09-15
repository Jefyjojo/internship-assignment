import React from 'react';
import { HOME_CONTENT } from '../../data/content';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface SupportPreviewSectionProps {
  onNavigate: (page: string) => void;
}

export const SupportPreviewSection: React.FC<SupportPreviewSectionProps> = ({ onNavigate }) => {
  const { supportSummary } = HOME_CONTENT;

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <span className="text-xs md:text-sm font-medium tracking-widest text-warmgray uppercase block mb-3">
              Clinical Focus
            </span>
            <h2 className="text-charcoal font-serif font-normal text-3xl sm:text-4xl md:text-[44px] leading-tight">
              {supportSummary.heading}
            </h2>
          </div>
          <Button
            variant="text"
            onClick={() => onNavigate('specialties')}
            className="group hidden md:inline-flex items-center text-sm font-medium"
          >
            <span>{supportSummary.cta}</span>
            <ArrowRight size={15} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* 5 Editorial Items with Thin Dividers */}
        <div className="border-t border-border-subtle">
          {supportSummary.items.map((item, idx) => (
            <div
              key={item.id}
              className="py-7 md:py-8 border-b border-border-subtle grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group hover:bg-beige-soft/30 px-3 -mx-3 rounded-subtle transition-colors duration-200"
            >
              {/* Index number */}
              <div className="md:col-span-1 text-xs tracking-widest font-mono text-warmgray/60">
                0{idx + 1}
              </div>

              {/* Title */}
              <div className="md:col-span-4 lg:col-span-4">
                <h3 className="text-charcoal font-serif text-xl sm:text-2xl font-normal group-hover:text-sage transition-colors duration-200">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-7 lg:col-span-7">
                <p className="text-warmgray text-base sm:text-[17px] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 md:hidden">
          <Button
            variant="outline"
            size="md"
            onClick={() => onNavigate('specialties')}
            className="w-full justify-center group"
          >
            <span>{supportSummary.cta}</span>
            <ArrowRight size={15} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

      </div>
    </section>
  );
};
