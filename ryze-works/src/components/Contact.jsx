import { useEffect, useRef, useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="contact" id="contact-us" ref={ref}>
      <div className="contact-inner">

        {/* ── Left: text ── */}
        <div className={`contact-text ${visible ? 'visible' : ''}`}>
          <h2 className="contact-headline">
            GOT A <span>PROJECT</span>
            <br />IN MIND?
          </h2>
          <p className="contact-sub">
            We're always looking for new challenges.
            <br />
            Drop us a line and let's make something cool.
          </p>
          <a href="mailto:hello@ryzeworks.com" className="contact-email">
            hello@ryzeworks.com
            <span className="contact-arrow">→</span>
          </a>
        </div>

        {/* ── Right: form ── */}
        <div className={`contact-form-wrap ${visible ? 'visible' : ''}`}>
          <div className="contact-form">
            <div className="form-field">
              <label htmlFor="contact-name">NAME</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">EMAIL</label>
              <input
                id="contact-email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-project">PROJECT</label>
              <textarea
                id="contact-project"
                rows={4}
                placeholder="Tell us about your project..."
              />
            </div>

            <button className="form-submit" type="button">
              SEND MESSAGE
              <span className="submit-dot" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}