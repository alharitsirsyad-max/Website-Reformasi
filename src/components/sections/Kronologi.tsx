import React from 'react';
import styles from './Kronologi.module.css';
import { SectionHead } from '../ui/SectionHead';
import { TimelineItem } from '../ui/TimelineItem';
import { kronologi } from '@/data/content';
import { FadeUp } from '../ui/FadeUp';

interface KronologiProps {
  itemRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
}

export function Kronologi({ itemRefs }: KronologiProps) {
  return (
    <section id="kronologi" className={styles.section}>
      <SectionHead 
        eyebrow="Garis Waktu" 
        judul="Kronologi 1997–1999" 
        lead="Rangkaian peristiwa penting dari mulai jatuhnya nilai tukar rupiah hingga penyelenggaraan pemilu demokratis pertama."
      />
      
      <div className={styles.timelineList}>
        {kronologi.map((item, idx) => (
          <FadeUp key={item.id} delay={idx * 50}>
            <TimelineItem
              ref={(el) => {
                if (el) itemRefs.current[item.id] = el;
              }}
              tanggal={item.tanggal}
              judul={item.judul}
              deskripsi={item.deskripsi}
              tag={item.tag}
              highlight={item.highlight}
            />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
