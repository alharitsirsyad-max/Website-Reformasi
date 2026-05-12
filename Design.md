# Design System: Sejarah Reformasi Indonesia 1998–Kini
## Anti-AI Slop Edition — Panduan untuk Kiro

---

## 0. Mengapa Dokumen Ini Ada

Website `sejarah-reformasi.web.app` memiliki konten yang kuat — narasi sejarah bangsa yang berat dan penting. Tapi tampilannya mengkhianati isinya: terlalu bersih, terlalu generik, terlalu "aman." Ini adalah tanda-tanda klasik **AI Slop**:

- Warna biru-ungu gradien yang sama seperti ribuan SaaS landing page
- Font Inter/Poppins yang sudah kehilangan identitas karena dipakai di mana-mana
- Card 3-kolom dengan ikon di atas + heading + teks — template paling umum dari AI
- Tombol rounded yang generik tanpa karakter
- Padding dan border-radius yang seragam di semua elemen — tidak ada ritme
- Hero section dengan teks besar di tengah + CTA — persis seperti di jutaan situs lain
- Tidak ada tekstur, tidak ada kejutan visual, tidak ada kepribadian

Reformasi 1998 adalah momen berdarah dan bersejarah. Desainnya harus merespons berat itu — bukan tampil seperti startup SaaS.

---

## 1. Konsep Visual & Atmosfer

### Identitas: Arsip Hidup, Bukan Museum

Website ini adalah **dokumen sejarah yang bernapas** — bukan ensiklopedia digital yang steril, bukan blog berita yang klinis, bukan SaaS landing page yang bersih.

Referensi visual yang harus dirasakan:
- **Koran tua bekas pakai** — teks padat, ada bekas lipatan, ada kepentingan
- **Arsip foto hitam-putih 1998** — kontras tinggi, dramatis, bukan estetik
- **Pamflet mahasiswa** — mentah, langsung, punya urgensi
- **Dokumen resmi yang lusuh** — serius, berbobot, bukan dekoratif

### Mood Board Emosional

Bukan: bersih, modern, optimis, friendly  
**Tapi**: berat, historis, penting, membumi, serius-tapi-manusiawi

### Karakter Khas yang Membedakan dari AI Slop

1. **Tipografi dengan kepribadian kuat** — bukan Inter, bukan Poppins
2. **Palet warna dari sejarah**, bukan dari Tailwind default
3. **Layout asimetris** — tidak semua card 3 kolom rata
4. **Teks sebagai desain** — kutipan, tanggal, angka historis bisa jadi elemen visual
5. **Whitespace yang bercerita** — jeda adalah dramatisasi, bukan kekosongan
6. **Tidak ada gradien biru-ungu** — sama sekali tidak

---

## 2. Palet Warna

### Filosofi Warna

Warna diambil dari **referensi historis Indonesia** — bendera merah-putih, foto arsip 1998 (yang banyak hitam-putih dengan momen warna), kertas tua, dan tinta. Bukan dari desain SaaS, bukan dari template Tailwind.

### Palet Utama

| Nama | Hex | Peran |
|------|-----|-------|
| **Merah Perjuangan** | `#C0392B` | Aksen utama — warna bendera, warna darah, warna urgensi |
| **Putih Arsip** | `#F5F0E8` | Background utama — seperti kertas tua, bukan putih bersih |
| **Hitam Tinta** | `#1A1A1A` | Teks utama, heading — bukan pure black, ada kedalaman |
| **Krem Dokumen** | `#EDE5D0` | Background sekunder, kartu, sidebar |
| **Abu Lama** | `#8C8279` | Teks sekunder, metadata, tanggal, label |
| **Coklat Arsip** | `#5C4A35` | Aksen subtil, border, dekoratif |

### Palet Sekunder (Digunakan Hemat)

| Nama | Hex | Peran |
|------|-----|-------|
| **Kuning Sorot** | `#F2C94C` | Highlight, kutipan penting — seperti stabilo di dokumen lama |
| **Hijau Tua** | `#2C5F2E` | Tag era tertentu (misalnya: era Habibie) |
| **Biru Navy Tua** | `#1B3A5C` | Tag era lain — bukan biru muda, bukan gradien |
| **Hitam Foto** | `#0D0D0D` | Untuk elemen yang membutuhkan kontras maksimum |

### Aturan Warna yang Tidak Boleh Dilanggar

