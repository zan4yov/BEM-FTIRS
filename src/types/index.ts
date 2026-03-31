export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'internal' | 'eksternal' | 'akademik' | 'sosial';
  location: string;
  isUpcoming: boolean;
  imageColor: string;
  image?: string;
}

export interface Berita {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  author: string;
  publishedAt: string;
  category: 'kegiatan' | 'prestasi' | 'pengumuman' | 'sosial';
  imageColor: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageColor: string;
  aspectRatio?: string;
}

export interface StaffCode {
  id: string;
  code: string;
  divisi: string;
  spreadsheetUrl: string;
  createdAt: string;
}
