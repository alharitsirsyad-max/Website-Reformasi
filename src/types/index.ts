/* =====================================================
   REFORMASI INDONESIA — TypeScript Interfaces
   ===================================================== */

export type KategoriKebijakan =
  | 'Politik'
  | 'Ekonomi'
  | 'Sosial'
  | 'Hukum'
  | 'Pertahanan'
  | 'Pendidikan'
  | 'Luar Negeri'
  | 'Infrastruktur'
  | 'Keamanan'
  | 'Konstitusi';

export interface Kebijakan {
  ikon: string;
  judul: string;
  deskripsi: string;
  kategori: KategoriKebijakan;
  dampak: string;
  kontroversial?: boolean;
  refUrl?: string;
}

export interface PresidentEvent {
  tanggal: string;
  judul: string;
  deskripsi: string;
  tag?: string;
  highlight?: boolean;
  gambarSrc?: string;
  gambarKeterangan?: string;
  gambarLisensi?: string;
  refLabel?: string;
  refUrl?: string;
  videoLabel?: string;
  videoUrl?: string;
}

export type LayoutType = 'A' | 'B' | 'Aflip' | 'C' | 'Cflip' | 'Balt' | 'D' | 'Dflip' | 'E';

export interface President {
  id: string;
  layout: LayoutType;
  periode: string;
  jabatan: string;
  nama: string;
  namaLengkap: string;
  fotoUrl: string;
  fotoGallery?: string[]; // Array of photo URLs for carousel
  fotoKeterangan: string;
  fotoLisensi: string;
  warnaTema: string;
  fallbackGradient: string;
  quote: string;
  quoteSumber: string;
  ringkasan: string;
  kebijakan: Kebijakan[];
  events: PresidentEvent[];
  statusCards?: {
    tercapai: string[];
    berjalan: string[];
    dinantikan: string[];
  };
}

export interface KrisisEvent {
  tahun: string;
  judul: string;
  deskripsi: string;
  highlight?: boolean;
  tag?: string;
}

export interface LatarBelakangKartu {
  id: string;
  ikon: string;
  judul: string;
  ringkasan: string;
  tahun?: string;
  // Data untuk modal
  foto?: string;
  fotoKeterangan?: string;
  latarBelakang: string;
  dampak: string;
  referensi: {
    judul: string;
    url: string;
  }[];
}

export interface PraReformasi {
  judul: string;
  deskripsi: string;
  kartu: LatarBelakangKartu[];
  // Konten tambahan
  apaItuReformasi?: {
    pengantar: string;
    quote: {
      teks: string;
      sumber: string;
    };
    diperjuangkan: string[];
    ditolak: string[];
  };
  citaCita?: {
    timeline: {
      label: string;
      deskripsi: string;
    }[];
    tujuan: {
      judul: string;
      ikon: string;
      deskripsi: string;
    }[];
  };
  konteksSejarah?: {
    paragraf: string;
    fakta: {
      label: string;
      nilai: string;
    }[];
  };
}

export interface DampakItem {
  ikon: string;
  judul: string;
  deskripsi: string;
  nilai?: string;
}

export interface KiniItem {
  judul: string;
  deskripsi: string;
  status: 'positif' | 'negatif' | 'netral';
  ikon: string;
}

export interface MediaItem {
  judul: string;
  deskripsi: string;
  videoId: string;
  channel?: string;
}

export interface ReferensiItem {
  judul: string;
  penulis?: string;
  tahun?: string;
  url: string;
  jenis: 'Wikipedia' | 'Buku' | 'Jurnal' | 'Berita' | 'Pemerintah';
}

export interface Anggota {
  nama: string;
  peran: string;
  presensi?: string;
}

export interface Tim {
  mapel: string;
  kelas: string;
  sekolah: string;
  tahunAjaran: string;
  anggota: Anggota[];
}

export interface NavSection {
  id: string;
  label: string;
  amber?: boolean;
}
