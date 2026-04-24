// import { useEffect, useRef, useState, useCallback } from 'react';
// import '../styles/ScrollFilm.css';

// /**
//  * ScrollFilm
//  * ----------
//  * Plays a sequence of images forward on scroll-down and backward on scroll-up.
//  *
//  * Props:
//  *   images       – ordered array of image URLs (frame 0 → frame N)
//  *   scrollHeight – how many vh units the scroll track occupies (default 2000)
//  */

// // ── Drop your frame paths here ────────────────────────────────────────────────
// // When using inside a CRA / Vite project, import each image or put them in
// // /public and reference as '/frames/ezgif-frame-001.jpg', etc.
// // For this demo we accept them as a prop.
// // ─────────────────────────────────────────────────────────────────────────────

// const ScrollFilm = ({ images = [], scrollHeight = 2000 }) => {
//   const trackRef      = useRef(null);
//   const [frameIdx, setFrameIdx]   = useState(0);
//   const [hintVisible, setHintVisible] = useState(true);
//   const rafRef        = useRef(null);
//   const lastScrollY   = useRef(0);

//   const totalFrames = images.length;

//   // Derive the current frame from scroll position inside the track
//   const calcFrame = useCallback(() => {
//     if (!trackRef.current || totalFrames === 0) return;

//     const { top, height } = trackRef.current.getBoundingClientRect();
//     // How far through the track are we? (0 → 1)
//     const progress = Math.min(1, Math.max(0, -top / (height - window.innerHeight)));
//     const idx = Math.min(totalFrames - 1, Math.floor(progress * totalFrames));
//     setFrameIdx(idx);
//   }, [totalFrames]);

//   // rAF-throttled scroll handler
//   const onScroll = useCallback(() => {
//     if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     rafRef.current = requestAnimationFrame(() => {
//       calcFrame();

//       // Hide hint once user has scrolled a bit
//       if (window.scrollY > 80) setHintVisible(false);
//       lastScrollY.current = window.scrollY;
//     });
//   }, [calcFrame]);

//   useEffect(() => {
//     window.addEventListener('scroll', onScroll, { passive: true });
//     calcFrame(); // run once on mount
//     return () => {
//       window.removeEventListener('scroll', onScroll);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [onScroll, calcFrame]);

//   const progress = totalFrames > 1 ? (frameIdx / (totalFrames - 1)) * 100 : 0;

//   return (
//     <>
//       {/* ── Tall scroll track ── */}
//       <div
//         className="scroll-film-track"
//         ref={trackRef}
//         style={{ height: `${scrollHeight}vh` }}
//       >
//         {/* Sticky viewport */}
//         <div className="scroll-film-sticky">

//           {/* Frames — only render current; rest are display:none for perf */}
//           {images.map((src, i) => (
//             <img
//               key={i}
//               src={src}
//               alt={`frame-${i}`}
//               className={`scroll-film-frame${i === frameIdx ? ' active' : ''}`}
//               // Preload neighbours
//               loading={Math.abs(i - frameIdx) <= 2 ? 'eager' : 'lazy'}
//               draggable={false}
//             />
//           ))}

//           {/* Vignette */}
//           <div className="scroll-film-vignette" />

//           {/* HUD */}
//           <div className="scroll-film-hud">
//             {/* Progress bar */}
//             <div
//               className="scroll-film-progress-bar"
//               style={{ width: `${progress}%` }}
//             />

//             {/* Frame counter */}
//             <div className="scroll-film-counter">
//               {String(frameIdx + 1).padStart(2, '0')} / {String(totalFrames).padStart(2, '0')}
//             </div>

//             {/* Scroll hint */}
//             <div className={`scroll-film-hint${hintVisible ? '' : ' hidden'}`}>
//               <span>SCROLL</span>
//               <div className="scroll-film-arrow" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ScrollFilm;


// import { useEffect, useRef, useState, useCallback } from 'react';
// import '../styles/ScrollFilm.css';

// const FPS = 1; // frames per second — lower = slower playback (try 4–10)

// const ScrollFilm = ({ images = [], onComplete }) => {
//   const canvasRef    = useRef(null);
//   const imagesRef    = useRef([]);
//   const frameIdx     = useRef(0);
//   const directionRef = useRef(null);
//   const playingRef   = useRef(false);
//   const rafRef       = useRef(null);
//   const lastScrollY  = useRef(0);
//   const scrollTimer  = useRef(null);

