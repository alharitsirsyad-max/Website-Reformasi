import { ExternalLink, Play } from 'lucide-react';
import type { PresidentEvent } from '../../types';
import styles from './EventCard.module.css';

interface EventCardProps {
  event: PresidentEvent;
  accent?: string;
  delay?: number;
}

export default function EventCard({ event, accent = 'var(--primary)', delay = 0 }: EventCardProps) {
  return (
    <div
      className={`${styles.card} ${event.highlight ? styles.highlight : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={styles.dateLine}>
        <span className={`${styles.dot}`} style={{ background: event.highlight ? accent : 'var(--border)' }} />
        <span className={styles.date}>{event.tanggal}</span>
        {event.tag && <span className={styles.tag}>{event.tag}</span>}
      </div>

      <h4 className={styles.title}>{event.judul}</h4>
      <p className={styles.desc}>{event.deskripsi}</p>

      {event.gambarSrc && (
        <div className={styles.imgWrap}>
          <img
            src={event.gambarSrc}
            alt={event.gambarKeterangan ?? event.judul}
            className={styles.img}
            loading="lazy"
            onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          {event.gambarKeterangan && (
            <p className={`${styles.caption} caption`}>{event.gambarKeterangan}</p>
          )}
        </div>
      )}

      <div className={styles.links}>
        {event.refUrl && (
          <a
            href={event.refUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.refLink}
          >
            <ExternalLink size={11} strokeWidth={1.5} />
            {event.refLabel ?? 'Referensi'}
          </a>
        )}
        {event.videoUrl && (
          <a
            href={event.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.refLink} ${styles.videoLink}`}
          >
            <Play size={11} strokeWidth={1.5} />
            {event.videoLabel ?? 'Video'}
          </a>
        )}
      </div>
    </div>
  );
}
