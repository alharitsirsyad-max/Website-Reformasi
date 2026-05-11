# 🔊 Panduan Menambahkan Audio

Website Reformasi Indonesia memiliki sistem audio dua lapis yang meningkatkan pengalaman pengguna:

1. **Background Ambient Sound** - Musik latar yang halus dan terus berputar
2. **President Sound Effects** - Suara ikonik setiap presiden saat hover foto

## File yang Dibutuhkan

Buat folder `public/sounds/` dan taruh file-file berikut:

| File | Isi | Durasi Ideal | Keterangan |
|------|-----|--------------|------------|
| `ambient.mp3` | Musik ambient gamelan/alam Indonesia | Looping, bebas | Background halus yang terus berputar |
| `habibie.mp3` | Suara/pidato ikonik B.J. Habibie | 3-8 detik | Contoh: "Teknologi adalah kunci" |
| `gus-dur.mp3` | Suara ikonik Gus Dur | 3-8 detik | Contoh: "Gitu aja kok repot" |
| `megawati.mp3` | Suara ikonik Megawati | 3-8 detik | Pidato atau kutipan khas |
| `sby.mp3` | Suara ikonik SBY | 3-8 detik | Contoh: "Saya prihatin" |
| `jokowi.mp3` | Suara ikonik Jokowi | 3-8 detik | Contoh: "Kerja kerja kerja!" |
| `prabowo.mp3` | Suara ikonik Prabowo | 3-8 detik | Pidato atau kutipan khas |

## Cara Mencari Audio

### Opsi 1: YouTube (Paling Mudah)

1. Cari di YouTube: `"[nama presiden] pidato ikonik"` atau `"[nama presiden] quotes"`
2. Gunakan tool online untuk download audio (contoh: y2mate.com, ytmp3.cc)
3. Potong bagian yang paling ikonik (3-8 detik) menggunakan:
   - **Audacity** (gratis, desktop)
   - **Online Audio Cutter** (online-audio-cutter.com)
   - **Adobe Audition** (berbayar)
4. Export sebagai MP3 dengan bitrate 128kbps (cukup untuk web)
5. Rename file sesuai tabel di atas

### Opsi 2: Freesound.org (Untuk Ambient)

1. Kunjungi [freesound.org](https://freesound.org)
2. Cari: `"gamelan ambient"` atau `"indonesian nature sounds"`
3. Filter: **License: Creative Commons 0** (bebas pakai)
4. Download dan rename menjadi `ambient.mp3`

### Opsi 3: Pixabay (Alternatif)

1. Kunjungi [pixabay.com/music](https://pixabay.com/music/)
2. Cari musik ambient yang sesuai
3. Download gratis (sudah bebas lisensi)

## Contoh Kutipan Ikonik

Berikut beberapa kutipan yang bisa dicari:

- **Habibie**: "Teknologi adalah kunci kemajuan bangsa"
- **Gus Dur**: "Gitu aja kok repot" atau "Pluralisme adalah keniscayaan"
- **Megawati**: Pidato tentang nasionalisme
- **SBY**: "Saya prihatin" atau pidato tentang demokrasi
- **Jokowi**: "Kerja kerja kerja!" atau "Mental tempe"
- **Prabowo**: Pidato tentang kedaulatan atau kemandirian

## Spesifikasi Teknis

### Format Audio
- **Format**: MP3
- **Bitrate**: 128kbps (balance antara kualitas dan ukuran file)
- **Sample Rate**: 44.1kHz
- **Channels**: Stereo atau Mono (keduanya OK)

### Ukuran File
- **Ambient**: Maksimal 5MB (untuk looping yang smooth)
- **President sounds**: Maksimal 500KB per file (3-8 detik)

### Volume Levels
Volume sudah diatur otomatis di kode:
- Ambient normal: 25%
- Ambient saat di section presiden: 8%
- President sounds: 90%

## Struktur Folder

```
public/
└── sounds/
    ├── ambient.mp3
    ├── habibie.mp3
    ├── gus-dur.mp3
    ├── megawati.mp3
    ├── sby.mp3
    ├── jokowi.mp3
    └── prabowo.mp3
```

## Jika Audio Tidak Tersedia

**Website tetap berfungsi normal tanpa audio!**

Sistem audio dirancang untuk gracefully fail:
- Jika file tidak ditemukan, hanya muncul log di console (tidak error)
- Tombol audio tetap muncul dan bisa diklik
- Hover pada foto presiden tidak akan memainkan suara
- User experience tidak terganggu

## Testing

Setelah menambahkan file audio:

1. ✅ Buka website di browser
2. ✅ Klik tombol audio di pojok kanan bawah (🔇 → 🔊)
3. ✅ Ambient sound harus mulai play
4. ✅ Scroll ke section presiden → ambient volume turun
5. ✅ Hover foto presiden → suara presiden play
6. ✅ Mouse leave foto → suara presiden fade out
7. ✅ Klik tombol audio lagi → semua suara stop

## Troubleshooting

### Audio tidak play sama sekali
- Pastikan browser mengizinkan autoplay (klik tombol audio dulu)
- Cek console browser untuk error
- Pastikan path file benar: `public/sounds/[nama-file].mp3`

### Audio terputus-putus
- Ukuran file terlalu besar, compress dengan bitrate lebih rendah
- Koneksi internet lambat (untuk URL online)

### Volume terlalu keras/pelan
- Edit nilai di `src/contexts/AudioContext.tsx`:
  - `ambientVolume`: 0.25 (25%)
  - `ambientVolumeInPresidentSection`: 0.08 (8%)
  - `presidents[id].volume`: 0.9 (90%)

## Lisensi & Copyright

⚠️ **PENTING**: Pastikan audio yang digunakan memiliki lisensi yang sesuai!

- **Untuk proyek pribadi/edukasi**: Fair use biasanya berlaku
- **Untuk proyek komersial**: Gunakan audio dengan lisensi Creative Commons 0 atau beli lisensi
- **Pidato publik**: Biasanya fair use, tapi cek kebijakan masing-masing

## Alternatif: Gunakan URL Online

Jika tidak ingin hosting file audio sendiri, edit `src/contexts/AudioContext.tsx`:

```typescript
const AUDIO_CONFIG = {
  ambientUrl: 'https://example.com/path/to/ambient.mp3',
  // ... dst
};
```

Pastikan URL mendukung CORS dan stabil.

---

**Catatan**: Audio adalah fitur enhancement. Website dirancang untuk tetap berfungsi sempurna tanpa audio.
