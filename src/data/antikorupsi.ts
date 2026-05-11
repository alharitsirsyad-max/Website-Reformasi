// ═══════════════════════════════════════════════════════════════════════════
// DATA HALAMAN ANTIKORUPSI
// Semua konten halaman Pemberantasan Korupsi Masa Reformasi
// ═══════════════════════════════════════════════════════════════════════════

export interface StatFakta {
  nilai: string;
  label: string;
}

export interface FaktaOrdeBaru {
  angka: string;
  satuan: string;
  label: string;
  deskripsi: string;
}

export interface Upaya {
  nomor: string;
  ikon: string;
  judul: string;
  tahun: string;
  ringkasan: string;
  detail: string;
  tugasKPK?: string[];
  refUrl?: string;
}

export interface TimelinePimpinan {
  periode: string;
  nama: string;
  highlight: string;
}

export interface PencapaianKunci {
  ikon: string;
  angka: string;
  label: string;
  deskripsi: string;
}

export interface KasusBesar {
  tahun: string;
  judul: string;
  pelaku: string;
  kerugian: string;
  vonis: string;
  catatan: string;
  refUrl?: string;
}

export interface DataCPI {
  tahun: string;
  skor: number;
  label: string;
}

export interface DampakItem {
  ikon: string;
  teks: string;
}

export interface AjakanAksi {
  ikon: string;
  teks: string;
  url: string;
}

// ─────────────────────────────────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "Topik Khusus · Reformasi Indonesia",
  judul: "Pemberantasan Korupsi Masa Reformasi",
  deskripsi: "Setelah 32 tahun KKN merajalela di bawah Orde Baru, era Reformasi membawa angin baru: dibentuknya KPK, pengadilan khusus korupsi, dan sistem transparansi pemerintahan. Namun perjalanannya tidak pernah mudah.",
  statFakta: [
    { nilai: "2002", label: "Tahun KPK dibentuk" },
    { nilai: "1.500+", label: "Kasus korupsi ditangani KPK" },
    { nilai: "34", label: "Skor CPI Indonesia 2023 (0=terkorup)" },
    { nilai: "Rp168T+", label: "Kerugian negara berhasil diselamatkan" },
  ] as StatFakta[],
  heroBg: "", // Bisa diisi dengan URL foto gedung KPK
};

// ─────────────────────────────────────────────────────────────────────────
// KONTEKS: KORUPSI DI ERA ORDE BARU
// ─────────────────────────────────────────────────────────────────────────
export const konteks = {
  judul: "Warisan Gelap: Korupsi di Era Orde Baru",
  intro: "Untuk memahami mengapa pemberantasan korupsi menjadi agenda utama Reformasi, kita harus melihat betapa sistemisnya korupsi di era sebelumnya.",
  faktaOrdeBaru: [
    {
      angka: "32",
      satuan: "tahun",
      label: "Orde Baru berkuasa",
      deskripsi: "Selama tiga dekade, sistem kekuasaan terpusat menciptakan lingkungan yang subur bagi korupsi. Tidak ada checks and balances yang efektif.",
    },
    {
      angka: "Rp35T",
      satuan: "est.",
      label: "Kekayaan keluarga Soeharto (versi Transparency Int.)",
      deskripsi: "Transparency International pernah menempatkan Soeharto sebagai pemimpin dunia paling korup kedua dalam sejarah modern dengan total korupsi diperkirakan USD 15-35 miliar.",
    },
    {
      angka: "No. 2",
      satuan: "dunia",
      label: "Pemimpin terkorup menurut Transparency International",
      deskripsi: "Indonesia secara konsisten mendapat skor buruk di Corruption Perceptions Index selama era Orde Baru.",
    },
  ] as FaktaOrdeBaru[],
  narasiLengkap: "Korupsi Orde Baru bukan sekadar oknum pejabat nakal — ia adalah sistem. KKN (Korupsi, Kolusi, Nepotisme) sudah terstruktur dari pusat hingga daerah. Proyek-proyek pemerintah secara rutin 'mengalir' ke kroni Soeharto. Perizinan usaha membutuhkan 'uang pelicin'. Anggaran APBN bocor di setiap level. Tidak ada media yang berani membongkar, tidak ada lembaga yang berwenang menyelidiki orang kuat. Ketika Reformasi datang, rakyat menuntut satu hal dengan keras: basmi KKN.",
  quote: "KKN harus diberantas sampai ke akar-akarnya.",
  quoteSumber: "Tuntutan mahasiswa dalam unjuk rasa Mei 1998",
};

