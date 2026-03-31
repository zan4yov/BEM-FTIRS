import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BlurText } from '../components/ui/BlurText';
import { FadeIn } from '../components/ui/FadeIn';
import { Orb } from '../components/ui/Orb';
import { useData } from '../context/DataContext';

type Category = 'semua' | 'kegiatan' | 'prestasi' | 'pengumuman' | 'sosial';

const CATEGORIES: { key: Category; label: string }[] = [
  { key: 'semua', label: 'Semua' },
  { key: 'kegiatan', label: 'Kegiatan' },
  { key: 'prestasi', label: 'Prestasi' },
  { key: 'pengumuman', label: 'Pengumuman' },
  { key: 'sosial', label: 'Sosial' },
];

const BODY_TEXT: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  color: 'rgba(255,255,255,0.5)',
  lineHeight: 1.75,
};

export default function Berita() {
  const { berita } = useData();
  const [filter, setFilter] = useState<Category>('semua');

  const filtered = filter === 'semua' ? berita : berita.filter(b => b.category === filter);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div style={{ position: 'relative', zIndex: 1, background: 'transparent', color: '#fff', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '160px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <Orb color="rgba(220,38,38,0.7)" x="50%" y="0%" size="700px" opacity={0.1} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, transparent, #000)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto' }}>
          <div className="lg" style={{ display: 'inline-block', borderRadius: 9999, padding: '5px 14px', marginBottom: 24, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
            Berita & Liputan
          </div>
          <BlurText
            text="Kabar Terkini dari Indsys"
            className="heading"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', lineHeight: 0.9, letterSpacing: '-2px', marginBottom: 24, display: 'block' }}
          />
          <p style={{ ...BODY_TEXT, fontSize: 15, maxWidth: 560, margin: '0 auto' }}>
            Ikuti perkembangan terkini dari BEM FTIRS ITS — liputan kegiatan, pencapaian mahasiswa, pengumuman penting, dan cerita inspiratif dari Fakultas Merah.
          </p>
        </div>
      </section>

      <section style={{ padding: '20px 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Filter */}
          <FadeIn>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48 }}>
              {CATEGORIES.map(cat => (
                <button key={cat.key} onClick={() => setFilter(cat.key)}
                  style={{
                    padding: '7px 16px', borderRadius: 9999, fontSize: 12, fontWeight: 500,
                    border: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif",
                    background: filter === cat.key ? '#dc2626' : 'rgba(255,255,255,0.06)',
                    color: filter === cat.key ? '#fff' : 'rgba(255,255,255,0.5)',
                    transition: 'all 0.2s',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Featured article */}
          {featured && (
            <FadeIn>
              <Link to={`/berita/${featured.id}`} style={{ textDecoration: 'none', display: 'block', marginBottom: 48 }}>
                <div className="lg card-hover" style={{ borderRadius: 24, overflow: 'hidden' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    <div style={{ 
                      height: 340, 
                      background: featured.image ? `url(${featured.image}) center/cover no-repeat` : featured.imageColor
                    }} />
                    <div style={{ padding: '36px 36px' }}>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                        <span style={{ fontSize: 10, padding: '3px 10px', borderRadius: 9999, background: 'rgba(220,38,38,0.15)', color: 'rgba(220,38,38,0.9)', fontWeight: 600 }}>
                          {featured.category.charAt(0).toUpperCase() + featured.category.slice(1)}
                        </span>
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>
                          {new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(new Date(featured.publishedAt))}
                        </span>
                      </div>
                      <h2 className="heading" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>{featured.title}</h2>
                      <p style={{ ...BODY_TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 24 }}>{featured.excerpt}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>oleh {featured.author}</div>
                        <span style={{ fontSize: 13, color: '#dc2626', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 500 }}>
                          Baca selengkapnya <ArrowUpRight size={13} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          )}

          {/* Grid */}
          {rest.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
              {rest.map((item, i) => (
                <FadeIn key={item.id} delay={i * 0.08}>
                  <Link to={`/berita/${item.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    <div className="lg card-hover" style={{ borderRadius: 18, overflow: 'hidden', height: '100%' }}>
                      <div style={{ 
                        height: 160, 
                        background: item.image ? `url(${item.image}) center/cover no-repeat` : item.imageColor
                      }} />
                      <div style={{ padding: '20px 22px' }}>
                        <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                          <span style={{ fontSize: 10, padding: '3px 10px', borderRadius: 9999, background: 'rgba(220,38,38,0.15)', color: 'rgba(220,38,38,0.9)', fontWeight: 600 }}>
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </span>
                        </div>
                        <h4 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>{item.title}</h4>
                        <p style={{ ...BODY_TEXT, fontSize: 12, lineHeight: 1.6, marginBottom: 12 }}>{item.excerpt}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>
                            {new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium' }).format(new Date(item.publishedAt))}
                          </span>
                          <span style={{ fontSize: 12, color: '#dc2626', display: 'flex', alignItems: 'center', gap: 3 }}>
                            Baca <ArrowUpRight size={11} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 24px', color: 'rgba(255,255,255,0.3)', fontFamily: "'Barlow', sans-serif" }}>
              Tidak ada berita untuk kategori ini.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
