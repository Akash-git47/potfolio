
import React, { useEffect } from 'react';
import { DetailedProject } from '../constants';

interface CaseStudyProps {
  project: DetailedProject;
  onClose: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ project, onClose }) => {
  // Prevent body scroll when case study is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-white overflow-y-auto animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out">
      {/* Fixed Navigation/Close bar */}
      <div className="sticky top-0 left-0 right-0 z-50 glass border-b border-slate-100 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">
            Case Study
          </div>
          <span className="text-sm font-bold text-slate-900">{project.title}</span>
        </div>
        <button 
          onClick={onClose}
          className="group flex items-center gap-3 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <span className="text-xs font-bold uppercase tracking-widest">Close</span>
          <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* Hero Section */}
        <header className="space-y-12 mb-32 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-4 py-1.5 rounded-full">{tag}</span>
            ))}
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-none">
            {project.title}
          </h1>
          <p className="text-xl md:text-3xl text-slate-500 max-w-3xl font-light leading-tight">
            {project.description}
          </p>
          
          <div className="rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 border border-slate-200 aspect-video">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </header>

        {/* Overview Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-slate-100 py-16 mb-32">
          {project.results.map((res, i) => (
            <div key={i} className="space-y-2">
              <p className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">{res.value}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{res.label}</p>
            </div>
          ))}
          <div className="space-y-2">
            <p className="text-sm font-bold text-slate-900">Timeline</p>
            <p className="text-sm text-slate-500">6 Months</p>
          </div>
        </section>

        {/* Content Blocks */}
        <div className="space-y-40">
          {/* Problem & Strategy */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">The Problem</h2>
              <p className="text-3xl font-bold text-slate-900 leading-snug">
                {project.problem}
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">The Strategy</h2>
              <p className="text-3xl font-bold text-slate-900 leading-snug">
                {project.strategy}
              </p>
            </div>
          </section>

          {/* Quote Pull */}
          {project.quote && (
            <section className="bg-slate-50 rounded-[3rem] p-16 md:p-24 text-center space-y-8">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-3xl md:text-5xl font-bold italic tracking-tight text-slate-900 leading-tight">
                "{project.quote.text}"
              </blockquote>
              <cite className="block not-italic">
                <span className="text-slate-900 font-bold">{project.quote.author}</span>
              </cite>
            </section>
          )}

          {/* Process & Tools */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Process</h2>
              <ul className="space-y-4">
                {project.process.map((step, i) => (
                  <li key={i} className="flex items-center gap-4 text-xl font-bold text-slate-700">
                    <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-xs text-slate-400">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Tools Used</h2>
              <div className="flex flex-wrap gap-4">
                {project.tools.map(tool => (
                  <span key={tool} className="px-6 py-3 border border-slate-200 rounded-2xl text-slate-600 font-bold text-sm bg-white hover:border-slate-900 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Key Learnings */}
          <section className="space-y-8 border-t border-slate-100 pt-20 pb-40">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Key Learnings</h2>
            <p className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 leading-tight">
              {project.learnings}
            </p>
            <div className="pt-12">
               <button 
                onClick={onClose}
                className="px-12 py-5 bg-slate-900 text-white rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-indigo-600 transition-all active:scale-95"
               >
                 Back to Portfolio
               </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
