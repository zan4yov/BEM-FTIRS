import { ExternalLink } from 'lucide-react';
import { BEM_FTIRS_LINKS } from '../branding/publicLinks';
import { BlurText } from '../components/ui/BlurText';
import { FadeIn } from '../components/ui/FadeIn';
import { Orb } from '../components/ui/Orb';
import type { AppIconName } from '../components/icons/AppIcon';
import { AppIcon } from '../components/icons/AppIcon';

const BODY_TEXT: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  color: 'rgba(255,255,255,0.5)',
  lineHeight: 1.75,
};

export default function Tentang() {
  return (
    <div style={{ position: 'relative', zIndex: 1, background: 'transparent', color: '#fff', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '160px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <Orb color="rgba(220,38,38,0.7)" x="50%" y="0%" size="700px" opacity={0.1} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, transparent, #000)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto' }}>
          <BlurText
            text="Tentang BEM FTIRS ITS"
            className="heading"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', lineHeight: 0.9, letterSpacing: '-2px', marginBottom: 24, display: 'block' }}
          />
          <p style={{ ...BODY_TEXT, fontSize: 15, maxWidth: 560, margin: '0 auto' }}>
            Mengenal lebih dalam Badan Eksekutif Mahasiswa Fakultas Teknologi Industri dan Rekayasa Sistem — Institut Teknologi Sepuluh Nopember.
          </p>
        </div>
      </section>

      {/* History */}
      <section style={{ padding: '20px 24px 80px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <FadeIn>
            <div className="lg" style={{ display: 'inline-block', borderRadius: 9999, padding: '5px 14px', marginBottom: 24, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Sejarah FTIRS</div>
            <h2 className="heading" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff', marginBottom: 28, lineHeight: 0.95 }}>
              Dari 1957 hingga hari ini.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {[
                { year: '17 Agustus 1957', title: 'Yayasan Pusat Tenaga Teknik (YPTT)', body: 'FTIRS ITS bermula dari pendirian Yayasan Pusat Tenaga Teknik (YPTT) pada 17 Agustus 1957, bertepatan dengan Hari Kemerdekaan Indonesia. Lembaga ini didirikan untuk memenuhi kebutuhan tenaga ahli teknik dalam mendukung pembangunan nasional.' },
                { year: '10 November 1957', title: 'Resmi Berdiri sebagai PTT', body: 'Pada tanggal 10 November 1957, bertepatan dengan Hari Pahlawan, lembaga ini resmi beroperasi sebagai Perguruan Tinggi Teknik (PTT) yang kemudian berkembang menjadi Institut Teknologi Sepuluh Nopember (ITS).' },
                { year: 'Era Modern', title: 'Transformasi Menjadi FTIRS', body: 'Dalam perkembangannya, fakultas teknik ITS berkembang dan direstrukturisasi. Fakultas Teknologi Industri (FTI) kemudian diperluas menjadi Fakultas Teknologi Industri dan Rekayasa Sistem (FTIRS), menaungi 5 departemen dengan 6 program studi yang kini mengabdi untuk ~6.000 mahasiswa aktif.' },
              ].map((h, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div style={{ display: 'flex', gap: 24 }}>
                    <div style={{ flexShrink: 0, textAlign: 'right', width: 140 }}>
                      <div style={{ fontSize: 11, color: '#dc2626', fontWeight: 600, marginBottom: 2 }}>{h.year}</div>
                    </div>
                    <div style={{ borderLeft: '2px solid rgba(220,38,38,0.3)', paddingLeft: 24, paddingBottom: 24 }}>
                      <h4 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 10 }}>{h.title}</h4>
                      <p style={{ ...BODY_TEXT, fontSize: 14 }}>{h.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision Mission */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <div className="lg" style={{ display: 'inline-block', borderRadius: 9999, padding: '5px 14px', marginBottom: 24, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Visi & Misi BEM FTIRS</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
              <div className="lg" style={{ borderRadius: 20, padding: '32px' }}>
                <div style={{ width: 32, height: 32, marginBottom: 16, color: 'rgba(255,255,255,0.85)' }}>
                  <AppIcon name="target" size={32} />
                </div>
                <h3 className="heading" style={{ fontSize: 22, color: '#fff', marginBottom: 16 }}>Visi</h3>
                <p style={{ ...BODY_TEXT, fontSize: 14, lineHeight: 1.85 }}>
                  Mewujudkan BEM FTIRS ITS sebagai organisasi mahasiswa yang progresif, inklusif, dan berdampak nyata dalam meningkatkan kualitas kehidupan akademik dan non-akademik mahasiswa Indsys menuju Indonesia Emas 2045.
                </p>
              </div>
              <div className="lg" style={{ borderRadius: 20, padding: '32px' }}>
                <div style={{ width: 32, height: 32, marginBottom: 16, color: 'rgba(255,255,255,0.85)' }}>
                  <AppIcon name="rocket" size={32} />
                </div>
                <h3 className="heading" style={{ fontSize: 22, color: '#fff', marginBottom: 16 }}>Misi</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Mengawal dan memperjuangkan kebijakan yang berpihak kepada mahasiswa',
                    'Memfasilitasi pengembangan kapasitas dan kompetensi mahasiswa Indsys',
                    'Membangun jaringan kolaborasi lintas institusi dan industri',
                    'Menyelenggarakan program sosial yang bermakna bagi masyarakat',
                    'Menjaga transparansi dan akuntabilitas dalam tata kelola organisasi',
                  ].map((m, i) => (
                    <li key={i} style={{ ...BODY_TEXT, fontSize: 13, marginBottom: 10, display: 'flex', gap: 8 }}>
                      <span style={{ color: '#dc2626', flexShrink: 0 }}>▸</span>{m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <div className="lg" style={{ display: 'inline-block', borderRadius: 9999, padding: '5px 14px', marginBottom: 24, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Nilai Organisasi</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 0 }}>
              {[
                { icon: 'fire' as AppIconName, title: 'Integritas', desc: 'Kami berkomitmen pada kejujuran, transparansi, dan akuntabilitas dalam setiap aspek kepengurusan.' },
                { icon: 'bulb' as AppIconName, title: 'Inovasi', desc: 'Kami mendorong ide-ide segar dan solusi kreatif dalam menghadapi tantangan mahasiswa modern.' },
                { icon: 'handshake' as AppIconName, title: 'Inklusivitas', desc: 'Kami menjamin setiap mahasiswa FTIRS, tanpa terkecuali, mendapatkan kesempatan yang sama.' },
                { icon: 'sprout' as AppIconName, title: 'Keberlanjutan', desc: 'Kami merancang program yang berdampak jangka panjang untuk generasi mahasiswa FTIRS berikutnya.' },
              ].map((v, i) => (
                <FadeIn key={v.title} delay={i * 0.1}>
                  <div className="lg card-hover" style={{ borderRadius: 18, padding: '24px' }}>
                    <div style={{ width: 32, height: 32, marginBottom: 14, color: 'rgba(255,255,255,0.85)' }}>
                      <AppIcon name={v.icon} size={32} />
                    </div>
                    <h4 className="heading" style={{ fontSize: 19, color: '#fff', marginBottom: 10 }}>{v.title}</h4>
                    <p style={{ ...BODY_TEXT, fontSize: 13, lineHeight: 1.65 }}>{v.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* External links */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn>
            <div className="lg" style={{ display: 'inline-block', borderRadius: 9999, padding: '5px 14px', marginBottom: 24, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Tautan Eksternal</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              {[
                { name: 'Website Resmi FTIRS ITS', url: BEM_FTIRS_LINKS.ftirsIts, desc: 'Portal informasi resmi Fakultas Teknologi Industri dan Rekayasa Sistem ITS' },
                { name: 'Instagram BEM FTIRS', url: BEM_FTIRS_LINKS.instagram, desc: 'Ikuti berita dan kegiatan BEM FTIRS ITS di Instagram' },
                { name: 'LinkedIn BEM FTIRS', url: BEM_FTIRS_LINKS.linkedin, desc: 'Jejaring resmi BEM FTIRS di LinkedIn' },
              ].map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div className="lg card-hover" style={{ borderRadius: 16, padding: '22px 24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                      <h4 style={{ fontSize: 14, fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>{link.name}</h4>
                      <ExternalLink size={14} color="rgba(220,38,38,0.7)" style={{ flexShrink: 0 }} />
                    </div>
                    <p style={{ ...BODY_TEXT, fontSize: 12 }}>{link.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
