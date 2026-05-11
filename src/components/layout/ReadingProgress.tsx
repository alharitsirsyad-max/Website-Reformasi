import { useReadingProgress } from '../../hooks';

export default function ReadingProgress() {
  const progress = useReadingProgress();
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: `${progress}%`,
        background: 'var(--primary)',
        zIndex: 999,
        transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }}
    />
  );
}
