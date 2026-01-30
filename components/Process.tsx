
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import LottieAnimation from './LottieAnimation';

const IconMap = {
  discovery: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  research: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  design: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  ),
  build: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  iterate: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  deliver: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
    </svg>
  ),
};

const Process: React.FC = () => {
  return (
    <section id="process" className="py-40 px-8 bg-white relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-indigo-50/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[30%] bg-blue-50/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8 reveal">
          <div className="space-y-4 relative">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest border border-slate-200">
              The Method
            </div>
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-tight flex items-center gap-6">
              A Proven <span className="text-indigo-600 italic">Workflow.</span>
              <div className="hidden sm:block w-20 h-20 opacity-20">
                <LottieAnimation url="https://assets10.lottiefiles.com/packages/lf20_96bovdur.json" delay={300} />
              </div>
            </h2>
            <p className="text-xl text-slate-500 max-w-xl font-light leading-relaxed">
              Precision-engineered systems that transform complex business goals into high-performance digital products.
            </p>
          </div>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
          
          {/* Main Drawing Line - Background Track */}
          <div className="absolute md:left-1/2 left-0 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2" />
          
          {/* Drawing Line Animation Overlay */}
          <div className="absolute md:left-1/2 left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-600 via-indigo-400 to-transparent -translate-x-1/2 origin-top transition-transform duration-[2000ms] reveal group-[.active]:scale-y-100 scale-y-0" />

          <div className="space-y-32">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.id} 
                  className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-0 reveal delay-${(idx + 1) * 150}`}
                >
                  {/* Step Content Side */}
                  <div className={`w-full md:w-1/2 px-0 md:px-16 ${isEven ? 'md:text-right md:order-1' : 'md:text-left md:order-2'}`}>
                    <div className="space-y-6">
                      <div className={`flex items-center gap-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                         <span className="text-5xl font-black text-slate-100 tracking-tighter tabular-nums">
                          {step.id}
                        </span>
                        <div className="h-px flex-1 bg-slate-100 hidden md:block" />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-lg leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Timeline Point */}
                  <div className="absolute md:left-1/2 left-0 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white border border-slate-100 rounded-[1.5rem] shadow-xl shadow-indigo-500/5 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-700 reveal-item group-[.active]:animate-[bounce_1s_ease-out]">
                      <div className="group-[.active]:scale-110 transition-transform duration-500">
                        {IconMap[step.icon]}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'order-2' : 'order-1'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA for Process */}
        <div className="mt-40 text-center reveal delay-500">
          <p className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-10">
            Repeatable results &bull; No assumptions &bull; Full transparency
          </p>
          <div className="inline-flex items-center gap-6 p-2 pr-6 rounded-full bg-slate-50 border border-slate-100">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-bold text-slate-900 tracking-tight">Project Ready? Let's connect.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
