<<<<<<< HEAD
import { Route, Switch } from 'wouter';
import { useScrollSpy, useSidebar } from './hooks';
import { presidents } from './data/content';

import ReadingProgress from './components/layout/ReadingProgress';
import Topbar from './components/layout/Topbar';
import Sidebar from './components/layout/Sidebar';
import DotsNavigator from './components/layout/DotsNavigator';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import PraReformasi from './components/sections/PraReformasi';
import KrisisGerakan from './components/sections/KrisisGerakan';
import PresidentSection from './components/sections/PresidentSection';
import Dampak from './components/sections/Dampak';
import ReformasiKini from './components/sections/ReformasiKini';
import Media from './components/sections/Media';
import Referensi from './components/sections/Referensi';
import TimPenulis from './components/sections/TimPenulis';

import AudioToggle from './components/ui/AudioToggle';
import ThemeToggle from './components/ui/ThemeToggle';
import AmbientVolumeManager from './components/ui/AmbientVolumeManager';

import AntikorupsiPage from './pages/AntikorupsiPage';

const SECTION_IDS = [
  'hero',
  'pra-reformasi',
  'krisis',
  'habibie',
  'gus-dur',
  'megawati',
  'sby',
  'jokowi',
  'prabowo',
  'dampak',
  'reformasi-kini',
  'media',
  'referensi',
  'tim',
];

const PRES_BG = ['bg-surface', 'bg-main', 'bg-surface', 'bg-main', 'bg-surface', 'bg-main'];

function HomePage() {
  const activeSection = useScrollSpy(SECTION_IDS);
  const sidebar = useSidebar();
=======
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
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837

  return (
    <>
      <ReadingProgress />
<<<<<<< HEAD
      <Topbar activeSection={activeSection} onMenuClick={sidebar.toggle} />
      <Sidebar isOpen={sidebar.isOpen} onClose={sidebar.close} activeSection={activeSection} />
      <DotsNavigator activeSection={activeSection} />
      <AudioToggle />
      <ThemeToggle />
      <AmbientVolumeManager />

      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <Hero />
        <PraReformasi />
        <KrisisGerakan />
        {presidents.map((p, i) => (
          <PresidentSection
            key={p.id}
            president={p}
            bgClass={PRES_BG[i % PRES_BG.length]}
          />
        ))}
=======
      <Topbar onMenuClick={toggle} isSidebarOpen={isOpen} />
      <Sidebar isOpen={isOpen} onClose={close} activeSection={activeSection} />
      <main>
        <Hero />
        <TimelineStrip itemRefs={itemRefs} />
        <LatarBelakang />
        <Kronologi itemRefs={itemRefs} />
        <Perjuangan />
        <Tokoh />
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
        <Dampak />
        <ReformasiKini />
        <Media />
        <Referensi />
        <TimPenulis />
      </main>
<<<<<<< HEAD

=======
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
      <Footer />
    </>
  );
}

<<<<<<< HEAD
export default function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/antikorupsi" component={AntikorupsiPage} />
      <Route component={() => <div>404 Not Found</div>} />
    </Switch>
  );
}
=======
export default App;
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