// ─────────────────────────────────────────────────────────────────────────
// 5 UPAYA PEMBERANTASAN KORUPSI
// ─────────────────────────────────────────────────────────────────────────
export const upaya: Upaya[] = [
  {
    nomor: "01",
    ikon: "Search",
    judul: "Pembentukan KPK",
    tahun: "2002",
    ringkasan: "Komisi Pemberantasan Korupsi dibentuk melalui UU No. 30 Tahun 2002 sebagai lembaga independen yang memiliki kewenangan superioritas dalam menangani korupsi.",
    detail: "KPK lahir dari desakan masyarakat sipil dan lembaga internasional yang menilai aparat penegak hukum konvensional tidak efektif memberantas korupsi. KPK diberi kewenangan luar biasa: bisa menyadap, memeriksa rekening bank tanpa izin pengadilan biasa, dan tidak bisa dihentikan kasusnya. Di bawah kepemimpinan awal (Taufiequrachman Ruki, 2003–2007), KPK mulai membangun kepercayaan publik dengan menangani kasus-kasus yang sebelumnya tidak tersentuh.",
    tugasKPK: [
      "Penyelidikan & penyidikan kasus korupsi",
      "Penuntutan terdakwa korupsi",
      "Koordinasi dengan aparat penegak hukum lain",
      "Supervisi penanganan perkara korupsi",
      "Pencegahan tindak pidana korupsi",
      "Monitoring penyelenggara negara",
    ],
    refUrl: "https://id.wikipedia.org/wiki/Komisi_Pemberantasan_Korupsi",
  },
  {
    nomor: "02",
    ikon: "Scale",
    judul: "Pembentukan Pengadilan Tipikor",
    tahun: "2002 (Khusus) → 2009 (Seluruh Indonesia)",
    ringkasan: "Pengadilan Tindak Pidana Korupsi dibentuk untuk mengadili kasus korupsi secara khusus dengan hakim-hakim yang terlatih dan proses yang lebih ketat.",
    detail: "Awalnya Pengadilan Tipikor hanya ada di Jakarta dan menangani kasus-kasus yang disidik KPK. UU No. 46 Tahun 2009 memperluas ke seluruh provinsi. Keistimewaan Tipikor: hakim ad hoc yang merupakan spesialis hukum korupsi, tingkat vonis bersalah yang sangat tinggi dibanding pengadilan biasa (hampir 100%), dan ancaman hukuman yang lebih berat. Ini memberi sinyal kuat bahwa koruptor tidak bisa bebas begitu saja.",
    refUrl: "https://id.wikipedia.org/wiki/Pengadilan_Tindak_Pidana_Korupsi",
  },
  {
    nomor: "03",
    ikon: "FileText",
    judul: "Reformasi Perundang-undangan",
    tahun: "1998–2010",
    ringkasan: "Berbagai undang-undang diperbarui dan dibuat baru untuk memperkuat fondasi hukum pemberantasan korupsi dan mendorong transparansi pemerintahan.",
    detail: "Beberapa UU kunci yang lahir era Reformasi:\n• UU No. 28/1999: Penyelenggaraan Negara yang Bersih dan Bebas KKN — mewajibkan pejabat melaporkan harta kekayaan\n• UU No. 31/1999 jo UU No. 20/2001: Pemberantasan Tindak Pidana Korupsi — mempertegas definisi dan sanksi korupsi\n• UU No. 14/2008: Keterbukaan Informasi Publik — rakyat berhak tahu bagaimana uang negara digunakan\n• UU No. 8/2010: Pencegahan dan Pemberantasan TPPU — mengejar aset hasil korupsi yang dicuci\n• Sistem LHKPN: Laporan Harta Kekayaan Penyelenggara Negara yang bisa diakses publik",
    refUrl: "https://id.wikipedia.org/wiki/Reformasi_Indonesia_(1998)",
  },
  {
    nomor: "04",
    ikon: "Eye",
    judul: "Transparansi & Akuntabilitas Pemerintah",
    tahun: "2000-an–sekarang",
    ringkasan: "Pemerintah mulai membangun sistem administrasi yang terbuka, pengawasan anggaran yang ketat, dan pelaporan kekayaan pejabat yang bisa diakses publik.",
    detail: "Perubahan sistem yang signifikan:\n• e-Procurement: pengadaan barang/jasa pemerintah dilakukan online untuk mengurangi suap dalam proses tender\n• LKPP (Lembaga Kebijakan Pengadaan Pemerintah): memastikan pengadaan negara transparan dan kompetitif\n• APBD online: beberapa daerah mulai membuka data anggaran daerah ke publik\n• Ombudsman RI: lembaga independen pengawas pelayanan publik\n• Sistem reward whistleblower: perlindungan bagi pelapor kasus korupsi",
    refUrl: "https://id.wikipedia.org/wiki/Keterbukaan_Informasi_Publik_di_Indonesia",
  },
  {
    nomor: "05",
    ikon: "Users",
    judul: "Peran Masyarakat Sipil & Media",
    tahun: "1998–sekarang",
    ringkasan: "Kebebasan pers dan kebebasan berkumpul pasca-Reformasi membuka ruang bagi masyarakat sipil dan media untuk aktif mengawasi dan membongkar korupsi.",
    detail: "Kekuatan baru dalam pemberantasan korupsi:\n• ICW (Indonesia Corruption Watch): LSM yang secara aktif memantau kasus korupsi dan kebijakan antikorupsi\n• TII (Transparency International Indonesia): memantau indeks korupsi dan advokasi kebijakan\n• Media investigatif: Tempo, Kompas, dll berperan besar dalam membongkar kasus korupsi besar\n• Masyarakat bisa melaporkan korupsi langsung ke KPK melalui website dan aplikasi KPK\n• Media sosial: memungkinkan viral reporting — warga bisa rekam dan sebarkan kasus korupsi secara langsung",
    refUrl: "https://id.wikipedia.org/wiki/Indonesia_Corruption_Watch",
  },
];

