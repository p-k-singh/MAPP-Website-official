import React from "react";
import Link from "next/link";
import { Mail, ExternalLink, ArrowRight, Shield, Globe, Lock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white pt-40 pb-16 overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-30" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-12 lg:col-span-5">
            <Link href="#home" className="text-3xl font-black tracking-tighter mb-10 inline-block group">
              MAPP <span className="font-light text-brand-accent transition-colors group-hover:text-brand-accent-hover">FINANCIAL</span>
            </Link>
            <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-md font-medium">
              We engineer sophisticated financial pathways for the visionary, the ambitious, and the elite. Your capital, refined.
            </p>
            <div className="flex flex-wrap gap-4">
               {[
                 { icon: <Shield size={16} />, text: "Regulated" },
                 { icon: <Lock size={16} />, text: "Secured" },
                 { icon: <Globe size={16} />, text: "Global" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/60">
                    {item.icon}
                    <span>{item.text}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-black text-xs tracking-[0.4em] uppercase mb-10 text-white/40">Ecosystem</h4>
            <ul className="space-y-6 text-sm font-bold">
              <li><Link href="#solutions" className="text-white/60 hover:text-brand-accent transition-all flex items-center group">Analytics Alpha <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" /></Link></li>
              <li><Link href="#solutions" className="text-white/60 hover:text-brand-accent transition-all flex items-center group">Impact Vault <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" /></Link></li>
              <li><Link href="#solutions" className="text-white/60 hover:text-brand-accent transition-all flex items-center group">Strategic Debt <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" /></Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-black text-xs tracking-[0.4em] uppercase mb-10 text-white/40">Intelligence</h4>
            <ul className="space-y-6 text-sm font-bold">
              <li><Link href="#about" className="text-white/60 hover:text-brand-accent transition-all">Founder Insight</Link></li>
              <li><Link href="#contact" className="text-white/60 hover:text-brand-accent transition-all">Venture Careers</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-brand-accent transition-all">Capital Privacy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-black text-xs tracking-[0.4em] uppercase mb-10 text-white/40">Nexus</h4>
            <address className="not-italic text-sm text-white/40 leading-relaxed mb-10 font-medium">
              MAPP Strategic HQ<br />
              Laxmi Nagar District Center<br />
              New Delhi, NCR - 110092
            </address>
            <div className="bg-brand-accent/10 p-6 rounded-2xl border border-brand-accent/20">
               <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-2">Private Secure Email</p>
               <p className="text-sm font-black text-white hover:text-brand-accent transition-colors cursor-pointer">prabhat13585@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/20 text-center md:text-left gap-8">
          <p>© {new Date().getFullYear()} MAPP Financial Solutions. Proprietary Architecture.</p>
          <div className="flex items-center space-x-8">
             <Link href="#" className="hover:text-white transition-colors">Risk Disclosure</Link>
             <Link href="#" className="hover:text-white transition-colors">SEC Compliance</Link>
             <Link href="#" className="hover:text-white transition-colors">AML Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
