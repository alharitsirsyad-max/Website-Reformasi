import React, { useRef } from 'react';
import { ReadingProgress } from './components/ui/ReadingProgress';
import { Topbar } from './components/layout/Topbar';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { TimelineStrip } from './components/sections/TimelineStrip';
import { LatarBelakang } from './components/sections/LatarBelakang';
import { Kronologi } from './components/sections/Kronologi';
import { Perjuangan } from './components/sections/Perjuangan';
import { Tokoh } from './components/sections/Tokoh';
import { Dampak } from './components/sections/Dampak';
import { ReformasiKini } from './components/sections/ReformasiKini';
import { Media } from './components/sections/Media';
import { Referensi } from './components/sections/Referensi';
import { TimPenulis } from './components/sections/TimPenulis';

import { useSidebar } from './hooks/useSidebar';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const { isOpen, toggle, close } = useSidebar();
  const activeSection = useScrollSpy();
  
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  return (
    <>
      <ReadingProgress />
      <Topbar onMenuClick={toggle} isSidebarOpen={isOpen} />
      <Sidebar isOpen={isOpen} onClose={close} activeSection={activeSection} />
      <main>
        <Hero />
        <TimelineStrip itemRefs={itemRefs} />
        <LatarBelakang />
        <Kronologi itemRefs={itemRefs} />
        <Perjuangan />
        <Tokoh />
        <Dampak />
        <ReformasiKini />
        <Media />
        <Referensi />
        <TimPenulis />
      </main>
      <Footer />
    </>
  );
}

export default App;
