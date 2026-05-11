# Reformasi Indonesia - Interactive Timeline

Website interaktif yang menceritakan perjalanan Reformasi Indonesia dari era Orde Baru hingga masa kini, dengan fokus pada kepemimpinan presiden-presiden Indonesia pasca-reformasi.

## 🎯 Fitur Utama

- **Timeline Interaktif**: Perjalanan kronologis dari pra-reformasi hingga era modern
- **Profil Presiden**: Detail kebijakan, program, dan peristiwa penting setiap presiden
- **Animasi Halus**: Transisi dan animasi yang meningkatkan pengalaman membaca
- **🔊 Sistem Audio Dua Lapis**: 
  - Background ambient sound yang halus
  - Suara ikonik setiap presiden saat hover foto
- **Responsive Design**: Optimal di desktop, tablet, dan mobile
- **Dark Mode Ready**: Desain yang nyaman untuk mata

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ dan npm/yarn
- Browser modern (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Clone repository
git clone [repository-url]
cd reformasi-indonesia

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka browser dan akses `http://localhost:5173`

## 🔊 Setup Audio (Opsional)

Website memiliki fitur audio enhancement yang meningkatkan pengalaman pengguna. Audio bersifat **opsional** - website tetap berfungsi sempurna tanpa file audio.

**Untuk menambahkan audio, lihat panduan lengkap di [AUDIO_SETUP.md](./AUDIO_SETUP.md)**

Singkatnya:
1. Buat folder `public/sounds/`
2. Tambahkan file audio sesuai panduan
3. Audio akan otomatis terdeteksi dan berfungsi

File yang dibutuhkan:
- `ambient.mp3` - Background music
- `habibie.mp3`, `gus-dur.mp3`, `megawati.mp3`, `sby.mp3`, `jokowi.mp3`, `prabowo.mp3` - President sounds

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Icons**: Lucide React
- **Animations**: CSS + Intersection Observer API
- **Audio**: Web Audio API

## 📁 Struktur Proyek

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, Sidebar
│   ├── sections/        # Section-section utama
│   └── ui/              # Komponen reusable
├── contexts/            # React Context (Audio, dll)
├── data/                # Data konten
├── hooks/               # Custom React hooks
├── styles/              # Global styles
└── types/               # TypeScript types

public/
├── sounds/              # Audio files (opsional)
└── [images]             # Gambar dan assets
```

## 🎨 Customization

### Mengubah Warna Tema

Edit `src/styles/globals.css`:

```css
:root {
  --primary: #8B1A1A;  /* Warna utama */
  --gold: #B8892A;     /* Warna aksen */
  --teal: #0F6E56;     /* Warna sekunder */
}
```

### Menambah/Edit Konten

Edit `src/data/content.ts` untuk mengubah:
- Data presiden
- Timeline events
- Kebijakan dan program
- Referensi

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚢 Deployment

### Build untuk Production

```bash
npm run build
```

Output akan ada di folder `dist/`

### Deploy ke Firebase (Sudah dikonfigurasi)

```bash
npm install -g firebase-tools
firebase login
firebase deploy
```

### Deploy ke Platform Lain

Website ini adalah static site yang bisa di-deploy ke:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📝 License

[Tentukan lisensi project Anda]

## 🤝 Contributing

Kontribusi sangat diterima! Silakan buat issue atau pull request.

## 📧 Contact

[Informasi kontak Anda]

---

**Catatan**: Untuk panduan lengkap setup audio, lihat [AUDIO_SETUP.md](./AUDIO_SETUP.md)
