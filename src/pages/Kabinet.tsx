import { BlurText } from '../components/ui/BlurText';
import { FadeIn } from '../components/ui/FadeIn';
import { Orb } from '../components/ui/Orb';
import { BaraText } from '../components/brand/BaraText';

const BPH = [
  { role: 'Ketua BEM FTIRS', name: 'Ahmad Fadhillah Ramadhan', dept: 'Teknik Sistem & Industri', color: 'linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)' },
  { role: 'Wakil Ketua BEM', name: 'Nadia Aulia Putri', dept: 'Teknik Kimia', color: 'linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%)' },
  { role: 'Sekretaris Jenderal', name: 'Reza Firmansyah', dept: 'Teknik Mesin', color: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)' },
  { role: 'Wakil Sekretaris Jenderal', name: 'Siti Aminah Hakim', dept: 'Teknik Fisika', color: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)' },
  { role: 'Bendahara Umum', name: 'Bagas Kurniawan', dept: 'Teknik Material & Metalurgi', color: 'linear-gradient(135deg, #059669 0%, #065f46 100%)' },
  { role: 'Wakil Bendahara', name: 'Dinda Permatasari', dept: 'Teknik Pangan', color: 'linear-gradient(135deg, #047857 0%, #065f46 100%)' },
];

const KEPALA_DIVISI = [
  { divisi: 'Kesekretariatan', name: 'Muhammad Fauzan', dept: 'Teknik Mesin', icon: '📋' },
  { divisi: 'Keuangan', name: 'Rina Andriani', dept: 'Teknik Kimia', icon: '💰' },
  { divisi: 'Hubungan Luar', name: 'Dimas Aditya', dept: 'Teknik Sistem & Industri', icon: '🌐' },
  { divisi: 'Kajian Strategis & Advokasi', name: 'Luthfia Zahra', dept: 'Teknik Fisika', icon: '🔍' },
  { divisi: 'Pengembangan SDM', name: 'Aryo Wibisono', dept: 'Teknik Mesin', icon: '🎯' },
  { divisi: 'Kewirausahaan', name: 'Mega Silviana', dept: 'Teknik Kimia', icon: '💼' },
  { divisi: 'Sosial Masyarakat', name: 'Rizky Pratama', dept: 'Teknik Sistem & Industri', icon: '🤲' },
  { divisi: 'Media, Komunikasi & Informasi', name: 'Salsabila Nur', dept: 'Teknik Fisika', icon: '📱' },
  { divisi: 'Olahraga, Seni & Budaya', name: 'Galih Wicaksono', dept: 'Teknik Material', icon: '🎨' },
  { divisi: 'Minat & Bakat', name: 'Tiara Kesuma', dept: 'Teknik Pangan', icon: '⭐' },
];

const FILOSOFI_LOGO = [
  {
    title: 'Elemen Api',
    icon: {
      src: '/branding/elemen-api.png',
      alt: 'Elemen Api',
    },
    desc: 'Menunjukkan bahwa semangat ini tidak meledak tanpa kendali, melainkan terarah dan mampu beradaptasi, menjadi kekuatan, semangat yang bisa dikendalikan dan diarahkan menuju perubahan.',
  },
  {
    title: 'Lima Bongkahan Batu Bara',
    icon: {
      src: '/branding/bongkahan-batu-bara.png',
      alt: 'Lima Bongkahan Batu Bara',
    },
    desc: 'Lima buah lingkaran yang terkikis diibaratkan seperti batu bara, yaitu melambangkan energi atau bahan bakar untuk membarakan semangat. Berada di naungan tangan ini sebagai perwujudan 5 HMD yang dinaungi, senantiasa bergerak bersama berjuang untuk hal yang besar.',
  },
  {
    title: 'Tangan Yang Melingkar',
    icon: {
      src: '/branding/tangan-yang-melingkar.png',
      alt: 'Tangan Yang Melingkar',
    },
    desc: 'Sebuah tangan yang menggenggam api, melambangkan tekad yang membara dan keberanian yang tak tergoyahkan untuk pergerakan yang berkelanjutan. Meski tangan itu terbakar, ia tetap menggenggam api dengan kuat. Tangan juga melingkari lima buah lingkaran yang berarti kita sebagai BEMF mewadahi dan menaungi ke-lima HMD yang ada di FT-IRS.',
  },
];

const BODY_TEXT: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  color: 'rgba(255,255,255,0.5)',
  lineHeight: 1.75,
};

function AvatarPlaceholder({ color, size = 96 }: { color: string; size?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: color, flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.35, color: 'rgba(255,255,255,0.5)',
      boxShadow: '0 0 20px rgba(0,0,0,0.4)',
    }}>
      👤
    </div>
  );
}

