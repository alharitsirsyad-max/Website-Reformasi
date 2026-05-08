export interface MetaData {
  brandName: string;
  tagline: string;
  kelas: string;
  mapel: string;
  tahun: string;
}

export interface HeroData {
  tagText: string;
  judul: string;
  aksenKata: string;
  deskripsi: string;
  statistik: string[];
}

export interface LatarBelakangItem {
  id: string;
  judul: string;
  deskripsi: string;
  icon: string;
}

export interface KronologiItem {
  id: string;
  tanggal: string;
  judul: string;
  deskripsi: string;
  tag: string;
  highlight: boolean;
}

export interface PerjuanganData {
  lead: string;
  kutipan: string;
  items: {
    id: string;
    judul: string;
    deskripsi: string;
  }[];
}

export interface TokohItem {
  id: string;
  nama: string;
  peran: string;
  inisial: string;
  deskripsi: string;
}

export interface DampakItem {
  id: string;
  judul: string;
  deskripsi: string;
  tag: string;
  icon: string;
  warna: 'red' | 'gold' | 'teal';
}

export interface ReformasiKiniItem {
  id: string;
  status: 'baik' | 'proses' | 'tantangan';
  judul: string;
  deskripsi: string;
}

export interface MediaItem {
  id: string;
  judul: string;
  deskripsi: string;
  sumber: string;
  thumb: string;
  url: string;
}

export interface ReferensiItem {
  id: string;
  penulis: string;
  judul: string;
  penerbit: string;
  tahun: string;
  url: string;
}

export interface TimItem {
  id: string;
  nama: string;
  nis: string;
  peran: string;
}
