
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Twitter', href: PERSONAL_INFO.socials.twitter, icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ) },
    { name: 'LinkedIn', href: PERSONAL_INFO.socials.linkedin, icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
      </svg>
    ) },
    { name: 'GitHub', href: PERSONAL_INFO.socials.github, icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ) }
  ];

  return (
    <footer className="footer-reveal py-24 px-8 bg-white border-t border-slate-100 relative group/footer">
      {/* Gentle reveal glow background */}
      <div className="absolute inset-0 bg-indigo-500/0 group-[.active]:bg-indigo-500/[0.02] transition-colors duration-[3000ms] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-16">
          
          {/* Top Row: Brand & Back to Top */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover/footer:bg-indigo-600 transition-colors duration-500">
                  S
                </div>
              </div>
              <p className="text-sm text-slate-400 font-medium max-w-xs leading-relaxed">
                Building the next generation of digital products with precision and purpose.
              </p>
            </div>

            <button 
              onClick={scrollToTop}
              className="group/top flex items-center gap-3 text-slate-400 hover:text-slate-900 transition-all duration-300"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover/top:tracking-[0.4em] transition-all">Back to top</span>
              <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover/top:bg-slate-900 group-hover/top:text-white transition-all group-hover/top:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
            </button>
          </div>

          {/* Middle Row: Links & Social Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 pt-16 border-t border-slate-50">
            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Navigation</h3>
              <ul className="space-y-4">
                <li><a href="#work" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Selected Work</a></li>
                <li><a href="#about" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Philosophy</a></li>
                <li><a href="#library" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Publications</a></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Social</h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-all duration-500 hover:scale-125 social-flash group/icon"
                    title={social.name}
                  >
                    <div className="group-hover/icon:animate-[bounce-custom_0.6s_ease-out]">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Contact</h3>
              <ul className="space-y-4">
                <li><a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Direct Email</a></li>
                <li><a href="#contact-form" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Project Inquiry</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Status</h3>
              <div className="flex items-center gap-2 group/status">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm text-slate-500 group-hover/status:text-slate-900 transition-colors">Available for Q4 2024</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Copyright */}
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Crafted with precision.
            </p>
            <div className="flex items-center gap-6">
               <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest hover:text-indigo-300 transition-colors cursor-default">Minimalist v2.5</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
