import React from "react";
import { Zap, Cable, Clock, CheckCircle2 } from "lucide-react";

import serviceSubstation from "../../assets/service-substation.png";
import serviceCabling from "../../assets/service-cabling.png";
import serviceEmergency from "../../assets/service-emergency.png";

export const ServicesDetail: React.FC = () => {
  const details = [
    {
      id: "substation-epc",
      title: "Substation EPC Erection",
      category: "POWER DISTRIBUTION",
      subtitle: "33kV / 22kV / 11kV Turnkey Substation Setup",
      desc: "We deliver comprehensive engineering, procurement, and construction (EPC) services for outdoor and indoor substations. From civil foundations to structural steel gantries, power transformer installation, and protection control panel setups, we ensure grid compatibility and safety.",
      specs: [
        "Erection of Transformers up to 10 MVA",
        "Erection of structural steel gantries & towers",
        "Installation of SF6 circuit breakers & isolators",
        "Laying of substation grounding/earthing grids",
        "Liaison approvals with electricity boards & MSEDCL"
      ],
      icon: Zap,
      accentColor: "#E87722",
      image: serviceSubstation,
      imageLabel: "POWER INFRASTRUCTURE"
    },
    {
      id: "cable-jointing",
      title: "HT & LT Cabling Works",
      category: "CABLE ENGINEERING",
      subtitle: "Underground Cabling, Jointing & End Terminations",
      desc: "Our team excels in laying High Tension (HT) and Low Tension (LT) XLPE/PVC cables. We carry out precision cable straight jointing and end terminations using heat-shrinkable kits, backed by insulation resistance (IR) and High Potential (HiPot) safety testing.",
      specs: [
        "Laying of XLPE cables up to 33kV",
        "Heat-shrinkable straight through joints",
        "Indoor & outdoor cable end terminations",
        "High Potential (HiPot) testing & insulation profiling",
        "Cable trenching, piping, and backfilling operations"
      ],
      icon: Cable,
      accentColor: "#00D4FF",
      image: serviceCabling,
      imageLabel: "HT/LT CABLE WORKS"
    },
    {
      id: "emergency-restoration",
      title: "24/7 Emergency Services",
      category: "GRID RELIABILITY",
      subtitle: "Rapid Breakdown Troubleshooting & Power Restoration",
      desc: "Grid shutdowns hurt productivity. Our 24/7 rapid response unit is equipped with advanced diagnostic tools to trace underground faults, filter deteriorated transformer oil, replace blown fuses/insulators, and safely restore power to your premises.",
      specs: [
        "24-Hour emergency industrial call-out support",
        "Underground cable fault location & trace testing",
        "On-site transformer oil filtration & BDV testing",
        "Rapid replacement of damaged structure materials",
        "Temporary backup grid setups & safety clearances"
      ],
      icon: Clock,
      accentColor: "#39FF14",
      image: serviceEmergency,
      imageLabel: "RAPID RESPONSE UNIT"
    }
  ];

  return (
    <section
      id="services-detail"
      className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden z-10 bg-[#f0f4f8]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {details.map((detail, index) => {
          const Icon = detail.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={detail.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Text Area */}
              <div className={`lg:col-span-6 flex flex-col ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded bg-substation-dark border border-neutral-800 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5" style={{ color: detail.accentColor }} />
                  </div>
                  <span className="text-[10px] md:text-xs font-mono px-2 py-0.5 rounded border border-neutral-800 bg-substation-dark text-arc-cyan tracking-widest">
                    {detail.category}
                  </span>
                </div>

                <h3 className="font-orbitron font-extrabold text-2xl md:text-4xl text-text-light mb-2">
                  {detail.title}
                </h3>

                <h4 className="font-orbitron text-xs md:text-sm font-semibold text-electric-amber mb-6 tracking-wide">
                  {detail.subtitle}
                </h4>

                <p className="font-inter text-xs md:text-sm text-text-light/60 leading-relaxed mb-6">
                  {detail.desc}
                </p>

                <ul className="flex flex-col gap-3">
                  {detail.specs.map((spec, specIdx) => (
                    <li key={specIdx} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: detail.accentColor }}
                      />
                      <span className="font-inter text-xs md:text-sm text-text-light/80">
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Photo Area — replaces SVG blueprint */}
              <div
                className={`lg:col-span-6 h-[260px] md:h-[340px] rounded-2xl overflow-hidden shadow-xl relative group ${isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                style={{
                  border: `1.5px solid ${detail.accentColor}30`
                }}
              >
                {/* Label badge */}
                <div
                  className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono tracking-widest"
                  style={{
                    background: 'rgba(15,20,40,0.85)',
                    border: `1px solid ${detail.accentColor}50`,
                    color: detail.accentColor
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: detail.accentColor }}
                  />
                  {detail.imageLabel}
                </div>

                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 z-10 rounded-tl" style={{ borderColor: detail.accentColor }} />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 z-10 rounded-tr" style={{ borderColor: detail.accentColor }} />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 z-10 rounded-bl" style={{ borderColor: detail.accentColor }} />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 z-10 rounded-br" style={{ borderColor: detail.accentColor }} />

                {/* Photo */}
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark overlay at bottom for depth */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesDetail;