import { useRef, ReactNode } from 'react';
import { useInView } from '../../hooks/use-in-view';
import styles from './AnimateIn.module.css';

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
  className?: string;
}

export default function AnimateIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const directionClass = {
    up: styles.animateUp,
    left: styles.animateLeft,
    right: styles.animateRight,
    fade: styles.animateFade,
  }[direction];

  return (
    <div
      ref={ref}
      className={`${styles.animateIn} ${directionClass} ${isInView ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
