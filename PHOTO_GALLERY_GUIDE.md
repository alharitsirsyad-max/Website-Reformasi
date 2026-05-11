# 📸 Panduan Menambahkan Foto Gallery Presiden

Website Reformasi Indonesia memiliki fitur photo carousel yang menampilkan beberapa foto berbeda untuk setiap presiden saat hover. Panduan ini menjelaskan cara menambahkan foto-foto tersebut.

## 🎯 Apa yang Terjadi Saat Hover?

Ketika cursor diarahkan ke foto presiden:
1. **Foto berganti-ganti** setiap 900ms (carousel)
2. **Suara ikonik** presiden dimainkan
3. **Dots indicator** menunjukkan foto ke berapa
4. **Efek visual** (scale, shadow, glow)

## 📋 Foto yang Dibutuhkan

Setiap presiden membutuhkan **3-6 foto** untuk carousel:

| Presiden | Saran Foto | Jumlah Ideal |
|----------|------------|--------------|
| **Habibie** | Foto resmi, dengan pesawat N250, saat jabatan | 3-4 foto |
| **Gus Dur** | Foto resmi, dengan rakyat, saat berpidato | 3-4 foto |
| **Megawati** | Foto resmi, saat dilantik, kampanye/orasi | 3-4 foto |
| **SBY** | Foto resmi, MoU Helsinki, bersama JK | 3-4 foto |
| **Jokowi** | Foto resmi, blusukan, groundbreaking infrastruktur | 3-4 foto |
| **Prabowo** | Foto resmi, kampanye 2024, pelantikan | 3-4 foto |

## 🔍 Cara Mencari Foto

### Opsi 1: Wikimedia Commons (Recommended)

