import { kasusBesar } from '../../../data/antikorupsi';
import AnimateRepeat from '../../ui/AnimateRepeat';
import styles from './AKKasusBesar.module.css';

export default function AKKasusBesar() {
  return (
    <section id="ak-kasus" className="bg-main section-padding">
      <div className="container">
        <AnimateRepeat>
          <h2 className={styles.title}>Kasus-Kasus Besar</h2>
          <p className={styles.intro}>
            Beberapa kasus korupsi yang mengguncang Indonesia dan membuktikan
            bahwa tidak ada yang kebal hukum di era Reformasi.
          </p>
        </AnimateRepeat>

        <div className={styles.grid}>
          {kasusBesar.map((kasus, i) => (
            <AnimateRepeat key={i} delay={i * 80}>
              <div className={styles.card}>
                <div className={styles.tahun}>{kasus.tahun}</div>
                <h3 className={styles.judul}>{kasus.judul}</h3>
                <div className={styles.pelaku}>
                  <span className={styles.label}>Pelaku:</span> {kasus.pelaku}
                </div>
                <div className={styles.kerugian}>{kasus.kerugian}</div>
                <div className={styles.vonis}>
                  <span className={styles.vonisBadge}>Vonis: {kasus.vonis}</span>
                </div>
                <p className={styles.catatan}>{kasus.catatan}</p>
                {kasus.refUrl && (
                  <a
                    href={kasus.refUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.refLink}
                  >
                    Baca selengkapnya →
                  </a>
                )}
              </div>
            </AnimateRepeat>
          ))}
        </div>
      </div>
    </section>
  );
}
