import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that tracks when an element enters the viewport.
 * @param {number} threshold - IntersectionObserver threshold (0-1). Default 0.12.
 * @returns {[React.RefObject, boolean]} - [ref, inView] tuple
 */
export default function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
