import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  judul: string;
  deskripsi: string;
  icon?: React.ReactNode;
  tag?: string;
  tanggal?: string;
  accent?: 'red' | 'gold' | 'teal' | 'brown';
}

export function Card({ judul, deskripsi, icon, tag, tanggal, accent = 'red' }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[`accent-${accent}`]}`}>
      {tanggal && (
        <div className={styles.tanggal}>{tanggal}</div>
      )}
      <div className={styles.content}>
        <h3 className={styles.judul}>{judul}</h3>
        <p className={styles.deskripsi}>{deskripsi}</p>
        {tag && <span className={styles.tag}>{tag}</span>}
      </div>
    </div>
  );
}
