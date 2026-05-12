import { hero } from '../../data/content';
import { scrollToSection } from '../../hooks';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Garis merah horizontal di paling atas - identitas visual */}
      <div className={styles.redLine} />
      
      <div className={styles.bg} style={{ backgroundImage: `url(/gambar1.jpeg)` }} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.tag}>
            <span className={styles.pulse} />
            {hero.tag}
          </div>

          <h1 className={styles.h1}>
            {hero.h1Line1} <span className={styles.accent}>{hero.h1Line2}</span> {hero.h1Line3}
          </h1>

          <div className={styles.titleUnderline} />

          <p className={styles.desc}>{hero.deskripsi}</p>

          <div className={styles.stats}>
            {hero.stats.map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statVal}>{s.nilai}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
