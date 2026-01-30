
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import LottieAnimation from './LottieAnimation';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- BACKEND LOGIC SIMULATION ---
    // In a production app, you would fetch() to an API endpoint here.
    // For now, we log the data to the console so the host can see it.
    console.log(">>> NEW CONTACT FORM SUBMISSION RECEIVED <<<");
    console.table(formState);
    // --------------------------------

    // Simulate network delay for professional feel
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact-form" className="py-40 px-8 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          {/* Left Column: Context & Alt Contact */}
          <div className="space-y-12 reveal">
            <div className="space-y-6 relative">
              <div className="inline-block px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                Get in Touch
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-tight">
                Let’s start <br />
                <span className="text-indigo-600 flex items-center gap-4">
                  the conversation.
                  <div className="w-16 h-16 opacity-30">
                    <LottieAnimation url="https://assets1.lottiefiles.com/packages/lf20_u0at0z.json" delay={400} />
                  </div>
                </span>
              </h2>
              <p className="text-xl text-slate-500 max-w-md font-light leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, I'm here to help.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-slate-100 reveal delay-200">
              <div className="group">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2 group-hover:text-indigo-600 transition-colors uppercase">Direct Email</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-2xl font-bold text-slate-900 hover:text-indigo-600 transition-colors break-all md:break-normal">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="group">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2 group-hover:text-indigo-600 transition-colors uppercase">Professional Network</p>
                <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="pt-8 reveal delay-400">
              <p className="text-sm text-slate-400 italic font-light">
                Currently available for new opportunities &bull; Responding within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="relative reveal delay-300">
            {isSubmitted ? (
              <div className="bg-indigo-50/50 rounded-[2.5rem] p-12 text-center flex flex-col items-center justify-center min-h-[500px] border border-indigo-100">
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white mb-8 shadow-xl shadow-indigo-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-slate-500 max-w-xs mx-auto font-light">Thanks for reaching out. I’ll review your inquiry and get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-sm font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-10">
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-transparent border-b border-slate-200 py-4 text-xl font-medium focus:border-indigo-600 focus:outline-none transition-colors peer"
                      placeholder=" "
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute left-0 top-4 text-xl font-light text-slate-400 pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-indigo-600 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest"
                    >
                      Your Name
                    </label>
                  </div>

                  <div className="relative group">
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-transparent border-b border-slate-200 py-4 text-xl font-medium focus:border-indigo-600 focus:outline-none transition-colors peer"
                      placeholder=" "
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-0 top-4 text-xl font-light text-slate-400 pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-indigo-600 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest"
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="relative group">
                    <textarea 
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-transparent border-b border-slate-200 py-4 text-xl font-medium focus:border-indigo-600 focus:outline-none transition-colors peer resize-none"
                      placeholder=" "
                    />
                    <label 
                      htmlFor="message" 
                      className="absolute left-0 top-4 text-xl font-light text-slate-400 pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-indigo-600 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest"
                    >
                      How can I help you?
                    </label>
                  </div>
                </div>

                <div className="relative group/cta w-full">
                  {/* Subtle Rotating Ring */}
                  <div className="absolute inset-[-12px] border border-dashed border-indigo-200 rounded-[2.5rem] animate-slow-rotate pointer-events-none opacity-0 group-hover/cta:opacity-100 transition-opacity duration-1000 group-hover/cta:border-indigo-400/50" />
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full px-10 py-6 bg-slate-900 text-white rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-indigo-600 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-slate-100 flex items-center justify-center gap-4 group relative z-10 overflow-hidden"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
