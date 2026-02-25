'use client';

import Link from 'next/link';
import Image from 'next/image';

const programs = [
  {
    icon: '🔍',
    title: 'School Screening',
    description: 'Visiting local schools and communities to screen and identify children with developmental, learning, or behavioral challenges.',
  },
  {
    icon: '🧠',
    title: 'Therapy Services',
    description: 'Sending therapists to schools 2-3 times a week to provide regular follow-up support and intervention for children who need it.',
  },
  {
    icon: '👩‍🏫',
    title: 'Teacher Training',
    description: 'Hands-on training and workshops for teachers, equipping them with skills and strategies to effectively teach children with special needs.',
  },
  {
    icon: '🏫',
    title: 'Inclusive Programs',
    description: 'Developing inclusive programs where children with severe or overlooked disabilities can learn, grow, and work in structured environments.',
  },
];

const stats = [
  { number: '500+', label: 'Children Supported' },
  { number: '20+', label: 'Schools Reached' },
  { number: '100+', label: 'Teachers Trained' },
  { number: '5+', label: 'Years of Service' },
];

const galleryImages = [
  { src: '/images/teacher-training-1.jpg', alt: 'Teacher training workshop session' },
  { src: '/images/child-learning.jpg', alt: 'Child learning with educational content' },
  { src: '/images/awareness-walk-1.jpg', alt: 'Awareness walk for children with special needs' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content container">
          <div className="hero-text">
            <span className="hero-badge">Supporting Children with Special Needs</span>
            <h1>Every Child Deserves the Opportunity to Thrive</h1>
            <p>
              We are dedicated to identifying, supporting, and empowering children 
              with special needs across local schools and communities, especially 
              those with autism, through therapy, training, and inclusive opportunities.
            </p>
            <div className="hero-buttons">
              <Link href="/donate" className="btn btn-white">
                Support Our Cause
              </Link>
              <Link href="/programs" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                Our Programs
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          .hero {
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
            min-height: 90vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
          }

          .hero-content {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            padding: 6rem 1.5rem;
            position: relative;
            z-index: 2;
          }

          .hero-text {
            max-width: 600px;
          }

          .hero-badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            padding: 0.5rem 1.25rem;
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
            backdrop-filter: blur(10px);
          }

          .hero h1 {
            color: white;
            margin-bottom: 1.5rem;
            font-size: clamp(2.5rem, 5vw, 3.5rem);
          }

          .hero p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.25rem;
            margin-bottom: 2.5rem;
            line-height: 1.8;
          }

          .hero-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .hero-visual {
            display: none;
            position: relative;
          }

          .hero-shapes {
            position: relative;
            width: 100%;
            height: 400px;
          }

          .shape {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
          }

          .shape-1 {
            width: 300px;
            height: 300px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: float 6s ease-in-out infinite;
          }

          .shape-2 {
            width: 150px;
            height: 150px;
            top: 20%;
            right: 10%;
            animation: float 4s ease-in-out infinite 0.5s;
          }

          .shape-3 {
            width: 100px;
            height: 100px;
            bottom: 20%;
            left: 10%;
            animation: float 5s ease-in-out infinite 1s;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          @media (min-width: 768px) {
            .hero-content {
              grid-template-columns: 1fr 1fr;
              padding: 8rem 1.5rem;
            }

            .hero-visual {
              display: block;
            }
          }
        `}</style>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="mission-content">
            <div className="section-header">
              <h2>Our Mission</h2>
              <p>
                To identify, support, and empower children with special needs across 
                local schools and communities, especially those with autism, by providing 
                therapy, training educators, and creating inclusive opportunities that 
                value every child&apos;s unique abilities.
              </p>
            </div>
            
            <div className="mission-values">
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <h4>Early Identification</h4>
                <p>Screening children to catch developmental challenges early</p>
              </div>
              <div className="value-item">
                <div className="value-icon">💊</div>
                <h4>Professional Intervention</h4>
                <p>Providing therapy and specialized support services</p>
              </div>
              <div className="value-item">
                <div className="value-icon">📚</div>
                <h4>Inclusive Education</h4>
                <p>Ensuring no child is left behind due to lack of resources</p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .mission-content {
            text-align: center;
          }

          .mission-values {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }

          .value-item {
            padding: 2rem;
            background: white;
            border-radius: 20px;
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
          }

          .value-item:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
          }

          .value-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }

          .value-item h4 {
            color: var(--color-primary);
            margin-bottom: 0.5rem;
          }

          .value-item p {
            font-size: 1rem;
            color: var(--color-text-light);
          }
        `}</style>
      </section>

      {/* Vision Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="vision-content">
            <div className="vision-text">
              <h2>Our Vision</h2>
              <p className="vision-statement">
                A society where every child, regardless of ability, is understood, 
                supported, and given the opportunity to thrive, learn, and contribute 
                meaningfully to their community.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .vision-content {
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
          }

          .vision-text h2 {
            margin-bottom: 1.5rem;
          }

          .vision-statement {
            font-size: 1.5rem;
            line-height: 1.8;
            color: var(--color-text);
            font-style: italic;
          }
        `}</style>
      </section>

      {/* Programs Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What We Do</h2>
            <p>
              Comprehensive support programs designed to reach children with special 
              needs in schools and communities.
            </p>
          </div>

          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-card">
                <span className="program-icon">{program.icon}</span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link href="/programs" className="program-link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .programs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .program-card {
            background: white;
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
          }

          .program-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-lg);
          }

          .program-icon {
            font-size: 3rem;
            display: block;
            margin-bottom: 1.5rem;
          }

          .program-card h3 {
            color: var(--color-primary-dark);
            margin-bottom: 1rem;
            font-size: 1.5rem;
          }

          .program-card p {
            margin-bottom: 1.5rem;
            line-height: 1.7;
          }

          .program-link {
            font-weight: 600;
            color: var(--color-primary);
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          }

          .program-link:hover {
            gap: 0.75rem;
          }
        `}</style>
      </section>

      {/* Gallery Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Our Work in Action</h2>
            <p>See the impact we&apos;re making in schools and communities</p>
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

      {/* Impact Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .stats-section {
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
            padding: 5rem 1.5rem;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            text-align: center;
          }

          .stat-item {
            padding: 1.5rem;
          }

          .stat-number {
            display: block;
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            color: white;
            line-height: 1;
            margin-bottom: 0.5rem;
          }

          .stat-label {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1rem;
            font-weight: 500;
          }

          @media (min-width: 768px) {
            .stats-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="cta-content">
            <h2>Make a Difference Today</h2>
            <p>
              Your support helps us continue reaching more children in need. 
              Every contribution, big or small, creates lasting impact in the 
              lives of children with special needs.
            </p>
            <div className="cta-buttons">
              <Link href="/donate" className="btn btn-primary">
                Donate Now
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          .cta-content {
            text-align: center;
            max-width: 700px;
            margin: 0 auto;
          }

          .cta-content h2 {
            margin-bottom: 1rem;
          }

          .cta-content p {
            font-size: 1.25rem;
            margin-bottom: 2.5rem;
          }

          .cta-buttons {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
          }
        `}</style>
      </section>
    </>
  );
}
