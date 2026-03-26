import type { Event, Berita, GalleryItem, StaffCode } from '../types';

export const seedEvents: Event[] = [
  {
    id: 'evt-001',
    title: 'FTIRS Dedication Time 2025',
    description: 'Program orientasi dan pengenalan kehidupan kampus bagi mahasiswa baru FTIRS ITS. Kegiatan ini mencakup pengenalan budaya akademik, fasilitas kampus, dan berbagai organisasi mahasiswa di FTIRS.',
    date: '2025-08-18T08:00:00',
    category: 'internal',
    location: 'Gedung FTIRS ITS, Sukolilo Surabaya',
    isUpcoming: true,
    imageColor: 'linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)',
  },
  {
    id: 'evt-002',
    title: 'Kontes Robot Indonesia (KRI) FTIRS',
    description: 'Kompetisi robot tahunan yang mempertemukan tim-tim terbaik dari berbagai perguruan tinggi se-Indonesia. BEM FTIRS berperan aktif dalam mendukung tim robot ITS melalui kegiatan ini.',
    date: '2025-09-12T09:00:00',
    category: 'akademik',
    location: 'Grha ITS, Surabaya',
    isUpcoming: true,
    imageColor: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)',
  },
  {
    id: 'evt-003',
    title: 'Seminar Nasional Ketahanan Pangan',
    description: 'Seminar nasional yang menghadirkan pakar ketahanan pangan, industri, dan akademisi untuk membahas inovasi di bidang pangan dalam menghadapi tantangan global.',
    date: '2025-09-25T13:00:00',
    category: 'akademik',
    location: 'Ruang Seminar FTIRS, Lantai 6',
    isUpcoming: true,
    imageColor: 'linear-gradient(135deg, #059669 0%, #065f46 100%)',
  },
  {
    id: 'evt-004',
    title: 'BEM FTIRS Goes to School',
    description: 'Program outreach ke sekolah-sekolah menengah atas di Surabaya untuk mengenalkan dunia teknik dan industri kepada siswa SMA/SMK serta menginspirasi mereka untuk melanjutkan ke jenjang yang lebih tinggi.',
    date: '2025-10-05T08:00:00',
    category: 'sosial',
    location: 'SMA & SMK se-Surabaya',
    isUpcoming: true,
    imageColor: 'linear-gradient(135deg, #d97706 0%, #92400e 100%)',
  },
  {
    id: 'evt-005',
    title: 'Indsys Cup 2025 — Turnamen Olahraga',
    description: 'Kompetisi olahraga antar departemen dan himpunan mahasiswa FTIRS meliputi futsal, basket, badminton, dan esports. Ajang pemersatu mahasiswa Indsys melalui sportivitas.',
    date: '2025-10-18T07:00:00',
    category: 'internal',
    location: 'Lapangan Olahraga ITS & Hall Gymnasium',
    isUpcoming: true,
    imageColor: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
  },
  {
    id: 'evt-006',
    title: 'Workshop Kewirausahaan Mahasiswa',
    description: 'Workshop intensif selama dua hari tentang kewirausahaan, bisnis model canvas, dan pengembangan startup. Dihadiri oleh mentor dari dunia industri dan startup Indonesia.',
    date: '2025-11-08T09:00:00',
    category: 'internal',
    location: 'Aula FTIRS ITS',
    isUpcoming: true,
    imageColor: 'linear-gradient(135deg, #0891b2 0%, #164e63 100%)',
  },
  {
    id: 'evt-007',
    title: 'Advokasi Kebijakan Kurikulum Merdeka',
    description: 'Forum diskusi dan advokasi mahasiswa mengenai implementasi Kurikulum Merdeka di FTIRS ITS. Mahasiswa menyampaikan aspirasi langsung kepada pimpinan fakultas.',
    date: '2025-07-14T10:00:00',
    category: 'internal',
    location: 'Ruang Rapat Dekanat FTIRS',
    isUpcoming: false,
    imageColor: 'linear-gradient(135deg, #dc2626 0%, #450a0a 100%)',
  },
  {
    id: 'evt-008',
    title: 'Festival Seni & Budaya Indsys',
    description: 'Pagelaran seni dan budaya tahunan BEM FTIRS yang menampilkan berbagai pertunjukan: musik, tari, teater, dan pameran karya seni mahasiswa. Merayakan keberagaman budaya Indonesia.',
    date: '2025-07-28T15:00:00',
    category: 'internal',
    location: 'Plaza FTIRS ITS',
    isUpcoming: false,
    imageColor: 'linear-gradient(135deg, #db2777 0%, #831843 100%)',
  },
];

