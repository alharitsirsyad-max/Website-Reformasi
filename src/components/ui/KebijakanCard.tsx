import { ExternalLink, AlertTriangle } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { Kebijakan } from '../../types';
import styles from './KebijakanCard.module.css';

interface KebijakanCardProps {
  kebijakan: Kebijakan;
  accent?: 'primary' | 'amber';
  delay?: number;
  bgClass?: string;
}

const KATEGORI_STYLE: Record<string, string> = {
  Politik:       styles.katPolitik,
  Ekonomi:       styles.katEkonomi,
  Hukum:         styles.katHukum,
  Konstitusi:    styles.katHukum,
  Sosial:        styles.katSosial,
  Keamanan:      styles.katSosial,
  Pertahanan:    styles.katSosial,
  Pendidikan:    styles.katSosial,
  Infrastruktur: styles.katEkonomi,
  'Luar Negeri': styles.katSosial,
};

export default function KebijakanCard({ kebijakan, accent = 'primary', delay = 0, bgClass = '' }: KebijakanCardProps) {
  const IconComponent = (Icons as Record<string, Icons.LucideIcon>)[kebijakan.ikon] ?? Icons.FileText;
  const accentColor = accent === 'amber' ? 'var(--amber)' : 'var(--primary)';
  const katStyle = KATEGORI_STYLE[kebijakan.kategori] ?? styles.katSosial;

  return (
    <div className={styles.card} style={{ animationDelay: `${delay}ms` }}>
      <div className={styles.accentBar} style={{ background: accentColor }} />

      <div className={styles.iconWrap}>
        <IconComponent size={18} strokeWidth={1.5} style={{ color: accentColor }} />
      </div>

      <div className={styles.header}>
        <h4 className={styles.title}>{kebijakan.judul}</h4>
        <span className={`${styles.kategori} ${katStyle}`}>{kebijakan.kategori}</span>
      </div>

      <p className={styles.deskripsi}>{kebijakan.deskripsi}</p>

      <p className={styles.dampak}>
        <em>Dampak: {kebijakan.dampak}</em>
      </p>

      <div className={styles.footer}>
        {kebijakan.kontroversial && (
          <span className={styles.kontro}>
            <AlertTriangle size={11} strokeWidth={1.5} />
            Kontroversial
          </span>
        )}
        {kebijakan.refUrl && (
          <a
            href={kebijakan.refUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.refLink}
          >
            <ExternalLink size={11} strokeWidth={1.5} />
            Referensi
          </a>
        )}
      </div>
    </div>
  );
}
