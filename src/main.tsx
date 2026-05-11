import { createRoot } from 'react-dom/client';
import App from './App';
import { AudioProvider } from './contexts/AudioContext';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <AudioProvider>
      <App />
    </AudioProvider>
  </ThemeProvider>
);
