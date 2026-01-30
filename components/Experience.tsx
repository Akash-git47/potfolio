
import React from 'react';
import { EXPERIENCES } from '../constants';
import LottieAnimation from './LottieAnimation';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-8 bg-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-24">
        <div className="space-y-4 text-center reveal relative">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest">
            History
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 flex items-center justify-center gap-6">
            Career Journey
            <div className="hidden sm:block w-16 h-16 opacity-20">
               <LottieAnimation url="https://assets9.lottiefiles.com/packages/lf20_hzfmxvpx.json" delay={400} />
            </div>
          </h2>
          <p className="text-slate-500 text-lg font-light">Collaborating with world-class engineering teams to build the future.</p>
        </div>
        
        <div className="space-y-12 relative">
          {/* Vertical line decoration */}
          <div className="absolute left-[3px] top-4 bottom-4 w-px bg-slate-200 hidden md:block" />
          
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className={`group relative md:pl-12 reveal delay-${(idx + 1) * 200}`}>
              {/* Timeline dot */}
              <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-indigo-600 group-hover:scale-150 transition-all duration-300 hidden md:block" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-lg font-medium text-slate-600">{exp.role}</p>
                </div>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-slate-100 self-start">
                  {exp.period}
                </span>
              </div>
              
              <p className="mt-6 text-slate-500 leading-relaxed text-sm max-w-2xl font-light">
                {exp.description}
              </p>
              
              <div className="mt-12 h-[1px] w-full bg-slate-200/60 group-last:hidden" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
