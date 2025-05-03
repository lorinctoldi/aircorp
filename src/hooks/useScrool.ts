import { useEffect, useRef, useState } from 'react';

function useScroll() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition === 0) {
        setIsScrollingUp(true);
      } else if (currentScrollPosition > lastScrollPosition.current) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      lastScrollPosition.current = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrollingUp;
}

export default useScroll;
