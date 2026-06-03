import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export const CtaBanner: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Substation",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", projectType: "Substation", message: "" });
    }, 4000);
  };

  return (
    <section 
      id="contact" 
      className="sec-dark sec-pad relative overflow-hidden z-10"
    >
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        .contact-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .contact-icon {
          color: var(--accent);
          width: 1.4rem;
          height: 1.4rem;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .contact-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--dark-muted);
          display: block;
          margin-bottom: 0.25rem;
        }
        .contact-value {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 1rem;
          color: var(--dark-text);
          font-weight: 600;
        }
        .contact-link {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 1rem;
          color: var(--dark-text);
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .contact-link:hover {
          color: var(--accent);
        }
        .contact-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-dark);
          border-radius: var(--radius);
          padding: 2rem;
        }
        .contact-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-dark);
          border-radius: var(--radius);
          color: var(--dark-text);
          font-family: 'Source Sans 3', sans-serif;
          font-size: 0.9rem;
          transition: border-color 0.3s ease;
          outline: none;
        }
        .contact-input:focus {
          border-color: var(--accent);
        }
        .contact-submit {
          width: 100%;
          padding: 1rem;
          background: var(--accent);
          color: #000000;
          border: none;
          border-radius: var(--radius);
          font-weight: 600;
          font-family: 'Source Sans 3', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }
        .contact-submit:hover {
          background: var(--accent-dark);
        }
        .contact-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>

      <div className="max-w-7xl mx-auto contact-grid">
        {/* Left Column: Contact Info */}
        <div>
          <span className="text-xs font-mono text-[var(--accent)] tracking-[0.35em] uppercase block mb-3">
            Power Your Project
          </span>
          <h2 className="sec-title">
            Get an EPC Quote
          </h2>
          <div className="gold-bar" />
          <p 
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '1rem',
              lineHeight: 1.9,
              color: 'var(--dark-muted)',
              marginBottom: '2.5rem'
            }}
          >
            Discuss your electrical grid requirements with our expert technicians. From design approvals to complete turnkey commissioning in Maharashtra.
          </p>

          <div>
            {/* Phone */}
            <div className="contact-row">
              <Phone className="contact-icon" />
              <div>
                <span className="contact-label">PHONE CONNECTION</span>
                <a href="tel:+912027491987" className="contact-link">
                  +91 20 2749 1987
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="contact-row">
              <Mail className="contact-icon" />
              <div>
                <span className="contact-label">EMAIL ENQUIRIES</span>
                <a href="mailto:info@dasbrothers.co.in" className="contact-link">
                  info@dasbrothers.co.in
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="contact-row">
              <MapPin className="contact-icon" />
              <div>
                <span className="contact-label">SUBSTATION OFFICE</span>
                <span className="contact-value">
                  Sector 10, PCNTDA, Chikhali, Pune,<br />
                  Maharashtra - 411019, India.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form & Map Card */}
        <div className="contact-card">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] font-bold tracking-wider text-text-light/75">
                  CONTACT NAME
                </label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Enter name"
                  className="contact-input"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] font-bold tracking-wider text-text-light/75">
                  EMAIL ADDRESS
                </label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="Enter email"
                  className="contact-input"
                />
              </div>
            </div>

            {/* Project Type */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] font-bold tracking-wider text-text-light/75">
                PROJECT CATEGORY
              </label>
              <select 
                value={formState.projectType}
                onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                className="contact-input appearance-none cursor-pointer"
              >
                <option value="Substation">Substation Construction (11k/33kV)</option>
                <option value="Cabling">Underground HT/LT Cabling</option>
                <option value="Panel">Control Panel Fabrication</option>
                <option value="Maintenance">Annual Maintenance Contract (AMC)</option>
                <option value="Other">Other Grid Requirements</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] font-bold tracking-wider text-text-light/75">
                SPECIFIC GRID REQUIREMENTS
              </label>
              <textarea 
                rows={3}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Describe your project scope..."
                className="contact-input resize-none"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={submitted}
              className="contact-submit"
            >
              {submitted ? (
                <>
                  QUOTE REQUEST TRANSMITTED <CheckCircle className="w-4 h-4" />
                </>
              ) : (
                <>
                  SUBMIT ENQUIRY <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            {/* Success Message */}
            {submitted && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded border border-success-live/20 bg-success-live/5 text-success-live text-center text-xs font-mono tracking-wider"
              >
                TRANSMISSION SUCCESS: Grid coordinator will reply within 4 hours.
              </motion.div>
            )}
          </form>

          {/* Google Maps iframe */}
          <div className="mt-6">
            <iframe
              title="Substation Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.273167198754!2d73.79234857597148!3d18.651786565158226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e67272719f%3A0x600c0f68d6ff84b5!2sPCNTDA%20Sector%2010%2C%20Chikhali%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717387200000!5m2!1sen!2sin"
              style={{ width: '100%', height: '280px', borderRadius: 'var(--radius)', border: 'none' }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
