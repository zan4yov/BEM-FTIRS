import { type ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Calendar, Newspaper, Key, LogOut } from 'lucide-react';
import { FtirsAdminHeaderStrip } from './FtirsAdminHeaderStrip';

const NAV = [
  { to: '/admin', label: 'Dashboard', icon: <LayoutDashboard size={16} /> },
  { to: '/admin/event', label: 'Event', icon: <Calendar size={16} /> },
  { to: '/admin/berita', label: 'Berita', icon: <Newspaper size={16} /> },
  { to: '/admin/staff-codes', label: 'Staff Codes', icon: <Key size={16} /> },
];

export function AdminLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      position: 'relative',
      zIndex: 1,
      background: 'linear-gradient(180deg, rgba(5,5,5,0.88) 0%, rgba(2,2,2,0.94) 100%)',
    }}>
      <FtirsAdminHeaderStrip />
      {/* Sidebar */}
      <aside className="lgs" style={{ width: 220, flexShrink: 0, padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: 4, borderRight: '1px solid rgba(255,255,255,0.07)', position: 'sticky', top: 0, height: '100vh' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, padding: '0 8px' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #dc2626, #7f1d1d)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: '#fff' }}>BEM</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>Admin Panel</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>BEM FTIRS ITS</div>
          </div>
        </div>

        {NAV.map(item => {
          const isActive = item.to === '/admin' ? location.pathname === '/admin' : location.pathname.startsWith(item.to);
          return (
            <Link key={item.to} to={item.to}
              style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10,
                fontSize: 13, fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s',
                background: isActive ? 'rgba(220,38,38,0.15)' : 'transparent',
                color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
              }}>
              {item.icon}
              {item.label}
            </Link>
          );
        })}

        <div style={{ flex: 1 }} />

        <button onClick={handleLogout}
          style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, fontSize: 13, fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s', textAlign: 'left' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(220,38,38,0.8)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
        >
          <LogOut size={16} />
          Keluar
        </button>
      </aside>

      {/* Content */}
      <main style={{ flex: 1, padding: '44px 32px 32px', overflow: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
