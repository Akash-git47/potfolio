
import React, { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'library', label: 'Library' },
  { id: 'process', label: 'Process' },
  { id: 'stack', label: 'Stack' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'History' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'contact-form', label: 'Contact' },
];

const TableOfContents: React.FC = () => {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px', // Center-weighted detection
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const activeIndex = NAV_ITEMS.findIndex(item => item.id === activeId);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[55] hidden xl:flex flex-col items-end pointer-events-none animate-reveal delay-1000">
      <div className="relative flex flex-col items-end gap-6 pointer-events-auto group">
        
        {/* Active Indicator Bar */}
        <div 
          className="absolute right-0 w-[2px] h-6 bg-indigo-600 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
          style={{ 
            transform: `translateY(${activeIndex * 48}px)`, // 48px is the item height + gap
          }}
        />

        {/* Background Track */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-slate-100 -z-10 h-[calc(100%-24px)]" />

        {NAV_ITEMS.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex items-center gap-4 group/item outline-none h-6"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span 
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 origin-right
                ${activeId === item.id 
                  ? 'text-slate-900 scale-100 opacity-100' 
                  : 'text-slate-300 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100'
                }`}
            >
              {item.label}
            </span>
            <div 
              className={`w-2 h-2 rounded-full border transition-all duration-500
                ${activeId === item.id 
                  ? 'bg-indigo-600 border-indigo-600' 
                  : 'bg-white border-slate-200 group-hover/item:border-slate-400 group-hover/item:scale-125'
                }`}
            />
          </a>
        ))}
      </div>
      
      {/* Scroll Progress Tip */}
      <div className="mt-12 text-slate-300 font-mono text-[9px] rotate-90 origin-right translate-x-3 translate-y-12">
        SCROLL TO EXPLORE
      </div>
    </div>
  );
};

export default TableOfContents;
