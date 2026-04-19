"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, HeartHandshake, ChevronDown, Activity, Globe } from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "./animated-counter";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[110vh] flex items-center bg-white dark:bg-brand-dark overflow-hidden pt-20">
      {/* Premium Background Layer */}
      <div className="absolute inset-0 bg-grid opacity-40 -z-10" />
      <div className="blob bg-brand-accent/30 -top-20 -right-20 animate-blob" />
      <div className="blob bg-brand-primary-light/20 -bottom-40 -left-20 animate-blob [animation-delay:2s]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 rounded-full glass px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary dark:text-brand-accent mb-10 border border-brand-accent/20"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(0,168,107,1)]" />
              <span>Institutional Grade Solutions</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-brand-primary dark:text-white leading-[0.9] mb-10">
              Smart Finance.<br />
              <span className="relative inline-block">
                Scalable <span className="text-brand-accent">Growth.</span>
                <motion.svg 
                  viewBox="0 0 350 20" 
                  className="absolute -bottom-4 left-0 w-full h-auto text-brand-accent opacity-50"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                >
                  <motion.path 
                    d="M 5 15 Q 175 25 345 15" 
                    fill="transparent" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                  />
                </motion.svg>
              </span><br />
              Real Results.
            </h1>
            
            <p className="text-xl text-text-body dark:text-white/60 max-w-2xl leading-relaxed font-medium mb-12">
              Transforming individual ambition into generational wealth with refined, entrepreneur-led strategies and sophisticated market analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="#contact"
                className="bg-brand-accent hover:bg-brand-accent-hover text-white px-10 py-5 rounded-2xl text-base font-black uppercase tracking-[0.2em] shadow-xl transition-all hover:scale-105 active:scale-95 glow-emerald flex items-center group"
              >
                Get Started
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
              <Link
                href="#solutions"
                className="glass dark:bg-white/5 dark:text-white px-10 py-5 rounded-2xl text-base font-black uppercase tracking-[0.2em] border border-border shadow-soft transition-all hover:bg-brand-surface"
              >
                Explore
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg border-t border-border/50 dark:border-white/5 pt-10">
               <div>
                  <p className="text-2xl font-black text-brand-primary dark:text-white">
                    <AnimatedCounter value={75} suffix="M+" />
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Assets Managed</p>
               </div>
               <div>
                  <p className="text-2xl font-black text-brand-primary dark:text-white">
                    <AnimatedCounter value={12.4} suffix="%" decimals={1} />
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Avg. Return</p>
               </div>
               <div>
                  <p className="text-2xl font-black text-brand-primary dark:text-white">
                    <AnimatedCounter value={500} suffix="+" />
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Global Clients</p>
               </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 relative h-full flex items-center justify-center lg:justify-end"
          >
            {/* Primary Asymmetric Card */}
            <div className="relative group perspective-1000">
              <div className="absolute -inset-4 bg-brand-accent/20 rounded-[3rem] blur-2xl group-hover:bg-brand-accent/30 transition-all" />
              <div className="relative glass bg-white rounded-[3rem] p-10 shadow-premium border border-white/50 w-full max-w-[400px] floating-element">
                  <div className="flex items-center justify-between mb-10">
                     <span className="p-3 bg-brand-primary text-white rounded-2xl">
                        <Activity size={24} />
                     </span>
                     <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">Active Index</span>
                  </div>
                  
                  <div className="space-y-6 mb-10">
                     <div className="flex justify-between items-end">
                        <p className="text-xs font-bold text-text-secondary uppercase">Strategy Alpha</p>
                        <p className="text-3xl font-black text-brand-primary">+24.8%</p>
                     </div>
                     <div className="w-full bg-brand-surface rounded-full h-3 overflow-hidden">
                        <motion.div 
                          className="h-full bg-brand-accent" 
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1.5, delay: 1 }}
                        />
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 bg-brand-surface rounded-2xl">
                        <p className="text-[10px] font-bold text-text-secondary mb-1">STABILITY</p>
                        <p className="text-lg font-black text-brand-primary">Grade A</p>
                     </div>
                     <div className="p-4 bg-brand-accent text-white rounded-2xl shadow-lg">
                        <p className="text-[10px] font-bold mb-1 opacity-70">EXECUTION</p>
                        <p className="text-lg font-black">99.9%</p>
                     </div>
                  </div>
              </div>

              {/* Overlapping Floating Element */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -bottom-10 -left-10 glass rounded-3xl p-6 shadow-2xl border border-white/50 z-20 hidden md:block"
              >
                 <div className="flex items-center space-x-4">
                    <span className="h-10 w-10 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent">
                       <Globe size={20} />
                    </span>
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Client Coverage</p>
                       <p className="text-sm font-black text-brand-primary">12+ Countries</p>
                    </div>
                 </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-primary/20 dark:text-white/20 hidden md:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
