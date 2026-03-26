import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { BlurText } from '../components/ui/BlurText';
import { FadeIn } from '../components/ui/FadeIn';
import { Orb } from '../components/ui/Orb';

export const DIVISIONS = [
  {
    slug: 'kesekretariatan',
    name: 'Kesekretariatan',
    icon: '📋',
    desc: 'Mengelola administrasi, dokumentasi, surat-menyurat, dan koordinasi organisasi BEM FTIRS ITS.',
    color: 'linear-gradient(135deg, #374151 0%, #111827 100%)',
    about: 'Divisi Kesekretariatan adalah tulang punggung administratif BEM FTIRS ITS. Kami memastikan setiap dokumentasi, surat resmi, dan koordinasi antar divisi berjalan dengan tertib dan profesional.',
    vision: 'Menjadi pusat administrasi yang tertib, transparan, dan efisien demi mendukung seluruh program BEM FTIRS.',
    mission: ['Mengelola arsip dan dokumentasi organisasi secara sistematis', 'Memfasilitasi komunikasi dan koordinasi internal BEM', 'Menyusun notulensi rapat dan laporan kegiatan', 'Mengurus administrasi surat-menyurat resmi'],
    programs: [
      { name: 'Sistem Arsip Digital BEM', desc: 'Digitalisasi seluruh arsip dokumen BEM menggunakan Google Workspace untuk kemudahan akses dan keamanan data.' },
      { name: 'SOP Administrasi', desc: 'Penyusunan Standar Operasional Prosedur (SOP) administrasi yang komprehensif untuk standarisasi layanan.' },
      { name: 'Indsys Administration Award', desc: 'Penghargaan internal untuk divisi/himpunan dengan administrasi terbaik dan terlengkap.' },
      { name: 'Pelatihan Administrasi Perkantoran', desc: 'Workshop administrasi perkantoran dan kearsipan untuk seluruh pengurus BEM FTIRS.' },
    ],
    team: ['Aditya Nugraha', 'Bunga Arum Sari', 'Cahyo Pratama', 'Dewi Lestari', 'Efan Kurniawan', 'Farah Amelia'],
  },
  {
    slug: 'keuangan',
    name: 'Keuangan',
    icon: '💰',
    desc: 'Mengatur anggaran, keuangan, dan laporan keuangan BEM FTIRS secara transparan dan akuntabel.',
    color: 'linear-gradient(135deg, #059669 0%, #065f46 100%)',
    about: 'Divisi Keuangan bertanggung jawab atas seluruh aspek pengelolaan keuangan BEM FTIRS ITS. Kami memastikan anggaran digunakan secara efektif, efisien, dan dapat dipertanggungjawabkan kepada seluruh mahasiswa FTIRS.',
    vision: 'Terwujudnya pengelolaan keuangan BEM FTIRS yang transparan, akuntabel, dan berkelanjutan.',
    mission: ['Menyusun Rencana Anggaran Belanja (RAB) yang realistis dan terukur', 'Mengelola kas dan aset BEM secara tertib', 'Menyampaikan laporan keuangan secara berkala dan transparan', 'Mengawasi penggunaan anggaran setiap divisi'],
    programs: [
      { name: 'Dashboard Keuangan BEM', desc: 'Platform digital untuk monitoring anggaran dan pengeluaran BEM secara real-time yang dapat diakses oleh seluruh pengurus.' },
      { name: 'Audit Internal Keuangan', desc: 'Audit keuangan internal setiap semester untuk memastikan akuntabilitas penggunaan dana organisasi.' },
      { name: 'Pelatihan Literasi Keuangan', desc: 'Seminar dan workshop literasi keuangan untuk mahasiswa FTIRS, mulai dari budgeting pribadi hingga investasi.' },
      { name: 'Laporan Keuangan Terbuka', desc: 'Publikasi laporan keuangan BEM secara transparan kepada seluruh mahasiswa FTIRS melalui media digital.' },
    ],
    team: ['Gita Pramesti', 'Hendra Saputra', 'Indah Permata', 'Jaka Satria', 'Kirana Dewi', 'Lukman Hakim'],
  },
  {
    slug: 'hubungan-luar',
    name: 'Hubungan Luar',
    icon: '🌐',
    desc: 'Membangun jejaring dan kemitraan strategis lintas institusi, industri, dan organisasi mahasiswa.',
    color: 'linear-gradient(135deg, #0891b2 0%, #164e63 100%)',
    about: 'Divisi Hubungan Luar adalah jembatan BEM FTIRS ITS dengan dunia luar. Kami membangun kemitraan strategis dengan perusahaan, instansi pemerintah, LSM, dan organisasi mahasiswa lain untuk memperluas dampak program BEM.',
    vision: 'Membangun ekosistem jaringan yang kuat dan bermakna bagi mahasiswa FTIRS dalam skala nasional dan internasional.',
    mission: ['Membangun dan memelihara hubungan baik dengan mitra strategis', 'Menjalin kerjasama dengan BEM-F dan organisasi mahasiswa lain', 'Mencari peluang beasiswa dan magang untuk mahasiswa FTIRS', 'Mewakili BEM FTIRS dalam forum-forum nasional'],
    programs: [
      { name: 'Indsys Industry Visit', desc: 'Program kunjungan industri ke perusahaan-perusahaan terkemuka untuk memperluas wawasan mahasiswa.' },
      { name: 'Forum BEM-F Nusantara', desc: 'Inisiasi forum diskusi dan kolaborasi antara BEM Fakultas Teknik se-Indonesia.' },
      { name: 'MoU Beasiswa & Magang', desc: 'Penandatanganan MoU dengan 10+ perusahaan untuk program beasiswa dan magang eksklusif mahasiswa FTIRS.' },
      { name: 'International Student Exchange', desc: 'Fasilitasi program pertukaran mahasiswa dengan universitas teknik di luar negeri.' },
      { name: 'Alumni Connect', desc: 'Program koneksi mahasiswa aktif dengan alumni FTIRS yang berkarier di berbagai bidang industri.' },
    ],
    team: ['Maya Sari', 'Naufal Akbar', 'Oktavia Putri', 'Pandu Wicaksono', 'Qisthi Amara', 'Rafi Ramadan', 'Sinta Dewi', 'Taufiq Rahman'],
  },
  {
    slug: 'kajian-strategis',
    name: 'Kajian Strategis & Advokasi',
    icon: '🔍',
    desc: 'Menganalisis dan mengawal isu-isu kritis yang berdampak bagi mahasiswa FTIRS dan Indonesia.',
    color: 'linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)',
    about: 'Divisi Kajian Strategis dan Advokasi adalah think-tank BEM FTIRS ITS. Kami mengkaji isu-isu strategis yang berdampak kepada mahasiswa, merumuskan rekomendasi kebijakan, dan mengawal implementasinya bersama institusi.',
    vision: 'Menjadi divisi kajian yang kredibel, kritis, dan konstruktif dalam mewujudkan kebijakan yang berpihak kepada mahasiswa.',
    mission: ['Mengkaji dan menganalisis isu akademik dan non-akademik mahasiswa', 'Menyusun position paper dan policy brief', 'Mengawal proses advokasi kebijakan kepada institusi', 'Mendidik mahasiswa tentang hak dan kewajiban akademik'],
    programs: [
      { name: 'Indsys Policy Watch', desc: 'Program monitoring kebijakan akademik ITS dan dampaknya terhadap mahasiswa FTIRS secara berkala.' },
      { name: 'Diskusi Publik FTIRS', desc: 'Forum diskusi terbuka bulanan menghadirkan narasumber ahli untuk membahas isu-isu strategis.' },
      { name: 'Kajian Kurikulum Merdeka', desc: 'Kajian mendalam dan advokasi implementasi Kurikulum Merdeka di lingkungan FTIRS ITS.' },
      { name: 'Legal Aid Mahasiswa', desc: 'Layanan konsultasi dan pendampingan hukum gratis untuk mahasiswa yang menghadapi masalah akademik.' },
    ],
    team: ['Umar Abdullah', 'Vina Damayanti', 'Wahyu Pratama', 'Xena Putri', 'Yoga Saputra', 'Zara Amelia'],
  },
  {
    slug: 'psdm',
    name: 'Pengembangan SDM',
    icon: '🎯',
    desc: 'Pengembangan sumber daya dan kompetensi seluruh anggota BEM FTIRS ITS secara holistik.',
    color: 'linear-gradient(135deg, #d97706 0%, #92400e 100%)',
    about: 'Divisi Pengembangan Sumber Daya Manusia (PSDM) bertanggung jawab atas pertumbuhan dan pengembangan seluruh anggota BEM FTIRS. Kami merancang program pelatihan, mentoring, dan evaluasi untuk memastikan setiap pengurus BEM tumbuh optimal.',
    vision: 'Terbentuknya sumber daya manusia BEM FTIRS yang unggul, berkarakter, dan siap menjadi pemimpin masa depan.',
    mission: ['Merancang program orientasi dan onboarding anggota baru', 'Menyelenggarakan pelatihan kepemimpinan dan manajemen', 'Melaksanakan sistem mentoring antar anggota', 'Mengelola evaluasi kinerja pengurus BEM'],
    programs: [
      { name: 'Leadership Camp Indsys', desc: 'Pelatihan kepemimpinan intensif 3 hari di luar kota untuk seluruh pengurus BEM FTIRS.' },
      { name: 'Mentoring BEM', desc: 'Program mentoring terstruktur antara pengurus senior dan junior untuk transfer pengetahuan dan pengalaman.' },
      { name: 'Indsys Skill Up', desc: 'Serangkaian workshop pengembangan hard skill dan soft skill: public speaking, project management, dan design thinking.' },
      { name: 'Annual Review BEM', desc: 'Evaluasi kinerja tahunan seluruh pengurus BEM dengan sistem penilaian 360° yang komprehensif.' },
    ],
    team: ['Alif Budianto', 'Bella Kusuma', 'Candra Wijaya', 'Dina Pratiwi', 'Eko Santoso', 'Fauzi Ramdan'],
  },
  {
    slug: 'kewirausahaan',
    name: 'Kewirausahaan',
    icon: '💼',
    desc: 'Mendorong jiwa entrepreneurship dan kemandirian ekonomi mahasiswa FTIRS melalui program inovatif.',
    color: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
    about: 'Divisi Kewirausahaan hadir untuk menumbuhkan semangat entrepreneurship di kalangan mahasiswa FTIRS. Kami memfasilitasi ide bisnis mahasiswa menjadi startup nyata melalui mentoring, pendanaan awal, dan jaringan investor.',
    vision: 'Mewujudkan ekosistem kewirausahaan yang dinamis di FTIRS dan mencetak wirausahawan muda Indonesia yang tangguh.',
    mission: ['Menyelenggarakan program inkubasi startup mahasiswa', 'Memfasilitasi akses pendanaan dan investor untuk startup mahasiswa', 'Mengembangkan jaringan wirausahawan alumni FTIRS', 'Menyelenggarakan kompetisi bisnis mahasiswa'],
    programs: [
      { name: 'Indsys Startup Incubator', desc: 'Program inkubasi 3 bulan untuk startup mahasiswa FTIRS dengan mentoring dari pengusaha dan investor berpengalaman.' },
      { name: 'Business Plan Competition', desc: 'Kompetisi rencana bisnis tingkat nasional dengan hadiah total Rp 50 juta dan kesempatan pitching ke investor.' },
      { name: 'Bazar FTIRS', desc: 'Bazar produk dan jasa mahasiswa FTIRS yang diselenggarakan setiap semester di area kampus ITS.' },
      { name: 'Wirausaha Muda Indsys', desc: 'Forum networking dan sharing session antara wirausahawan muda mahasiswa FTIRS dan alumni sukses.' },
    ],
    team: ['Ghina Fadhilah', 'Hadi Pranoto', 'Imroatun Najwa', 'Joko Susilo', 'Kartika Sari', 'Luki Firmansyah', 'Mia Rahayu'],
  },
  {
    slug: 'sosmas',
    name: 'Sosial Masyarakat',
    icon: '🤲',
    desc: 'Menggerakkan aksi sosial dan pengabdian masyarakat sebagai wujud kepedulian mahasiswa FTIRS.',
    color: 'linear-gradient(135deg, #db2777 0%, #831843 100%)',
    about: 'Divisi Sosial Masyarakat (Sosmas) adalah wujud kepedulian BEM FTIRS kepada masyarakat sekitar. Kami mengorganisir berbagai kegiatan bakti sosial, program pemberdayaan masyarakat, dan inisiatif lingkungan yang berdampak nyata.',
    vision: 'Terwujudnya mahasiswa FTIRS yang peduli, berempati, dan berkontribusi nyata bagi kesejahteraan masyarakat.',
    mission: ['Menyelenggarakan program bakti sosial yang berkelanjutan', 'Membangun hubungan baik dengan masyarakat sekitar ITS', 'Mendorong kepedulian lingkungan di kalangan mahasiswa', 'Mengelola program beasiswa internal BEM FTIRS'],
    programs: [
      { name: 'Beasiswa FTIRS Peduli', desc: 'Program beasiswa internal untuk mahasiswa FTIRS yang membutuhkan, didanai dari kegiatan wirausaha BEM.' },
      { name: 'BEM FTIRS Goes to School', desc: 'Program sosialisasi ke SMA/SMK di Surabaya untuk menginspirasi siswa dan mengenalkan dunia teknik.' },
      { name: 'Bakti Sosial Ramadan', desc: 'Kegiatan berbagi sembako dan santunan kepada masyarakat kurang mampu di lingkungan sekitar ITS.' },
      { name: 'Indsys Green Campus', desc: 'Program penghijauan dan pengelolaan sampah untuk mewujudkan kampus FTIRS yang bersih dan hijau.' },
    ],
    team: ['Nanda Oktaviani', 'Odi Setiawan', 'Prita Andini', 'Qodri Maulana', 'Ratih Kusuma', 'Surya Wijaya'],
  },
  {
    slug: 'medkominfo',
    name: 'Media, Komunikasi & Informasi',
    icon: '📱',
    desc: 'Mengelola komunikasi, konten kreatif, dan branding digital BEM FTIRS ITS untuk seluruh mahasiswa.',
    color: 'linear-gradient(135deg, #0284c7 0%, #0c4a6e 100%)',
    about: 'Divisi Media, Komunikasi, dan Informasi (Medkominfo) adalah juru bicara dan kreator konten BEM FTIRS ITS. Kami membangun identitas digital BEM yang kuat, menyebarkan informasi penting, dan menciptakan konten yang inspiratif.',
    vision: 'Mewujudkan BEM FTIRS sebagai organisasi dengan komunikasi digital yang profesional, kreatif, dan terpercaya.',
    mission: ['Mengelola seluruh platform media sosial BEM FTIRS', 'Memproduksi konten kreatif yang informatif dan inspiratif', 'Meliput dan mendokumentasikan seluruh kegiatan BEM', 'Membangun dan menjaga branding identitas BEM FTIRS'],
    programs: [
      { name: 'Indsys Creative Studio', desc: 'Studio produksi konten digital BEM FTIRS untuk foto, video, desain grafis, dan podcast.' },
      { name: 'FTIRS Media Award', desc: 'Penghargaan tahunan untuk konten terbaik yang diproduksi oleh mahasiswa FTIRS di berbagai platform.' },
      { name: 'Digital Literacy Workshop', desc: 'Workshop literasi digital dan pembuatan konten kreatif untuk mahasiswa FTIRS.' },
      { name: 'Indsys Podcast', desc: 'Podcast mingguan menghadirkan diskusi inspiratif bersama tokoh-tokoh berpengaruh alumni dan akademisi ITS.' },
    ],
    team: ['Tika Wulandari', 'Ujang Permadi', 'Vira Salsabila', 'Wulan Rahayu', 'Xander Putra', 'Yeni Astuti', 'Zaki Ramadhan', 'Amel Sari'],
  },
  {
    slug: 'olahraga-seni',
    name: 'Olahraga, Seni & Budaya',
    icon: '🎨',
    desc: 'Memfasilitasi kegiatan olahraga, seni, dan budaya untuk menjaga keseimbangan mahasiswa FTIRS.',
    color: 'linear-gradient(135deg, #9333ea 0%, #4c1d95 100%)',
    about: 'Divisi Olahraga, Seni, dan Budaya hadir untuk memastikan mahasiswa FTIRS tidak hanya unggul secara akademik, tetapi juga sehat jasmani dan kaya ekspresi seni-budaya. Kami mengorganisir berbagai kegiatan yang merayakan keberagaman bakat mahasiswa Indsys.',
    vision: 'Terwujudnya kehidupan kampus yang sehat, dinamis, dan kaya akan ekspresi seni dan budaya mahasiswa FTIRS.',
    mission: ['Menyelenggarakan kompetisi olahraga antar departemen/himpunan', 'Memfasilitasi komunitas seni dan budaya mahasiswa', 'Melestarikan seni dan budaya daerah dalam kehidupan kampus', 'Mendukung mahasiswa berprestasi di bidang seni dan olahraga'],
    programs: [
      { name: 'Indsys Cup', desc: 'Turnamen olahraga antar departemen tahunan meliputi futsal, basket, badminton, volei, dan esports.' },
      { name: 'Festival Seni Indsys', desc: 'Pagelaran seni tahunan menampilkan pertunjukan musik, tari, teater, dan pameran seni mahasiswa FTIRS.' },
      { name: 'Sanggar Seni Mahasiswa', desc: 'Program sanggar seni mingguan: tari tradisional, paduan suara, band, dan seni rupa untuk mahasiswa FTIRS.' },
      { name: 'Indsys Sport Day', desc: 'Hari olahraga bersama seluruh civitas akademika FTIRS setiap bulan untuk menjaga kesehatan dan kebersamaan.' },
    ],
    team: ['Bayu Setiawan', 'Cici Putri', 'Doni Kurniawan', 'Elsa Amara', 'Farel Putra', 'Gita Nirmala'],
  },
  {
    slug: 'minat-bakat',
    name: 'Minat & Bakat',
    icon: '⭐',
    desc: 'Mengembangkan potensi non-akademis dan minat khusus mahasiswa FTIRS di berbagai bidang.',
    color: 'linear-gradient(135deg, #b45309 0%, #451a03 100%)',
    about: 'Divisi Minat dan Bakat bertugas menemukan, mengembangkan, dan memfasilitasi bakat-bakat unik mahasiswa FTIRS yang belum terakomodasi di wadah yang sudah ada. Kami percaya setiap mahasiswa memiliki potensi luar biasa yang menunggu untuk dikembangkan.',
    vision: 'Terwujudnya ekosistem pengembangan bakat yang inklusif dan komprehensif bagi seluruh mahasiswa FTIRS ITS.',
    mission: ['Memetakan dan mengembangkan bakat mahasiswa FTIRS', 'Memfasilitasi komunitas minat dan bakat yang beragam', 'Menghubungkan mahasiswa berbakat dengan kesempatan kompetisi', 'Mendukung prestasi mahasiswa di bidang non-akademik'],
    programs: [
      { name: 'Talent Mapping FTIRS', desc: 'Program pemetaan bakat komprehensif untuk seluruh mahasiswa baru FTIRS menggunakan assessment berbasis AI.' },
      { name: 'Kompetisi Bakat Indsys', desc: 'Kompetisi bakat tahunan menampilkan berbagai kategori: sains, teknologi, seni, hingga bakat unik lainnya.' },
      { name: 'Community Builder', desc: 'Program pembentukan dan pembinaan komunitas minat baru berdasarkan kebutuhan dan minat mahasiswa.' },
      { name: 'Delegation Support', desc: 'Dukungan dan fasilitas bagi mahasiswa FTIRS yang mewakili ITS dalam kompetisi dan festival nasional/internasional.' },
    ],
    team: ['Hana Safitri', 'Ilham Prayoga', 'Jasmine Putri', 'Kevin Andika', 'Laila Nur', 'Maura Anindita'],
  },
];

