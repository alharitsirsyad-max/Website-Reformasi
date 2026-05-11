import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={styles.iconWrap}>
        {theme === 'light' ? (
          <Moon size={18} strokeWidth={1.5} className={styles.icon} />
        ) : (
          <Sun size={18} strokeWidth={1.5} className={styles.icon} />
        )}
      </div>
    </button>
  );
}
