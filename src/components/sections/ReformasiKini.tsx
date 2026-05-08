import React from 'react';
import styles from './ReformasiKini.module.css';
import { SectionHead } from '../ui/SectionHead';
import { reformasiKini } from '@/data/content';
import { FadeUp } from '../ui/FadeUp';

export function ReformasiKini() {
  const getBadgeText = (status: string) => {
    switch (status) {
      case 'baik': return 'Sudah tercapai';
      case 'proses': return 'Sedang berjalan';
      case 'tantangan': return 'Masih tantangan';
      default: return '';
    }
  };

  return (
    <section id="reformasi-kini" className={styles.section}>
      <SectionHead 
        eyebrow="Refleksi Hari Ini" 
        judul="Cita-cita yang Belum Selesai" 
        lead="Setelah lebih dari dua dekade, bagaimana status tuntutan reformasi hari ini? Tidak semua berjalan mulus."
      />
      
      <div className={styles.grid}>
        {reformasiKini.map((item, idx) => (
          <FadeUp key={item.id} delay={idx * 100}>
            <div className={styles.item}>
              <span className={`${styles.badge} ${styles[item.status]}`}>
                {getBadgeText(item.status)}
              </span>
              <h3 className={styles.judul}>{item.judul}</h3>
              <p className={styles.deskripsi}>{item.deskripsi}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
