import styles from './SectionHead.module.css';

interface SectionHeadProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  accent?: 'primary' | 'gold' | 'teal' | 'amber';
}

export default function SectionHead({
  eyebrow,
  title,
  subtitle,
  center = false,
  accent = 'primary',
}: SectionHeadProps) {
  return (
    <div className={`${styles.wrap} ${center ? styles.center : ''}`}>
      {eyebrow && <p className={`${styles.eyebrow} eyebrow`}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      <div className={`${styles.line} ${styles[accent]}`} />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