- **DILARANG**: Gradien biru ke ungu (tanda paling jelas AI slop)
- **DILARANG**: `#6366f1` (indigo Tailwind) atau variasinya dalam bentuk apapun
- **DILARANG**: Warna pastel yang lembut dan "friendly" — konten ini serius
- **DILARANG**: Lebih dari 2 warna aksen dalam satu section
- **BOLEH**: Gradien dari satu warna ke warna lebih gelap/terang — tapi hanya vertikal, dan hanya dari palet di atas
- **BOLEH**: Background section dengan `#1A1A1A` (gelap dramatis) untuk kutipan besar

### Penggunaan Merah

Merah `#C0392B` adalah identitas. Gunakan dengan hemat tapi berani:
- Garis horizontal di atas hero (seperti koran)
- Nomor halaman atau tahun pada timeline
- Underline pada link atau heading penting (bukan box, bukan button background)
- Indikator "era aktif" pada navigasi timeline

---

## 3. Tipografi

### Filosofi Font

Font adalah keputusan paling penting untuk membunuh AI slop. Inter dan Poppins sudah kehilangan makna — dipakai jutaan kali oleh AI. Website sejarah butuh font yang punya **karakter editorial dan historis**.

### Font Stack

**Display / Heading Utama**: `Playfair Display`
- Serif klasik dengan karakter kuat
- Digunakan untuk: judul era, nama presiden, heading section utama
- Size: 48px–96px, weight: 700–900
- Letter spacing: -0.02em sampai -0.04em (compressed, bukan lebar)
- Mengapa: serif editorial yang kelihatan seperti headline koran bersejarah

**Sub-heading / Navigasi**: `DM Sans` atau `Syne`
- Sans-serif dengan kepribadian — bukan Inter yang generik
- Digunakan untuk: navigasi, label section, button, metadata
- Size: 14px–24px, weight: 400–600
- Mengapa: kontras yang baik dengan Playfair, modern tapi bukan plastik

**Body / Artikel**: `Source Serif 4` atau `Lora`
- Serif yang nyaman untuk membaca konten panjang
- Digunakan untuk: isi artikel, deskripsi peristiwa, paragraf konten
- Size: 16px–20px, weight: 400
- Line-height: 1.75 — teks sejarah butuh napas
- Mengapa: konsisten dengan tema arsip, memudahkan membaca teks panjang

**Monospace / Angka Historis**: `JetBrains Mono` atau `Courier New` (untuk efek tertentu)
- Digunakan untuk: tanggal spesifik, angka statistik korban, kode dokumen
- Bukan untuk semua angka — hanya yang ingin menonjol sebagai "data keras"

### Hierarki Tipografi

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Hero Headline | Playfair Display | 72–96px | 900 | 1.0 | -0.04em |
| Era Title | Playfair Display | 48–64px | 700 | 1.1 | -0.02em |
| Section Heading | Playfair Display | 32–40px | 700 | 1.15 | -0.01em |
| Card Title | DM Sans | 20–24px | 600 | 1.3 | normal |
| Body Artikel | Source Serif 4 | 17–19px | 400 | 1.75 | normal |
| Metadata / Label | DM Sans | 12–14px | 500 | 1.4 | 0.08em (uppercase) |
| Kutipan Besar | Playfair Display italic | 24–32px | 400 | 1.5 | 0.01em |
| Tanggal / Angka | JetBrains Mono | 13–15px | 400 | 1.4 | 0.02em |
| Nav Link | DM Sans | 14–16px | 500 | 1.0 | normal |

### Prinsip Tipografi Anti-AI Slop

- **Jangan gunakan satu font untuk semua** — pasangan Display + Body + UI menciptakan hirarki yang terasa editorial
- **Playfair italic untuk kutipan** — ada perasaan "ini penting" yang tidak bisa digantikan font lain
- **Uppercase hanya untuk label kecil** — bukan untuk heading besar (terlihat seperti template Bootstrap)
- **Angka besar sebagai elemen visual** — "32 Tahun", "21 Mei 1998", bisa tampil dengan ukuran 80–120px sebagai elemen dekoratif di antara konten
- **Tidak ada teks dengan gradien** — gradient text adalah ciri paling jelas AI slop

---

## 4. Komponen & Gaya

### Hero Section

**Bukan**: Gambar besar di belakang + teks putih di tengah + dua tombol CTA  
**Tapi**: 

