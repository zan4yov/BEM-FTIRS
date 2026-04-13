import { BlurText } from '../components/ui/BlurText';
import { FadeIn } from '../components/ui/FadeIn';
import { Orb } from '../components/ui/Orb';
import { BaraText } from '../components/brand/BaraText';

const BPH = [
  { role: 'Ketua BEM FTIRS', name: 'Faizal Adli Munif', dept: `Teknik Material dan Metalurgi '22`, photo: '/branding/kabem.png' },
  { role: 'Sekretaris Jenderal I', name: 'Galuh Ferlianes Lestari', dept: `Teknik Kimia '22`, photo: '/branding/sekjen-1.png' },
  { role: 'Sekretaris Jenderal II', name: 'Amelia Febriola Dewanty', dept: `Teknik Kimia '22`, photo: '/branding/sekjen-2.png' },
  { role: 'Sekretaris Umum I', name: 'Fina Rachmatul Maula', dept: `Teknik Material dan Metalurgi '22`, photo: '/branding/sekum-1.png' },
  { role: 'Sekretaris Umum II', name: 'Emirel Nabil', dept: `Teknik Industri '22`, photo: '/branding/sekum-2.png' },
  { role: 'Bendahara Umum I', name: 'Vina Damayanti', dept: `Teknik Mesin '22`, photo: '/branding/bendum-1.png' },
  { role: 'Bendahara Umum II', name: 'Dannish Latifa Putri Rivandra', dept: `Teknik Fisika '22`, photo: '/branding/bendum-2.png' },
];

