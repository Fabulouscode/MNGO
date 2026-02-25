'use client';

import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/donate', label: 'Donate' },
  { href: '/contact', label: 'Contact' },
];

const programs = [
  'School Screening',
  'Therapy Services',
  'Teacher Training',
  'Inclusive Programs',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3>Msurshima Foundation</h3>
            <p>
              Supporting children with special needs, especially those with autism, 
              through therapy, teacher training, and inclusive education programs 
              across Nigeria.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/share/1AePp8rWdw/?mibextid=wwXIfr" aria-label="Facebook" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/msurshimafoundation?igsh=MWdreGU1a3c1Nng0Ng%3D%3D&utm_source=qr" aria-label="Instagram" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-section">
            <h4>Our Programs</h4>
            <ul className="footer-links">
              {programs.map((program) => (
                <li key={program}>
                  <Link href="/programs">{program}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p>
                <strong>Email:</strong><br />
                msurshimafoundation@gmail.com
              </p>
              <p>
                <strong>Phone:</strong><br />
                0802 506 2486 / 0805 169 8291
              </p>
              <p>
                <strong>Address:</strong><br />
                No: 23 Tokko Phase 3, Jikwoyi, Zanwoyi Street, Abuja
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {currentYear} Msurshima Foundation. All rights reserved.</p>
          <p>For Persons with Special Abilities</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--color-primary-dark);
          color: white;
        }

        .footer-main {
          padding: 4rem 1.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        .footer-section h3 {
          color: white;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .footer-section h4 {
          color: white;
          font-size: 1.125rem;
          margin-bottom: 1.25rem;
        }

        .footer-section p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          line-height: 1.7;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          transition: var(--transition);
        }

        .social-link:hover {
          background: var(--color-primary);
          transform: translateY(-3px);
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: white;
          padding-left: 5px;
        }

        .contact-info p {
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .contact-info strong {
          color: white;
        }

        .footer-bottom {
          background: rgba(0, 0, 0, 0.2);
          padding: 1.5rem;
          text-align: center;
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          margin: 0.25rem 0;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1.5fr;
          }
        }
      `}</style>
    </footer>
  );
}
