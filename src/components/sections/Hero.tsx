import React from 'react';
import styles from './Hero.module.css';
import { hero } from '@/data/content';
import { ArrowDown } from 'lucide-react';
import { FadeUp } from '../ui/FadeUp';

export function Hero() {
  const scrollToContent = () => {
    const el = document.getElementById('latar-belakang');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const parts = hero.judul.split(hero.aksenKata);

  return (
    <section id="beranda" className={styles.hero}>
      <div className={styles.content}>
        <FadeUp delay={100}>
          <div className={styles.heroTag}>
            <span className={styles.dot}></span>
            {hero.tagText}
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <h1 className={styles.judul}>
            {parts[0]}
            <span className={styles.aksen}>
              {hero.aksenKata}
              <span className={styles.line}></span>
            </span>
            {parts[1]}
          </h1>
        </FadeUp>

        <FadeUp delay={300}>
          <p className={styles.deskripsi}>{hero.deskripsi}</p>
        </FadeUp>

        <FadeUp delay={400}>
          <div className={styles.stats}>
            {hero.statistik.map((stat, idx) => {
              const [value, label] = stat.split('/');
              return (
                <div key={idx} className={styles.statItem}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              );
            })}
          </div>
        </FadeUp>

        <FadeUp delay={500}>
          <button className={styles.cta} onClick={scrollToContent}>
            Mulai membaca
            <ArrowDown size={16} />
          </button>
        </FadeUp>
      </div>

      <div className={styles.bgText} aria-hidden="true">1998</div>
    </section>
  );
}
