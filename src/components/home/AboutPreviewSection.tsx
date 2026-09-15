import React from 'react';
import { HOME_CONTENT } from '../../data/content';
import { IMAGES } from '../../data/images';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface AboutPreviewSectionProps {
  onNavigate: (page: string) => void;
}

export const AboutPreviewSection: React.FC<AboutPreviewSectionProps> = ({ onNavigate }) => {
  const { aboutPreview } = HOME_CONTENT;

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-md border border-border-subtle bg-beige-soft aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={IMAGES.portraitSecondary}
                  alt="Dr. Maya Reynolds in consultation"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div 
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full border border-border-subtle rounded-md -z-0"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 md:space-y-8">
            <span className="text-xs md:text-sm font-medium tracking-widest text-warmgray uppercase block">
              Philosophy & Background
            </span>

            <h2 className="text-charcoal font-serif font-normal text-3xl sm:text-4xl md:text-[44px] leading-tight">
              {aboutPreview.heading}
            </h2>

            <p className="text-warmgray text-base sm:text-lg md:text-[18px] leading-relaxed font-light">
              {aboutPreview.copy}
            </p>

            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                onClick={() => onNavigate('about')}
                className="group"
              >
                <span>{aboutPreview.cta}</span>
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
