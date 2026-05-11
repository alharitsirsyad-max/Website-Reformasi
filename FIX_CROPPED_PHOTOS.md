# 🖼️ Cara Memperbaiki Foto yang Kepotong

## Masalah: Foto Kepotong Saat Carousel

Jika foto presiden kepotong (bagian atas/bawah/samping terpotong), ada beberapa solusi:

---

## ✅ Solusi 1: Gunakan Foto dengan Aspect Ratio 3:4 (RECOMMENDED)

Foto portrait dengan aspect ratio 3:4 (width:height) akan pas tanpa kepotong.

**Contoh:**
- 600px × 800px ✅
- 900px × 1200px ✅
- 1200px × 1600px ✅

**Cara crop foto ke 3:4:**

### Online Tools:
1. **Canva** (canva.com)
   - Upload foto
   - Resize → Custom → 3:4 ratio
   - Download

2. **Photopea** (photopea.com) - Free Photoshop online
   - Upload foto
   - Crop tool → Set ratio 3:4
   - Export

3. **iloveimg.com/crop-image**
   - Upload foto
   - Select aspect ratio: 3:4
   - Download

### Desktop:
- **Photoshop**: Crop tool → Ratio 3:4
- **GIMP**: Rectangle Select → Fixed Aspect Ratio 3:4
- **Preview (Mac)**: Tools → Adjust Size → Constrain proportions

---

## ✅ Solusi 2: Adjust Background Position (Jika Foto Landscape)

Jika foto landscape (horizontal) dan kepotong samping, edit CSS:

**File:** `src/components/ui/PresidentPhotoHover.module.css`

**Ubah:**
```css
.photoLayer {
  background-position: center center; /* Default */
}
```

**Menjadi salah satu:**
```css
/* Jika kepotong atas, fokus ke atas */
background-position: center top;

/* Jika kepotong bawah, fokus ke bawah */
background-position: center bottom;

/* Jika kepotong kiri, fokus ke kiri */
background-position: left center;

/* Jika kepotong kanan, fokus ke kanan */
background-position: right center;
```

---

## ✅ Solusi 3: Gunakan Contain (Tampilkan Seluruh Foto)

Jika tidak mau ada yang kepotong sama sekali, ubah `cover` menjadi `contain`:

**File:** `src/components/ui/PresidentPhotoHover.module.css`

**Ubah:**
```css
.photoLayer {
  background-size: cover; /* Foto penuh, mungkin kepotong */
}
```

**Menjadi:**
```css
.photoLayer {
  background-size: contain; /* Seluruh foto terlihat, ada space kosong */
  background-color: var(--surface); /* Warna background untuk space kosong */
}
```

**Trade-off:**
- ✅ Tidak ada yang kepotong
- ❌ Ada space kosong di atas/bawah atau samping (tergantung aspect ratio foto)

---

## ✅ Solusi 4: Per-President Custom (Advanced)

Jika hanya foto tertentu yang bermasalah, bisa custom per presiden.

**Tambahkan di `src/components/ui/PresidentPhotoHover.tsx`:**

```typescript
// Add prop
interface PresidentPhotoHoverProps {
  // ... existing props
  backgroundSize?: 'cover' | 'contain';
  backgroundPosition?: string;
}

// Use in style
<div
  className={styles.photoLayer}
  style={{
    backgroundImage: `url(${currentPhoto})`,
    backgroundSize: backgroundSize || 'cover',
    backgroundPosition: backgroundPosition || 'center center',
    opacity: transitioning ? 0 : 1,
  }}
/>
```

**Lalu di `src/components/sections/PresidentSection.tsx`:**

```typescript
<PresidentPhotoHover
  // ... existing props
  backgroundSize="contain" // Untuk foto yang kepotong
  backgroundPosition="center top" // Adjust position
/>
```

---

## 🎯 Rekomendasi

**Untuk hasil terbaik:**

1. **Crop semua foto ke 3:4** sebelum upload
   - Konsisten
   - Tidak ada yang kepotong
   - Terlihat profesional

2. **Gunakan foto portrait** (vertical)
   - Lebih cocok untuk layout presiden
   - Fokus ke wajah

3. **Hindari foto landscape** (horizontal)
   - Akan kepotong samping
   - Kurang cocok untuk portrait layout

---

## 📐 Aspect Ratio Guide

```
3:4 (Portrait) ✅ RECOMMENDED
┌─────────┐
│         │
│  FOTO   │
│         │
│         │
└─────────┘

16:9 (Landscape) ❌ AKAN KEPOTONG
┌──────────────────┐
│      FOTO        │
└──────────────────┘

1:1 (Square) ⚠️ OK tapi kurang ideal
┌─────────┐
│  FOTO   │
└─────────┘
```

---

## 🔧 Quick Fix untuk Foto Jokowi

Jika foto Jokowi yang kamu tambahkan kepotong:

1. **Cek aspect ratio foto:**
   ```bash
   # Di terminal
   file /path/to/jokowi-1.jpeg
   # Lihat dimensi: 1200x800 = landscape (akan kepotong)
   ```

2. **Crop ke 3:4:**
   - Buka di Canva/Photopea
   - Crop ke 3:4 (contoh: 900x1200)
   - Save dan replace file

3. **Atau gunakan contain:**
   - Edit `PresidentPhotoHover.module.css`
   - Ubah `background-size: cover` → `contain`

---

## 📸 Contoh Foto yang Bagus

**Portrait (3:4) - IDEAL:**
- Foto resmi presiden
- Foto close-up wajah
- Foto berdiri full body

**Landscape (16:9) - AKAN KEPOTONG:**
- Foto group/rombongan
- Foto wide shot
- Foto panorama

**Tips:**
- Pilih foto yang fokus ke presiden (bukan group shot)
- Foto portrait lebih baik dari landscape
- Crop dulu sebelum upload

---

**Sudah diperbaiki:** `background-position` sekarang `center center` (tidak lagi `center top`), jadi foto tidak kepotong atas/bawah. Tapi jika masih kepotong, gunakan solusi di atas.
