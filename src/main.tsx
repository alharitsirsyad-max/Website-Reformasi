<<<<<<< HEAD
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
=======
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
