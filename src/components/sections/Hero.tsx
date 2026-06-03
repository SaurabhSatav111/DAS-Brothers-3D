import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, ChevronDown } from "lucide-react";

export const Hero: React.FC = () => {
  const words = "Empowering Maharashtra Since 1987".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const
      }
    }
  };

  return (
    <section 
      id="home" 
      style={{
        minHeight: '100vh',
        backgroundImage: "url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}
      className="flex flex-col justify-center items-start text-left px-6 md:px-12 lg:px-24 overflow-hidden pt-20"
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cta-btn {
          border: 2px solid var(--accent);
          color: var(--accent) !important;
          background: transparent;
          padding: 12px 30px;
          border-radius: var(--radius);
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .cta-btn:hover {
          background: var(--accent);
          color: #000000 !important;
        }
        .secondary-btn {
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: #ffffff !important;
          background: transparent;
          padding: 12px 30px;
          border-radius: var(--radius);
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-decoration: none;
        }
        .secondary-btn:hover {
          background: #ffffff;
          color: #000000 !important;
          border-color: #ffffff;
        }
      `}</style>

      {/* Background dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(7,13,20,0.88) 0%, rgba(13,17,23,0.72) 60%, rgba(245,158,11,0.12) 100%)',
        zIndex: 0
      }} />

      {/* Content wrapper stacked above the background */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', color: '#ffffff' }} className="w-full flex flex-col justify-center items-start">
        {/* Live Grid indicator badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-success-live/20 bg-success-live/5 text-[10px] md:text-xs font-mono text-success-live mb-6 tracking-widest shadow-[0_0_15px_rgba(57,255,20,0.1)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-live opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success-live"></span>
          </span>
          LIVE GRID CONNECTED: Pune Infrastructure Hub
        </motion.div>

        {/* Main Title Heading - Word by word reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full"
        >
          <h1 
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              fontWeight: 700,
              animation: 'fadeUp 0.7s ease forwards',
              color: '#ffffff'
            }}
            className="tracking-tight leading-[1.08] mb-6"
          >
            {words.map((word, idx) => (
              <span key={idx} className="inline-block mr-3 md:mr-5">
                {word === "Maharashtra" || word === "1987" ? (
                  <span style={{ color: 'var(--accent)' }}>
                    {word}
                  </span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>

          {/* Subtext description */}
          <motion.p
            variants={wordVariants}
            style={{
              animation: 'fadeUp 0.9s ease forwards',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
            className="font-inter text-base md:text-xl text-text-light/75 leading-relaxed max-w-2xl mb-10"
          >
            Specialist Electrical EPC Contractors. Engineering high-voltage substations, complete HT/LT networks, and precision power panels for Pune's leading industrial grids.
          </motion.p>

          {/* Action Call to Buttons */}
          <motion.div
            variants={wordVariants}
            style={{
              animation: 'fadeUp 1.1s ease forwards',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#services"
              className="cta-btn"
            >
              OUR SERVICES <Zap className="w-4 h-4 fill-current" />
            </a>

            <a
              href="#about"
              className="secondary-btn"
            >
              VIEW PROJECTS <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating metrics grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.0, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-5xl border-t border-neutral-900/60 pt-8"
        >
          {[
            { num: "37+", label: "YEARS OF TRUST" },
            { num: "5+", label: "SUBSTATIONS BUILT" },
            { num: "10K+", label: "HT/LT JOINTS" },
            { num: "62", label: "SKILLED ENGINEERS" }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-mono text-xl md:text-3xl font-black text-arc-cyan tracking-wider">
                {stat.num}
              </span>
              <span className="text-[10px] md:text-xs font-orbitron font-semibold tracking-widest text-text-light/50 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Animated downward bouncing scroll indicator */}
      <div style={{ position: 'relative', zIndex: 1 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <motion.span 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-xs font-mono text-text-light/35 tracking-widest"
        >
          SCROLL FOR COPPERS
        </motion.span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-electric-amber" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
