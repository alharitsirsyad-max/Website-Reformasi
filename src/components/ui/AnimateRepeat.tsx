import { useRef, useState, useEffect, ReactNode } from 'react';
import { useInView } from '../../hooks/use-in-view';
import styles from './AnimateRepeat.module.css';

interface AnimateRepeatProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimateRepeat({
  children,
  delay = 0,
  className = '',
}: AnimateRepeatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.15 });
  
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const animationClass = scrollDirection === 'down' ? styles.fromBottom : styles.fromTop;

  return (
    <div
      ref={ref}
      className={`${styles.animateRepeat} ${animationClass} ${isInView ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
