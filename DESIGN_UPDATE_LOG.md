# Log Update Desain — Anti-AI Slop Edition

Dokumen ini mencatat semua perubahan desain yang telah diimplementasikan berdasarkan `Design.md`.

## Tanggal Update
12 Mei 2026

## Perubahan yang Telah Dilakukan

### 1. ✅ Variabel CSS Global (`src/styles/globals.css`)

**Sebelum:**
- Warna: Biru-ungu gradien, warna SaaS generik
- Font: Inter (terlalu umum), Poppins
- Palet: `#6366f1`, `#8B1A1A`, dll

**Sesudah:**
- **Palet Utama dari Referensi Historis:**
  - `--merah-perjuangan: #C0392B` (warna bendera, urgensi)
  - `--putih-arsip: #F5F0E8` (kertas tua, bukan putih bersih)
  - `--hitam-tinta: #1A1A1A` (teks utama)
  - `--krem-dokumen: #EDE5D0` (background sekunder)
  - `--abu-lama: #8C8279` (teks sekunder)
  - `--coklat-arsip: #5C4A35` (aksen subtil)

- **Font dengan Kepribadian:**
  - `--font-display: 'Playfair Display'` (heading, serif editorial)
  - `--font-body: 'Source Serif 4'` (artikel, nyaman dibaca)
  - `--font-ui: 'DM Sans'` (navigasi, UI)
  - `--font-mono: 'JetBrains Mono'` (tanggal, angka)

- **Tipografi:**
  - H1: 48-96px, weight 900, letter-spacing -0.04em
  - H2: 32-64px, weight 700, letter-spacing -0.02em
  - Body: 17px, line-height 1.75
  - Whitespace antar section: 5-8rem (lebih dramatis)

### 2. ✅ Hero Section (`src/components/sections/Hero.tsx` & `.module.css`)

**Sebelum:**
- Background image dengan overlay
- Teks di tengah dengan CTA button
- Layout generik seperti SaaS landing page

**Sesudah:**
- **Garis merah 4px di paling atas** (identitas visual)
- **Layout editorial 60/40:**
  - Kiri: Teks (tag, heading, deskripsi)
  - Kanan: Foto dokumenter dengan caption
- **Strip angka statistik** dengan border tebal
- **Scroll hint subtle** di bawah (bukan tombol besar)
- Foto dengan filter grayscale ringan (0.3)
- Caption dengan border kiri merah

### 3. ✅ Topbar / Navigasi (`src/components/layout/Topbar.module.css`)

**Sebelum:**
- Background putih bersih
- Border tipis abu-abu
- Hover dengan background color

**Sesudah:**
- **Background krem dokumen** (`--krem-dokumen`)
- **Garis merah 2px di paling atas** (seperti koran)
- **Border bawah coklat arsip**
- **Hover: underline merah** (bukan background box)
- Font display untuk brand name
- Navigasi dengan border-bottom saat aktif

### 4. ✅ Card Component (`src/components/ui/Card.tsx` & `.module.css`)

**Sebelum:**
- Rounded corner besar (16px+)
- Icon Lucide di atas heading
- 3 kolom rata sempurna
- Hover shadow lembut

**Sesudah:**
- **Border kiri tebal 4px** (bukan rounded corner gimmick)
- **Hover: border kiri jadi 6px + translateY(-2px)**
- **Tanggal dalam monospace** di atas heading (opsional)
- **Heading: Playfair Display 20px, weight 700**
- **Body: Source Serif 16px**
- **Tidak ada icon** (sesuai panduan)
- Tag dengan border, bukan background solid

### 5. ✅ SectionHead (`src/components/ui/SectionHead.tsx` & `.module.css`)

**Sebelum:**
- Eyebrow kecil dengan font mono
- Garis tipis 2px
- Subtitle 15px

**Sesudah:**
- **Eyebrow: DM Sans 12px, uppercase, letter-spacing 0.08em**
- **Title: Playfair Display 32-48px, weight 700, letter-spacing -0.02em**
- **Garis merah 3px, width 80px**
- **Subtitle: Source Serif 18px, line-height 1.75**
- Margin bottom 4rem (lebih dramatis)

### 6. ✅ EventCard (`src/components/ui/EventCard.module.css`)

**Sebelum:**
- Border tipis seragam
- Rounded corner
- Tanggal kecil dengan font mono

**Sesudah:**
- **Border kiri tebal 4px coklat arsip**
- **Highlight: border kiri merah perjuangan**
- **Tanggal: monospace 13px** (lebih besar, lebih jelas)
- **Title: Playfair Display 18px, weight 700**
- **Body: Source Serif 15px**
- **Link: underline merah** (bukan button)
- Foto dengan filter grayscale ringan

