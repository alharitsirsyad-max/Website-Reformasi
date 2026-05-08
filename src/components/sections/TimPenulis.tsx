import React from 'react';
import styles from './TimPenulis.module.css';
import { SectionHead } from '../ui/SectionHead';
import { tim } from '@/data/content';
import { FadeUp } from '../ui/FadeUp';

export function TimPenulis() {
  return (
    <section id="tim" className={styles.section}>
      <SectionHead 
        eyebrow="Penyusun" 
        judul="Tim Penulis" 
      />
      
      <div className={styles.grid}>
        {tim.map((anggota, idx) => (
          <FadeUp key={anggota.id} delay={idx * 100} className={styles.card}>
            <span className={styles.nis}>{anggota.nis}</span>
            <h3 className={styles.nama}>{anggota.nama}</h3>
            <span className={styles.peran}>{anggota.peran}</span>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
