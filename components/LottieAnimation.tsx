
import React, { useEffect, useRef } from 'react';
import lottie from 'https://esm.sh/lottie-web@5.12.2';

interface LottieAnimationProps {
  url: string;
  className?: string;
  delay?: number;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ url, className = '', delay = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: url,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && animationRef.current) {
            setTimeout(() => {
              animationRef.current.play();
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, [url, delay]);

  return <div ref={containerRef} className={className} />;
};

export default LottieAnimation;
