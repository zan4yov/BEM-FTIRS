import { ExternalLink } from 'lucide-react';
import { BEM_FTIRS_LINKS } from '../branding/publicLinks';
import { BlurText } from '../components/ui/BlurText';
import { FadeIn } from '../components/ui/FadeIn';
import { Orb } from '../components/ui/Orb';


const DEPARTMENTS = [
  {
    name: 'Teknik Mesin',
    shortName: 'DTM',
    accreditations: ['AUN-QA', 'IABEE'],
    levels: ['S1', 'S2', 'S3'],
    notes: 'IUP + Joint Degree Jerman',
    desc: 'Departemen Teknik Mesin FTIRS ITS adalah salah satu departemen teknik mesin tertua dan terkemuka di Indonesia, menghasilkan lulusan yang andal untuk industri manufaktur, energi, dan otomotif.',
    color: 'linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)',
    icon:{
      src: '/branding/logo-mesin-ts.png',
      alt: 'Logo Departemen Teknik Mesin ITS'
    },
    students: '~1.200',
    founded: '1957',
  },
  {
    name: 'Teknik Kimia',
    shortName: 'DTK',
    accreditations: ['AUN-QA', 'IABEE'],
    levels: ['S1', 'S2', 'S3'],
    notes: 'IUP',
    desc: 'Departemen Teknik Kimia FTIRS ITS memadukan ilmu kimia dan rekayasa untuk menghasilkan lulusan yang mampu berkontribusi di industri petrokimia, farmasi, pangan, dan lingkungan.',
    color: 'linear-gradient(135deg, #0891b2 0%, #164e63 100%)',
    icon:{
      src: '/branding/tekkim-ts.png',
    },
    students: '~950',
    founded: '1960',
  },
  {
    name: 'Teknik Fisika',
    shortName: 'DTF',
    accreditations: ['AUN-QA', 'IABEE'],
    levels: ['S1', 'S2', 'S3'],
    notes: 'IUP',
    desc: 'Departemen Teknik Fisika FTIRS ITS berfokus pada instrumentasi, kontrol proses, dan sistem energi. Lulusannya banyak berkarier di industri migas, manufaktur, dan riset teknologi.',
    color: 'linear-gradient(135deg, #008000 0%, #228B22 100%)',
    icon:{
      src: '/branding/dtf-ts.png',
    },
    students: '~800',
    founded: '1965',
  },
  {
    name: 'T. Sistem & Industri',
    shortName: 'DTSI',
    accreditations: ['AUN-QA', 'ABET'],
    levels: ['S1', 'S2', 'S3'],
    notes: 'IUP',
    desc: 'Departemen Teknik Sistem dan Industri FTIRS ITS mengintegrasikan sistem, manajemen, dan teknologi untuk mengoptimalkan proses bisnis dan industri secara menyeluruh.',
    color: 'linear-gradient(135deg, #7851A9 0%, #BF00FF 100%)',
    icon:{
      src: '/branding/logoTI1-ts.png',
    },
    students: '~1.100',
    founded: '1971',
  },
  {
    name: 'T. Material & Metalurgi',
    shortName: 'DTMM',
    accreditations: ['IABEE'],
    levels: ['S1', 'S2'],
    notes: 'IUP',
    desc: 'Departemen Teknik Material dan Metalurgi FTIRS ITS mengkaji sifat, struktur, dan proses pengolahan material untuk aplikasi di industri manufaktur, pertambangan, dan teknologi maju.',
    color: 'linear-gradient(135deg, #D8D8D8 0%, #C0C0C0 100%)',
    icon:{
      src: '/branding/logo-dtmm-ts.png',
    },
    students: '~700',
    founded: '1984',
  },
];

const BODY_TEXT: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  color: 'rgba(255,255,255,0.5)',
  lineHeight: 1.75,
};

