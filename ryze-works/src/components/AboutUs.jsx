import { useEffect, useRef, useState } from 'react';
import '../styles/AboutUs.css';
import Footer from '../components/Footer.jsx';

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '40+', label: 'Global Clients' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years of Impact' },
];

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Move Fast',
    desc: 'We ship with urgency. Speed is a feature, not a tradeoff.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Think Long',
    desc: 'Every decision is made with the next decade in mind.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Build Together',
    desc: 'The best outcomes emerge from radical collaboration.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Own It',
    desc: 'We take full responsibility — from first idea to final pixel.',
  },
];

const team = [
  { name: 'Aryan Mehta', role: 'Co-founder & CEO', initials: 'AM', hue: '263' },
  { name: 'Priya Nair', role: 'Head of Design', initials: 'PN', hue: '210' },
  { name: 'Dev Krishnan', role: 'Lead Engineer', initials: 'DK', hue: '170' },
  { name: 'Sara Qureshi', role: 'Growth & Partnerships', initials: 'SQ', hue: '320' },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function AboutUs({ onBack, onNavigate }) {
  const [heroRef, heroVisible] = useInView(0.1);
  const [statsRef, statsVisible] = useInView(0.2);
  const [missionRef, missionVisible] = useInView(0.15);
  const [valuesRef, valuesVisible] = useInView(0.1);
  const [teamRef, teamVisible] = useInView(0.1);

  return (
    <>
      <section className="rw-about" aria-label="About Ryze Works">
        {onBack && (
          <button className="rw-back-btn" onClick={onBack}>
            ← Back
          </button>
        )}
        {/* ── Ambient background ── */}
        <div className="rw-about__ambient" aria-hidden="true">
          <div className="rw-ambient__orb rw-ambient__orb--1" />
          <div className="rw-ambient__orb rw-ambient__orb--2" />
          <div className="rw-ambient__grid" />
        </div>

        {/* ══════════ HERO ══════════ */}
        <div
          className={`rw-about__hero${heroVisible ? ' is-visible' : ''}`}
          ref={heroRef}
        >
          <div className="rw-hero__eyebrow">
            <span className="rw-eyebrow__dot" />
            About Ryze Works
          </div>

          <h1 className="rw-hero__heading">
            We don't just build
            <span className="rw-hero__heading-accent"> products.</span>
            <br />
            We build momentum.
          </h1>

          <p className="rw-hero__sub">
            Ryze Works is a product studio obsessed with turning ambitious ideas into
            software that scales. We partner with founders, enterprises and changemakers
            who refuse to settle for ordinary.
          </p>

          <div className="rw-hero__cta-row">
            <button className="rw-btn rw-btn--primary">Work With Us</button>
            <button className="rw-btn rw-btn--ghost">See Our Work →</button>
          </div>
        </div>

        {/* ══════════ STATS ══════════ */}
        <div
          className={`rw-about__stats${statsVisible ? ' is-visible' : ''}`}
          ref={statsRef}
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="rw-stat"
              style={{ '--i': i }}
            >
              <span className="rw-stat__value">{value}</span>
              <span className="rw-stat__label">{label}</span>
            </div>
          ))}
        </div>

        {/* ══════════ MISSION ══════════ */}
        <div
          className={`rw-about__mission${missionVisible ? ' is-visible' : ''}`}
          ref={missionRef}
        >
          <div className="rw-mission__left">
            <p className="rw-section-label">Our Mission</p>
            <h2 className="rw-mission__heading">
              Raise the bar for what software can do — and who it can reach.
            </h2>
          </div>

          <div className="rw-mission__right">
            <p className="rw-mission__body">
              Founded in 2019, Ryze Works started with a simple belief: great software
              should feel inevitable. We've grown into a full-service product studio
              with a team of designers, engineers and strategists who care deeply about
              craft and impact.
            </p>
            <p className="rw-mission__body">
              From zero-to-one startups to enterprise transformations, we bring the same
              energy to every project — relentless attention to detail, a bias for action,
              and a genuine obsession with outcomes.
            </p>

            <div className="rw-mission__tag-row">
              {['Product Strategy', 'UI/UX Design', 'Engineering', 'Growth'].map(t => (
                <span key={t} className="rw-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════ VALUES ══════════ */}
        <div
          className={`rw-about__values${valuesVisible ? ' is-visible' : ''}`}
          ref={valuesRef}
        >
          <p className="rw-section-label">What We Stand For</p>
          <h2 className="rw-values__heading">Principles that drive us.</h2>

          <div className="rw-values__grid">
            {values.map(({ icon, title, desc }, i) => (
              <div key={title} className="rw-value-card" style={{ '--i': i }}>
                <div className="rw-value-card__icon">{icon}</div>
                <h3 className="rw-value-card__title">{title}</h3>
                <p className="rw-value-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ TEAM ══════════ */}
        <div
          className={`rw-about__team${teamVisible ? ' is-visible' : ''}`}
          ref={teamRef}
        >
          <p className="rw-section-label">The People</p>
          <h2 className="rw-team__heading">Built by a team that gives a damn.</h2>

          <div className="rw-team__grid">
            {team.map(({ name, role, initials, hue }, i) => (
              <div key={name} className="rw-team-card" style={{ '--i': i, '--hue': hue }}>
                <div className="rw-team-card__avatar">
                  <span>{initials}</span>
                  <div className="rw-team-card__avatar-ring" />
                </div>
                <div className="rw-team-card__info">
                  <span className="rw-team-card__name">{name}</span>
                  <span className="rw-team-card__role">{role}</span>
                </div>
                <div className="rw-team-card__shine" />
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ CTA BANNER ══════════ */}
        <div className="rw-about__banner">
          <div className="rw-banner__glow" aria-hidden="true" />
          <p className="rw-section-label">Ready to Ryze?</p>
          <h2 className="rw-banner__heading">
            Let's build something <span className="rw-banner__accent">worth talking about.</span>
          </h2>
          <button className="rw-btn rw-btn--primary rw-btn--lg">Start a Conversation</button>
        </div>

      </section>
      <Footer onNavigate={onNavigate}/>
    </>
  );
}