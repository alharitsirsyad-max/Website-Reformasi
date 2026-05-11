import { ExternalLink, ArrowRight } from 'lucide-react';
import { kesimpulan } from '../../../data/antikorupsi';
import AnimateRepeat from '../../ui/AnimateRepeat';
import styles from './AKKesimpulan.module.css';

export default function AKKesimpulan() {
  return (
    <section id="ak-kesimpulan" className="bg-surface section-padding">
      <div className="container">
        <AnimateRepeat>
          <h2 className={styles.title}>{kesimpulan.judul}</h2>
        </AnimateRepeat>

        <div className={styles.content}>
          <AnimateRepeat delay={100}>
            <p className={styles.paragraf}>{kesimpulan.paragraf1}</p>
          </AnimateRepeat>

          <AnimateRepeat delay={200}>
            <p className={styles.paragraf}>{kesimpulan.paragraf2}</p>
          </AnimateRepeat>

          <AnimateRepeat delay={300}>
            <p className={styles.paragraf}>{kesimpulan.paragraf3}</p>
          </AnimateRepeat>

          <AnimateRepeat delay={400}>
            <div className={styles.quote}>
              <div className={styles.quoteBar} />
              <p className={styles.quoteText}>"{kesimpulan.quote}"</p>
              <footer className={styles.quoteSource}>— {kesimpulan.quoteSumber}</footer>
            </div>
          </AnimateRepeat>

          <AnimateRepeat delay={500}>
            <div className={styles.ajakanSection}>
              <h3 className={styles.ajakanTitle}>Apa yang Bisa Kamu Lakukan?</h3>
              <div className={styles.ajakanGrid}>
                {kesimpulan.ajakanAksi.map((aksi, i) => (
                    <a
                      key={i}
                      href={aksi.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.ajakanCard}
                    >
                      <ExternalLink size={20} strokeWidth={1.5} />
                      <span>{aksi.teks}</span>
                      <ArrowRight size={16} strokeWidth={1.5} className={styles.arrow} />
                    </a>
                  ))}
              </div>
            </div>
          </AnimateRepeat>
        </div>
      </div>
    </section>
  );
}
