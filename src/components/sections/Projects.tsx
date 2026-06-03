import React from "react";

export const Projects: React.FC = () => {
  const projectsData = [
    {
      name: "33/11kV Bhosari Industrial Substation",
      desc: "Complete turnkey design, structural steel gantry erection, and commissioning of a 10MVA outdoor substation equipped with SF6 vacuum circuit breakers.",
      src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80"
    },
    {
      name: "22kV HT Underground Cabling & Jointing",
      desc: "Excavation, laying, and straight jointing of 5km XLPE high-tension cables across the Chikhali manufacturing corridor with HiPot parameters testing.",
      src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80"
    },
    {
      name: "Custom Automated MCC Control Panels",
      desc: "Design, custom metal fabrication, and testing of motor control centers and APFC panels to optimize power factors for heavy metallurgy units.",
      src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"
    }
  ];

  return (
    <section 
      id="projects" 
      className="sec-light2 sec-pad"
    >
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 2.5rem;
        }
        .project-card {
          background: var(--light-bg);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-col: column;
          flex-direction: column;
        }
        .project-card:hover {
          box-shadow: 0 12px 36px rgba(0,0,0,0.1);
          transform: translateY(-5px);
        }
        .project-image {
          width: 100%;
          height: 210px;
          object-fit: cover;
        }
        .project-body {
          padding: 1.25rem 1.5rem;
          flex-grow: 1;
        }
        .project-title {
          font-family: 'Playfair Display', serif;
          color: var(--light-text);
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .project-desc {
          font-family: 'Source Sans 3', sans-serif;
          color: var(--light-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div>
          <span className="text-xs font-mono text-[var(--accent)] tracking-[0.3em] uppercase block mb-3">
            Milestones & Executed Works
          </span>
          <h2 className="sec-title">
            Our Featured <span>Projects</span>
          </h2>
          <div className="gold-bar" />
        </div>

        {/* Cards Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
            >
              <img 
                src={project.src} 
                alt={project.name} 
                className="project-image"
              />
              <div className="project-body">
                <h3 className="project-title">
                  {project.name}
                </h3>
                <p className="project-desc">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