export const seedBerita: Berita[] = [
  {
    id: 'news-001',
    title: 'BEM FTIRS Raih Penghargaan BEM Terbaik ITS 2025',
    excerpt: 'Atas kinerja luar biasa sepanjang tahun 2025, BEM FTIRS ITS berhasil meraih predikat BEM Terbaik tingkat fakultas di Institut Teknologi Sepuluh Nopember.',
    body: `<p>Surabaya, 15 Maret 2025 — BEM FTIRS ITS dengan bangga mengumumkan pencapaian membanggakan: meraih predikat <strong>BEM Terbaik</strong> di tingkat Fakultas dalam ajang penghargaan tahunan ITS Student Awards 2025.</p>

<p>Penghargaan ini diraih atas berbagai pencapaian sepanjang periode kepengurusan, mulai dari program advokasi mahasiswa yang berhasil memperjuangkan perubahan kebijakan kurikulum, suksesnya lebih dari 50 kegiatan kemahasiswaan, hingga inovasi digitalisasi layanan BEM melalui website dan sistem manajemen internal.</p>

<p>"Ini adalah bukti kerja keras seluruh pengurus BEM FTIRS. Kami berterima kasih kepada seluruh mahasiswa FTIRS yang telah mendukung dan berpartisipasi aktif dalam setiap program kami," ujar Ketua BEM FTIRS, dalam sambutannya.</p>

<p>Penilaian dilakukan oleh tim juri independent yang melibatkan akademisi, alumni, dan perwakilan mahasiswa. Kriteria penilaian meliputi kualitas program kerja, partisipasi mahasiswa, transparansi keuangan, dan dampak sosial yang dihasilkan.</p>

<p>Dengan pencapaian ini, BEM FTIRS berkomitmen untuk terus meningkatkan kualitas pelayanan dan program kemahasiswaan di semester berikutnya.</p>`,
    author: 'Tim Media BEM FTIRS',
    publishedAt: '2025-03-15T10:00:00',
    category: 'prestasi',
    imageColor: 'linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)',
  },
  {
    id: 'news-002',
    title: 'Liputan: FTIRS Dedication Time 2025 Sukses Digelar',
    excerpt: 'Program orientasi mahasiswa baru FTIRS ITS berjalan lancar dan meriah. Lebih dari 1.200 mahasiswa baru mengikuti serangkaian kegiatan selama tiga hari.',
    body: `<p>Surabaya, 20 Agustus 2025 — FTIRS Dedication Time (FDT) 2025 resmi ditutup dengan sukses besar. Selama tiga hari pelaksanaan, lebih dari 1.200 mahasiswa baru program sarjana FTIRS ITS mengikuti seluruh rangkaian kegiatan dengan antusias.</p>

<p>FDT tahun ini mengusung tema <em>"Indsys: Bergerak, Bertumbuh, Berdampak"</em> dengan berbagai kegiatan inovatif termasuk seminar wawasan kebangsaan, workshop kepemimpinan, sesi mengenal departemen, dan malam keakraban yang meriah.</p>

<p>Salah satu yang menjadi sorotan adalah sesi "Indsys Got Talent" di malam terakhir, di mana mahasiswa baru memamerkan bakat mereka di hadapan seluruh civitas akademika FTIRS.</p>

<p>"Luar biasa! Antusiasme mahasiswa baru tahun ini sangat tinggi. Mereka aktif dan penuh semangat dalam setiap kegiatan," kata koordinator acara FDT 2025.</p>`,
    author: 'Divisi Medkominfo BEM FTIRS',
    publishedAt: '2025-08-20T14:00:00',
    category: 'kegiatan',
    imageColor: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)',
  },
  {
    id: 'news-003',
    title: 'Mahasiswa FTIRS Borong Medali di KMHE 2025',
    excerpt: 'Tim mahasiswa FTIRS ITS berhasil meraih 3 medali emas dan 2 medali perak dalam Kompetisi Mobil Hemat Energi (KMHE) 2025 yang digelar di Sirkuit Sentul.',
    body: `<p>Bogor, 5 Oktober 2025 — Tim mahasiswa Teknik Mesin dan Teknik Sistem Industri FTIRS ITS membuktikan keunggulan mereka di ajang bergengsi Kompetisi Mobil Hemat Energi (KMHE) 2025.</p>

<p>Dalam kompetisi yang diikuti lebih dari 80 tim dari seluruh Indonesia ini, tim ITS berhasil meraih <strong>3 medali emas</strong> di kategori Prototype Bensin, Prototype Diesel, dan Urban Electric, serta <strong>2 medali perak</strong> di kategori Urban Bensin dan Prototype Hidrogen.</p>

<p>Tim Sapu Angin ITS, yang menjadi andalan dalam kompetisi ini, berhasil mencatatkan efisiensi bahan bakar hingga 1.847 km/liter, memecahkan rekor nasional sebelumnya.</p>

<p>"Ini adalah hasil dari dedikasi dan kerja keras selama berbulan-bulan. Kami bangga bisa mengharumkan nama ITS dan FTIRS di kancah nasional," ungkap kapten tim.</p>`,
    author: 'Tim Media BEM FTIRS',
    publishedAt: '2025-10-06T09:00:00',
    category: 'prestasi',
    imageColor: 'linear-gradient(135deg, #d97706 0%, #92400e 100%)',
  },
  {
    id: 'news-004',
    title: 'BEM FTIRS Luncurkan Program Beasiswa FTIRS Peduli',
    excerpt: 'Sebagai wujud kepedulian terhadap mahasiswa yang membutuhkan, BEM FTIRS meluncurkan program beasiswa internal yang didanai dari hasil kegiatan kewirausahaan BEM.',
    body: `<p>Surabaya, 1 September 2025 — BEM FTIRS ITS dengan bangga meluncurkan program <strong>Beasiswa FTIRS Peduli</strong>, sebuah inisiatif beasiswa internal yang lahir dari semangat gotong royong dan kepedulian sesama mahasiswa Indsys.</p>

<p>Program beasiswa ini didanai dari 20% hasil keuntungan seluruh kegiatan kewirausahaan BEM FTIRS selama satu tahun kepengurusan. Pada batch pertama ini, tersedia 15 slot beasiswa dengan nominal Rp 1.500.000 per penerima.</p>

<p>Kriteria penerima beasiswa meliputi: mahasiswa aktif FTIRS ITS, IPK minimal 3,0, aktif berorganisasi, dan memiliki kondisi ekonomi yang membutuhkan dukungan.</p>

<p>"Kami percaya bahwa keterbatasan ekonomi tidak boleh menjadi penghalang bagi mahasiswa berbakat untuk meraih prestasi terbaik," ujar Kepala Divisi Sosmas BEM FTIRS.</p>`,
    author: 'Divisi Sosmas BEM FTIRS',
    publishedAt: '2025-09-01T11:00:00',
    category: 'sosial',
    imageColor: 'linear-gradient(135deg, #059669 0%, #065f46 100%)',
  },
  {
    id: 'news-005',
    title: 'Pengumuman: Pendaftaran Anggota BEM FTIRS Dibuka',
    excerpt: 'BEM FTIRS ITS resmi membuka pendaftaran anggota baru untuk periode kepengurusan 2025/2026. Seluruh mahasiswa aktif FTIRS ITS diundang untuk bergabung.',
    body: `<p>Surabaya, 10 Februari 2025 — BEM FTIRS ITS dengan resmi mengumumkan pembukaan pendaftaran anggota baru untuk kepengurusan periode 2025/2026.</p>

<p>Pendaftaran dibuka untuk seluruh mahasiswa aktif program sarjana (S1) FTIRS ITS semester 1 hingga semester 6. Tersedia berbagai pilihan divisi sesuai minat dan kompetensi masing-masing.</p>

<p><strong>Alur Pendaftaran:</strong></p>
<ol>
<li>Mengisi formulir pendaftaran online melalui link yang tersedia</li>
<li>Melengkapi berkas: CV, pas foto, dan essay motivasi</li>
<li>Mengikuti sesi wawancara dan tes kompetensi</li>
<li>Pengumuman penerimaan</li>
</ol>

<p>Periode pendaftaran berlangsung dari 10 Februari hingga 28 Februari 2025. Informasi lebih lanjut dapat diakses melalui Instagram resmi BEM FTIRS @bemftirs.its.</p>`,
    author: 'Divisi PSDM BEM FTIRS',
    publishedAt: '2025-02-10T08:00:00',
    category: 'pengumuman',
    imageColor: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
  },
  {
    id: 'news-006',
    title: 'Liputan: Workshop Kewirausahaan Cetak 12 Startup Mahasiswa',
    excerpt: 'Workshop Kewirausahaan yang digelar BEM FTIRS selama dua hari berhasil menghasilkan 12 ide startup yang siap dikembangkan lebih lanjut dengan bimbingan mentor.',
    body: `<p>Surabaya, 10 November 2025 — Workshop Kewirausahaan Mahasiswa yang diselenggarakan oleh Divisi Kewirausahaan BEM FTIRS ITS pada 8-9 November 2025 berhasil melampaui ekspektasi.</p>

<p>Selama dua hari intensif, 120 peserta dari berbagai departemen FTIRS ITS mengikuti sesi materi, mentoring, dan pitching di hadapan panel mentor dari dunia startup dan industri.</p>

<p>Dari 30 tim yang mengikuti sesi pitching akhir, terpilih <strong>12 tim terbaik</strong> yang akan mendapatkan program inkubasi lebih lanjut selama 3 bulan ke depan dengan pendampingan mentor.</p>

<p>Beberapa ide startup yang menarik perhatian juri antara lain: platform digitalisasi UMKM lokal, solusi manajemen energi berbasis IoT untuk industri, dan aplikasi monitoring kualitas udara real-time berbasis sensor murah.</p>`,
    author: 'Divisi Kewirausahaan BEM FTIRS',
    publishedAt: '2025-11-10T16:00:00',
    category: 'kegiatan',
    imageColor: 'linear-gradient(135deg, #0891b2 0%, #164e63 100%)',
  },
];

