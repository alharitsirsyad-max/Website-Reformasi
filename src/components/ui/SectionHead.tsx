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
  );
}
