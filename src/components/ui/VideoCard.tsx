import { Play } from 'lucide-react';
import type { MediaItem } from '../../types';
import styles from './VideoCard.module.css';

interface VideoCardProps {
  item: MediaItem;
}

export default function VideoCard({ item }: VideoCardProps) {
  const thumbUrl = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${item.videoId}`;

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.thumb}>
        <img
          src={thumbUrl}
          alt={item.judul}
          className={styles.img}
          loading="lazy"
          onError={e => {
            const t = e.target as HTMLImageElement;
            t.style.display = 'none';
            t.parentElement!.classList.add(styles.fallback);
          }}
        />
        <div className={styles.playBtn}>
          <Play size={18} strokeWidth={1.5} fill="currentColor" />
        </div>
      </div>
      <div className={styles.info}>
        {item.channel && (
          <span className={`${styles.channel} caption`}>{item.channel}</span>
        )}
        <h4 className={styles.title}>{item.judul}</h4>
        <p className={styles.desc}>{item.deskripsi}</p>
      </div>
    </a>
  );
}
