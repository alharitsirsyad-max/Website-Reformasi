import React from 'react';
import styles from './Referensi.module.css';
import { SectionHead } from '../ui/SectionHead';
import { referensi } from '@/data/content';
import { ExternalLink } from 'lucide-react';
import { FadeUp } from '../ui/FadeUp';

export function Referensi() {
  return (
    <section id="referensi" className={styles.section}>
      <SectionHead 
        eyebrow="Bacaan Lanjut" 
        judul="Daftar Referensi" 
      />
      
      <div className={styles.list}>
        {referensi.map((item, idx) => (
          <FadeUp key={item.id} delay={idx * 50}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.item}>
              <div className={styles.content}>
                <span className={styles.penulis}>{item.penulis} ({item.tahun})</span>
                <h3 className={styles.judul}>{item.judul}</h3>
                <span className={styles.penerbit}>{item.penerbit}</span>
              </div>
              <ExternalLink size={16} strokeWidth={1.5} className={styles.icon} />
            </a>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
