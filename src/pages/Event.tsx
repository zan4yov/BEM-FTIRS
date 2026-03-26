import { useState } from 'react';
import { Calendar, MapPin, Clock, Filter } from 'lucide-react';
import { BlurText } from '../components/ui/BlurText';
import { FadeIn } from '../components/ui/FadeIn';
import { Orb } from '../components/ui/Orb';
import { useData } from '../context/DataContext';
import type { Event } from '../types';

type FilterTab = 'semua' | 'mendatang' | 'selesai' | 'internal' | 'eksternal' | 'akademik' | 'sosial';

const FILTER_TABS: { key: FilterTab; label: string }[] = [
  { key: 'semua', label: 'Semua' },
  { key: 'mendatang', label: 'Mendatang' },
  { key: 'selesai', label: 'Selesai' },
  { key: 'internal', label: 'Internal' },
  { key: 'eksternal', label: 'Eksternal' },
  { key: 'akademik', label: 'Akademik' },
  { key: 'sosial', label: 'Sosial' },
];

const BODY_TEXT: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  color: 'rgba(255,255,255,0.5)',
  lineHeight: 1.75,
};

// Calendar component
function EventCalendar({ events }: { events: Event[] }) {
  const now = new Date();
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());

  const monthStart = new Date(viewYear, viewMonth, 1);
  const monthEnd = new Date(viewYear, viewMonth + 1, 0);
  const startDay = monthStart.getDay();
  const daysInMonth = monthEnd.getDate();

  const monthEvents = events.filter(e => {
    const d = new Date(e.date);
    return d.getFullYear() === viewYear && d.getMonth() === viewMonth;
  });

  const getEventsForDay = (day: number) => {
    return monthEvents.filter(e => new Date(e.date).getDate() === day);
  };

  const monthName = new Intl.DateTimeFormat('id-ID', { month: 'long', year: 'numeric' }).format(monthStart);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const cells: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(i);

  return (
    <div className="lg" style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 60 }}>
      {/* Calendar header */}
      <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={prevMonth} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', padding: '6px 10px', borderRadius: 8, fontSize: 18 }}>‹</button>
        <div className="heading" style={{ fontSize: 20, color: '#fff', textTransform: 'capitalize' }}>{monthName}</div>
        <button onClick={nextMonth} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', padding: '6px 10px', borderRadius: 8, fontSize: 18 }}>›</button>
      </div>

      {/* Day names */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1 }}>
        {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map(d => (
          <div key={d} style={{ textAlign: 'center', padding: '10px 4px', fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>{d}</div>
        ))}
        {cells.map((day, idx) => {
          const dayEvents = day ? getEventsForDay(day) : [];
          const isToday = day === now.getDate() && viewMonth === now.getMonth() && viewYear === now.getFullYear();
          return (
            <div key={idx} style={{
              minHeight: 70, padding: '8px 6px',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              background: isToday ? 'rgba(220,38,38,0.08)' : 'transparent',
            }}>
              {day && (
                <>
                  <div style={{
                    fontSize: 12, marginBottom: 4, color: isToday ? '#dc2626' : 'rgba(255,255,255,0.6)',
                    fontWeight: isToday ? 700 : 400,
                    width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '50%', background: isToday ? 'rgba(220,38,38,0.2)' : 'transparent',
                  }}>{day}</div>
                  {dayEvents.slice(0, 2).map(ev => (
                    <div key={ev.id} style={{
                      fontSize: 9, padding: '2px 4px', borderRadius: 3, marginBottom: 2,
                      background: ev.isUpcoming ? 'rgba(220,38,38,0.3)' : 'rgba(255,255,255,0.1)',
                      color: ev.isUpcoming ? 'rgba(255,200,200,0.9)' : 'rgba(255,255,255,0.5)',
                      overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
                    }}>{ev.title}</div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>+{dayEvents.length - 2}</div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function EventPage() {
  const { events } = useData();
  const [filter, setFilter] = useState<FilterTab>('semua');

  const filtered = events.filter(e => {
    if (filter === 'semua') return true;
    if (filter === 'mendatang') return e.isUpcoming;
    if (filter === 'selesai') return !e.isUpcoming;
    return e.category === filter;
  });

  return (
    <div style={{ position: 'relative', zIndex: 1, background: 'transparent', color: '#fff', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '160px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <Orb color="rgba(220,38,38,0.7)" x="50%" y="0%" size="700px" opacity={0.1} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, transparent, #000)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto' }}>
          <div className="lg" style={{ display: 'inline-block', borderRadius: 9999, padding: '5px 14px', marginBottom: 24, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
            <Calendar size={12} style={{ display: 'inline', marginRight: 6 }} />
            Kalender Kegiatan
          </div>
          <BlurText
            text="Event BEM FTIRS 2025"
            className="heading"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', lineHeight: 0.9, letterSpacing: '-2px', marginBottom: 24, display: 'block' }}
          />
          <p style={{ ...BODY_TEXT, fontSize: 15, maxWidth: 560, margin: '0 auto' }}>
            Ikuti berbagai kegiatan BEM FTIRS ITS — dari seminar akademik, kompetisi, bakti sosial, hingga festival seni dan budaya. Ada selalu untuk mahasiswa Indsys.
          </p>
        </div>
      </section>

      <section style={{ padding: '20px 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Calendar */}
          <FadeIn>
            <EventCalendar events={events} />
          </FadeIn>

          {/* Filter & List */}
          <FadeIn delay={0.1}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32, alignItems: 'center' }}>
              <Filter size={14} color="rgba(255,255,255,0.4)" />
              {FILTER_TABS.map(tab => (
                <button key={tab.key} onClick={() => setFilter(tab.key)}
                  style={{
                    padding: '7px 16px', borderRadius: 9999, fontSize: 12, fontWeight: 500,
                    border: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif",
                    background: filter === tab.key ? '#dc2626' : 'rgba(255,255,255,0.06)',
                    color: filter === tab.key ? '#fff' : 'rgba(255,255,255,0.5)',
                    transition: 'all 0.2s',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 24px', color: 'rgba(255,255,255,0.3)', fontFamily: "'Barlow', sans-serif" }}>
              Tidak ada event untuk kategori ini.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
              {filtered.map((ev, i) => (
                <FadeIn key={ev.id} delay={i * 0.07}>
                  <div className="lg card-hover" style={{ borderRadius: 18, overflow: 'hidden' }}>
                    <div style={{ height: 180, background: ev.imageColor, position: 'relative' }}>
                      <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
                        <span style={{
                          fontSize: 10, padding: '3px 10px', borderRadius: 9999, fontWeight: 600, fontFamily: "'Barlow', sans-serif",
                          background: ev.isUpcoming ? 'rgba(34,197,94,0.85)' : 'rgba(100,116,139,0.85)',
                          color: '#fff',
                        }}>
                          {ev.isUpcoming ? 'Mendatang' : 'Selesai'}
                        </span>
                        <span style={{
                          fontSize: 10, padding: '3px 10px', borderRadius: 9999, fontWeight: 600, fontFamily: "'Barlow', sans-serif",
                          background: 'rgba(0,0,0,0.5)', color: 'rgba(255,255,255,0.8)',
                        }}>
                          {ev.category}
                        </span>
                      </div>
                    </div>
                    <div style={{ padding: '20px 22px' }}>
                      <h4 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>{ev.title}</h4>
                      <p style={{ ...BODY_TEXT, fontSize: 12, lineHeight: 1.6, marginBottom: 16 }}>{ev.description}</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <Clock size={12} color="rgba(220,38,38,0.7)" />
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>
                            {new Intl.DateTimeFormat('id-ID', { dateStyle: 'long', timeStyle: 'short' }).format(new Date(ev.date))}
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <MapPin size={12} color="rgba(220,38,38,0.7)" />
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>{ev.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
