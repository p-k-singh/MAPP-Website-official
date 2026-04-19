"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone, Mail, MapPin, Loader2, CheckCircle2, ArrowUpRight } from "lucide-react";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
                { icon: <Phone size={24} />, label: "Direct Line", value: "+91 79996 91340" },
                { icon: <Mail size={24} />, label: "Strategic Inquiry", value: "prabhat13585@gmail.com" },
                { icon: <MapPin size={24} />, label: "HQ", value: "Laxmi Nagar, New Delhi (India)" }
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
            className="lg:col-span-12 xl:col-span-7 bg-white dark:bg-white/5 p-12 lg:p-16 rounded-[3rem] border border-border/50 dark:border-white/5 shadow-premium relative overflow-hidden"
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
                   <h4 className="text-4xl font-black text-brand-primary dark:text-white mb-4 tracking-tighter">Transmission Confirmed.</h4>
                   <p className="text-text-body dark:text-white/60 mb-12 font-medium">Prabhat will contact you for a private briefing within 24 hours.</p>
                   <button onClick={() => setStatus("idle")} className="text-brand-accent font-black uppercase tracking-widest hover:underline text-xs">Return to Dashboard</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="relative group">
                      <input
                        required
                        type="text"
                        placeholder="Your Identity"
                        className="peer w-full bg-transparent border-b-2 border-border/50 py-4 text-xl text-brand-primary dark:text-white focus:border-brand-accent focus:outline-none placeholder:text-text-secondary/30 transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-500 peer-focus:w-full" />
                    </div>
                    <div className="relative group">
                      <input
                        required
                        type="email"
                        placeholder="Corporate Email"
                        className="peer w-full bg-transparent border-b-2 border-border/50 py-4 text-xl text-brand-primary dark:text-white focus:border-brand-accent focus:outline-none placeholder:text-text-secondary/30 transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-500 peer-focus:w-full" />
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <input
                      required
                      type="tel"
                      placeholder="Access Code / Phone"
                      className="peer w-full bg-transparent border-b-2 border-border/50 py-4 text-xl text-brand-primary dark:text-white focus:border-brand-accent focus:outline-none placeholder:text-text-secondary/30 transition-all font-mono"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-500 peer-focus:w-full" />
                  </div>

                  <div className="relative group">
                    <textarea
                      required
                      rows={4}
                      placeholder="Define your objectives..."
                      className="peer w-full bg-transparent border-b-2 border-border/50 py-4 text-xl text-brand-primary dark:text-white focus:border-brand-accent focus:outline-none placeholder:text-text-secondary/30 transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-500 peer-focus:w-full" />
                  </div>
                  
                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-brand-primary dark:bg-brand-accent text-white px-8 py-6 rounded-2xl text-base font-black uppercase tracking-[0.3em] shadow-premium transition-all hover:scale-[1.02] active:scale-98 flex items-center justify-center space-x-4 group overflow-hidden relative"
                    >
                      <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      {status === "loading" ? <Loader2 className="animate-spin" /> : <><span>Transmit Request</span> <ArrowUpRight size={24} /></>}
                    </button>
                    <p className="text-center mt-6 text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] opacity-40">Privacy Secured through AES-256 Encryption</p>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
