import { useEffect, useRef, useState } from 'react';
import '../styles/Testimonials.css';

/* ── Star SVG ── */
const StarIcon = () => (
  <svg className="tcard-star" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.27 6.62l5.34-.78z" />
  </svg>
);

/* ── Avatar with initials fallback ── */
function Avatar({ name, src }) {
  const [errored, setErrored] = useState(false);
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  return (
    <div className="tcard-avatar">
      {src && !errored ? (
        <img
          src={src}
          alt={name}
          onError={() => setErrored(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <span className="tcard-avatar-initials">{initials}</span>
      )}
    </div>
  );
}

/* ── Single card ── */
function TestimonialCard({ quote, author, role, company, stars = 5, featured = false, visible }) {
  return (
    <article className={`tcard${featured ? ' tcard--featured' : ''}${visible ? ' visible' : ''}`}>
      <span className="tcard-quote-mark">"</span>

      <div className="tcard-stars" aria-label={`${stars} out of 5 stars`}>
        {Array.from({ length: stars }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      <p className="tcard-body">{quote}</p>

      <div className="tcard-divider" />

      <div className="tcard-author">
        <Avatar name={author} />
        <div className="tcard-author-info">
          <span className="tcard-name">{author}</span>
          <span className="tcard-role">{role}</span>
        </div>
        <span className="tcard-company-badge">{company}</span>
      </div>
    </article>
  );
}

/* ── Testimonials section ── */
const TESTIMONIALS = [
  {
    quote:
      "Working with Ryzeworks transformed our product entirely. The attention to detail, motion craft, and design quality is unlike anything we'd seen from other agencies. Shipped in half the time we expected.",
    author: 'Lena Hartmann',
    role: 'Head of Product · Lumio',
    company: 'Lumio',
    stars: 5,
  },
  {
    quote:
      "They don't just build what you ask for — they push back, ask the right questions, and end up delivering something better than what you imagined. Genuinely one of the best creative teams we've partnered with.",
    author: 'Marcus Reid',
    role: 'Founder & CEO · Stackr',
    company: 'Stackr',
    stars: 5,
    featured: true,
  },
  {
    quote:
      "From the first call to the final handoff, everything was seamless. The interface they built has increased our conversion rate by 38% — and it just looks incredible. Clients notice immediately.",
    author: 'Priya Nair',
    role: 'VP Marketing · Vantage',
    company: 'Vantage',
    stars: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>

      {/* Header */}
      <header className={`testimonials-header ${visible ? 'visible' : ''}`}>
        <p className="testimonials-eyebrow">
          <span className="testimonials-eyebrow-line" />
          Client stories
          <span className="testimonials-eyebrow-line" />
        </p>
        <h2 className="testimonials-title">
          Trusted by teams who
          <br />
          <span>care about craft</span>
        </h2>
        <p className="testimonials-subtitle">
          Don't take our word for it — here's what the people we've built with have to say.
        </p>
      </header>

      {/* Cards */}
      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={i} {...t} visible={visible} />
        ))}
      </div>

    </section>
  );
}