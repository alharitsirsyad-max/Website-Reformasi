<<<<<<< HEAD
import { Menu, Scale } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { scrollToSection } from '../../hooks';
import styles from './Topbar.module.css';

const TOPBAR_NAV = [
  { label: 'Habibie',  id: 'habibie'  },
  { label: 'Gus Dur',  id: 'gus-dur'  },
  { label: 'Megawati', id: 'megawati' },
  { label: 'SBY',      id: 'sby'      },
  { label: 'Jokowi',   id: 'jokowi'   },
  { label: 'Prabowo',  id: 'prabowo', amber: true },
] as const;

interface TopbarProps {
  activeSection: string;
  onMenuClick: () => void;
  isAntikorupsiPage?: boolean;
}

export default function Topbar({ activeSection, onMenuClick, isAntikorupsiPage = false }: TopbarProps) {
  const [location] = useLocation();
  const isOnAntikorupsiPage = location === '/antikorupsi';

  return (
    <header className={styles.topbar}>
      <button
        className={styles.hamburger}
        onClick={onMenuClick}
        aria-label="Buka menu navigasi"
      >
        <Menu size={18} strokeWidth={1.5} />
      </button>

      <Link href="/">
        <button className={styles.brand}>
          <span className={styles.brandName}>Reformasi Indonesia</span>
          <span className={styles.brandTag}>1998–Kini</span>
        </button>
      </Link>

      <div className={styles.spacer} />

      {!isAntikorupsiPage && (
        <nav className={`${styles.presNav} scrollbar-none`}>
          {TOPBAR_NAV.map(item => {
            const isActive = activeSection === item.id;
            const isAmber = 'amber' in item && item.amber;
            return (
              <button
                key={item.id}
                className={`${styles.navItem} ${isActive ? styles.active : ''} ${isAmber ? styles.amberItem : ''} ${isActive && isAmber ? styles.activeAmber : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      )}

      <div className={styles.divider} />

      <Link href="/antikorupsi">
        <button className={`${styles.antikorupsiBtn} ${isOnAntikorupsiPage ? styles.antikorupsiActive : ''}`}>
          <Scale size={13} strokeWidth={1.5} />
          <span>Antikorupsi</span>
        </button>
      </Link>
=======
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
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
    </header>
  );
}