```
Layout editorial — seperti halaman depan majalah dokumenter.
├── Garis merah horizontal di paling atas (4px, full width)
├── Navigation bar — krem tipis, teks gelap
├── Hero terbagi dua:
│   ├── Kiri (60%): Teks besar — judul, sub-judul, deskripsi singkat
│   └── Kanan (40%): Foto hitam-putih / dokumenter dengan caption
└── Di bawah: Strip horizontal dengan angka-angka kunci (6 Presiden | 27 Tahun | ...)
```

Tidak ada tombol besar di hero. Navigasi konten dilakukan lewat scroll atau menu.

### Timeline / Navigasi Era

Ini adalah elemen paling penting di website. **Jangan buat timeline vertikal dengan bullet dan garis di kiri** (AI slop klasik).

Pendekatan yang berbeda:
- **Timeline horizontal** dengan tahun sebagai marker besar
- Tahun dalam Playfair Display ukuran besar (40–60px), posisi bawah
- Era ditandai dengan warna solid tipis (bukan gradien) sebagai latar strip
- Presiden direpresentasikan dengan nama, bukan foto (atau foto hitam-putih kecil)
- Klik era → slide ke section era tersebut (bukan halaman baru)

### Card Era / Peristiwa

**AI Slop Card (hindari)**:
- Rounded corner besar (16px+)
- Icon emoji atau Lucide icon di atas
- Heading + 2-3 baris teks
- 3 kolom rata sempurna
- Hover shadow yang lembut

**Card yang Berkarakter**:
```
├── Border kiri tebal (4px) berwarna sesuai era — bukan rounded corner gimmick
├── Heading dalam Playfair Display
├── Tanggal spesifik dalam JetBrains Mono (kecil, di atas heading)
├── Teks body dalam Source Serif
└── Bawah: label "Baca Lebih Lanjut" — bukan tombol bulat, cukup teks dengan underline merah
```

Layout tidak harus 3 kolom. Bisa:
- 1 kolom besar untuk peristiwa paling penting
- 2 kolom asimetris (60/40 atau 70/30)
- Grid 2 kolom untuk peristiwa setara

### Kutipan Historis

Elemen ini harus menonjol dan dramatis — bukan blockquote biasa dengan garis kiri abu-abu.

```
Background: #1A1A1A (hitam dalam)
Teks: Putih Arsip (#F5F0E8)
Font: Playfair Display Italic, 28–36px
Attributi: DM Sans uppercase kecil, merah muda (#C0392B)
Lebar: full bleed (full width, memotong grid)
Padding: 64px 80px
Tidak ada tanda kutip grafis besar yang dekoratif (AI slop)
```

### Navigasi

- Sticky saat scroll, tapi tidak punya bayangan besar saat sticky
- Background: `#EDE5D0` (krem dokumen) — bukan putih bersih
- Garis merah tipis di paling atas nav (2px, seperti koran)
- Link: DM Sans, teks gelap, tidak ada hover background — cukup underline merah saat hover
- Tidak ada tombol CTA mencolok di nav (ini bukan halaman produk)

### Footer

- Background: `#1A1A1A`
- Teks: `#8C8279` dan `#F5F0E8`
- Tidak perlu banyak kolom — cukup kredit, sumber, dan navigasi minimal
- Tidak ada ikon media sosial besar yang dekoratif

---

## 5. Prinsip Layout

### Grid

- Base: 12 kolom, max-width 1200px, padding horizontal 24px (mobile: 16px)
- Konten artikel: max-width 720px (untuk keterbacaan) — tidak perlu full width
- Section berbeda bisa punya lebar berbeda — tidak semua harus sama
- **Hindari "card soup"** — tidak semua konten perlu dibungkus card

### Whitespace

- Whitespace bukan dekorasi — ia adalah nafas dramaturgis
- Antara section: 80–120px, bukan 40px yang terlalu rapat
- Di antara kutipan besar dan konten berikutnya: ruang ekstra
- Tapi di dalam card/konten padat: tighter spacing (16–24px)

### Asimetri yang Disengaja

AI selalu membuat layout simetris dan rata. Untuk melawannya:
- Heading terkadang keluar dari grid kolom (full bleed ke kiri)
- Angka besar dekoratif bisa posisinya sedikit naik dari baseline grid
- Foto bisa overflow sedikit dari container-nya
- Timeline bisa punya elemen yang tidak rata sempurna

### Full-Bleed Section

Beberapa section boleh makan seluruh lebar layar:
- Kutipan historis besar (latar hitam)
- Foto dokumenter
- Strip angka statistik (latar merah gelap)

