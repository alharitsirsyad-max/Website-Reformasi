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
  'hero', 'pra-reformasi', 'krisis',
  'habibie', 'gus-dur', 'megawati', 'sby', 'jokowi', 'prabowo',
  'dampak', 'reformasi-kini', 'media', 'referensi', 'tim',
];

const PRES_BG = ['bg-surface', 'bg-main', 'bg-surface', 'bg-main', 'bg-surface', 'bg-main'];

function HomePage() {
  const activeSection = useScrollSpy(SECTION_IDS);
  const sidebar = useSidebar();

  return (
    <>
      <ReadingProgress />
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

export default function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/antikorupsi" component={AntikorupsiPage} />
      <Route component={() => <div>404 Not Found</div>} />
    </Switch>
  );
}
