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
            <div className="relative group perspective-1000">
              <div className="absolute -inset-6 bg-brand-accent/30 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-premium border-8 border-white dark:border-white/5 transition-transform duration-700 group-hover:scale-[1.02]">
                <img 
                  src="/founder.png" 
                  alt="Prabhat Kumar Singh" 
                  className="object-cover w-full aspect-[4/5] object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-primary/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10 text-white">
                   <p className="text-3xl font-black mb-2 tracking-tighter italic">Prabhat Kumar Singh</p>
                   <p className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.3em]">Chief Executive Officer</p>
                </div>
              </div>

              {/* Overlapping Detail Card */}
              <motion.div 
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.8 }}
                className="absolute -top-10 -right-10 glass p-8 rounded-[2.5rem] shadow-2xl border border-white/50 hidden md:block"
              >
                 <div className="h-14 w-14 bg-brand-accent rounded-full mb-6 flex items-center justify-center text-white shadow-lg glow-emerald">
                    <Sparkles size={28} />
                 </div>
                 <p className="text-3xl font-black text-brand-primary tracking-tighter leading-none mb-1">Elite</p>
                 <p className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">Strategy Grade</p>
              </motion.div>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 mb-16">
               {[
                 { title: "Strategic Alpha", text: "Mathematically modeling growth sectors before they hit the mainstream." },
                 { title: "Risk Mitigation", text: "Sophisticated hedging techniques tailored for individual capital safety." },
                 { title: "Adaptive Tech", text: "Leveraging custom algorithms to ensure high-fidelity execution." },
                 { title: "Legacy Wealth", text: "Structuring long-term generational assets with absolute tax efficiency." }
               ].map((item, i) => (
                 <div key={i} className="group cursor-default">
                    <div className="flex items-center space-x-3 mb-4">
                       <span className="h-1.5 w-6 bg-brand-accent rounded-full transition-all group-hover:w-10" />
                       <p className="font-black text-xl text-brand-primary dark:text-white tracking-tighter">{item.title}</p>
                    </div>
                    <p className="text-sm text-text-body dark:text-white/50 leading-relaxed pl-9">{item.text}</p>
                 </div>
               ))}
            </div>

            <p className="text-lg text-text-body dark:text-white/40 leading-relaxed mb-12 font-medium">
              Prabhat Kumar Singh founded MAPP with a clear objective: to bridge the gap between institutional-grade sophistication and the everyday entrepreneur's need for direct, clear management.
            </p>
            
            <a href="#contact" className="inline-flex items-center justify-center p-0.5 rounded-2xl bg-gradient-to-br from-brand-accent to-brand-primary group overflow-hidden">
               <span className="bg-white dark:bg-brand-dark px-10 py-5 rounded-2xl text-base font-black uppercase tracking-[0.2em] text-brand-primary dark:text-white transition-all group-hover:bg-transparent group-hover:text-white">
                  Meet the Strategist
               </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
