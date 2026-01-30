
import React, { useState, useEffect } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight === 0) {
        setScrollProgress(0);
        return;
      }
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set progress if page is refreshed mid-scroll
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none">
      <div 
        className="h-full bg-indigo-600 transition-all duration-150 ease-out relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Subtle Glow Pulse */}
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-r from-transparent to-white/30 animate-pulse blur-[2px]" />
        
        {/* Progress Bar Shadow/Glow */}
        <div 
          className="absolute inset-0 shadow-[0_0_10px_rgba(79,70,229,0.5)] opacity-100" 
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

export default ScrollProgressBar;
