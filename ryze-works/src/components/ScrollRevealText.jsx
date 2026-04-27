import { useEffect, useRef, useMemo } from 'react';
import '../styles/ScrollRevealText.css';

/**
 * ScrollRevealText
 * - Normal page scroll (no sticky lock, no height inflation)
 * - Each CHARACTER lights up as it crosses a horizontal threshold in the viewport
 * - Bright/dim boundary cuts mid-word, exactly like Juice Pharma
 *
 * Props:
 *   lines     – string[]
 *   className – string
 *   threshold – 0–1, how far down the viewport the bright line sits (default 0.72)
 */
const ScrollRevealText = ({ lines = [], className = '', threshold = 0.72 }) => {
  const charRefs = useRef([]);

  // Build flat list of characters, preserving spaces as non-animated gaps
  const charList = useMemo(() => {
    const flat = [];
    lines.forEach((line, li) => {
      [...line].forEach((ch, ci) => {
        flat.push({ ch, li, ci, idx: flat.length, isSpace: ch === ' ' });
      });
      // newline sentinel — rendered as a <br>
      flat.push({ ch: '\n', li, ci: -1, idx: flat.length, isBreak: true });
    });
    return flat;
  }, [lines]);

  useEffect(() => {
    const els = charRefs.current;

    const onScroll = () => {
      const vh        = window.innerHeight;
      const brightY   = vh * threshold; // y-position of the "lit" boundary

      els.forEach((el) => {
        if (!el) return;
        const rect   = el.getBoundingClientRect();
        const charMid = rect.top + rect.height * 0.5;

        // progress: 0 = below the bright line, 1 = above it
        // ramp over 60px for a soft edge
        const progress = Math.max(0, Math.min(1, (brightY - charMid) / 60 + 1));
        el.style.opacity = 0.20 + progress * 0.80;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once — characters above fold start at correct opacity
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [charList, threshold]);

  // Render: span per char, <br> for line breaks, spaces as plain text
  let refIdx = 0;
  const rendered = charList.map((item) => {
    if (item.isBreak) {
      return <br key={`br-${item.li}`} />;
    }
    if (item.isSpace) {
      refIdx++;
      return <span key={item.idx} className="srt-space"> </span>;
    }
    const i = refIdx++;
    return (
      <span
        key={item.idx}
        className="srt-char"
        ref={(el) => (charRefs.current[i] = el)}
        style={{ opacity: 0.20 }}
      >
        {item.ch}
      </span>
    );
  });

  return (
    <section className={`srt-section ${className}`}>
      <div className="srt-text">
        {rendered}
      </div>
    </section>
  );
};

export default ScrollRevealText;


                  // <section id="about">
                  //   <ScrollRevealText
                  //     lines={[
                  //       "WHERE A HEALTHCARE",
                  //       "AGENCY WHERE",
                  //       "ENERGETIC MINDS",
                  //       "CREATE KINETIC IDEAS.",
                  //       "IDEAS THAT INSPIRE",
                  //       "CLIENTS AND SET",
                  //       "BRANDS INTO MOTION.",
                  //       "YOU CAN SEE IT.",
                  //       "YOU CAN FEEL IT.",
                  //       "FIND OUT WHAT",
                  //       "IT CAN DO FOR YOU.",
                  //     ]}
                  //     threshold={0.72}
                  //   />
                  // </section>