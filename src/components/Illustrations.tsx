// Simple flat illustrations in the logo's colors. The brief allows only the daycare's own photos of
// its rooms, so anything else on the page is drawn, never a photo of a child.

type IllustrationProps = { className?: string };

const RED = "var(--color-red)";
const BLUE = "var(--color-blue)";
const SUN = "var(--color-sun)";
const WHITE = "#fff";

export function Sun({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g stroke={SUN} strokeWidth="7" strokeLinecap="round">
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i * Math.PI) / 4;
          const x1 = 60 + Math.cos(angle) * 40;
          const y1 = 60 + Math.sin(angle) * 40;
          const x2 = 60 + Math.cos(angle) * 54;
          const y2 = 60 + Math.sin(angle) * 54;
          return <line key={i} x1={x1.toFixed(2)} y1={y1.toFixed(2)} x2={x2.toFixed(2)} y2={y2.toFixed(2)} />;
        })}
      </g>
      <circle cx="60" cy="60" r="30" fill={SUN} />
      <circle cx="50" cy="55" r="3.5" fill={BLUE} />
      <circle cx="70" cy="55" r="3.5" fill={BLUE} />
      <path d="M47 66 Q60 78 73 66" fill="none" stroke={BLUE} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Heart({ className, color = RED }: IllustrationProps & { color?: string }) {
  return (
    <svg viewBox="0 0 48 44" className={className} aria-hidden="true">
      <path d="M24 42C10 32 2 24 2 14 2 7 7 2 13.5 2 18 2 21.7 4.6 24 8.3 26.3 4.6 30 2 34.5 2 41 2 46 7 46 14c0 10-8 18-22 28z" fill={color} />
    </svg>
  );
}

/** A child's handprint with a heart in the palm, like the two on their logo. */
export function Handprint({ className, color = RED }: IllustrationProps & { color?: string }) {
  return (
    <svg viewBox="0 0 100 110" className={className} aria-hidden="true">
      <g fill={color}>
        <ellipse cx="52" cy="72" rx="30" ry="28" />
        <rect x="22" y="24" width="13" height="42" rx="6.5" transform="rotate(-12 28 45)" />
        <rect x="38" y="10" width="13" height="50" rx="6.5" transform="rotate(-4 44 35)" />
        <rect x="55" y="12" width="13" height="48" rx="6.5" transform="rotate(5 61 36)" />
        <rect x="71" y="26" width="12" height="40" rx="6" transform="rotate(14 77 46)" />
        <rect x="2" y="56" width="34" height="13" rx="6.5" transform="rotate(-38 19 62)" />
      </g>
      <path d="M52 87c-8-6-13-10-13-16 0-4 3-7 6.5-7 2.8 0 5 1.6 6.5 3.8 1.5-2.2 3.7-3.8 6.5-3.8 3.5 0 6.5 3 6.5 7 0 6-5 10-13 16z" fill={WHITE} />
    </svg>
  );
}

/** New Orleans' fleur-de-lis, which tops the "Krewe" on their flyers. */
export function FleurDeLis({ className, color = BLUE }: IllustrationProps & { color?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={className} aria-hidden="true">
      <g fill={color}>
        <path d="M50 4C38 18 36 34 44 50h12C64 34 62 18 50 4z" />
        <path d="M42 54C30 34 10 34 6 50c-3 12 8 22 18 16-8-2-10-10-6-15 6-7 18 0 22 13z" />
        <path d="M58 54c12-20 32-20 36-4 3 12-8 22-18 16 8-2 10-10 6-15-6-7-18 0-22 13z" />
        <rect x="26" y="58" width="48" height="10" rx="5" />
        <path d="M44 70h12l4 26c2 10-4 18-10 22-6-4-12-12-10-22z" />
      </g>
    </svg>
  );
}

export function Bottle({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 80 100" className={className} aria-hidden="true">
      <path d="M33 6h14l3 14H30z" fill={SUN} />
      <rect x="26" y="18" width="28" height="10" rx="4" fill={BLUE} />
      <rect x="22" y="28" width="36" height="66" rx="12" fill={WHITE} stroke={BLUE} strokeWidth="5" />
      <path d="M24 60h32v22a10 10 0 0 1-10 10H34a10 10 0 0 1-10-10z" fill={RED} opacity="0.85" />
      <g stroke={BLUE} strokeWidth="4" strokeLinecap="round">
        <line x1="44" y1="40" x2="52" y2="40" />
        <line x1="44" y1="50" x2="52" y2="50" />
      </g>
    </svg>
  );
}

export function Blocks({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 110 100" className={className} aria-hidden="true">
      <rect x="8" y="50" width="44" height="44" rx="7" fill={RED} />
      <rect x="58" y="50" width="44" height="44" rx="7" fill={BLUE} />
      <rect x="33" y="4" width="44" height="44" rx="7" fill={SUN} />
      <text x="30" y="83" textAnchor="middle" fontSize="28" fontWeight="700" fill={WHITE} fontFamily="var(--font-display)">A</text>
      <text x="80" y="83" textAnchor="middle" fontSize="28" fontWeight="700" fill={WHITE} fontFamily="var(--font-display)">B</text>
      <text x="55" y="37" textAnchor="middle" fontSize="28" fontWeight="700" fill={BLUE} fontFamily="var(--font-display)">C</text>
    </svg>
  );
}

export function Crayons({ className }: IllustrationProps) {
  const crayon = (x: number, color: string, rotate: number) => (
    <g transform={`rotate(${rotate} ${x + 9} 60)`}>
      <path d={`M${x} 30 L${x + 9} 6 L${x + 18} 30z`} fill={color} />
      <rect x={x} y="30" width="18" height="64" rx="3" fill={color} />
      <rect x={x} y="44" width="18" height="8" fill={WHITE} opacity="0.75" />
      <rect x={x} y="74" width="18" height="8" fill={WHITE} opacity="0.75" />
    </g>
  );
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {crayon(16, RED, -14)}
      {crayon(41, SUN, 0)}
      {crayon(66, BLUE, 14)}
    </svg>
  );
}

export function Backpack({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 90 100" className={className} aria-hidden="true">
      <path d="M30 18a15 15 0 0 1 30 0" fill="none" stroke={BLUE} strokeWidth="6" />
      <rect x="12" y="18" width="66" height="78" rx="18" fill={BLUE} />
      <rect x="22" y="54" width="46" height="32" rx="9" fill={SUN} />
      <rect x="22" y="54" width="46" height="9" rx="4" fill={RED} />
      <circle cx="45" cy="38" r="5" fill={WHITE} />
    </svg>
  );
}

export function ChatBubble({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="2.6" />
    </svg>
  );
}
