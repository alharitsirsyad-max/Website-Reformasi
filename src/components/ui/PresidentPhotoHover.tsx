import { useState, useEffect, useRef } from 'react';
import { usePhotoCarousel } from '../../hooks';
import { useAudio } from '../../contexts/AudioContext';
import styles from './PresidentPhotoHover.module.css';

interface PresidentPhotoHoverProps {
  presidentId: string;
  photos: string[];
  fallbackUrl: string;
  fallbackGradient: string;
  inisial: string;
  caption: string;
  lisensi: string;
  style?: React.CSSProperties;
  className?: string;
  showTooltip?: boolean;
}

export default function PresidentPhotoHover({
  presidentId,
  photos,
  fallbackUrl,
  fallbackGradient,
  inisial,
  caption,
  lisensi,
  style,
  className = '',
  showTooltip = false,
}: PresidentPhotoHoverProps) {
  const photoArray = photos.length > 0 ? photos : [fallbackUrl];
  const { currentIndex, start, stop } = usePhotoCarousel(photoArray, 900);
  const { playPresidentSound, stopPresidentSound, audioEnabled } = useAudio();
  const [isHovered, setIsHovered] = useState(false);
  const [prevIndex, setPrevIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  // Cleanup on unmount - ensure audio stops
  useEffect(() => {
    return () => {
      stopPresidentSound();
    };
  }, [stopPresidentSound]);

  // Check if tooltip should be shown
  useEffect(() => {
    if (showTooltip) {
      const tipShown = localStorage.getItem('hoverTipShown');
      if (!tipShown) {
        setShowTip(true);
        // Auto hide after 4 seconds
        setTimeout(() => {
          setShowTip(false);
        }, 4000);
      }
    }
  }, [showTooltip]);

  const handleMouseEnter = () => {
    console.log('🖱️ Mouse enter:', presidentId);
    setIsHovered(true);
    start();
    if (audioEnabled) playPresidentSound(presidentId);
    
    // Hide tooltip and mark as shown
    if (showTip) {
      setShowTip(false);
      localStorage.setItem('hoverTipShown', 'true');
    }
  };

  const handleMouseLeave = () => {
    console.log('🖱️ Mouse leave:', presidentId);
    setIsHovered(false);
    stop();
    stopPresidentSound();
  };

  // Touch handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    if (isHovered) {
      handleMouseLeave();
    } else {
      handleMouseEnter();
    }
  };

  // Deteksi perubahan foto untuk animasi crossfade
  useEffect(() => {
    if (currentIndex !== prevIndex) {
      setTransitioning(true);
      setTimeout(() => {
        setPrevIndex(currentIndex);
        setTransitioning(false);
      }, 400);
    }
  }, [currentIndex, prevIndex]);

  const currentPhoto = photoArray[currentIndex] || fallbackUrl;
  const prevPhoto = photoArray[prevIndex] || fallbackUrl;

  // Detect if touch device
  const isTouchDevice = typeof window !== 'undefined' && 
    window.matchMedia('(hover: none)').matches;

  return (
    <div
      className={`${styles.photoHoverContainer} ${className}`}
      style={style}
      onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
      onTouchStart={isTouchDevice ? handleTouchStart : undefined}
    >
      {/* Tooltip */}
      {showTip && (
        <div className={styles.tooltip}>
          {isTouchDevice ? 'Ketuk foto untuk efek →' : 'Arahkan kursor ke foto →'}
        </div>
      )}

      {/* Photo layers */}
      <div className={styles.photoLayers}>
        {!imageError ? (
          <>
            {/* Current photo */}
            <div
              className={styles.photoLayer}
              style={{
                backgroundImage: `url(${currentPhoto})`,
                opacity: transitioning ? 0 : 1,
              }}
            />
            {/* Previous photo (for crossfade) */}
            <div
              className={styles.photoLayer}
              style={{
                backgroundImage: `url(${prevPhoto})`,
                opacity: transitioning ? 1 : 0,
              }}
            />
          </>
        ) : (
          // Fallback gradient + initials
          <div
            className={styles.photoFallback}
            style={{ background: fallbackGradient }}
          >
            <span className={styles.photoInisial}>{inisial}</span>
          </div>
        )}
      </div>

      {/* Hover glow overlay */}
      {isHovered && <div className={styles.hoverOverlay} />}

      {/* Dots indicator */}
      {isHovered && photoArray.length > 1 && (
        <div className={styles.dotsIndicator}>
          {photoArray.map((_, i) => (
            <div
              key={i}
              className={styles.dot}
              style={{
                width: i === currentIndex ? '16px' : '6px',
                background:
                  i === currentIndex ? '#fff' : 'rgba(255,255,255,0.5)',
              }}
            />
          ))}
        </div>
      )}

      {/* Caption */}
      <div className={styles.photoCaption}>
        {caption} · {lisensi}
      </div>

      {/* Hidden img for error detection */}
      <img
        ref={imgRef}
        src={currentPhoto}
        alt=""
        style={{ display: 'none' }}
        onError={() => setImageError(true)}
      />
    </div>
  );
}
