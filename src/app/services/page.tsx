"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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
  CheckCircle2
} from "lucide-react";

// The 12 structured services based on the requirement
const services = [
  {
    title: "Wealth Management & Financial Planning",
    icon: <Landmark size={28} />,
    description: "Holistic strategies to preserve and grow your assets over time.",
    items: [
      "Personal Financial Planning",
      "Goal-Based Investment Planning",
      "Net Worth Tracking",
      "Cash Flow Management"
    ]
  },
  {
    title: "Investment Advisory",
    icon: <TrendingUp size={28} />,
    description: "Data-driven insights to maximize your returns while managing risk.",
    items: [
      "Mutual Fund Advisory",
      "SIP Planning & Optimization",
      "Stock Market Investing Guidance",
      "Portfolio Diversification"
    ]
  },
  {
    title: "Real Estate Advisory",
    icon: <Building size={28} />,
    description: "Strategic insights for residential and commercial property investments.",
    items: [
      "Property Investment Analysis",
      "Rental Yield Planning",
      "Commercial vs Residential Guidance",
      "REITs Advisory"
    ]
  },
  {
    title: "NRI Investment Services",
    icon: <Globe size={28} />,
    description: "Tailored investment and tax solutions for non-resident Indians.",
    items: [
      "NRE/NRO Account Guidance",
      "Repatriation Planning",
      "NRI Taxation Strategy",
      "India Investment Planning"
    ]
  },
  {
    title: "Tax Planning & Optimization",
    icon: <Calculator size={28} />,
    description: "Legally minimize your tax liabilities and maximize capital retention.",
    items: [
      "Income Tax Planning",
      "Capital Gains Strategy",
      "Tax Saving Investments",
      "Business Tax Structuring"
    ]
  },
  {
    title: "Alternative Investments",
    icon: <Gem size={28} />,
    description: "Diversify beyond traditional equities and fixed income.",
    items: [
      "Commodities (Gold, Silver)",
      "ETFs & Index Funds",
      "International Investments",
      "Crypto Awareness"
    ]
  },
  {
    title: "Insurance & Risk Management",
    icon: <ShieldCheck size={28} />,
    description: "Protect your wealth, health, and family from unforeseen events.",
    items: [
      "Life Insurance Planning",
      "Health Insurance Advisory",
      "Term vs Investment Plans",
      "Risk Coverage Assessment"
    ]
  },
  {
    title: "Retirement Planning",
    icon: <Timer size={28} />,
    description: "Secure a comfortable and financially independent lifestyle post-work.",
    items: [
      "Early Retirement Planning",
      "Pension Planning",
      "Retirement Corpus Calculation",
      "Withdrawal Strategy"
    ]
  },
  {
    title: "Loan & Liability Management",
    icon: <CreditCard size={28} />,
    description: "Strategic debt utilization and optimization to improve cash flow.",
    items: [
      "Home Loan Advisory",
      "Debt Reduction Planning",
      "Loan Restructuring",
      "Credit Score Improvement"
    ]
  },
  {
    title: "Family & Legacy Planning",
    icon: <Users size={28} />,
    description: "Structuring wealth transitions across generations securely.",
    items: [
      "Child Education Planning",
      "Wealth Transfer Strategies",
      "Will & Estate Planning",
      "Succession Planning"
    ]
  },
  {
    title: "Business & Entrepreneur Advisory",
    icon: <Briefcase size={28} />,
    description: "Financial modeling and strategic capital allocation for growth.",
    items: [
      "Business Financial Planning",
      "Profit Optimization",
      "Investment Structuring",
      "Startup Financial Strategy"
    ]
  },
  {
    title: "Financial Education & Consultation",
    icon: <BookOpen size={28} />,
    description: "Empowering you with knowledge to make informed financial decisions.",
    items: [
      "1-on-1 Consultation",
      "Portfolio Review",
      "Financial Literacy Sessions",
      "Custom Financial Roadmaps"
    ]
  }
];

// Configuration for staggered animations
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

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen text-[#0A2540]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-[#0A2540] text-white relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[100px]" />
        
        <div className="container-wide mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-sm font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-6">Our Services</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Comprehensive Financial Solutions Tailored to Your Needs
            </h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              We provide deep institutional expertise across every facet of your financial lifecycle. Our strategies are built on discipline, transparency, and a long-term vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                {/* Gold Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#F1D570] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                {/* Icon Box */}
                <div className="h-16 w-16 rounded-xl bg-[#0A2540]/5 group-hover:bg-[#0A2540] group-hover:text-[#D4AF37] text-[#0A2540] flex items-center justify-center mb-6 transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-[#0A2540] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Sub-services list */}
                <ul className="space-y-3 mt-auto relative z-10">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mr-3 opacity-80" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0A2540] text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Structure Your Financial Future?</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
              Schedule a private briefing with our strategists to explore how our institutional approach can optimize your wealth roadmap.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-[#D4AF37] text-[#0A2540] rounded-lg hover:bg-[#E2C051] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Book a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
