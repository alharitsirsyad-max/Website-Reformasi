<<<<<<< HEAD
import { tim } from '../../data/content';
import SectionHead from '../ui/SectionHead';
import AnimateRepeat from '../ui/AnimateRepeat';
import styles from './TimPenulis.module.css';

export default function TimPenulis() {
  return (
    <section id="tim" className={`${styles.section} bg-surface`}>
      <div className={`container section-padding`}>
        <AnimateRepeat>
          <SectionHead
            eyebrow="Section 13"
            title="Tim Penulis"
            subtitle="Kelompok Riset Sejarah Reformasi Indonesia"
            center
          />
        </AnimateRepeat>

        <div className={styles.grid}>
          {tim.anggota.map((anggota, i) => (
            <AnimateRepeat key={i} delay={i * 100}>
              <div className={styles.card}>
                <div className={styles.avatar}>
                  <span className={styles.avatarInitial}>
                    {anggota.nama.split(' ').map(w => w[0]).slice(0,2).join('')}
                  </span>
                </div>
                <h3 className={styles.nama}>{anggota.nama}</h3>
                {anggota.presensi && (
                  <p className={`${styles.presensi} caption`}>PRESENSI: {anggota.presensi}</p>
                )}
              </div>
            </AnimateRepeat>
          ))}
        </div>

        <AnimateRepeat delay={400}>
          <div className={styles.note}>
            <p className={`${styles.noteText} caption`}>
              Website ini dibuat sebagai tugas kelompok mata pelajaran {tim.mapel}.
              Semua konten bersumber dari referensi akademis terpercaya.
            </p>
          </div>
        </AnimateRepeat>
=======
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
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
      </div>
    </section>
  );
}
