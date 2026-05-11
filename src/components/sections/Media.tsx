<<<<<<< HEAD
import { media } from '../../data/content';
import SectionHead from '../ui/SectionHead';
import VideoCard from '../ui/VideoCard';
import AnimateRepeat from '../ui/AnimateRepeat';
import styles from './Media.module.css';

export default function Media() {
  return (
    <section id="media" className={`${styles.section} bg-surface`}>
      <div className={`container section-padding`}>
        <AnimateRepeat>
          <SectionHead
            eyebrow="Section 11"
            title="Video &amp; Media"
            subtitle="Arsip video dan dokumenter penting tentang perjalanan Reformasi Indonesia."
          />
        </AnimateRepeat>

        <div className={styles.grid}>
          {media.map((item, i) => (
            <AnimateRepeat key={i} delay={i * 80}>
              <VideoCard item={item} />
            </AnimateRepeat>
          ))}
        </div>
=======
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
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
      </div>
    </section>
  );
}
