import { Link } from 'react-router-dom';
import { ArrowUpRight, Play, ChevronRight, Zap, Users, Star, Heart, BookOpen, Target } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import { Orb } from '../components/ui/Orb';
import { Marquee } from '../components/Marquee';
import { MachineGearWatermark } from '../components/brand/MachineGear';
import { InteractiveMachineGear } from '../components/brand/InteractiveMachineGear';
import { BaraKarsaWatermark } from '../components/brand/BaraKarsaEmblem';
import { BaraText } from '../components/brand/BaraText';
import { CollageMosaic } from '../components/brand/CollageMosaic';
import { BlurText } from '../components/ui/BlurText';
import { useData } from '../context/DataContext';

const MARQUEE_ITEMS = [
  'Advokasi',
  'Kolaborasi',
  'Inovasi',
  'Fakultas Merah',
  'Indsys',
  'Surabaya',
  'Kabinet 2025',
  'Teknologi & Industri',
  'Rekayasa Sistem',
  'Mahasiswa FTIRS',
];

const SECTION_H2: React.CSSProperties = {
  fontFamily: "'Instrument Serif', serif",
  fontStyle: 'italic',
  fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
  color: '#fff',
  lineHeight: 0.92,
  letterSpacing: '-0.5px',
};

const BODY_TEXT: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  color: 'rgba(255,255,255,0.5)',
  lineHeight: 1.75,
};

const BADGE: React.CSSProperties = {
  display: 'inline-block',
  borderRadius: 9999,
  padding: '5px 14px',
  marginBottom: 20,
  fontSize: 12,
  fontWeight: 500,
  color: 'rgba(255,255,255,0.7)',
  fontFamily: "'Barlow', sans-serif",
};

