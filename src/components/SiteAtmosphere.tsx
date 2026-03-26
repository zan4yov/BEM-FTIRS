import { MachineGear } from './brand/MachineGear';

/**
 * Global ambient layers inspired by modern student-org sites (depth, motion, texture)
 * while keeping BEM FTIRS dark red + liquid glass identity.
 * Figma-derived decorations: faint gear watermarks + diagonal BARA KARSA ghost text.
 */
export function SiteAtmosphere() {
  return (
    <div
      className="site-atmosphere"
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Deep base + red mesh (aurora-like, not blue) */}
      <div
        className="site-atmosphere__mesh"
        style={{
          position: 'absolute',
          inset: '-10%',
          background: `
            radial-gradient(ellipse 90% 55% at 50% -15%, rgba(220, 38, 38, 0.14), transparent 55%),
            radial-gradient(ellipse 70% 50% at 100% 20%, rgba(127, 29, 29, 0.18), transparent 50%),
            radial-gradient(ellipse 60% 45% at 0% 60%, rgba(185, 28, 28, 0.1), transparent 45%),
            radial-gradient(ellipse 50% 40% at 80% 85%, rgba(220, 38, 38, 0.08), transparent 50%),
            linear-gradient(180deg, #050505 0%, #030303 45%, #050505 100%)
          `,
        }}
      />
      {/* Slow drifting glow orbs */}
      <div
        className="site-atmosphere__drift-a"
        style={{
          position: 'absolute',
          width: 'min(90vw, 820px)',
          height: 'min(90vw, 820px)',
          left: '50%',
          top: '-25%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220,38,38,0.22) 0%, transparent 68%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="site-atmosphere__drift-b"
        style={{
          position: 'absolute',
          width: 'min(70vw, 560px)',
          height: 'min(70vw, 560px)',
          right: '-15%',
          bottom: '5%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(127,29,29,0.35) 0%, transparent 70%)',
          filter: 'blur(55px)',
        }}
      />
      {/* Fine grid + diagonal rhythm (tech / editorial) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.035,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 85% 70% at 50% 30%, black 15%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 70% at 50% 30%, black 15%, transparent 75%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage: `repeating-linear-gradient(
            -14deg,
            transparent,
            transparent 72px,
            rgba(255,255,255,0.06) 72px,
            rgba(255,255,255,0.06) 73px
          )`,
        }}
      />
      {/* Figma-inspired: faint gear watermarks at fixed positions */}
      <div style={{ position: 'absolute', top: '15%', right: '3%', opacity: 0.022, color: '#dc2626', transform: 'rotate(22deg)' }}>
        <MachineGear size={200} variant="outline" />
      </div>
      <div style={{ position: 'absolute', bottom: '20%', left: '2%', opacity: 0.018, color: '#dc2626', transform: 'rotate(-15deg)' }}>
        <MachineGear size={140} variant="outline" />
      </div>

      {/* Figma-inspired: ghost "BARA KARSA" diagonal text */}
      <div
        className="site-atmosphere__bara-ghost"
        style={{
          position: 'absolute',
          top: '40%',
          left: '-8%',
          whiteSpace: 'nowrap',
          fontFamily: "'Plus Jakarta Sans', 'Barlow', sans-serif",
          fontWeight: 800,
          fontStyle: 'italic',
          fontSize: 'min(18vw, 260px)',
          lineHeight: 0.9,
          letterSpacing: '0.05em',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(220,38,38,0.15)',
          transform: 'rotate(-8deg)',
          opacity: 0.035,
          userSelect: 'none',
        }}
      >
        BARA KARSA
      </div>

      {/* Film grain */}
      <div className="site-atmosphere__noise" />
      {/* Vignette for focus */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 75% 65% at 50% 35%, transparent 0%, rgba(0,0,0,0.55) 100%)',
        }}
      />
      {/* Bottom read edge */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '40%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
        }}
      />
    </div>
  );
}
