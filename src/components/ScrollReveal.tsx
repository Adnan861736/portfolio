'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const animationClass = {
    left: 'animate-fade-in-left',
    right: 'animate-fade-in-right',
    up: 'animate-fade-in-up',
    down: 'animate-fade-in-down',
  }[direction];

  const delayClass = delay > 0 ? `animate-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`opacity-0 ${animationClass} ${delayClass} animate-fill-both ${className}`}
    >
      {children}
    </div>
  );
}
