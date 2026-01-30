
import React from 'react';
import { FEATURED_BOOK } from '../constants';
import LottieAnimation from './LottieAnimation';

const Library: React.FC = () => {
  return (
    <section id="library" className="py-40 px-8 bg-white relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        <div className="flex-1 w-full max-w-lg lg:max-w-none group reveal">
          <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-indigo-500/10 border border-slate-100">
            <img 
              src={FEATURED_BOOK.image} 
              alt={FEATURED_BOOK.title} 
              className="w-full h-full object-cover" 
            />
            {/* Book Spine Overlay Label */}
            <div className="absolute top-12 left-0 h-40 w-2 bg-indigo-600 rounded-r-full shadow-lg" />
          </div>
        </div>

        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-widest reveal delay-100">
              Author
            </div>
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-[0.9] reveal delay-200 flex items-center gap-6">
              {FEATURED_BOOK.title}
              <div className="hidden sm:block w-16 h-16 opacity-30">
                <LottieAnimation url="https://assets9.lottiefiles.com/packages/lf20_hzfmxvpx.json" delay={400} />
              </div>
            </h2>
            <p className="text-2xl text-indigo-600 font-light tracking-tight reveal delay-300">
              {FEATURED_BOOK.subtitle}
            </p>
          </div>

          <p className="text-lg text-slate-500 leading-relaxed max-w-xl font-light reveal delay-400">
            {FEATURED_BOOK.description}
          </p>

          <div className="space-y-8 reveal delay-500">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">Inside the book</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {FEATURED_BOOK.chapters.map((chapter, i) => (
                <li key={i} className="flex items-center gap-4 group/item">
                  <span className="text-xs font-bold text-slate-300 group-hover/item:text-indigo-500 transition-colors">0{i + 1}</span>
                  <span className="text-sm font-medium text-slate-600 group-hover/item:text-slate-900 transition-colors">{chapter}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 reveal delay-600">
            <a 
              href={FEATURED_BOOK.link}
              className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-indigo-600 transition-all active:scale-95 shadow-xl shadow-slate-200 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              Order Copy
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Library;
