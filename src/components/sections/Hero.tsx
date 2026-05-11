import { ChevronDown } from 'lucide-react';
import { hero } from '../../data/content';
import { scrollToSection } from '../../hooks';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background image */}
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(/gambar1.jpeg)` }}
      />
      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.inner}>
          {/* Tag */}
          <div className={`${styles.tag} ${styles.animateTag}`}>
            <span className={styles.pulse} />
            {hero.tag}
          </div>

          {/* Title */}
          <h1 className={`${styles.h1} ${styles.animateTitle}`}>
            {hero.h1Line1} <span className={styles.accent}>{hero.h1Line2}</span> {hero.h1Line3}
          </h1>

          {/* Underline */}
          <div className={styles.titleUnderline} />

          {/* Description */}
          <p className={`${styles.desc} ${styles.animateDesc}`}>{hero.deskripsi}</p>

          {/* Stats */}
          <div className={`${styles.stats} ${styles.animateStats}`}>
            {hero.stats.map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statVal}>{s.nilai}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            className={`${styles.cta} ${styles.animateCta}`}
            onClick={() => scrollToSection('pra-reformasi')}
          >
            {hero.ctaLabel}
            <ChevronDown size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
