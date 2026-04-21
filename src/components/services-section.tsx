"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Landmark,
  TrendingUp,
  Building,
  Globe,
  Calculator,
  Gem,
  ShieldCheck,
  Timer,
  CreditCard,
  Users,
  Briefcase,
  BookOpen,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    title: "Wealth Management",
    icon: <Landmark className="w-7 h-7" />,
    description:
      "Holistic strategies to preserve and grow your assets over time with personalized financial planning.",
    highlights: [
      "Personal Financial Planning",
      "Goal-Based Investment",
      "Net Worth Tracking",
      "Cash Flow Management",
    ],
    color: "from-emerald-500/20 to-teal-500/10",
    accentColor: "text-emerald-500",
  },
  {
    title: "Investment Advisory",
    icon: <TrendingUp className="w-7 h-7" />,
    description:
      "Data-driven insights to maximize your returns while managing risk across diverse portfolios.",
    highlights: [
      "Mutual Fund Advisory",
      "SIP Planning & Optimization",
      "Stock Market Guidance",
      "Portfolio Diversification",
    ],
    color: "from-blue-500/20 to-indigo-500/10",
    accentColor: "text-blue-500",
  },
  {
    title: "Real Estate Advisory",
    icon: <Building className="w-7 h-7" />,
    description:
      "Strategic insights for residential and commercial property investments.",
    highlights: [
      "Property Investment Analysis",
      "Rental Yield Planning",
      "Commercial Guidance",
      "REITs Advisory",
    ],
    color: "from-amber-500/20 to-orange-500/10",
    accentColor: "text-amber-500",
  },
  {
    title: "NRI Investment Services",
    icon: <Globe className="w-7 h-7" />,
    description:
      "Tailored investment and tax solutions designed for non-resident Indians.",
    highlights: [
      "NRE/NRO Account Guidance",
      "Repatriation Planning",
      "NRI Taxation Strategy",
      "India Investment Planning",
    ],
    color: "from-violet-500/20 to-purple-500/10",
    accentColor: "text-violet-500",
  },
  {
    title: "Tax Planning",
    icon: <Calculator className="w-7 h-7" />,
    description:
      "Legally minimize your tax liabilities and maximize capital retention.",
    highlights: [
      "Income Tax Planning",
      "Capital Gains Strategy",
      "Tax Saving Investments",
      "Business Tax Structuring",
    ],
    color: "from-rose-500/20 to-pink-500/10",
    accentColor: "text-rose-500",
  },
  {
    title: "Alternative Investments",
    icon: <Gem className="w-7 h-7" />,
    description:
      "Diversify beyond traditional equities and fixed income with modern instruments.",
    highlights: [
      "Commodities (Gold, Silver)",
      "ETFs & Index Funds",
      "International Investments",
      "Crypto Awareness",
    ],
    color: "from-cyan-500/20 to-sky-500/10",
    accentColor: "text-cyan-500",
  },
  {
    title: "Insurance & Risk",
    icon: <ShieldCheck className="w-7 h-7" />,
    description:
      "Protect your wealth, health, and family from unforeseen events.",
    highlights: [
      "Life Insurance Planning",
      "Health Insurance Advisory",
      "Term vs Investment Plans",
      "Risk Coverage Assessment",
    ],
    color: "from-teal-500/20 to-emerald-500/10",
    accentColor: "text-teal-500",
  },
  {
    title: "Retirement Planning",
    icon: <Timer className="w-7 h-7" />,
    description:
      "Secure a comfortable and financially independent lifestyle post-work.",
    highlights: [
      "Early Retirement Planning",
      "Pension Planning",
      "Corpus Calculation",
      "Withdrawal Strategy",
    ],
    color: "from-orange-500/20 to-amber-500/10",
    accentColor: "text-orange-500",
  },
  {
    title: "Loan & Liability",
    icon: <CreditCard className="w-7 h-7" />,
    description:
      "Strategic debt utilization and optimization to improve your cash flow.",
    highlights: [
      "Home Loan Advisory",
      "Debt Reduction Planning",
      "Loan Restructuring",
      "Credit Score Improvement",
    ],
    color: "from-indigo-500/20 to-blue-500/10",
    accentColor: "text-indigo-500",
  },
  {
    title: "Family & Legacy",
    icon: <Users className="w-7 h-7" />,
    description:
      "Structuring wealth transitions across generations securely.",
    highlights: [
      "Child Education Planning",
      "Wealth Transfer Strategies",
      "Will & Estate Planning",
      "Succession Planning",
    ],
    color: "from-pink-500/20 to-rose-500/10",
    accentColor: "text-pink-500",
  },
  {
    title: "Business Advisory",
    icon: <Briefcase className="w-7 h-7" />,
    description:
      "Financial modeling and strategic capital allocation for growth.",
    highlights: [
      "Business Financial Planning",
      "Profit Optimization",
      "Investment Structuring",
      "Startup Financial Strategy",
    ],
    color: "from-emerald-500/20 to-green-500/10",
    accentColor: "text-emerald-600",
  },
  {
    title: "Financial Education",
    icon: <BookOpen className="w-7 h-7" />,
    description:
      "Empowering you with knowledge to make informed financial decisions.",
    highlights: [
      "1-on-1 Consultation",
      "Portfolio Review",
      "Financial Literacy Sessions",
      "Custom Roadmaps",
    ],
    color: "from-sky-500/20 to-cyan-500/10",
    accentColor: "text-sky-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ServicesSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="py-32 bg-brand-surface dark:bg-brand-dark relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-30 -z-10" />
      <div className="blob bg-brand-accent/8 -top-[20%] -right-[10%] animate-blob" />
      <div className="blob bg-brand-primary-light/8 -bottom-[20%] -left-[10%] animate-blob [animation-delay:4s]" />

      {/* Decorative floating shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-brand-accent/10 rounded-full floating-element pointer-events-none" />
      <div className="absolute bottom-40 left-16 w-20 h-20 border border-brand-accent/10 rounded-2xl rotate-45 floating-element [animation-delay:2s] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent px-5 py-2.5 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
            </span>
            <span className="text-xs font-black uppercase tracking-[0.3em]">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-primary dark:text-white leading-[0.95] tracking-tighter mb-8"
          >
            Comprehensive{" "}
            <span className="text-brand-accent italic">Financial</span>
            <br />
            Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-body dark:text-white/60 leading-relaxed max-w-2xl mx-auto"
          >
            We provide deep institutional expertise across every facet of your
            financial lifecycle. 12 specialized services, one unified strategy.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setExpandedCard(index)}
              onMouseLeave={() => setExpandedCard(null)}
              className="group relative bg-white dark:bg-white/5 rounded-3xl p-7 border border-gray-100/80 dark:border-white/5 hover:border-brand-accent/30 dark:hover:border-brand-accent/30 transition-all duration-500 cursor-pointer overflow-hidden"
              style={{
                boxShadow:
                  expandedCard === index
                    ? "0 25px 60px -12px rgba(0, 168, 107, 0.15)"
                    : "0 4px 20px -4px rgba(10, 37, 64, 0.06)",
              }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
              />

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent to-brand-accent/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-3xl" />

              <div className="relative z-10">
                {/* Icon + Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-brand-surface dark:bg-white/10 group-hover:bg-white dark:group-hover:bg-white/20 group-hover:shadow-lg text-brand-primary dark:text-white group-hover:text-brand-accent transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-3">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-black text-text-secondary/40 dark:text-white/20 tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-brand-primary dark:text-white mb-2 leading-tight tracking-tight group-hover:text-brand-accent dark:group-hover:text-brand-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-body dark:text-white/50 leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Expandable Highlights */}
                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-gray-100/50 dark:border-white/10 space-y-2">
                        {service.highlights.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs text-text-body dark:text-white/60"
                          >
                            <ChevronRight className="w-3 h-3 text-brand-accent shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Learn more link */}
                <div className="flex items-center gap-1 mt-4 text-xs font-bold text-brand-accent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="uppercase tracking-[0.15em]">Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