const BODY_TEXT: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  color: 'rgba(255,255,255,0.5)',
  lineHeight: 1.75,
};

export default function Divisi() {
  return (
    <div style={{ position: 'relative', zIndex: 1, background: 'transparent', color: '#fff', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '160px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <Orb color="rgba(220,38,38,0.7)" x="50%" y="0%" size="700px" opacity={0.1} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, transparent, #000)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto' }}>
          <div className="lg" style={{ display: 'inline-block', borderRadius: 9999, padding: '5px 14px', marginBottom: 24, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
            Struktur Organisasi
          </div>
          <BlurText
            text="10 Divisi BEM FTIRS"
            className="heading"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', lineHeight: 0.9, letterSpacing: '-2px', marginBottom: 24, display: 'block' }}
          />
          <p style={{ ...BODY_TEXT, fontSize: 15, maxWidth: 560, margin: '0 auto' }}>
            BEM FTIRS ITS memiliki 10 divisi yang bergerak bersama untuk melayani 6.000+ mahasiswa Indsys. Setiap divisi memiliki peran strategis yang saling melengkapi.
          </p>
        </div>
      </section>

      {/* Divisions Grid */}
      <section style={{ padding: '20px 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
            {DIVISIONS.map((div, i) => (
              <FadeIn key={div.slug} delay={i * 0.05}>
                <Link to={`/divisi/${div.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="lg card-hover" style={{ borderRadius: 18, padding: '24px', height: '100%', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: div.color }} />
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 32, flexShrink: 0, lineHeight: 1 }}>{div.icon}</span>
                      <div style={{ flex: 1 }}>
                        <h3 className="heading" style={{ fontSize: 18, color: '#fff', marginBottom: 6, lineHeight: 1.1 }}>{div.name}</h3>
                        <p style={{ ...BODY_TEXT, fontSize: 12, lineHeight: 1.55 }}>{div.desc}</p>
                      </div>
                    </div>
                    <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end' }}>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: 4 }}>
                        Lihat detail <ChevronRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
