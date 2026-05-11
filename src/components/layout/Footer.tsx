<<<<<<< HEAD
import { tim } from '../../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section - Brand & Description */}
        <div className={styles.top}>
          <div className={styles.brandSection}>
            <div className={styles.brand}>
              <span className={styles.brandName}>Reformasi Indonesia</span>
              <span className={styles.brandTag}>1998–Kini</span>
            </div>
            <p className={styles.brandDesc}>
              Perjalanan demokratisasi Indonesia dari jatuhnya Orde Baru hingga era kepemimpinan saat ini.
              Website ini dibuat sebagai dokumentasi sejarah reformasi untuk generasi mendatang.
            </p>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoBlock}>
              <h4 className={styles.infoTitle}>Institusi</h4>
              <p className={styles.infoText}>{tim.sekolah}</p>
              <p className={styles.infoText}>{tim.kelas}</p>
              <p className={styles.infoText}>Tahun Ajaran {tim.tahunAjaran}</p>
            </div>

            <div className={styles.infoBlock}>
              <h4 className={styles.infoTitle}>Mata Pelajaran</h4>
              <p className={styles.infoText}>{tim.mapel}</p>
              <p className={styles.infoSubtext}>Tugas Kelompok</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom Section - Credits & Copyright */}
        <div className={styles.bottom}>
          <div className={styles.credits}>
            <p className={styles.creditText}>
              Konten bersumber dari Wikipedia Bahasa Indonesia, jurnal akademis, dan sumber terbuka terpercaya.
            </p>
            <p className={styles.creditText}>
              Dibuat dengan semangat Reformasi 1998 — untuk Indonesia yang lebih demokratis dan bermartabat.
            </p>
          </div>

          <div className={styles.copyright}>
            <span className={styles.copyrightText}>
              © {currentYear} Kelompok Sejarah XI SIJA 1
            </span>
            <span className={styles.copyrightSep}>·</span>
            <span className={styles.copyrightText}>
              {tim.sekolah}
            </span>
          </div>
        </div>
=======
import React from 'react';
import styles from './Footer.module.css';
import { meta } from '@/data/content';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brandCol}>
          <h2 className={styles.brandName}>{meta.brandName}</h2>
          <p className={styles.tagline}>{meta.tagline}</p>
        </div>
        
        <div className={styles.navCol}>
          <a href="#beranda">Beranda</a>
          <a href="#kronologi">Kronologi</a>
          <a href="#tokoh">Tokoh</a>
          <a href="#referensi">Referensi</a>
        </div>
        
        <div className={styles.infoCol}>
          <p>{meta.kelas}</p>
          <p>{meta.mapel}</p>
          <p>Tahun {meta.tahun}</p>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} {meta.brandName}. All rights reserved.</p>
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
      </div>
    </footer>
  );
}