---

## 6. Elemen Tekstur & Kedalaman

### Filosofi Tekstur

AI slop selalu flat dan clean. Website ini butuh **sedikit ketidaksempurnaan yang disengaja**.

- Background utama `#F5F0E8` sudah punya warmth dari krem-nya — jangan ganti ke putih
- Tidak perlu noise texture atau grain — cukup warna yang tidak steril
- Border bisa dipakai sebagai pemisah konten, tapi tidak semua border sama tebal
- Bayangan: gunakan **sangat hemat**, dan selalu bayangan satu arah (bukan multiple shadow dekoratif)

### Bayangan

Tidak ada:
- `box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)` — ini khas Tailwind dan AI
- Glassmorphism (blur + transparan) — sangat AI slop

Boleh:
- `box-shadow: 2px 4px 0px #1A1A1A` — bayangan keras offset, seperti stempel
- Border tebal sebagai pengganti shadow untuk memberikan "berat" pada elemen
- `box-shadow: inset 0 -3px 0 #C0392B` — underline tebal di bawah heading (lewat shadow)

### Garis sebagai Elemen Desain

Garis lebih bermakna dari card di konteks ini:
- Garis horizontal merah (2–4px) sebagai pemisah section — bukan `<hr>` biasa
- Garis vertikal tipis sebagai kolom pemisah dalam layout 2 kolom
- Border kiri tebal sebagai penanda "ini penting" pada card

---

## 7. Interaksi & Animasi

### Prinsip

- **Animasi bukan dekorasi** — setiap animasi harus ada tujuan naratif
- **Tidak ada bounce, wiggle, atau floating** — terlalu playful untuk konteks ini
- **Tidak ada entrance animation pada semua elemen** — AI selalu animasi semua masuk dari bawah dengan delay bertahap — ini sangat klise

### Animasi yang Diizinkan

| Interaksi | Animasi | Durasi |
|-----------|---------|--------|
| Scroll ke section | Fade in dari opacity 0 | 300ms, ease-out |
| Hover link | Underline merah tumbuh dari kiri | 200ms, ease |
| Hover card | Translate Y ke atas -2px, border kiri lebih tebal | 150ms |
| Timeline navigasi | Slide horizontal dengan easing natural | 400ms |
| Foto hover | Slight desaturate → saturate kembali | 300ms |

### Yang Dilarang

- Semua elemen masuk dari bawah saat scroll (entrance animation massal)
- Tombol yang rotate saat hover (terlalu playful)
- Gradient text animation
- Parallax scroll agresif
- Loading skeleton yang berkedip-kedip

---

## 8. Foto & Gambar

### Jenis Gambar

Website ini menggunakan foto dokumenter 1998 — kebanyakan hitam-putih atau berwarna rendah saturasi.

Aturan penggunaan gambar:
- **Foto asli historis** jika tersedia: prioritas utama
- Foto warna dikonversi ke grayscale atau diberi filter sepia ringan agar konsisten
- **Tidak ada ilustrasi flat vector** — terlalu playful, terlalu AI
- **Tidak ada foto stock generik** — tidak ada orang tersenyum di depan laptop
- Tidak ada gambar AI-generated (ironis tapi penting disebutkan)

### Presentasi Foto

- Foto tidak harus selalu dalam container dengan rounded corner — bisa hard-crop
- Caption wajib ada — dalam DM Sans kecil, italic, warna abu
- Foto penting bisa tampil full-bleed dengan caption overlay di bawah
- Aspect ratio tidak harus sama untuk semua foto

---

## 9. Navigasi Konten & UX

### Struktur

Website ini adalah narasi linear (dari 1998 ke kini) tapi harus bisa diakses non-linear:
- **Navigasi era di header** — bisa jump langsung ke era Habibie, Gus Dur, dst
- **Timeline visual** — sebagai peta konten, bukan hanya dekorasi
- **Back to top** yang subtle, bukan tombol besar mengambang

### Tidak Perlu

- Modal/popup yang muncul tiba-tiba
- Cookie consent yang blocking
- Newsletter signup yang agresif
- "Share to social media" yang besar di setiap section

---

## 10. Do's & Don'ts — Ringkasan Anti-AI Slop

### LAKUKAN ✓

