import { useState, useEffect, useCallback, useRef } from 'react';

// ─── useSidebar ───────────────────────────────────────
export function useSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const toggle = useCallback(() => {
    setIsOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  // close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [close]);

  // cleanup on unmount
  useEffect(() => {
    return () => { document.body.style.overflow = ''; };
  }, []);

  return { isOpen, open, close, toggle };
}

// ─── useScrollSpy ─────────────────────────────────────
export function useScrollSpy(ids: string[], offset = 80) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + scrollY - offset;
          if (scrollY >= top) current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return activeId;
}

// ─── useReadingProgress ───────────────────────────────
export function useReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calc = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener('scroll', calc, { passive: true });
    return () => window.removeEventListener('scroll', calc);
  }, []);

  return progress;
}

// ─── useIntersectionObserver (for FadeUp) ─────────────
export function useIntersectionObserver(
  ref: React.RefObject<Element | null>,
  options: IntersectionObserverInit = {},
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
}

// ─── useDotsNav ───────────────────────────────────────
export function useDotsNav(sectionIds: string[]) {
  const activeId = useScrollSpy(sectionIds);
  return { activeSection: activeId, sections: sectionIds };
}

// ─── scrollToSection ──────────────────────────────────
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const navH = 56;
    const y = el.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// ─── useInView (for AnimateIn) ────────────────────────
export { useInView } from './use-in-view';

// ─── useScrollSpy (IntersectionObserver version) ──────
export { useScrollSpy as useScrollSpyIO } from './use-scroll-spy';

// ─── usePhotoCarousel (for president photo hover) ─────
export { usePhotoCarousel } from './use-photo-carousel';
