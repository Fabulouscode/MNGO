'use client';

import Image from 'next/image';
import Link from 'next/link';

const whatWeDo = [
  {
    icon: '🔍',
    title: 'School & Community Screening',
    description: 'We visit local schools and communities to screen and identify children with developmental, learning, or behavioral challenges.',
  },
  {
    icon: '🧠',
    title: 'Therapy & Intervention',
    description: 'We send therapists to schools 2-3 times a week to support children who need regular follow-up and intervention services.',
  },
  {
    icon: '👩‍🏫',
    title: 'Teacher Training',
    description: 'We provide hands-on training and workshops for teachers, equipping them with skills and strategies to effectively teach and support children with special needs.',
  },
  {
    icon: '🏫',
    title: 'Inclusive Programs',
    description: 'We develop inclusive programs where children with severe or overlooked disabilities can learn, grow, and eventually work in structured environments that celebrate their strengths.',
  },
];

const galleryImages = [
  { src: '/images/awareness-walk-1.jpg', alt: 'Team participating in awareness walk for children with special needs' },
  { src: '/images/awareness-walk-2.jpg', alt: 'Community awareness march promoting inclusion' },
  { src: '/images/teacher-training-2.jpg', alt: 'Facilitator conducting teacher training session' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Bridging the gap in special education across Nigeria</p>
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

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Who We Are</h2>
              <p>
                We are a passionate nonprofit organization committed to bridging the 
                gap in special education and therapy services across Nigeria and beyond. 
                With a focus on autism and other developmental and learning challenges, 
                we reach into local schools and underserved communities to identify 
                children who are struggling and provide them with the care, support, 
                and guidance they need.
              </p>
              <p>
                Our goal is to ensure no child is left behind due to a lack of 
                understanding or resources. We believe in the power of early 
                identification, professional intervention, and inclusive education.
              </p>
              <p>
                We are a team of dedicated professionals, therapists, educators, 
                and advocates working together to create meaningful change in the 
                lives of children with special needs and their families.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .story-content {
            max-width: 800px;
            margin: 0 auto;
          }

          .story-text h2 {
            margin-bottom: 1.5rem;
          }

          .story-text p {
            margin-bottom: 1.5rem;
            font-size: 1.125rem;
            line-height: 1.8;
          }
        `}</style>
      </section>

      {/* Mission & Vision */}
      <section className="section section-alt">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To identify, support, and empower children with special needs across 
                local schools and communities, especially those with autism, by 
                providing therapy, training educators, and creating inclusive 
                opportunities that value every child&apos;s unique abilities.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>
                A society where every child, regardless of ability, is understood, 
                supported, and given the opportunity to thrive, learn, and contribute 
                meaningfully to their community.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .mv-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          .mv-card {
            background: white;
            padding: 3rem;
            border-radius: 20px;
            text-align: center;
            box-shadow: var(--shadow-sm);
          }

          .mv-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
          }

          .mv-card h3 {
            color: var(--color-primary);
            margin-bottom: 1rem;
          }

          .mv-card p {
            line-height: 1.8;
          }
        `}</style>
      </section>

      {/* What We Do */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What We Do</h2>
            <p>Our comprehensive approach to supporting children with special needs</p>
          </div>

          <div className="services-grid">
            {whatWeDo.map((service, index) => (
              <div key={index} className="service-card">
                <span className="service-icon">{service.icon}</span>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .service-card {
            background: white;
            padding: 2rem;
            border-radius: 20px;
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
          }

          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
          }

          .service-icon {
            font-size: 3rem;
            display: block;
            margin-bottom: 1rem;
          }

          .service-card h4 {
            color: var(--color-primary);
            margin-bottom: 0.75rem;
            font-size: 1.25rem;
          }

          .service-card p {
            line-height: 1.7;
            font-size: 1rem;
          }
        `}</style>
      </section>

      {/* Photo Gallery */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Our Team in Action</h2>
            <p>Advocacy, training, and community outreach</p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
          }

          .gallery-item {
            border-radius: 16px;
            overflow: hidden;
            aspect-ratio: 4/3;
            box-shadow: var(--shadow-md);
            transition: var(--transition);
          }

          .gallery-item:hover {
            transform: scale(1.02);
            box-shadow: var(--shadow-lg);
          }
        `}</style>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What Guides Us</h2>
            <p>The principles that drive our work every day</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h4>Compassion</h4>
              <p>Every child deserves love, understanding, and support</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Inclusion</h4>
              <p>Creating spaces where every child belongs</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💪</div>
              <h4>Empowerment</h4>
              <p>Building confidence and celebrating unique abilities</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📊</div>
              <h4>Accountability</h4>
              <p>Strong feedback and monitoring systems for each child</p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 2rem;
          }

          .value-card {
            text-align: center;
            padding: 2rem;
            background: white;
            border-radius: 20px;
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
          }

          .value-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
          }

          .value-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }

          .value-card h4 {
            color: var(--color-primary);
            margin-bottom: 0.5rem;
          }

          .value-card p {
            font-size: 0.95rem;
            color: var(--color-text-light);
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Join Our Mission</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.25rem' }}>
            Whether through volunteering, donations, or partnerships, there are many 
            ways to support children with special needs.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/donate" className="btn btn-primary">
              Donate Now
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
