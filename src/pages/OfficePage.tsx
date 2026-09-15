import React from 'react';
import { OFFICE_CONTENT } from '../data/content';
import { IMAGES } from '../data/images';
import { MapPlaceholder } from '../components/office/MapPlaceholder';
import { FinalCtaSection } from '../components/home/FinalCtaSection';
import { Check, Sun, Shield, Sofa, Video, MapPin } from 'lucide-react';

interface OfficePageProps {
  onNavigate: (page: string) => void;
}

export const OfficePage: React.FC<OfficePageProps> = ({ onNavigate }) => {
  const { heading, subheading, address, description, features } = OFFICE_CONTENT;

  const featureIcons = [
    <MapPin className="text-sage" size={18} key="pin" />,
    <Video className="text-sage" size={18} key="video" />,
    <Shield className="text-sage" size={18} key="shield" />,
    <Sun className="text-sage" size={18} key="sun" />,
    <Sofa className="text-sage" size={18} key="sofa" />
  ];

  return (
    <div className="pt-6 md:pt-12">
      
      {/* Header Banner */}
      <section className="max-w-content mx-auto px-6 sm:px-8 pb-12 md:pb-16 border-b border-border-subtle">
        <div className="max-w-3xl">
          <span className="text-xs md:text-sm font-medium tracking-widest text-warmgray uppercase block mb-3">
            {subheading}
          </span>
          <h1 className="text-charcoal font-serif font-normal text-4xl sm:text-5xl md:text-[58px] leading-tight tracking-tight">
            {heading}
          </h1>
          <p className="text-warmgray text-base sm:text-lg mt-4 leading-relaxed font-light">
            {description}
          </p>
        </div>
      </section>

      {/* Office Gallery & Atmosphere */}
      <section className="max-w-content mx-auto px-6 sm:px-8 py-16 md:py-20">
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          
          {/* Main Large Image */}
          <div className="md:col-span-8">
            <div className="overflow-hidden rounded-md border border-border-subtle aspect-[16/10] bg-beige-soft">
              <img
                src={IMAGES.officeMain}
                alt="Santa Monica therapy office featuring bright natural light and neutral furnishings"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
            <p className="text-xs text-warmgray mt-2.5 font-light">
              Main consultation seating with soft natural daylight and serene acoustics.
            </p>
          </div>

          {/* Side Stacked Images */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <div className="overflow-hidden rounded-md border border-border-subtle aspect-[4/3] bg-beige-soft">
                <img
                  src={IMAGES.officeSeating}
                  alt="Comfortable linen seating area"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-warmgray mt-2 font-light">
                Quiet corner for reflection and grounding exercises.
              </p>
            </div>

            <div>
              <div className="overflow-hidden rounded-md border border-border-subtle aspect-[4/3] bg-beige-soft">
                <img
                  src={IMAGES.officeDetail}
                  alt="Natural wood and calm uncluttered environment"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-warmgray mt-2 font-light">
                Warm, uncluttered textures designed to support calm.
              </p>
            </div>
          </div>

        </div>

        {/* Practice Environment Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 pb-16 border-t border-border-subtle">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-medium tracking-widest text-warmgray uppercase block">
              Space & Amenities
            </span>
            <h2 className="text-charcoal font-serif font-normal text-3xl sm:text-4xl">
              Thoughtfully curated for comfort and privacy
            </h2>
            <p className="text-warmgray text-base leading-relaxed font-light">
              Clients often share that the physical environment itself helps them slow down and breathe more easily upon arriving for their session.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-5 bg-beige-soft/40 border border-border-subtle rounded-md flex items-center space-x-3.5"
              >
                <div className="w-8 h-8 rounded-full bg-ivory border border-border-subtle flex items-center justify-center shrink-0">
                  {featureIcons[idx] || <Check className="text-sage" size={16} />}
                </div>
                <span className="text-charcoal text-[15px] font-medium font-sans">
                  {feature}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Location & Map Section */}
        <div className="pt-8">
          <div className="mb-6">
            <span className="text-xs font-medium tracking-widest text-warmgray uppercase block mb-1">
              Location
            </span>
            <h3 className="text-charcoal font-serif text-2xl sm:text-3xl font-normal">
              Santa Monica, California
            </h3>
            <p className="text-warmgray text-sm sm:text-base mt-1">
              Exact Address: <strong className="text-charcoal font-medium">{address}</strong>
            </p>
          </div>

          <MapPlaceholder />
        </div>

      </section>

      {/* Final CTA */}
      <FinalCtaSection onNavigate={onNavigate} />

    </div>
  );
};
