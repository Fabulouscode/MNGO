'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: 'msurshimafoundation@gmail.com',
    link: 'mailto:msurshimafoundation@gmail.com',
  },
  {
    icon: '📞',
    title: 'Phone',
    value: '0802 506 2486 / 0805 169 8291',
    link: 'tel:+2348025062486',
  },
  {
    icon: '📍',
    title: 'Address',
    value: 'No: 23 Tokko Phase 3, Jikwoyi, Zanwoyi Street, Abuja',
    link: null,
  },
  {
    icon: '🕐',
    title: 'Office Hours',
    value: 'Mon - Fri: 9am - 5pm',
    link: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We&apos;d love to hear from you</p>
        </div>

        <style jsx>{`
          .page-header {
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
            padding: 8rem 1.5rem 4rem;
            text-align: center;
          }

          .page-header h1 {
            color: white;
            margin-bottom: 0.5rem;
          }

          .page-header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.25rem;
          }
        `}</style>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we&apos;ll get back to you soon.</p>

              {submitted ? (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We&apos;ll be in touch soon.</p>
                  <button 
                    className="btn btn-outline" 
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-input"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="programs">Programs Information</option>
                      <option value="donate">Donation Questions</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      rows={5}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Have questions? Reach out to us through any of these channels.</p>

              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <span className="info-icon">{info.icon}</span>
                    <div>
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link}>{info.value}</a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="map-placeholder">
                <span className="map-icon">🗺️</span>
                <p>Visit us in Makurdi, Benue State</p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .contact-form-wrapper h2,
          .contact-info h2 {
            margin-bottom: 0.5rem;
          }

          .contact-form-wrapper > p,
          .contact-info > p {
            margin-bottom: 2rem;
          }

          .contact-form {
            background: white;
            padding: 2rem;
            border-radius: 20px;
            box-shadow: var(--shadow-sm);
          }

          .success-message {
            background: var(--color-accent);
            padding: 3rem;
            border-radius: 20px;
            text-align: center;
          }

          .success-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            background: var(--color-primary);
            color: white;
            border-radius: 50%;
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .success-message h3 {
            color: var(--color-primary);
            margin-bottom: 0.5rem;
          }

          .success-message p {
            margin-bottom: 1.5rem;
          }

          .info-cards {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .info-card {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1.25rem;
            background: white;
            border-radius: 12px;
            box-shadow: var(--shadow-sm);
          }

          .info-icon {
            font-size: 2rem;
          }

          .info-card h4 {
            font-size: 0.9rem;
            color: var(--color-text-light);
            font-weight: 500;
            margin-bottom: 0.25rem;
          }

          .info-card a,
          .info-card p {
            font-size: 1rem;
            color: var(--color-text);
            font-weight: 500;
            margin: 0;
          }

          .info-card a:hover {
            color: var(--color-primary);
          }

          .map-placeholder {
            background: var(--color-accent);
            padding: 4rem 2rem;
            border-radius: 16px;
            text-align: center;
          }

          .map-icon {
            font-size: 4rem;
            display: block;
            margin-bottom: 1rem;
          }

          .map-placeholder p {
            font-weight: 500;
            color: var(--color-text);
          }

          @media (min-width: 768px) {
            .contact-grid {
              grid-template-columns: 1.2fr 1fr;
            }
          }
        `}</style>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>How can I volunteer with the foundation?</h4>
              <p>
                Contact us through this form or email us directly. We welcome 
                volunteers for various programs and events throughout the year.
              </p>
            </div>
            <div className="faq-item">
              <h4>Are donations tax-deductible?</h4>
              <p>
                Yes, Msurshima Foundation is a registered non-profit organization. 
                We provide donation receipts for tax purposes.
              </p>
            </div>
            <div className="faq-item">
              <h4>How do I enroll someone in your programs?</h4>
              <p>
                Visit our Programs page for details, then contact us to schedule 
                an assessment meeting to determine the best fit.
              </p>
            </div>
            <div className="faq-item">
              <h4>Can organizations partner with you?</h4>
              <p>
                Absolutely! We welcome partnerships with businesses, NGOs, and 
                government agencies. Reach out to discuss opportunities.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .faq-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .faq-item {
            background: white;
            padding: 2rem;
            border-radius: 16px;
            box-shadow: var(--shadow-sm);
          }

          .faq-item h4 {
            color: var(--color-primary);
            margin-bottom: 0.75rem;
            font-size: 1.1rem;
          }

          .faq-item p {
            line-height: 1.7;
          }
        `}</style>
      </section>
    </>
  );
}
