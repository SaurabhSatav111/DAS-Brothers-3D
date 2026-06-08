import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Briefcase, Award, TrendingUp } from "lucide-react";
import substationMaintenance from "../../assets/substation_maintenance.png";
import electricalPanel from "../../assets/electrical_panel.png";

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  const timelineData = [
    {
      year: "1987",
      title: "The Founding Spark",
      desc: "Founded in Chikhali, Pune as a proprietary electrical contracting firm. Initiated with low-tension wiring contracts for local manufacturing workshops.",
      icon: Calendar,
      badge: "Estd. Pune"
    },
    {
      year: "2000",
      title: "HT Licensing & Expansion",
      desc: "Secured Class-A contractor license. Commenced heavy industrial high-tension (HT) terminations and distribution network setups up to 22kV.",
      icon: Briefcase,
      badge: "HT Licensing"
    },
    {
      year: "2010",
      title: "Substation Engineering",
      desc: "Built our first outdoor 33kV substation. Incorporated as Das & Brothers Electricals Pvt Ltd, onboarding 30+ full-time testing engineers.",
      icon: Award,
      badge: "Pvt Ltd status"
    },
    {
      year: "2020",
      title: "Panel Erection & Automation",
      desc: "Inaugurated dedicated fabrication panel assembly units. Standardized state-of-the-art MCC, APFC, and PLC automated panels.",
      icon: TrendingUp,
      badge: "Fabrication Unit"
    },
    {
      year: "Present",
      title: "Empowering Maharashtra",
      desc: "Trusted EPC grid partner with 62+ professionals, 10,000+ completed joint operations, and active substation maintenance contracts across the state.",
      icon: Calendar,
      badge: "62+ Team members"
    }
  ];

  const headingText = "Empowering Maharashtra Since 1987";

  const letterContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.03 } }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden z-10"
      style={{ background: '#0a0f1e' }}
    >
      <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none -z-20" />

      <div className="max-w-7xl mx-auto">

        {/* Title Block */}
        <div ref={titleRef} className="mb-16 text-center lg:text-left max-w-3xl">
          <span className="text-xs font-mono text-arc-cyan tracking-[0.35em] uppercase block mb-3">
            Our Legacy & Story
          </span>
          <motion.div
            variants={letterContainerVariants}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center lg:justify-start font-orbitron font-extrabold text-3xl md:text-5xl text-white tracking-tight mb-4"
          >
            {headingText.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap mr-3 last:mr-0">
                {word.split("").map((char, charIndex) => (
                  <motion.span key={charIndex} variants={letterVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.div>
          <p className="font-inter text-[#a0aec0] text-sm md:text-base leading-relaxed">
            From humble beginnings to building Maharashtra's critical power infrastructure, our journey is defined by engineering precision and electrical reliability.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Photos */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col gap-6">

            <div className="h-[350px] lg:h-[450px] rounded-2xl border border-neutral-800 overflow-hidden group relative isolate z-0">
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded backdrop-blur-sm bg-black/50 border border-white/20 text-[10px] font-mono text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-arc-cyan" />
                ENGINEERING STANDARDS
              </div>
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded backdrop-blur-sm bg-black/50 border border-electric-amber/40 text-[10px] font-mono text-electric-amber">
                SUBSTATION MAINTENANCE
              </div>
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${substationMaintenance})` }} />
            </div>

            <div className="h-[350px] lg:h-[450px] rounded-2xl border border-neutral-800 overflow-hidden group relative isolate z-0">
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded backdrop-blur-sm bg-black/50 border border-white/20 text-[10px] font-mono text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-amber" />
                POWER INFRASTRUCTURE
              </div>
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded backdrop-blur-sm bg-black/50 border border-arc-cyan/40 text-[10px] font-mono text-arc-cyan">
                PANEL FABRICATIONS
              </div>
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${electricalPanel})` }} />
            </div>

          </div>

          {/* Right: Timeline */}
          <div className="lg:col-span-7 relative">
            <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-gradient-to-b from-arc-cyan via-arc-cyan to-arc-cyan/20" />

            <div className="flex flex-col gap-12">
              {timelineData.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                    className="relative pl-10 md:pl-12 group"
                  >
                    <div className="absolute left-[3px] top-1.5 w-6 h-6 rounded-full bg-[#0a0f1e] border-2 border-arc-cyan flex items-center justify-center z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-arc-cyan" />
                    </div>

                    {/* Card — dark themed */}
                    <div className="p-6 md:p-8 rounded-[14px] border border-arc-cyan/20 bg-[#0F3460]/30 hover:border-arc-cyan/60 hover:bg-[#0F3460]/50 transition-all duration-300 relative">

                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-5 h-5 text-arc-cyan" />
                          <span className="font-mono text-2xl md:text-3xl font-black text-arc-cyan tracking-wider">
                            {milestone.year}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded border border-arc-cyan/30 bg-[#0D1117] text-[9px] font-mono text-arc-cyan/80 tracking-wider">
                          {milestone.badge}
                        </span>
                      </div>

                      <h3 className="font-orbitron font-extrabold text-base md:text-lg text-white mb-2">
                        {milestone.title}
                      </h3>

                      <p className="font-inter text-xs md:text-sm text-[#a0aec0] leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;