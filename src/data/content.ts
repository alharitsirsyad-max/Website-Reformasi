import {
  MetaData,
  HeroData,
  LatarBelakangItem,
  KronologiItem,
  PerjuanganData,
  TokohItem,
  DampakItem,
  ReformasiKiniItem,
  MediaItem,
  ReferensiItem,
  TimItem
} from '../types';

export const meta: MetaData = {
  brandName: "Reformasi Indonesia",
  tagline: "1998 – Sekarang",
  kelas: "Kelas XI SIJA 1",
  mapel: "Sejarah Indonesia",
  tahun: "2026"
};

export const hero: HeroData = {
  tagText: "Reformasi masih berlanjut",
  judul: "Masa Reformasi Indonesia",
  aksenKata: "Reformasi",
  deskripsi: "Gerakan yang mengubah Indonesia — dari tumbangnya Orde Baru hingga demokrasi yang terus diperjuangkan sampai hari ini.",
  statistik: ["1998/Tahun reformasi dimulai", "32 th/Orde Baru berkuasa", "4 jiwa/Syuhada Trisakti", "Kini/Reformasi masih berlangsung"]
};

export const latarBelakang: LatarBelakangItem[] = [
  { id: '1', judul: "Krisis Ekonomi 1997", deskripsi: "Krisis moneter Asia Tenggara menghancurkan nilai rupiah hingga 80%, pengangguran melonjak, dan harga kebutuhan pokok naik drastis. Daya beli masyarakat merosot tajam.", icon: "TrendingDown" },
  { id: '2', judul: "KKN dan Korupsi Merajalela", deskripsi: "Korupsi, kolusi, dan nepotisme (KKN) mengakar di semua lini pemerintahan. Kroni dan keluarga Soeharto menguasai berbagai sektor ekonomi strategis.", icon: "DollarSign" },
  { id: '3', judul: "Represi Politik Orde Baru", deskripsi: "Selama 32 tahun, kebebasan berpendapat, pers, dan berorganisasi dibungkam. Aktivis diculik, partai oposisi dilemahkan, dan Golkar mendominasi setiap pemilu.", icon: "Users" },
  { id: '4', judul: "Tekanan Sosial dan Ketidakadilan", deskripsi: "Kesenjangan ekonomi melebar. Masyarakat marjinal semakin terpinggirkan sementara elite berkuasa menikmati kemakmuran yang tidak adil.", icon: "ShieldAlert" }
];

export const kronologi: KronologiItem[] = [
  { id: 'k1', tanggal: "Juli 1997", judul: "Krisis Moneter Asia", deskripsi: "Krisis keuangan Asia Tenggara dipicu jatuhnya baht Thailand dan merambat ke Indonesia. Nilai rupiah mulai merosot dari Rp 2.500 menjadi di atas Rp 5.000 per dolar AS.", tag: "Ekonomi", highlight: false },
  { id: 'k2', tanggal: "Januari 1998", judul: "Rupiah Terpuruk & IMF Masuk", deskripsi: "Rupiah anjlok ke Rp 15.000 per dolar AS. IMF memberikan bailout $43 miliar dengan syarat reformasi ekonomi yang menyakitkan: pencabutan subsidi BBM dan listrik.", tag: "Ekonomi", highlight: false },
  { id: 'k3', tanggal: "Maret 1998", judul: "Soeharto Kembali Dilantik", deskripsi: "MPR melantik Soeharto untuk masa jabatan ke-7 dengan BJ Habibie sebagai Wakil Presiden. Mahasiswa mulai bergerak, demonstrasi anti-Soeharto meluas ke berbagai kota.", tag: "Politik", highlight: false },
  { id: 'k4', tanggal: "12 Mei 1998", judul: "Tragedi Trisakti", deskripsi: "Empat mahasiswa Universitas Trisakti — Elang Mulia Lesmana, Heri Hertanto, Hafidin Royan, dan Hendriawan Sie — ditembak aparat saat unjuk rasa damai. Peristiwa ini memicu gelombang kemarahan nasional.", tag: "Tragedi", highlight: true },
  { id: 'k5', tanggal: "13-15 Mei 1998", judul: "Kerusuhan Mei 1998", deskripsi: "Jakarta dan beberapa kota besar dilanda kerusuhan massal. Ratusan warga keturunan Tionghoa menjadi korban, ratusan perempuan menjadi korban kekerasan seksual. Lebih dari seribu orang tewas.", tag: "Kerusuhan", highlight: false },
  { id: 'k6', tanggal: "18 Mei 1998", judul: "Mahasiswa Duduki DPR/MPR", deskripsi: "Puluhan ribu mahasiswa dari berbagai universitas menduduki Gedung DPR/MPR di Jakarta. Ketua DPR Harmoko menyerukan Soeharto untuk mundur. Momen bersejarah yang menjadi titik balik.", tag: "Gerakan", highlight: false },
  { id: 'k7', tanggal: "21 Mei 1998", judul: "Soeharto Mundur", deskripsi: "Pukul 09.00 WIB, Soeharto resmi mengumumkan pengunduran dirinya dari jabatan Presiden RI setelah 32 tahun berkuasa. BJ Habibie mengambil sumpah jabatan sebagai presiden ketiga RI.", tag: "Reformasi", highlight: true },
  { id: 'k8', tanggal: "7 Juni 1999", judul: "Pemilu Legislatif Pertama", deskripsi: "Pemilihan umum paling demokratis sejak 1955 digelar. 48 partai berkompetisi. PDI-P meraih suara terbanyak (34%), diikuti Golkar (22%) dan PKB (13%). Era demokrasi multipartai dimulai.", tag: "Demokrasi", highlight: true }
];

