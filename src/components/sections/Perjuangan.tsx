import React from 'react';
import styles from './Perjuangan.module.css';
import { SectionHead } from '../ui/SectionHead';
import { perjuangan } from '@/data/content';
import { FadeUp } from '../ui/FadeUp';

export function Perjuangan() {
  return (
    <section id="perjuangan" className={styles.section}>
      <SectionHead 
        eyebrow="Elemen Gerakan" 
        judul="Perjuangan Rakyat" 
      />
      
      <div className={styles.content}>
        <FadeUp>
          <p className={styles.lead}>{perjuangan.lead}</p>
        </FadeUp>

        <FadeUp delay={100}>
          <blockquote className={styles.quote}>
            "{perjuangan.kutipan}"
          </blockquote>
        </FadeUp>

        <div className={styles.items}>
          {perjuangan.items.map((item, idx) => (
            <FadeUp key={item.id} delay={idx * 100} className={styles.item}>
              <h3 className={styles.itemJudul}>{item.judul}</h3>
              <p className={styles.itemDeskripsi}>{item.deskripsi}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
