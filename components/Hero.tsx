
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import LottieAnimation from './LottieAnimation';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden">
      {/* Dynamic Animated Mesh Gradient Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-100/40 rounded-full blur-[120px] animate-mesh" />
        <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] bg-blue-50/50 rounded-full blur-[100px] animate-mesh" style={{ animationDelay: '-5s' }} />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-slate-100/60 rounded-full blur-[80px] animate-mesh" style={{ animationDelay: '-10s' }} />
      </div>

      {/* Floating Interactive Ring Decor */}
      <div className="absolute top-1/4 left-10 md:left-32 w-48 h-48 border border-indigo-200/40 rounded-full blur-[1px] animate-float-glide -z-10 pointer-events-none opacity-60" />
      <div className="absolute bottom-1/3 right-10 md:right-40 w-64 h-64 border border-blue-200/30 rounded-full blur-[2px] animate-float-glide -z-10 pointer-events-none opacity-40" style={{ animationDelay: '-4s' }} />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        <div className="animate-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200/60 text-slate-600 text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Based in London &bull; Available globally
        </div>
        
        <h1 className="animate-reveal delay-100 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-slate-900 leading-[0.9] text-gradient">
          I design high-impact digital experiences that convert users into customers.
        </h1>
        
        <p className="animate-reveal delay-200 text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
          Combining deep strategy with pixel-perfect execution to build products that people love and businesses thrive on.
        </p>

        <div className="animate-reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
          <div className="relative group/cta w-full sm:w-auto">
            {/* Subtle Rotating Ring */}
            <div className="absolute inset-[-12px] border border-dashed border-indigo-200 rounded-[2.5rem] animate-slow-rotate pointer-events-none opacity-0 group-hover/cta:opacity-100 transition-opacity duration-1000 group-hover/cta:border-indigo-400/50" />
            
            <a 
              href="#work" 
              className="group w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-sm tracking-wide transition-all duration-500 hover:bg-slate-800 hover:scale-105 hover:shadow-[0_20px_50px_rgba(15,23,42,0.15)] active:scale-95 flex items-center justify-center gap-2 relative z-10"
            >
              View Work
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="relative flex items-center">
            <a 
              href="#contact-form" 
              className="group w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-sm tracking-wide transition-all duration-500 hover:bg-slate-50 hover:border-slate-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] active:scale-95 flex items-center justify-center"
            >
              Solve
            </a>
            {/* Abstract Lottie Decor */}
            <div className="absolute -right-16 hidden lg:block w-12 h-12 opacity-40">
              <LottieAnimation url="https://assets2.lottiefiles.com/packages/lf20_m6cu9nqy.json" delay={1000} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="reveal delay-500 mt-24 w-full max-w-7xl mx-auto px-4 relative z-10">
        <div className="relative group rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200/60 shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
            alt="Product Interface Showcase" 
            className="w-full aspect-[21/9] object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
