'use client';

import Link from 'next/link';
import Image from 'next/image';

const programs = [
  {
    icon: '🔍',
    title: 'School Screening & Identification',
    description: 'We visit local schools and communities to screen and identify children with developmental, learning, or behavioral challenges. Early identification is key to providing timely support and intervention.',
    features: [
      'Regular visits to local schools',
      'Community outreach programs',
      'Developmental screening assessments',
      'Early identification of autism and learning challenges',
      'Referral system for further evaluation',
    ],
    image: '/images/teacher-training-1.jpg',
  },
  {
    icon: '🧠',
    title: 'Therapy & Intervention Services',
    description: 'We offer therapy and intervention services, including sending therapists to schools 2-3 times a week to support children who need regular follow-up. Our goal is to provide consistent, accessible care.',
    features: [
      'Therapists visiting schools weekly',
      'Behavioral therapy sessions',
      'Speech and language support',
      'Occupational therapy',
      'Regular progress monitoring',
    ],
    image: '/images/child-learning.jpg',
  },
  {
    icon: '👩‍🏫',
    title: 'Teacher Training & Workshops',
    description: 'We provide hands-on training and workshops for teachers, equipping them with skills and strategies to effectively teach and support children with special needs in their classrooms.',
    features: [
      'Inclusive teaching strategies',
      'Understanding autism and developmental disorders',
      'Classroom adaptation techniques',
      'Behavior management skills',
      'Creating supportive learning environments',
    ],
    image: '/images/teacher-training-2.jpg',
  },
  {
    icon: '🏫',
    title: 'Inclusive Learning Programs',
    description: 'We develop inclusive programs where children with severe or overlooked disabilities can learn, grow, and eventually work in structured environments that celebrate their strengths, no matter how big or small.',
    features: [
      'Structured learning environments',
      'Individualized education plans',
      'Life skills development',
      'Social integration activities',
      'Pathways to employment opportunities',
    ],
    image: '/images/awareness-walk-1.jpg',
  },
];

const impactStories = [
  {
    name: 'Chidi',
    story: 'After being identified during a school screening, Chidi received weekly therapy sessions. His communication skills have improved dramatically, and he now participates actively in class.',
    program: 'Therapy Services',
  },
  {
    name: 'Mrs. Adaeze',
    story: 'As a primary school teacher, the training I received helped me understand how to support children with autism in my classroom. I can now reach every child.',
    program: 'Teacher Training',
  },
  {
    name: 'Emeka',
    story: 'Through our inclusive program, Emeka learned practical skills and gained confidence. He now helps in a local workshop and is proud of his contributions.',
    program: 'Inclusive Programs',
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Programs</h1>
          <p>Comprehensive support for children with special needs</p>
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

      {/* Programs List */}
      <section className="section">
        <div className="container">
          <div className="programs-list">
            {programs.map((program, index) => (
              <div key={index} className={`program-full ${index % 2 === 1 ? 'reverse' : ''}`}>
                <div className="program-content">
                  <div className="program-header">
                    <span className="program-icon">{program.icon}</span>
                    <div>
                      <h2>{program.title}</h2>
                      <p>{program.description}</p>
                    </div>
                  </div>
                  <div className="program-features">
                    <h4>What We Offer:</h4>
                    <ul>
                      {program.features.map((feature, i) => (
                        <li key={i}>
                          <span className="check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="program-image">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={500}
                    height={350}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .programs-list {
            display: flex;
            flex-direction: column;
            gap: 4rem;
          }

          .program-full {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            background: white;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: var(--shadow-sm);
          }

          .program-content {
            padding: 2.5rem;
          }

          .program-image {
            min-height: 300px;
            position: relative;
          }

          .program-header {
            display: flex;
            gap: 1.5rem;
            margin-bottom: 2rem;
            align-items: flex-start;
          }

          .program-icon {
            font-size: 3.5rem;
            line-height: 1;
          }

          .program-header h2 {
            margin-bottom: 0.5rem;
            font-size: 1.75rem;
          }

          .program-header p {
            max-width: 600px;
            line-height: 1.7;
          }

          .program-features h4 {
            color: var(--color-primary);
            margin-bottom: 1rem;
          }

          .program-features ul {
            list-style: none;
            display: grid;
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .program-features li {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1rem;
            color: var(--color-text);
          }

          .check {
            color: var(--color-primary);
            font-weight: bold;
          }

          @media (min-width: 900px) {
            .program-full {
              grid-template-columns: 1fr 1fr;
            }

            .program-full.reverse {
              direction: rtl;
            }

            .program-full.reverse > * {
              direction: ltr;
            }

            .program-features ul {
              grid-template-columns: 1fr 1fr;
            }
          }

          @media (max-width: 600px) {
            .program-header {
              flex-direction: column;
            }
          }
        `}</style>
      </section>

      {/* Impact Stories */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Impact Stories</h2>
            <p>Real change in the lives of children and educators</p>
          </div>

          <div className="stories-grid">
            {impactStories.map((story, index) => (
              <div key={index} className="story-card">
                <div className="story-avatar">
                  {story.name[0]}
                </div>
                <h4>{story.name}</h4>
                <span className="story-program">{story.program}</span>
                <p>&ldquo;{story.story}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .stories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .story-card {
            background: white;
            padding: 2rem;
            border-radius: 20px;
            text-align: center;
            box-shadow: var(--shadow-sm);
          }

          .story-avatar {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.75rem;
            font-weight: 600;
            margin: 0 auto 1rem;
          }

          .story-card h4 {
            margin-bottom: 0.25rem;
          }

          .story-program {
            display: inline-block;
            background: var(--color-accent);
            color: var(--color-primary);
            padding: 0.25rem 0.75rem;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 500;
            margin-bottom: 1rem;
          }

          .story-card p {
            font-style: italic;
            line-height: 1.7;
          }
        `}</style>
      </section>

      {/* Our Approach */}
      <section className="section">
        <div className="container">
          <div className="approach-content">
            <h2>Our Approach</h2>
            <p className="approach-intro">
              We build strong feedback and monitoring systems to ensure each child&apos;s 
              progress is consistently evaluated and supported throughout their journey.
            </p>
            
            <div className="approach-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h4>Identification</h4>
                <p>Screen and identify children with developmental challenges</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h4>Assessment</h4>
                <p>Comprehensive evaluation of each child&apos;s unique needs</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h4>Intervention</h4>
                <p>Provide tailored therapy and support services</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h4>Monitoring</h4>
                <p>Regular progress evaluation and adapted support</p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .approach-content {
            text-align: center;
          }

          .approach-content h2 {
            margin-bottom: 1rem;
          }

          .approach-intro {
            max-width: 700px;
            margin: 0 auto 3rem;
            font-size: 1.25rem;
            line-height: 1.8;
          }

          .approach-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
          }

          .step {
            padding: 1.5rem;
            background: white;
            border-radius: 16px;
            box-shadow: var(--shadow-sm);
          }

          .step-number {
            width: 50px;
            height: 50px;
            background: var(--color-primary);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0 auto 1rem;
          }

          .step h4 {
            margin-bottom: 0.5rem;
            color: var(--color-primary-dark);
          }

          .step p {
            font-size: 0.95rem;
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Get Support for a Child</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.25rem' }}>
            Know a child who might benefit from our programs? Reach out to us today 
            and let&apos;s discuss how we can help.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link href="/donate" className="btn btn-outline">
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