export default function Kabinet() {
  const base = import.meta.env.BASE_URL;
  return (
    <div style={{ position: 'relative', zIndex: 1, background: 'transparent', color: '#fff', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '160px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <Orb color="rgba(220,38,38,0.7)" x="50%" y="0%" size="700px" opacity={0.1} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, transparent, #000)' }} />
        <BaraText opacity={0.02} style={{ top: '15%', right: '-8%', transform: 'rotate(-5deg)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, marginBottom: 28 }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={`${base}branding/LOGO-KABINET.png`}
                  alt="Logo Kabinet"
                  draggable={false}
                  style={{
                    width: 'min(62vw, 260px)',
                    height: 'auto',
                    filter: 'drop-shadow(0 10px 28px rgba(0,0,0,0.45)) drop-shadow(0 0 18px rgba(220,38,38,0.25))',
                  }}
                />
              </div>
              <img
                src={`${base}branding/NAMA-KABINET.png`}
                alt="Nama Kabinet"
                draggable={false}
                style={{
                  width: 'min(78vw, 420px)',
                  height: 'auto',
                  opacity: 0.95,
                  filter: 'drop-shadow(0 8px 22px rgba(0,0,0,0.45))',
                }}
              />
            </div>
          </FadeIn>
          <div className="lg" style={{ display: 'inline-block', borderRadius: 9999, padding: '5px 14px', marginBottom: 24, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
            Kepengurusan 2025
          </div>
          <BlurText
            text="Kabinet BEM FTIRS ITS 2025"
            className="heading"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', lineHeight: 0.9, letterSpacing: '-2px', marginBottom: 24, display: 'block' }}
          />
          <p style={{ ...BODY_TEXT, fontSize: 15, maxWidth: 560, margin: '0 auto' }}>
            Badan Pengurus Harian (BPH) dan Kepala Divisi BEM FTIRS ITS periode kepengurusan 2025 yang berkomitmen untuk melayani 6.000+ mahasiswa INDSYS.
          </p>
        </div>
      </section>

      {/* Filosofi Logo Section */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="lg" style={{ display: 'inline-block', borderRadius: 9999, padding: '5px 14px', marginBottom: 16, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
                Identitas Visual
              </div>
              <h2 className="heading" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff' }}>Filosofi Logo.</h2>
            </div>
          </FadeIn>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 24 
          }}>
            {FILOSOFI_LOGO.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div 
                  className="lg card-hover" 
                  style={{ 
                    borderRadius: 20, 
                    padding: '36px 32px', 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column' 
                  }}
                >
                  <div 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      width: 96, 
                      height: 96,  
                      marginBottom: 24,  
                    }}
                  >
                    <img 
                      src={item.icon.src}
                      alt={item.icon.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                  <h3 className="heading" style={{ fontSize: 22, color: '#fff', marginBottom: 16, lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ ...BODY_TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, flexGrow: 1 }}>
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BPH Section */}
      <section style={{ padding: '20px 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="lg" style={{ display: 'inline-block', borderRadius: 9999, padding: '5px 14px', marginBottom: 16, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
                Badan Pengurus Harian
              </div>
              <h2 className="heading" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff' }}>Pimpinan Inti BEM FTIRS.</h2>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {BPH.map((person, i) => (
              <FadeIn key={person.name} delay={i * 0.1}>
                <div className="lg card-hover" style={{ borderRadius: 20, padding: '28px 24px', display: 'flex', gap: 20, alignItems: 'center' }}>
                  <AvatarPlaceholder color={person.color} size={72} />
                  <div>
                    <div style={{ fontSize: 10, color: 'rgba(220,38,38,0.8)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{person.role}</div>
                    <div className="heading" style={{ fontSize: 17, color: '#fff', marginBottom: 4, lineHeight: 1.2 }}>{person.name}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>{person.dept}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Kepala Divisi */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="lg" style={{ display: 'inline-block', borderRadius: 9999, padding: '5px 14px', marginBottom: 16, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
                Kepala Divisi
              </div>
              <h2 className="heading" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff' }}>10 Kepala Divisi BEM FTIRS.</h2>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {KEPALA_DIVISI.map((person, i) => (
              <FadeIn key={person.name} delay={i * 0.07}>
                <div className="lg card-hover" style={{ borderRadius: 16, padding: '22px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{person.icon}</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>{person.divisi}</div>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(220,38,38,0.2), rgba(100,10,10,0.3))', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>👤</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{person.name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>{person.dept}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <FadeIn>
            <div className="lg" style={{ borderRadius: 24, padding: '48px 40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48 }}>
                <div>
                  <div className="lgs-red" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', marginBottom: 20, fontSize: 18 }}>🎯</div>
                  <h3 className="heading" style={{ fontSize: 22, color: '#fff', marginBottom: 16 }}>Visi</h3>
                  <p style={{ ...BODY_TEXT, fontSize: 14, lineHeight: 1.8 }}>
                    Mewujudkan BEM FTIRS ITS sebagai organisasi mahasiswa yang progresif, inklusif, dan berdampak nyata dalam meningkatkan kualitas kehidupan akademik dan non-akademik mahasiswa Indsys menuju Indonesia Emas 2045.
                  </p>
                </div>
                <div>
                  <div className="lgs" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', marginBottom: 20, fontSize: 18 }}>🚀</div>
                  <h3 className="heading" style={{ fontSize: 22, color: '#fff', marginBottom: 16 }}>Misi</h3>
                  <ul style={{ ...BODY_TEXT, fontSize: 14, lineHeight: 1.9, paddingLeft: 0, listStyle: 'none' }}>
                    {[
                      'Mengawal dan memperjuangkan kebijakan yang berpihak kepada mahasiswa',
                      'Memfasilitasi pengembangan kapasitas dan kompetensi mahasiswa Indsys',
                      'Membangun jaringan kolaborasi yang kuat lintas institusi dan industri',
                      'Menyelenggarakan program sosial yang bermakna bagi masyarakat sekitar',
                      'Menjaga transparansi dan akuntabilitas dalam tata kelola organisasi',
                    ].map((m, i) => (
                      <li key={i} style={{ marginBottom: 8, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: '#dc2626', flexShrink: 0, marginTop: 2 }}>▸</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
