
import React, { useState, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';
import LottieAnimation from './LottieAnimation';

const About: React.FC = () => {
  const portraitRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [imgX, setImgX] = useState(0);
  const [imgY, setImgY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Tilt calculation
    const rX = ((y - centerY) / centerY) * -5; // Slightly less intense for the large portrait
    const rY = ((x - centerX) / centerX) * 5;
    
    // Parallax shift calculation
    const pX = ((x - centerX) / centerX) * -12;
    const pY = ((y - centerY) / centerY) * -12;
    
    setRotateX(rX);
    setRotateY(rY);
    setImgX(pX);
    setImgY(pY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setImgX(0);
    setImgY(0);
  };

  return (
    <section id="about" className="py-32 px-8 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] text-[30vw] font-black text-slate-900 leading-none">ABOUT</div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center relative z-10">
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest reveal">
              My Philosophy
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-[1.1] reveal delay-100 flex items-center gap-4">
              Simplicity is the <br />
              <span className="text-indigo-600">ultimate sophistication.</span>
              <div className="hidden sm:block w-16 h-16 opacity-30">
                <LottieAnimation url="https://assets1.lottiefiles.com/packages/lf20_m6cu9nqy.json" delay={500} />
              </div>
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light max-w-2xl italic border-l-2 border-indigo-100 pl-6 py-2 reveal delay-200">
              "{PERSONAL_INFO.positioning}"
            </p>
          </div>

          <div className="space-y-8 reveal delay-300">
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              {PERSONAL_INFO.bio}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-4 border-t border-slate-100 reveal delay-400">
              <div>
                <p className="text-4xl font-black text-slate-900 tracking-tighter">10+</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-2">Years of Impact</p>
              </div>
              <div>
                <p className="text-4xl font-black text-slate-900 tracking-tighter">50+</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-2">Products Shipped</p>
              </div>
              <div className="hidden md:block">
                <p className="text-4xl font-black text-slate-900 tracking-tighter">03</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-2">Awards Won</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6 reveal delay-500">
            <a 
              href="#contact-form" 
              className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-indigo-600 transition-all active:scale-95 shadow-lg shadow-slate-200"
            >
              Start a Project
            </a>
            <div className="h-px w-12 bg-slate-200 hidden sm:block" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:block">Available for Q4 2024</span>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md lg:max-w-xl relative group reveal delay-300">
          {/* Elite Photo Frame with 3D Effect */}
          <div 
            ref={portraitRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
            className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl transition-shadow duration-700 group-hover:shadow-indigo-500/20"
          >
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
            
            {/* Image with Parallax Shift */}
            <div className="w-full h-full scale-110">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt={`${PERSONAL_INFO.name} Professional Portrait`} 
                style={{
                  transform: `translate(${imgX}px, ${imgY}px) scale(1.1)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
              />
            </div>

            {/* Subtle Overlay Label */}
            <div className="absolute bottom-10 left-10 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Currently Located</p>
               <p className="text-sm font-bold">London, United Kingdom</p>
            </div>
          </div>
          
          {/* Background Offset Element */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-indigo-600/20 rounded-[3rem] -z-10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
        </div>
      </div>
    </section>
  );
};

export default About;
