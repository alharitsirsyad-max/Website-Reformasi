import { useState, useRef, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { praReformasi } from '../../data/content';
import type { LatarBelakangKartu } from '../../types';
import SectionHead from '../ui/SectionHead';
import AnimateRepeat from '../ui/AnimateRepeat';
import AnimateIn from '../ui/AnimateIn';
import DetailModal from '../ui/DetailModal';
import styles from './PraReformasi.module.css';

export default function PraReformasi() {
  const [selectedKartu, setSelectedKartu] = useState<LatarBelakangKartu | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  // Refs untuk setiap collapsible item
  const apaItuRef = useRef<HTMLDivElement>(null);
  const citaCitaRef = useRef<HTMLDivElement>(null);
  const konteksRef = useRef<HTMLDivElement>(null);

  const handleKartuClick = (kartu: LatarBelakangKartu) => {
    setSelectedKartu(kartu);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedKartu(null), 300);
  };

  const toggleSection = (section: string) => {
    const newExpandedSection = expandedSection === section ? null : section;
    setExpandedSection(newExpandedSection);
    
    // Jika section dibuka (bukan ditutup), scroll ke posisi section
    if (newExpandedSection) {
      setTimeout(() => {
        let targetRef: React.RefObject<HTMLDivElement> | null = null;
        
        switch (newExpandedSection) {
          case 'apa-itu':
            targetRef = apaItuRef;
            break;
          case 'cita-cita':
            targetRef = citaCitaRef;
            break;
          case 'konteks':
            targetRef = konteksRef;
            break;
        }
        
        if (targetRef?.current) {
          const navHeight = 60; // Tinggi navbar
          const offset = 20; // Extra spacing
          const elementPosition = targetRef.current.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Delay kecil untuk animasi expand selesai dulu
    }
  };

  return (
    <>
      <section id="pra-reformasi" className={`${styles.section} bg-surface`}>
        <div className={`${styles.inner} container section-padding`}>
          <AnimateRepeat>
            <SectionHead
              eyebrow="Section 01"
              title={praReformasi.judul}
              subtitle={praReformasi.deskripsi}
              center
            />
          </AnimateRepeat>

          {/* Latar Belakang & Akar Masalah - Main Content */}
          <div className={styles.mainContent}>
            <AnimateRepeat>
              <h3 className={styles.subSectionTitle}>Akar Masalah Reformasi</h3>
              <p className={styles.subSectionDesc}>
                Klik kartu untuk membaca detail lengkap tentang kondisi Indonesia sebelum reformasi
              </p>
            </AnimateRepeat>

            <div className={styles.grid}>
              {praReformasi.kartu.map((kartu, i) => {
                const IconComp = (Icons as Record<string, Icons.LucideIcon>)[kartu.ikon] ?? Icons.Info;
                return (
                  <AnimateIn key={i} delay={i * 80} direction="up">
                    <button
                      className={styles.card}
                      onClick={() => handleKartuClick(kartu)}
                      aria-label={`Baca detail tentang ${kartu.judul}`}
                    >
                      <div className={styles.iconRow}>
                        <div className={styles.iconWrap}>
                          <IconComp size={18} strokeWidth={1.5} />
                        </div>
                        {kartu.tahun && (
                          <span className={`${styles.tahun} eyebrow`}>{kartu.tahun}</span>
                        )}
                      </div>
                      <h3 className={styles.cardTitle}>{kartu.judul}</h3>
                      <p className={styles.cardDesc}>{kartu.ringkasan}</p>
                      <span className={styles.readMore}>
                        Baca selengkapnya <Icons.ArrowRight size={14} />
                      </span>
                    </button>
                  </AnimateIn>
                );
              })}
            </div>
          </div>

          {/* Collapsible Sections */}
          <div className={styles.collapsibleSections}>
            {/* Apa Itu Reformasi - Collapsible */}
            {praReformasi.apaItuReformasi && (
              <div ref={apaItuRef} className={styles.collapsibleItem}>
                <button
                  className={styles.collapsibleHeader}
                  onClick={() => toggleSection('apa-itu')}
                  aria-expanded={expandedSection === 'apa-itu'}
                >
                  <span className={styles.collapsibleTitle}>
                    <Icons.HelpCircle size={20} />
                    Apa Itu Reformasi?
                  </span>
                  <Icons.ChevronDown
                    size={20}
                    className={`${styles.collapsibleIcon} ${expandedSection === 'apa-itu' ? styles.collapsibleIconOpen : ''}`}
                  />
                </button>
                
                {expandedSection === 'apa-itu' && (
                  <div className={styles.collapsibleContent}>
                    <p className={styles.pengantar}>{praReformasi.apaItuReformasi.pengantar}</p>

                    <blockquote className={styles.quoteBox}>
                      <p className={styles.quoteText}>"{praReformasi.apaItuReformasi.quote.teks}"</p>
                      <footer className={`${styles.quoteSource} eyebrow`}>
                        — {praReformasi.apaItuReformasi.quote.sumber}
                      </footer>
                    </blockquote>

                    <div className={styles.twoCol}>
                      <div className={styles.colBox}>
                        <h4 className={styles.colTitle}>
                          <Icons.CheckCircle size={16} strokeWidth={2} />
                          Diperjuangkan
                        </h4>
                        <ul className={styles.bulletList}>
                          {praReformasi.apaItuReformasi.diperjuangkan.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.colBox}>
                        <h4 className={styles.colTitle}>
                          <Icons.XCircle size={16} strokeWidth={2} />
                          Ditolak
                        </h4>
                        <ul className={styles.bulletList}>
                          {praReformasi.apaItuReformasi.ditolak.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Cita-Cita & Tujuan - Collapsible */}
            {praReformasi.citaCita && (
              <div ref={citaCitaRef} className={styles.collapsibleItem}>
                <button
                  className={styles.collapsibleHeader}
                  onClick={() => toggleSection('cita-cita')}
                  aria-expanded={expandedSection === 'cita-cita'}
                >
                  <span className={styles.collapsibleTitle}>
                    <Icons.Target size={20} />
                    Cita-Cita & Tujuan Reformasi
                  </span>
                  <Icons.ChevronDown
                    size={20}
                    className={`${styles.collapsibleIcon} ${expandedSection === 'cita-cita' ? styles.collapsibleIconOpen : ''}`}
                  />
                </button>
                
                {expandedSection === 'cita-cita' && (
                  <div className={styles.collapsibleContent}>
                    {/* Timeline */}
                    <div className={styles.timeline}>
                      {praReformasi.citaCita.timeline.map((step, i) => (
                        <div key={i} className={styles.timelineStep}>
                          <div className={styles.timelineDot} />
                          <div className={styles.timelineContent}>
                            <span className={styles.timelineLabel}>{step.label}</span>
                            <span className={styles.timelineDesc}>{step.deskripsi}</span>
                          </div>
                        </div>
                      ))}
                      <div className={styles.timelineLine} />
                    </div>

                    {/* Tujuan cards */}
                    <div className={styles.tujuanGrid}>
                      {praReformasi.citaCita.tujuan.map((tujuan, i) => {
                        const IconComp = (Icons as Record<string, Icons.LucideIcon>)[tujuan.ikon] ?? Icons.Target;
                        return (
                          <div key={i} className={styles.tujuanCard}>
                            <div className={styles.tujuanIcon}>
                              <IconComp size={22} strokeWidth={1.5} />
                            </div>
                            <h4 className={styles.tujuanTitle}>{tujuan.judul}</h4>
                            <p className={styles.tujuanDesc}>{tujuan.deskripsi}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Konteks Sejarah - Collapsible */}
            {praReformasi.konteksSejarah && (
              <div ref={konteksRef} className={styles.collapsibleItem}>
                <button
                  className={styles.collapsibleHeader}
                  onClick={() => toggleSection('konteks')}
                  aria-expanded={expandedSection === 'konteks'}
                >
                  <span className={styles.collapsibleTitle}>
                    <Icons.BookOpen size={20} />
                    Konteks Sejarah
                  </span>
                  <Icons.ChevronDown
                    size={20}
                    className={`${styles.collapsibleIcon} ${expandedSection === 'konteks' ? styles.collapsibleIconOpen : ''}`}
                  />
                </button>
                
                {expandedSection === 'konteks' && (
                  <div className={styles.collapsibleContent}>
                    <div className={styles.konteksGrid}>
                      <div className={styles.konteksText}>
                        <p className={styles.konteksParagraf}>{praReformasi.konteksSejarah.paragraf}</p>
                      </div>

                      <div className={styles.faktaBox}>
                        <h4 className={styles.faktaTitle}>Fakta Penting</h4>
                        <div className={styles.faktaList}>
                          {praReformasi.konteksSejarah.fakta.map((fakta, i) => (
                            <div key={i} className={styles.faktaItem}>
                              <span className={styles.faktaLabel}>{fakta.label}</span>
                              <span className={styles.faktaNilai}>{fakta.nilai}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      <DetailModal isOpen={isModalOpen} onClose={handleCloseModal} kartu={selectedKartu} />
    </>
  );
}
