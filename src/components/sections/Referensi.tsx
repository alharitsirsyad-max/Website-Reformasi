<<<<<<< HEAD
import { ExternalLink } from 'lucide-react';
import { referensi } from '../../data/content';
import SectionHead from '../ui/SectionHead';
import AnimateRepeat from '../ui/AnimateRepeat';
import styles from './Referensi.module.css';

const JENIS_COLOR: Record<string, string> = {
  Wikipedia:  'var(--teal)',
  Buku:       'var(--gold)',
  Jurnal:     'var(--navy-mid)',
  Berita:     'var(--primary)',
  Pemerintah: 'var(--teal)',
};

export default function Referensi() {
  return (
    <section id="referensi" className={`${styles.section} bg-main`}>
      <div className={`container section-padding`}>
        <AnimateRepeat>
          <SectionHead
            eyebrow="Section 12"
            title="Referensi"
            subtitle="Sumber-sumber yang digunakan dalam penyusunan konten website ini."
          />
        </AnimateRepeat>

        <div className={styles.list}>
          {referensi.map((ref, i) => (
            <AnimateRepeat key={i} delay={i * 60}>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.item}
              >
                <div className={styles.left}>
                  <span
                    className={`${styles.jenis} eyebrow`}
                    style={{ color: JENIS_COLOR[ref.jenis] ?? 'var(--text-3)' }}
                  >
                    {ref.jenis}
                  </span>
                  <p className={styles.judul}>{ref.judul}</p>
                  {(ref.penulis || ref.tahun) && (
                    <p className={`${styles.meta} caption`}>
                      {ref.penulis && <span>{ref.penulis}</span>}
                      {ref.penulis && ref.tahun && <span> · </span>}
                      {ref.tahun && <span>{ref.tahun}</span>}
                    </p>
                  )}
                </div>
                <ExternalLink size={14} strokeWidth={1.5} className={styles.icon} />
              </a>
            </AnimateRepeat>
          ))}
        </div>
=======
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
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
      </div>
    </section>
  );
}
