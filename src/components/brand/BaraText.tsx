import type { CSSProperties } from 'react';

interface BaraTextProps {
  opacity?: number;
  style?: CSSProperties;
  className?: string;
}

/**
 * Large decorative "BARA" text watermark — from Figma node 4:4722.
 * Plus Jakarta Sans Bold Italic, transparent stroke, cinematic.
 */
export function BaraText({ opacity = 0.04, style, className }: BaraTextProps) {
  return (
    <div
      className={className}
      aria-hidden
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        opacity,
        whiteSpace: 'nowrap',
        fontFamily: "'Plus Jakarta Sans', 'Barlow', sans-serif",
        fontWeight: 800,
        fontStyle: 'italic',
        fontSize: 'clamp(140px, 20vw, 320px)',
        lineHeight: 0.9,
        letterSpacing: '0.04em',
        color: 'transparent',
        WebkitTextStroke: '1.5px rgba(220, 38, 38, 0.6)',
        textShadow: '0 3px 3px rgba(0,0,0,0.25)',
        userSelect: 'none',
        ...style,
      }}
    >
      BARA KARSA
    </div>
  );
}
