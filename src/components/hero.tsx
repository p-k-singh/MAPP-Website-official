"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, HeartHandshake, ChevronDown, Activity, Globe, TrendingUp, Star } from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "./animated-counter";
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const chartData = [
  { value: 10000 },
  { value: 10200 },
  { value: 10100 },
  { value: 10500 },
  { value: 10450 },
  { value: 10900 },
  { value: 11200 },
  { value: 11800 },
  { value: 12100 },
  { value: 12480 },
];

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
            
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg border-t border-border/50 dark:border-white/5 pt-10">
               <div>
                  <p className="text-2xl font-black text-brand-primary dark:text-white">
                    <AnimatedCounter value={5} suffix=" Cr+" />
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Assets Managed</p>
               </div>
               <div>
                  <p className="text-2xl font-black text-brand-primary dark:text-white">
                    <AnimatedCounter value={18.87} suffix="%" decimals={2} />
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Avg. Return</p>
               </div>
               <div>
                  <p className="text-2xl font-black text-brand-primary dark:text-white">
                    <AnimatedCounter value={75} suffix="+" />
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
            {/* Premium Fintech Card Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="relative group perspective-1000 w-full max-w-[420px]"
            >
               {/* Soft animated background shadow */}
               <div className="absolute -inset-2 bg-gradient-to-tr from-brand-accent/20 via-brand-primary-light/10 to-brand-accent/20 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-700" />
               
               {/* Card Body */}
               <div className="relative glass bg-white/95 dark:bg-brand-dark/95 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,168,107,0.1)] border border-white/60 dark:border-white/10 overflow-hidden transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(0,168,107,0.15)] flex flex-col gap-6">
                  
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                     <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 flex flex-shrink-0 items-center justify-center bg-brand-surface dark:bg-white/5 rounded-2xl">
                           <Activity size={20} className="text-brand-accent" />
                        </div>
                        <div>
                           <div className="flex items-center space-x-2">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                              </span>
                              <span className="text-[10px] font-black text-brand-primary dark:text-white uppercase tracking-widest">Active Index</span>
                           </div>
                           <p className="text-[9px] font-bold text-text-secondary mt-0.5">Updated 2 min ago</p>
                        </div>
                     </div>
                     <div className="px-2 py-1 bg-brand-accent/10 rounded-lg border border-brand-accent/20">
                        <span className="text-[8px] font-black uppercase text-brand-accent tracking-[0.2em]">AI-Optimized</span>
                     </div>
                  </div>

                  {/* Main Highlight */}
                  <div>
                     <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">Strategy Alpha</p>
                     <div className="flex items-end justify-between">
                        <p className="text-5xl font-black text-brand-primary dark:text-white tracking-tighter">
                          +24.8<span className="text-2xl text-brand-primary/50 dark:text-white/50">%</span>
                        </p>
                        <div className="flex items-center mb-1">
                           <TrendingUp size={16} className="text-brand-accent mr-1" />
                           <span className="text-xs font-black text-brand-accent">+24.8%</span>
                        </div>
                     </div>
                     <div className="w-full bg-brand-surface dark:bg-white/5 rounded-full h-1 mt-4 overflow-hidden relative">
                        <motion.div 
                          className="absolute left-0 top-0 h-full bg-brand-accent" 
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                        />
                     </div>
                  </div>

                  {/* Graphic / Outcome */}
                  <div className="p-4 bg-brand-surface dark:bg-white/5 rounded-2xl relative overflow-hidden group/graph">
                     <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-brand-accent/10 to-transparent opacity-0 group-hover/graph:opacity-100 transition-opacity duration-700" />
                     <div className="h-16 w-full mb-3 -mx-2">
                       <ResponsiveContainer width="100%" height="100%">
                         <AreaChart data={chartData}>
                           <Area type="monotone" dataKey="value" stroke="#00A86B" strokeWidth={3} fill="url(#colorValue)" />
                           <defs>
                             <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                               <stop offset="5%" stopColor="#00A86B" stopOpacity={0.3}/>
                               <stop offset="95%" stopColor="#00A86B" stopOpacity={0}/>
                             </linearGradient>
                           </defs>
                         </AreaChart>
                       </ResponsiveContainer>
                     </div>
                     <div className="relative z-10 flex justify-between items-center text-[10px] font-bold text-text-secondary">
                        <span>If you invested ₹10,000</span>
                        <span className="text-brand-accent font-black text-xs flex items-center">₹12,480 <ArrowRight size={10} className="ml-1" /></span>
                     </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                     <div className="px-3 py-2.5 bg-brand-surface dark:bg-white/5 rounded-xl border border-border/40 dark:border-white/5 flex flex-col justify-center">
                        <span className="text-[9px] font-bold text-text-secondary uppercase mb-1">Stability</span>
                        <span className="text-sm font-black text-brand-primary dark:text-white">Grade A</span>
                     </div>
                     <div className="px-3 py-2.5 bg-[#E6F6ED] dark:bg-brand-accent/10 rounded-xl border border-brand-accent/20 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-brand-accent/20 to-transparent rounded-bl-full" />
                        <span className="text-[9px] font-bold text-brand-accent uppercase mb-1 relative z-10">Execution</span>
                        <span className="text-sm font-black text-brand-accent relative z-10">99.9%</span>
                     </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-between px-1">
                     <div className="flex items-center text-[10px] font-bold text-text-secondary">
                        <ShieldCheck size={12} className="mr-1 text-brand-primary/60 dark:text-white/60" />
                        Secure & Encrypted
                     </div>
                     <div className="flex items-center text-[10px] font-bold text-text-secondary">
                        <Star size={10} className="fill-brand-accent text-brand-accent mr-0.5" />
                        <Star size={10} className="fill-brand-accent text-brand-accent mr-0.5" />
                        <Star size={10} className="fill-brand-accent text-brand-accent mr-0.5" />
                        <Star size={10} className="fill-brand-accent text-brand-accent mr-0.5" />
                        <Star size={10} className="fill-brand-accent text-brand-accent mr-2" />
                        4.9 (10k+)
                     </div>
                  </div>

                  {/* CTA Button */}
                  <Link href="#contact" className="w-full relative group/btn overflow-hidden rounded-xl bg-gradient-to-r from-brand-accent to-brand-primary text-white font-black uppercase tracking-[0.2em] text-[10px] py-4 shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex justify-center glow-emerald">
                     <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 rounded-xl" />
                     <span className="relative z-10">Start Investing</span>
                  </Link>
               </div>
            </motion.div>
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
