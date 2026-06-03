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

  return (
    <section 
      id="about" 
      className="sec-light sec-pad"
    >
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto about-grid">
        {/* Left Column: Story & Heading */}
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
        </div>

        {/* Right Column: Timeline / Stat Boxes */}
        <div className="flex flex-col gap-6">
          {timelineData.map((milestone, index) => (
            <div 
              key={index}
              style={{
                background: 'var(--light-bg-2)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                textAlign: 'center'
              }}
            >
              {/* Number: Year */}
              <div 
                style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  fontSize: '2.2rem', 
                  color: 'var(--accent)',
                  fontWeight: 700
                }}
              >
                {milestone.year}
              </div>
              {/* Label: Title / Badge */}
              <div 
                style={{ 
                  fontSize: '0.8rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.08em', 
                  color: 'var(--light-muted)',
                  fontWeight: 600,
                  marginTop: '0.25rem',
                  marginBottom: '0.75rem'
                }}
              >
                {milestone.title} &bull; {milestone.badge}
              </div>
              {/* Description */}
              <p 
                style={{ 
                  fontFamily: "'Source Sans 3', sans-serif", 
                  fontSize: '0.95rem', 
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
    </section>
  );
};

export default About;