- Gunakan Playfair Display untuk heading — serif klasik editorial
- Palet warna dari referensi historis Indonesia: merah, krem, hitam tinta
- Layout asimetris yang disengaja — tidak semua card 3 kolom
- Angka historis besar sebagai elemen visual (tahun, jumlah korban, dsb)
- Kutipan historis full-bleed dengan latar hitam
- Border kiri tebal sebagai penanda penting, bukan icon emoji
- Foto hitam-putih dokumenter dengan caption
- Whitespace dramatis antar section
- Font berbeda untuk display, body, dan UI — tiga peran berbeda

### JANGAN ✗

- **JANGAN** gradien biru-ungu (atau biru apapun yang "tech-startup")
- **JANGAN** card 3 kolom dengan icon Lucide di atas heading + 2 baris teks
- **JANGAN** Inter atau Poppins — terlalu generik, terlalu AI
- **JANGAN** rounded corner besar (16px+) pada semua elemen
- **JANGAN** tombol dengan gradient atau glow effect
- **JANGAN** entrance animation pada semua elemen dari bawah
- **JANGAN** bayangan soft yang sama pada semua card (Tailwind default)
- **JANGAN** glassmorphism — blur + transparan adalah ciri AI 2024
- **JANGAN** gradient text pada heading
- **JANGAN** ilustrasi flat vector atau gambar stock
- **JANGAN** layout yang terlalu simetris dan seragam
- **JANGAN** semua section punya padding yang sama (monoton)

---

## 11. Panduan untuk Kiro — Quick Reference

### Saat diminta membuat section baru

1. Tentukan dulu: apakah ini section narasi atau section data?
2. Narasi → Playfair Display headline, Source Serif body, layout 1 atau 2 kolom asimetris
3. Data/statistik → angka besar, DM Sans label uppercase, latar solid
4. Pilih warna section: putih arsip, krem dokumen, atau hitam dramatik — tidak ada opsi lain
5. Jangan bungkus semua konten dalam card — gunakan spacing dan typography untuk grouping

### Saat diminta membuat komponen

```
Checklist sebelum generate:
[ ] Apakah menggunakan Inter/Poppins? → Ganti ke DM Sans / Playfair
[ ] Apakah ada gradien biru-ungu? → Ganti ke solid merah atau tidak ada gradien
[ ] Apakah card punya rounded-2xl? → Kurangi ke rounded atau tanpa rounded
[ ] Apakah ada icon Lucide di atas heading? → Pertimbangkan apakah perlu
[ ] Apakah layout 3 kolom rata? → Coba asimetris atau 2 kolom
[ ] Apakah tombol punya background gradien? → Ganti ke solid atau outlined
[ ] Apakah ada entrance animation pada semua elemen? → Kurangi hanya ke 1-2 elemen
```

### Referensi warna cepat

```css
--color-background: #F5F0E8;
--color-background-alt: #EDE5D0;
--color-dark: #1A1A1A;
--color-text: #1A1A1A;
--color-text-muted: #8C8279;
--color-accent: #C0392B;
--color-accent-brown: #5C4A35;
--color-highlight: #F2C94C;

--font-display: 'Playfair Display', Georgia, serif;
--font-body: 'Source Serif 4', 'Lora', Georgia, serif;
--font-ui: 'DM Sans', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Courier New', monospace;
```

### Tone Visual

Bayangkan: **halaman depan majalah dokumenter historis, dicetak di kertas agak kuning, dengan foto hitam-putih yang berat.**

Bukan: landing page startup, bukan portal berita modern, bukan ensiklopedia digital.

---

## 12. Konteks Konten — Apa yang Ada di Website

Ini penting agar desain merespons konten dengan tepat:

- **6 Era Presiden**: Habibie, Gus Dur, Megawati, SBY, Jokowi, Prabowo
- **Peristiwa kunci**: Tragedi Trisakti, Kerusuhan Mei 1998, Pemilu 1999, Amandemen UUD, KPK, dst
- **Timeline**: dari 21 Mei 1998 hingga kini (2025+)
- **Data statistik**: angka korban, perkembangan ekonomi, indeks demokrasi
- **Kutipan historis**: pidato presiden, slogan mahasiswa, headline koran lama

Setiap elemen desain harus bisa **menghormati beratnya konten ini**.

---

*Dokumen ini dibuat untuk memandu Kiro (AI coding agent) dalam mengimplementasikan desain yang berkarakter, spesifik, dan tidak generik. Update setiap kali ada elemen baru yang perlu distandarisasi.*

*Versi 1.0 — Mei 2026*