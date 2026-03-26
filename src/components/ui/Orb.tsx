interface OrbProps {
  color: string;
  x: string;
  y: string;
  size: string;
  opacity?: number;
}

export function Orb({ color, x, y, size, opacity = 0.12 }: OrbProps) {
  return (
    <div style={{
      position: 'absolute',
      borderRadius: '50%',
      width: size,
      height: size,
      left: x,
      top: y,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      opacity,
      filter: 'blur(40px)',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
    }} />
  );
}
