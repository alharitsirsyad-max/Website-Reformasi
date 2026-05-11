<<<<<<< HEAD
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
=======
import React from 'react';
import styles from './SectionHead.module.css';
import { FadeUp } from './FadeUp';

interface SectionHeadProps {
  eyebrow: string;
  judul: string;
  lead?: string;
}

export function SectionHead({ eyebrow, judul, lead }: SectionHeadProps) {
  return (
    <FadeUp>
      <div className={styles.container}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2 className={styles.judul}>{judul}</h2>
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>
    </FadeUp>
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
  );
}
