import { useState, useCallback, useEffect, useRef } from 'react';

export function usePhotoCarousel(photos: string[], intervalMs: number = 900) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(() => {
    if (photos.length <= 1) return;
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, intervalMs);
  }, [photos, intervalMs]);

  const stop = useCallback(() => {
    setIsActive(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    // Reset ke foto pertama dengan delay kecil
    setTimeout(() => setCurrentIndex(0), 300);
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return { currentIndex, isActive, start, stop };
}
