import type { CSSProperties } from 'react';

export type MachineGearProps = {
  size?: number;
  className?: string;
  style?: CSSProperties;
  /** Outline + hub style (like HMIT reference: ring gear + inner motif) */
  variant?: 'solid' | 'outline';
};

/** Spur gear outline: tip radius + root valley — reads as a machine gear, not abstract zigzag. */
function gearOutlinePath(cx: number, cy: number, teeth: number, rTip: number, rRoot: number): string {
  const tooth = (2 * Math.PI) / teeth;
  const flank = tooth * 0.38;
  const parts: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const base = i * tooth - Math.PI / 2;
    const a0 = base;
    const a1 = base + flank;
    const a2 = base + tooth - flank;
    const a3 = base + tooth;
    const x0 = cx + rRoot * Math.cos(a0);
    const y0 = cy + rRoot * Math.sin(a0);
    const x1 = cx + rTip * Math.cos(a1);
    const y1 = cy + rTip * Math.sin(a1);
    const x2 = cx + rTip * Math.cos(a2);
    const y2 = cy + rTip * Math.sin(a2);
    const x3 = cx + rRoot * Math.cos(a3);
    const y3 = cy + rRoot * Math.sin(a3);
    if (i === 0) parts.push(`M ${x0.toFixed(2)} ${y0.toFixed(2)}`);
    parts.push(`L ${x1.toFixed(2)} ${y1.toFixed(2)}`);
    parts.push(`L ${x2.toFixed(2)} ${y2.toFixed(2)}`);
    parts.push(`L ${x3.toFixed(2)} ${y3.toFixed(2)}`);
  }
  parts.push('Z');
  return parts.join(' ');
}

/** Inner 6-tooth “pinion” star for hub detail (machine aesthetic). */
function innerStarPath(cx: number, cy: number, rOuter: number, rInner: number, points: number): string {
  const step = (2 * Math.PI) / (points * 2);
  const parts: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const a = i * step - Math.PI / 2;
    const r = i % 2 === 0 ? rOuter : rInner;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    parts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  parts.push('Z');
  return parts.join(' ');
}

export function MachineGear({ size = 64, className, style, variant = 'outline' }: MachineGearProps) {
  const d = gearOutlinePath(50, 50, 12, 46, 34);
  const hub = innerStarPath(50, 50, 14, 7, 6);
  const fill = variant === 'solid' ? 'currentColor' : 'none';
  const stroke = variant === 'outline' ? 'currentColor' : 'none';
  const strokeW = variant === 'outline' ? 2.2 : 0;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ flexShrink: 0, ...style }}
      aria-hidden
    >
      <path
        d={d}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeW}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx={50} cy={50} r={18} fill="none" stroke="currentColor" strokeWidth={variant === 'outline' ? 1.4 : 0} opacity={0.35} />
      <path
        d={hub}
        fill={variant === 'outline' ? 'none' : 'currentColor'}
        stroke="currentColor"
        strokeWidth={variant === 'outline' ? 1.2 : 0}
        opacity={0.85}
      />
      <circle cx={50} cy={50} r={5.5} fill="currentColor" opacity={0.25} />
    </svg>
  );
}

/** Large watermark machine gear for section backgrounds. */
export function MachineGearWatermark({ size = 220, opacity = 0.07, style }: { size?: number; opacity?: number; style?: CSSProperties }) {
  return (
    <div style={{ position: 'absolute', pointerEvents: 'none', opacity, color: '#dc2626', ...style }}>
      <MachineGear size={size} variant="outline" />
    </div>
  );
}
