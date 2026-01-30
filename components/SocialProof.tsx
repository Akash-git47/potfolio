
import React from 'react';
import { CLIENTS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 px-8 bg-white border-y border-slate-50 reveal">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-16 text-center">
          Combination of AI with work makes it more efficient
        </p>
        
        <div className="w-full flex flex-wrap items-center justify-center gap-x-12 gap-y-16 md:gap-x-24 transition-all duration-700">
          {CLIENTS.map((client) => (
            <div 
              key={client.name} 
              className="h-8 md:h-12 flex items-center justify-center group relative px-4"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-full w-auto object-contain transition-all duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                loading="eager"
                onError={(e) => {
                  // Fallback to text if for any reason the CDN fails
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-slate-900 font-black text-sm tracking-tighter">${client.name}</span>`;
                  }
                }}
              />
              {/* Tooltip on hover */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl z-10">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
