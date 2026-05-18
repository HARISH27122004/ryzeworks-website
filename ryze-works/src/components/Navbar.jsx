import { useEffect, useRef, useState, useCallback } from "react";
import "../styles/Navbar.css";

const NAV_LINKS = [
  { label: "About Us", type: "page", page: "about" },
  { label: "Careers", type: "page", page: "careers" },
  { label: "Projects", type: "scroll", id: "projects" },
  { label: "Contact", type: "scroll", id: "contact" },
];

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

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

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e, item) => {
    e.preventDefault();

    closeMenu();

    if (item.type === "page") {
      onNavigate(item.page);
    }

    if (item.type === "scroll") {
      onNavigate("home", item.id);
    }
  };

  return (
    <>
      <nav
        className={`lp-nav 
          ${scrolled ? "scrolled" : ""} 
          ${showNav ? "show-nav" : "hide-nav"}`}
      >
        {/* Logo */}
        <a
          href="#"
          className="lp-nav-logo"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
          }}
        >
          <span>Ryze Works</span>
        </a>

        {/* Desktop Links */}
        <ul className="lp-nav-links">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="lp-nav-actions">
          <a href="#" className="btn-ghost">
            Sign in
          </a>

          <a href="#" className="btn-nav-cta">
            Get started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger-btn ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
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
            {NAV_LINKS.map((item, i) => (
              <li key={item.label} style={{ "--delay": `${i * 0.07}s` }}>
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, item)}
                >
                  <span>{item.label}</span>
                  <span className="fm-arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Footer Buttons */}
          <div className="fm-footer">
            <div className="fm-footer-btns">
              <a href="#" className="fm-btn fm-btn-ghost">
                Sign in
              </a>

              <a href="#" className="fm-btn fm-btn-cta">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}