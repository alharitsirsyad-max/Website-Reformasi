# 🔊 Cara Test Audio - Step by Step

## ✅ Perubahan yang Sudah Dibuat:

1. **Auto-play ambient sound** - Akan coba play otomatis saat page load
2. **Loop president sound** - Suara presiden akan loop terus saat hover
3. **Debug logging** - Console akan show semua info audio
4. **Default audio ON** - Audio enabled by default (tidak perlu klik toggle)

---

## 🧪 Langkah Testing:

### STEP 1: Test File Audio Langsung

1. Jalankan dev server:
```bash
npm run dev
```

2. Buka di browser:
```
http://localhost:5173/test-audio-simple.html
```

3. Lihat log di halaman (background hitam)
4. Klik tombol **"▶️ Test Habibie"**
5. Klik tombol **"▶️ Test Gus Dur"**

**Hasil yang diharapkan:**
- ✅ File found (status: 200)
- ✅ Can play
- ✅ Playing
- Suara terdengar dan **LOOP terus**

**Jika ada error:**
- ❌ NOT found (status: 404) → File tidak ada atau nama salah
- ❌ Error code: 4 → File corrupt atau format salah
- ❌ Play failed → Browser block atau file bermasalah

---

### STEP 2: Test di Website Utama

1. Buka website utama:
```
http://localhost:5173
```

2. **Buka Console** (F12 atau Ctrl+Shift+I)

3. Lihat log di console:
```
🎵 Initializing audio system...
⚠️ Autoplay blocked (normal). User needs to interact first.
Click anywhere on the page to enable audio.
```

4. **Klik ANYWHERE** di halaman (atau scroll)

5. Lihat log:
```
🎵 First user interaction detected, starting audio...
✅ Ambient audio started
```

6. **Scroll ke section Habibie**

7. **Hover foto Habibie**

8. Lihat log:
```
🔊 Attempting to play sound for: habibie
🔊 Audio enabled: true Muted: false
🔊 President config: {soundUrl: '/sounds/habibie.mp3', volume: 0.9}
🔊 Playing URL: /sounds/habibie.mp3
✅ President audio playing: habibie
```

9. Suara harus terdengar dan **LOOP terus**

10. **Mouse leave** dari foto

11. Suara harus **fade out dan stop**

---

### STEP 3: Cek Nama File

Pastikan nama file **PERSIS**:

```bash
ls -la public/sounds/
```

Harus ada:
- `habibie.mp3` (lowercase, tanpa spasi)
- `gus-dur.mp3` (lowercase, dengan dash)

**BUKAN**:
- ❌ `Habibie.mp3` (capital H)
- ❌ `habibie.MP3` (capital MP3)
- ❌ `gusdur.mp3` (tanpa dash)
- ❌ `gus_dur.mp3` (underscore)

---

## 🔍 Troubleshooting

### Problem 1: "Autoplay blocked"

**Ini NORMAL!** Browser modern memblokir autoplay.

**Solusi:**
- Klik anywhere di halaman
- Atau scroll
- Audio akan auto-start setelah user interaction

### Problem 2: "404 Not Found"

**Penyebab:** File tidak ada atau nama salah

**Solusi:**
```bash
# Cek file ada
ls -la public/sounds/habibie.mp3
ls -la public/sounds/gus-dur.mp3

# Cek nama file (case-sensitive!)
# Harus lowercase: habibie.mp3, gus-dur.mp3
```

### Problem 3: "No audio config for president"

**Penyebab:** ID presiden tidak match dengan config

**Cek di console:** Apa ID yang di-log?
- Harus: `habibie` (bukan `Habibie` atau `habibie-1`)
- Harus: `gus-dur` (bukan `gusdur` atau `gus_dur`)

### Problem 4: Audio play tapi tidak terdengar

**Cek:**
1. Volume browser (icon speaker di tab)
2. Volume sistem (Windows/Mac volume)
3. Headphone/speaker terpasang
4. File audio valid (test di media player)

### Problem 5: "Error code: 4"

**Penyebab:** File corrupt atau format salah

**Solusi:**
1. Test file di media player (VLC, Windows Media Player)
2. Jika tidak bisa play, file corrupt
3. Download ulang atau convert ulang ke MP3

---

## 📊 Console Log yang Normal

Saat website load:
```
🎵 Initializing audio system...
⚠️ Autoplay blocked (normal). User needs to interact first.
```

Saat klik/scroll pertama kali:
```
🎵 First user interaction detected, starting audio...
✅ Ambient audio started
```

Saat hover foto Habibie:
```
🔊 Attempting to play sound for: habibie
🔊 Audio enabled: true Muted: false
🔊 President config: {soundUrl: '/sounds/habibie.mp3', volume: 0.9}
🔊 Playing URL: /sounds/habibie.mp3
✅ President audio playing: habibie
```

Saat mouse leave:
```
(Suara fade out dan stop)
```

---

## 🎯 Quick Checklist

- [ ] File `habibie.mp3` ada di `public/sounds/`
- [ ] File `gus-dur.mp3` ada di `public/sounds/`
- [ ] Nama file lowercase (habibie, bukan Habibie)
- [ ] File tidak kosong (> 0 bytes)
- [ ] File bisa play di media player
- [ ] Dev server running (`npm run dev`)
- [ ] Browser console terbuka (F12)
- [ ] Test page works (`/test-audio-simple.html`)
- [ ] Klik/scroll di halaman utama
- [ ] Hover foto presiden
- [ ] Suara terdengar dan loop

---

## 💡 Tips

1. **Test file dulu** di `/test-audio-simple.html` sebelum test di website utama
2. **Selalu cek console** untuk debug info
3. **Klik/scroll dulu** sebelum expect audio play (browser policy)
4. **Restart dev server** jika ada perubahan file audio
5. **Clear browser cache** (Ctrl+Shift+R) jika file tidak update

---

## 📸 Screenshot yang Perlu Dikirim Jika Masih Error

1. Browser console (F12) - full log
2. Test page (`/test-audio-simple.html`) - log area
3. Terminal output dari `ls -la public/sounds/`
4. File properties (size, format) dari file audio

---

**Sekarang coba test dan kirim screenshot console-nya!** 🚀
