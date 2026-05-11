import { media } from '../../data/content';
import SectionHead from '../ui/SectionHead';
import VideoCard from '../ui/VideoCard';
import AnimateRepeat from '../ui/AnimateRepeat';
import styles from './Media.module.css';

export default function Media() {
  return (
    <section id="media" className={`${styles.section} bg-surface`}>
      <div className={`container section-padding`}>
        <AnimateRepeat>
          <SectionHead
            eyebrow="Section 11"
            title="Video &amp; Media"
            subtitle="Arsip video dan dokumenter penting tentang perjalanan Reformasi Indonesia."
          />
        </AnimateRepeat>

        <div className={styles.grid}>
          {media.map((item, i) => (
            <AnimateRepeat key={i} delay={i * 80}>
              <VideoCard item={item} />
            </AnimateRepeat>
          ))}
        </div>
      </div>
    </section>
  );
}
