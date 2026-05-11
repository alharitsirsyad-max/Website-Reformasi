import React from 'react';
import styles from './TimelineStrip.module.css';
import { kronologi } from '@/data/content';

interface TimelineStripProps {
  itemRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
}

export function TimelineStrip({ itemRefs }: TimelineStripProps) {
  const scrollToItem = (id: string) => {
    const el = itemRefs.current[id];
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.strip}>
      {kronologi.map((item) => (
        <div
          key={item.id}
          className={`${styles.item} ${item.highlight ? styles.highlight : ''}`}
          onClick={() => scrollToItem(item.id)}
        >
          <span className={styles.dot}></span>
          <span className={styles.tanggal}>{item.tanggal}</span>
        </div>
      ))}
    </div>
  );
}
