"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Target, 
  BarChart3, 
  Layers, 
  Eye, 
  ShieldAlert, 
  PieChart, 
  Handshake, 
  HeadphonesIcon, 
  Lightbulb, 
  Flag,
  ArrowRight
} from "lucide-react";

const reasons = [
  {
    title: "Personalized Financial Strategies",
    description: "Tailored plans based on individual goals, income, and risk profile",
    icon: <Target className="w-8 h-8" />
  },
  {
    title: "Data-Driven Advice",
    description: "Backed by research, analytics, and proven financial principles",
    icon: <BarChart3 className="w-8 h-8" />
  },
  {
    title: "End-to-End Solutions",
    description: "Covers all aspects from tax planning to wealth creation",
    icon: <Layers className="w-8 h-8" />
  },
  {
    title: "Complete Transparency",
    description: "No hidden charges or biased recommendations",
    icon: <Eye className="w-8 h-8" />
  },
  {
    title: "Risk Management First",
    description: "Focus on protecting wealth before growing it",
    icon: <ShieldAlert className="w-8 h-8" />
  },
  {
    title: "Multi-Asset Expertise",
    description: "Guidance across equity, mutual funds, real estate, and more",
    icon: <PieChart className="w-8 h-8" />
  },
  {
    title: "Long-Term Relationship",
    description: "Focus on building lifelong client partnerships",
    icon: <Handshake className="w-8 h-8" />
  },
  {
    title: "Quick & Dedicated Support",
    description: "Timely assistance and proactive updates",
    icon: <HeadphonesIcon className="w-8 h-8" />
  },
  {
    title: "Simplified Guidance",
    description: "Easy-to-understand financial strategies",
    icon: <Lightbulb className="w-8 h-8" />
  },
  {
    title: "Goal-Oriented Approach",
    description: "Strategies aligned with life goals like retirement, wealth, or assets",
    icon: <Flag className="w-8 h-8" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0A2540]/5 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] -ml-64 -mb-64 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-4"
          >
            Why Choose MAPP Financial Solutions?
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-6 leading-tight"
          >
            Your Trusted Partner for Smart Financial Growth
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We don't just manage money; we build robust strategies to protect and grow your legacy with complete transparency.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`
                group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm 
                hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                flex flex-col h-full relative overflow-hidden
                ${index >= 5 ? 'lg:col-span-1' : ''}
                ${(index === 3 || index === 4) && 'md:col-span-1 lg:col-span-1'}
                ${(index === 0 || index === 1 || index === 2) && 'md:col-span-1 lg:col-span-1'}
              `}
            >
              {/* Subtle hover background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="text-[#0A2540] group-hover:text-[#D4AF37] transition-colors duration-300 mb-6 bg-[#F8FAFC] w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:shadow-md">
                {reason.icon}
              </div>
              
              <h4 className="text-xl font-bold text-[#0A2540] mb-3 leading-snug">
                {reason.title}
              </h4>
              
              <p className="text-gray-600 text-sm leading-relaxed mt-auto relative z-10">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold bg-[#0A2540] text-white rounded-lg hover:bg-[#113254] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
