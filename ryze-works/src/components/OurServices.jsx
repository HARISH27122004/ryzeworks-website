import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/services";
import "../styles/OurServices.css";

const serviceImages = {
  1: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  2: "https://plus.unsplash.com/premium_photo-1661311862112-a360a205ab1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  3: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  4: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  5: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  6: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
  7: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  8: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  9: "https://plus.unsplash.com/premium_photo-1733306503329-7a8c701fa9ad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  10: "https://plus.unsplash.com/premium_photo-1682140928775-fb5e23bd510f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const VisualPanel = ({ feature, index }) => {
  if (!feature) return null;
  const img = serviceImages[feature.id];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={feature.id}
        className="visual-panel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img src={img} alt={feature.title} className="visual-bg-image" />
        <div className="visual-image-gradient" />
        <div className="visual-content">
          <motion.div
            className="visual-service-number"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.div>

          <motion.div
            className="visual-service-testimonial"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          >
            <p className="visual-test-quote">"{feature.testimonial.quote}"</p>
            <span className="visual-test-client">— {feature.testimonial.client}</span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function OurProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFeature = services[activeIndex];

  const moveUp = () => setActiveIndex((prev) => Math.max(0, prev - 1));
  const moveDown = () =>
    setActiveIndex((prev) => Math.min(services.length - 1, prev + 1));

  const handlePillClick = useCallback((e) => {
    const idx = Number(e.currentTarget.dataset.index);
    if (!isNaN(idx)) setActiveIndex(idx);
  }, []);

  return (
    <div className="explorer-backdrop">
      
      <div className="services-heading">
        <span className="services-our">Our</span>{" "}
        <span className="services-text">Services</span>
      </div>

      <div className="explorer-modal">
        <div className="explorer-layout">

          {/* Left sidebar */}
          <div className="sidebar">
            <div className="nav-arrows">
              <button
                className="arrow-btn"
                onClick={moveUp}
                disabled={activeIndex === 0}
                aria-label="Move up"
              >
                ▲
              </button>
              <button
                className="arrow-btn"
                onClick={moveDown}
                disabled={activeIndex === services.length - 1}
                aria-label="Move down"
              >
                ▼
              </button>
            </div>

            <ul className="feature-list">
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <li key={service.id}>
                    {isActive ? (
                      <motion.div
                        className="feature-card expanded"
                        initial={{ opacity: 0, y: -10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.34, 1.2, 0.64, 1] }}
                      >
                        <div className="feature-card-header">
                          <span className="icon-circle active-icon">−</span>
                          <span className="feature-label">{service.title}</span>
                        </div>
                        <p className="feature-desc">
                          <strong>{service.title}.</strong> {service.detail}
                        </p>
                        <div className="service-tags">
                          {service.whatWeDid.map((w, i) => (
                            <motion.span
                              key={w}
                              className="service-tag"
                              initial={{ opacity: 0, scale: 0.85 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 + i * 0.04, duration: 0.3 }}
                            >
                              {w}
                            </motion.span>
                          ))}
                        </div>
                        <div className="service-industries">
                          {service.industries.map((ind, i) => (
                            <motion.span
                              key={ind}
                              className="service-industry"
                              initial={{ opacity: 0, scale: 0.85 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
                            >
                              {ind}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <button
                        className="feature-pill"
                        data-index={index}
                        onClick={handlePillClick}
                      >
                        <span className="icon-circle">+</span>
                        <span className="feature-label">{service.title}</span>
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right visual */}
          <VisualPanel feature={activeFeature} index={activeIndex} />
        </div>
      </div>
    </div>
  );
}