export const perjuangan: PerjuanganData = {
  lead: "Gerakan reformasi bukan peristiwa tunggal — ia adalah akumulasi perjuangan panjang dari berbagai elemen masyarakat yang menginginkan perubahan fundamental.",
  kutipan: "Mahasiswa adalah moral force bangsa. Ketika penguasa buta dan tuli, mahasiswalah yang bicara. — Aktivis Reformasi 1998",
  items: [
    { id: 'p1', judul: "Gerakan Mahasiswa", deskripsi: "Mahasiswa dari UI, ITB, UGM, Trisakti, dan ratusan universitas lain turun ke jalan secara terkoordinasi. Mereka menuntut reformasi total: demokratisasi, penghapusan dwifungsi ABRI, dan penegakan hukum. Pendudukan DPR pada 18 Mei menjadi klimaks perjuangan mereka." },
    { id: 'p2', judul: "Gerakan Buruh dan Rakyat", deskripsi: "Di tengah krisis, buruh menuntut kenaikan upah dan perlindungan kerja. Massa rakyat bergabung dengan mahasiswa, menciptakan tekanan besar dari berbagai penjuru. Demonstrasi meluas ke Medan, Surabaya, Yogyakarta, dan kota-kota lain." },
    { id: 'p3', judul: "Tekanan Tokoh & Ulama", deskripsi: "Ulama, tokoh agama, dan intelektual publik seperti Amien Rais dan Abdurrahman Wahid menggunakan pengaruh moral mereka untuk mendukung reformasi. Deklarasi Forum Umat Islam dan pertemuan Ciganjur memperkuat legitimasi gerakan." },
    { id: 'p4', judul: "Peran Pers dan Media", deskripsi: "Stasiun TV swasta yang baru berkembang memainkan peran penting menyiarkan aksi mahasiswa secara langsung. Pers yang mulai bebas menjadi corong suara rakyat melawan sensor Orde Baru." }
  ]
};

