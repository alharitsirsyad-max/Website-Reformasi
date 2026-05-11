import { ExternalLink } from 'lucide-react';

interface RefLinkProps {
  href: string;
  label?: string;
}

export default function RefLink({ href, label = 'Referensi' }: RefLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        letterSpacing: '0.08em',
        color: 'var(--text-3)',
        textDecoration: 'none',
        borderBottom: '1px solid var(--border)',
        paddingBottom: '1px',
        transition: 'color 0.15s, border-color 0.15s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--primary)';
        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--primary)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-3)';
        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
      }}
    >
      {label}
      <ExternalLink size={10} strokeWidth={1.5} />
    </a>
  );
}
