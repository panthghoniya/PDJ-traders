import { useEffect, useRef } from 'react';

/**
 * useScrollAnimation
 * A custom hook that uses IntersectionObserver to trigger
 * CSS-class-based animations when an element enters the viewport.
 *
 * @param {object} options - IntersectionObserver options
 * @returns {ref} - Attach this ref to the element you want to observe
 */
const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in-view');
            // Unobserve after animation to prevent re-triggering
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.12,
        rootMargin: options.rootMargin || '0px 0px -60px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      // Observe the element and all its direct children with data-animate
      const targets = currentRef.querySelectorAll('[data-animate]');
      if (targets.length > 0) {
        targets.forEach((el) => observer.observe(el));
      } else {
        observer.observe(currentRef);
      }
    }

    return () => {
      if (currentRef) observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return ref;
};

export default useScrollAnimation;
