import { useState, useEffect } from 'react';

export function useReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      if (documentHeight === windowHeight) {
        setProgress(0);
        return;
      }
      
      const currentProgress = (scrollY / (documentHeight - windowHeight)) * 100;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
}
