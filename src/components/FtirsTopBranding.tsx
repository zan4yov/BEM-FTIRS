import { FTIRS_GSM } from '../branding/ftirsGsm';

/**
 * Fixed faculty GSM strip: thin merah line under the navbar (public site).
 */
export function FtirsTopBranding() {
  return (
    <div
      className="ftirs-top-branding"
      aria-hidden
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        zIndex: 99,
        pointerEvents: 'none',
        width: '100%',
      }}
    >
      <div
        style={{
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, rgba(220,38,38,0.45) 18%, ${FTIRS_GSM.redDeep} 50%, rgba(220,38,38,0.45) 82%, transparent 100%)`,
          opacity: 0.85,
        }}
      />
    </div>
  );
}