export const tokoh: TokohItem[] = [
  { id: 't1', nama: "B.J. Habibie", peran: "Presiden ke-3 RI", inisial: "BH", deskripsi: "Teknokrat jenius yang naik menggantikan Soeharto. Di tengah krisis, Habibie membebaskan tahanan politik, mencabut sensor pers, mengizinkan pembentukan partai baru, dan menggelar pemilu demokratis 1999. Ia juga mengizinkan referendum Timor-Timur." },
  { id: 't2', nama: "Amien Rais", peran: "Tokoh Sentral Reformasi", inisial: "AR", deskripsi: "Ketua PP Muhammadiyah yang menjadi suara moral gerakan reformasi. Ia memimpin demonstrasi besar di Yogyakarta dan menjadi salah satu otak di balik tekanan terhadap Soeharto untuk mundur. Kemudian menjadi Ketua MPR 1999-2004." },
  { id: 't3', nama: "Megawati Sukarnoputri", peran: "Tokoh Oposisi", inisial: "MS", deskripsi: "Putri Bung Karno yang memimpin PDI-P sebagai oposisi terkuat Orde Baru. Kemenangan PDI-P dalam pemilu 1999 menjadi simbol kemenangan rakyat, meski ia akhirnya baru menjadi presiden setelah Gus Dur dilengserkan." },
  { id: 't4', nama: "Abdurrahman Wahid", peran: "Tokoh NU", inisial: "AW", deskripsi: "Gus Dur, Ketua PBNU, menjadi jembatan antara berbagai kelompok reformis. Pertemuannya di Ciganjur bersama Megawati, Amien, dan Sultan HB X menghasilkan pernyataan bersama mendesak Soeharto mundur. Terpilih menjadi Presiden ke-4 RI." },
  { id: 't5', nama: "Elang Mulia Lesmana", peran: "Syuhada Trisakti", inisial: "EL", deskripsi: "Mahasiswa Fakultas Teknik Sipil Universitas Trisakti yang gugur ditembak aparat pada 12 Mei 1998. Kematiannya bersama tiga rekan menjadi pemantik amarah nasional yang mempercepat kejatuhan Orde Baru. Dianugerahi Bintang Jasa Utama." },
  { id: 't6', nama: "Wiranto", peran: "Panglima TNI/ABRI", inisial: "WR", deskripsi: "Panglima ABRI pada masa kritis Mei 1998. Posisinya ambigu — satu sisi mencegah eskalasi militer besar-besaran, sisi lain pelanggaran HAM masa itu belum sepenuhnya dipertanggungjawabkan. Menjadi saksi kunci transisi kekuasaan." },
  { id: 't7', nama: "Sri Bintang Pamungkas", peran: "Aktivis & Politisi", inisial: "SP", deskripsi: "Anggota DPR yang dipecat dan dipenjara karena mengkritik Soeharto. Menjadi simbol perlawanan terhadap otoritarianisme Orde Baru. Kebebasannya setelah Soeharto mundur menjadi simbol awal era reformasi." },
  { id: 't8', nama: "Soeharto", peran: "Presiden Orde Baru", inisial: "SH", deskripsi: "Memerintah Indonesia selama 32 tahun (1967-1998). Di bawah kepemimpinannya, pembangunan ekonomi pesat namun diiringi otoritarianisme, korupsi masif, dan pelanggaran HAM. Mundur pada 21 Mei 1998 di bawah tekanan mahasiswa dan krisis ekonomi." }
];

export const dampak: DampakItem[] = [
  { id: 'd1', judul: "Demokrasi Multipartai", deskripsi: "Sistem politik berubah total dari dominasi satu partai ke demokrasi kompetitif. Pemilu 1999 diikuti 48 partai, menandai kebebasan berpolitik yang sesungguhnya.", tag: "Politik", icon: "TrendingUp", warna: "red" },
  { id: 'd2', judul: "Kebebasan Pers", deskripsi: "Sensor dan pembredelan media era Orde Baru dihapus. Pers bebas berkembang pesat — ratusan media baru lahir dan menjadi pilar pengawasan kekuasaan.", tag: "Media", icon: "Newspaper", warna: "red" },
  { id: 'd3', judul: "Otonomi Daerah", deskripsi: "UU Otonomi Daerah 1999 mengalihkan kewenangan besar dari pusat ke daerah. Kabupaten dan kota memiliki wewenang mengatur diri sendiri, mengakhiri sentralisasi Orde Baru.", tag: "Tata Kelola", icon: "MapPin", warna: "gold" },
  { id: 'd4', judul: "Amandemen UUD 1945", deskripsi: "Konstitusi diamandemen empat kali (1999-2002), membatasi kekuasaan presiden, memperkenalkan pemilihan langsung, membentuk MK, dan memperkuat HAM.", tag: "Konstitusi", icon: "FileText", warna: "gold" },
  { id: 'd5', judul: "Reformasi TNI & Polri", deskripsi: "Dwifungsi ABRI dihapus — militer tidak lagi bisa menduduki jabatan sipil. Polri dipisahkan dari TNI dan menjadi institusi sipil mandiri di bawah presiden.", tag: "Militer", icon: "Shield", warna: "teal" },
  { id: 'd6', judul: "Hak Asasi Manusia", deskripsi: "Komnas HAM diperkuat, pengadilan HAM dibentuk, dan berbagai kasus pelanggaran masa lalu mulai diselidiki. Meski belum sempurna, kerangka perlindungan HAM jauh lebih kuat dari era Orde Baru.", tag: "Kemanusiaan", icon: "Heart", warna: "teal" }
];

