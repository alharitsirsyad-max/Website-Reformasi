import { X, Scale } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { scrollToSection } from '../../hooks';
import styles from './Sidebar.module.css';

const SECTIONS = [
  { group: 'JELAJAHI', items: [
    { label: 'Home', id: 'hero' },
    { label: 'Latar Belakang', id: 'pra-reformasi' },
    { label: 'Krisis & Gerakan', id: 'krisis' },
  ]},
  { group: 'ERA KEPRESIDENAN', items: [
    { label: 'Habibie (1998–99)', id: 'habibie', dot: 'var(--primary)' },
    { label: 'Gus Dur (1999–01)', id: 'gus-dur', dot: 'var(--primary)' },
    { label: 'Megawati (01–04)', id: 'megawati', dot: 'var(--gold)' },
    { label: 'SBY (2004–14)', id: 'sby', dot: 'var(--teal)' },
    { label: 'Jokowi (2014–24)', id: 'jokowi', dot: 'var(--navy-mid)' },
    { label: 'Prabowo (2024–kini)', id: 'prabowo', dot: 'var(--amber)', amber: true },
  ]},
  { group: 'LAINNYA', items: [
    { label: 'Dampak', id: 'dampak' },
    { label: 'Reformasi Kini', id: 'reformasi-kini' },
    { label: 'Video & Media', id: 'media' },
    { label: 'Referensi', id: 'referensi' },
    { label: 'Tim Penulis', id: 'tim' },
  ]},
] as const;

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export default function Sidebar({ isOpen, onClose, activeSection }: SidebarProps) {
  const [location, navigate] = useLocation();
  const isOnAntikorupsiPage = location === '/antikorupsi';

  const handleNav = (id: string) => {
    onClose();
    if (isOnAntikorupsiPage) {
      navigate('/');
      setTimeout(() => scrollToSection(id), 300);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />
      )}

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
        aria-label="Navigasi sidebar"
      >
        <div className={styles.header}>
          <span className={styles.sidebarTitle}>Reformasi Indonesia</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Tutup menu">
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        <nav className={styles.nav}>
          {SECTIONS.map(section => (
            <div key={section.group} className={styles.group}>
              <p className={`${styles.groupLabel} eyebrow`}>{section.group}</p>
              {section.items.map(item => {
                const isActive = activeSection === item.id;
                const isAmber = 'amber' in item && item.amber;
                return (
                  <button
                    key={item.id}
                    className={`${styles.navItem} ${isActive ? styles.active : ''} ${isAmber ? styles.amberItem : ''}`}
                    onClick={() => handleNav(item.id)}
                  >
                    {'dot' in item && item.dot && (
                      <span className={styles.dot} style={{ background: item.dot }} />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </div>
          ))}

          <div className={styles.group}>
            <p className={`${styles.groupLabel} eyebrow`}>HALAMAN KHUSUS</p>
            <Link href="/antikorupsi">
              <button
                className={`${styles.navItem} ${styles.specialItem} ${isOnAntikorupsiPage ? styles.active : ''}`}
                onClick={onClose}
              >
                <Scale size={14} strokeWidth={1.5} />
                Antikorupsi
                <span className={styles.newBadge}>BARU</span>
              </button>
            </Link>
          </div>
        </nav>

        <div className={styles.footer}>
          <p className="caption">Tugas Kelompok — Mata Pelajaran Sejarah</p>
        </div>
      </aside>
    </>
  );
}
