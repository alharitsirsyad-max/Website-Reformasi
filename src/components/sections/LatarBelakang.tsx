import React from 'react';
import styles from './LatarBelakang.module.css';
import { SectionHead } from '../ui/SectionHead';
import { Card } from '../ui/Card';
import { latarBelakang } from '@/data/content';
import { TrendingDown, DollarSign, Users, ShieldAlert } from 'lucide-react';
import { FadeUp } from '../ui/FadeUp';

const iconMap: Record<string, React.ReactNode> = {
  TrendingDown: <TrendingDown size={18} strokeWidth={1.5} />,
  DollarSign: <DollarSign size={18} strokeWidth={1.5} />,
  Users: <Users size={18} strokeWidth={1.5} />,
  ShieldAlert: <ShieldAlert size={18} strokeWidth={1.5} />
};

export function LatarBelakang() {
  return (
    <section id="latar-belakang" className={styles.section}>
      <SectionHead 
        eyebrow="Akar Masalah" 
        judul="Latar Belakang Reformasi" 
        lead="Kejatuhan Orde Baru bukan hanya karena satu peristiwa, melainkan puncak dari krisis multidimensi yang menumpuk selama puluhan tahun." 
      />
      
      <div className={styles.grid}>
        {latarBelakang.map((item, idx) => (
          <FadeUp key={item.id} delay={idx * 100} className={styles.gridItem}>
            <Card 
              judul={item.judul}
              deskripsi={item.deskripsi}
              icon={iconMap[item.icon]}
              accent="red"
            />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