export default function Landing() {
  const { events, berita } = useData();
  const upcomingEvents = events.filter(e => e.isUpcoming).slice(0, 3);
  const latestBerita = berita.slice(0, 3);
  const base = import.meta.env.BASE_URL;

  return (
    <div style={{ position: 'relative', zIndex: 1, background: 'transparent', color: '#fff', overflowX: 'hidden' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <Orb color="rgba(220,38,38,0.7)" x="50%" y="0%" size="900px" opacity={0.14} />
        <Orb color="rgba(180,20,20,0.8)" x="20%" y="60%" size="500px" opacity={0.08} />
        <Orb color="rgba(100,10,10,0.9)" x="85%" y="40%" size="400px" opacity={0.09} />

        {/* Figma collage background (node 4:4071 export) */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${base}branding/ftirs-collage.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.26,
            filter: 'saturate(1.02) contrast(0.98) brightness(0.95)',
            transform: 'scale(1.02)',
            zIndex: 0,
            pointerEvents: 'none',
            maskImage: 'radial-gradient(ellipse 90% 70% at 50% 35%, black 30%, transparent 92%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 35%, black 30%, transparent 92%)',
          }}
        />

        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 100% 80% at 50% 40%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 80% at 50% 40%, black 20%, transparent 100%)',
        }} />

        {[600, 900].map((s, i) => (
          <div key={s} style={{
            position: 'absolute', width: s, height: s, borderRadius: '50%',
            border: '1px solid rgba(220,38,38,0.1)',
            top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            animation: `pulse-glow 4s ease-in-out infinite ${i}s`,
            pointerEvents: 'none',
          }} />
        ))}

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 360, background: 'linear-gradient(to bottom, transparent, rgba(2,2,2,0.92) 55%, #030303)', zIndex: 1 }} />

        <MachineGearWatermark size={280} opacity={0.09} style={{ top: '12%', right: '-4%', transform: 'rotate(18deg)' }} />
        <MachineGearWatermark size={180} opacity={0.06} style={{ bottom: '22%', left: '-6%', transform: 'rotate(-12deg)' }} />

        {/* Figma-inspired decorations */}
        <BaraText opacity={0.05} style={{ zIndex: 2, top: '8%', left: '-4%', transform: 'rotate(-6deg)' }} />
        <CollageMosaic cols={10} rows={3} opacity={0.085} style={{ zIndex: 2, bottom: '6%', right: '-6%', width: '46%', height: '30%', transform: 'rotate(3deg)', filter: 'saturate(0.9) contrast(0.95)' }} />

        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '120px 24px 80px', maxWidth: 960, margin: '0 auto' }}>
          <FadeIn delay={0}>
            <p style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.38)',
              marginBottom: 20,
            }}>
              Organisasi Mahasiswa · FTIRS · ITS Surabaya
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
              <div className="lg" style={{ borderRadius: 9999, padding: '6px 6px 6px 16px', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>Kabinet BEM FTIRS ITS 2025</span>
                <span style={{
                  background: 'linear-gradient(135deg, #dc2626, #7f1d1d)',
                  color: '#fff', borderRadius: 9999, padding: '4px 10px',
                  fontSize: 11, fontWeight: 700, boxShadow: '0 0 8px rgba(220,38,38,0.5)',
                }}>Aktif</span>
              </div>
            </div>
          </FadeIn>

          {/* Stacked bars + machine gears (HMIT-style), Fakultas Merah palette */}
          <FadeIn delay={0.15}>
            <div style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
              marginBottom: 28,
            }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div className="hide-mobile-gear-corner" style={{ position: 'absolute', right: '-0.25rem', top: '-3.25rem', zIndex: 2 }}>
                  <InteractiveMachineGear size={76} variant="outline" style={{ color: 'rgba(255,255,255,0.92)', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.35))' }} />
                </div>
                <div style={{
                  background: 'linear-gradient(180deg, #f8f8f8 0%, #ececec 100%)',
                  color: '#7f1d1d',
                  padding: '14px clamp(20px, 4vw, 36px)',
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(1.05rem, 3.2vw, 1.55rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  boxShadow: '0 12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.9)',
                  borderRadius: 2,
                }}>
                  Badan Eksekutif Mahasiswa
                </div>
              </div>

              <div style={{ position: 'relative', display: 'inline-block', marginLeft: 'clamp(0px, 5vw, 56px)' }}>
                <div className="hide-mobile-gear-corner" style={{ position: 'absolute', left: '-4.25rem', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
                  <InteractiveMachineGear size={54} variant="outline" style={{ color: 'rgba(255,255,255,0.88)', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))' }} />
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 55%, #7f1d1d 100%)',
                  color: '#fff',
                  padding: '14px clamp(20px, 4vw, 36px)',
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(1.05rem, 3.2vw, 1.6rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  boxShadow: '0 12px 40px rgba(220,38,38,0.28), inset 0 1px 0 rgba(255,255,255,0.12)',
                  borderRadius: 2,
                }}>
                  Fakultas FTIRS ITS
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div
              className="heading"
              aria-label="Bergerak Bersama, Membangun Indsys"
              style={{
                fontSize: 'clamp(1.35rem, 3.8vw, 2.25rem)',
                color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.05,
                letterSpacing: '-1px',
                marginBottom: 22,
                display: 'inline-flex',
                alignItems: 'baseline',
                gap: '0.32em',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <span>Bergerak</span>
              <span>Bersama,</span>
              <span style={{ whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'baseline', gap: '0.28em' }}>
                <span>Membangun</span>
                <img
                  src={`${base}branding/indsys-wordmark.png`}
                  alt="Indsys"
                  draggable={false}
                  style={{
                    height: '1.56em',
                    width: 'auto',
                    maxWidth: 'min(70vw, 520px)',
                    objectFit: 'contain',
                    display: 'inline-block',
                    flexShrink: 0,
                    transform: 'translateY(0.40em) rotate(-1deg)',
                    filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.35))',
                  }}
                />
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <p style={{ ...BODY_TEXT, fontSize: 16, maxWidth: 620, margin: '0 auto 36px', lineHeight: 1.65 }}>
              Selamat datang di website resmi Badan Eksekutif Mahasiswa Fakultas Teknologi Industri dan Rekayasa Sistem Institut Teknologi Sepuluh Nopember Surabaya.
            </p>
          </FadeIn>

          <FadeIn delay={1.1}>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/divisi" className="lgs-red" style={{ borderRadius: 9999, padding: '13px 26px', fontSize: 14, fontWeight: 500, color: '#fff', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                Jelajahi BEM <ArrowUpRight size={15} />
              </Link>
              <button type="button" className="btn-ghost" style={{ borderRadius: 9999, padding: '13px 24px', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Play size={13} style={{ fill: 'rgba(255,255,255,0.5)' }} /> Profil Video
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} durationSec={42} />

      {/* ── DEPARTMENTS BAR ── */}
      <section style={{ padding: '32px 24px 72px', background: 'transparent', textAlign: 'center' }}>
        <FadeIn>
          <div className="lg" style={BADGE}>6 Program Studi di FTIRS ITS</div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px 36px', maxWidth: 900, margin: '0 auto' }}>
            {['Teknik Mesin', 'Teknik Kimia', 'Teknik Fisika', 'T. Sistem & Industri', 'T. Material & Metalurgi', 'Teknik Pangan'].map(d => (
              <Link key={d} to="/departemen" className="heading" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)', color: 'rgba(255,255,255,0.72)', letterSpacing: '-0.3px', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
              >{d}</Link>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ position: 'relative', padding: '100px 24px', overflow: 'hidden', background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.35) 50%, transparent)' }}>
        <Orb color="rgba(200,20,20,0.6)" x="60%" y="50%" size="700px" opacity={0.1} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 220, background: 'linear-gradient(to bottom, #000, transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 220, background: 'linear-gradient(to top, #000, transparent)' }} />
        <BaraKarsaWatermark size={260} opacity={0.045} style={{ top: '10%', right: '5%', transform: 'rotate(8deg)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <div className="lg" style={BADGE}>Tentang BEM FTIRS</div>
            <h2 className="heading" style={{ ...SECTION_H2, fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', marginBottom: 24 }}>
              Suara mahasiswa, digerakkan dengan nyata.
            </h2>
            <p style={{ ...BODY_TEXT, fontSize: 15, marginBottom: 20, lineHeight: 1.75 }}>
              BEM FTIRS adalah jembatan antara mahasiswa dan institusi. Kami mengawal kebijakan, menyelenggarakan program bermakna, dan membangun ekosistem akademik yang tangguh bagi lebih dari 6.000 mahasiswa di Fakultas Merah ITS.
            </p>
            <p style={{ ...BODY_TEXT, fontSize: 15, marginBottom: 36, lineHeight: 1.75 }}>
              Berdiri sejak 1957 bersama Institut Teknologi Sepuluh Nopember, FTIRS telah melahirkan ribuan insinyur dan inovator yang berkontribusi nyata bagi kemajuan industri Indonesia dan dunia.
            </p>
            <Link to="/tentang" className="lgs-red" style={{ borderRadius: 9999, padding: '13px 28px', fontSize: 14, fontWeight: 500, color: '#fff', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              Kenali BEM FTIRS <ArrowUpRight size={15} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── 4 PILLARS ── */}
      <section style={{ padding: '60px 24px 100px', background: 'transparent' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <div className="lg" style={BADGE}>Pilar BEM FTIRS</div>
              <h2 className="heading" style={SECTION_H2}>Empat pilar gerakan kami.</h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
            {[
              { icon: <Zap size={18} color="rgba(255,255,255,0.75)" />, title: 'Advokasi', desc: 'Memperjuangkan hak dan kepentingan mahasiswa FTIRS di setiap tingkatan kebijakan institusi.' },
              { icon: <Users size={18} color="rgba(255,255,255,0.75)" />, title: 'Kolaborasi', desc: 'Membangun sinergi antar departemen, himpunan, dan organisasi untuk dampak yang lebih besar.' },
              { icon: <Star size={18} color="rgba(255,255,255,0.75)" />, title: 'Inovasi', desc: 'Mendorong kreativitas dan solusi segar dalam setiap program dan inisiatif mahasiswa.' },
              { icon: <Heart size={18} color="rgba(255,255,255,0.75)" />, title: 'Pemberdayaan', desc: 'Mengembangkan seluruh potensi mahasiswa Indsys melalui program inklusif dan berdampak nyata.' },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.1}>
                <div className="lg card-hover" style={{ borderRadius: 18, padding: '24px', height: '100%' }}>
                  <div className="lgs" style={{ width: 42, height: 42, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    {c.icon}
                  </div>
                  <h4 className="heading" style={{ fontSize: 19, color: '#fff', marginBottom: 10 }}>{c.title}</h4>
                  <p style={{ ...BODY_TEXT, fontSize: 13, lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ position: 'relative', padding: '80px 24px', background: 'transparent', overflow: 'hidden' }}>
        <Orb color="rgba(200,20,20,0.7)" x="50%" y="50%" size="800px" opacity={0.09} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, #000, transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to top, #000, transparent)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 900, margin: '0 auto' }}>
          <FadeIn>
            <div className="lg" style={{ borderRadius: 24, padding: '48px 32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 32, textAlign: 'center' }}>
                {[
                  { v: '6.000+', l: 'Mahasiswa FTIRS' },
                  { v: '10', l: 'Divisi Aktif' },
                  { v: '50+', l: 'Event Per Tahun' },
                  { v: '6', l: 'Program Studi' },
                ].map(s => (
                  <div key={s.l}>
                    <div className="heading" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#fff', lineHeight: 1, marginBottom: 8 }}>{s.v}</div>
                    <div style={{ ...BODY_TEXT, fontSize: 13 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURE CHESS ── */}
      <section style={{ position: 'relative', padding: '80px 24px 100px', background: 'linear-gradient(180deg, transparent, rgba(220,38,38,0.03) 40%, transparent)', overflow: 'hidden' }}>
        <BaraText opacity={0.018} style={{ bottom: '5%', right: '-10%', transform: 'rotate(4deg)' }} />
        <MachineGearWatermark size={200} opacity={0.04} style={{ top: '8%', left: '-3%', transform: 'rotate(-20deg)' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 72 }}>
              <div className="lg" style={BADGE}>Program Unggulan</div>
              <h2 className="heading" style={SECTION_H2}>Dari gagasan hingga aksi nyata.</h2>
            </div>
          </FadeIn>

          {[
            {
              dir: 'normal' as const,
              title: 'Wadah aspirasi & advokasi mahasiswa.',
              body: 'BEM FTIRS aktif mengawal setiap kebijakan yang menyentuh kehidupan mahasiswa — dari kurikulum, fasilitas, hingga kesejahteraan. Setiap suara mahasiswa Indsys diperjuangkan di sini.',
              icon: <BookOpen size={28} color="rgba(255,255,255,0.6)" />,
              label: 'Advokasi & Kebijakan',
              bg: 'linear-gradient(135deg, rgba(100,10,10,0.4) 0%, rgba(30,30,60,0.3) 100%)',
              link: '/kabinet',
            },
            {
              dir: 'reverse' as const,
              title: 'Pengembangan diri yang holistik.',
              body: 'Dari pelatihan kepemimpinan, kompetisi nasional, hingga kegiatan sosial — BEM FTIRS merancang program yang mempersiapkan mahasiswa Indsys menjadi pemimpin masa depan industri Indonesia.',
              icon: <Target size={28} color="rgba(255,255,255,0.6)" />,
              label: 'Pengembangan Mahasiswa',
              bg: 'linear-gradient(135deg, rgba(20,40,80,0.35) 0%, rgba(60,10,10,0.35) 100%)',
              link: '/divisi',
            },
          ].map((row, idx) => (
            <FadeIn key={idx}>
              <div style={{ display: 'flex', gap: 64, alignItems: 'center', marginBottom: idx === 0 ? 88 : 0, flexWrap: 'wrap', flexDirection: row.dir === 'reverse' ? 'row-reverse' : 'row' }}>
                <div style={{ flex: '1 1 300px', minWidth: 260 }}>
                  <h3 className="heading" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', color: '#fff', marginBottom: 18, lineHeight: 0.95 }}>{row.title}</h3>
                  <p style={{ ...BODY_TEXT, marginBottom: 28 }}>{row.body}</p>
                  <Link to={row.link} className="lgs" style={{ borderRadius: 9999, padding: '10px 20px', fontSize: 13, fontWeight: 500, color: '#fff', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                    Pelajari <ChevronRight size={13} />
                  </Link>
                </div>
                <div style={{ flex: '1 1 300px', minWidth: 260 }}>
                  <div className="lg card-hover" style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3', background: row.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(220,38,38,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {row.icon}
                    </div>
                    <span className="heading" style={{ fontSize: 18, color: 'rgba(255,255,255,0.4)' }}>{row.label}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section style={{ padding: '60px 24px 100px', background: 'transparent' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <div className="lg" style={{ ...BADGE, marginBottom: 12 }}>Event Mendatang</div>
                <h2 className="heading" style={SECTION_H2}>Yang akan datang.</h2>
              </div>
              <Link to="/event" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                Lihat semua <ArrowUpRight size={13} />
              </Link>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
            {upcomingEvents.map((ev, i) => (
              <FadeIn key={ev.id} delay={i * 0.1}>
                <Link to="/event" style={{ textDecoration: 'none' }}>
                  <div className="lg card-hover" style={{ borderRadius: 18, overflow: 'hidden', height: '100%' }}>
                    <div style={{ height: 160, background: ev.imageColor }} />
                    <div style={{ padding: '20px 22px' }}>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 10, padding: '3px 10px', borderRadius: 9999, background: 'rgba(220,38,38,0.15)', color: 'rgba(220,38,38,0.9)', fontWeight: 500 }}>
                          {ev.category.charAt(0).toUpperCase() + ev.category.slice(1)}
                        </span>
                        <span style={{ fontSize: 10, padding: '3px 10px', borderRadius: 9999, background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}>
                          {new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(new Date(ev.date))}
                        </span>
                      </div>
                      <h4 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>{ev.title}</h4>
                      <p style={{ ...BODY_TEXT, fontSize: 12, lineHeight: 1.6 }}>{ev.description.slice(0, 100)}…</p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ── */}
      <section style={{ padding: '0 24px 100px', background: 'transparent' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <div className="lg" style={{ ...BADGE, marginBottom: 12 }}>Berita Terkini</div>
                <h2 className="heading" style={SECTION_H2}>Kabar dari Indsys.</h2>
              </div>
              <Link to="/berita" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                Lihat semua <ArrowUpRight size={13} />
              </Link>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
            {latestBerita.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.1}>
                <Link to={`/berita/${item.id}`} style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
                  <div className="lg card-hover" style={{ borderRadius: 18, overflow: 'hidden', height: '100%' }}>
                    <div style={{ height: 140, background: item.imageColor }} />
                    <div style={{ padding: '20px 22px' }}>
                      <span style={{ fontSize: 10, padding: '3px 10px', borderRadius: 9999, background: 'rgba(220,38,38,0.15)', color: 'rgba(220,38,38,0.9)', fontWeight: 500, display: 'inline-block', marginBottom: 10 }}>
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                      <h4 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>{item.title}</h4>
                      <p style={{ ...BODY_TEXT, fontSize: 12, lineHeight: 1.6 }}>{item.excerpt}</p>
                      <div style={{ marginTop: 12, fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>
                        {new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(new Date(item.publishedAt))}
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ position: 'relative', padding: '120px 24px 100px', background: 'transparent', overflow: 'hidden', textAlign: 'center' }}>
        <Orb color="rgba(220,38,38,0.8)" x="50%" y="0%" size="900px" opacity={0.12} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, #000, transparent)' }} />
        <BaraKarsaWatermark size={340} opacity={0.035} style={{ bottom: '-5%', left: '50%', transform: 'translateX(-50%) rotate(-4deg)' }} />
        <CollageMosaic cols={12} rows={2} opacity={0.04} style={{ top: '15%', left: '-5%', width: '110%', height: '25%' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto' }}>
          <FadeIn>
            <BlurText
              text="Bersama kita wujudkan Indsys yang lebih baik."
              className="heading"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.8rem)', color: '#fff', lineHeight: 0.88, letterSpacing: '-2px', marginBottom: 24, display: 'block' }}
            />
            <p style={{ ...BODY_TEXT, fontSize: 15, marginBottom: 44, lineHeight: 1.65 }}>
              Sampaikan aspirasimu, ikuti program kami, dan jadilah bagian dari gerakan BEM FTIRS ITS.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/event" className="btn-white" style={{ borderRadius: 9999, padding: '14px 30px', fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                Lihat Semua Event
              </Link>
              <Link to="/divisi" className="lgs-red" style={{ borderRadius: 9999, padding: '14px 30px', fontSize: 14, fontWeight: 500, color: '#fff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Jelajahi Divisi <ArrowUpRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
