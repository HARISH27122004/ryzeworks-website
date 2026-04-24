import { useEffect, useRef, useState } from "react";
import "../styles/HorizontalScroll.css";
import cover from '../coverimages/cover2.png';

export const projects = [
  {
    id: "vercel",
    name: "VERCEL",
    type: "WEBSITE",
    year: "2K21",
    desc: "Joined forces with the guardian knights of PaaS on high-level marketing tasks.",
    color: "#0a0a0a",
    accent: "#ffffff",
    shape: "triangle",
    image: `${cover}`,
    gallery: [
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=800&h=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&h=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=1200&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "ranboo",
    name: "RANBOO",
    type: "E-COMMERCE",
    year: "2K21",
    desc: "Reimagining the shopping experience for one of the cool kids.",
    color: "#111",
    accent: "#888",
    shape: "person",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "dynaboard",
    name: "DYNABOARD",
    type: "WEBSITE",
    year: "2K21",
    desc: "Ushering in the new face of collaborative development.",
    color: "#0d1117",
    accent: "#58a6ff",
    shape: "app",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "ai-lab",
    name: "AI LAB",
    type: "PLATFORM",
    year: "2K22",
    desc: "Building the future of intelligent digital products.",
    color: "#101010",
    accent: "#9f7aea",
    shape: "app",
    image: `${cover}`,
    gallery: [
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "cloud",
    name: "CLOUD",
    type: "SYSTEM",
    year: "2K23",
    desc: "Modern cloud-first systems with premium architecture.",
    color: "#0b0b0b",
    accent: "#ffffff",
    shape: "triangle",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "future-ui",
    name: "FUTURE UI",
    type: "DESIGN",
    year: "2K24",
    desc: "Premium futuristic interface design and interactions.",
    color: "#111111",
    accent: "#ffffff",
    shape: "person",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    ],
  },
];

function ProjectCard({ project, index, onProjectSelect }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const goToGallery = () => onProjectSelect(project);

  return (
    <article
      className={`project-card ${visible ? "visible" : ""}`}
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-media">
        {/* ── Wrapper constrains max-height; img inside is uncropped ── */}
        <div
          className="project-preview"
          onClick={goToGallery}
          style={{ background: project.color }}
        >
          <img
            src={project.image}
            alt={project.name}
            className="project-preview-img"
          />

          <div className="project-overlay" />

          <button
            className={`project-know-more ${hovered ? "show" : ""}`}
            onClick={(e) => { e.stopPropagation(); goToGallery(); }}
            aria-label={`View ${project.name} gallery`}
          >
            <span className="cta-dot" />
            KNOW MORE
          </button>
        </div>
      </div>

      <div className="project-info">
        <div className="project-meta-left">
          <span className="project-name">{project.name}</span>
          <span className="project-type-label">
            TYPE <strong>{project.type}</strong>
          </span>
        </div>
        <div className="project-meta-right">
          <span className="project-year">{project.year}</span>
          <span className="project-dash">——</span>
          <p className="project-desc">{project.desc}</p>
        </div>
      </div>
    </article>
  );
}

export default function HorizontalScroll({ onProjectSelect }) {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    let current = 0;
    let target = 0;
    const ease = 0.08;
    let rafId;

    const update = () => {
      current += (target - current) * ease;
      track.style.transform = `translate3d(${current}px,0,0)`;
      rafId = requestAnimationFrame(update);
    };

    const onScroll = () => {
      const rect = outer.getBoundingClientRect();
      const scrollable = outer.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const maxX = track.scrollWidth - window.innerWidth;
      target = -progress * maxX;
    };

    rafId = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isMobile]);

  return (
    <section
      className="showcase-outer"
      ref={outerRef}
      style={!isMobile ? { height: `${projects.length * 100}vh` } : undefined}
    >
      {/* Marquee */}
      <div className="showcase-marquee">
        <div className="showcase-marquee-track">
          {[
            "CREATE", 
            "INSPIRE", 
            "ELEVATE", 
            "DOMINATE",
            "CREATE", 
            "INSPIRE", 
            "ELEVATE", 
            "DOMINATE"
          ].map((text, i) => (
            <span key={i}>{text} /&nbsp;</span>
          ))}
        </div>
      </div>

      {isMobile ? (
        <div className="showcase-mobile-stack">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onProjectSelect={onProjectSelect}
            />
          ))}
        </div>
      ) : (
        <div className="showcase-sticky">
          <div className="showcase-projects" ref={trackRef}>
            {projects.map((project, index) => (
              <div className="showcase-panel" key={`${project.id}-${index}`}>
                <ProjectCard
                  project={project}
                  index={index}
                  onProjectSelect={onProjectSelect}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}