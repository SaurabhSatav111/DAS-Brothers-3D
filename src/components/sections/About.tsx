import React from "react";

export const About: React.FC = () => {
  const timelineData = [
    {
      year: "1987",
      title: "The Founding Spark",
      desc: "Founded in Chikhali, Pune as a proprietary electrical contracting firm. Initiated with low-tension wiring contracts for local manufacturing workshops.",
      badge: "Estd. Pune"
    },
    {
      year: "2000",
      title: "HT Licensing & Expansion",
      desc: "Secured Class-A contractor license. Commenced heavy industrial high-tension (HT) terminations and distribution network setups up to 22kV.",
      badge: "HT Licensing"
    },
    {
      year: "2010",
      title: "Substation Engineering",
      desc: "Built our first outdoor 33kV substation. Incorporated as Das & Brothers Electricals Pvt Ltd, onboarding 30+ full-time testing engineers.",
      badge: "Pvt Ltd status"
    },
    {
      year: "2020",
      title: "Panel Erection & Automation",
      desc: "Inaugurated dedicated fabrication panel assembly units. Standardized state-of-the-art MCC, APFC, and PLC automated panels.",
      badge: "Fabrication Unit"
    },
    {
      year: "Present",
      title: "Empowering Maharashtra",
      desc: "Trusted EPC grid partner with 62+ professionals, 10,000+ completed joint operations, and active substation maintenance contracts across the state.",
      badge: "62+ Team members"
    }
  ];

  const statsData = [
    { num: "37+", label: "Years" },
    { num: "62+", label: "Engineers" },
    { num: "10K+", label: "Joints" },
    { num: "5+", label: "Substations" }
  ];

  return (
    <section 
      id="about" 
      style={{ background: '#f8f6f1' }}
      className="sec-light sec-pad"
    >
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto about-grid">
        {/* Left Column: Story, Heading & Stats Grid */}
        <div>
          <h2 className="sec-title">
            Empowering <span>Maharashtra</span> Since 1987
          </h2>
          <div className="gold-bar" />
          <p 
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '1rem',
              lineHeight: 1.9,
              color: 'var(--light-muted)'
            }}
          >
            From humble beginnings to building Maharashtra's critical power infrastructure, our journey is defined by engineering precision and electrical reliability.
          </p>

          {/* 2x2 Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {statsData.map((stat, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'var(--light-bg-2)', 
                  border: '1px solid var(--border-light)', 
                  borderRadius: 'var(--radius)', 
                  padding: '1.25rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.25rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
                }}
              >
                <span 
                  style={{ 
                    fontFamily: "'Playfair Display', serif", 
                    fontSize: '2.2rem', 
                    fontWeight: 700, 
                    color: 'var(--accent)',
                    lineHeight: 1
                  }}
                >
                  {stat.num}
                </span>
                <span 
                  style={{ 
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: '0.8rem', 
                    color: 'var(--light-muted)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.08em', 
                    fontWeight: 600 
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Proper Vertical Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
          {/* Vertical Timeline Guide Line */}
          <div 
            style={{ 
              position: 'absolute', 
              left: '10px', 
              top: '12px', 
              bottom: '12px', 
              width: '2px', 
              background: 'var(--border-light)' 
            }} 
          />

          <div className="flex flex-col gap-8">
            {timelineData.map((milestone, index) => (
              <div 
                key={index}
                style={{ position: 'relative' }}
              >
                {/* Dot marker */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    left: '-35px', 
                    top: '8px', 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    background: 'var(--accent)', 
                    border: '2px solid #f8f6f1',
                    zIndex: 2
                  }} 
                />

                {/* Year */}
                <div 
                  style={{ 
                    fontFamily: "'Playfair Display', serif", 
                    fontSize: '1.4rem', 
                    color: 'var(--accent)',
                    fontWeight: 700,
                    lineHeight: '1.2'
                  }}
                >
                  {milestone.year}
                </div>

                {/* Header (Title & Badge) */}
                <div className="flex flex-wrap items-center gap-2 mt-1 mb-2">
                  <span 
                    style={{ 
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: '1.1rem', 
                      fontWeight: 700, 
                      color: 'var(--light-text)' 
                    }}
                  >
                    {milestone.title}
                  </span>
                  <span 
                    style={{ 
                      fontSize: '0.7rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.05em', 
                      color: 'var(--light-muted)', 
                      background: 'var(--light-bg-2)', 
                      border: '1px solid var(--border-light)', 
                      padding: '2px 8px', 
                      borderRadius: '20px', 
                      fontWeight: 600 
                    }}
                  >
                    {milestone.badge}
                  </span>
                </div>

                {/* Description */}
                <p 
                  style={{ 
                    fontFamily: "'Source Sans 3', sans-serif", 
                    fontSize: '0.92rem', 
                    lineHeight: '1.6', 
                    color: 'var(--light-muted)' 
                  }}
                >
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
