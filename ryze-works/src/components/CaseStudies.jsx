import { useEffect, useRef, useState } from 'react';
import '../styles/CaseStudies.css';
import Footer from '../components/Footer';

/* ── Data ── */
const FILTERS = ['All', 'Branding', 'Web & App', 'Motion', 'Consulting'];

const CASE_STUDIES = [
  {
    id: 1,
    client: 'Luminary Finance',
    industry: 'Fintech',
    title: 'Redesigning trust for a new generation of investors',
    services: ['Branding', 'Web & App'],
    result: '2.4× increase in user sign-ups',
    year: '2024',
    accent: '#63e',
    size: 'large',
  },
  {
    id: 2,
    client: 'Verdant Co.',
    industry: 'Sustainability',
    title: 'A brand identity rooted in purpose',
    services: ['Branding', 'Motion'],
    result: '3× social engagement growth',
    year: '2024',
    accent: '#1db97a',
    size: 'small',
  },
  {
    id: 3,
    client: 'Orbis Health',
    industry: 'Healthcare',
    title: 'Simplifying complex patient journeys',
    services: ['Web & App', 'Consulting'],
    result: '68% drop in support tickets',
    year: '2023',
    accent: '#00b8d9',
    size: 'small',
  },
  {
    id: 4,
    client: 'Noctua Studios',
    industry: 'Entertainment',
    title: 'Motion-first brand launch for a global audience',
    services: ['Motion', 'Branding'],
    result: '1M+ views in first week',
    year: '2023',
    accent: '#ff4d6d',
    size: 'large',
  },
  {
    id: 5,
    client: 'Axis Retail',
    industry: 'E-commerce',
    title: 'From zero to full-stack commerce in 90 days',
    services: ['Web & App', 'Consulting'],
    result: '₹4Cr GMV in first quarter',
    year: '2023',
    accent: '#f5a623',
    size: 'small',
  },
  {
    id: 6,
    client: 'Prism Agency',
    industry: 'Creative',
    title: 'A design system built to scale across 12 markets',
    services: ['Branding', 'Consulting'],
    result: '40% faster campaign delivery',
    year: '2022',
    accent: '#8e64ff',
    size: 'small',
  },
];

function useInView(threshold = 0.12) {
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

function CaseStudyCard({ study, index, onSelect }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`cs-card cs-card--${study.size}${inView ? ' is-visible' : ''}`}
      style={{ '--accent': study.accent, '--i': index }}
      onClick={() => onSelect(study)}
    >
      <div className="cs-card__visual">
        <div className="cs-card__visual-inner">
          <div className="cs-card__grid-lines" aria-hidden="true" />
          <div className="cs-card__orb" aria-hidden="true" />
          <span className="cs-card__year">{study.year}</span>
        </div>
      </div>

      <div className="cs-card__body">
        <div className="cs-card__meta">
          <span className="cs-card__client">{study.client}</span>
          <span className="cs-card__industry">{study.industry}</span>
        </div>

        <h3 className="cs-card__title">{study.title}</h3>

        <div className="cs-card__tags">
          {study.services.map(s => (
            <span key={s} className="cs-card__tag">{s}</span>
          ))}
        </div>

        <div className="cs-card__result">
          <span className="cs-card__result-dot" aria-hidden="true" />
          {study.result}
        </div>

        <button className="cs-card__cta" aria-label={`View ${study.client} case study`}>
          View Case Study
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function CaseStudies({ onBack, onNavigate, onStudySelect }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [heroRef, heroVisible] = useInView(0.1);
  const [filterRef, filterVisible] = useInView(0.1);

  const filtered = activeFilter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(s => s.services.includes(activeFilter));

  return (
    <>
      <section className="cs-page" aria-label="Case Studies">

        {/* ── Ambient ── */}
        <div className="cs-ambient" aria-hidden="true">
          <div className="cs-ambient__orb cs-ambient__orb--1" />
          <div className="cs-ambient__orb cs-ambient__orb--2" />
          <div className="cs-ambient__noise" />
        </div>

        {/* ── Back ── */}
        {onBack && (
          <button className="cs-back-btn" onClick={onBack}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </button>
        )}

        {/* ── Hero ── */}
        <div
          className={`cs-hero${heroVisible ? ' is-visible' : ''}`}
          ref={heroRef}
        >
          <div className="cs-hero__eyebrow">
            <span className="cs-eyebrow__dot" />
            Our Work
          </div>
          <h1 className="cs-hero__heading">
            Work that
            <span className="cs-hero__heading-accent"> speaks</span>
            <br />for itself.
          </h1>
          <p className="cs-hero__sub">
            Every project starts with a real problem. Here's how we solved them —
            and what happened after.
          </p>

          <div className="cs-hero__stats">
            {[
              { value: '150+', label: 'Projects' },
              { value: '40+',  label: 'Clients' },
              { value: '12',   label: 'Industries' },
            ].map(({ value, label }, i) => (
              <div key={label} className="cs-hero__stat" style={{ '--i': i }}>
                <span className="cs-hero__stat-value">{value}</span>
                <span className="cs-hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Filter bar ── */}
        <div
          className={`cs-filters${filterVisible ? ' is-visible' : ''}`}
          ref={filterRef}
          role="group"
          aria-label="Filter case studies"
        >
          {FILTERS.map((f, i) => (
            <button
              key={f}
              className={`cs-filter-btn${activeFilter === f ? ' is-active' : ''}`}
              style={{ '--i': i }}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <div className="cs-grid">
          {filtered.map((study, i) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              index={i}
              onSelect={onStudySelect || (() => {})}
            />
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <div className="cs-banner">
          <div className="cs-banner__glow" aria-hidden="true" />
          <p className="cs-section-label">Got a project in mind?</p>
          <h2 className="cs-banner__heading">
            Let's make it your
            <span className="cs-banner__accent"> best case study yet.</span>
          </h2>
          <button
            className="cs-btn cs-btn--primary"
            onClick={() => onNavigate && onNavigate('home')}
          >
            Start a Conversation
          </button>
        </div>

      </section>
      <Footer onNavigate={onNavigate} />
    </>
  );
}