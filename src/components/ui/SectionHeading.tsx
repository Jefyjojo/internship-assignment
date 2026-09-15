import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  titleAs?: 'h1' | 'h2' | 'h3';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
  titleAs = 'h2'
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const TitleTag = titleAs;

  return (
    <div className={`mb-10 md:mb-14 ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-xs md:text-sm font-medium tracking-widest text-warmgray uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <TitleTag className="text-charcoal font-serif font-normal tracking-tight">
        {title}
      </TitleTag>
      {subtitle && (
        <div className={`mt-4 text-warmgray text-base md:text-lg leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </div>
      )}
    </div>
  );
};
