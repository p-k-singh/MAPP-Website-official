"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Building2, Target, ChevronRight, PieChart, BarChart3, Fingerprint } from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "./animated-counter";

export const Solutions = () => {
  const solutions = [
    {
      title: "Wealth Management",
      description: "Sophisticated asset allocation tailored to high-net-worth individual profiles.",
      icon: <PieChart className="h-6 w-6" />,
      tag: "Strategy",
      offset: "lg:-mt-12"
    },
    {
      title: "Impact Investing",
      description: "Directing capital toward ventures that generate measurable social and financial returns.",
      icon: <TrendingUp className="h-6 w-6" />,
      tag: "Growth",
      offset: "lg:mt-12"
    },
    {
      title: "Business Advisory",
      description: "Full-stack financial engineering for startups and scaling small businesses.",
      icon: <Building2 className="h-6 w-6" />,
      tag: "Scale",
      offset: "lg:-mt-12"
    },
    {
      title: "Private Planning",
      description: "Discrete, customized planning for long-term generational wealth preservation.",
      icon: <Fingerprint className="h-6 w-6" />,
      tag: "Premium",
      offset: "lg:mt-12"
    },
  ];

  return (
    <section id="solutions" className="py-40 bg-white dark:bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20 -z-10" />
      <div className="blob bg-brand-primary-light/10 bottom-0 right-0 animate-blob" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black tracking-[0.5em] text-brand-accent uppercase mb-8"
          >
            Digital Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-brand-primary dark:text-white leading-[1.1]"
          >
            Intelligent Solutions for the Modern Professional.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 lg:pt-12">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`group relative bg-brand-surface dark:bg-white/5 p-10 rounded-[2.5rem] border border-transparent hover:border-brand-accent/20 transition-all duration-500 hover:shadow-premium ${item.offset}`}
            >
              <div className="mb-10 flex justify-between items-start">
                 <div className="p-4 rounded-2xl bg-white dark:bg-brand-primary/40 text-brand-accent shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all transform group-hover:rotate-6 duration-500">
                   {item.icon}
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-white/50 dark:bg-white/5 rounded-full text-text-secondary">{item.tag}</span>
              </div>
              
              <h3 className="text-2xl font-black text-brand-primary dark:text-white mb-6 leading-tight">{item.title}</h3>
              <p className="text-text-body dark:text-white/60 mb-10 text-base leading-relaxed h-[80px]">
                {item.description}
              </p>
              
              <Link
                href="#contact"
                className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-brand-primary dark:text-brand-accent group/link"
              >
                Learn More
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>

              {/* Decorative Subtle Shadow Glow on Hover */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-brand-accent opacity-0 group-hover:opacity-[0.03] transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between p-12 glass rounded-[3rem] border border-border/50 dark:border-white/5 shadow-premium"
        >
          <div className="text-center lg:text-left mb-8 lg:mb-0">
             <p className="text-4xl font-black text-brand-primary dark:text-white mb-2">Ready to optimize your portfolio?</p>
             <p className="text-text-body dark:text-white/60 font-medium">Join 75+ successful entrepreneurs worldwide.</p>
          </div>
          <Link
            href="#contact"
            className="bg-brand-primary text-white dark:bg-white dark:text-brand-primary px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all text-sm"
          >
            Request Access
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
