
import React from 'react';
import { TECH_STACK } from '../constants';
import LottieAnimation from './LottieAnimation';

const TechIconMap: Record<string, React.ReactNode> = {
  figma: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9.243 2 7 4.243 7 7c0 1.29.49 2.463 1.3 3.352C7.49 11.243 7 12.416 7 13.706c0 1.29.49 2.463 1.3 3.352-.81.889-1.3 2.062-1.3 3.352 0 2.757 2.243 5 5 5s5-2.243 5-5c0-1.29-.49-2.463-1.3-3.352.81-.889 1.3-2.062 1.3-3.352 0-1.29-.49-2.463-1.3-3.352.81-.889 1.3-2.062 1.3-3.352 0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z"/>
    </svg>
  ),
  react: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 14c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"/>
      <path d="M21 12c0-.306-.017-.611-.051-.912l.044-.015a8.966 8.966 0 0 0-1.545-4.828l-.014.004c-.382-.553-.824-1.047-1.32-1.472l-.014.012A8.93 8.93 0 0 0 12 3c-2.112 0-4.053.73-5.59 1.956l-.014-.012c-.496.425-.938.919-1.32 1.472l-.014-.004a8.966 8.966 0 0 0-1.545 4.828l.044.015c-.034.301-.051.606-.051.912 0 .306.017.611.051.912l-.044.015a8.966 8.966 0 0 0 1.545 4.828l.014-.004c.382.553.824 1.047 1.32 1.472l.014-.012A8.93 8.93 0 0 0 12 21c2.112 0 4.053-.73 5.59-1.956l.014.012c.496-.425.938-.919 1.32-1.472l.014.004a8.966 8.966 0 0 0 1.545-4.828l-.044-.015c.034-.301.051-.606.051-.912zm-9 7c-1.583 0-3.05-.515-4.24-1.388 1.157-.384 2.508-.942 3.903-1.597.112.062.226.121.337.185a8.948 8.948 0 0 0 2.227 1.01c.219.06.444.113.673.158A6.96 6.96 0 0 1 12 19zm0-14c1.583 0 3.05.515 4.24 1.388-1.157.384-2.508.942-3.903 1.597-.112-.062-.226-.121-.337-.185a8.948 8.948 0 0 0-2.227-1.01c-.219-.06-.444-.113-.673-.158A6.96 6.96 0 0 1 12 5zm-7.612 7c0-.205.011-.409.034-.61.353.111.728.232 1.12.361.012.186.027.371.047.556a8.955 8.955 0 0 0 .543 2.158 8.964 8.964 0 0 0 1.17 2.128c-.463.538-.94 1.025-1.42 1.455A6.966 6.966 0 0 1 4.388 12zm15.224 0c0 .205-.011.409-.034.61-.353-.111-.728-.232-1.12-.361-.012-.186-.027-.371-.047-.556a8.955 8.955 0 0 0-.543-2.158 8.964 8.964 0 0 0-1.17-2.128c.463-.538.94-1.025 1.42-1.455A6.966 6.966 0 0 1 19.612 12z"/>
    </svg>
  ),
  typescript: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34V12c-.379-.214-.81-.388-1.294-.52a5.16 5.16 0 0 0-1.365-.197c-.384 0-.649.079-.796.237-.147.158-.22.37-.22.636 0 .235.06.435.18.6a2.12 2.12 0 0 0 .536.486c.237.15.563.31.98.48.61.242 1.114.489 1.513.743.399.253.715.545.948.876.233.33.35.734.35 1.21 0 .562-.149 1.05-.448 1.463-.299.414-.722.733-1.27.955-.548.223-1.211.335-1.99.335-.617 0-1.186-.056-1.707-.17a7.65 7.65 0 0 1-1.534-.473v-2.307c.44.296.925.522 1.455.678.53.155 1.058.233 1.586.233.41 0 .687-.08.832-.242.145-.162.218-.382.218-.66 0-.249-.066-.464-.197-.644a2.6 2.6 0 0 0-.583-.506c-.257-.166-.62-.357-1.089-.574-.61-.285-1.104-.555-1.483-.81a3.17 3.17 0 0 1-.908-.89c-.218-.352-.327-.775-.327-1.27 0-.543.145-1.014.436-1.412.29-.398.707-.707 1.25-.925.542-.217 1.206-.326 1.994-.326zm-8.825.034v2.306H8.354V21H5.421V12.09H4.155V9.784h5.508z"/>
    </svg>
  ),
  tailwind: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  framer: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
    </svg>
  ),
  database: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  cloud: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  node: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.903a2 2 0 01-3.156.085l-1.615-2.154a2 2 0 011.141-3.513l2.391-.239a2 2 0 001.329-.694l1.913-2.426a2 2 0 013.15-.088l1.636 2.182a2 2 0 001.033.55l2.394.479a2 2 0 001.958-1.414l.727-2.903a2 2 0 013.156-.085l1.615 2.154a2 2 0 01-1.141 3.513l-2.391.239a2 2 0 00-1.329.694l-1.913 2.426a2 2 0 01-3.15.088l-1.636-2.182z" />
    </svg>
  )
};

const Stack: React.FC = () => {
  return (
    <section id="stack" className="py-32 px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 reveal">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              Stack
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-tight flex items-center gap-6">
              Tools of the Trade.
              <div className="hidden sm:block w-16 h-16 opacity-20">
                <LottieAnimation url="https://assets3.lottiefiles.com/private_files/lf30_8scv8c.json" delay={300} />
              </div>
            </h2>
            <p className="text-xl text-slate-500 max-w-xl font-light">
              A carefully curated selection of technologies that enable me to build high-performance products at speed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm reveal">
          {TECH_STACK.map((tech, index) => (
            <div 
              key={tech.name} 
              className="group bg-white p-10 flex flex-col justify-between min-h-[320px] hover:z-10 transition-all duration-500 hover:bg-slate-50"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                    {TechIconMap[tech.icon] || (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-indigo-400 transition-colors">
                    {tech.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {tech.name}
                </h3>
              </div>

              <div className="space-y-6">
                <div className="h-px w-8 bg-slate-100 group-hover:w-full group-hover:bg-indigo-100 transition-all duration-500" />
                <p className="text-sm text-slate-500 leading-relaxed font-light opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
