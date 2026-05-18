import { CheckCircle, AlertTriangle } from 'lucide-react';
import { dampakPositif, hambatan } from '../../../data/antikorupsi';
import AnimateRepeat from '../../ui/AnimateRepeat';
import styles from './AKDampak.module.css';

export default function AKDampak() {
  return (
    <section id="ak-dampak" className="bg-surface section-padding">
      <div className="container">
        <AnimateRepeat>
          <h2 className={styles.title}>Dampak & Tantangan</h2>
          <p className={styles.intro}>
            Pemberantasan korupsi era Reformasi telah membawa perubahan signifikan,
            namun tantangan besar masih menghadang.
          </p>
        </AnimateRepeat>

        <div className={styles.grid}>
          {/* Dampak Positif */}
          <AnimateRepeat delay={100}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>
                <CheckCircle size={20} strokeWidth={1.5} />
                Dampak Positif
              </h3>
              <div className={styles.list}>
                {dampakPositif.map((item, i) => (
                  <div key={i} className={styles.listItem}>
                    <CheckCircle size={16} strokeWidth={1.5} className={styles.iconPositif} />
                    <span>{item.teks}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateRepeat>

          {/* Hambatan */}
          <AnimateRepeat delay={200}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>
                <AlertTriangle size={20} strokeWidth={1.5} />
                Hambatan & Tantangan
              </h3>
              <div className={styles.list}>
                {hambatan.map((item, i) => (
                  <div key={i} className={styles.listItem}>
                    <AlertTriangle size={16} strokeWidth={1.5} className={styles.iconNegatif} />
                    <span>{item.teks}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateRepeat>
        </div>
      </div>
    </section>
  );
}
