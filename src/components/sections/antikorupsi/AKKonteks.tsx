import { konteks } from '../../../data/antikorupsi';
import AnimateRepeat from '../../ui/AnimateRepeat';
import styles from './AKKonteks.module.css';

export default function AKKonteks() {
  return (
    <section
      id="ak-konteks"
      className={styles.section}
      style={{ background: '#1A1A2E', color: '#ffffff' }}
    >
      <div className={`${styles.inner} container section-padding`}>
        <AnimateRepeat>
          <h2 className={styles.title} style={{ color: '#ffffff' }}>
            {konteks.judul}
          </h2>
          <p className={styles.intro} style={{ color: 'rgba(255,255,255,0.85)' }}>
            {konteks.intro}
          </p>
        </AnimateRepeat>

        <div className={styles.faktaGrid}>
          {konteks.faktaOrdeBaru.map((fakta, i) => (
            <AnimateRepeat key={i} delay={i * 100}>
              <div className={styles.faktaCard}>
                <div className={styles.faktaAngka}>
                  <span className={styles.angka} style={{ color: '#E05555' }}>
                    {fakta.angka}
                  </span>
                  <span className={styles.satuan} style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {fakta.satuan}
                  </span>
                </div>
                <h3 className={styles.faktaLabel} style={{ color: '#ffffff' }}>
                  {fakta.label}
                </h3>
                <p className={styles.faktaDesc} style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {fakta.deskripsi}
                </p>
              </div>
            </AnimateRepeat>
          ))}
        </div>
      </div>
    </section>
  );
}
