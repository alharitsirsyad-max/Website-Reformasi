import React from 'react';
import styles from './Tokoh.module.css';
import { SectionHead } from '../ui/SectionHead';
import { CardTokoh } from '../ui/CardTokoh';
import { tokoh } from '@/data/content';
import { FadeUp } from '../ui/FadeUp';

export function Tokoh() {
  return (
    <section id="tokoh" className={styles.section}>
      <SectionHead 
        eyebrow="Aktor Sejarah" 
        judul="Tokoh Reformasi 1998" 
        lead="Individu-individu yang berada di pusat pusaran sejarah, dari mereka yang berjuang menuntut perubahan hingga mereka yang harus melepaskan kekuasaan."
      />
      
      <div className={styles.grid}>
        {tokoh.map((item, idx) => (
          <FadeUp key={item.id} delay={idx * 50} className={styles.gridItem}>
            <CardTokoh
              nama={item.nama}
              peran={item.peran}
              inisial={item.inisial}
              deskripsi={item.deskripsi}
            />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
