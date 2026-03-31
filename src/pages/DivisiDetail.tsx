import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { DIVISIONS } from './Divisi';
import { FadeIn } from '../components/ui/FadeIn';
import { BlurText } from '../components/ui/BlurText';
import { Orb } from '../components/ui/Orb';
import { AppIcon } from '../components/icons/AppIcon';

const BODY_TEXT: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  color: 'rgba(255,255,255,0.5)',
  lineHeight: 1.75,
};

export default function DivisiDetail() {
  const { slug } = useParams<{ slug: string }>();
  const div = DIVISIONS.find(d => d.slug === slug);

  if (!div) return <Navigate to="/divisi" replace />;

  return (
    <div style={{ position: 'relative', zIndex: 1, background: 'transparent', color: '#fff', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '140px 24px 80px', overflow: 'hidden' }}>
        <Orb color="rgba(220,38,38,0.7)" x="70%" y="30%" size="600px" opacity={0.08} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, transparent, #000)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <Link to="/divisi" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 32, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              <ArrowLeft size={14} /> Kembali ke Divisi
            </Link>
          </FadeIn>

          <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <div style={{ width: 56, height: 56, marginBottom: 16, color: 'rgba(255,255,255,0.85)' }}>
                <AppIcon name={div.icon} size={56} />
              </div>
              <BlurText
                text={div.name}
                className="heading"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 0.9, letterSpacing: '-2px', marginBottom: 20, display: 'block' }}
              />
              <p style={{ ...BODY_TEXT, fontSize: 16, lineHeight: 1.8, maxWidth: 520 }}>{div.about}</p>
            </div>
            <div style={{ flex: '0 0 auto' }}>
              <div className="lg" style={{ borderRadius: 20, padding: '24px 28px', minWidth: 200 }}>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Anggota Tim</div>
                  <div className="heading" style={{ fontSize: 28, color: '#fff' }}>{div.team.length}</div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Program Kerja</div>
                  <div className="heading" style={{ fontSize: 28, color: '#fff' }}>{div.programs.length}</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Status</div>
                  <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 9999, background: 'rgba(34,197,94,0.15)', color: 'rgba(34,197,94,0.9)', fontWeight: 600 }}>Aktif 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            <FadeIn>
              <div className="lg" style={{ borderRadius: 20, padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(220,38,38,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.85)' }}>
                    <AppIcon name="target" size={18} />
                  </div>
                  <h3 className="heading" style={{ fontSize: 20, color: '#fff' }}>Visi</h3>
                </div>
                <p style={{ ...BODY_TEXT, fontSize: 14, lineHeight: 1.8 }}>{div.vision}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="lg" style={{ borderRadius: 20, padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(220,38,38,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.85)' }}>
                    <AppIcon name="rocket" size={18} />
                  </div>
                  <h3 className="heading" style={{ fontSize: 20, color: '#fff' }}>Misi</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {div.mission.map((m, i) => (
                    <li key={i} style={{ ...BODY_TEXT, fontSize: 13, marginBottom: 10, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: '#dc2626', flexShrink: 0, marginTop: 2 }}>▸</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <h2 className="heading" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff', marginBottom: 36 }}>Program Kerja.</h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {div.programs.map((prog, i) => (
              <FadeIn key={prog.name} delay={i * 0.08}>
                <div className="lg card-hover" style={{ borderRadius: 16, padding: '22px 24px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, background: div.color }} />
                  <div style={{ paddingLeft: 12 }}>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Proker {i + 1}</div>
                    <h4 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>{prog.name}</h4>
                    <p style={{ ...BODY_TEXT, fontSize: 12, lineHeight: 1.6 }}>{prog.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <h2 className="heading" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff', marginBottom: 36 }}>Tim Divisi.</h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 16 }}>
            {div.team.map((member, i) => (
              <FadeIn key={member} delay={i * 0.06}>
                <div className="lg card-hover" style={{ borderRadius: 16, padding: '20px 16px', textAlign: 'center' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: div.color, margin: '0 auto 12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.85)',
                  }}>
                    <AppIcon name="user" size={24} style={{ opacity: 0.9 }} />
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: '#fff', lineHeight: 1.3 }}>{member}</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginTop: 4, fontWeight: 300 }}>
                    {i === 0 ? 'Kepala Divisi' : 'Anggota'}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
