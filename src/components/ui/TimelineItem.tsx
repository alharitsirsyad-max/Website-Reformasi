import React, { forwardRef } from 'react';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  tanggal: string;
  judul: string;
  deskripsi: string;
  tag: string;
  highlight: boolean;
}

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ tanggal, judul, deskripsi, tag, highlight }, ref) => {
    return (
      <div ref={ref} className={`${styles.item} ${highlight ? styles.highlight : ''}`}>
        <div className={styles.left}>
          <span className={styles.tanggal}>{tanggal}</span>
          <span className={styles.tag}>{tag}</span>
        </div>
        <div className={styles.right}>
          <h3 className={styles.judul}>{judul}</h3>
          <p className={styles.deskripsi}>{deskripsi}</p>
        </div>
      </div>
    );
  }
);

TimelineItem.displayName = 'TimelineItem';
