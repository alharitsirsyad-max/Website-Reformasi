import { useRef } from 'react';
import type { President } from '../../types';
import KebijakanCard from '../ui/KebijakanCard';
import EventCard from '../ui/EventCard';
import AnimateRepeat from '../ui/AnimateRepeat';
import PresidentPhotoHover from '../ui/PresidentPhotoHover';
import { useAudio } from '../../contexts/AudioContext';
import styles from './PresidentSection.module.css';

interface Props {
  president: President;
  bgClass: string;
}

// ─── Shared sub-components ────────────────────────────

function PresidentPhoto({ p, className, showTooltip = false }: { p: President; className?: string; showTooltip?: boolean }) {
  return (
    <PresidentPhotoHover
      presidentId={p.id}
      photos={p.fotoGallery || []}
      fallbackUrl={p.fotoUrl}
      fallbackGradient={p.fallbackGradient}
      inisial={p.namaLengkap.split(' ').map(w => w[0]).slice(0, 2).join('')}
      caption={p.fotoKeterangan}
      lisensi={p.fotoLisensi}
      className={className}
      showTooltip={showTooltip}
      style={{ aspectRatio: '3/4' }}
    />
  );
}

function PresidentPhotoFull({ p, height = 340 }: { p: President; height?: number }) {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleError = () => {
    if (!imgRef.current) return;
    imgRef.current.style.display = 'none';
    const parent = imgRef.current.closest(`.${styles.fullPhotoWrap}`) as HTMLElement;
    if (parent) parent.style.background = p.fallbackGradient;
  };

  return (
    <div className={styles.fullPhotoWrap} style={{ height }}>
      <img
        ref={imgRef}
        src={p.fotoUrl}
        alt={p.fotoKeterangan}
        className={styles.fullPhoto}
        onError={handleError}
        loading="lazy"
      />
      <div className={styles.fullPhotoOverlay} />
      <div className={styles.fullPhotoText}>
        <span className={`${styles.periodeBadge} eyebrow`}>{p.periode}</span>
        <h2 className={styles.fullPhotoName}>{p.namaLengkap}</h2>
        <p className={`${styles.jabatan} eyebrow`}>{p.jabatan}</p>
      </div>
    </div>
  );
}

function PresidentHeaderSplit({ p, badge }: { p: President; badge?: React.ReactNode }) {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleError = () => {
    if (!imgRef.current) return;
    imgRef.current.style.display = 'none';
    const parent = imgRef.current.parentElement;
    if (parent) {
      parent.style.background = p.fallbackGradient;
      parent.style.display = 'flex';
      parent.style.alignItems = 'center';
      parent.style.justifyContent = 'center';
      const span = document.createElement('span');
      span.textContent = p.namaLengkap.split(' ').map(w => w[0]).slice(0,2).join('');
      span.style.cssText = 'font-family:var(--font-serif);font-size:4rem;font-weight:700;color:rgba(255,255,255,0.2)';
      parent.appendChild(span);
    }
  };

  return (
    <div className={styles.headerSplit}>
      <div className={styles.headerSplitPhoto}>
        <img
          ref={imgRef}
          src={p.fotoUrl}
          alt={p.fotoKeterangan}
          className={styles.headerSplitImg}
          onError={handleError}
          loading="lazy"
        />
        <p className={`${styles.photoCaption} caption`}>{p.fotoKeterangan}</p>
        <p className={`${styles.photoLisensi} caption`}>{p.fotoLisensi}</p>
      </div>
      <div className={styles.headerSplitInfo}>
        {badge}
        <span className="eyebrow" style={{ color: 'var(--text-3)', display: 'block', marginBottom: '0.5rem' }}>
          {p.periode} · {p.jabatan}
        </span>
        <h2 className={styles.headerSplitName}>{p.namaLengkap}</h2>
      </div>
    </div>
  );
}

function QuoteBlock({ quote, source }: { quote: string; source: string }) {
  return (
    <blockquote className={styles.quote}>
      <p className={styles.quoteText}>"{quote}"</p>
      <footer className={`${styles.quoteSource} eyebrow`}>— {source}</footer>
    </blockquote>
  );
}