const KADEP = [
  { divisi: 'Dalam Negeri', role: 'Kepala Departemen', name: 'Andhika Bima Raharja', dept: `Teknik Mesin '22`, photo: '/branding/kadep-dagri.png' },
  { divisi: 'Luar Negeri', role: 'Kepala Departemen', name: 'Muhammad Zul Arsy Mastawan', dept: `Teknik Material dan Metalurgi '22`, photo: '/branding/kadep-lugri.png' },
  { divisi: 'PM-Pengembangan', role: 'Kepala Biro', name: 'Muhammad Faris Budianto', dept: `Teknik Industri '22`, photo: '/branding/pengembangan.png' },
  { divisi: 'PM-Harmonisasi', role: 'Kepala Biro', name: 'Patricia Calistha Hermawan', dept: `Teknik Kimia '22`, photo: '/branding/harmonisasi.png' },
  { divisi: 'PSDM', role: 'Kepala Departemen', name: 'Fausta Romanova', dept: `Teknik Material dan Metalurgi`, photo: '/branding/kadep-psdm.png' },
  { divisi: 'Sosial Masyarakat', role: 'Kepala Departemen', name: `Fathan Hazmi Thirafi`, dept: `Teknik Mesin '22`, photo: '/branding/kadep-sosmas.png' },
  { divisi: 'Media dan Informasi', role: 'Kepala Departemen', name: `Indah Paramitha`, dept: `Teknik Industri '22`, photo: '/branding/kadep-medfo.png' },
  { divisi: 'Riset dan Teknologi', role: 'Kepala Departemen', name: `Arif Pawoko`, dept: `Teknik Kimia '22`, photo: '/branding/kadep-ristek.png' },
  { divisi: 'Ekonomi Kreatif', role: 'Kepala Departemen', name: `Mercy Ahmad Dewangga`, dept: `Teknik Mesin '22`, photo: '/branding/kadep-ekraf.png' },
  { divisi: 'BSOKP', role: 'Kepala Departemen', name: `Mu'iza Kaba Latif`, dept: `Teknik Mesin '22`, photo: '/branding/kadep-bsokp.png' },
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

      {/* Vision Mission */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <div className="lg" style={{ borderRadius: 24, padding: '48px 40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 72 }}>
                <div>
                  <div
                    style={{
                      background: "#dc2626",
                      display: 'inline-block',
                      padding: '4px 12px',
                      marginBottom: 16
                    }}
                  >
                    <h3 className="heading" style={{ fontSize: 22, color: '#fff' }}>Visi</h3>
                  </div>
                  <p style={{ ...BODY_TEXT, color: '#fff', fontSize: 14, lineHeight: 1.8 }}>
                    Mewujudkan BEM FTIRS ITS sebagai organisasi mahasiswa yang progresif, inklusif, dan berdampak nyata dalam meningkatkan kualitas kehidupan akademik dan non-akademik mahasiswa Indsys menuju Indonesia Emas 2045.
                  </p>
                </div>
                <div>
                  <div
                    style={{
                      background: "#dc2626",
                      display: 'inline-block',
                      padding: '4px 12px',
                      marginBottom: 16
                    }}
                  >
                    <h3 className="heading" style={{ fontSize: 22, color: '#fff'}}>Misi</h3>
                  </div>
                  <ul style={{ ...BODY_TEXT, fontSize: 14, lineHeight: 1.9, paddingLeft: 0, listStyle: 'none', color: '#fff' }}>
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

      {/* BPH Section */}
      <section style={{ padding: '20px 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="lg" style={{ display: 'inline-block', borderRadius: 9999, padding: '5px 14px', marginBottom: 16, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
                Badan Pengurus Harian
              </div>
              <h2 className="heading" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff' }}>Badan Pengurus Inti BEM FTIRS</h2>
            </div>
          </FadeIn>

          {/* Kabem */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
            <FadeIn delay={0.1}>
              <div 
                className="lg card-hover" 
                style={{ 
                  width: '100%', 
                  maxWidth: 340, 
                  borderRadius: 20, 
                  overflow: 'hidden', 
                  display: 'flex', 
                  flexDirection: 'column' 
                }}
              >
                <div style={{ width: '100%', aspectRatio: '3 / 4', position: 'relative', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  <img 
                    src={`${base}${BPH[0].photo.replace(/^\//, '')}`} 
                    alt={`Foto ${BPH[0].name}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: 11, color: '#dc2626', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 8 }}>{BPH[0].role}</div>
                  <div className="heading" style={{ fontSize: 22, color: '#fff', marginBottom: 6, lineHeight: 1.2 }}>{BPH[0].name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>{BPH[0].dept}</div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: 24 
          }}>
            {BPH.slice(1).map((person, i) => (
              <FadeIn key={person.name} delay={i * 0.1}>
                <div className="lg card-hover" style={{ borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {/* Container Gambar 3:4 */}
                  <div style={{ width: '100%', aspectRatio: '3 / 4', position: 'relative', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <img 
                      src={`${base}${person.photo.replace(/^\//, '')}`} 
                      alt={`Foto ${person.name}`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  {/* Informasi Teks */}
                  <div style={{ padding: '24px' }}>
                    <div style={{ fontSize: 11, color: '#dc2626', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 8 }}>{person.role}</div>
                    <div className="heading" style={{ fontSize: 20, color: '#fff', marginBottom: 6, lineHeight: 1.2 }}>{person.name}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>{person.dept}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Kepala Divisi Section */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="lg" style={{ display: 'inline-block', borderRadius: 9999, padding: '5px 14px', marginBottom: 16, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
                Manajemen Divisi & Biro
              </div>
              <h2 className="heading" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff' }}>Jajaran Kepala Divisi</h2>
            </div>
          </FadeIn>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: 20 
          }}>
            {KADEP.map((person, i) => (
              <FadeIn key={person.name} delay={i * 0.07}>
                <div className="lg card-hover" style={{ borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {/* Container Gambar 3:4 */}
                  <div style={{ width: '100%', aspectRatio: '3 / 4', position: 'relative', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <img 
                      src={`${base}${person.photo.replace(/^\//, '')}`} 
                      alt={`Foto ${person.name}`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  {/* Informasi Teks */}
                  <div style={{ padding: '20px' }}>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>
                      {person.role}
                    </div>
                    <div style={{ fontSize: 12, color: '#dc2626', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 12 }}>
                      {person.divisi}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 4, lineHeight: 1.2 }}>{person.name}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>{person.dept}</div>
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