//   const [displayFrame, setDisplayFrame] = useState(0);
//   const [loaded,       setLoaded]       = useState(false);
//   const [hintVisible,  setHintVisible]  = useState(true);
//   const [fadeOut,      setFadeOut]      = useState(false);
//   const [hidden,       setHidden]       = useState(false);

//   const totalFrames = images.length;

//   // ── Draw frame onto canvas ─────────────────────────────────────────────────
//   const drawFrame = useCallback((idx) => {
//     const canvas = canvasRef.current;
//     const img    = imagesRef.current[idx];
//     if (!canvas || !img || !img.complete) return;

//     const W = canvas.offsetWidth  || window.innerWidth;
//     const H = canvas.offsetHeight || window.innerHeight;

//     canvas.width  = W;
//     canvas.height = H;

//     const ctx = canvas.getContext('2d');
//     const canvasAR = W / H;
//     const imgAR    = img.naturalWidth / img.naturalHeight;
//     let dW, dH, dX, dY;

//     if (canvasAR > imgAR) { dW = W; dH = W / imgAR; }
//     else                  { dH = H; dW = H * imgAR; }

//     dX = (W - dW) / 2;
//     dY = (H - dH) / 2;

//     ctx.clearRect(0, 0, W, H);
//     ctx.drawImage(img, dX, dY, dW, dH);
//   }, []);

//   // ── Trigger fade-out then unmount ─────────────────────────────────────────
//   const triggerComplete = useCallback(() => {
//     playingRef.current = false;
//     if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     setFadeOut(true);
//     setTimeout(() => {
//       setHidden(true);
//       if (onComplete) onComplete();
//     }, 800);
//   }, [onComplete]);

//   // ── Auto-play tick ────────────────────────────────────────────────────────
//   const startPlayback = useCallback((direction) => {
//     if (playingRef.current && directionRef.current === direction) return;
//     directionRef.current = direction;
//     playingRef.current   = true;
//     if (rafRef.current) cancelAnimationFrame(rafRef.current);

//     const interval = 1000 / FPS;
//     let lastTime   = null;

//     const tick = (timestamp) => {
//       if (!playingRef.current) return;

//       if (!lastTime || timestamp - lastTime >= interval) {
//         lastTime = timestamp;
//         const next = frameIdx.current + (direction === 'forward' ? 1 : -1);

//         if (next >= totalFrames) {
//           drawFrame(totalFrames - 1);
//           setDisplayFrame(totalFrames - 1);
//           frameIdx.current = totalFrames - 1;
//           triggerComplete();
//           return;
//         }

//         if (next < 0) {
//           frameIdx.current   = 0;
//           playingRef.current = false;
//           return;
//         }

//         frameIdx.current = next;
//         drawFrame(next);
//         setDisplayFrame(next);
//       }

//       if (playingRef.current) rafRef.current = requestAnimationFrame(tick);
//     };

//     rafRef.current = requestAnimationFrame(tick);
//   }, [totalFrames, drawFrame, triggerComplete]);

//   const stopPlayback = useCallback(() => {
//     playingRef.current = false;
//     if (rafRef.current) cancelAnimationFrame(rafRef.current);
//   }, []);

//   // ── Scroll handler ────────────────────────────────────────────────────────
//   const onScroll = useCallback(() => {
//     if (fadeOut || hidden) return;
//     const currentY = window.scrollY;
//     const delta    = currentY - lastScrollY.current;
//     lastScrollY.current = currentY;
//     if (Math.abs(delta) < 1) return;

//     setHintVisible(false);
//     startPlayback(delta > 0 ? 'forward' : 'backward');

//     clearTimeout(scrollTimer.current);
//     scrollTimer.current = setTimeout(() => stopPlayback(), 400);
//   }, [fadeOut, hidden, startPlayback, stopPlayback]);

//   // ── Preload all images ────────────────────────────────────────────────────
//   useEffect(() => {
//     if (!images.length) return;
//     let count = 0;
//     imagesRef.current = new Array(images.length);
//     setLoaded(false);

//     images.forEach((src, i) => {
//       const img = new window.Image();
//       img.onload = () => {
//         count++;
//         if (count === images.length) {
//           setLoaded(true);
//           // Draw first frame AFTER state update
//           requestAnimationFrame(() => drawFrame(0));
//         }
//       };
//       img.onerror = () => console.error(`Failed to load frame ${i}:`, src);
//       img.src = src;
//       imagesRef.current[i] = img;
//     });
//   }, [images, drawFrame]);

