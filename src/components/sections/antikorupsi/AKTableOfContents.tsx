import { useEffect, useState } from 'react';
import { scrollToSection } from '../../../hooks';
import styles from './AKTableOfContents.module.css';

interface Props {
  sections: string[];
}

const SECTION_LABELS: Record<string, string> = {
  'ak-hero':       'Hero',
  'ak-konteks':    'Konteks Sejarah',
  'ak-upaya':      'Upaya Pemberantasan',
  'ak-kpk':        'KPK',
  'ak-kasus':      'Kasus Besar',
  'ak-indeks':     'Indeks Korupsi',
  'ak-dampak':     'Dampak & Tantangan',
  'ak-kesimpulan': 'Kesimpulan',
};

export default function AKTableOfContents({ sections }: Props) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className={styles.nav} aria-label="Navigasi section">
      {sections.slice(1).map((id) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            className={`${styles.dotBtn} ${isActive ? styles.active : ''}`}
            onClick={() => scrollToSection(id)}
            title={SECTION_LABELS[id]}
            aria-label={SECTION_LABELS[id]}
          >
            <span className={styles.tooltip}>{SECTION_LABELS[id]}</span>
          </button>
        );
      })}
    </nav>
  );
}
