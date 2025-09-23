import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  className = '',
  animationType = 'fade',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = false,
}) => {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
  });
  const scrollDirection = useScrollDirection();

  // Defer activation until browser is idle to reduce main-thread work around LCP
  useEffect(() => {
    const idle = (window as any).requestIdleCallback || ((cb: any) => setTimeout(cb, 1));
    idle(() => setReady(true));
  }, []);

  const getAnimationVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
        },
      },
    };

    switch (animationType) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration,
              delay,
            },
          },
        };

      case 'slideUp':
        return {
          hidden: {
            opacity: 0,
            y: scrollDirection === 'up' ? -30 : scrollDirection === 'down' ? 30 : 0,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
            },
          },
        };

      case 'slideDown':
        return {
          hidden: {
            opacity: 0,
            y: scrollDirection === 'up' ? 30 : scrollDirection === 'down' ? -30 : 0,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
            },
          },
        };

      case 'slideLeft':
        return {
          hidden: {
            opacity: 0,
            x: scrollDirection === 'up' ? -30 : scrollDirection === 'down' ? 30 : 0,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
            },
          },
        };

      case 'slideRight':
        return {
          hidden: {
            opacity: 0,
            x: scrollDirection === 'up' ? 30 : scrollDirection === 'down' ? -30 : 0,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
            },
          },
        };

      case 'scale':
        return {
          hidden: {
            opacity: 0,
            scale: 0.8,
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration,
              delay,
            },
          },
        };

      case 'rotate':
        return {
          hidden: {
            opacity: 0,
            rotate: scrollDirection === 'up' ? -10 : scrollDirection === 'down' ? 10 : 0,
          },
          visible: {
            opacity: 1,
            rotate: 0,
            transition: {
              duration,
              delay,
            },
          },
        };

      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      variants={getAnimationVariants()}
      initial="hidden"
      animate={ready && isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;