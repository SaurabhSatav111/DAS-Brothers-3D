import React from "react";
import { Globe } from "lucide-react";
import dbeplLogo from "../../assets/dbepl-logo.png";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--dark-bg-3)',
        borderTop: '3px solid var(--accent)',
        padding: '3rem 8% 2rem'
      }}
      className="relative z-10"
    >
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
        .footer-link {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 0.9rem;
          color: var(--dark-muted);
          display: block;
          margin-bottom: 0.6rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: var(--accent);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="footer-grid">
          {/* Column 1 — Logo + tagline */}
          <div>
            <a href="#home" className="flex items-center gap-2.5" style={{ textDecoration: 'none' }}>
              <img
                src={dbeplLogo}
                alt="DBEPL Logo"
                className="h-14 w-auto object-contain"
              />
            </a>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.88rem', color: 'var(--dark-muted)', marginTop: '0.75rem', lineHeight: '1.6' }}>
              Class-A Electrical EPC Contractors. Erecting heavy power substations and industrial grids across Maharashtra since 1987.
            </p>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
              Quick Links
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="#services" className="footer-link">Substation Construction</a></li>
              <li><a href="#services" className="footer-link">HT/LT Cable Jointing</a></li>
              <li><a href="#services" className="footer-link">Control Panel Assemblies</a></li>
              <li><a href="#services" className="footer-link">Grid Erection & Design</a></li>
              <li><a href="#about" className="footer-link">About Legacy</a></li>
              <li><a href="#stats" className="footer-link">Grid Metrics</a></li>
              <li><a href="#careers" className="footer-link">Careers & Workshops</a></li>
              <li><a href="#contact" className="footer-link">Request Callback</a></li>
            </ul>
          </div>

          {/* Column 3 — Contact & Licensing */}
          <div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
              Contact & Licensing
            </span>
            <div className="flex flex-col gap-3">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+912027491987" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.9rem', color: 'var(--dark-muted)', textDecoration: 'none', transition: 'color 0.3s' }} className="hover:text-[var(--accent)]">
                  +91 20 2749 1987
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@dasbrothers.co.in" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.9rem', color: 'var(--dark-muted)', textDecoration: 'none', transition: 'color 0.3s' }} className="hover:text-[var(--accent)]">
                  info@dasbrothers.co.in
                </a>
              </div>

              {/* Licensing */}
              <div className="mt-2 flex flex-col gap-2" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.85rem', color: 'var(--dark-muted)' }}>
                <span className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  CLASS-A MSEDCL LICENSE
                </span>
                <span className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  CEA SAFETY CODE COMPLIANT
                </span>
                <span>GSTIN: 27AACCD4481P1ZX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <hr style={{ borderColor: 'var(--border-dark)', margin: '2.5rem 0 1.5rem' }} />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--dark-muted)', paddingTop: '1.5rem' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span>
              &copy; {currentYear} Das & Brothers Electricals Pvt Ltd. All rights reserved.
            </span>
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'var(--dark-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', transition: 'color 0.3s ease' }}
                className="hover:text-[var(--accent)]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                LINKEDIN
              </a>
              <a
                href="https://dasbrothers.co.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'var(--dark-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', transition: 'color 0.3s ease' }}
                className="hover:text-[var(--accent)]"
              >
                <Globe className="w-3.5 h-3.5" /> OFFICIAL DOMAIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;