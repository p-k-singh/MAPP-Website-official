"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Loader2, CheckCircle2, User, Target, IndianRupee, Calendar, MessageSquare, Info, Lock, ArrowRight, ChevronDown } from "lucide-react";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentGoal: "",
    budgetRange: "",
    riskTolerance: "Medium",
    investmentHorizon: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-40 bg-white dark:bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-brand-surface dark:bg-brand-dark/20 -z-10" />
      <div className="blob bg-brand-accent/20 top-1/2 left-0 animate-blob" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          <div className="lg:col-span-12 xl:col-span-5">
            <h2 className="text-xs font-black tracking-[0.6em] text-brand-accent uppercase mb-10">Gateway</h2>
            <h3 className="text-5xl md:text-7xl font-black text-brand-primary dark:text-white mb-10 leading-[0.9] tracking-tighter">
              Initiate your <br />
              <span className="text-brand-accent">Excellence.</span>
            </h3>
            <p className="text-xl text-text-body dark:text-white/60 mb-16 leading-relaxed max-w-md font-medium">
              We operate exclusively with clients who seek institutional rigor and elite scaling. Let's discuss your roadmap.
            </p>

            <div className="space-y-12">
              {[
                { icon: <Phone size={24} />, label: "Direct Line", value: "+91 7999-69-1340" },
                { icon: <Phone size={24} />, label: "Secondary Line", value: "+91 7979-90-6417" },
                { icon: <Mail size={24} />, label: "Strategic Inquiry", value: "mappfinancialsolutions@gmail.com" },
                { icon: <CheckCircle2 size={24} />, label: "Availability", value: "24/7 Priority Support" }
              ].map((item, i) => (
                <div key={i} className="flex group cursor-pointer items-center space-x-6">
                  <div className="h-14 w-14 rounded-2xl glass flex items-center justify-center text-brand-accent shadow-premium transition-all group-hover:bg-brand-accent group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] mb-1">{item.label}</p>
                    <p className="text-lg font-black text-brand-primary dark:text-white group-hover:text-brand-accent transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-7 bg-[#0b1c31] dark:bg-[#0b1c31] p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col"
          >
            {/* Inner subtle glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-accent/10 blur-[100px] -z-10" />
            
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-24"
                >
                   <div className="h-24 w-24 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg glow-emerald">
                      <CheckCircle2 className="h-12 w-12 text-brand-accent" />
                   </div>
                   <h4 className="text-4xl font-black text-white mb-4 tracking-tighter">Transmission Confirmed.</h4>
                   <p className="text-white/60 mb-12 font-medium">Prabhat will contact you for a private briefing within 24 hours.</p>
                   <button onClick={() => setStatus("idle")} className="text-brand-accent font-black uppercase tracking-widest hover:underline text-xs">Return to Dashboard</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                   <div className="text-center mb-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Get Your <span className="text-brand-accent">Free</span><br/>Personalized Consultation</h3>
                      <p className="text-white/60 text-sm">Fill the form and our expert will connect with you.</p>
                   </div>

                   {/* Full Name */}
                   <div className="relative flex items-center group">
                      <div className="absolute left-4 text-white/50 group-hover:text-brand-accent transition-colors"><User size={20} /></div>
                      <input required type="text" placeholder="Full Name" className="w-full bg-[#11243e] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-accent focus:outline-none transition-colors placeholder:text-white/40" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                   </div>

                   {/* Email */}
                   <div className="relative flex items-center group">
                      <div className="absolute left-4 text-white/50 group-hover:text-brand-accent transition-colors"><Mail size={20} /></div>
                      <input required type="email" placeholder="Email Address" className="w-full bg-[#11243e] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-accent focus:outline-none transition-colors placeholder:text-white/40" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                   </div>

                   {/* Phone */}
                   <div className="relative flex items-center group">
                      <div className="absolute left-4 text-white/50 group-hover:text-brand-accent transition-colors"><Phone size={20} /></div>
                      <input required type="tel" placeholder="Phone Number" className="w-full bg-[#11243e] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-accent focus:outline-none transition-colors placeholder:text-white/40" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                   </div>

                   {/* Investment Goal */}
                   <div className="relative flex items-center group">
                      <div className="absolute left-4 text-white/50"><Target size={20} /></div>
                      <select required className="w-full bg-[#11243e] border border-white/10 rounded-xl py-4 pl-12 pr-10 text-white focus:border-brand-accent focus:outline-none transition-colors appearance-none cursor-pointer" value={formData.investmentGoal} onChange={(e) => setFormData({...formData, investmentGoal: e.target.value})}>
                         <option value="" disabled hidden className="text-white/40">Investment Goal</option>
                         <option value="Wealth Creation">Wealth Creation</option>
                         <option value="Retirement Planning">Retirement Planning</option>
                         <option value="Tax Saving">Tax Saving</option>
                         <option value="Child Education">Child Education</option>
                      </select>
                      <div className="absolute right-4 text-white/50 pointer-events-none"><ChevronDown size={20} /></div>
                   </div>

                   {/* Budget Range */}
                   <div className="relative flex items-center group">
                      <div className="absolute left-4 text-white/50"><IndianRupee size={20} /></div>
                      <select required className="w-full bg-[#11243e] border border-white/10 rounded-xl py-4 pl-12 pr-10 text-white focus:border-brand-accent focus:outline-none transition-colors appearance-none cursor-pointer" value={formData.budgetRange} onChange={(e) => setFormData({...formData, budgetRange: e.target.value})}>
                         <option value="" disabled hidden className="text-white/40">Investment Budget Range</option>
                         <option value="1L-10L">₹1L - ₹10L</option>
                         <option value="10L-50L">₹10L - ₹50L</option>
                         <option value="50L-1Cr">₹50L - ₹1Cr</option>
                         <option value="1Cr+">₹1Cr+</option>
                      </select>
                      <div className="absolute right-4 text-white/50 pointer-events-none"><ChevronDown size={20} /></div>
                   </div>

                   {/* Risk Tolerance */}
                   <div className="space-y-3 pt-2">
                     <div className="flex items-center text-sm text-white/80 space-x-1 ml-1">
                        <span>Risk Tolerance</span>
                        <Info size={14} className="text-white/40" />
                     </div>
                     <div className="grid grid-cols-3 gap-3">
                        {["Low", "Medium", "High"].map((level) => (
                          <button
                            key={level}
                            type="button"
                            onClick={() => setFormData({...formData, riskTolerance: level})}
                            className={`py-3.5 rounded-xl text-sm font-bold transition-all ${formData.riskTolerance === level ? 'bg-[#0A2540] border border-brand-accent text-white shadow-xl glow-emerald' : 'bg-[#11243e] border border-white/5 text-white/50 hover:bg-[#152e4d] hover:text-white'}`}
                          >
                             {level}
                          </button>
                        ))}
                     </div>
                   </div>

                   {/* Investment Horizon */}
                   <div className="relative flex items-center pt-2 group">
                      <div className="absolute left-4 text-white/50 mt-2"><Calendar size={20} /></div>
                      <select required className="w-full bg-[#11243e] border border-white/10 rounded-xl py-4 pl-12 pr-10 text-white focus:border-brand-accent focus:outline-none transition-colors appearance-none cursor-pointer mt-2" value={formData.investmentHorizon} onChange={(e) => setFormData({...formData, investmentHorizon: e.target.value})}>
                         <option value="" disabled hidden className="text-white/40">Investment Horizon</option>
                         <option value="1-3 Years">1 - 3 Years</option>
                         <option value="3-5 Years">3 - 5 Years</option>
                         <option value="5-10 Years">5 - 10 Years</option>
                         <option value="10+ Years">10+ Years</option>
                      </select>
                      <div className="absolute right-4 text-white/50 mt-2 pointer-events-none"><ChevronDown size={20} /></div>
                   </div>

                   {/* Message / Financial Goals */}
                   <div className="relative flex items-start pt-2 group">
                      <div className="absolute left-4 top-6 text-white/50 group-hover:text-brand-accent transition-colors"><MessageSquare size={20} /></div>
                      <textarea required rows={3} placeholder="Tell us about your financial goals&#10;(e.g. Retirement, Wealth Growth, Child Education...)" className="w-full bg-[#11243e] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-accent focus:outline-none transition-colors placeholder:text-white/40 resize-none text-sm leading-relaxed" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                   </div>

                   {/* Secure Note */}
                   <div className="pt-4 pb-2">
                      <p className="flex justify-center items-center text-white/70 text-xs font-medium text-center">
                         <Lock size={12} className="text-brand-accent mr-2 inline" />
                         Your information is secure and<br className="sm:hidden" /> will never be shared.
                      </p>
                   </div>

                   <button type="submit" disabled={status === "loading"} className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white rounded-xl py-5 px-6 font-bold uppercase tracking-wide flex justify-between items-center transition-all duration-300 shadow-xl hover:shadow-brand-accent/40 active:scale-[0.98]">
                      {status === "loading" ? <Loader2 className="animate-spin mx-auto w-6 h-6" /> : (
                        <>
                          <span className="mx-auto flex-1 text-center pl-6 text-[15px]">GET FREE CONSULTATION</span>
                          <ArrowRight size={20} />
                        </>
                      )}
                   </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
