import { useState, useEffect, useRef } from "react";
import "../styles/ProjectGallery.css";

export default function ProjectGallery({ project, onBack }) {
  const [lightbox, setLightbox] = useState(null);
  const [columns, setColumns] = useState([[], [], []]);
  const [colCount, setColCount] = useState(3);

  // ── Keyboard navigation ──
  useEffect(() => {
    if (lightbox === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft")
        setLightbox((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
      else if (e.key === "ArrowRight")
        setLightbox((prev) => (prev + 1) % project.gallery.length);
      else if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, project.gallery.length]);

  // ── Responsive column count ──
  useEffect(() => {
    const updateCols = () => {
      if (window.innerWidth < 480) setColCount(2);
      else if (window.innerWidth < 900) setColCount(2);
      else setColCount(3);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  // ── Build masonry columns by measuring natural image dimensions ──
  useEffect(() => {
    if (!project.gallery.length) return;

    const empty = Array.from({ length: colCount }, () => []);
    const colHeights = new Array(colCount).fill(0);
    let loaded = 0;

    // We collect { src, index, ratio } for every image then distribute
    const items = new Array(project.gallery.length);

    project.gallery.forEach((src, i) => {
      const img = new Image();
      img.onload = () => {
        const ratio = img.naturalHeight / img.naturalWidth; // >1 = portrait, <1 = landscape
        items[i] = { src, index: i, ratio };
        loaded++;
        if (loaded === project.gallery.length) {
          // Reset
          const cols = Array.from({ length: colCount }, () => []);
          const heights = new Array(colCount).fill(0);

          items.forEach((item) => {
            // Shortest column gets this item
            const shortest = heights.indexOf(Math.min(...heights));
            cols[shortest].push(item);
            heights[shortest] += item.ratio; // accumulate relative height
          });
          setColumns(cols);
        }
      };
      img.onerror = () => {
        items[i] = { src, index: i, ratio: 1 };
        loaded++;
        if (loaded === project.gallery.length) {
          const cols = Array.from({ length: colCount }, () => []);
          const heights = new Array(colCount).fill(0);
          items.forEach((item) => {
            const shortest = heights.indexOf(Math.min(...heights));
            cols[shortest].push(item);
            heights[shortest] += item.ratio;
          });
          setColumns(cols);
        }
      };
      img.src = src;
    });
  }, [project.gallery, colCount]);

  return (
    <div className="gallery-page">
      {/* ── Header ── */}
      <header className="gallery-header">
        <button className="gallery-back" onClick={onBack}>← BACK</button>
        <div className="gallery-title-block">
          <h1 className="gallery-name">{project.name}</h1>
          <span className="gallery-type">{project.type} / {project.year}</span>
        </div>
      </header>
      <p className="gallery-desc">{project.desc}</p>

      {/* ── Pinterest-style masonry grid ── */}
      <div className="gallery-masonry" style={{ "--col-count": colCount }}>
        {columns.map((col, ci) => (
          <div className="gallery-masonry-col" key={ci}>
            {col.map(({ src, index, ratio }) => (
              <div
                className="gallery-item"
                key={index}
                onClick={() => setLightbox(index)}
                style={{ "--ratio": ratio }}
              >
                <img
                  src={src}
                  alt={`${project.name} ${index + 1}`}
                  loading="lazy"
                />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-zoom">⤢</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + project.gallery.length) % project.gallery.length);
            }}
          >‹</button>
          <img
            src={project.gallery[lightbox]}
            alt={`${project.name} ${lightbox + 1}`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % project.gallery.length);
            }}
          >›</button>
          <span className="lightbox-counter">
            {lightbox + 1} / {project.gallery.length}
          </span>
        </div>
      )}
    </div>
  );
}