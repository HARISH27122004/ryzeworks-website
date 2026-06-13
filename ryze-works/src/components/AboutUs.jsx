import { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/AboutUs.css';
import useInView from '../hooks/useInView';
import Footer from '../components/Footer.jsx';

const stats = [
  { value: '01', label: 'Our Foundation' },
];

const whatWeDo = [
  { left: 'We make logos', right: 'We create identities people emotionally connect with' },
  { left: 'We build websites', right: 'We engineer digital experiences that represent authority' },
  { left: 'We post content', right: 'We shape perception, capture attention, and build brand positioning' },
  { left: 'We chase vanity metrics', right: 'We build brands with measurable, long-term value' },
];

const principles = [
  {
    number: '01',
    title: 'Precision Over Noise',
    desc: 'Every visual, word, and strategy carries intention. We dont fill space — we design it.',
  },
  {
    number: '02',
    title: 'Luxury-Level Execution',
    desc: 'Premium brands demand premium presentation. We hold every output to the highest standard.',
  },
  {
    number: '03',
    title: 'Built To Scale',
    desc: 'Everything we create is designed for long-term growth, adaptability, and expansion — not just the moment.',
  },
  {
    number: '04',
    title: 'Modern Thinking',
    desc: 'We stay ahead of trends without becoming dependent on them. Strategy first, always.',
  },
  {
    number: '05',
    title: 'Obsession With Quality',
    desc: '"Good enough" doesn\'t survive here. We hold ourselves to a standard most agencies don\'t attempt.',
  },
];

const clientTypes = [
  'Startups with a vision that extends far beyond their current size',
  'Businesses ready to evolve past where they\'ve been stuck',
  'Founders building something bigger than themselves',
  'Brands that understand the difference between existing and dominating',
];

const CONTACT_FORM_URL = 'https://forms.gle/nx5dTqipz4s5Rxbd7';

const handleContact = () => {
  window.open(CONTACT_FORM_URL, '_blank');
};

export default function AboutUs({ onBack, onNavigate }) {
  const [heroRef, heroVisible] = useInView(0.1);
  const [foundationRef, foundationVisible] = useInView(0.15);
  const [whatWeDoRef, whatWeDoVisible] = useInView(0.1);
  const [principlesRef, principlesVisible] = useInView(0.1);
  const [clientsRef, clientsVisible] = useInView(0.1);
  const [philosophyRef, philosophyVisible] = useInView(0.1);
  const [visionRef, visionVisible] = useInView(0.1);

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
            Brands don't grow here.
            <span className="rw-hero__heading-accent"> They evolve.</span>
          </h1>

          <p className="rw-hero__sub">
            We exist at the intersection of strategy, design, and technology — built for brands
            that are ready to move beyond being seen, and start being remembered.
          </p>

          <div className="rw-hero__cta-row">
            <button className="rw-btn rw-btn--primary" onClick={handleContact}>Work With RYZE</button>
            {/* <button className="rw-btn rw-btn--ghost" onClick={handleContact}>See Our Work →</button> */}
            <button className="rw-btn rw-btn--ghost" onClick={() => onNavigate('home', 'projects')}>See Our Work →</button>
          </div>
        </div>

        {/* ══════════ FOUNDATION ══════════ */}
        <div
          className={`rw-about__foundation${foundationVisible ? ' is-visible' : ''}`}
          ref={foundationRef}
        >
          <div className="rw-foundation__left">
            <p className="rw-section-label">01 / Our Foundation</p>
            <h2 className="rw-foundation__heading">
              Built for brands<br />that refuse<br />to be average.
            </h2>
          </div>

          <div className="rw-foundation__right">
            <div className="rw-foundation__block">
              <span className="rw-foundation__block-label">The Gap We Fill</span>
              <p className="rw-foundation__block-body">
                Every brand has potential. Most never unlock it — not because the idea is weak,
                but because execution lacks clarity.
              </p>
            </div>
            <div className="rw-foundation__block">
              <span className="rw-foundation__block-label">What We Build</span>
              <p className="rw-foundation__block-body">
                We craft premium digital experiences that make businesses look stronger,
                communicate sharper, and scale faster. From identity to infrastructure, every
                element is intentionally engineered to position brands at a higher level.
              </p>
            </div>
            <div className="rw-foundation__block">
              <span className="rw-foundation__block-label">Our Standard</span>
              <p className="rw-foundation__block-body">
                Not trendy. Not temporary. We build brands that are timeless, scalable, and
                impossible to ignore — because the world doesn't need more noise. It needs more clarity.
              </p>
            </div>
          </div>
        </div>

        {/* ══════════ WHAT WE REALLY DO ══════════ */}
        <div
          className={`rw-about__whatwedo${whatWeDoVisible ? ' is-visible' : ''}`}
          ref={whatWeDoRef}
        >
          <p className="rw-section-label">/ What We Really Do</p>

          <div className="rw-whatwedo__list">
            {whatWeDo.map(({ left, right }, i) => (
              <div key={i} className="rw-whatwedo__row" style={{ '--i': i }}>
                <span className="rw-whatwedo__left">{left}</span>
                <span className="rw-whatwedo__arrow">→</span>
                <span className="rw-whatwedo__right">{right}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ PRINCIPLES ══════════ */}
        <div
          className={`rw-about__principles${principlesVisible ? ' is-visible' : ''}`}
          ref={principlesRef}
        >
          <div className="rw-principles__header">
            <div>
              <h2 className="rw-principles__heading">
                The RYZE<br />Standard
              </h2>
            </div>
            <p className="rw-principles__side-label">05 Principles</p>
          </div>

          <div className="rw-principles__grid">
            {principles.map(({ number, title, desc }, i) => (
              <div key={number} className="rw-principle-card" style={{ '--i': i }}>
                <span className="rw-principle-card__number">{number}</span>
                <h3 className="rw-principle-card__title">{title}</h3>
                <p className="rw-principle-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ WHO WE WORK WITH ══════════ */}
        <div
          className={`rw-about__clients${clientsVisible ? ' is-visible' : ''}`}
          ref={clientsRef}
        >
          <div className="rw-clients__left">
            <p className="rw-section-label">/ Who We Work With</p>
            <h2 className="rw-clients__heading">
              We work with brands<br />that want to lead —<br />not follow.
            </h2>
          </div>

          <div className="rw-clients__list">
            {clientTypes.map((type, i) => (
              <div key={i} className="rw-client-item" style={{ '--i': i }}>
                <span className="rw-client-item__num">0{i + 1}</span>
                <p className="rw-client-item__text">{type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ PHILOSOPHY ══════════ */}
        <div
          className={`rw-about__philosophy${philosophyVisible ? ' is-visible' : ''}`}
          ref={philosophyRef}
        >
          <p className="rw-section-label">/ Our Philosophy</p>
          <blockquote className="rw-philosophy__quote">
            The strongest brands are not the loudest.<br />
            They are the clearest.
          </blockquote>
          <div className="rw-philosophy__lines">
            <p>A powerful brand speaks before you do.</p>
            <p>It influences before it sells.</p>
            <p>It earns trust before the first conversation begins.</p>
          </div>
        </div>

        {/* ══════════ VISION / CTA BANNER ══════════ */}
        <div
          className={`rw-about__vision${visionVisible ? ' is-visible' : ''}`}
          ref={visionRef}
        >
          <div className="rw-banner__glow" aria-hidden="true" />
          <p className="rw-vision__vertical-label">Our Vision</p>
          <div className="rw-vision__content">
            <h2 className="rw-vision__heading">
              Built from scratch.<br />
              <span className="rw-banner__accent">Engineered<br />to scale.</span>
            </h2>
            <div className="rw-vision__right">
              <p className="rw-vision__body">
                RYZE was built for businesses that want more than visibility — more than
                temporary growth. We build brands with presence, authority, and the
                infrastructure to last. Our vision is a new generation of brands that influence
                culture, dominate digitally, and leave a lasting impact.
              </p>
              <button className="rw-btn rw-btn--primary rw-btn--lg" onClick={handleContact}>Work With RYZE →</button>
            </div>
          </div>
        </div>

      </section>
      <Footer onNavigate={onNavigate} />
    </>
  );
}