// ─────────────────────────────────────────────────────────────────────────
// KPK MENDALAM
// ─────────────────────────────────────────────────────────────────────────
export const kpkDetail = {
  judul: "KPK — Garda Terdepan Antikorupsi",
  intro: "Dibentuk tahun 2002, KPK menjadi simbol harapan rakyat Indonesia atas pemerintahan yang bersih. Perjalanannya penuh dinamika — dari puncak kepercayaan publik hingga tekanan-tekanan yang mengancam independensinya.",
  timelinePimpinan: [
    {
      periode: "2003–2007",
      nama: "Taufiequrachman Ruki",
      highlight: "Membangun fondasi KPK, kasus pertama berhasil ditangani",
    },
    {
      periode: "2007–2011",
      nama: "Antasari Azhar",
      highlight: "Penanganan kasus besar, namun pimpinan terseret kasus hukum",
    },
    {
      periode: "2011–2015",
      nama: "Abraham Samad",
      highlight: "Era paling aktif, Cicak vs Buaya II, tangkap banyak menteri dan DPR",
    },
    {
      periode: "2015–2019",
      nama: "Agus Rahardjo",
      highlight: "Operasi tangkap tangan masif, e-KTP gate, tangkap Ketua DPR",
    },
    {
      periode: "2019–2023",
      nama: "Firli Bahuri",
      highlight: "Revisi UU KPK kontroversial, TWK pegawai, kemudian terseret kasus pemerasan",
    },
    {
      periode: "2024–kini",
      nama: "Nawawi Pomolango (Plt.)",
      highlight: "Memimpin KPK pasca Firli, pemulihan kepercayaan publik",
    },
  ] as TimelinePimpinan[],
  pencapaianKunci: [
    {
      ikon: "TrendingDown",
      angka: "1.500+",
      label: "Kasus korupsi ditangani",
      deskripsi: "Dari 2003 hingga 2024, KPK telah menangani ribuan kasus mulai dari pejabat daerah hingga menteri aktif.",
    },
    {
      ikon: "User",
      angka: "200+",
      label: "Anggota DPR & Kepala Daerah terjerat",
      deskripsi: "Untuk pertama dalam sejarah Indonesia, pejabat tinggi yang terpilih secara demokratis bisa dan sudah dipenjara.",
    },
    {
      ikon: "DollarSign",
      angka: "Rp168T+",
      label: "Aset korupsi diselamatkan",
      deskripsi: "Nilai aset yang berhasil diselamatkan dari tangan koruptor dan dikembalikan ke kas negara.",
    },
    {
      ikon: "Award",
      angka: "100%",
      label: "Tingkat vonis bersalah di Pengadilan Tipikor",
      deskripsi: "Hampir semua kasus yang dibawa KPK ke pengadilan berhasil divonis bersalah — rekor yang belum tertandingi.",
    },
  ] as PencapaianKunci[],
  kasusIkonik: "Salah satu penangkapan paling bersejarah: Ketua DPR Setya Novanto ditangkap KPK pada 2017 dalam kasus korupsi e-KTP yang merugikan negara Rp2,3 triliun. Ini membuktikan tidak ada yang kebal hukum — bahkan pejabat setinggi Ketua DPR sekalipun.",
  tantangan: "Perjalanan KPK tidak mulus. Upaya pelemahan terus datang: 'Cicak vs Buaya' (2009, 2012), kriminalisasi pimpinan, dan puncaknya Revisi UU KPK 2019 yang memperlemah independensi. Namun setiap kali rakyat Indonesia turun ke jalan membela KPK, membuktikan bahwa lembaga ini sudah menjadi milik rakyat.",
};

