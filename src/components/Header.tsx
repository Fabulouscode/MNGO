'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Link href="/" className="logo">
          <Image 
            src="/logo-center.jpg" 
            alt="Msurshima Foundation" 
            width={50} 
            height={50}
            priority
            style={{ borderRadius: '8px' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/donate" className="btn btn-primary donate-btn">
          Donate Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="/donate" 
                className="btn btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          background: rgba(250, 253, 247, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-text {
          font-weight: 700;
          font-size: 1rem;
          color: var(--color-primary-dark);
          display: none;
        }

        @media (min-width: 480px) {
          .logo-text {
            display: block;
          }
        }

        .nav-links {
          display: none;
          list-style: none;
          gap: 2.5rem;
        }

        .nav-link {
          font-weight: 500;
          color: var(--color-text);
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-primary);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .donate-btn {
          display: none;
        }

        .menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }

        .hamburger {
          position: relative;
          width: 24px;
          height: 2px;
          background: var(--color-primary);
          transition: all 0.3s ease;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background: var(--color-primary);
          transition: all 0.3s ease;
        }

        .hamburger::before {
          top: -8px;
        }

        .hamburger::after {
          top: 8px;
        }

        .hamburger.open {
          background: transparent;
        }

        .hamburger.open::before {
          top: 0;
          transform: rotate(45deg);
        }

        .hamburger.open::after {
          top: 0;
          transform: rotate(-45deg);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          max-width: 400px;
          height: 100vh;
          background: white;
          padding: 6rem 2rem 2rem;
          box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
          transition: right 0.3s ease;
          z-index: 1000;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-nav-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-nav-link {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--color-text);
          display: block;
          padding: 0.5rem 0;
          border-bottom: 1px solid #eee;
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }

          .donate-btn {
            display: inline-flex;
          }

          .menu-toggle {
            display: none;
          }

          .mobile-menu {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
