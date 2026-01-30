
import React from 'react';
import { METRICS } from '../constants';
import LottieAnimation from './LottieAnimation';

const Metrics: React.FC = () => {
  return (
    <section className="py-32 px-8 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto">
        {/* Abstract decor for header */}
        <div className="mb-20 flex items-center justify-between reveal">
          <div className="w-16 h-16 opacity-20">
            <LottieAnimation url="https://assets1.lottiefiles.com/packages/lf20_m6cu9nqy.json" delay={200} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {METRICS.map((metric, index) => (
            <div 
              key={metric.label} 
              className={`space-y-6 group reveal delay-${(index + 1) * 150}`}
            >
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 block mb-4">
                  {metric.label}
                </span>
                <div className="text-6xl md:text-7xl font-black tracking-tighter text-slate-900 group-hover:text-indigo-600 transition-colors duration-500">
                  {metric.value}
                </div>
              </div>
              
              <div className="h-px w-12 bg-slate-100 group-hover:w-full transition-all duration-700" />
              
              <p className="text-sm text-slate-500 leading-relaxed font-light max-w-[200px]">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
