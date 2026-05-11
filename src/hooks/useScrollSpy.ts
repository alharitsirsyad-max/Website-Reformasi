import { useState, useEffect } from 'react';

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const sections = ['beranda', 'latar-belakang', 'kronologi', 'perjuangan', 'tokoh', 'dampak', 'reformasi-kini', 'media', 'referensi', 'tim'];
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-35% 0px -60% 0px'
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return activeSection;
}
