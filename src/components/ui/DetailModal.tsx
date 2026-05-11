import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import type { LatarBelakangKartu } from '../../types';
import styles from './DetailModal.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  kartu: LatarBelakangKartu | null;
}

type TabType = 'latar-belakang' | 'dampak' | 'referensi';

export default function DetailModal({ isOpen, onClose, kartu }: Props) {
  const [activeTab, setActiveTab] = useState<TabType>('latar-belakang');
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Save trigger element when modal opens
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      setActiveTab('latar-belakang'); // Reset tab
      // Focus close button after animation
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 300);
    } else {
      // Return focus to trigger element
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    modal.addEventListener('keydown', handleTab);
    return () => modal.removeEventListener('keydown', handleTab);
  }, [isOpen, activeTab]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !kartu) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`}
      onClick={handleBackdropClick}
      aria-hidden="true"
    >
      <div
        ref={modalRef}
        className={`${styles.modal} ${isOpen ? styles.modalOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Tutup"
        >
          <X size={20} />
        </button>

        {/* Header image */}
        {kartu.foto && (
          <div className={styles.imageHeader}>
            <img src={kartu.foto} alt={kartu.judul} className={styles.image} />
            {kartu.fotoKeterangan && (
              <p className={`${styles.imageCaption} caption`}>{kartu.fotoKeterangan}</p>
            )}
          </div>
        )}

        {/* Content */}
        <div className={styles.content}>
          {/* Badge & Title */}
          <div className={styles.header}>
            {kartu.tahun && <span className={`${styles.badge} eyebrow`}>{kartu.tahun}</span>}
            <h2 id="modal-title" className={styles.title}>
              {kartu.judul}
            </h2>
            <div className={styles.divider} />
          </div>

          {/* Tabs */}
          <div className={styles.tabs} role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === 'latar-belakang'}
              aria-controls="tab-latar-belakang"
              className={`${styles.tab} ${activeTab === 'latar-belakang' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('latar-belakang')}
            >
              Latar Belakang
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'dampak'}
              aria-controls="tab-dampak"
              className={`${styles.tab} ${activeTab === 'dampak' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('dampak')}
            >
              Dampak
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'referensi'}
              aria-controls="tab-referensi"
              className={`${styles.tab} ${activeTab === 'referensi' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('referensi')}
            >
              Referensi
            </button>
          </div>

          {/* Tab content */}
          <div className={styles.tabContent}>
            {activeTab === 'latar-belakang' && (
              <div id="tab-latar-belakang" role="tabpanel">
                <p className={styles.text}>{kartu.latarBelakang}</p>
              </div>
            )}

            {activeTab === 'dampak' && (
              <div id="tab-dampak" role="tabpanel">
                <p className={styles.text}>{kartu.dampak}</p>
              </div>
            )}

            {activeTab === 'referensi' && (
              <div id="tab-referensi" role="tabpanel">
                <div className={styles.referensiList}>
                  {kartu.referensi.map((ref, i) => (
                    <a
                      key={i}
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.referensiLink}
                    >
                      <span className={styles.referensiTitle}>{ref.judul}</span>
                      <span className={styles.referensiIcon}>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className={styles.footer}>
            <button className={styles.closeButtonSecondary} onClick={onClose}>
              Tutup
            </button>
            {kartu.referensi[0] && (
              <a
                href={kartu.referensi[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.wikiButton}
              >
                Baca di Wikipedia ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
