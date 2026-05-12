import * as Icons from 'lucide-react';
import { dampak } from '../../data/content';
import SectionHead from '../ui/SectionHead';
import AnimateRepeat from '../ui/AnimateRepeat';
import styles from './Dampak.module.css';

export default function Dampak() {
  return (
    <section id="dampak" className={`${styles.section} bg-surface`}>
      <div className={`container section-padding`}>
        <AnimateRepeat>
          <SectionHead
            eyebrow="Section 09"
            title="Dampak Reformasi"
            subtitle="Dua dekade lebih reformasi telah mengubah Indonesia secara mendasar — dari sistem politik, ekonomi, hingga kebebasan sipil warganya."
            center
          />
        </AnimateRepeat>

        <div className={styles.grid}>
          {dampak.map((item, i) => {
            const IconComp = (Icons as Record<string, Icons.LucideIcon>)[item.ikon] ?? Icons.Star;
            return (
              <AnimateRepeat key={i} delay={i * 80}>
                <div className={styles.card}>
                  <div className={styles.top}>
                    <div className={styles.iconWrap}>
                      <IconComp size={18} strokeWidth={1.5} />
                    </div>
                    {item.nilai && (
                      <span className={`${styles.nilai} eyebrow`}>{item.nilai}</span>
                    )}
                  </div>
                  <h3 className={styles.cardTitle}>{item.judul}</h3>
                  <p className={styles.cardDesc}>{item.deskripsi}</p>
                </div>
              </AnimateRepeat>
            );
          })}
        </div>
      </div>
    </section>
  );
}