export const reformasiKini: ReformasiKiniItem[] = [
  { id: 'rk1', status: 'baik', judul: "Demokrasi Elektoral Stabil", deskripsi: "Pemilu langsung presiden sejak 2004 berjalan reguler dan damai. Transfer kekuasaan antarpartai terjadi secara konstitusional. Lembaga demokrasi seperti KPU dan MK berfungsi." },
  { id: 'rk2', status: 'baik', judul: "Desentralisasi & Otonomi Daerah", deskripsi: "Pemerintah daerah memiliki kewenangan luas. Pemilihan langsung kepala daerah melibatkan jutaan warga dalam proses demokrasi lokal." },
  { id: 'rk3', status: 'proses', judul: "Pemberantasan Korupsi (KPK)", deskripsi: "KPK yang lahir dari reformasi berhasil menangkap ratusan pejabat korup. Namun revisi UU KPK 2019 dan berbagai tekanan melemahkan independensinya." },
  { id: 'rk4', status: 'proses', judul: "Kebebasan Sipil & Ruang Digital", deskripsi: "Kebebasan pers tetap terjaga, namun UU ITE sering digunakan untuk membungkam kritik di ruang digital. Aktivis dan jurnalis masih menghadapi tekanan hukum." },
  { id: 'rk5', status: 'tantangan', judul: "Politik Uang & Oligarki", deskripsi: "Demokrasi terancam oleh maraknya politik uang dalam pemilu. Oligarki bisnis-politik menguat, menentukan arah kebijakan di berbagai level pemerintahan." },
  { id: 'rk6', status: 'tantangan', judul: "Akuntabilitas & Supremasi Hukum", deskripsi: "Kasus-kasus pelanggaran HAM masa lalu belum diselesaikan. Penegakan hukum tidak merata — lemah untuk penguasa, keras untuk rakyat kecil." }
];

export const media: MediaItem[] = [
  { id: 'm1', judul: "Pidato Pengunduran Diri Soeharto", deskripsi: "Rekaman asli pidato Soeharto pada 21 Mei 1998 yang mengumumkan pengunduran dirinya dari jabatan Presiden RI setelah 32 tahun berkuasa.", sumber: "Arsip TVRI", thumb: "https://img.youtube.com/vi/Aq6I2EBsZPA/hqdefault.jpg", url: "https://www.youtube.com/watch?v=Aq6I2EBsZPA" },
  { id: 'm2', judul: "Dokumenter Reformasi 1998 — Runtuhnya Orde Baru", deskripsi: "Dokumenter komprehensif yang merekam kronologi peristiwa Reformasi dari krisis ekonomi hingga tumbangnya Soeharto.", sumber: "Kompas TV", thumb: "https://img.youtube.com/vi/7E0e8IJKqOE/hqdefault.jpg", url: "https://www.youtube.com/watch?v=7E0e8IJKqOE" },
  { id: 'm3', judul: "Tragedi Trisakti — Rekaman & Kesaksian", deskripsi: "Dokumentasi peristiwa 12 Mei 1998 yang menewaskan empat mahasiswa Trisakti, disertai kesaksian langsung dari saksi mata dan keluarga korban.", sumber: "Metro TV", thumb: "https://img.youtube.com/vi/A_KRMMedEoE/hqdefault.jpg", url: "https://www.youtube.com/watch?v=A_KRMMedEoE" }
];

export const referensi: ReferensiItem[] = [
  { id: 'r1', penulis: "Harold Crouch", judul: "Militer dan Politik di Indonesia", penerbit: "Sinar Harapan", tahun: "1986", url: "https://www.goodreads.com/book/show/2408847" },
  { id: 'r2', penulis: "Baskara T. Wardaya (ed.)", judul: "Luka Bangsa Luka Sendiri: Tragedi 1998", penerbit: "Galangpress", tahun: "2007", url: "https://www.goodreads.com/book/show/7038563" },
  { id: 'r3', penulis: "Ariel Heryanto", judul: "Identitas dan Kenikmatan: Politik Budaya Layar Indonesia", penerbit: "KPG", tahun: "2015", url: "https://www.goodreads.com/book/show/25111088" },
  { id: 'r4', penulis: "R.E. Elson", judul: "Soeharto: A Political Biography", penerbit: "Cambridge University Press", tahun: "2001", url: "https://www.cambridge.org/core/books/suharto/" },
  { id: 'r5', penulis: "Tim Peneliti LIPI", judul: "Reformasi dan Demokratisasi di Indonesia", penerbit: "LIPI Press", tahun: "2001", url: "https://penerbit.lipi.go.id" },
  { id: 'r6', penulis: "Hermawan Sulistyo", judul: "Palu Arit di Ladang Tebu: Sejarah Pembantaian Massal", penerbit: "KPG", tahun: "2000", url: "https://www.goodreads.com/book/show/3458930" }
];

export const tim: TimItem[] = [
  { id: 't1', nama: "Fajar Ghozalah Ndaki", nis: "XI SIJA 1 - 14", peran: "Penulis Konten & Riset" },
  { id: 't2', nama: "Irsyad Abdul Jabbar Al Harits", nis: "XI SIJA 1 - 19", peran: "Desainer & Layout" },
  { id: 't3', nama: "Maulana Alghiffari", nis: "XI SIJA 1 - 23", peran: "Editor & Referensi" }
];
