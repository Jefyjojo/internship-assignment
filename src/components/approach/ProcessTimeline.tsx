import React from 'react';
import { APPROACH_CONTENT } from '../../data/content';

export const ProcessTimeline: React.FC = () => {
  const { timelineSteps, timelineNote } = APPROACH_CONTENT;

  return (
    <div className="my-16 md:my-20 p-8 md:p-12 bg-beige-soft/60 rounded-md border border-border-subtle">
      <div className="max-w-3xl mb-10">
        <span className="text-xs md:text-sm font-medium tracking-widest text-warmgray uppercase block mb-2">
          Therapeutic Rhythm
        </span>
        <h3 className="text-charcoal font-serif text-2xl md:text-3xl font-normal">
          How therapy typically unfolds
        </h3>
      </div>

      {/* Desktop Horizontal / Mobile Vertical Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
        {timelineSteps.map((item, idx) => (
          <div key={idx} className="relative flex flex-col space-y-3">
            
            {/* Step indicator */}
            <div className="flex items-center space-x-3 md:space-x-0 md:flex-col md:items-start">
              <div className="w-8 h-8 rounded-full border border-sage/60 bg-ivory text-sage font-mono text-xs flex items-center justify-center font-medium shadow-xs">
                0{idx + 1}
              </div>
              <span className="font-serif text-lg font-medium text-charcoal md:mt-3">
                {item.step}
              </span>
            </div>

            {/* Description */}
            <p className="text-warmgray text-sm leading-relaxed font-light pl-11 md:pl-0">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Non-rigid disclaimer note */}
      <div className="mt-10 pt-6 border-t border-border-subtle/80">
        <p className="text-xs sm:text-sm text-warmgray/80 italic">
          * {timelineNote}
        </p>
      </div>
    </div>
  );
};
