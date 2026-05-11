import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';

interface AudioContextType {
  audioEnabled: boolean;
  isMuted: boolean;
  enableAudio: () => void;
  disableAudio: () => void;
  toggleAudio: () => void;
  playPresidentSound: (id: string) => void;
  stopPresidentSound: () => void;
  setAmbientVolume: (volume: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
};

// Audio configuration
const AUDIO_CONFIG = {
  ambientUrl: '/sounds/ambient.mp3',
  ambientVolume: 0.25,
  ambientVolumeInPresidentSection: 0.08,
  presidents: {
    habibie: { soundUrl: '/sounds/habibie.mp3', volume: 0.9 },
    'gus-dur': { soundUrl: '/sounds/gus-dur.mp3', volume: 0.9 },
    megawati: { soundUrl: '/sounds/megawati.mp3', volume: 1.0 }, // Increased from 0.9 to 1.0 (max)
    sby: { soundUrl: '/sounds/sby.mp3', volume: 0.9 },
    jokowi: { soundUrl: '/sounds/jokowi.mp3', volume: 0.9 },
    prabowo: { soundUrl: '/sounds/prabowo.mp3', volume: 0.9 },
  } as Record<string, { soundUrl: string; volume: number }>,
};

// Smooth volume fade function
function smoothFadeVolume(
  audio: HTMLAudioElement | null,
  targetVol: number,
  durationMs: number
) {
  if (!audio) return;

  const startVol = audio.volume;
  const diff = targetVol - startVol;
  const steps = 20;
  const stepTime = durationMs / steps;
  let step = 0;

  const interval = setInterval(() => {
    step++;
    if (audio) {
      audio.volume = Math.max(0, Math.min(1, startVol + (diff * step) / steps));
    }
    if (step >= steps) clearInterval(interval);
  }, stepTime);
}

interface AudioProviderProps {
  children: ReactNode;
}

export function AudioProvider({ children }: AudioProviderProps) {
  const [audioEnabled, setAudioEnabled] = useState(true); // Changed to true for auto-play
  const [isMuted, setIsMuted] = useState(false); // Changed to false for auto-play
  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const presidentSoundRef = useRef<HTMLAudioElement | null>(null);
  const currentAmbientVolume = useRef(AUDIO_CONFIG.ambientVolume);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Initialize ambient audio
  useEffect(() => {
    console.log('🎵 Initializing audio system...');
    ambientRef.current = new Audio(AUDIO_CONFIG.ambientUrl);
    ambientRef.current.loop = true;
    ambientRef.current.volume = AUDIO_CONFIG.ambientVolume;
    
    // Handle ambient audio errors gracefully
    ambientRef.current.addEventListener('error', (e) => {
      console.log('⚠️ Ambient audio file not found (optional). Website will work without it.');
    });
    
    // Try to autoplay (will fail if no user interaction yet)
    ambientRef.current.play()
      .then(() => {
        console.log('✅ Ambient audio auto-playing');
        setHasInteracted(true);
      })
      .catch((err) => {
        if (err.name === 'NotSupportedError' || err.name === 'NotFoundError') {
          console.log('⚠️ Ambient audio file not found (optional)');
        } else {
          console.log('⚠️ Autoplay blocked (normal). User needs to interact first.');
          console.log('Click anywhere on the page to enable audio.');
        }
      });

    // Cleanup on unmount
    return () => {
      if (ambientRef.current) {
        ambientRef.current.pause();
        ambientRef.current = null;
      }
      if (presidentSoundRef.current) {
        presidentSoundRef.current.pause();
        presidentSoundRef.current = null;
      }
    };
  }, []);

  // Try to play on first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioEnabled && !isMuted) {
        console.log('🎵 First user interaction detected, starting audio...');
        ambientRef.current?.play()
          .then(() => {
            console.log('✅ Ambient audio started');
            setHasInteracted(true);
          })
          .catch((err) => console.log('❌ Audio play failed:', err));
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('keydown', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [hasInteracted, audioEnabled, isMuted]);

  // Handle audio enable/disable
  useEffect(() => {
    if (audioEnabled && !isMuted) {
      console.log('🔊 Audio enabled, playing ambient...');
      ambientRef.current?.play().catch((err) => {
        console.log('❌ Ambient audio play failed:', err);
      });
    } else {
      console.log('🔇 Audio disabled, pausing ambient...');
      ambientRef.current?.pause();
    }
  }, [audioEnabled, isMuted]);

  const enableAudio = () => {
    setAudioEnabled(true);
    setIsMuted(false);
  };

  const disableAudio = () => {
    setIsMuted(true);
    stopPresidentSound();
  };

  const toggleAudio = () => {
    if (isMuted) {
      enableAudio();
    } else {
      disableAudio();
    }
  };

  const setAmbientVolume = (volume: number) => {
    const targetVolume = volume;
    currentAmbientVolume.current = targetVolume;
    if (ambientRef.current && audioEnabled && !isMuted) {
      smoothFadeVolume(ambientRef.current, targetVolume, 800);
    }
  };

  const playPresidentSound = (presidentId: string) => {
    console.log('🔊 Attempting to play sound for:', presidentId);
    console.log('🔊 Audio enabled:', audioEnabled, 'Muted:', isMuted);
    
    if (!audioEnabled || isMuted) {
      console.log('❌ Audio not enabled or muted');
      return;
    }

    // Stop previous president sound gracefully
    if (presidentSoundRef.current) {
      try {
        presidentSoundRef.current.pause();
        presidentSoundRef.current.currentTime = 0;
        presidentSoundRef.current = null;
      } catch (e) {
        console.log('⚠️ Error stopping previous sound:', e);
      }
    }

    const presidentConfig = AUDIO_CONFIG.presidents[presidentId];
    console.log('🔊 President config:', presidentConfig);
    
    if (!presidentConfig) {
      console.log('❌ No audio config for president:', presidentId);
      return;
    }

    const soundUrl = presidentConfig.soundUrl;
    console.log('🔊 Playing URL:', soundUrl);
    
    try {
      const audio = new Audio(soundUrl);
      audio.volume = presidentConfig.volume;
      audio.loop = true; // Loop president sound
      
      // Store reference before playing
      presidentSoundRef.current = audio;
      
      // Add error handler
      audio.addEventListener('error', (e) => {
        console.log('❌ Audio load error:', e);
      });
      
      audio.play()
        .then(() => console.log('✅ President audio playing:', presidentId))
        .catch((err) => {
          // Only log if it's not an abort error (which is normal when quickly changing)
          if (err.name !== 'AbortError') {
            console.log('❌ President audio error:', err.name, err.message);
          }
        });
    } catch (err) {
      console.log('❌ Error creating audio:', err);
    }
  };

  const stopPresidentSound = () => {
    console.log('🛑 Stopping president sound...');
    
    if (presidentSoundRef.current) {
      try {
        const audio = presidentSoundRef.current;
        
        // Force stop immediately - no fade for looping audio
        audio.pause();
        audio.currentTime = 0;
        audio.loop = false; // Disable loop
        
        // Clear reference
        presidentSoundRef.current = null;
        
        console.log('✅ President sound stopped');
      } catch (e) {
        console.log('⚠️ Error stopping sound:', e);
        presidentSoundRef.current = null;
      }
    }
  };

  const value: AudioContextType = {
    audioEnabled,
    isMuted,
    enableAudio,
    disableAudio,
    toggleAudio,
    playPresidentSound,
    stopPresidentSound,
    setAmbientVolume,
  };

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
}

// Export audio config for use in other components
export { AUDIO_CONFIG };
