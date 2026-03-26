import { useId, type CSSProperties } from 'react';
import { FTIRS_GSM } from '../../branding/ftirsGsm';

type Tone = 'brand' | 'subtle' | 'glass';

interface SerratedDividerProps {
  /** Teeth point down — flat top edge (typical under nav / section top) */
  pointsDown?: boolean;
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
  heightPx?: number;
}

function buildZigPath(width: number, teeth: number, depth: number): string {
  const step = width / teeth;
  const low = depth * 0.42;
  const tip = depth;
  let d = `M0 0 H${width} V${low}`;
  for (let i = teeth - 1; i >= 0; i--) {
    const x = i * step;
    const down = (teeth - 1 - i) % 2 === 0;
    d += ` L${x} ${down ? tip : low}`;
  }
  d += ' Z';
  return d;
}

/**
 * FTIRS-style serrated (gerigi) edge — full width, scales with container.
 */
export function SerratedDivider({
  pointsDown = true,
  tone = 'subtle',
  className = '',
  style,
  heightPx = 14,
}: SerratedDividerProps) {
  const uid = useId().replace(/:/g, '');
  const gradId = `ftirs-serr-${uid}`;
  const w = 1200;
  const teeth = 48;
  const depth = 24;
  const d = buildZigPath(w, teeth, depth);

  const fill =
    tone === 'brand'
      ? `url(#${gradId})`
      : tone === 'glass'
        ? 'rgba(255, 255, 255, 0.07)'
        : 'rgba(220, 38, 38, 0.16)';

  return (
    <div
      className={`ftirs-serrated ${className}`.trim()}
      style={{ lineHeight: 0, width: '100%', ...style }}
      aria-hidden
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${w} ${depth}`}
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: heightPx, color: FTIRS_GSM.red }}
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={FTIRS_GSM.redDeep} stopOpacity={0.92} />
            <stop offset="40%" stopColor={FTIRS_GSM.red} stopOpacity={0.88} />
            <stop offset="100%" stopColor={FTIRS_GSM.redDeep} stopOpacity={0.92} />
          </linearGradient>
        </defs>
        <g transform={pointsDown ? 'translate(0 0)' : `translate(0 ${depth}) scale(1 -1)`}>
          <path d={d} fill={fill} stroke="none" />
          {tone === 'brand' && (
            <path
              d={d}
              fill="none"
              stroke="rgba(220,38,38,0.4)"
              strokeWidth={0.55}
              vectorEffect="non-scaling-stroke"
            />
          )}
        </g>
      </svg>
    </div>
  );
}