// ─────────────────────────────────────────────────────────────────────────
// KASUS-KASUS BESAR
// ─────────────────────────────────────────────────────────────────────────
export const kasusBesar: KasusBesar[] = [
  {
    tahun: "2004",
    judul: "Kasus Suap DPR (Abdullah Puteh)",
    pelaku: "Gubernur NAD Abdullah Puteh",
    kerugian: "Rp10,7M",
    vonis: "10 tahun penjara",
    catatan: "Kasus pertama KPK yang berhasil vonis — sinyal bahwa gubernur pun bisa dipenjara.",
    refUrl: "https://id.wikipedia.org/wiki/Abdullah_Puteh",
  },
  {
    tahun: "2011",
    judul: "Kasus Wisma Atlet SEA Games",
    pelaku: "Bendahara Umum Partai Demokrat Nazaruddin",
    kerugian: "Rp31,1M",
    vonis: "7 tahun penjara",
    catatan: "Kasus yang menyeret nama-nama besar partai berkuasa saat itu — menunjukkan KPK tidak pilih kasih.",
    refUrl: "https://id.wikipedia.org/wiki/Muhammad_Nazaruddin",
  },
  {
    tahun: "2013",
    judul: "Kasus Impor Daging Sapi (SKK Migas)",
    pelaku: "Presiden PKS Luthfi Hasan Ishaaq & Kepala SKK Migas Rudi Rubiandini",
    kerugian: "Rp1,2M (Luthfi), USD 700.000 (Rudi)",
    vonis: "18 tahun (Luthfi), 7 tahun (Rudi)",
    catatan: "Penangkapan dua petinggi berbeda lembaga dalam tahun yang sama — menunjukkan KPK tidak takut menyentuh tokoh partai.",
    refUrl: "https://id.wikipedia.org/wiki/Luthfi_Hasan_Ishaaq",
  },
  {
    tahun: "2017",
    judul: "Mega Kasus e-KTP",
    pelaku: "Setya Novanto (Ketua DPR) + 8 terdakwa lain",
    kerugian: "Rp2,3 Triliun",
    vonis: "15 tahun penjara (Setya Novanto)",
    catatan: "Kasus terbesar yang melibatkan ketua DPR aktif. Proyek e-KTP yang seharusnya untuk data kependudukan rakyat justru dikorupsi ramai-ramai oleh elite politik.",
    refUrl: "https://id.wikipedia.org/wiki/Kasus_korupsi_e-KTP",
  },
  {
    tahun: "2019",
    judul: "Kasus Suap Bakamla",
    pelaku: "Anggota DPR dan pejabat Badan Keamanan Laut",
    kerugian: "USD 1,5 juta",
    vonis: "6–8 tahun penjara",
    catatan: "Contoh korupsi pengadaan alat pertahanan — sektor yang selama ini dianggap tidak tersentuh.",
  },
  {
    tahun: "2021",
    judul: "Kasus Korupsi Bansos COVID-19",
    pelaku: "Menteri Sosial Juliari Batubara",
    kerugian: "Rp32,4M",
    vonis: "12 tahun penjara",
    catatan: "Korupsi di tengah pandemi — mengambil uang bantuan sosial untuk rakyat yang sedang menderita. Menimbulkan kemarahan publik yang luar biasa.",
    refUrl: "https://id.wikipedia.org/wiki/Juliari_Peter_Batubara",
  },
];

// ─────────────────────────────────────────────────────────────────────────
// INDEKS PERSEPSI KORUPSI (CPI)
// ─────────────────────────────────────────────────────────────────────────
export const indeksCPI = {
  penjelasan: "Corruption Perceptions Index (CPI) adalah ukuran global tingkat korupsi yang dipersepsikan publik. Skor Indonesia terus meningkat sejak Reformasi, namun masih jauh dari ideal.",
  data: [
    { tahun: "1998", skor: 20, label: "Awal Reformasi — sangat korup" },
    { tahun: "2004", skor: 22, label: "KPK baru berdiri" },
    { tahun: "2009", skor: 28, label: "KPK mulai efektif" },
    { tahun: "2014", skor: 34, label: "Era SBY berakhir" },
    { tahun: "2019", skor: 40, label: "Puncak skor — Era Jokowi I" },
    { tahun: "2023", skor: 34, label: "Turun pasca revisi UU KPK" },
  ] as DataCPI[],
  konteks: "Skor 34–40 berarti Indonesia masih dianggap cukup korup oleh standar internasional. Negara-negara Skandinavia (Denmark, Finlandia) konsisten di atas 85. Bahkan negara ASEAN seperti Singapura (85) dan Malaysia (50) masih jauh di atas Indonesia.",
  visualInstruksi: "Tampilkan setiap data point sebagai bar horizontal. Bar melebar dari 0% ke [skor]% saat section masuk viewport (animasi CSS width 0 → nilai, durasi 1s, ease-out). Warna bar: skor < 25: var(--primary) merah tua, skor 25-35: var(--gold) emas, skor > 35: var(--teal) teal",
};