export const seedGallery: GalleryItem[] = [
  { id: 'gal-001', title: 'FTIRS Dedication Time 2025', category: 'orientasi', imageColor: 'linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)', aspectRatio: '4/3' },
  { id: 'gal-002', title: 'Malam Keakraban FDT 2025', category: 'orientasi', imageColor: 'linear-gradient(135deg, #7f1d1d 0%, #dc2626 60%, #b91c1c 100%)', aspectRatio: '16/9' },
  { id: 'gal-003', title: 'Tim Sapu Angin KMHE 2025', category: 'prestasi', imageColor: 'linear-gradient(135deg, #d97706 0%, #78350f 100%)', aspectRatio: '4/3' },
  { id: 'gal-004', title: 'Podium KMHE — Medali Emas', category: 'prestasi', imageColor: 'linear-gradient(135deg, #ca8a04 0%, #451a03 100%)', aspectRatio: '3/4' },
  { id: 'gal-005', title: 'Workshop Kewirausahaan — Sesi Pitching', category: 'kegiatan', imageColor: 'linear-gradient(135deg, #0891b2 0%, #164e63 100%)', aspectRatio: '16/9' },
  { id: 'gal-006', title: 'Festival Seni & Budaya Indsys', category: 'budaya', imageColor: 'linear-gradient(135deg, #db2777 0%, #831843 100%)', aspectRatio: '4/3' },
  { id: 'gal-007', title: 'Penampilan Tari Tradisional', category: 'budaya', imageColor: 'linear-gradient(135deg, #9333ea 0%, #4c1d95 100%)', aspectRatio: '3/4' },
  { id: 'gal-008', title: 'Indsys Cup 2025 — Final Futsal', category: 'olahraga', imageColor: 'linear-gradient(135deg, #16a34a 0%, #14532d 100%)', aspectRatio: '16/9' },
  { id: 'gal-009', title: 'Juara Turnamen Badminton', category: 'olahraga', imageColor: 'linear-gradient(135deg, #059669 0%, #065f46 100%)', aspectRatio: '4/3' },
  { id: 'gal-010', title: 'BEM FTIRS Goes to School', category: 'sosial', imageColor: 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)', aspectRatio: '4/3' },
  { id: 'gal-011', title: 'Bakti Sosial Ramadan', category: 'sosial', imageColor: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)', aspectRatio: '3/4' },
  { id: 'gal-012', title: 'Pengurus BEM FTIRS 2025', category: 'internal', imageColor: 'linear-gradient(135deg, #dc2626 0%, #1f2937 100%)', aspectRatio: '16/9' },
  { id: 'gal-013', title: 'Rapat Koordinasi Divisi', category: 'internal', imageColor: 'linear-gradient(135deg, #374151 0%, #111827 100%)', aspectRatio: '4/3' },
  { id: 'gal-014', title: 'Seminar Nasional Ketahanan Pangan', category: 'akademik', imageColor: 'linear-gradient(135deg, #065f46 0%, #14532d 100%)', aspectRatio: '16/9' },
  { id: 'gal-015', title: 'Pengumuman Beasiswa FTIRS Peduli', category: 'sosial', imageColor: 'linear-gradient(135deg, #b45309 0%, #451a03 100%)', aspectRatio: '4/3' },
];

