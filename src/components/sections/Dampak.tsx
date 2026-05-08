import React from 'react';
import styles from './Dampak.module.css';
import { SectionHead } from '../ui/SectionHead';
import { Card } from '../ui/Card';
import { dampak } from '@/data/content';
import { TrendingUp, Newspaper, MapPin, FileText, Shield, Heart } from 'lucide-react';
import { FadeUp } from '../ui/FadeUp';

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp size={18} strokeWidth={1.5} />,
  Newspaper: <Newspaper size={18} strokeWidth={1.5} />,
  MapPin: <MapPin size={18} strokeWidth={1.5} />,
  FileText: <FileText size={18} strokeWidth={1.5} />,
  Shield: <Shield size={18} strokeWidth={1.5} />,
  Heart: <Heart size={18} strokeWidth={1.5} />
};

export function Dampak() {
  return (
    <section id="dampak" className={styles.section}>
      <SectionHead 
        eyebrow="Hasil Perjuangan" 
        judul="Dampak Sistemik" 
        lead="Reformasi mengubah wajah Indonesia secara struktural, membawa kebebasan yang sebelumnya dibungkam."
      />
      
      <div className={styles.grid}>
        {dampak.map((item, idx) => (
          <FadeUp key={item.id} delay={idx * 100} className={styles.gridItem}>
            <Card
              judul={item.judul}
              deskripsi={item.deskripsi}
              icon={iconMap[item.icon]}
              tag={item.tag}
              accent={item.warna}
            />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