// ─────────────────────────────────────────────────────────────────────────
// DAMPAK & TANTANGAN
// ─────────────────────────────────────────────────────────────────────────
export const dampakPositif: DampakItem[] = [
  { ikon: "CheckCircle", teks: "Lebih dari 1.500 kasus korupsi ditangani KPK 2003–2024" },
  { ikon: "CheckCircle", teks: "Ratusan pejabat tinggi dipenjara — tidak ada yang kebal hukum" },
  { ikon: "CheckCircle", teks: "Indeks Korupsi membaik dari 20 (1998) ke 40 (2019)" },
  { ikon: "CheckCircle", teks: "Sistem pengadaan pemerintah menjadi lebih transparan (e-procurement)" },
  { ikon: "CheckCircle", teks: "Masyarakat semakin sadar dan berani melapor korupsi" },
  { ikon: "CheckCircle", teks: "Kebebasan pers memungkinkan investigasi korupsi oleh media" },
  { ikon: "CheckCircle", teks: "Aset korupsi senilai Rp168 triliun lebih berhasil diselamatkan" },
];

export const hambatan: DampakItem[] = [
  { ikon: "AlertTriangle", teks: "Praktik korupsi masih marak di berbagai level pemerintahan" },
  { ikon: "AlertTriangle", teks: "Revisi UU KPK 2019 dianggap melemahkan independensi lembaga" },
  { ikon: "AlertTriangle", teks: "Proses hukum terkadang berjalan lambat dan tersandera kepentingan politik" },
  { ikon: "AlertTriangle", teks: "Skor CPI turun dari 40 (2019) ke 34 (2023) setelah revisi UU KPK" },
  { ikon: "AlertTriangle", teks: "Korupsi di level daerah sulit dijangkau KPK yang berpusat di Jakarta" },
  { ikon: "AlertTriangle", teks: "Politik uang dalam Pemilu menciptakan siklus korupsi baru" },
  { ikon: "AlertTriangle", teks: "Beberapa terdakwa menerima vonis ringan karena berbagai faktor" },
];

// ─────────────────────────────────────────────────────────────────────────
// KESIMPULAN & AJAKAN
// ─────────────────────────────────────────────────────────────────────────
export const kesimpulan = {
  judul: "Perjuangan yang Belum Selesai",
  paragraf1: "Reformasi 1998 telah melahirkan sistem antikorupsi yang Indonesia tidak pernah miliki sebelumnya: KPK yang independen, pengadilan khusus, dan undang-undang yang lebih tegas. Ini adalah pencapaian nyata yang tidak boleh dianggap remeh.",
  paragraf2: "Namun angka korupsi yang masih tinggi, upaya pelemahan KPK yang terus-menerus, dan skor CPI yang kembali turun menunjukkan bahwa perjuangan belum selesai. Korupsi telah berevolusi — dari yang terang-terangan menjadi lebih sistematis dan tersembunyi.",
  paragraf3: "Generasi muda — termasuk kalian yang membaca ini — adalah kunci melanjutkan agenda Reformasi. Bukan hanya dengan tidak korupsi sendiri, tapi dengan aktif mengawasi, melapor, dan menuntut akuntabilitas dari pemimpin-pemimpin bangsa.",
  ajakanAksi: [
    { ikon: "ExternalLink", teks: "Laporkan korupsi ke KPK", url: "https://kpk.go.id/id/kontak" },
    { ikon: "ExternalLink", teks: "Pantau LHKPN pejabat", url: "https://elhkpn.kpk.go.id" },
    { ikon: "ExternalLink", teks: "Ikut program antikorupsi KPK", url: "https://aclc.kpk.go.id" },
  ] as AjakanAksi[],
  quote: "Korupsi bukan hanya masalah hukum — ia adalah masalah moral yang harus dilawan oleh setiap warga negara.",
  quoteSumber: "Komisi Pemberantasan Korupsi (KPK)",
};