export default function Departemen() {
  return (
    <div style={{ position: 'relative', zIndex: 1, background: 'transparent', color: '#fff', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '160px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <Orb color="rgba(220,38,38,0.7)" x="50%" y="0%" size="700px" opacity={0.1} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, transparent, #000)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto' }}>
          <div className="lg" style={{ display: 'inline-block', borderRadius: 9999, padding: '5px 14px', marginBottom: 24, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
            Fakultas Teknologi Industri dan Rekayasa Sistem
          </div>
          <BlurText
            text="6 Program Studi FTIRS ITS"
            className="heading"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', lineHeight: 0.9, letterSpacing: '-2px', marginBottom: 24, display: 'block' }}
          />
          <p style={{ ...BODY_TEXT, fontSize: 15, maxWidth: 560, margin: '0 auto' }}>
            FTIRS ITS memiliki 5 departemen dengan 6 program studi unggulan, menghasilkan insinyur dan inovator kelas dunia yang siap menghadapi tantangan industri masa depan.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section style={{ padding: '20px 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {DEPARTMENTS.map((dept, i) => (
              <FadeIn key={dept.name} delay={i * 0.08}>
                <div className="lg card-hover" style={{ borderRadius: 20, overflow: 'hidden', height: '100%' }}>
                  {/* Color band */}
                  <div style={{ height: 6, background: dept.color }} />
                  <div style={{ padding: '28px 28px 24px' }}>
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                      <div>
                        <div style={{ width: 32, height: 32, marginBottom: 8 }}>
                          <img 
                            src={dept.icon.src} 
                            alt={dept.icon.alt}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain'
                            }}
                          />
                        </div>
                        <h3 className="heading" style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', color: '#fff', lineHeight: 1.1, marginBottom: 4 }}>{dept.name}</h3>
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>{dept.shortName}</span>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>Berdiri</div>
                        <div style={{ fontSize: 13, color: '#fff', fontWeight: 500 }}>{dept.founded}</div>
                      </div>
                    </div>

                    <p style={{ ...BODY_TEXT, fontSize: 13, marginBottom: 24 }}>{dept.desc}</p>

                    {/* Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16, marginTop: 16 }}>
                      {dept.accreditations.filter(a => a !== '—').map(acc => (
                        <span key={acc} style={{
                          fontSize: 10, padding: '3px 10px', borderRadius: 9999,
                          background: 'rgba(220,38,38,0.15)', color: 'rgba(220,38,38,0.9)', fontWeight: 600,
                        }}>{acc}</span>
                      ))}
                      {dept.levels.map(l => (
                        <span key={l} style={{
                          fontSize: 10, padding: '3px 10px', borderRadius: 9999,
                          background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)', fontWeight: 500,
                        }}>{l}</span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 16 }}>
                      <div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 2 }}>Mahasiswa aktif</div>
                        <div style={{ fontSize: 13, color: '#fff', fontWeight: 500 }}>{dept.students}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 2 }}>Catatan</div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{dept.notes}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h2 className="heading" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff', marginBottom: 12 }}>Tautan Resmi</h2>
              <p style={{ ...BODY_TEXT, fontSize: 14 }}>Kunjungi sumber informasi resmi FTIRS ITS</p>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { name: 'Website Resmi FTIRS ITS', url: BEM_FTIRS_LINKS.ftirsIts, desc: 'Portal informasi resmi Fakultas Teknologi Industri dan Rekayasa Sistem ITS' },
              { name: 'Instagram BEM FTIRS', url: BEM_FTIRS_LINKS.instagram, desc: 'Ikuti kegiatan dan informasi BEM FTIRS ITS di Instagram' },
              { name: 'LinkedIn BEM FTIRS', url: BEM_FTIRS_LINKS.linkedin, desc: 'Jejaring resmi BEM FTIRS di LinkedIn' },
            ].map(link => (
              <FadeIn key={link.name}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="lg card-hover" style={{ borderRadius: 16, padding: '22px 24px', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                      <h4 style={{ fontSize: 14, fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>{link.name}</h4>
                      <ExternalLink size={14} color="rgba(220,38,38,0.7)" style={{ flexShrink: 0, marginTop: 2 }} />
                    </div>
                    <p style={{ ...BODY_TEXT, fontSize: 12 }}>{link.desc}</p>
                    <div style={{ marginTop: 12, fontSize: 11, color: 'rgba(255,255,255,0.25)', fontWeight: 300 }}>{link.url}</div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
