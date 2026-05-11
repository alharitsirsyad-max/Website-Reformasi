<<<<<<< HEAD
import * as Icons from 'lucide-react';
import { reformasiKini } from '../../data/content';
import SectionHead from '../ui/SectionHead';
import AnimateRepeat from '../ui/AnimateRepeat';
import styles from './ReformasiKini.module.css';

const STATUS_COLOR = {
  positif: 'var(--teal)',
  negatif: 'var(--primary)',
  netral:  'var(--gold)',
} as const;

const STATUS_BG = {
  positif: 'var(--teal-bg)',
  negatif: 'var(--primary-bg)',
  netral:  'var(--gold-bg)',
} as const;

export default function ReformasiKini() {
  return (
    <section id="reformasi-kini" className={`${styles.section} bg-main`}>
      <div className={`container section-padding`}>
        <AnimateRepeat>
          <SectionHead
            eyebrow="Section 10"
            title="Reformasi Hari Ini"
            subtitle="Di mana posisi Indonesia setelah lebih dari 25 tahun reformasi? Apa yang sudah berhasil, dan apa yang masih menjadi pekerjaan rumah?"
          />
        </AnimateRepeat>

        <div className={styles.grid}>
          {reformasiKini.map((item, i) => {
            const IconComp = (Icons as Record<string, Icons.LucideIcon>)[item.ikon] ?? Icons.Circle;
            const color = STATUS_COLOR[item.status];
            const bg    = STATUS_BG[item.status];
            return (
              <AnimateRepeat key={i} delay={i * 80}>
                <div
                  className={styles.card}
                  style={{ borderTopColor: color }}
                >
                  <div
                    className={styles.iconWrap}
                    style={{ background: bg, color }}
                  >
                    <IconComp size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.cardTitle}>{item.judul}</h3>
                  <p className={styles.cardDesc}>{item.deskripsi}</p>
                  <span
                    className={`${styles.status} eyebrow`}
                    style={{ color, background: bg }}
                  >
                    {item.status}
                  </span>
                </div>
              </AnimateRepeat>
            );
          })}
        </div>
=======
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
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
      </div>
    </section>
  );
}
