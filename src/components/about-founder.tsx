"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Award, BookOpen, Lightbulb, Target, Sparkles } from "lucide-react";

export const AboutFounder = () => {
  return (
    <section id="about" className="py-40 bg-brand-surface dark:bg-brand-dark/30 relative overflow-hidden">
      {/* Background Blobs for specific section glow */}
      <div className="blob bg-brand-accent/20 -top-40 left-10 animate-blob" />
      <div className="blob bg-brand-primary-light/10 bottom-0 right-20 animate-blob [animation-delay:3s]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-12 xl:col-span-5 relative"
          >
            <div className="relative">
              <div className="relative flex items-end w-full mb-8 isolate mt-8 sm:mt-0">
                 {/* Soft Glow Background behind the main card */}
                 <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px] pointer-events-none z-[-1]" />
                 
                 {/* Main Layout Container */}
                 {/* Main Layout Container */}
                 <div className="relative w-full grid grid-cols-[1.5fr_1fr] sm:grid-cols-[1.6fr_1fr] gap-3 sm:gap-6 items-start pb-10">
                     
                     {/* Foreground Main Card Container */}
                     <div className="relative w-full z-20">
                         {/* Foreground Image Card */}
                         <div className="relative w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,30,60,0.3)] dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] border border-border/50 dark:border-white/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_30px_60px_-12px_rgba(0,168,107,0.2)] group bg-[#0A2540]">
                            <img 
                               src="/founder.png" 
                               alt="Prabhat Kr Singh" 
                               className="object-cover w-full aspect-[4/5] object-top transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                            {/* Premium Bottom Gradient */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/90 to-transparent pointer-events-none" />
                            
                            <div className="absolute bottom-5 left-4 sm:left-6 pr-2 text-left z-20">
                               <h4 className="text-lg sm:text-2xl font-black mb-2 tracking-tighter leading-none text-white shadow-sm">Prabhat Kr<br/>Singh</h4>
                               <span className="inline-block px-2 sm:px-3 py-1 sm:py-1.5 text-[8px] sm:text-[9px] font-bold text-brand-accent uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-sm leading-none">CEO & Strategist</span>
                            </div>
                         </div>

                         {/* External Floating Detail Card - Overlaps the left edge */}
                         <motion.div 
                           initial={{ scale: 0, opacity: 0 }}
                           whileInView={{ scale: 1, opacity: 1 }}
                           viewport={{ once: true }}
                           transition={{ type: "spring", delay: 0.6 }}
                           className="absolute top-8 sm:top-12 -left-4 sm:-left-8 glass bg-white/5 backdrop-blur-2xl p-4 sm:p-5 rounded-3xl shadow-2xl border border-white/20 hidden sm:block z-30"
                         >
                            <div className="h-12 w-12 bg-white/60 dark:bg-[#A8D3BE] rounded-full mb-3 flex items-center justify-center text-[#00A86B] dark:text-[#0A5F38] shadow-sm">
                               <Sparkles size={24} />
                            </div>
                            <p className="text-2xl font-black text-white tracking-tighter leading-none mb-1 drop-shadow-sm">Elite</p>
                            <p className="text-[8px] font-black text-white/50 uppercase tracking-widest drop-shadow-sm">Strategy Grade</p>
                         </motion.div>
                     </div>

                     {/* Second Independent Card (Co-Founder) - Automatically smaller */}
                     <div className="relative w-full translate-y-10 sm:translate-y-16 rounded-[1.25rem] sm:rounded-[1.75rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,30,60,0.3)] dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] border border-border/50 dark:border-white/10 z-10 transition-all duration-500 ease-out hover:-translate-y-2 hover:-translate-y-[calc(-2rem-8px)] sm:hover:-translate-y-[calc(-3rem-8px)] hover:shadow-[0_30px_60px_-12px_rgba(0,168,107,0.2)] group bg-[#0A2540]">
                        <img 
                           src="/founder2.png.jpeg" 
                           alt="Co-Founder" 
                           className="object-cover w-full aspect-[4/5] object-top transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                        {/* Premium Bottom Gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/80 to-transparent pointer-events-none" />
                        
                        <div className="absolute bottom-5 left-4 pr-2 text-left z-20">
                           <h4 className="text-base sm:text-xl font-bold mb-2 tracking-tight text-white shadow-sm">Co-Founder</h4>
                           <span className="inline-block px-2 sm:px-2.5 py-1 text-[7px] sm:text-[8px] font-bold text-white uppercase tracking-widest bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-sm leading-none">Leadership</span>
                        </div>
                     </div>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-12 xl:col-span-7"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 text-brand-accent mb-10"
            >
              <Target size={18} />
              <span className="text-xs font-black uppercase tracking-[0.4em]">The Leadership</span>
            </motion.div>
            
            <h3 className="text-5xl md:text-7xl font-black text-brand-primary dark:text-white mb-10 leading-[0.9] tracking-tighter">
              A Builder's Mindset. <br />
              <span className="text-brand-accent opacity-60">Global Vision.</span>
            </h3>
            
            <div className="relative mb-12 group">
              <Quote className="absolute -top-10 -left-12 h-20 w-20 text-brand-accent/10 opacity-50 transition-transform group-hover:scale-110" />
              <p className="text-2xl md:text-3xl text-brand-primary/80 dark:text-white/90 font-medium italic leading-[1.3] pl-4 border-l-4 border-brand-accent">
                "Modern finance isn't hidden in spreadsheets; it's built on transparency, adaptive logic, and the courage to scale when others stay static."
              </p>
            </div>


            <p className="text-lg text-text-body dark:text-white/40 leading-relaxed mb-12 font-medium">
              Prabhat Kumar Singh founded MAPP with a clear objective: to bridge the gap between institutional-grade sophistication and the everyday entrepreneur's need for direct, clear management.
            </p>
            
            <a href="#contact" className="inline-flex items-center justify-center p-0.5 rounded-2xl bg-gradient-to-br from-brand-accent to-brand-primary group overflow-hidden">
               <span className="bg-white dark:bg-brand-dark px-10 py-5 rounded-2xl text-base font-black uppercase tracking-[0.2em] text-brand-primary dark:text-white transition-all group-hover:bg-transparent group-hover:text-white">
                  Meet the Founder
               </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
