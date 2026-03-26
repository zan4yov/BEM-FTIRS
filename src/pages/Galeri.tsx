import { useState } from 'react';
import { BlurText } from '../components/ui/BlurText';
import { FadeIn } from '../components/ui/FadeIn';
import { Orb } from '../components/ui/Orb';
import { useData } from '../context/DataContext';

type GalleryFilter = 'semua' | string;

const BODY_TEXT: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  color: 'rgba(255,255,255,0.5)',
  lineHeight: 1.75,
};

export default function Galeri() {
  const { gallery } = useData();
  const [filter, setFilter] = useState<GalleryFilter>('semua');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const categories = ['semua', ...Array.from(new Set(gallery.map(g => g.category)))];
  const filtered = filter === 'semua' ? gallery : gallery.filter(g => g.category === filter);

  const lightboxItem = gallery.find(g => g.id === lightbox);

  return (
    <div style={{ position: 'relative', zIndex: 1, background: 'transparent', color: '#fff', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '160px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <Orb color="rgba(220,38,38,0.7)" x="50%" y="0%" size="700px" opacity={0.1} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, transparent, #000)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto' }}>
          <div className="lg" style={{ display: 'inline-block', borderRadius: 9999, padding: '5px 14px', marginBottom: 24, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
            Dokumentasi & Arsip
          </div>
          <BlurText
            text="Galeri BEM FTIRS"
            className="heading"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', lineHeight: 0.9, letterSpacing: '-2px', marginBottom: 24, display: 'block' }}
          />
          <p style={{ ...BODY_TEXT, fontSize: 15, maxWidth: 560, margin: '0 auto' }}>
            Momen-momen berharga dari berbagai kegiatan BEM FTIRS ITS. Dari orientasi mahasiswa baru, kompetisi, hingga festival seni dan bakti sosial.
          </p>
        </div>
      </section>

      <section style={{ padding: '20px 24px 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Filter */}
          <FadeIn>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setFilter(cat)}
                  style={{
                    padding: '7px 16px', borderRadius: 9999, fontSize: 12, fontWeight: 500,
                    border: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif",
                    background: filter === cat ? '#dc2626' : 'rgba(255,255,255,0.06)',
                    color: filter === cat ? '#fff' : 'rgba(255,255,255,0.5)',
                    transition: 'all 0.2s',
                    textTransform: 'capitalize',
                  }}
                >
                  {cat === 'semua' ? 'Semua' : cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Masonry Grid */}
          <div style={{
            columnCount: 3,
            columnGap: 16,
            columnFill: 'balance',
          }}>
            <style>{`
              @media (max-width: 900px) {
                .masonry-grid { column-count: 2 !important; }
              }
              @media (max-width: 560px) {
                .masonry-grid { column-count: 1 !important; }
              }
            `}</style>
            <div className="masonry-grid" style={{ columnCount: 3, columnGap: 16 }}>
              {filtered.map((item, i) => (
                <FadeIn key={item.id} delay={i * 0.04}>
                  <div
                    onClick={() => setLightbox(item.id)}
                    style={{
                      marginBottom: 16, breakInside: 'avoid',
                      cursor: 'pointer', borderRadius: 14, overflow: 'hidden',
                      position: 'relative', display: 'block',
                    }}
                    className="card-hover"
                  >
                    <div style={{
                      background: item.imageColor,
                      aspectRatio: item.aspectRatio || '4/3',
                    }} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)',
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                      padding: 14, opacity: 0, transition: 'opacity 0.3s',
                    }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
                    >
                      <span style={{ fontSize: 13, fontWeight: 600, color: '#fff', lineHeight: 1.3, marginBottom: 4 }}>{item.title}</span>
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', textTransform: 'capitalize' }}>{item.category}</span>
                    </div>
                    {/* Always-visible caption */}
                    <div style={{ padding: '10px 12px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
                      <div style={{ fontSize: 12, fontWeight: 500, color: '#fff', lineHeight: 1.3 }}>{item.title}</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', textTransform: 'capitalize', marginTop: 2 }}>{item.category}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
          onClick={() => setLightbox(null)}
        >
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 800, width: '100%' }}>
            <div style={{ borderRadius: 20, overflow: 'hidden' }}>
              <div style={{ background: lightboxItem.imageColor, aspectRatio: lightboxItem.aspectRatio || '4/3', width: '100%' }} />
              <div style={{ background: 'rgba(20,20,20,0.95)', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{lightboxItem.title}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'capitalize' }}>{lightboxItem.category}</div>
                </div>
                <button onClick={() => setLightbox(null)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: 24, lineHeight: 1 }}>✕</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
