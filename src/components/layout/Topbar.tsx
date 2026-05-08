import React from 'react';
import styles from './Topbar.module.css';
import { Menu, X } from 'lucide-react';
import { meta } from '@/data/content';

interface TopbarProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
}

export function Topbar({ onMenuClick, isSidebarOpen }: TopbarProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.topbar}>
      <button className={styles.hamburger} onClick={onMenuClick} aria-label="Toggle menu">
        {isSidebarOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
      </button>
      
      <div className={styles.brandContainer}>
        <span className={styles.brand}>{meta.brandName}</span>
        <span className={styles.badge}>{meta.tagline}</span>
      </div>

      <div className={styles.spacer} />

      <nav className={styles.nav}>
        <button onClick={() => scrollTo('beranda')} className={styles.navLink}>Beranda</button>
        <button onClick={() => scrollTo('kronologi')} className={styles.navLink}>Kronologi</button>
        <button onClick={() => scrollTo('tokoh')} className={styles.navLink}>Tokoh</button>
        <button onClick={() => scrollTo('dampak')} className={styles.navLink}>Dampak</button>
      </nav>
    </header>
  );
}
