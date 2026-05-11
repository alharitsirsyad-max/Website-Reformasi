<<<<<<< HEAD
import { useRef, ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks';

interface FadeUpProps {
  children: ReactNode;
=======
import React, { useEffect, useRef, useState } from 'react';
import styles from './FadeUp.module.css';

interface FadeUpProps {
  children: React.ReactNode;
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
  delay?: number;
  className?: string;
}

<<<<<<< HEAD
export default function FadeUp({ children, delay = 0, className = '' }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);
=======
export function FadeUp({ children, delay = 0, className = '' }: FadeUpProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837

  return (
    <div
      ref={ref}
<<<<<<< HEAD
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
=======
      className={`${styles.fadeUp} ${isVisible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
    >
      {children}
    </div>
  );
}
