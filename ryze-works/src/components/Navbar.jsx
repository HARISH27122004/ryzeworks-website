import { useEffect, useRef, useState } from "react";
import "../styles/Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);

      if (currentY <= 50) {
        setShowNav(true);
      } else if (currentY > lastY.current) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 769) setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`lp-nav 
          ${scrolled ? "scrolled" : ""} 
          ${showNav ? "show-nav" : "hide-nav"}`}
      >
        {/* Logo */}
        <a href="#" className="lp-nav-logo">
          <span>Ryze Works</span>
        </a>

        {/* Desktop Links */}
        <ul className="lp-nav-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="lp-nav-actions">
          <a href="#" className="btn-ghost">Sign in</a>
          <a href="#" className="btn-nav-cta">Get started</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={menuOpen}
        >
          <span className="ham-line top" />
          <span className="ham-line mid" />
          <span className="ham-line bot" />
        </button>
      </nav>

      <div
        className={`fullscreen-menu ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMenu();
        }}
      >
        {/* Close Button */}
        <button
          className="fm-close-btn"
          onClick={closeMenu}
          aria-label="Close Menu"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 2L14 14M14 2L2 14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Menu Content */}
        <div className="fm-inner">
          <ul className="fm-links">
            {NAV_LINKS.map(({ label, href }, i) => (
              <li key={label} style={{ "--delay": `${i * 0.07}s` }}>
                <a href={href} onClick={closeMenu}>
                  <span>{label}</span>
                  <span className="fm-arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Footer Buttons */}
          <div className="fm-footer">
            <div className="fm-footer-btns">
              <a href="#" className="fm-btn fm-btn-ghost" onClick={closeMenu}>
                Sign in
              </a>
              <a href="#" className="fm-btn fm-btn-cta" onClick={closeMenu}>
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}