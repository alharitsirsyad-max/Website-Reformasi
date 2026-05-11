import { krisisGerakan } from '../../data/content';
import SectionHead from '../ui/SectionHead';
import AnimateRepeat from '../ui/AnimateRepeat';
import styles from './KrisisGerakan.module.css';

export default function KrisisGerakan() {
  return (
    <section id="krisis" className={`${styles.section} bg-main`}>
      <div className={`${styles.inner} container section-padding`}>
        <AnimateRepeat>
          <SectionHead
            eyebrow="Section 02"
            title="Krisis 1997 & Gerakan 1998"
            subtitle="Krisis moneter Asia yang menghantam Indonesia menjadi katalis bagi gerakan mahasiswa yang mengakhiri 32 tahun Orde Baru."
          />
        </AnimateRepeat>

        <div className={styles.timeline}>
          {krisisGerakan.map((event, i) => (
            <AnimateRepeat key={i} delay={i * 80}>
              <div className={`${styles.item} ${event.highlight ? styles.highlight : ''}`}>
                <div className={styles.left}>
                  <span className={styles.tahun}>{event.tahun}</span>
                  {event.tag && <span className={styles.tag}>{event.tag}</span>}
                </div>
                <div className={styles.dotCol}>
                  <div className={`${styles.dot} ${event.highlight ? styles.dotHighlight : ''}`} />
                  {i < krisisGerakan.length - 1 && <div className={styles.line} />}
                </div>
                <div className={styles.right}>
                  <h3 className={styles.title}>{event.judul}</h3>
                  <p className={styles.desc}>{event.deskripsi}</p>
                </div>
              </div>
            </AnimateRepeat>
          ))}
        </div>
      </div>
    </section>
  );
}
