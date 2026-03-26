interface MarqueeProps {
  items: string[];
  /** Seconds for one full loop */
  durationSec?: number;
}

export function Marquee({ items, durationSec = 38 }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div
      className="marquee-wrap"
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'linear-gradient(90deg, rgba(220,38,38,0.06), transparent 30%, transparent 70%, rgba(220,38,38,0.06))',
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `marquee-scroll ${durationSec}s linear infinite`,
        }}
      >
        {doubled.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className="marquee-item"
            style={{
              flexShrink: 0,
              padding: '14px 28px',
              fontFamily: "'Barlow', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.38)',
              whiteSpace: 'nowrap',
            }}
          >
            {text}
            <span style={{ margin: '0 20px', color: 'rgba(220,38,38,0.55)' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
