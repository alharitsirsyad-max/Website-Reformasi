import { useState, useEffect } from 'react';
import { tim } from '../../data/content';
import type { Anggota } from '../../types';
import SectionHead from '../ui/SectionHead';
import AnimateRepeat from '../ui/AnimateRepeat';
import styles from './TimPenulis.module.css';

// ─── Ikon SVG ─────────────────────────────────────────

function IconEmail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  );
}

function IconGithub() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9.1 17.44 9 18v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Gelembung chat */}
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      {/* Telepon di dalam */}
      <path d="M9.1 9.4c.2.8.6 1.6 1.3 2.2.7.7 1.5 1.1 2.3 1.3.2 0 .3 0 .4-.1l.9-.9c.1-.1.3-.1.4 0l1.6 1.1c.1.1.2.3.1.4l-.6 1c-.1.2-.4.3-.6.3-3.2-.3-5.7-2.8-6-6 0-.2.1-.5.3-.6l1-.6c.1-.1.3 0 .4.1l1.1 1.6c.1.1 0 .3-.1.4l-.9.9c-.1 0-.1.2-.1.3z"/>
    </svg>
  );
}

// ─── Popup Sosmed ─────────────────────────────────────

function SosmedPopup({ anggota, onClose }: { anggota: Anggota; onClose: () => void }) {
  const s = anggota.sosmed;
  if (!s) return null;

  // Lock scroll saat popup terbuka
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const links = [
    {
      icon: <IconEmail />,
      label: 'Email',
      href: `mailto:${s.email}`,
      show: !!s.email,
    },
    {
      icon: <IconInstagram />,
      label: 'Instagram',
      href: `https://instagram.com/${s.instagram}`,
      show: !!s.instagram,
    },
    {
      icon: <IconGithub />,
      label: 'GitHub',
      href: `https://github.com/${s.github}`,
      show: !!s.github,
    },
    {
      icon: <IconLinkedin />,
      label: 'LinkedIn',
      href: s.linkedin ?? '#',
      show: !!s.linkedin,
    },
    {
      icon: <IconWhatsapp />,
      label: 'WhatsApp',
      href: `https://wa.me/62${s.whatsapp?.replace(/^0/, '')}`,
      show: !!s.whatsapp,
    },
  ].filter(l => l.show);

  const inisial = anggota.nama.split(' ').map((w: string) => w[0]).slice(0, 2).join('');

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.popup} onClick={e => e.stopPropagation()}>
        <button className={styles.popupClose} onClick={onClose} aria-label="Tutup">✕</button>

        {/* Avatar */}
        <div className={styles.popupAvatar}>
          <span className={styles.popupAvatarInitial}>{inisial}</span>
        </div>

        {/* Nama & presensi */}
        <h3 className={styles.popupNama}>{anggota.nama}</h3>
        {anggota.presensi && (
          <p className={styles.popupPresensi}>Presensi: {anggota.presensi}</p>
        )}

        {/* Ikon sosmed */}
        <div className={styles.popupLinks}>
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.popupLink}
              title={l.label}
            >
              {l.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────

export default function TimPenulis() {
  const [selected, setSelected] = useState<Anggota | null>(null);

  return (
    <section id="tim" className={`${styles.section} bg-surface`}>
      <div className="container section-padding">
        <AnimateRepeat>
          <SectionHead
            eyebrow="Section 13"
            title="Tim Penulis"
            subtitle="Kelompok Riset Sejarah Reformasi Indonesia"
            center
          />
        </AnimateRepeat>

        <div className={styles.grid}>
          {tim.anggota.map((anggota, i) => {
            const hasSosmed = !!anggota.sosmed;
            return (
              <AnimateRepeat key={i} delay={i * 100}>
                <div
                  className={`${styles.card} ${hasSosmed ? styles.cardClickable : ''}`}
                  onClick={() => hasSosmed && setSelected(anggota)}
                  role={hasSosmed ? 'button' : undefined}
                  tabIndex={hasSosmed ? 0 : undefined}
                  onKeyDown={e => hasSosmed && e.key === 'Enter' && setSelected(anggota)}
                >
                  <div className={styles.avatar}>
                    <span className={styles.avatarInitial}>
                      {anggota.nama.split(' ').map((w: string) => w[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  <h3 className={styles.nama}>{anggota.nama}</h3>
                  {anggota.presensi && (
                    <p className={`${styles.presensi} caption`}>PRESENSI: {anggota.presensi}</p>
                  )}
                  {hasSosmed && (
                    <span className={styles.cardHint}>Lihat profil →</span>
                  )}
                </div>
              </AnimateRepeat>
            );
          })}
        </div>

        <AnimateRepeat delay={400}>
          <div className={styles.note}>
            <p className={`${styles.noteText} caption`}>
              Website ini dibuat sebagai tugas kelompok mata pelajaran {tim.mapel}.
              Semua konten bersumber dari referensi akademis terpercaya.
            </p>
          </div>
        </AnimateRepeat>
      </div>

      {/* Popup */}
      {selected && (
        <SosmedPopup anggota={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
