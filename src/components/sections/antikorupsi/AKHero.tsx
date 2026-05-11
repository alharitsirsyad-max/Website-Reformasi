import { useEffect, useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { hero } from '../../../data/antikorupsi';
import styles from './AKHero.module.css';

export default function AKHero() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Countup animation for stats
    const targets = [2002, 1500, 34, 168];
    const duration = 1500; // ms
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCounts(targets.map(target => Math.floor(target * easeOut)));

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="ak-hero" className={styles.hero}>
      <div className={styles.overlay} />
      
      <div className={`${styles.content} container`}>
        <div className={styles.breadcrumb}>
          Reformasi Indonesia → Antikorupsi
        </div>

        <div className={styles.badge}>
          {hero.eyebrow}
        </div>

        <h1 className={styles.title}>
          {hero.judul}
        </h1>

        <p className={styles.desc}>
          {hero.deskripsi}
        </p>

        <div className={styles.statsGrid}>
          {hero.statFakta.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statNilai}>
                {i === 0 && counts[0]}
                {i === 1 && `${counts[1]}+`}
                {i === 2 && counts[2]}
                {i === 3 && `Rp${counts[3]}T+`}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <Link href="/">
          <button className={styles.backBtn}>
            <ArrowLeft size={14} strokeWidth={1.5} />
            Kembali ke Beranda
          </button>
        </Link>
      </div>
    </section>
  );
}
