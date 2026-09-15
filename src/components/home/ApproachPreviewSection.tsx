import React from 'react';
import { HOME_CONTENT } from '../../data/content';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface ApproachPreviewSectionProps {
  onNavigate: (page: string) => void;
}

export const ApproachPreviewSection: React.FC<ApproachPreviewSectionProps> = ({ onNavigate }) => {
  const { approachSummary } = HOME_CONTENT;

  return (
    <section className="py-20 md:py-28 bg-beige-soft/50 border-t border-border-subtle">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        
        {/* Editorial Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-20">
          <div className="lg:col-span-6">
            <span className="text-xs md:text-sm font-medium tracking-widest text-warmgray uppercase block mb-3">
              Integrative Framework
            </span>
            <h2 className="text-charcoal font-serif font-normal text-3xl sm:text-4xl md:text-[44px] leading-tight">
              {approachSummary.heading}
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {approachSummary.body.map((para, idx) => (
              <p key={idx} className="text-warmgray text-base sm:text-lg leading-relaxed font-light">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* 4 Approach Modalities Grid (Minimal, refined aesthetic, not SaaS cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {approachSummary.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 md:p-7 bg-ivory/80 rounded-md border border-border-subtle/80 flex flex-col justify-between hover:border-sage/40 transition-all duration-300"
            >
              <div>
                <span className="text-xs font-mono text-warmgray/60 block mb-3">
                  0{idx + 1}
                </span>
                <h3 className="text-charcoal font-serif text-xl font-normal mb-3">
                  {item.title}
                </h3>
                <p className="text-warmgray text-[15px] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-start md:justify-center pt-4">
          <Button
            variant="outline"
            size="md"
            onClick={() => onNavigate('approach')}
            className="group"
          >
            <span>{approachSummary.cta}</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

      </div>
    </section>
  );
};
