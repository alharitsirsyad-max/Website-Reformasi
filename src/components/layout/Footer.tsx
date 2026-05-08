import React from 'react';
import styles from './Footer.module.css';
import { meta } from '@/data/content';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brandCol}>
          <h2 className={styles.brandName}>{meta.brandName}</h2>
          <p className={styles.tagline}>{meta.tagline}</p>
        </div>
        
        <div className={styles.navCol}>
          <a href="#beranda">Beranda</a>
          <a href="#kronologi">Kronologi</a>
          <a href="#tokoh">Tokoh</a>
          <a href="#referensi">Referensi</a>
        </div>
        
        <div className={styles.infoCol}>
          <p>{meta.kelas}</p>
          <p>{meta.mapel}</p>
          <p>Tahun {meta.tahun}</p>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} {meta.brandName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
