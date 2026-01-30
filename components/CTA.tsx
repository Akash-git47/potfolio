
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import LottieAnimation from './LottieAnimation';

const CTA: React.FC = () => {
  return (
    <section className="py-40 px-8 relative overflow-hidden bg-slate-900">
      {/* Dynamic background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-0 -translate-x-1/4 translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="space-y-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-[0.3em] reveal">
            Ready to scale?
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] max-w-4xl mx-auto reveal delay-200">
            Let’s build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">exceptional.</span>
          </h2>
          
          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed reveal delay-400">
            Ambitious ideas require world-class execution. Whether you're launching a startup or scaling an enterprise, I provide the strategic design and technical precision needed to win.
          </p>

          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6 reveal delay-600 relative">
             {/* Hidden decorative Lottie on sides */}
            <div className="absolute -left-20 hidden xl:block w-24 h-24 opacity-20">
              <LottieAnimation url="https://assets10.lottiefiles.com/packages/lf20_at6mdfic.json" delay={1200} />
            </div>

            <div className="relative group/cta w-full sm:w-auto">
              {/* Subtle Rotating Ring */}
              <div className="absolute inset-[-12px] border border-dashed border-indigo-400/30 rounded-[2.5rem] animate-slow-rotate pointer-events-none opacity-0 group-hover/cta:opacity-100 transition-opacity duration-1000 group-hover/cta:border-indigo-400/60" />
              
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group px-12 py-6 bg-white text-slate-900 rounded-[2rem] font-black text-sm tracking-widest uppercase hover:bg-indigo-500 hover:text-white transition-all duration-500 active:scale-95 shadow-2xl shadow-white/5 flex items-center gap-3 relative z-10"
              >
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            
            <a 
              href="#work"
              className="px-12 py-6 border border-slate-700 text-white rounded-[2rem] font-bold text-sm tracking-widest uppercase hover:bg-slate-800 transition-all duration-300"
            >
              View Capabilities
            </a>

            <div className="absolute -right-20 hidden xl:block w-24 h-24 opacity-20 rotate-180">
              <LottieAnimation url="https://assets10.lottiefiles.com/packages/lf20_at6mdfic.json" delay={1500} />
            </div>
          </div>
          
          <div className="pt-20 opacity-30 reveal delay-800">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">
              Trusted by 50+ Global Brands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