function KebijakanGrid({ kebijakan, accent, cols = 2, bgClass }: { kebijakan: President['kebijakan']; accent?: 'primary' | 'amber'; cols?: number; bgClass?: string }) {
  return (
    <div className={styles.kebijakanGrid} style={{ gridTemplateColumns: `repeat(${cols},1fr)` }}>
      {kebijakan.map((k, i) => (
        <AnimateRepeat key={i} delay={i * 80}>
          <KebijakanCard kebijakan={k} accent={accent} delay={i * 80} bgClass={bgClass} />
        </AnimateRepeat>
      ))}
    </div>
  );
}

function EventGrid({ events, accent, cols = 2 }: { events: President['events']; accent?: string; cols?: number }) {
  return (
    <div className={styles.eventGrid} style={{ gridTemplateColumns: `repeat(${cols},1fr)` }}>
      {events.map((e, i) => (
        <AnimateRepeat key={i} delay={i * 80}>
          <EventCard event={e} accent={accent} delay={i * 80} />
        </AnimateRepeat>
      ))}
    </div>
  );
}

function SubTitle({ children, accent = 'var(--primary)' }: { children: string; accent?: string }) {
  return (
    <div className={styles.subTitleWrap}>
      <h3 className={styles.subTitle}>{children}</h3>
      <div className={styles.subLine} style={{ background: accent }} />
    </div>
  );
}

