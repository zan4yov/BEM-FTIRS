import type { CSSProperties } from 'react';

interface CollageMosaicProps {
  /** How many cell columns */
  cols?: number;
  /** How many cell rows */
  rows?: number;
  opacity?: number;
  style?: CSSProperties;
  className?: string;
}

/**
 * CSS-only mosaic grid inspired by the Figma photo collage (4:4082).
 * Renders colored placeholder cells with varying red tints — evokes the
 * red-jacket member collage without actual photos (pure decoration).
 */
export function CollageMosaic({
  cols = 8,
  rows = 4,
  opacity = 0.12,
  style,
  className,
}: CollageMosaicProps) {
  const cells = Array.from({ length: cols * rows }, (_, i) => i);

  const tints = [
    'rgba(220,38,38,0.35)',
    'rgba(127,29,29,0.40)',
    'rgba(185,28,28,0.30)',
    'rgba(220,38,38,0.20)',
    'rgba(100,10,10,0.45)',
    'rgba(153,27,27,0.35)',
    'rgba(220,38,38,0.25)',
    'rgba(80,5,5,0.50)',
  ];

  return (
    <div
      className={className}
      aria-hidden
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        opacity,
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: 2,
        ...style,
      }}
    >
      {cells.map(i => (
        <div
          key={i}
          style={{
            background: tints[i % tints.length],
            borderRadius: 2,
            minHeight: 0,
          }}
        />
      ))}
    </div>
  );
}
