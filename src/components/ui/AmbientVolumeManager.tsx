import { useEffect } from 'react';
import { useScrollSpy } from '../../hooks';
import { useAudio } from '../../contexts/AudioContext';
import { AUDIO_CONFIG } from '../../contexts/AudioContext';

const PRESIDENT_SECTION_IDS = [
  'habibie',
  'gus-dur',
  'megawati',
  'sby',
  'jokowi',
  'prabowo',
];

export default function AmbientVolumeManager() {
  const activeSection = useScrollSpy(PRESIDENT_SECTION_IDS);
  const { setAmbientVolume, audioEnabled, isMuted } = useAudio();

  useEffect(() => {
    if (!audioEnabled || isMuted) return;

    // Check if active section is a president section
    const isPresidentSection = PRESIDENT_SECTION_IDS.includes(activeSection);

    if (isPresidentSection) {
      // Lower ambient volume when in president section
      setAmbientVolume(AUDIO_CONFIG.ambientVolumeInPresidentSection);
    } else {
      // Normal ambient volume
      setAmbientVolume(AUDIO_CONFIG.ambientVolume);
    }
  }, [activeSection, audioEnabled, isMuted, setAmbientVolume]);

  return null; // This component doesn't render anything
}
