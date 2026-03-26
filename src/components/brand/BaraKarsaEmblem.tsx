import type { CSSProperties } from 'react';

interface BaraKarsaEmblemProps {
  /** Height in CSS units (width scales proportionally) */
  height?: number | string;
  style?: CSSProperties;
  className?: string;
}

/**
 * Bara Karsa kabinet emblem — three-part logo from Figma (4:4699).
 * Composites the bottom (vectors/fist), text banner, and top (torch) layers.
 * Assets live in public/branding/.
 */
export function BaraKarsaEmblem({ height = 180, style, className }: BaraKarsaEmblemProps) {
  return (
    <div
      className={className}
      aria-hidden
      style={{
        position: 'relative',
        height,
        aspectRatio: '383 / 670',
        flexShrink: 0,
        ...style,
      }}
    >
      <img
        src="/branding/bara-karsa-top.png"
        alt=""
        draggable={false}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '75%', objectFit: 'contain', objectPosition: 'center top' }}
      />
      <img
        src="/branding/bara-karsa-text.png"
        alt=""
        draggable={false}
        style={{ position: 'absolute', bottom: '12%', left: '10%', width: '80%', objectFit: 'contain' }}
      />
      <img
        src="/branding/bara-karsa-bottom.png"
        alt=""
        draggable={false}
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '52%', objectFit: 'contain', objectPosition: 'center bottom' }}
      />
    </div>
  );
}

/**
 * Faded watermark version of the emblem for section backgrounds.
 */
export function BaraKarsaWatermark({
  size = 320,
  opacity = 0.06,
  style,
}: {
  size?: number;
  opacity?: number;
  style?: CSSProperties;
}) {
  return (
    <div style={{ position: 'absolute', pointerEvents: 'none', opacity, ...style }}>
      <BaraKarsaEmblem height={size} />
    </div>
  );
}
