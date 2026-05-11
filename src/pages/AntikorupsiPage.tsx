import { useEffect } from 'react';
import { useSidebar } from '../hooks';
import ReadingProgress from '../components/layout/ReadingProgress';
import Topbar from '../components/layout/Topbar';
import Sidebar from '../components/layout/Sidebar';
import AudioToggle from '../components/ui/AudioToggle';
import ThemeToggle from '../components/ui/ThemeToggle';

import AKHero from '../components/sections/antikorupsi/AKHero';
import AKKonteks from '../components/sections/antikorupsi/AKKonteks';
import AKUpaya from '../components/sections/antikorupsi/AKUpaya';
import AKKPKDetail from '../components/sections/antikorupsi/AKKPKDetail';
import AKKasusBesar from '../components/sections/antikorupsi/AKKasusBesar';
import AKIndeks from '../components/sections/antikorupsi/AKIndeks';
import AKDampak from '../components/sections/antikorupsi/AKDampak';
import AKKesimpulan from '../components/sections/antikorupsi/AKKesimpulan';
import AKTableOfContents from '../components/sections/antikorupsi/AKTableOfContents';
import Footer from '../components/layout/Footer';

const SECTION_IDS = [
  'ak-hero',
  'ak-konteks',
  'ak-upaya',
  'ak-kpk',
  'ak-kasus',
  'ak-indeks',
  'ak-dampak',
  'ak-kesimpulan',
];

export default function AntikorupsiPage() {
  const sidebar = useSidebar();

  useEffect(() => {
    // Update document title
    document.title = 'Pemberantasan Korupsi Masa Reformasi — Reformasi Indonesia';
    
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ReadingProgress />
      <Topbar activeSection="" onMenuClick={sidebar.toggle} isAntikorupsiPage />
      <Sidebar isOpen={sidebar.isOpen} onClose={sidebar.close} activeSection="" />
      <AudioToggle />
      <ThemeToggle />
      <AKTableOfContents sections={SECTION_IDS} />

      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <AKHero />
        <AKKonteks />
        <AKUpaya />
        <AKKPKDetail />
        <AKKasusBesar />
        <AKIndeks />
        <AKDampak />
        <AKKesimpulan />
      </main>

      <Footer />
    </>
  );
}
