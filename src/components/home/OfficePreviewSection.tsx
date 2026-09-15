import React from 'react';
import { HOME_CONTENT } from '../../data/content';
import { IMAGES } from '../../data/images';
import { Button } from '../ui/Button';
import { ArrowRight, MapPin } from 'lucide-react';

interface OfficePreviewSectionProps {
  onNavigate: (page: string) => void;
}

export const OfficePreviewSection: React.FC<OfficePreviewSectionProps> = ({ onNavigate }) => {
  const { officePreview } = HOME_CONTENT;

  return (
    <section className="py-20 md:py-28 bg-beige-soft/40 border-t border-border-subtle">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        
        {/* Header & Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium tracking-widest text-warmgray uppercase mb-3">
              <MapPin size={14} className="text-sage" />
              <span>Practice Location</span>
            </div>
            <h2 className="text-charcoal font-serif font-normal text-3xl sm:text-4xl md:text-[44px] leading-tight">
              {officePreview.heading}
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-5">
            {officePreview.copy.map((para, idx) => (
              <p key={idx} className="text-warmgray text-base sm:text-lg leading-relaxed font-light">
                {para}
              </p>
            ))}

            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                onClick={() => onNavigate('office')}
                className="group"
              >
                <span>{officePreview.cta}</span>
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Office Dual Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-md border border-border-subtle aspect-[16/10] bg-beige-soft">
              <img
                src={IMAGES.officeMain}
                alt="Santa Monica therapy office with natural daylight and comfortable linen seating"
                className="w-full h-full object-cover object-center transform hover:scale-[1.01] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-md border border-border-subtle aspect-[16/10] md:aspect-auto md:h-full bg-beige-soft">
              <img
                src={IMAGES.officeSeating}
                alt="Quiet and grounding consultation space in Santa Monica"
                className="w-full h-full object-cover object-center transform hover:scale-[1.01] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
