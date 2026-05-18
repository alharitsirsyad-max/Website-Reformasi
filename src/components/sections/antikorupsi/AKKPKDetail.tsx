import { TrendingDown, User, DollarSign, Award, Circle } from 'lucide-react';
import { kpkDetail } from '../../../data/antikorupsi';
import AnimateRepeat from '../../ui/AnimateRepeat';
import styles from './AKKPKDetail.module.css';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  TrendingDown, User, DollarSign, Award,
};

export default function AKKPKDetail() {
  return (
    <section id="ak-kpk" className="bg-surface section-padding">
      <div className="container">
        <AnimateRepeat>
          <h2 className={styles.title}>{kpkDetail.judul}</h2>
          <p className={styles.intro}>{kpkDetail.intro}</p>
        </AnimateRepeat>

        <div className={styles.timeline}>
          <h3 className={styles.timelineTitle}>Timeline Kepemimpinan KPK</h3>
          {kpkDetail.timelinePimpinan.map((item, i) => (
            <AnimateRepeat key={i} delay={i * 60}>
              <div className={styles.timelineItem}>
                <div className={styles.timelinePeriode}>{item.periode}</div>
                <div className={styles.timelineContent}>
                  <h4 className={styles.timelineNama}>{item.nama}</h4>
                  <p className={styles.timelineHighlight}>{item.highlight}</p>
                </div>
              </div>
            </AnimateRepeat>
          ))}
        </div>

        <div className={styles.pencapaianGrid}>
          {kpkDetail.pencapaianKunci.map((item, i) => {
            const Icon = ICON_MAP[item.ikon] || Circle;
            return (
              <AnimateRepeat key={i} delay={i * 80}>
                <div className={styles.pencapaianCard}>
                  <Icon size={28} strokeWidth={1.5} className={styles.pencapaianIcon} />
                  <div className={styles.pencapaianAngka}>{item.angka}</div>
                  <div className={styles.pencapaianLabel}>{item.label}</div>
                  <p className={styles.pencapaianDesc}>{item.deskripsi}</p>
                </div>
              </AnimateRepeat>
            );
          })}
        </div>

        <AnimateRepeat delay={300}>
          <div className={styles.tantangan}>
            <h4 className={styles.tantanganTitle}>Tantangan & Upaya Pelemahan</h4>
            <p>{kpkDetail.tantangan}</p>
          </div>
        </AnimateRepeat>
      </div>
    </section>
  );
}
