
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger shrink effect earlier for a responsive feel
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Library', href: '#library' },
    { name: 'Process', href: '#process' },
    { name: 'Stack', href: '#stack' },
    { name: 'Skills', href: '#skills' },
    { name: 'History', href: '#experience' },
    { name: 'Contact', href: '#contact-form' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[60] animate-slide-down pointer-events-auto
        transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)
        ${isScrolled 
          ? 'py-3 glass border-b border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]' 
          : 'py-10 bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <a 
          href="#hero" 
          className="group flex items-center gap-3 outline-none"
        >
          <div className={`transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold group-hover:bg-indigo-600 group-hover:rotate-[10deg]
            ${isScrolled ? 'w-8 h-8 text-[14px]' : 'w-10 h-10 text-lg'}`}>
            S
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={`font-medium text-slate-500 hover:text-slate-900 transition-all duration-300 relative group py-2 tracking-tight
                    ${isScrolled ? 'text-[12px]' : 'text-[13px]'}`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-indigo-600 transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href="#contact-form" 
            className={`transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) bg-slate-900 text-white font-black rounded-xl hover:bg-indigo-600 active:scale-95 hover:shadow-xl hover:shadow-indigo-500/10 uppercase tracking-widest
              ${isScrolled ? 'px-5 py-2 text-[10px]' : 'px-7 py-3 text-[11px]'}`}
          >
            Solve
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
