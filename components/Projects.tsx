
import React, { useState, useRef } from 'react';
import { PROJECTS, DetailedProject } from '../constants';
import LottieAnimation from './LottieAnimation';

interface ProjectCardProps {
  project: DetailedProject;
  onClick: () => void;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [imgX, setImgX] = useState(0);
  const [imgY, setImgY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Tilt calculation
    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;
    
    // Parallax shift calculation (inverse movement)
    const pX = ((x - centerX) / centerX) * -10;
    const pY = ((y - centerY) / centerY) * -10;
    
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
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      className={`group relative text-left block space-y-6 outline-none cursor-pointer reveal delay-${(index + 1) * 200}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm transition-all duration-700 group-hover:shadow-[0_40px_80px_-15px_rgba(79,70,229,0.15)] group-hover:-translate-y-4">
        
        {/* Main Image with Parallax Shift */}
        <div className="w-full h-full scale-110 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            style={{
              transform: `translate(${imgX}px, ${imgY}px) scale(1.1)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="w-full h-full object-cover grayscale opacity-80 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:opacity-100"
          />
        </div>

        {/* Dynamic Overlay */}
        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0">
          <div className="space-y-4">
             <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-[9px] font-black text-white/90 uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
            <h4 className="text-3xl font-black text-white tracking-tighter">
              {project.title}
            </h4>
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-[10px] uppercase tracking-[0.2em]">
              Explore Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating Category Tag (Top Right) */}
        <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900 border border-white/20 shadow-sm opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          {project.category}
        </div>
      </div>

      {/* External Text Content (Visible default) */}
      <div className="space-y-3 px-2 transition-opacity duration-500 group-hover:opacity-40">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 font-light">
          {project.description}
        </p>
      </div>
    </div>
  );
};

interface ProjectsProps {
  onViewProject: (project: DetailedProject) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewProject }) => {
  return (
    <section id="work" className="py-32 px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4 reveal relative">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              Portfolio
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-tight flex items-center gap-6">
              Selected Works
              <div className="hidden sm:block w-16 h-16 opacity-30">
                <LottieAnimation url="https://assets10.lottiefiles.com/packages/lf20_at6mdfic.json" delay={500} />
              </div>
            </h2>
            <p className="text-xl text-slate-500 max-w-xl font-light">
              Crafting high-impact solutions that combine aesthetic excellence with measurable results.
            </p>
          </div>
          <div className="hidden md:block reveal delay-200">
            <p className="text-slate-400 font-mono text-sm tracking-tighter">
              (01 — {PROJECTS.length.toString().padStart(2, '0')})
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {PROJECTS.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => onViewProject(project)} 
              index={idx}
            />
          ))}
        </div>
        
        {/* Decorative background number for Section Index */}
        <div className="absolute -bottom-10 right-10 text-[20vw] font-black text-slate-50 pointer-events-none select-none -z-10 leading-none reveal delay-500">
          WORKS
        </div>
      </div>
    </section>
  );
};

export default Projects;
