import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Beranda', to: '/' },
  { label: 'Departemen', to: '/departemen' },
  { label: 'Kabinet', to: '/kabinet' },
  { label: 'Divisi', to: '/divisi' },
  { label: 'Event', to: '/event' },
  { label: 'Berita', to: '/berita' },
  { label: 'Galeri', to: '/galeri' },
];

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <>
      <header style={{
        position: 'fixed', top: 16, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'center', padding: '0 20px',
      }}>
        <div className="lg nav-glass" style={{
          borderRadius: 9999, padding: '8px 8px 8px 16px',
          display: 'flex', alignItems: 'center', gap: 8,
          maxWidth: 920, width: '100%', justifyContent: 'space-between',
          boxShadow: '0 0 0 1px rgba(220,38,38,0.12), 0 12px 40px rgba(0,0,0,0.45)',
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, textDecoration: 'none' }}>
            <div
              className="nav-ftirs-mark"
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                flexShrink: 0,
                background: 'linear-gradient(135deg, rgba(220,38,38,0.25) 0%, rgba(127,29,29,0.25) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(220,38,38,0.35)',
                overflow: 'hidden',
              }}
            >
              <img
                src="/branding/FTIRS.png"
                alt="FTIRS"
                draggable={false}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.25))',
                }}
              />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>FTIRS ITS</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 300, lineHeight: 1 }}>Indsys · Surabaya</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hide-mobile" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            {NAV_ITEMS.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link${isActive(item.to) ? ' active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Link
              to="/staf"
              className="btn-white"
              style={{ borderRadius: 9999, padding: '9px 18px', fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 5, textDecoration: 'none' }}
            >
              Staf <ArrowUpRight size={14} />
            </Link>
            <button
              className="btn-ghost"
              style={{ display: 'none', padding: 8, borderRadius: 8 }}
              id="hamburger-btn"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
        }} onClick={() => setOpen(false)}>
          <div
            className="lgs"
            style={{
              position: 'absolute', right: 0, top: 0, bottom: 0, width: 280,
              padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 8,
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Menu</span>
              <button className="btn-ghost" onClick={() => setOpen(false)} style={{ padding: 4 }}>
                <X size={20} />
              </button>
            </div>
            {NAV_ITEMS.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link${isActive(item.to) ? ' active' : ''}`}
                style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: 15 }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Hamburger show on mobile via CSS */}
      <style>{`
        @media (max-width: 768px) {
          #hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
