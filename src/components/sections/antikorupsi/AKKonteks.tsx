import { konteks } from '../../../data/antikorupsi';
import AnimateRepeat from '../../ui/AnimateRepeat';
import styles from './AKKonteks.module.css';

export default function AKKonteks() {
  return (
    <section id="ak-konteks" className={styles.section}>
      <div className={`${styles.inner} container section-padding`}>
        <AnimateRepeat>
          <h2 className={styles.title}>{konteks.judul}</h2>
          <p className={styles.intro}>{konteks.intro}</p>
        </AnimateRepeat>

        <div className={styles.faktaGrid}>
          {konteks.faktaOrdeBaru.map((fakta, i) => (
            <AnimateRepeat key={i} delay={i * 100}>
              <div className={styles.faktaCard}>
                <div className={styles.faktaAngka}>
                  <span className={styles.angka}>{fakta.angka}</span>
                  <span className={styles.satuan}>{fakta.satuan}</span>
                </div>
                <h3 className={styles.faktaLabel}>{fakta.label}</h3>
                <p className={styles.faktaDesc}>{fakta.deskripsi}</p>
              </div>
            </AnimateRepeat>
          ))}
        </div>

        <AnimateRepeat delay={300}>
          <div className={styles.narasi}>
            <p>{konteks.narasiLengkap}</p>
          </div>

          <div className={styles.quote}>
            <div className={styles.quoteBar} />
            <p className={styles.quoteText}>"{konteks.quote}"</p>
            <footer className={styles.quoteSource}>— {konteks.quoteSumber}</footer>
          </div>
        </AnimateRepeat>
      </div>
    </section>
  );
}
