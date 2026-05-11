# 🔧 Troubleshooting Audio - Suara Tidak Muncul

## Langkah-langkah Debug

### 1. Cek Browser Console

Buka browser console (F12 atau Ctrl+Shift+I) dan cek apakah ada error:

**Cara:**
1. Buka website di browser
2. Tekan F12 (atau Ctrl+Shift+I di Windows, Cmd+Option+I di Mac)
3. Klik tab "Console"
4. Refresh halaman
5. Lihat apakah ada error merah

**Error yang mungkin muncul:**
- `404 Not Found: /sounds/habibie.mp3` → File tidak ditemukan
- `CORS error` → File tidak bisa diakses
- `Autoplay blocked` → Browser memblokir autoplay (normal)

### 2. Cek Langkah Aktivasi Audio

Audio **TIDAK** akan play otomatis. Kamu harus:

**Step by step:**
1. ✅ Buka website
2. ✅ **KLIK tombol audio** di pojok kanan bawah (🔇 → 🔊)
3. ✅ Lihat notifikasi "Suara diaktifkan"
4. ✅ Scroll ke section Habibie atau Gus Dur
5. ✅ **HOVER** (arahkan cursor) ke foto presiden
6. ✅ Suara harus play

**PENTING**: Jika tidak klik tombol audio dulu, suara tidak akan play!

### 3. Cek Format File Audio

File audio harus:
- ✅ Format: MP3
- ✅ Nama file: `habibie.mp3` dan `gus-dur.mp3` (lowercase, dengan dash)
- ✅ Lokasi: `public/sounds/`
- ✅ Ukuran: > 0 bytes (tidak kosong)

**Cek di terminal:**
```bash
ls -lh public/sounds/*.mp3
file public/sounds/habibie.mp3
```

### 4. Cek Path di Code

Path di `src/contexts/AudioContext.tsx` harus:
```typescript
presidents: {
  habibie: { soundUrl: '/sounds/habibie.mp3', volume: 0.9 },
  'gus-dur': { soundUrl: '/sounds/gus-dur.mp3', volume: 0.9 },
}
```

**PENTING**: 
- `habibie` (tanpa dash) untuk key
- `/sounds/habibie.mp3` untuk path
- `gus-dur` (dengan dash dan quotes) untuk key
- `/sounds/gus-dur.mp3` untuk path

### 5. Test Audio File Langsung

Buka di browser:
- `http://localhost:5173/sounds/habibie.mp3`
- `http://localhost:5173/sounds/gus-dur.mp3`

**Jika 404**: File tidak ada atau nama salah
**Jika play**: File OK, masalah di code

### 6. Cek Volume Browser

- Volume browser tidak muted
- Volume sistem tidak 0
- Headphone/speaker terpasang

### 7. Restart Dev Server

Kadang dev server perlu restart:
```bash
# Stop server (Ctrl+C)
npm run dev
```

## Debugging dengan Console Log

Tambahkan log di `src/contexts/AudioContext.tsx`:

```typescript
const playPresidentSound = (presidentId: string) => {
  console.log('🔊 Playing sound for:', presidentId);
  console.log('🔊 Audio enabled:', audioEnabled);
  console.log('🔊 Is muted:', isMuted);
  
  if (!audioEnabled || isMuted) {
    console.log('❌ Audio not enabled or muted');
    return;
  }

  const presidentConfig = AUDIO_CONFIG.presidents[presidentId];
  console.log('🔊 Config:', presidentConfig);
  
  if (!presidentConfig) {
    console.log('❌ No config for:', presidentId);
    return;
  }

  const soundUrl = presidentConfig.soundUrl;
  console.log('🔊 Playing URL:', soundUrl);
  
  presidentSoundRef.current = new Audio(soundUrl);
  presidentSoundRef.current.volume = presidentConfig.volume;
  presidentSoundRef.current.play()
    .then(() => console.log('✅ Audio playing'))
    .catch((err) => console.log('❌ Audio error:', err));
};
```

## Checklist Lengkap

- [ ] File `habibie.mp3` ada di `public/sounds/`
- [ ] File `gus-dur.mp3` ada di `public/sounds/`
- [ ] File tidak kosong (> 0 bytes)
- [ ] File adalah MP3 valid (bisa play di media player)
- [ ] Dev server running (`npm run dev`)
- [ ] Browser console terbuka (F12)
- [ ] **KLIK tombol audio** di pojok kanan bawah
- [ ] Tombol berubah dari 🔇 ke 🔊
- [ ] Notifikasi "Suara diaktifkan" muncul
- [ ] Scroll ke section Habibie/Gus Dur
- [ ] **HOVER** foto presiden
- [ ] Cek console untuk log/error

## Solusi Umum

### Problem: "Audio not enabled or muted"
**Solusi**: Klik tombol audio di pojok kanan bawah dulu!

### Problem: "404 Not Found"
**Solusi**: 
1. Cek nama file: harus `habibie.mp3` (lowercase)
2. Cek lokasi: harus di `public/sounds/`
3. Restart dev server

### Problem: "No config for: habibie"
**Solusi**: Cek `src/contexts/AudioContext.tsx`, pastikan ada:
```typescript
habibie: { soundUrl: '/sounds/habibie.mp3', volume: 0.9 },
```

### Problem: "CORS error"
**Solusi**: File harus di `public/` folder, bukan di `src/`

### Problem: "Autoplay blocked"
**Solusi**: Ini normal! User harus klik tombol audio dulu (browser policy)

### Problem: Audio play tapi tidak terdengar
**Solusi**:
1. Cek volume browser (klik icon speaker di tab)
2. Cek volume sistem
3. Cek headphone/speaker
4. Cek file audio (play di media player)

## Test Manual

Buka browser console dan jalankan:

```javascript
// Test 1: Cek file ada
fetch('/sounds/habibie.mp3')
  .then(r => console.log('✅ File found:', r.status))
  .catch(e => console.log('❌ File not found:', e))

// Test 2: Play langsung
const audio = new Audio('/sounds/habibie.mp3')
audio.volume = 0.9
audio.play()
  .then(() => console.log('✅ Playing'))
  .catch(e => console.log('❌ Error:', e))
```

## Masih Tidak Bisa?

Kirim screenshot:
1. Browser console (F12)
2. Folder `public/sounds/` (ls -la)
3. Tombol audio (pojok kanan bawah)

Dan info:
- Browser apa? (Chrome, Firefox, Safari)
- OS apa? (Windows, Mac, Linux)
- Error message di console?
