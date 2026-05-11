import { scrollToSection } from '../../hooks';
import styles from './DotsNavigator.module.css';

const DOTS = [
  { id: 'hero',           label: 'Hero' },
  { id: 'pra-reformasi',  label: 'Latar Belakang' },
  { id: 'krisis',         label: 'Krisis 1997–98' },
  { id: 'habibie',        label: 'Habibie 1998–99' },
  { id: 'gus-dur',        label: 'Gus Dur 1999–01' },
  { id: 'megawati',       label: 'Megawati 01–04' },
  { id: 'sby',            label: 'SBY 2004–14' },
  { id: 'jokowi',         label: 'Jokowi 2014–24' },
  { id: 'prabowo',        label: 'Prabowo 2024–Kini', amber: true },
  { id: 'dampak',         label: 'Dampak' },
  { id: 'reformasi-kini', label: 'Reformasi Kini' },
  { id: 'media',          label: 'Video & Media' },
  { id: 'referensi',      label: 'Referensi' },
  { id: 'tim',            label: 'Tim Penulis' },
] as const;

interface DotsNavigatorProps {
  activeSection: string;
}

export default function DotsNavigator({ activeSection }: DotsNavigatorProps) {
  return (
    <nav className={styles.nav} aria-label="Navigasi section">
      {DOTS.map(dot => {
        const isActive = activeSection === dot.id;
        const isAmber = 'amber' in dot && dot.amber;
        return (
          <button
            key={dot.id}
            className={`${styles.dotBtn} ${isActive ? styles.active : ''} ${isAmber && isActive ? styles.activeAmber : ''}`}
            onClick={() => scrollToSection(dot.id)}
            title={dot.label}
            aria-label={dot.label}
          >
            <span className={styles.tooltip}>{dot.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
