import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  judul: string;
  deskripsi: string;
  icon?: React.ReactNode;
  tag?: string;
  accent?: 'red' | 'gold' | 'teal';
}

export function Card({ judul, deskripsi, icon, tag, accent = 'red' }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[`accent-${accent}`]}`}>
      {icon && <div className={styles.iconBox}>{icon}</div>}
      <div className={styles.content}>
        <h3 className={styles.judul}>{judul}</h3>
        <p className={styles.deskripsi}>{deskripsi}</p>
        {tag && <span className={styles.tag}>{tag}</span>}
      </div>
    </div>
  );
}
