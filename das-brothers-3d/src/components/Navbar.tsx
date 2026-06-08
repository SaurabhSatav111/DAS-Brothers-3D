import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import dbeplLogo from "../assets/dbepl-logo.png";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: scrolled ? 'rgba(13, 17, 23, 0.98)' : '#0D1117',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          padding: '0 8%',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
        className="w-full"
      >
        <div className="w-full flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={dbeplLogo}
              alt="DBEPL Logo"
              className="h-12 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center" style={{ gap: '2rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#a0aec0',
                  textDecoration: 'none'
                }}
                className="hover:text-[#E87722] transition-colors duration-300 py-2"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="relative hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-orbitron text-xs font-bold tracking-wider text-deep-grid-navy bg-electric-amber hover:bg-electric-amber-dark transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                GET A QUOTE <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-800 hover:border-electric-amber/50 hover:bg-[#0F3460]/50 text-text-light transition-all duration-300"
            >
              {isOpen ? <X className="w-5 h-5 text-electric-amber" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: '#0D1117' }}
            className="fixed inset-0 z-30 lg:hidden flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6 text-center">

              <div className="flex justify-center mb-4">
                <img
                  src={dbeplLogo}
                  alt="DBEPL Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>

              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  onClick={() => setIsOpen(false)}
                  style={{ color: '#a0aec0', textDecoration: 'none' }}
                  className="font-orbitron text-xl font-bold tracking-wide hover:text-[#E87722] transition-colors duration-300 py-2 border-b border-neutral-900/40"
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
                  className="w-full max-w-xs py-3.5 rounded-xl font-orbitron text-sm font-bold tracking-widest text-deep-grid-navy bg-electric-amber hover:bg-electric-amber-dark flex items-center justify-center gap-2"
                >
                  GET A QUOTE <Zap className="w-4 h-4" />
                </a>

                <a
                  href="tel:+91201234567"
                  className="flex items-center gap-2 font-mono text-xs text-[#a0aec0] hover:text-[#E87722] transition-colors"
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