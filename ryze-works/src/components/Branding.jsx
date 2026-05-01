import { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/Branding.css';
import Footer from '../components/Footer';
import useInView from '../hooks/useInView';

/* ── What we do ── */
const PILLARS = [
  {
    number: '01',
    title: 'Brand Strategy',
    desc: 'Before a single pixel is touched, we dig deep. Positioning, audience mapping, competitive landscape — we build the strategic foundation that every creative decision stands on.',
    tags: ['Positioning', 'Research', 'Messaging'],
  },
  {
    number: '02',
    title: 'Visual Identity',
    desc: 'Logos, colour systems, typography, iconography — every visual element crafted to be instantly recognisable and endlessly versatile across every surface it touches.',
    tags: ['Logo Design', 'Colour Systems', 'Typography'],
  },
  {
    number: '03',
    title: 'Brand Voice',
    desc: 'How your brand sounds is just as important as how it looks. We define tone of voice, messaging frameworks and copy guidelines that keep your brand consistent at every touchpoint.',
    tags: ['Tone of Voice', 'Copywriting', 'Guidelines'],
  },
  {
    number: '04',
    title: 'Brand Systems',
    desc: 'A brand that can\'t scale is a brand that breaks. We deliver comprehensive design systems, brand books and asset libraries so your team ships on-brand every time.',
    tags: ['Design Systems', 'Brand Books', 'Asset Libraries'],
  },
];

/* ── Process steps ── */
const PROCESS = [
  { step: 'Discover', desc: 'Deep-dive workshops, stakeholder interviews and competitor audits to understand your world.' },
  { step: 'Define',   desc: 'Strategic positioning, brand architecture and a clear creative brief everyone rallies behind.' },
  { step: 'Design',   desc: 'Iterative visual exploration — logos, palettes, type pairings — refined until unmistakably right.' },
  { step: 'Deliver',  desc: 'A complete brand system handed over with documentation, assets and a clear launch plan.' },
];

/* ── Marquee ── */
const MARQUEE = [
  'BRAND STRATEGY', 'VISUAL IDENTITY', 'TYPOGRAPHY', 'COLOUR SYSTEMS',
  'BRAND VOICE', 'DESIGN SYSTEMS', 'LOGO DESIGN', 'BRAND BOOKS',
];

/* ── Work samples (abstract visual placeholders) ── */
const WORK = [
  { title: 'Luminary Finance',  label: 'Identity Redesign',    accent: '#63e',    shape: 'circle'   },
  { title: 'Verdant Co.',       label: 'Brand from Scratch',   accent: '#1db97a', shape: 'triangle' },
  { title: 'Noctua Studios',    label: 'Motion Brand Launch',  accent: '#ff4d6d', shape: 'diamond'  },
  { title: 'Prism Agency',      label: 'Design System',        accent: '#f5a623', shape: 'hexagon'  },
];


function PillarCard({ pillar, index }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`br-pillar${inView ? ' is-visible' : ''}`}
      style={{ '--i': index }}
    >
      <span className="br-pillar__number">{pillar.number}</span>
      <div className="br-pillar__line" aria-hidden="true" />
      <h3 className="br-pillar__title">{pillar.title}</h3>
      <p className="br-pillar__desc">{pillar.desc}</p>
      <div className="br-pillar__tags">
        {pillar.tags.map(t => <span key={t} className="br-pillar__tag">{t}</span>)}
      </div>
    </div>
  );
}

function WorkCard({ item, index }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`br-work-card${inView ? ' is-visible' : ''}`}
      style={{ '--i': index, '--accent': item.accent }}
    >
      <div className="br-work-card__visual">
        <div className="br-work-card__bg" />
        <div className={`br-work-card__shape br-work-card__shape--${item.shape}`} aria-hidden="true" />
      </div>
      <div className="br-work-card__info">
        <span className="br-work-card__label">{item.label}</span>
        <span className="br-work-card__title">{item.title}</span>
      </div>
    </div>
  );
}

