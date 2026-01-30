
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TESTIMONIALS } from '../constants';
import LottieAnimation from './LottieAnimation';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Fix: Use 'any' instead of 'NodeJS.Timeout' as the NodeJS namespace is not available in browser environments.
  const timerRef = useRef<any>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused]);

  return (
    <section id="testimonials" className="py-40 px-8 bg-slate-50/50 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute left-[-10%] bottom-0 w-[500px] h-[500px] bg-indigo-50/30 rounded-full blur-[120px] -z-10 animate-mesh" />
      <div className="absolute right-[-5%] top-1/4 w-[400px] h-[400px] bg-blue-50/20 rounded-full blur-[100px] -z-10 animate-mesh" style={{ animationDelay: '-3s' }} />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 space-y-6 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8 reveal">
          <div className="space-y-4 relative">
            <div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              Success Stories
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-tight flex items-center gap-6">
              Trusted by leaders at <br />
              <span className="text-indigo-600">world-class companies.</span>
              <div className="hidden sm:block w-16 h-16 opacity-30">
                <LottieAnimation url="https://assets10.lottiefiles.com/packages/lf20_u0at0z.json" delay={500} />
              </div>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-md font-light leading-relaxed">
            Collaborating with ambitious teams to solve complex problems and deliver exceptional user experiences.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative reveal delay-200"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slides Wrapper */}
          <div className="overflow-visible">
            <div 
              className="flex transition-transform duration-[1200ms]"
              style={{ 
                transform: `translateX(-${activeIndex * 100}%)`,
                transitionTimingFunction: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)' 
              }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-2 md:px-4">
                  <div className="p-10 md:p-16 rounded-[4rem] bg-white border border-slate-100 flex flex-col md:flex-row gap-12 items-center md:items-start justify-between hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-700 group relative overflow-hidden">
                    
                    {/* Minimal Quote Icon Background Decor */}
                    <div className="absolute -top-10 -right-10 text-slate-50/50 pointer-events-none">
                      <svg width="240" height="240" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Author Image & Identity */}
                    <div className="w-32 md:w-48 flex-shrink-0 space-y-6 text-center md:text-left z-10">
                      <div className="relative inline-block">
                        <img 
                          src={t.avatar} 
                          alt={t.author} 
                          className="w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 ring-8 ring-slate-50 group-hover:ring-indigo-50 shadow-lg" 
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xl font-black text-slate-900 tracking-tight">{t.author}</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                          {t.role} <span className="text-indigo-600">@</span> {t.company}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1 space-y-8 md:pt-4 z-10">
                      <div className="flex items-center gap-1 text-indigo-500/40">
                        {[...Array(5)].map((_, starIdx) => (
                          <svg key={starIdx} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-2xl md:text-4xl text-slate-800 leading-tight font-bold tracking-tight">
                        "{t.content}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -left-4 -right-4 md:-left-8 md:-right-8 -translate-y-1/2 flex justify-between pointer-events-none z-20">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center text-slate-900 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 pointer-events-auto active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center text-slate-900 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 pointer-events-auto active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="mt-12 flex justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-12 bg-indigo-600' : 'w-3 bg-slate-200 hover:bg-slate-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-24 py-12 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 reveal delay-500">
           <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
             Featured in
           </p>
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
             <span className="font-black tracking-tighter text-2xl text-slate-900">TechCrunch</span>
             <span className="font-black tracking-tighter text-2xl text-slate-900">Product Hunt</span>
             <span className="font-black tracking-tighter text-2xl text-slate-900">Forbes</span>
             <span className="font-black tracking-tighter text-2xl text-slate-900">Wired</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