### 7. ✅ KebijakanCard (`src/components/ui/KebijakanCard.module.css`)

**Sebelum:**
- Icon box di atas
- Accent bar 2px di atas
- Kategori dengan background solid

**Sesudah:**
- **Border kiri tebal 4px merah**
- **Tidak ada icon** (sesuai panduan anti-AI slop)
- **Title: Playfair Display 18px, weight 700**
- **Body: Source Serif 15px**
- **Kategori: border dengan warna, bukan background solid**
- Dampak dengan border-top, italic

### 8. ✅ Footer (`src/components/layout/Footer.module.css`)

**Sebelum:**
- Background navy dengan gradien
- Banyak kolom
- Ikon sosial media (tidak ada di kode, tapi dicegah)

**Sesudah:**
- **Background hitam tinta** (`--hitam-tinta`)
- **Border top merah 2px**
- **Brand: Playfair Display 22px, weight 700**
- **Body: Source Serif 15px**
- **Minimal, fokus pada kredit dan info**
- Tidak ada ikon sosial media besar

### 9. ✅ Font Import (`index.html`)

**Ditambahkan:**
```html
Playfair Display: 400, 700, 900, italic 400
DM Sans: 400, 500, 600
Source Serif 4: 400, 600, italic 400
JetBrains Mono: 400, 500
```

## Prinsip Anti-AI Slop yang Diterapkan

### ✅ DILAKUKAN:
1. Playfair Display untuk heading (serif editorial kuat)
2. Palet warna dari referensi historis Indonesia
3. Layout asimetris (60/40 di Hero)
4. Angka historis besar sebagai elemen visual
5. Border kiri tebal sebagai penanda, bukan icon
6. Foto dokumenter dengan caption
7. Whitespace dramatis (5-8rem antar section)
8. Font berbeda untuk display, body, dan UI
9. Garis merah sebagai identitas visual
10. Underline merah untuk hover link

### ✅ DIHINDARI:
1. ❌ Gradien biru-ungu (TIDAK ADA)
2. ❌ Card 3 kolom dengan icon di atas (DIGANTI)
3. ❌ Inter atau Poppins (DIGANTI dengan DM Sans & Source Serif)
4. ❌ Rounded corner besar 16px+ (DIKURANGI atau DIHILANGKAN)
5. ❌ Tombol dengan gradient (TIDAK ADA)
6. ❌ Entrance animation massal (DIKURANGI)
7. ❌ Bayangan soft Tailwind default (DIGANTI dengan border tebal)
8. ❌ Glassmorphism (TIDAK ADA)
9. ❌ Gradient text (TIDAK ADA)
10. ❌ Layout terlalu simetris (DIBUAT ASIMETRIS)

## Komponen yang Masih Menggunakan Styling Lama

Beberapa komponen belum diupdate karena kompleksitas atau prioritas:

1. `PresidentSection.module.css` - File sangat besar, perlu review bertahap
2. `PraReformasi`, `KrisisGerakan`, `Dampak` - Section-section ini
3. `Tokoh`, `Media`, `Referensi` - Perlu review individual
4. `TimPenulis` - Perlu disesuaikan
5. Halaman Antikorupsi - Perlu review terpisah

## Testing

- ✅ Build berhasil tanpa error
- ✅ Font Google Fonts ter-load dengan benar
- ✅ Variabel CSS berfungsi
- ✅ Dark mode masih berfungsi (dengan penyesuaian)

## Rekomendasi Selanjutnya

1. **Review PresidentSection.module.css** - Update styling untuk konsistensi
2. **Update section-section lainnya** - Terapkan prinsip yang sama
3. **Test di browser** - Pastikan visual sesuai dengan Design.md
4. **Optimasi font loading** - Pertimbangkan font-display: swap
5. **Accessibility check** - Pastikan kontras warna memenuhi WCAG
6. **Mobile responsive** - Test di berbagai ukuran layar

## Catatan Penting

- Semua perubahan mengikuti panduan `Design.md` dengan ketat
- Fokus pada **karakter historis** dan **editorial**
- Menghindari semua ciri-ciri "AI Slop"
- Tipografi menjadi elemen desain utama
- Warna dari referensi sejarah Indonesia, bukan template

---

*Update ini adalah langkah pertama dalam transformasi desain. Perlu iterasi lebih lanjut untuk section-section yang belum diupdate.*
