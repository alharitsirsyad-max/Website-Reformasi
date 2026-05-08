import React from 'react';
import styles from './Media.module.css';
import { SectionHead } from '../ui/SectionHead';
import { CardVideo } from '../ui/CardVideo';
import { media } from '@/data/content';
import { FadeUp } from '../ui/FadeUp';

export function Media() {
  return (
    <section id="media" className={styles.section}>
      <SectionHead 
        eyebrow="Arsip Visual" 
        judul="Dokumentasi Sejarah" 
        lead="Menyaksikan kembali momen-momen menegangkan melalui rekaman aktual dan dokumenter jurnalistik."
      />
      
      <div className={styles.grid}>
        {media.map((item, idx) => (
          <FadeUp key={item.id} delay={idx * 100} className={styles.gridItem}>
            <CardVideo
              judul={item.judul}
              deskripsi={item.deskripsi}
              sumber={item.sumber}
              thumb={item.thumb}
              url={item.url}
            />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