//   // ── Attach/detach scroll listener ────────────────────────────────────────
//   useEffect(() => {
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => {
//       window.removeEventListener('scroll', onScroll);
//       stopPlayback();
//       clearTimeout(scrollTimer.current);
//     };
//   }, [onScroll, stopPlayback]);

//   // ── Redraw on resize ──────────────────────────────────────────────────────
//   useEffect(() => {
//     const onResize = () => drawFrame(frameIdx.current);
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, [drawFrame]);

//   if (hidden) return null;

//   const progress = totalFrames > 1 ? (displayFrame / (totalFrames - 1)) * 100 : 0;

//   return (
//     // outer wrapper: position:relative, height = spacer + 100vh so sticky works
//     <div className={`sf-wrap${fadeOut ? ' sf-fadeout' : ''}`}>

//       {/* sticky panel — stays in viewport while user scrolls the wrapper */}
//       <div className="sf-sticky">
//         <canvas ref={canvasRef} className="sf-canvas" />

//         {!loaded && (
//           <div className="sf-loader">
//             <div className="sf-loader-bar" />
//             <p className="sf-loader-text">Loading frames…</p>
//           </div>
//         )}

//         <div className="sf-vignette" />

//         <div className="sf-hud">
//           <div className="sf-progress" style={{ width: `${progress}%` }} />
//           <div className="sf-counter">
//             {String(displayFrame + 1).padStart(2, '0')}
//             <span className="sf-counter-sep"> / </span>
//             {String(totalFrames).padStart(2, '0')}
//           </div>
//           <div className={`sf-hint${hintVisible ? '' : ' sf-hint--hidden'}`}>
//             <span>SCROLL</span>
//             <div className="sf-arrow" />
//           </div>
//         </div>
//       </div>

//       {/* spacer BELOW the sticky panel — this is what makes the page scrollable */}
//       <div className="sf-spacer" />
//     </div>
//   );
// };

// export default ScrollFilm;

import { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/ScrollFilm.css';

const SCROLL_THRESHOLD = 40; // px of scroll = 1 frame step

const ScrollFilm = ({ images = [], onComplete }) => {
  const canvasRef    = useRef(null);
  const imagesRef    = useRef([]);
  const frameIdx     = useRef(0);
  const scrollAccum  = useRef(0); // accumulated scroll delta

  const [displayFrame, setDisplayFrame] = useState(0);
  const [loaded,       setLoaded]       = useState(false);
  const [hintVisible,  setHintVisible]  = useState(true);
  const [fadeOut,      setFadeOut]      = useState(false);
  const [hidden,       setHidden]       = useState(false);

  const totalFrames = images.length;

  // ── Draw a frame onto the canvas ───────────────────────────────────────────
  const drawTo = useCallback((canvas, idx) => {
    const img = imagesRef.current[idx];
    if (!canvas || !img || !img.complete) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    if (canvas.width !== W || canvas.height !== H) {
      canvas.width  = W;
      canvas.height = H;
    }

    const ctx   = canvas.getContext('2d');
    const cAR   = W / H;
    const iAR   = img.naturalWidth / img.naturalHeight;
    let dW, dH;
    if (cAR > iAR) { dW = W; dH = W / iAR; }
    else            { dH = H; dW = H * iAR; }
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(img, (W - dW) / 2, (H - dH) / 2, dW, dH);
  }, []);

  // ── Trigger complete sequence ──────────────────────────────────────────────
  const triggerComplete = useCallback(() => {
    setFadeOut(true);
    setTimeout(() => {
      setHidden(true);
      if (onComplete) onComplete();
    }, 900);
  }, [onComplete]);

  // ── Scroll handler: accumulate → step frames manually ─────────────────────
  const onWheel = useCallback((e) => {
    if (fadeOut || hidden) return;
    e.preventDefault(); // prevent page scroll while film is active

    setHintVisible(false);

    scrollAccum.current += e.deltaY;

    // Step forward frames
    while (scrollAccum.current >= SCROLL_THRESHOLD) {
      scrollAccum.current -= SCROLL_THRESHOLD;
      const next = frameIdx.current + 1;
      if (next >= totalFrames) {
        frameIdx.current = totalFrames - 1;
        drawTo(canvasRef.current, frameIdx.current);
        setDisplayFrame(frameIdx.current);
        triggerComplete();
        return;
      }
      frameIdx.current = next;
      drawTo(canvasRef.current, next);
      setDisplayFrame(next);
    }

    // Step backward frames
    while (scrollAccum.current <= -SCROLL_THRESHOLD) {
      scrollAccum.current += SCROLL_THRESHOLD;
      const prev = frameIdx.current - 1;
      if (prev < 0) {
        frameIdx.current = 0;
        scrollAccum.current = 0;
        return;
      }
      frameIdx.current = prev;
      drawTo(canvasRef.current, prev);
      setDisplayFrame(prev);
    }
  }, [fadeOut, hidden, totalFrames, drawTo, triggerComplete]);

  // ── Touch support ──────────────────────────────────────────────────────────
  const touchStartY = useRef(null);

  const onTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const onTouchMove = useCallback((e) => {
    if (touchStartY.current === null || fadeOut || hidden) return;
    e.preventDefault();
    const deltaY = touchStartY.current - e.touches[0].clientY; // invert: drag up = forward
    touchStartY.current = e.touches[0].clientY;

    scrollAccum.current += deltaY;

    while (scrollAccum.current >= SCROLL_THRESHOLD) {
      scrollAccum.current -= SCROLL_THRESHOLD;
      const next = frameIdx.current + 1;
      if (next >= totalFrames) {
        frameIdx.current = totalFrames - 1;
        drawTo(canvasRef.current, frameIdx.current);
        setDisplayFrame(frameIdx.current);
        triggerComplete();
        return;
      }
      frameIdx.current = next;
      drawTo(canvasRef.current, next);
      setDisplayFrame(next);
    }

    while (scrollAccum.current <= -SCROLL_THRESHOLD) {
      scrollAccum.current += SCROLL_THRESHOLD;
      const prev = frameIdx.current - 1;
      if (prev < 0) { frameIdx.current = 0; scrollAccum.current = 0; return; }
      frameIdx.current = prev;
      drawTo(canvasRef.current, prev);
      setDisplayFrame(prev);
    }
  }, [fadeOut, hidden, totalFrames, drawTo, triggerComplete]);

  // ── Preload images ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (!images.length) return;
    let count = 0;
    imagesRef.current = new Array(images.length);
    setLoaded(false);

    images.forEach((src, i) => {
      const img = new window.Image();
      img.onload = () => {
        count++;
        if (count === images.length) {
          setLoaded(true);
          requestAnimationFrame(() => drawTo(canvasRef.current, 0));
        }
      };
      img.onerror = () => console.error(`Failed to load frame ${i}:`, src);
      img.src = src;
      imagesRef.current[i] = img;
    });
  }, [images, drawTo]);

  // ── Attach wheel + touch listeners (passive: false to allow preventDefault) 
  useEffect(() => {
    const el = window;
    el.addEventListener('wheel',      onWheel,      { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: false });
    el.addEventListener('touchmove',  onTouchMove,  { passive: false });
    return () => {
      el.removeEventListener('wheel',      onWheel);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove',  onTouchMove);
    };
  }, [onWheel, onTouchStart, onTouchMove]);

  // ── Resize ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    const onResize = () => drawTo(canvasRef.current, frameIdx.current);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [drawTo]);

  if (hidden) return null;

  const progress = totalFrames > 1 ? (displayFrame / (totalFrames - 1)) * 100 : 0;

  return (
    <div className={`sf-wrap${fadeOut ? ' sf-fadeout' : ''}`}>
      <div className="sf-sticky">
        <canvas ref={canvasRef} className="sf-canvas sf-canvas--base" />

        {!loaded && (
          <div className="sf-loader">
            <div className="sf-loader-bar" />
            <p className="sf-loader-text">Loading frames…</p>
          </div>
        )}

        <div className="sf-vignette" />

        <div className="sf-hud">
          <div className="sf-progress" style={{ width: `${progress}%` }} />
          <div className="sf-counter">
            {String(displayFrame + 1).padStart(2, '0')}
            <span className="sf-counter-sep"> / </span>
            {String(totalFrames).padStart(2, '0')}
          </div>
          <div className={`sf-hint${hintVisible ? '' : ' sf-hint--hidden'}`}>
            <span>SCROLL TO PLAY</span>
            <div className="sf-arrow" />
          </div>
        </div>
      </div>

      {/* Spacer only needed if you want the page to be scrollable underneath */}
      <div className="sf-spacer" />
    </div>
  );
};

export default ScrollFilm;