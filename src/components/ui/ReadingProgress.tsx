import React from 'react';
import styles from './ReadingProgress.module.css';
import { useReadingProgress } from '@/hooks/useReadingProgress';

export function ReadingProgress() {
  const progress = useReadingProgress();

  return (
    <div className={styles.container}>
      <div 
        className={styles.bar} 
        style={{ width: `${progress}%` }} 
      />
    </div>
  );
}
