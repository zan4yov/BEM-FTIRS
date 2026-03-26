import { Link } from 'react-router-dom';
import { Instagram, Linkedin, ExternalLink, Mail } from 'lucide-react';
import { BEM_FTIRS_LINKS } from '../branding/publicLinks';

export function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.65) 18%, #030303 100%)',
      padding: '0 0 40px',
    }}>
      <div style={{ padding: '48px 24px 0', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(220,38,38,0.25) 0%, rgba(127,29,29,0.25) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 10px rgba(220,38,38,0.3)',
                overflow: 'hidden',
                flexShrink: 0,
              }}>
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
                <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>BEM FTIRS ITS</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>Kabinet 2025</div>
              </div>
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, fontWeight: 300, maxWidth: 220 }}>
              Badan Eksekutif Mahasiswa Fakultas Teknologi Industri dan Rekayasa Sistem — Institut Teknologi Sepuluh Nopember.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {[
                { icon: <Instagram size={15} />, href: BEM_FTIRS_LINKS.instagram, label: 'Instagram' },
                { icon: <Linkedin size={15} />, href: BEM_FTIRS_LINKS.linkedin, label: 'LinkedIn' },
                { icon: <ExternalLink size={15} />, href: BEM_FTIRS_LINKS.ftirsIts, label: 'FTIRS ITS' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="lgs"
                  style={{
                    width: 34, height: 34, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 16 }}>Navigasi</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Beranda', to: '/' },
                { label: 'Tentang BEM', to: '/tentang' },
                { label: 'Departemen', to: '/departemen' },
                { label: 'Kabinet', to: '/kabinet' },
                { label: 'Divisi', to: '/divisi' },
              ].map(l => (
                <Link key={l.to} to={l.to}
                  style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 300 }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* More links */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 16 }}>Program</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Event', to: '/event' },
                { label: 'Berita', to: '/berita' },
                { label: 'Galeri', to: '/galeri' },
              ].map(l => (
                <Link key={l.to} to={l.to}
                  style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 300 }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 16 }}>Kontak</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Mail size={14} color="rgba(220,38,38,0.8)" style={{ flexShrink: 0, marginTop: 2 }} />
                <a href="mailto:bem@ftirs.its.ac.id"
                  style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 300, lineHeight: 1.5 }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >
                  bem@ftirs.its.ac.id
                </a>
              </div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, fontWeight: 300 }}>
                Gedung FTIRS ITS<br />
                Kampus ITS, Sukolilo<br />
                Surabaya 60111
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', fontWeight: 300, display: 'inline-flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ color: 'rgba(255,255,255,0.22)', fontSize: 11, fontWeight: 300 }}>In Collaboration</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <img
                src="/branding/indsys-wordmark.png"
                alt="Indsys"
                draggable={false}
                style={{ height: 16, width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.35))' }}
              />
              <span style={{ opacity: 0.55, transform: 'translateY(-0.5px)' }}>×</span>
              <img
                src="/branding/Flexoo.png"
                alt="Flexoo Software House"
                draggable={false}
                style={{ height: 16, width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.35))' }}
              />
            </span>
          </span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', fontWeight: 300 }}>
            © 2025 BEM FTIRS ITS — Fakultas Merah. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
