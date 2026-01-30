
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import LottieAnimation from './LottieAnimation';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-8 bg-white border-t border-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 reveal">
          <div className="space-y-4 relative">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              Expertise
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-tight flex items-center gap-6">
              Driven by Outcomes.
              <div className="hidden sm:block w-16 h-16 opacity-20">
                <LottieAnimation url="https://assets1.lottiefiles.com/packages/lf20_m6cu9nqy.json" delay={300} />
              </div>
            </h2>
            <p className="text-xl text-slate-500 max-w-xl font-light">
              It’s not just about the tools I use, but the value I deliver to your business and your users.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={category.title} className={`space-y-10 group reveal delay-${(idx + 1) * 200}`}>
              <div className="space-y-2">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-600">
                  {category.title}
                </h3>
                <div className="h-[2px] w-8 bg-indigo-100 group-hover:w-16 transition-all duration-500" />
              </div>

              <ul className="space-y-10">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-black text-slate-300 tabular-nums">
                        {skill.percentage}%
                      </span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden relative">
                      {/* Inner Bar with Animation Hook */}
                      <div 
                        className="h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] w-0 group-[.active]:w-[var(--skill-width)]"
                        style={{ '--skill-width': `${skill.percentage}%` } as React.CSSProperties}
                      />
                    </div>

                    <p className="text-[11px] text-slate-400 leading-relaxed font-light opacity-0 group-[.active]:opacity-100 transition-opacity duration-1000 delay-500">
                      {skill.outcome}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