// ─── Layout A — Split foto kiri ────────────────────────
function LayoutA({ p, bgClass }: { p: President; bgClass: string }) {
  // Show tooltip only for Habibie (first president)
  const showTooltip = p.id === 'habibie';
  
  return (
    <div className={styles.layoutA}>
      {/* Col left: sticky photo + events */}
      <div className={styles.colLeft}>
        <div className={styles.stickyPhoto}>
          <PresidentPhoto p={p} showTooltip={showTooltip} />
          
          {/* Events below photo */}
          <div className={styles.photoSideContent}>
            <SubTitle>Peristiwa Penting</SubTitle>
            <div className={styles.eventList}>
              {p.events.map((e, i) => (
                <AnimateRepeat key={i} delay={i * 60}>
                  <div className={styles.eventCompact}>
                    <span className={`${styles.eventDate} eyebrow`}>{e.tanggal}</span>
                    <h4 className={styles.eventTitle}>{e.judul}</h4>
                    <p className={styles.eventDesc}>{e.deskripsi}</p>
                    {e.refUrl && (
                      <a
                        href={e.refUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.eventRef}
                      >
                        {e.refLabel ?? 'Referensi'} ↗
                      </a>
                    )}
                  </div>
                </AnimateRepeat>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Col right: content */}
      <div className={styles.colRight}>
        <AnimateRepeat>
          <span className="eyebrow" style={{ color: 'var(--text-3)' }}>{p.periode} · {p.jabatan}</span>
          <h2 className={styles.presidentName}>{p.namaLengkap}</h2>
          <div className={styles.growLine} />
          <QuoteBlock quote={p.quote} source={p.quoteSumber} />
          <p className={styles.ringkasan}>{p.ringkasan}</p>
        </AnimateRepeat>

        <div className={styles.contentBlock}>
          <SubTitle>Kebijakan &amp; Program Utama</SubTitle>
          <KebijakanGrid kebijakan={p.kebijakan} cols={2} bgClass={bgClass} />
        </div>
      </div>
    </div>
  );
}

// ─── Layout B — Gus Dur special (The Humanist - Bold & Powerful) ───
function LayoutB({ p, bgClass }: { p: President; bgClass: string }) {
  // Pisahkan kebijakan diskriminasi sebagai hero
  const heroPolicy = p.kebijakan.find(k => k.judul.includes('Diskriminasi'));
  const otherPolicies = p.kebijakan.filter(k => !k.judul.includes('Diskriminasi'));

  return (
    <div>
      {/* Header section dengan layout asimetris */}
      <div className={`${styles.innerFull} container section-padding`}>
        <div className={styles.gusdurMainGrid}>
          {/* Col left: info dengan quote raksasa */}
          <div className={styles.gusdurLeftCol}>
            <AnimateRepeat>
              {/* Badge */}
              <div className={styles.gusdurBadgeStrong}>
                <span>BAPAK PLURALISME</span>
              </div>
              
              <span className="eyebrow" style={{ color: 'var(--text-3)', marginTop: '1rem', display: 'block' }}>{p.periode} · {p.jabatan}</span>
              <h2 className={styles.gusdurNameStrong}>{p.namaLengkap}</h2>
              
              {/* Quote RAKSASA yang mendominasi */}
              <div className={styles.gusdurQuoteGiant}>
                <div className={styles.gusdurQuoteMarkGiant}>"</div>
                <p className={styles.gusdurQuoteTextGiant}>{p.quote}</p>
              </div>
              
              <p className={styles.gusdurRingkasanStrong}>{p.ringkasan}</p>
            </AnimateRepeat>
          </div>

          {/* Col right: photo besar */}
          <div className={styles.gusdurRightCol}>
            <div className={styles.gusdurPhotoLarge}>
              <img
                src={p.fotoUrl}
                alt={p.fotoKeterangan}
                className={styles.gusdurPhotoImgLarge}
                loading="lazy"
              />
              <div className={styles.gusdurPhotoOverlay}>
                <span className={styles.gusdurPhotoLabel}>K.H. Abdurrahman Wahid</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className={styles.layoutBContent}>
        <div className={`${styles.innerFull} container`} style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 var(--section-px)' }}>
          
          {/* Hero Policy - Diskriminasi */}
          {heroPolicy && (
            <AnimateRepeat>
              <div className={styles.gusdurHeroPolicy}>
                <div className={styles.gusdurHeroPolicyBadge}>WARISAN TERBESAR</div>
                <div className={styles.gusdurHeroPolicyContent}>
                  <div className={styles.gusdurHeroPolicyLeft}>
                    <h3 className={styles.gusdurHeroPolicyTitle}>{heroPolicy.judul}</h3>
                    <p className={styles.gusdurHeroPolicyDesc}>{heroPolicy.deskripsi}</p>
                  </div>
                  <div className={styles.gusdurHeroPolicyRight}>
                    <div className={styles.gusdurHeroPolicyImpact}>
                      <span className={styles.gusdurHeroPolicyImpactLabel}>Dampak</span>
                      <p className={styles.gusdurHeroPolicyImpactText}>{heroPolicy.dampak}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateRepeat>
          )}

          {/* Kebijakan & Events dalam grid */}
          <div className={styles.gusdurContentGrid}>
            {/* Kebijakan lainnya */}
            <div className={styles.gusdurSection}>
              <SubTitle>Kebijakan Lainnya</SubTitle>
              <div className={styles.gusdurPolicyList}>
                {otherPolicies.map((k, i) => (
                  <AnimateRepeat key={i} delay={i * 60}>
                    <KebijakanCard kebijakan={k} delay={i * 60} bgClass={bgClass} />
                  </AnimateRepeat>
                ))}
              </div>
            </div>

            {/* Events */}
            <div className={styles.gusdurSection}>
              <SubTitle>Peristiwa Penting</SubTitle>
              <div className={styles.gusdurEventList}>
                {p.events.map((e, i) => (
                  <AnimateRepeat key={i} delay={i * 60}>
                    <div className={`${styles.gusdurEventStrong} ${e.highlight ? styles.gusdurEventStrongHighlight : ''}`}>
                      <div className={styles.gusdurEventStrongHeader}>
                        <span className={`${styles.gusdurEventStrongDate} eyebrow`}>{e.tanggal}</span>
                        {e.highlight && <span className={styles.gusdurEventStrongBadge}>PENTING</span>}
                      </div>
                      <h4 className={styles.gusdurEventStrongTitle}>{e.judul}</h4>
                      <p className={styles.gusdurEventStrongDesc}>{e.deskripsi}</p>
                    </div>
                  </AnimateRepeat>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Layout A-flip — Mirror (konten kiri, foto kanan) ──
function LayoutAflip({ p, bgClass }: { p: President; bgClass: string }) {
  return (
    <div className={styles.layoutAflip}>
      {/* Col left: content */}
      <div className={styles.colRight}>
        <AnimateRepeat>
          <span className="eyebrow" style={{ color: 'var(--text-3)' }}>{p.periode} · {p.jabatan}</span>
          <h2 className={styles.presidentName}>{p.namaLengkap}</h2>
          <div className={styles.growLine} />
          <QuoteBlock quote={p.quote} source={p.quoteSumber} />
          <p className={styles.ringkasan}>{p.ringkasan}</p>
        </AnimateRepeat>

        <div className={styles.contentBlock}>
          <SubTitle>Kebijakan &amp; Program Utama</SubTitle>
          <KebijakanGrid kebijakan={p.kebijakan} cols={2} bgClass={bgClass} />
        </div>
      </div>

      {/* Col right: sticky photo + events */}
      <div className={styles.colLeft}>
        <div className={styles.stickyPhoto}>
          <PresidentPhoto p={p} />
          
          {/* Events below photo */}
          <div className={styles.photoSideContent}>
            <SubTitle>Peristiwa Penting</SubTitle>
            <div className={styles.eventList}>
              {p.events.map((e, i) => (
                <AnimateRepeat key={i} delay={i * 60}>
                  <div className={styles.eventCompact}>
                    <span className={`${styles.eventDate} eyebrow`}>{e.tanggal}</span>
                    <h4 className={styles.eventTitle}>{e.judul}</h4>
                    <p className={styles.eventDesc}>{e.deskripsi}</p>
                    {e.refUrl && (
                      <a
                        href={e.refUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.eventRef}
                      >
                        {e.refLabel ?? 'Referensi'} ↗
                      </a>
                    )}
                  </div>
                </AnimateRepeat>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Layout C — Split layout like A + zigzag timeline ───
function LayoutC({ p, bgClass }: { p: President; bgClass: string }) {
  return (
    <div>
      {/* Header section - same as Layout A */}
      <div className={`${styles.innerFull} container section-padding`}>
        <div className={styles.layoutA}>
          {/* Col left: photo */}
          <div className={styles.colLeft}>
            <div className={styles.stickyPhoto}>
              <PresidentPhoto p={p} />
            </div>
          </div>

          {/* Col right: info + stats */}
          <div className={styles.colRight}>
            <AnimateRepeat>
              <span className="eyebrow" style={{ color: 'var(--text-3)' }}>{p.periode} · {p.jabatan}</span>
              <h2 className={styles.presidentName}>{p.namaLengkap}</h2>
              <div className={styles.growLine} />
              <QuoteBlock quote={p.quote} source={p.quoteSumber} />
              <p className={styles.ringkasan}>{p.ringkasan}</p>
            </AnimateRepeat>
            
            {/* Stats highlight untuk SBY */}
            <div className={styles.statsBoxSide}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10</span>
                <span className={styles.statLabel}>Tahun Memimpin</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>6%</span>
                <span className={styles.statLabel}>Pertumbuhan/Tahun</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2×</span>
                <span className={styles.statLabel}>Terpilih Langsung</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content below - zigzag timeline */}
      <div className={styles.layoutBContent}>
        <div className={styles.contentBlock}>
          <SubTitle>Kebijakan &amp; Program Utama</SubTitle>
          <KebijakanGrid kebijakan={p.kebijakan} cols={3} bgClass={bgClass} />
        </div>

        <div className={styles.contentBlock}>
          <SubTitle>Peristiwa Penting</SubTitle>
          <div className={styles.zigzag}>
            <div className={styles.zigzagLine} />
            {p.events.map((ev, i) => (
              <AnimateRepeat key={i} delay={i * 80}>
                <div className={`${styles.zigzagItem} ${i % 2 === 0 ? styles.zigzagLeft : styles.zigzagRight}`}>
                  {/* Visual side */}
                  <div className={styles.zigzagVisual}>
                    {ev.gambarSrc ? (
                      <img
                        src={ev.gambarSrc}
                        alt={ev.gambarKeterangan ?? ev.judul}
                        className={styles.zigzagImg}
                        loading="lazy"
                        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    ) : (
                      <div
                        className={styles.zigzagPlaceholder}
                        style={{ background: p.fallbackGradient }}
                      >
                        <span className={styles.zigzagDate}>{ev.tanggal}</span>
                      </div>
                    )}
                  </div>

                  {/* Dot */}
                  <div className={styles.zigzagDot}>
                    <span
                      className={styles.zigzagDotInner}
                      style={{ background: ev.highlight ? p.warnaTema : 'var(--border)' }}
                    />
                  </div>

                  {/* Text side */}
                  <div className={styles.zigzagText}>
                    <span className={`${styles.zigzagTanggal} eyebrow`}>{ev.tanggal}</span>
                    <h4 className={styles.zigzagTitle}>{ev.judul}</h4>
                    <p className={styles.zigzagDesc}>{ev.deskripsi}</p>
                    {ev.refUrl && (
                      <a
                        href={ev.refUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.zigzagRef}
                      >
                        {ev.refLabel ?? 'Referensi'} ↗
                      </a>
                    )}
                  </div>
                </div>
              </AnimateRepeat>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Layout C-flip — Mirror of C (foto kanan, info kiri) + zigzag timeline ───
function LayoutCflip({ p, bgClass }: { p: President; bgClass: string }) {
  return (
    <div>
      {/* Header section - flipped */}
      <div className={`${styles.innerFull} container section-padding`}>
        <div className={styles.layoutAflip}>
          {/* Col left: info + stats */}
          <div className={styles.colRight}>
            <AnimateRepeat>
              <span className="eyebrow" style={{ color: 'var(--text-3)' }}>{p.periode} · {p.jabatan}</span>
              <h2 className={styles.presidentName}>{p.namaLengkap}</h2>
              <div className={styles.growLine} />
              <QuoteBlock quote={p.quote} source={p.quoteSumber} />
              <p className={styles.ringkasan}>{p.ringkasan}</p>
            </AnimateRepeat>
            
            {/* Stats highlight untuk SBY */}
            <div className={styles.statsBoxSide}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10</span>
                <span className={styles.statLabel}>Tahun Memimpin</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>6%</span>
                <span className={styles.statLabel}>Pertumbuhan/Tahun</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2×</span>
                <span className={styles.statLabel}>Terpilih Langsung</span>
              </div>
            </div>
          </div>

          {/* Col right: photo */}
          <div className={styles.colLeft}>
            <div className={styles.stickyPhoto}>
              <PresidentPhoto p={p} />
            </div>
          </div>
        </div>
      </div>

      {/* Content below - zigzag timeline */}
      <div className={styles.layoutBContent}>
        <div className={styles.contentBlock}>
          <SubTitle>Kebijakan &amp; Program Utama</SubTitle>
          <KebijakanGrid kebijakan={p.kebijakan} cols={3} bgClass={bgClass} />
        </div>

        <div className={styles.contentBlock}>
          <SubTitle>Peristiwa Penting</SubTitle>
          <div className={styles.zigzag}>
            <div className={styles.zigzagLine} />
            {p.events.map((ev, i) => (
              <AnimateRepeat key={i} delay={i * 80}>
                <div className={`${styles.zigzagItem} ${i % 2 === 0 ? styles.zigzagLeft : styles.zigzagRight}`}>
                  {/* Visual side */}
                  <div className={styles.zigzagVisual}>
                    {ev.gambarSrc ? (
                      <img
                        src={ev.gambarSrc}
                        alt={ev.gambarKeterangan ?? ev.judul}
                        className={styles.zigzagImg}
                        loading="lazy"
                        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    ) : (
                      <div
                        className={styles.zigzagPlaceholder}
                        style={{ background: p.fallbackGradient }}
                      >
                        <span className={styles.zigzagDate}>{ev.tanggal}</span>
                      </div>
                    )}
                  </div>

                  {/* Dot */}
                  <div className={styles.zigzagDot}>
                    <span
                      className={styles.zigzagDotInner}
                      style={{ background: ev.highlight ? p.warnaTema : 'var(--border)' }}
                    />
                  </div>

                  {/* Text side */}
                  <div className={styles.zigzagText}>
                    <span className={`${styles.zigzagTanggal} eyebrow`}>{ev.tanggal}</span>
                    <h4 className={styles.zigzagTitle}>{ev.judul}</h4>
                    <p className={styles.zigzagDesc}>{ev.deskripsi}</p>
                    {ev.refUrl && (
                      <a
                        href={ev.refUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.zigzagRef}
                      >
                        {ev.refLabel ?? 'Referensi'} ↗
                      </a>
                    )}
                  </div>
                </div>
              </AnimateRepeat>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Layout B-alt — Split layout like A + pull quote (Jokowi) ─────
function LayoutBalt({ p, bgClass }: { p: President; bgClass: string }) {
  return (
    <div>
      {/* Header section - same as Layout A */}
      <div className={`${styles.innerFull} container section-padding`}>
        <div className={styles.layoutA}>
          {/* Col left: photo */}
          <div className={styles.colLeft}>
            <div className={styles.stickyPhoto}>
              <PresidentPhoto p={p} />
            </div>
          </div>

          {/* Col right: info + stats */}
          <div className={styles.colRight}>
            <AnimateRepeat>
              <span className="eyebrow" style={{ color: 'var(--text-3)' }}>{p.periode} · {p.jabatan}</span>
              <h2 className={styles.presidentName}>{p.namaLengkap}</h2>
              <div className={styles.growLine} />
              <div className={styles.pullQuote}>
                <span className={styles.pullQuoteBar} />
                <p className={styles.pullQuoteText}>"{p.quote}"</p>
                <footer className={`${styles.quoteSource} eyebrow`}>— {p.quoteSumber}</footer>
              </div>
              <p className={styles.ringkasan}>{p.ringkasan}</p>
            </AnimateRepeat>
            
            {/* Stats highlight untuk Jokowi */}
            <div className={styles.statsBoxSide}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10</span>
                <span className={styles.statLabel}>Tahun Memimpin</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2.600+</span>
                <span className={styles.statLabel}>km Jalan Tol Baru</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15</span>
                <span className={styles.statLabel}>Bandara Baru</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content below */}
      <div className={styles.layoutBContent}>
        <div className={styles.contentBlock}>
          <SubTitle>Kebijakan &amp; Program Utama</SubTitle>
          <KebijakanGrid kebijakan={p.kebijakan} cols={2} bgClass={bgClass} />
        </div>

        <div className={styles.contentBlock}>
          <SubTitle>Peristiwa Penting</SubTitle>
          <EventGrid events={p.events} cols={2} />
        </div>
      </div>
    </div>
  );
}

// ─── Layout D — Split layout like A + amber styling (Prabowo) ───────────────────
function LayoutD({ p, bgClass }: { p: President; bgClass: string }) {
  return (
    <div>
      {/* Header section - same as Layout A but with amber badge */}
      <div className={`${styles.innerFull} container section-padding`}>
        <div className={styles.layoutA}>
          {/* Col left: photo */}
          <div className={styles.colLeft}>
            <div className={styles.stickyPhoto}>
              <PresidentPhoto p={p} />
            </div>
          </div>

          {/* Col right: info */}
          <div className={styles.colRight}>
            <AnimateRepeat>
              <span className="eyebrow" style={{ color: 'var(--text-3)' }}>{p.periode} · {p.jabatan}</span>
              <h2 className={styles.presidentName}>{p.namaLengkap}</h2>
              <div className={styles.growLine} />
              <QuoteBlock quote={p.quote} source={p.quoteSumber} />
              <p className={styles.ringkasan}>{p.ringkasan}</p>
            </AnimateRepeat>
          </div>
        </div>
      </div>

      {/* Content below */}
      <div className={styles.layoutBContent}>
        <div className={styles.contentBlock}>
          <SubTitle>Program &amp; Agenda Awal</SubTitle>
          <KebijakanGrid kebijakan={p.kebijakan} cols={3} bgClass={bgClass} />
        </div>

        <div className={styles.contentBlock}>
          <SubTitle>Peristiwa</SubTitle>
          <EventGrid events={p.events} cols={2} />
        </div>

        {/* Status cards */}
        {p.statusCards && (
          <div className={styles.contentBlock}>
            <SubTitle>Status Program</SubTitle>
            <div className={styles.statusGrid}>
              <div className={styles.statusCard}>
                <div className={`${styles.statusHeader} ${styles.statusTercapai}`}>Tercapai</div>
                <ul className={styles.statusList}>
                  {p.statusCards.tercapai.map((s, i) => (
                    <li key={i} className={styles.statusItem}>
                      <span className={styles.statusDot} style={{ background: 'var(--teal)' }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.statusCard}>
                <div className={`${styles.statusHeader} ${styles.statusBerjalan}`}>Berjalan</div>
                <ul className={styles.statusList}>
                  {p.statusCards.berjalan.map((s, i) => (
                    <li key={i} className={styles.statusItem}>
                      <span className={styles.statusDot} style={{ background: 'var(--primary)' }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.statusCard}>
                <div className={`${styles.statusHeader} ${styles.statusDinantikan}`}>Dinantikan</div>
                <ul className={styles.statusList}>
                  {p.statusCards.dinantikan.map((s, i) => (
                    <li key={i} className={styles.statusItem}>
                      <span className={styles.statusDot} style={{ background: 'var(--border)' }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={styles.dNote}>
              Halaman ini diperbarui seiring berjalannya era ini.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Layout D-flip — Mirror of D (foto kanan, info kiri) ───
function LayoutDflip({ p, bgClass }: { p: President; bgClass: string }) {
  return (
    <div>
      {/* Header section - flipped */}
      <div className={`${styles.innerFull} container section-padding`}>
        <div className={styles.layoutAflip}>
          {/* Col left: info with stats */}
          <div className={styles.colRight}>
            <AnimateRepeat>
              <span className="eyebrow" style={{ color: 'var(--text-3)' }}>{p.periode} · {p.jabatan}</span>
              <h2 className={styles.presidentName}>{p.namaLengkap}</h2>
              <div className={styles.growLine} />
              <QuoteBlock quote={p.quote} source={p.quoteSumber} />
              <p className={styles.ringkasan}>{p.ringkasan}</p>
            </AnimateRepeat>
            
            {/* Stats highlight untuk Prabowo */}
            <div className={styles.statsBoxSide}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>58.6%</span>
                <span className={styles.statLabel}>Suara Pilpres 2024</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>48</span>
                <span className={styles.statLabel}>Menteri Kabinet</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2024</span>
                <span className={styles.statLabel}>Era Baru Dimulai</span>
              </div>
            </div>
          </div>

          {/* Col right: photo */}
          <div className={styles.colLeft}>
            <div className={styles.stickyPhoto}>
              <PresidentPhoto p={p} />
            </div>
          </div>
        </div>
      </div>

      {/* Content below */}
      <div className={styles.layoutBContent}>
        <div className={styles.contentBlock}>
          <SubTitle>Program &amp; Agenda Awal</SubTitle>
          <KebijakanGrid kebijakan={p.kebijakan} cols={3} bgClass={bgClass} />
        </div>

        <div className={styles.contentBlock}>
          <SubTitle>Peristiwa</SubTitle>
          <EventGrid events={p.events} cols={2} />
        </div>

        {/* Status cards */}
        {p.statusCards && (
          <div className={styles.contentBlock}>
            <SubTitle>Status Program</SubTitle>
            <div className={styles.statusGrid}>
              <div className={styles.statusCard}>
                <div className={`${styles.statusHeader} ${styles.statusTercapai}`}>Tercapai</div>
                <ul className={styles.statusList}>
                  {p.statusCards.tercapai.map((s, i) => (
                    <li key={i} className={styles.statusItem}>
                      <span className={styles.statusDot} style={{ background: 'var(--teal)' }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.statusCard}>
                <div className={`${styles.statusHeader} ${styles.statusBerjalan}`}>Berjalan</div>
                <ul className={styles.statusList}>
                  {p.statusCards.berjalan.map((s, i) => (
                    <li key={i} className={styles.statusItem}>
                      <span className={styles.statusDot} style={{ background: 'var(--primary)' }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.statusCard}>
                <div className={`${styles.statusHeader} ${styles.statusDinantikan}`}>Dinantikan</div>
                <ul className={styles.statusList}>
                  {p.statusCards.dinantikan.map((s, i) => (
                    <li key={i} className={styles.statusItem}>
                      <span className={styles.statusDot} style={{ background: 'var(--border)' }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={styles.dNote}>
              Halaman ini diperbarui seiring berjalannya era ini.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Layout E — Megawati special (presiden perempuan pertama + KPK hero) ───
function LayoutE({ p, bgClass }: { p: President; bgClass: string }) {
  // Pisahkan KPK dari kebijakan lain
  const kpkPolicy = p.kebijakan.find(k => k.judul.includes('KPK'));
  const otherPolicies = p.kebijakan.filter(k => !k.judul.includes('KPK'));

  return (
    <div className={styles.layoutA}>
      {/* Col left: sticky photo + timeline */}
      <div className={styles.colLeft}>
        <div className={styles.stickyPhoto}>
          <PresidentPhoto p={p} />
          
          {/* Timeline dengan visual kuat */}
          <div className={styles.photoSideContent}>
            <SubTitle>Peristiwa Penting</SubTitle>
            <div className={styles.megaTimeline}>
              {p.events.map((e, i) => (
                <AnimateRepeat key={i} delay={i * 60}>
                  <div className={`${styles.megaTimelineItem} ${e.highlight ? styles.megaTimelineHighlight : ''}`}>
                    <div className={styles.megaTimelineDot} style={{ background: e.highlight ? p.warnaTema : 'var(--text-4)' }}>
                      {e.highlight && <span className={styles.megaTimelinePulse} style={{ background: p.warnaTema }} />}
                    </div>
                    <div className={styles.megaTimelineContent}>
                      <span className={`${styles.megaTimelineDate} eyebrow`}>{e.tanggal}</span>
                      <h4 className={styles.megaTimelineTitle}>{e.judul}</h4>
                      <p className={styles.megaTimelineDesc}>{e.deskripsi}</p>
                    </div>
                  </div>
                </AnimateRepeat>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Col right: content */}
      <div className={styles.colRight}>
        <AnimateRepeat>
          {/* Badge presiden perempuan pertama */}
          <div className={styles.megaBadge}>
            <span className={styles.megaBadgeText}>Presiden Perempuan Pertama Indonesia</span>
          </div>
          <span className="eyebrow" style={{ color: 'var(--text-3)', marginTop: '0.75rem', display: 'block' }}>{p.periode} · {p.jabatan}</span>
          <h2 className={styles.presidentName}>{p.namaLengkap}</h2>
          <div className={styles.growLine} />
          <QuoteBlock quote={p.quote} source={p.quoteSumber} />
          <p className={styles.ringkasan}>{p.ringkasan}</p>
        </AnimateRepeat>

        <div className={styles.contentBlock}>
          <SubTitle>Kebijakan &amp; Program Utama</SubTitle>
          
          {/* KPK Hero Card */}
          {kpkPolicy && (
            <AnimateRepeat delay={0}>
              <div className={styles.kpkHero}>
                <div className={styles.kpkHeroHeader}>
                  <span className={styles.kpkHeroBadge}>WARISAN TERBESAR</span>
                  <h3 className={styles.kpkHeroTitle}>{kpkPolicy.judul}</h3>
                </div>
                <p className={styles.kpkHeroDesc}>{kpkPolicy.deskripsi}</p>
                <div className={styles.kpkHeroImpact}>
                  <span className={styles.kpkHeroImpactLabel}>Dampak:</span>
                  <p className={styles.kpkHeroImpactText}>{kpkPolicy.dampak}</p>
                </div>
                {kpkPolicy.refUrl && (
                  <a href={kpkPolicy.refUrl} target="_blank" rel="noopener noreferrer" className={styles.kpkHeroLink}>
                    Pelajari lebih lanjut →
                  </a>
                )}
              </div>
            </AnimateRepeat>
          )}

          {/* Kebijakan lainnya dalam grid */}
          <div className={styles.kebijakanGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginTop: '1.5rem' }}>
            {otherPolicies.map((k, i) => (
              <AnimateRepeat key={i} delay={(i + 1) * 80}>
                <KebijakanCard kebijakan={k} delay={(i + 1) * 80} bgClass={bgClass} />
              </AnimateRepeat>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────
export default function PresidentSection({ president: p, bgClass }: Props) {
  const renderLayout = () => {
    switch (p.layout) {
      case 'A':     return <LayoutA p={p} bgClass={bgClass} />;
      case 'B':     return <LayoutB p={p} bgClass={bgClass} />;
      case 'Aflip': return <LayoutAflip p={p} bgClass={bgClass} />;
      case 'C':     return <LayoutC p={p} bgClass={bgClass} />;
      case 'Cflip': return <LayoutCflip p={p} bgClass={bgClass} />;
      case 'Balt':  return <LayoutBalt p={p} bgClass={bgClass} />;
      case 'D':     return <LayoutD p={p} bgClass={bgClass} />;
      case 'Dflip': return <LayoutDflip p={p} bgClass={bgClass} />;
      case 'E':     return <LayoutE p={p} bgClass={bgClass} />;
      default:      return <LayoutA p={p} bgClass={bgClass} />;
    }
  };

  return (
    <section
      id={p.id}
      className={`${styles.section} ${bgClass}`}
    >
      {(p.layout === 'A' || p.layout === 'Aflip' || p.layout === 'E' || p.layout === 'B') ? (
        <div className={`${styles.innerFull} container section-padding`}>
          {renderLayout()}
        </div>
      ) : (
        renderLayout()
      )}
    </section>
  );
}
