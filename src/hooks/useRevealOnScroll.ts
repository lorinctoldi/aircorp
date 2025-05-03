import { useEffect, useState, RefObject } from 'react';

export default function useRevealOnScroll(
  ref: RefObject<Element | null>,
  threshold: number = 0.9,
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const currentElement = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold },
    );

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, [ref, threshold]);

  return isVisible;
}
