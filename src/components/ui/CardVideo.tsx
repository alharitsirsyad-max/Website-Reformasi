import React from 'react';
import styles from './CardVideo.module.css';
import { PlayCircle } from 'lucide-react';

interface CardVideoProps {
  judul: string;
  deskripsi: string;
  sumber: string;
  thumb: string;
  url: string;
}

export function CardVideo({ judul, deskripsi, sumber, thumb, url }: CardVideoProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div className={styles.thumbnailContainer}>
        <img src={thumb} alt={judul} className={styles.thumbnail} />
        <div className={styles.overlay}>
          <div className={styles.playButton}>
            <PlayCircle size={32} strokeWidth={1.5} />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <span className={styles.sumber}>{sumber}</span>
        <h3 className={styles.judul}>{judul}</h3>
        <p className={styles.deskripsi}>{deskripsi}</p>
      </div>
    </a>
  );
}
