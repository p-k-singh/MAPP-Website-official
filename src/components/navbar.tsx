"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const sections = ["home", "solutions", "about", "insights", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Solutions", href: "#solutions", id: "solutions" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-500 ${
        isScrolled ? "glass rounded-full py-2 px-6 shadow-glass" : "bg-transparent py-4 px-2"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="#home" className="text-xl font-bold tracking-tighter text-brand-primary dark:text-white group">
          MAPP <span className="font-light text-brand-accent transition-colors group-hover:text-brand-accent-hover">FINANCIAL</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-1 md:flex">
          <div className="flex items-center bg-brand-surface/50 dark:bg-white/5 rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeSection === link.id 
                  ? "text-white" 
                  : "text-text-secondary hover:text-brand-primary dark:text-white/60 dark:hover:text-white"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavHighlight"
                    className="absolute inset-0 bg-brand-primary dark:bg-brand-accent rounded-full -z-10 shadow-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center ml-4 space-x-4">
            <ThemeToggle />
            <Link
              href="#contact"
              className="bg-brand-accent hover:bg-brand-accent-hover text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg hover:scale-105 active:scale-95 glow-emerald"
            >
              Consult
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-brand-primary dark:text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="glass absolute left-0 right-0 mt-4 rounded-3xl p-8 shadow-2xl dark:bg-brand-dark md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-black uppercase tracking-[0.2em] ${activeSection === link.id ? "text-brand-accent font-black" : "text-brand-primary dark:text-white"}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-brand-accent py-5 text-center font-black text-white rounded-2xl uppercase tracking-[0.3em] glow-emerald"
              >
                Book
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
