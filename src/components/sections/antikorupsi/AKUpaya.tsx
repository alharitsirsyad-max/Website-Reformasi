import { useState } from 'react';
import { Search, Scale, FileText, Eye, Users, Circle } from 'lucide-react';
import { upaya } from '../../../data/antikorupsi';
import AnimateRepeat from '../../ui/AnimateRepeat';
import styles from './AKUpaya.module.css';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Search, Scale, FileText, Eye, Users,
};

export default function AKUpaya() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="ak-upaya" className="bg-main section-padding">
      <div className="container">
        <AnimateRepeat>
          <h2 className={styles.sectionTitle}>5 Upaya Pemberantasan Korupsi</h2>
          <p className={styles.sectionIntro}>
            Reformasi 1998 melahirkan berbagai upaya sistematis untuk memberantas korupsi
            yang telah mengakar selama puluhan tahun.
          </p>
        </AnimateRepeat>

        <div className={styles.grid}>
          {upaya.map((item, i) => {
            const Icon = ICON_MAP[item.ikon] || Circle;
            const isExpanded = expandedIndex === i;

            return (
              <AnimateRepeat key={i} delay={i * 80}>
                <div className={styles.card}>
                  <div className={styles.nomor}>{item.nomor}</div>
                  <div className={styles.iconWrapper}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className={styles.judul}>{item.judul}</h3>
                  <div className={styles.tahun}>{item.tahun}</div>
                  <p className={styles.ringkasan}>{item.ringkasan}</p>

                  {isExpanded && (
                    <div className={styles.detail}>
                      <p className={styles.detailText}>{item.detail}</p>

                      {item.tugasKPK && (
                        <div className={styles.tugasList}>
                          <h4 className={styles.tugasTitle}>Tugas & Wewenang KPK:</h4>
                          <ul>
                            {item.tugasKPK.map((tugas, idx) => (
                              <li key={idx}>{tugas}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.refUrl && (
                        <a
                          href={item.refUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.refLink}
                        >
                          Baca selengkapnya →
                        </a>
                      )}
                    </div>
                  )}

                  <button
                    className={styles.toggleBtn}
                    onClick={() => toggleExpand(i)}
                  >
                    {isExpanded ? 'Tutup ↑' : 'Baca selengkapnya ↓'}
                  </button>
                </div>
              </AnimateRepeat>
            );
          })}
        </div>
      </div>
    </section>
  );
}
