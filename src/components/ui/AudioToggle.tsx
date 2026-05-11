import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../contexts/AudioContext';
import styles from './AudioToggle.module.css';

export default function AudioToggle() {
  const { isMuted, toggleAudio } = useAudio();
  const [showNotification, setShowNotification] = useState(false);

  const handleToggle = () => {
    toggleAudio();
    
    // Show notification when enabling audio
    if (isMuted) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
  };

  return (
    <>
      <button
        className={styles.audioToggle}
        onClick={handleToggle}
        aria-label={isMuted ? 'Aktifkan suara' : 'Matikan suara'}
        title={isMuted ? 'Aktifkan suara' : 'Matikan suara'}
      >
        {isMuted ? (
          <VolumeX size={20} strokeWidth={2} />
        ) : (
          <Volume2 size={20} strokeWidth={2} />
        )}
      </button>

      {showNotification && (
        <div className={styles.notification}>
          Suara diaktifkan
        </div>
      )}
    </>
  );
}
