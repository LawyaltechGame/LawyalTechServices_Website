import { useState, useEffect } from 'react';

// Explicitly export the ScrollDirection type
export type ScrollDirection = 'up' | 'down' | null;

export const useScrollDirection = (): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
      }
      
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return scrollDirection;
};