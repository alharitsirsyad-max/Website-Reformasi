import React from 'react';
import styles from './CardTokoh.module.css';

interface CardTokohProps {
  nama: string;
  peran: string;
  inisial: string;
  deskripsi: string;
}

export function CardTokoh({ nama, peran, inisial, deskripsi }: CardTokohProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>{inisial}</div>
        <div className={styles.info}>
          <h3 className={styles.nama}>{nama}</h3>
          <span className={styles.peran}>{peran}</span>
        </div>
      </div>
      <p className={styles.deskripsi}>{deskripsi}</p>
    </div>
  );
}
