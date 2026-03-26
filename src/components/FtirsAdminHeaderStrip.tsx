import { FTIRS_GSM } from '../branding/ftirsGsm';

/** Minimal GSM strip for admin routes: merah line. */
export function FtirsAdminHeaderStrip() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, ${FTIRS_GSM.redDeep}, ${FTIRS_GSM.red}, ${FTIRS_GSM.redDeep})`,
          opacity: 0.9,
        }}
      />
    </div>
  );
}
