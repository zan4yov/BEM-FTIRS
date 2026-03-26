import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import { Orb } from '../components/ui/Orb';
import { useData } from '../context/DataContext';

const BODY_TEXT: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  color: 'rgba(255,255,255,0.5)',
  lineHeight: 1.75,
};

export default function BeritaDetail() {
  const { id } = useParams<{ id: string }>();
  const { berita } = useData();
  const item = berita.find(b => b.id === id);

  if (!item) return <Navigate to="/berita" replace />;

  const related = berita.filter(b => b.id !== id && b.category === item.category).slice(0, 3);

  return (
    <div style={{ position: 'relative', zIndex: 1, background: 'transparent', color: '#fff', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '140px 24px 0', overflow: 'hidden' }}>
        <Orb color="rgba(220,38,38,0.6)" x="80%" y="20%" size="600px" opacity={0.07} />

        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <FadeIn>
            <Link to="/berita" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 32, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              <ArrowLeft size={14} /> Kembali ke Berita
            </Link>

            <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 10, padding: '3px 10px', borderRadius: 9999, background: 'rgba(220,38,38,0.15)', color: 'rgba(220,38,38,0.9)', fontWeight: 600 }}>
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </span>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>
                {new Intl.DateTimeFormat('id-ID', { dateStyle: 'full' }).format(new Date(item.publishedAt))}
              </span>
            </div>

            <h1 className="heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.05, letterSpacing: '-1px', marginBottom: 20 }}>
              {item.title}
            </h1>

            <p style={{ ...BODY_TEXT, fontSize: 16, lineHeight: 1.75, marginBottom: 8, fontStyle: 'italic' }}>{item.excerpt}</p>

            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 40, fontWeight: 300 }}>
              Ditulis oleh <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{item.author}</span>
            </div>
          </FadeIn>

          {/* Cover image */}
          <FadeIn delay={0.1}>
            <div style={{ height: 380, background: item.imageColor, borderRadius: 20, marginBottom: 48 }} />
          </FadeIn>

          {/* Body */}
          <FadeIn delay={0.2}>
            <div
              style={{
                ...BODY_TEXT, fontSize: 15, lineHeight: 1.9,
                color: 'rgba(255,255,255,0.7)',
              }}
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          </FadeIn>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: 56, paddingTop: 24, marginBottom: 80 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>
                Dipublikasikan oleh <span style={{ color: 'rgba(255,255,255,0.5)' }}>{item.author}</span> · {new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(new Date(item.publishedAt))}
              </div>
              <Link to="/berita" style={{ fontSize: 13, color: '#dc2626', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                Kembali ke Berita <ArrowLeft size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ padding: '0 24px 100px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <FadeIn>
              <h2 className="heading" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#fff', marginBottom: 32 }}>Berita Terkait.</h2>
            </FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 18 }}>
              {related.map((rel, i) => (
                <FadeIn key={rel.id} delay={i * 0.08}>
                  <Link to={`/berita/${rel.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    <div className="lg card-hover" style={{ borderRadius: 18, overflow: 'hidden', height: '100%' }}>
                      <div style={{ height: 140, background: rel.imageColor }} />
                      <div style={{ padding: '18px 20px' }}>
                        <h4 style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>{rel.title}</h4>
                        <p style={{ ...BODY_TEXT, fontSize: 12, lineHeight: 1.6, marginBottom: 10 }}>{rel.excerpt.slice(0, 80)}…</p>
                        <span style={{ fontSize: 12, color: '#dc2626', display: 'flex', alignItems: 'center', gap: 3 }}>
                          Baca <ArrowUpRight size={11} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
