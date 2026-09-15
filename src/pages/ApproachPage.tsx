import React from 'react';
import { APPROACH_CONTENT } from '../data/content';
import { ProcessTimeline } from '../components/approach/ProcessTimeline';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

interface ApproachPageProps {
  onNavigate: (page: string) => void;
}

export const ApproachPage: React.FC<ApproachPageProps> = ({ onNavigate }) => {
  const { heading, intro, supportingText, methods } = APPROACH_CONTENT;

  return (
    <div className="pt-6 md:pt-12">
      
      {/* Header Banner */}
      <section className="max-w-content mx-auto px-6 sm:px-8 pb-12 md:pb-16 border-b border-border-subtle">
        <div className="max-w-3xl">
          <span className="text-xs md:text-sm font-medium tracking-widest text-warmgray uppercase block mb-3">
            Clinical Philosophy
          </span>
          <h1 className="text-charcoal font-serif font-normal text-4xl sm:text-5xl md:text-[58px] leading-tight tracking-tight">
            {heading}
          </h1>
          <p className="text-charcoal font-serif text-xl sm:text-2xl mt-5 leading-relaxed font-normal">
            &ldquo;{intro}&rdquo;
          </p>
          <p className="text-warmgray text-base sm:text-lg mt-4 leading-relaxed font-light">
            {supportingText}
          </p>
        </div>
      </section>

      {/* Visual Timeline Section */}
      <section className="max-w-content mx-auto px-6 sm:px-8">
        <ProcessTimeline />
      </section>

      {/* The 5 Modalities Breakdown */}
      <section className="max-w-content mx-auto px-6 sm:px-8 py-12 md:py-20">
        <div className="max-w-3xl mb-12">
          <span className="text-xs md:text-sm font-medium tracking-widest text-warmgray uppercase block mb-2">
            Evidence-Based Modalities
          </span>
          <h2 className="text-charcoal font-serif font-normal text-3xl sm:text-4xl md:text-[42px] leading-tight">
            Integrated Clinical Frameworks
          </h2>
          <p className="text-warmgray text-base sm:text-lg mt-3 font-light">
            I integrate evidence-based methods depending on the needs, goals, and readiness of each client.
          </p>
        </div>

        {/* 5 Detailed Sections with thin dividers */}
        <div className="space-y-0 border-t border-border-subtle">
          {methods.map((method) => (
            <div
              key={method.number}
              className="py-10 md:py-14 border-b border-border-subtle grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start"
            >
              <div className="md:col-span-4 flex items-baseline gap-4">
                <span className="font-mono text-sm tracking-widest text-sage font-medium">
                  {method.number}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal">
                  {method.title}
                </h3>
              </div>

              <div className="md:col-span-8 space-y-3">
                <p className="text-charcoal text-base sm:text-[17px] font-medium leading-relaxed">
                  {method.shortDesc}
                </p>
                <p className="text-warmgray text-base sm:text-[17px] leading-relaxed font-light">
                  {method.fullDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Final CTA */}
      <FinalCtaSection onNavigate={onNavigate} />

    </div>
  );
};