export default function Branding({ onBack, onNavigate }) {
  const [heroRef,   heroVisible]   = useInView(0.1);
  const [introRef,  introVisible]  = useInView(0.15);
  const [processRef,processVisible]= useInView(0.1);
  const [workRef,   workVisible]   = useInView(0.1);

  const handleNavigateHome = useCallback(() => {
    onNavigate && onNavigate('home');
  }, [onNavigate]);

  const handleNavigateCaseStudies = useCallback(() => {
    onNavigate && onNavigate('casestudies');
  }, [onNavigate]);

  return (
    <>
      <section className="br-page" aria-label="Branding Service">

        {/* ── Ambient ── */}
        <div className="br-ambient" aria-hidden="true">
          <div className="br-ambient__orb br-ambient__orb--1" />
          <div className="br-ambient__orb br-ambient__orb--2" />
          <div className="br-ambient__orb br-ambient__orb--3" />
          <div className="br-ambient__grid" />
          <div className="br-ambient__noise" />
        </div>

        {/* ── Back ── */}
        {onBack && (
          <button className="br-back-btn" onClick={onBack}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </button>
        )}

        {/* ══════════ HERO ══════════ */}
        <div
          className={`br-hero${heroVisible ? ' is-visible' : ''}`}
          ref={heroRef}
        >
          <div className="br-hero__left">
            <div className="br-hero__eyebrow">
              <span className="br-eyebrow__dot" />
              Branding
            </div>

            <h1 className="br-hero__heading">
              Brands that
              <br />
              <span className="br-hero__heading-accent">people feel</span>
              <br />
              before they read.
            </h1>

            <p className="br-hero__sub">
              A great brand isn't just a logo. It's a feeling, a promise, a point of view.
              We build brand identities that cut through noise and stay lodged in memory.
            </p>

            <div className="br-hero__actions">
              <button
                className="br-btn br-btn--primary"
                onClick={handleNavigateHome}
              >
                Start a Brand Project
              </button>
              <button
                className="br-btn br-btn--ghost"
                onClick={handleNavigateCaseStudies}
              >
                See Our Work →
              </button>
            </div>
          </div>

          <div className="br-hero__right" aria-hidden="true">
            <div className="br-hero__emblem">
              <div className="br-emblem__ring br-emblem__ring--1" />
              <div className="br-emblem__ring br-emblem__ring--2" />
              <div className="br-emblem__ring br-emblem__ring--3" />
              <div className="br-emblem__core">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="36" stroke="url(#bg)" strokeWidth="1.5" strokeDasharray="4 4"/>
                  <path d="M24 20h20a12 12 0 010 24H32l14 16H36L22 44h-2v16H14V20h10zm6 6v12h14a6 6 0 000-12H30z"
                    fill="url(#bf)"/>
                  <defs>
                    <linearGradient id="bg" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#63e"/>
                      <stop offset="100%" stopColor="#8e64ff"/>
                    </linearGradient>
                    <linearGradient id="bf" x1="14" y1="20" x2="50" y2="60" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#fff"/>
                      <stop offset="100%" stopColor="#8e64ff"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Floating stat chips */}
            <div className="br-hero__chip br-hero__chip--1">
              <span className="br-chip__value">150+</span>
              <span className="br-chip__label">Brands Built</span>
            </div>
            <div className="br-hero__chip br-hero__chip--2">
              <span className="br-chip__value">98%</span>
              <span className="br-chip__label">Satisfaction</span>
            </div>
          </div>
        </div>

        {/* ══════════ MARQUEE ══════════ */}
        <div className="br-marquee-wrap" aria-hidden="true">
          <div className="br-marquee-track">
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <span className="br-marquee-item" key={i}>
                {item}
                <span className="br-marquee-dot" />
              </span>
            ))}
          </div>
        </div>

        {/* ══════════ INTRO SPLIT ══════════ */}
        <div
          className={`br-intro${introVisible ? ' is-visible' : ''}`}
          ref={introRef}
        >
          <div className="br-intro__left">
            <p className="br-section-label">What We Believe</p>
            <h2 className="br-intro__heading">
              A brand is your most valuable asset. Treat it like one.
            </h2>
          </div>
          <div className="br-intro__right">
            <p className="br-intro__body">
              Most agencies treat branding as decoration. We treat it as strategy.
              Every colour, every curve, every word is a deliberate decision
              made to advance a business goal — not just to look good in a portfolio.
            </p>
            <p className="br-intro__body">
              We've built brands for fintech startups that needed to earn trust fast,
              consumer products that needed shelf presence, and global studios that
              needed to speak to twelve markets at once. The approach changes. The
              rigour never does.
            </p>
          </div>
        </div>

        {/* ══════════ PILLARS ══════════ */}
        <div className="br-pillars-section">
          <p className="br-section-label" style={{ textAlign: 'center', marginBottom: '16px' }}>What We Do</p>
          <h2 className="br-pillars-section__heading">Four disciplines. One cohesive brand.</h2>
          <div className="br-pillars-grid">
            {PILLARS.map((p, i) => <PillarCard key={p.number} pillar={p} index={i} />)}
          </div>
        </div>

        {/* ══════════ PROCESS ══════════ */}
        <div
          className={`br-process${processVisible ? ' is-visible' : ''}`}
          ref={processRef}
        >
          <div className="br-process__header">
            <p className="br-section-label">Our Process</p>
            <h2 className="br-process__heading">From brief to brand in four moves.</h2>
          </div>
          <div className="br-process__steps">
            {PROCESS.map(({ step, desc }, i) => (
              <div
                key={step}
                className="br-process__step"
                style={{ '--i': i }}
              >
                <div className="br-process__step-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="br-process__step-connector" aria-hidden="true" />
                <h3 className="br-process__step-title">{step}</h3>
                <p className="br-process__step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ WORK SAMPLES ══════════ */}
        <div
          className={`br-work${workVisible ? ' is-visible' : ''}`}
          ref={workRef}
        >
          <div className="br-work__header">
            <p className="br-section-label">Selected Work</p>
            <h2 className="br-work__heading">Brands we've shaped.</h2>
          </div>
          <div className="br-work__grid">
            {WORK.map((item, i) => <WorkCard key={item.title} item={item} index={i} />)}
          </div>
          <div className="br-work__footer">
            <button
              className="br-btn br-btn--outline"
              onClick={handleNavigateCaseStudies}
            >
              View All Case Studies →
            </button>
          </div>
        </div>

        {/* ══════════ CTA BANNER ══════════ */}
        <div className="br-banner">
          <div className="br-banner__glow" aria-hidden="true" />
          <div className="br-banner__inner">
            <p className="br-section-label">Ready to Build?</p>
            <h2 className="br-banner__heading">
              Your brand deserves to be
              <span className="br-banner__accent"> unforgettable.</span>
            </h2>
            <p className="br-banner__sub">
              Let's start with a conversation. No decks, no pitches — just an honest
              chat about where your brand is and where it needs to go.
            </p>
            <div className="br-banner__actions">
              <button
                className="br-btn br-btn--primary br-btn--lg"
                onClick={handleNavigateHome}
              >
                Start the Conversation
              </button>
            </div>
          </div>
        </div>

      </section>
      <Footer onNavigate={onNavigate} />
    </>
  );
}