1. Kunjungi [commons.wikimedia.org](https://commons.wikimedia.org)
2. Cari: `"[nama presiden] Indonesia"`
3. Filter: **License: Public Domain** atau **CC-BY-SA**
4. Pilih foto berkualitas tinggi (minimal 800px width)
5. Download foto (klik foto → More details → Download)

**Contoh pencarian**:
- "B.J. Habibie Indonesia"
- "Abdurrahman Wahid president"
- "Megawati Sukarnoputri"
- "Susilo Bambang Yudhoyono"
- "Joko Widodo president"
- "Prabowo Subianto"

### Opsi 2: Website Resmi Pemerintah

- [Sekretariat Kabinet RI](https://setkab.go.id)
- [Istana Kepresidenan](https://www.presidenri.go.id)
- Arsip foto resmi biasanya bebas digunakan untuk edukasi

### Opsi 3: Google Images dengan Filter

1. Google Images: `"[nama presiden] Indonesia"`
2. Tools → Usage Rights → **Creative Commons licenses**
3. Pilih foto yang jelas dan berkualitas
4. **PENTING**: Cek lisensi di sumber asli!

## 📐 Spesifikasi Foto

### Format & Ukuran
- **Format**: JPEG atau PNG
- **Ukuran**: Minimal 800px × 1000px (portrait)
- **Aspect Ratio**: 3:4 (portrait) ideal
- **File Size**: Maksimal 500KB per foto (compress jika perlu)

### Kualitas
- ✅ Foto jelas, tidak blur
- ✅ Wajah presiden terlihat jelas
- ✅ Pencahayaan baik
- ✅ Resolusi cukup tinggi
- ❌ Hindari foto terlalu gelap
- ❌ Hindari watermark besar

### Komposisi
- **Foto 1**: Foto resmi/formal (portrait)
- **Foto 2**: Foto aksi/aktivitas (berpidato, blusukan, dll)
- **Foto 3**: Foto bersejarah/ikonik (momen penting)
- **Foto 4-6**: Variasi lainnya

## 💾 Cara Menambahkan Foto

### Metode 1: File Lokal (Recommended)

1. **Download foto** dari sumber yang dipilih
2. **Rename foto** dengan format: `[presiden]-[nomor].jpeg`
   - Contoh: `habibie-1.jpeg`, `habibie-2.jpeg`, `habibie-3.jpeg`
3. **Taruh di folder** `public/`
4. **Edit** `src/data/content.ts`:

```typescript
{
  id: 'habibie',
  // ... fields lainnya
  fotoUrl: '/habibie.jpeg',
  fotoGallery: [
    '/habibie-1.jpeg',  // Foto resmi
    '/habibie-2.jpeg',  // Dengan pesawat N250
    '/habibie-3.jpeg',  // Saat jabatan
  ],
  // ... fields lainnya
}
```

### Metode 2: URL Online

Jika foto sudah ada di internet (Wikimedia, dll):

```typescript
fotoGallery: [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/x/xx/Habibie.jpg/800px-Habibie.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/y/yy/Habibie2.jpg/800px-Habibie2.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/z/zz/Habibie3.jpg/800px-Habibie3.jpg',
],
```

**Keuntungan URL**:
- Tidak perlu download
- Tidak menambah ukuran project
- Langsung dari sumber terpercaya

**Kekurangan URL**:
- Bergantung pada koneksi internet
- Bisa berubah/hilang jika sumber menghapus

## 🎨 Contoh Lengkap

### Habibie (3 foto)
```typescript
{
  id: 'habibie',
  fotoUrl: '/habibie.jpeg',
  fotoGallery: [
    '/habibie-official.jpeg',     // Foto resmi presiden
    '/habibie-n250.jpeg',          // Bersama pesawat N250
    '/habibie-speech.jpeg',        // Saat berpidato
  ],
  fotoKeterangan: 'B.J. Habibie, Presiden ke-3 Republik Indonesia',
  fotoLisensi: 'Wikimedia Commons / Domain Publik',
}
```

### Jokowi (4 foto)
```typescript
{
  id: 'jokowi',
  fotoUrl: '/jokowi.jpeg',
  fotoGallery: [
    '/jokowi-official.jpeg',       // Foto resmi
    '/jokowi-blusukan.jpeg',       // Blusukan ke pasar
    '/jokowi-infrastruktur.jpeg',  // Groundbreaking jalan tol
    '/jokowi-asian-games.jpeg',    // Pembukaan Asian Games
  ],
  fotoKeterangan: 'Joko Widodo (Jokowi), Presiden ke-7 RI',
  fotoLisensi: 'Wikimedia Commons / CC-BY-SA',
}
```

## 🔧 Compress Foto (Jika Terlalu Besar)

Jika foto > 500KB, compress menggunakan:

### Online Tools
- [TinyJPG](https://tinyjpg.com) - Drag & drop, gratis
- [Squoosh](https://squoosh.app) - Google tool, powerful
- [CompressJPEG](https://compressjpeg.com) - Batch compress

### Desktop Tools
- **Photoshop**: Save for Web (Quality 70-80%)
- **GIMP**: Export → Quality 75-85%
- **ImageMagick**: `convert input.jpg -quality 80 output.jpg`

Target: **200-400KB per foto** untuk balance kualitas & loading speed.

## ⚖️ Lisensi & Copyright

### ⚠️ PENTING: Pastikan Foto Legal!

**Aman digunakan**:
- ✅ Public Domain
- ✅ Creative Commons CC0
- ✅ Creative Commons CC-BY (dengan atribusi)
- ✅ Creative Commons CC-BY-SA (dengan atribusi)
- ✅ Foto resmi pemerintah (untuk edukasi)

**TIDAK aman**:
- ❌ Foto dari media berita tanpa izin
- ❌ Foto dengan watermark © (copyright)
- ❌ Foto dari Getty Images, Shutterstock, dll
- ❌ Foto pribadi orang lain tanpa izin

### Cara Cek Lisensi

1. **Wikimedia Commons**: Lihat di halaman detail foto
2. **Google Images**: Klik foto → Visit → Cek sumber asli
3. **Jika ragu**: Jangan pakai, cari alternatif

### Atribusi

Jika menggunakan foto CC-BY atau CC-BY-SA, update `fotoLisensi`:

```typescript
fotoLisensi: 'Wikimedia Commons / CC-BY-SA 4.0 / Photographer Name',
```

## 🧪 Testing

Setelah menambahkan foto:

1. ✅ Jalankan `npm run dev`
2. ✅ Buka website di browser
3. ✅ Scroll ke section presiden
4. ✅ Hover foto presiden
5. ✅ Cek apakah:
   - Foto berganti-ganti setiap ~1 detik
   - Dots indicator muncul di bawah
   - Suara presiden play (jika audio aktif)
   - Tidak ada foto broken/error
   - Transisi smooth (crossfade)

## 🚨 Troubleshooting

### Foto tidak muncul
- Cek path file: harus `/nama-file.jpeg` (dengan slash di depan)
- Cek nama file: case-sensitive (habibie.jpeg ≠ Habibie.jpeg)
- Cek lokasi: file harus di folder `public/`

### Foto broken/error
- Cek URL: pastikan masih aktif
- Cek format: harus JPEG atau PNG
- Cek ukuran: jangan terlalu besar (>2MB)

### Carousel tidak jalan
- Cek array: minimal 2 foto untuk carousel
- Cek console browser: ada error?
- Cek hover: pastikan cursor di atas foto

### Foto terlalu lambat load
- Compress foto (target 200-400KB)
- Gunakan format JPEG (lebih kecil dari PNG)
- Pertimbangkan lazy loading (sudah built-in)

## 📝 Template Checklist

Gunakan checklist ini untuk setiap presiden:

```
□ Habibie
  □ 3-4 foto downloaded
  □ Foto di-compress (<500KB each)
  □ Foto ditaruh di public/
  □ fotoGallery updated di content.ts
  □ Tested hover & carousel

□ Gus Dur
  □ 3-4 foto downloaded
  □ Foto di-compress (<500KB each)
  □ Foto ditaruh di public/
  □ fotoGallery updated di content.ts
  □ Tested hover & carousel

□ Megawati
  □ 3-4 foto downloaded
  □ Foto di-compress (<500KB each)
  □ Foto ditaruh di public/
  □ fotoGallery updated di content.ts
  □ Tested hover & carousel

□ SBY
  □ 3-4 foto downloaded
  □ Foto di-compress (<500KB each)
  □ Foto ditaruh di public/
  □ fotoGallery updated di content.ts
  □ Tested hover & carousel

□ Jokowi
  □ 3-4 foto downloaded
  □ Foto di-compress (<500KB each)
  □ Foto ditaruh di public/
  □ fotoGallery updated di content.ts
  □ Tested hover & carousel

□ Prabowo
  □ 3-4 foto downloaded
  □ Foto di-compress (<500KB each)
  □ Foto ditaruh di public/
  □ fotoGallery updated di content.ts
  □ Tested hover & carousel
```

## 💡 Tips Pro

1. **Konsistensi**: Gunakan foto dengan style/tone yang mirip per presiden
2. **Variasi**: Mix formal & informal photos untuk variety
3. **Kualitas**: Prioritaskan kualitas over kuantitas (3 foto bagus > 6 foto biasa)
4. **Cerita**: Pilih foto yang menceritakan momen penting
5. **Aspect Ratio**: Crop foto ke 3:4 untuk konsistensi

## 🎬 Hasil Akhir

Dengan foto gallery yang lengkap:
- ✨ Pengalaman interaktif yang lebih kaya
- 📸 Visual storytelling yang lebih kuat
- 🎨 Website terasa lebih premium
- 📚 Konten edukatif yang lebih engaging

---

**Catatan**: Foto gallery bersifat **opsional**. Website tetap berfungsi sempurna dengan foto tunggal (fotoUrl). Gallery adalah enhancement untuk pengalaman yang lebih baik.
