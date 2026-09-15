import React from 'react';
import { MapPin, Compass } from 'lucide-react';
import { OFFICE_CONTENT } from '../../data/content';

export const MapPlaceholder: React.FC = () => {
  return (
    <div className="rounded-md border border-border-subtle bg-ivory overflow-hidden relative shadow-xs">
      {/* Map visual graphic */}
      <div className="h-[320px] sm:h-[380px] w-full bg-[#EDE8E0] relative flex items-center justify-center overflow-hidden select-none">
        
        {/* Subtle Santa Monica Coastline & Grid Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Ocean on the West */}
          <path
            d="M 0 0 L 220 0 C 235 90, 245 180, 220 270 C 205 320, 210 370, 220 400 L 0 400 Z"
            fill="#DFE5DF"
          />
          <text x="70" y="210" fill="#7C8A78" fontSize="14" letterSpacing="3" fontFamily="Inter" opacity="0.7">
            PACIFIC OCEAN
          </text>

          {/* Major Santa Monica Arteries */}
          <line x1="220" y1="0" x2="220" y2="400" stroke="#D3CCC1" strokeWidth="3" />
          <text x="228" y="80" fill="#8A857D" fontSize="10" letterSpacing="1" fontFamily="Inter">OCEAN AVE</text>

          <line x1="290" y1="0" x2="290" y2="400" stroke="#DCD7CE" strokeWidth="2" />
          <line x1="360" y1="0" x2="360" y2="400" stroke="#DCD7CE" strokeWidth="2" />
          <line x1="430" y1="0" x2="430" y2="400" stroke="#DCD7CE" strokeWidth="2" />
          <line x1="500" y1="0" x2="500" y2="400" stroke="#DCD7CE" strokeWidth="2" />
          <line x1="570" y1="0" x2="570" y2="400" stroke="#DCD7CE" strokeWidth="2" />
          <line x1="640" y1="0" x2="640" y2="400" stroke="#DCD7CE" strokeWidth="2" />
          <line x1="710" y1="0" x2="710" y2="400" stroke="#DCD7CE" strokeWidth="2" />

          {/* Cross Streets */}
          <line x1="220" y1="90" x2="800" y2="90" stroke="#D3CCC1" strokeWidth="2.5" />
          <text x="460" y="82" fill="#8A857D" fontSize="10" letterSpacing="1" fontFamily="Inter">WILSHIRE BLVD</text>

          <line x1="220" y1="170" x2="800" y2="170" stroke="#D3CCC1" strokeWidth="2.5" />
          <text x="460" y="162" fill="#8A857D" fontSize="10" letterSpacing="1" fontFamily="Inter">SANTA MONICA BLVD</text>

          <line x1="220" y1="250" x2="800" y2="250" stroke="#D3CCC1" strokeWidth="2.5" />
          <text x="460" y="242" fill="#8A857D" fontSize="10" letterSpacing="1" fontFamily="Inter">COLORADO AVE</text>

          <line x1="220" y1="330" x2="800" y2="330" stroke="#DCD7CE" strokeWidth="2" />

          {/* Subtle location point pulse */}
          <circle cx="395" cy="130" r="28" fill="#7C8A78" opacity="0.15" />
          <circle cx="395" cy="130" r="14" fill="#7C8A78" opacity="0.3" />
        </svg>

        {/* Location Pin Card Marker */}
        <div className="relative z-10 bg-ivory/95 backdrop-blur-sm border border-border-subtle p-4 rounded-md shadow-md max-w-[280px] text-center transform -translate-y-2">
          <div className="w-8 h-8 rounded-full bg-sage text-white mx-auto flex items-center justify-center mb-2 shadow-xs">
            <MapPin size={18} />
          </div>
          <h4 className="font-serif text-base font-medium text-charcoal">
            Private Practice Office
          </h4>
          <p className="text-xs text-warmgray mt-1 leading-relaxed">
            {OFFICE_CONTENT.address}
          </p>
          <div className="mt-2.5 pt-2 border-t border-border-subtle/80 flex items-center justify-center gap-1.5 text-[11px] text-sage font-medium">
            <Compass size={12} />
            <span>Santa Monica, CA 90401</span>
          </div>
        </div>

      </div>

      {/* Map Footer Bar */}
      <div className="p-4 bg-ivory border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-warmgray">
        <span>Address: <strong className="text-charcoal font-medium">{OFFICE_CONTENT.address}</strong></span>
        <span className="text-warmgray/80">In-person visits by scheduled appointment only</span>
      </div>
    </div>
  );
};
