import React from 'react';
import styles from './Sidebar.module.css';
import { 
  Home, BookOpen, Clock, Shield, Users, 
  TrendingUp, RefreshCw, PlayCircle, FileText, User 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

const navItems = [
  { id: 'beranda', label: 'Beranda', icon: Home },
  { id: 'latar-belakang', label: 'Latar Belakang', icon: BookOpen },
  { id: 'kronologi', label: 'Kronologi', icon: Clock },
  { id: 'perjuangan', label: 'Perjuangan', icon: Shield },
  { id: 'tokoh', label: 'Tokoh', icon: Users },
  { id: 'dampak', label: 'Dampak', icon: TrendingUp },
  { id: 'reformasi-kini', label: 'Reformasi Kini', icon: RefreshCw },
  { id: 'media', label: 'Media', icon: PlayCircle },
  { id: 'referensi', label: 'Referensi', icon: FileText },
  { id: 'tim', label: 'Tim Penulis', icon: User }
];

export function Sidebar({ isOpen, onClose, activeSection }: SidebarProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={onClose} />}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <nav className={styles.nav}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              >
                <Icon size={18} strokeWidth={1.5} className={styles.icon} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