export const seedStaffCodes: StaffCode[] = [
  { id: 'sc-001', code: 'DIV-KES-001', divisi: 'Kesekretariatan', spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/example-kes', createdAt: '2025-01-15T10:00:00' },
  { id: 'sc-002', code: 'DIV-KEU-001', divisi: 'Keuangan', spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/example-keu', createdAt: '2025-01-15T10:00:00' },
  { id: 'sc-003', code: 'DIV-HUL-001', divisi: 'Hubungan Luar', spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/example-hul', createdAt: '2025-01-15T10:00:00' },
  { id: 'sc-004', code: 'DIV-KSA-001', divisi: 'Kajian Strategis & Advokasi', spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/example-ksa', createdAt: '2025-01-15T10:00:00' },
  { id: 'sc-005', code: 'DIV-PSD-001', divisi: 'Pengembangan SDM', spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/example-psd', createdAt: '2025-01-15T10:00:00' },
  { id: 'sc-006', code: 'DIV-KWU-001', divisi: 'Kewirausahaan', spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/example-kwu', createdAt: '2025-01-15T10:00:00' },
  { id: 'sc-007', code: 'DIV-SOS-001', divisi: 'Sosial Masyarakat', spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/example-sos', createdAt: '2025-01-15T10:00:00' },
  { id: 'sc-008', code: 'DIV-MED-001', divisi: 'Media, Komunikasi & Informasi', spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/example-med', createdAt: '2025-01-15T10:00:00' },
  { id: 'sc-009', code: 'DIV-OLH-001', divisi: 'Olahraga, Seni & Budaya', spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/example-olh', createdAt: '2025-01-15T10:00:00' },
  { id: 'sc-010', code: 'DIV-MIB-001', divisi: 'Minat & Bakat', spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/example-mib', createdAt: '2025-01-15T10:00:00' },
];
