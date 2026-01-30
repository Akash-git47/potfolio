
import React from 'react';

interface SectionDividerProps {
  variant?: 'diamond' | 'circle' | 'cross';
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'diamond', className = '' }) => {
  return (
    <div className={`w-full py-12 flex items-center justify-center overflow-hidden relative ${className}`}>
      {/* Background Line */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
      </div>

      {/* Animated Shape Container */}
      <div className="reveal flex items-center justify-center gap-24 relative z-10">
        {/* Main Center Shape */}
        <div className="bg-white px-8 relative">
          {variant === 'diamond' && (
            <svg 
              width="24" height="24" viewBox="0 0 24 24" fill="none" 
              className="text-indigo-600 animate-[spin_12s_linear_infinite] group-[.active]:scale-110 transition-transform duration-1000"
            >
              <rect x="12" y="2" width="14.14" height="14.14" transform="rotate(45 12 2)" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
          {variant === 'circle' && (
            <svg 
              width="24" height="24" viewBox="0 0 24 24" fill="none" 
              className="text-indigo-600 animate-[pulse_4s_ease-in-out_infinite] group-[.active]:scale-110 transition-transform duration-1000"
            >
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
          )}
          {variant === 'cross' && (
            <svg 
              width="20" height="20" viewBox="0 0 24 24" fill="none" 
              className="text-indigo-600 animate-[spin_8s_linear_infinite]"
            >
              <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </div>

        {/* Floating Side Accents - These 'drift' on scroll trigger */}
        <div className="absolute left-[-200px] opacity-0 group-[.active]:opacity-10 group-[.active]:translate-x-[100px] transition-all duration-[3000ms] ease-out">
           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-slate-900">
             <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="0.5" />
           </svg>
        </div>
        <div className="absolute right-[-200px] opacity-0 group-[.active]:opacity-10 group-[.active]:translate-x-[-100px] transition-all duration-[3000ms] ease-out">
           <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-slate-900">
             <rect x="10" y="10" width="40" height="40" stroke="currentColor" strokeWidth="0.5" transform="rotate(15 30 30)" />
           </svg>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
