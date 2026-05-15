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
    megawati: { soundUrl: '/sounds/megawati.mp3', volume: 1.0 },
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
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const presidentSoundRef = useRef<HTMLAudioElement | null>(null);
  const currentAmbientVolume = useRef(AUDIO_CONFIG.ambientVolume);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Initialize ambient audio
  useEffect(() => {
    ambientRef.current = new Audio(AUDIO_CONFIG.ambientUrl);
    ambientRef.current.loop = true;
    ambientRef.current.volume = AUDIO_CONFIG.ambientVolume;

    // Handle ambient audio errors silently
    ambientRef.current.addEventListener('error', () => {
      // Ambient audio is optional — fail silently
    });

    // Try to autoplay (will fail if no user interaction yet — that's fine)
    ambientRef.current.play()
      .then(() => { setHasInteracted(true); })
      .catch(() => {
        // Autoplay blocked by browser — will retry on first interaction
      });

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
        ambientRef.current?.play()
          .then(() => { setHasInteracted(true); })
          .catch(() => {});
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
      ambientRef.current?.play().catch(() => {});
    } else {
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
    currentAmbientVolume.current = volume;
    if (ambientRef.current && audioEnabled && !isMuted) {
      smoothFadeVolume(ambientRef.current, volume, 800);
    }
  };

  const playPresidentSound = (presidentId: string) => {
    if (!audioEnabled || isMuted) return;

    // Stop previous president sound
    if (presidentSoundRef.current) {
      try {
        presidentSoundRef.current.pause();
        presidentSoundRef.current.currentTime = 0;
        presidentSoundRef.current = null;
      } catch (_) {}
    }

    const presidentConfig = AUDIO_CONFIG.presidents[presidentId];
    if (!presidentConfig) return;

    try {
      const audio = new Audio(presidentConfig.soundUrl);
      audio.volume = presidentConfig.volume;
      audio.loop = true;
      presidentSoundRef.current = audio;

      audio.addEventListener('error', () => {
        // Audio file not found — fail silently
      });

      audio.play().catch((err) => {
        if (err.name !== 'AbortError') {
          // Play failed — fail silently
        }
      });
    } catch (_) {}
  };

  const stopPresidentSound = () => {
    if (presidentSoundRef.current) {
      try {
        const audio = presidentSoundRef.current;
        audio.pause();
        audio.currentTime = 0;
        audio.loop = false;
        presidentSoundRef.current = null;
      } catch (_) {
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

export { AUDIO_CONFIG };
