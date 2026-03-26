import { AdminLayout } from '../../components/AdminLayout';
import { useData } from '../../context/DataContext';
import { Calendar, Newspaper, Images, Key } from 'lucide-react';

export default function AdminDashboard() {
  const { events, berita, gallery, staffCodes } = useData();

  const stats = [
    { label: 'Total Event', value: events.length, icon: <Calendar size={20} color="rgba(220,38,38,0.8)" />, color: 'rgba(220,38,38,0.1)' },
    { label: 'Total Berita', value: berita.length, icon: <Newspaper size={20} color="rgba(34,197,94,0.8)" />, color: 'rgba(34,197,94,0.1)' },
    { label: 'Total Galeri', value: gallery.length, icon: <Images size={20} color="rgba(59,130,246,0.8)" />, color: 'rgba(59,130,246,0.1)' },
    { label: 'Kode Staf Aktif', value: staffCodes.length, icon: <Key size={20} color="rgba(234,179,8,0.8)" />, color: 'rgba(234,179,8,0.1)' },
  ];

  const BODY_TEXT: React.CSSProperties = {
    fontFamily: "'Barlow', sans-serif",
    fontSize: 13,
    fontWeight: 300,
    color: 'rgba(255,255,255,0.5)',
  };

  return (
    <AdminLayout>
      <div style={{ maxWidth: 1000 }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 24, fontWeight: 600, color: '#fff', marginBottom: 4 }}>Dashboard</h1>
          <p style={{ ...BODY_TEXT, fontSize: 14 }}>Selamat datang, Super Admin BEM FTIRS ITS.</p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 40 }}>
          {stats.map(s => (
            <div key={s.label} className="lg" style={{ borderRadius: 16, padding: '20px 22px' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                {s.icon}
              </div>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{s.value}</div>
              <div style={{ ...BODY_TEXT, fontSize: 12 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Events */}
        <div className="lg" style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 24 }}>
          <div style={{ padding: '18px 22px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>5 Event Terbaru</h3>
          </div>
          <div>
            {events.slice(0, 5).map((ev, i) => (
              <div key={ev.id} style={{ display: 'flex', gap: 16, padding: '14px 22px', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.05)' : 'none', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: '0 0 8px', height: 8, borderRadius: '50%', background: ev.isUpcoming ? '#22c55e' : '#6b7280', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 160 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: '#fff', marginBottom: 2 }}>{ev.title}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{ev.location}</div>
                </div>
                <div style={{ ...BODY_TEXT, fontSize: 11 }}>
                  {new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium' }).format(new Date(ev.date))}
                </div>
                <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 9999, background: ev.isUpcoming ? 'rgba(34,197,94,0.15)' : 'rgba(100,116,139,0.15)', color: ev.isUpcoming ? 'rgba(34,197,94,0.9)' : 'rgba(156,163,175,0.9)', fontWeight: 500 }}>
                  {ev.isUpcoming ? 'Mendatang' : 'Selesai'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Berita */}
        <div className="lg" style={{ borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ padding: '18px 22px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>5 Berita Terbaru</h3>
          </div>
          <div>
            {berita.slice(0, 5).map((item, i) => (
              <div key={item.id} style={{ display: 'flex', gap: 16, padding: '14px 22px', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.05)' : 'none', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: item.imageColor, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 160 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: '#fff', marginBottom: 2 }}>{item.title}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{item.author}</div>
                </div>
                <div style={{ ...BODY_TEXT, fontSize: 11 }}>
                  {new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium' }).format(new Date(item.publishedAt))}
                </div>
                <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 9999, background: 'rgba(220,38,38,0.15)', color: 'rgba(220,38,38,0.9)', fontWeight: 500 }}>
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
