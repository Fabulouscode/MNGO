'use client';

import { useState } from 'react';
import Link from 'next/link';

const impactItems = [
  { icon: '📚', stat: '₦10,000', label: 'Provides a year of educational materials' },
  { icon: '🛠️', stat: '₦30,000', label: 'Funds complete vocational training' },
  { icon: '❤️', stat: '₦25,000', label: 'Covers 6 months of therapy sessions' },
  { icon: '🏠', stat: '₦50,000', label: 'Supports a family for one year' },
];

const accountDetails = {
  accountName: 'Msuurshima Foundation For Persons With Special Abilities',
  bank: 'Moniepoint MFB',
  accountNumber: '6293119161',
};

export default function DonatePage() {
  const [copied, setCopied] = useState(false);

  const handleCopyAccount = async () => {
    try {
      await navigator.clipboard.writeText(accountDetails.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = accountDetails.accountNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="donate-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Make a Difference</h1>
          <p>Your generosity transforms lives. Donate today.</p>
        </div>
      </section>

      {/* Why Donate */}
      <section className="section">
        <div className="container">
          <div className="why-donate">
            <div className="why-text">
              <h2>Why Your Support Matters</h2>
              <p>
                Every donation to Msurshima Foundation directly impacts the lives 
                of children with special needs. Your contribution helps provide 
                therapy, teacher training, and inclusive education programs.
              </p>
              <p>
                We believe in transparency and accountability. 90% of all donations 
                go directly to our programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Donation Details Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Donation Details</h2>
            <p>Make a transfer to the account below</p>
          </div>

          <div className="donation-card-container">
            <div className="donation-main-card">
              <div className="card-icon">🏦</div>
              <h3>Bank Transfer</h3>
              
              <div className="account-details">
                <div className="detail-row">
                  <span className="detail-label">Bank Name</span>
                  <span className="detail-value">{accountDetails.bank}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Account Name</span>
                  <span className="detail-value">{accountDetails.accountName}</span>
                </div>
                <div className="detail-row account-number-row">
                  <div>
                    <span className="detail-label">Account Number</span>
                    <span className="detail-value large">{accountDetails.accountNumber}</span>
                  </div>
                  <button 
                    className={`copy-btn ${copied ? 'copied' : ''}`}
                    onClick={handleCopyAccount}
                  >
                    {copied ? '✓ Copied!' : '📋 Copy'}
                  </button>
                </div>
              </div>

              <div className="contact-confirm">
                <p>💡 After transferring, please <Link href="/contact" className="link">contact us</Link> to confirm your donation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Your Impact</h2>
            <p>See how your donation translates to real change</p>
          </div>

          <div className="impact-grid">
            {impactItems.map((item, index) => (
              <div key={index} className="impact-item">
                <span className="impact-icon">{item.icon}</span>
                <span className="impact-stat">{item.stat}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Questions About Donating?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.125rem', color: '#4a5568' }}>
            Our team is happy to help with any questions about giving.
          </p>
          <Link href="/contact" className="btn btn-primary">Contact Our Team</Link>
        </div>
      </section>

      <style jsx>{`
        .page-header {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          padding: 8rem 1.5rem 4rem;
          text-align: center;
        }
        .page-header h1 { color: white; margin-bottom: 0.5rem; letter-spacing: -0.02em; }
        .page-header p { color: rgba(255, 255, 255, 0.9); font-size: 1.25rem; }

        .why-donate { max-width: 800px; margin: 0 auto; text-align: center; }
        .why-text h2 { margin-bottom: 1.5rem; letter-spacing: -0.02em; }
        .why-text p { font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #4a5568; }

        .donation-card-container {
          display: flex; justify-content: center; margin-top: 2rem;
        }

        .donation-main-card {
          background: white;
          padding: 2.5rem;
          border-radius: 24px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 100%;
          text-align: center;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .card-icon { font-size: 3.5rem; margin-bottom: 1rem; }
        .donation-main-card h3 { 
          color: var(--color-primary); 
          font-size: 1.5rem; 
          margin-bottom: 2rem; 
          font-weight: 700;
        }

        .account-details { 
          background: #f8fafc; border: 1px solid #e2e8f0; 
          border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; 
          text-align: left;
        }
        
        .detail-row { display: flex; flex-direction: column; padding: 0.75rem 0; border-bottom: 1px solid #eef2f6; }
        .detail-row:last-child { border-bottom: none; padding-bottom: 0; }
        
        .account-number-row { 
          flex-direction: row; 
          align-items: center; 
          justify-content: space-between; 
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .detail-label { font-size: 0.75rem; color: #64748b; margin-bottom: 0.25rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
        .detail-value { font-weight: 600; color: #1e293b; font-size: 1.1rem; word-break: break-word; line-height: 1.4; }
        .detail-value.large { 
          font-size: 1.5rem; 
          color: var(--color-primary); 
          letter-spacing: 0.02em; 
          font-family: monospace; 
          font-weight: 700;
        }
        
        .copy-btn {
          padding: 0.6rem 1rem; 
          border: none;
          background: #eff6ff;
          color: var(--color-primary); 
          border-radius: 10px; 
          font-weight: 600; 
          font-size: 0.9rem;
          cursor: pointer; 
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-shrink: 0;
        }
        .copy-btn:hover { background: var(--color-primary); color: white; transform: translateY(-1px); }
        .copy-btn.copied { background: #dcfce7; color: #166534; pointer-events: none; }

        .contact-confirm { font-size: 0.9rem; color: #666; margin-top: 1rem; }
        .link { color: var(--color-primary); text-decoration: underline; font-weight: 500; }

        .impact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem; }
        .impact-item { 
          text-align: center; padding: 2.5rem 1.5rem; background: white; 
          border-radius: 24px; box-shadow: var(--shadow-sm); 
          transition: transform 0.3s ease;
        }
        .impact-item:hover { transform: translateY(-5px); }
        .impact-icon { font-size: 3.5rem; display: block; margin-bottom: 1rem; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1)); }
        .impact-stat { display: block; font-size: 1.75rem; font-weight: 800; color: var(--color-primary); margin-bottom: 0.5rem; }
        .impact-item p { font-size: 1rem; color: #666; font-weight: 500; }

        @media (max-width: 480px) {
          .donation-main-card { padding: 1.5rem; }
          .account-details { padding: 1rem; }
          .detail-value.large { font-size: 1.25rem; }
        }
      `}</style>
    </div>
  );
}
