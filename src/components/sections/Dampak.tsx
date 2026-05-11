<<<<<<< HEAD
import * as Icons from 'lucide-react';
import { dampak } from '../../data/content';
import SectionHead from '../ui/SectionHead';
import AnimateRepeat from '../ui/AnimateRepeat';
import styles from './Dampak.module.css';

export default function Dampak() {
  return (
    <section id="dampak" className={`${styles.section} bg-surface`}>
      <div className={`container section-padding`}>
        <AnimateRepeat>
          <SectionHead
            eyebrow="Section 09"
            title="Dampak Reformasi"
            subtitle="Dua dekade lebih reformasi telah mengubah Indonesia secara mendasar — dari sistem politik, ekonomi, hingga kebebasan sipil warganya."
            center
          />
        </AnimateRepeat>

        <div className={styles.grid}>
          {dampak.map((item, i) => {
            const IconComp = (Icons as Record<string, Icons.LucideIcon>)[item.ikon] ?? Icons.Star;
            return (
              <AnimateRepeat key={i} delay={i * 80}>
                <div className={styles.card}>
                  <div className={styles.top}>
                    <div className={styles.iconWrap}>
                      <IconComp size={18} strokeWidth={1.5} />
                    </div>
                    {item.nilai && (
                      <span className={`${styles.nilai} eyebrow`}>{item.nilai}</span>
                    )}
                  </div>
                  <h3 className={styles.cardTitle}>{item.judul}</h3>
                  <p className={styles.cardDesc}>{item.deskripsi}</p>
                </div>
              </AnimateRepeat>
            );
          })}
        </div>
=======
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
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
      </div>
    </section>
  );
}
