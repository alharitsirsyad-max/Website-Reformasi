<<<<<<< HEAD
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
=======
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
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
    </section>
  );
}
