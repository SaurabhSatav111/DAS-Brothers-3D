import React from "react";
import { Compass, Network, Cable, Cpu, AlertTriangle, ShieldCheck } from "lucide-react";

interface ServicesProps {
  hoveredService: number | null;
  onHoverService: (index: number | null) => void;
}

export const Services: React.FC<ServicesProps> = ({ hoveredService, onHoverService }) => {
  const servicesData = [
    {
      title: "Electrical Design",
      desc: "Custom engineering layout designs, CAD blueprints, system protection coordination, and load calculation sheets.",
      icon: Compass
    },
    {
      title: "Substation Construction",
      desc: "Turnkey erection & commissioning of 11kV / 22kV / 33kV substations, power transformers, and switchyard gantries.",
      icon: Network
    },
    {
      title: "HT & LT Works",
      desc: "High Tension & Low Tension underground cable laying, straight jointing, end termination, and overhead line structures.",
      icon: Cable
    },
    {
      title: "Panel Fabrication",
      desc: "Manufacturing custom electric control panels, power distribution boards (PDB), motor control centers (MCC), and APFC panels.",
      icon: Cpu
    },
    {
      title: "Emergency Services",
      desc: "24/7 emergency breakdown troubleshooting, fault location trace testing, transformer oil filtration, and rapid restoration.",
      icon: AlertTriangle
    },
    {
      title: "Installation & Commissioning",
      desc: "Final testing parameters validation, safety statutory inspection approvals, and full energization sequence execution.",
      icon: ShieldCheck
    }
  ];

  return (
    <section 
      id="services" 
      className="sec-dark2 sec-pad"
    >
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .service-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-dark);
          border-radius: var(--radius);
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
        }
        .service-card:hover {
          background: rgba(245, 158, 11, 0.06);
          border-color: rgba(245, 158, 11, 0.35);
          transform: translateY(-5px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div>
          <span className="text-xs font-mono text-[var(--accent)] tracking-[0.3em] uppercase block mb-3">
            Capabilities & EPC Solutions
          </span>
          <h2 className="sec-title">
            Wired for Excellence
          </h2>
          <div className="gold-bar" />
          <p 
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '1rem',
              lineHeight: 1.9,
              color: 'var(--dark-muted)'
            }}
          >
            Hover on cards to inspect our high-voltage electrical grid capabilities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="services-grid">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={index}
                className="service-card"
                style={{
                  borderColor: hoveredService === index ? 'rgba(245, 158, 11, 0.5)' : 'var(--border-dark)'
                }}
                onMouseEnter={() => onHoverService(index)}
                onMouseLeave={() => onHoverService(null)}
              >
                {/* Service Icon */}
                <div className="flex items-center gap-2 mb-3" style={{ color: 'var(--accent)' }}>
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Gold Accent */}
                <div style={{ width: '40px', height: '3px', background: 'var(--accent)', marginBottom: '1.2rem' }} />

                {/* Card Title */}
                <h3 
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: 'var(--dark-text)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem'
                  }}
                >
                  {service.title}
                </h3>

                {/* Card Description */}
                <p 
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: 'var(--dark-muted)',
                    lineHeight: 1.7,
                    fontSize: '0.95rem'
                  }}
                >
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
