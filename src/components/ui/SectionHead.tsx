import styles from './SectionHead.module.css';

interface SectionHeadProps {
  eyebrow?: string;
  judul?: string;
  title?: string;
  lead?: string;
  subtitle?: string;
  center?: boolean;
  accent?: 'primary' | 'gold' | 'teal' | 'amber';
}

export default function SectionHead({
  eyebrow,
  judul,
  title,
  lead,
  subtitle,
  center = false,
  accent = 'primary',
}: SectionHeadProps) {
  const displayTitle = judul || title || '';
  const displaySubtitle = lead || subtitle || '';
  
  return (
    <div className={`${styles.wrap} ${center ? styles.center : ''}`}>
      {eyebrow && <p className={`${styles.eyebrow} eyebrow`}>{eyebrow}</p>}
      <h2 className={styles.title}>{displayTitle}</h2>
      <div className={`${styles.line} ${styles[accent]}`} />
      {displaySubtitle && <p className={styles.subtitle}>{displaySubtitle}</p>}
    </div>
  );
}
