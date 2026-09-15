import React from 'react';
import { CONTACT_CONTENT, OFFICE_CONTENT } from '../data/content';
import { ContactForm } from '../components/contact/ContactForm';
import { MapPin, Video, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { heading, copy, location, serviceNote } = CONTACT_CONTENT;

  return (
    <div className="pt-6 md:pt-12 pb-20 md:pb-28">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-xs md:text-sm font-medium tracking-widest text-warmgray uppercase block mb-3">
            Get in Touch
          </span>
          <h1 className="text-charcoal font-serif font-normal text-4xl sm:text-5xl md:text-[58px] leading-tight tracking-tight">
            {heading}
          </h1>
          <p className="text-warmgray text-base sm:text-lg mt-4 leading-relaxed font-light">
            {copy}
          </p>
        </div>

        {/* Contact Layout: Form on Left/Main, Practice & Location Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Practice Details Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Location & Format Card */}
            <div className="p-8 bg-beige-soft/60 rounded-md border border-border-subtle space-y-6">
              <div>
                <span className="text-xs font-medium tracking-widest text-warmgray uppercase block mb-1">
                  Practice Location
                </span>
                <h3 className="text-charcoal font-serif text-2xl font-normal">
                  {location}
                </h3>
                <p className="text-sm text-warmgray mt-2 leading-relaxed font-light">
                  {OFFICE_CONTENT.address}
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle space-y-4">
                <div className="flex items-start space-x-3 text-sm text-warmgray">
                  <MapPin size={18} className="text-sage shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal block font-medium">In-Person Sessions</strong>
                    <span className="font-light">Private office in downtown Santa Monica</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-sm text-warmgray">
                  <Video size={18} className="text-sage shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal block font-medium">Telehealth Sessions</strong>
                    <span className="font-light">Secure video sessions for adults across California</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border-subtle">
                <p className="text-xs text-warmgray leading-relaxed font-light">
                  {serviceNote}
                </p>
              </div>
            </div>

            {/* Consultation Note */}
            <div className="p-6 bg-ivory rounded-md border border-border-subtle space-y-3">
              <h4 className="font-serif text-lg font-medium text-charcoal flex items-center gap-2">
                <ShieldCheck size={18} className="text-sage" />
                Initial Consultation
              </h4>
              <p className="text-sm text-warmgray leading-relaxed font-light">
                Consultations provide a quiet opportunity to discuss what brings you to therapy, answer any questions you have about my approach, and determine whether working together is a good fit.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
