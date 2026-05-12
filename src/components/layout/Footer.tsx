import { tim } from '../../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
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

        <div className={styles.divider} />

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <div className={styles.credits}>
            <p className={styles.creditText}>
              Konten bersumber dari Wikipedia Bahasa Indonesia, jurnal akademis, dan sumber terbuka terpercaya.
            </p>
            <p className={styles.creditText}>
              Dibuat dengan semangat Reformasi 1998 — untuk Indonesia yang lebih demokratis dan bermartabat.
            </p>
            <p className={styles.lastUpdated}>
              Terakhir diperbarui: {lastUpdated}
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
      </div>
    </footer>
  );
}
