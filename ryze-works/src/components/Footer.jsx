import '../styles/Footer.css';

/* ── Social icons ── */
const icons = {
  twitter: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm8.75 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
    </svg>
  ),
};

/* ── Marquee items ── */
const MARQUEE_ITEMS = [
  'PHOTOGRAPHY', 'VIDEOGRAPHY', 'ANIMATION', 'BRAND IDENTITY',
  'DIGITAL LAUNCH', 'WEB PRESENCE', 'PROMOTIONS', 'CAMPAIGNS', 'MARKETING',
];

/* ── Nav links ── */
const NAV = {
  Work: [
    { label: 'Case Studies', href: '#' },
    { label: 'Projects', href: '#projects' },
  ],
  Studio: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#', badge: 'Hiring' },
  ],
  Services: [
    { label: 'Branding', href: '#' },
    { label: 'Web & App', href: '#' },
  ],
};

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  const handleLinkClick = (e, label, href) => {
    if (label === 'Careers' && onNavigate) {
      e.preventDefault();
      onNavigate('careers');
    }
    if (label === 'About Us' && onNavigate) {
      e.preventDefault();
      onNavigate('about');
    }
    if (label === 'Case Studies' && onNavigate) {   // ← add this
      e.preventDefault();
      onNavigate('casestudies');
    }
    if (label === 'Projects' && onNavigate) {
      e.preventDefault();
      onNavigate('home', 'projects');  // navigates home then scrolls to #projects
    }
    if (label === 'Branding' && onNavigate) {
      e.preventDefault();
      onNavigate('branding');
    }
  };

  return (
    <footer className="footer">

      {/* ── Scrolling marquee ── */}
      <div className="footer-marquee-wrap" aria-hidden="true">
        <div className="footer-marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span className="footer-marquee-item" key={i}>
              {item}
              <span className="footer-marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="footer-body">

        {/* Brand column */}
        <div className="footer-brand">
          <a href="#" className="footer-logo" aria-label="Ryzeworks home">
            <div className="footer-logo-mark">
              <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 2h7.5a4 4 0 010 8H7l5 6H9L4.5 10H3v6H1V2h2zm2 2v4h5.5a2 2 0 000-4H5z" />
              </svg>
            </div>
            <span className="footer-logo-name">Ryzeworks</span>
          </a>

          <p className="footer-tagline">
            A creative studio building brands and digital experiences that people remember.
            Bold ideas, executed with precision.
          </p>

          <div className="footer-socials" role="list" aria-label="Social media links">
            {Object.entries(icons).map(([name, icon]) => (
              <a
                key={name}
                href="#"
                className="footer-social-btn"
                aria-label={name}
                role="listitem"
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {Object.entries(NAV).map(([title, links]) => (
          <div className="footer-col" key={title}>
            <p className="footer-col-title">{title}</p>
            <ul className="footer-nav">
              {links.map(({ label, href, badge }) => (
                <li key={label}>
                  <a href={href} onClick={(e) => handleLinkClick(e, label, href)}>
                    {label}
                    {badge && <span className="footer-nav-badge">{badge}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">

          <span className="footer-copy">
            © {year} Ryzeworks. Made with
            <span className="footer-copy-heart" aria-hidden="true">♥</span>
            and lots of coffee.
          </span>

          <nav className="footer-legal" aria-label="Legal links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </nav>

        </div>
      </div>

    </footer>
  );
}