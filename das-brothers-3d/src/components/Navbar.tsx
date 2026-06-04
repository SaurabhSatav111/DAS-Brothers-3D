import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X, ArrowRight, PhoneCall } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to style navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Substations", href: "#about" },
    { name: "Milestones", href: "#timeline" },
    { name: "Stats", href: "#stats" },
    { name: "Careers", href: "#careers" }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${
          scrolled 
            ? "bg-[#0a1e3c] py-3 shadow-sm border-neutral-800" 
            : "bg-[#0a1e3c] py-5 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand area */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#ef9f27] border border-neutral-800 shadow-[0_0_15px_rgba(245,166,35,0.1)] group-hover:border-electric-amber/50 transition-all duration-300">
              <Zap className="w-5 h-5 text-white filter drop-shadow-[0_0_4px_rgba(245,166,35,0.7)] group-hover:rotate-12 transition-transform duration-300" />
              {/* Pulsing ring around logo */}
              <div className="absolute inset-0 rounded-xl border border-arc-cyan/20 animate-ping [animation-duration:3s]" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-orbitron font-black text-sm md:text-base tracking-wider text-[#ffffff] group-hover:text-[#ffffff] transition-colors duration-300">
                DAS & BROTHERS
              </span>
              <span className="text-[9px] font-mono text-[#ef9f27] tracking-[0.2em] font-medium leading-none">
                ELECTRICALS PVT LTD
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative font-inter text-sm font-medium text-[rgba(255,255,255,0.85)] hover:text-[#ef9f27] tracking-wide transition-colors duration-300 py-2 group"
              >
                {link.name}
                {/* Electric hover sweep line */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-electric-amber to-arc-cyan origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            ))}
          </div>

          {/* Get a Quote CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact"
              className="relative hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-orbitron text-xs font-bold tracking-wider text-[#0a1e3c] bg-[#ef9f27] hover:bg-[#ef9f27]/90 transition-all duration-300 overflow-hidden group shadow-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                GET A QUOTE <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-800 hover:border-electric-amber/50 hover:bg-neutral-900 text-text-light transition-all duration-300"
            >
              {isOpen ? <X className="w-5 h-5 text-electric-amber" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden bg-[#0a1e3c] flex flex-col justify-center px-8 border-none"
          >
            {/* Grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />

            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  onClick={() => setIsOpen(false)}
                  className="font-orbitron text-xl font-bold tracking-wide text-[rgba(255,255,255,0.85)] hover:text-[#ef9f27] transition-colors duration-300 py-2 border-b border-neutral-900/40"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                className="mt-6 flex flex-col gap-4 items-center"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full max-w-xs py-3.5 rounded-xl font-orbitron text-sm font-bold tracking-widest text-[#0a1e3c] bg-[#ef9f27] hover:bg-[#ef9f27]/90 flex items-center justify-center gap-2"
                >
                  GET A QUOTE <Zap className="w-4 h-4" />
                </a>
                
                <a 
                  href="tel:+91201234567" 
                  className="flex items-center gap-2 font-mono text-xs text-arc-cyan hover:text-text-light transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> +91 20 2749 1987
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
