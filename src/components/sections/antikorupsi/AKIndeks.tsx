import { useEffect, useRef, useState } from 'react';
import { indeksCPI } from '../../../data/antikorupsi';
import AnimateRepeat from '../../ui/AnimateRepeat';
import styles from './AKIndeks.module.css';

export default function AKIndeks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getBarColor = (skor: number) => {
    if (skor < 25) return 'var(--primary)';
    if (skor < 35) return 'var(--gold)';
    return 'var(--teal)';
  };

  return (
    <section id="ak-indeks" ref={sectionRef} className="bg-surface section-padding">
      <div className="container">
        <AnimateRepeat>
          <h2 className={styles.title}>Indeks Persepsi Korupsi (CPI)</h2>
          <p className={styles.intro}>{indeksCPI.penjelasan}</p>
        </AnimateRepeat>

        <div className={styles.chartContainer}>
          {indeksCPI.data.map((item, i) => (
            <AnimateRepeat key={i} delay={i * 150}>
              <div className={styles.barRow}>
                <div className={styles.barLabel}>
                  <span className={styles.barTahun}>{item.tahun}</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={`${styles.barFill} ${isVisible ? styles.barAnimate : ''}`}
                    style={{
                      width: isVisible ? `${item.skor}%` : '0%',
                      background: getBarColor(item.skor),
                      transitionDelay: `${i * 150}ms`,
                    }}
                  />
                </div>
                <div className={styles.barSkor}>{item.skor}</div>
                <div className={styles.barKeterangan}>{item.label}</div>
              </div>
            </AnimateRepeat>
          ))}
        </div>

        <AnimateRepeat delay={900}>
          <div className={styles.konteks}>
            <p>{indeksCPI.konteks}</p>
          </div>
        </AnimateRepeat>
      </div>
    </section>
  );
}
