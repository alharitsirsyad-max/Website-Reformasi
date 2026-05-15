/* =====================================================
   REFORMASI INDONESIA — Data Konten
   Edit file ini untuk mengubah konten website
   ===================================================== */

import type {
  PraReformasi, KrisisEvent, President,
  DampakItem, KiniItem, MediaItem, ReferensiItem, Tim
} from '../types';

// ─── META ────────────────────────────────────────────
export const meta = {
  judul: 'Reformasi Indonesia',
  subjudul: '1998 – Kini',
  deskripsi: 'Perjalanan demokratisasi Indonesia dari jatuhnya Orde Baru hingga era kepemimpinan saat ini.',
};

// ─── HERO ────────────────────────────────────────────
export const hero = {
  heroImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/1998_Indonesia_coup_attempt_-_protesters_on_top_of_MPR_building.jpg/1280px-1998_Indonesia_coup_attempt_-_protesters_on_top_of_MPR_building.jpg',
  tag: 'Reformasi masih berlanjut',
  h1Line1: 'Perjalanan',
  h1Line2: 'Reformasi',
  h1Line3: 'Indonesia',
  deskripsi: 'Dari tuntutan mahasiswa di jalanan hingga demokratisasi yang mengubah wajah bangsa — inilah perjalanan panjang menuju Indonesia yang lebih bebas dan bermartabat.',
  stats: [
    { nilai: '1998', label: 'Tahun Reformasi' },
    { nilai: '27+', label: 'Tahun Berjalan' },
    { nilai: '6', label: 'Presiden' },
    { nilai: 'Kini', label: 'Era Prabowo' },
  ],
  ctaLabel: 'Mulai menjelajahi',
};

// ─── PRA-REFORMASI ────────────────────────────────────
export const praReformasi: PraReformasi = {
  judul: 'Latar Belakang Reformasi',
  deskripsi: 'Selama 32 tahun Orde Baru di bawah Soeharto, Indonesia mengalami kemajuan ekonomi yang pesat namun disertai represi politik, korupsi sistemik, dan ketimpangan sosial yang mendalam. Krisis multidimensi 1997–1998 menjadi titik balik.',
  
  // Konten "Apa Itu Reformasi?"
  apaItuReformasi: {
    pengantar: 'Reformasi Indonesia adalah gerakan perubahan mendasar yang dimulai tahun 1998, menuntut demokratisasi, transparansi, dan penghormatan terhadap hak asasi manusia. Ini bukan sekadar pergantian pemimpin, melainkan transformasi sistem politik, hukum, dan sosial yang telah mengakar selama puluhan tahun. Reformasi adalah proses panjang yang masih berlanjut hingga hari ini.',
    quote: {
      teks: 'Reformasi bukan peristiwa sesaat, ia adalah proses berkelanjutan menuju Indonesia yang lebih adil dan demokratis.',
      sumber: 'Gerakan Mahasiswa 1998',
    },
    diperjuangkan: [
      'Demokrasi dan kebebasan berpendapat',
      'Pemilu yang jujur dan adil',
      'Kebebasan pers tanpa sensor',
      'Supremasi hukum dan keadilan',
      'Pemberantasan korupsi sistemik',
      'Otonomi daerah dan desentralisasi',
      'Penghormatan HAM',
    ],
    ditolak: [
      'Kekuasaan otoriter satu orang',
      'Dwifungsi ABRI dalam politik',
      'Korupsi, Kolusi, dan Nepotisme (KKN)',
      'Pembungkaman pers dan oposisi',
      'Pemilu yang diatur dan tidak bebas',
      'Pelanggaran HAM sistematis',
      'Sentralisasi kekuasaan berlebihan',
    ],
  },

  // Kartu Latar Belakang (dengan data modal)
  kartu: [
    {
      id: 'orde-baru',
      ikon: 'Building',
      judul: '32 Tahun Orde Baru',
      ringkasan: '32 tahun pemerintahan Soeharto dengan sistem politik satu partai dominan (Golkar), pembungkaman oposisi, dan kontrol ketat atas media dan sipil.',
      tahun: '1966–1998',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/President_Suharto%2C_1993.jpg/800px-President_Suharto%2C_1993.jpg',
      fotoKeterangan: 'Presiden Soeharto pada tahun 1993',
      latarBelakang: 'Soeharto berkuasa sejak 1966 setelah peristiwa G30S/PKI. Selama 32 tahun, ia membangun sistem kekuasaan yang sangat terpusat dengan Partai Golkar sebagai kendaraan politiknya. Golkar mendominasi setiap pemilu dengan dukungan penuh birokrasi dan militer. TNI/Polri memiliki kursi di DPR tanpa dipilih (dwifungsi ABRI). Seluruh media massa dikontrol ketat oleh Departemen Penerangan. Tidak ada oposisi yang diperbolehkan berkembang secara terbuka — siapapun yang kritis terhadap pemerintah bisa ditangkap dengan tuduhan subversif atau makar. Orde Baru memang membawa stabilitas dan pertumbuhan ekonomi, namun dengan mengorbankan kebebasan politik dan hak asasi manusia.',
      dampak: 'Ketiadaan checks and balances mengakibatkan korupsi yang sistemik dan masif. Sumber daya negara dikuasai oleh kroni-kroni Soeharto dan keluarganya. Rakyat tidak memiliki mekanisme demokratis untuk memprotes kebijakan atau mengganti pemimpin. Ketika krisis ekonomi 1997 datang, tidak ada lembaga independen yang cukup kuat untuk menangani krisis tersebut. Sistem yang rapuh ini akhirnya runtuh di bawah tekanan krisis ekonomi dan tuntutan reformasi.',
      referensi: [
        { judul: 'Orde Baru - Wikipedia', url: 'https://id.wikipedia.org/wiki/Orde_Baru' },
        { judul: 'Soeharto - Wikipedia', url: 'https://id.wikipedia.org/wiki/Soeharto' },
      ],
    },
    {
      id: 'kkn',
      ikon: 'AlertTriangle',
      judul: 'KKN yang Sistemik',
      ringkasan: 'Korupsi, Kolusi, Nepotisme (KKN) mengakar di semua lini pemerintahan. Kroni-kroni Soeharto menguasai sektor ekonomi strategis negara.',
      tahun: '1990-an',
      latarBelakang: 'KKN (Korupsi, Kolusi, Nepotisme) menjadi ciri khas Orde Baru, terutama di dekade 1990-an. Keluarga dan kroni Soeharto menguasai hampir semua sektor ekonomi strategis — dari perbankan, telekomunikasi, hingga sumber daya alam. Proyek-proyek pemerintah diberikan kepada konglomerat tertentu tanpa tender terbuka. Lisensi dan monopoli dibagikan kepada orang-orang dekat kekuasaan. Anak-anak Soeharto membangun kerajaan bisnis dengan fasilitas dari negara. Praktik suap dan gratifikasi menjadi hal yang lumrah di semua tingkatan birokrasi. Tidak ada lembaga pengawas yang independen dan berani mengungkap praktik korupsi ini.',
      dampak: 'KKN menciptakan ketimpangan ekonomi yang sangat besar. Kekayaan terkonsentrasi di tangan segelintir elite, sementara mayoritas rakyat hidup dalam kemiskinan. Ketika krisis 1997 melanda, banyak konglomerat yang bangkrut karena utang luar negeri yang tidak terkendali — dan beban ini akhirnya ditanggung oleh rakyat melalui bailout pemerintah. KKN merusak fondasi ekonomi nasional dan menghancurkan kepercayaan publik terhadap pemerintah.',
      referensi: [
        { judul: 'Korupsi di Indonesia - Wikipedia', url: 'https://id.wikipedia.org/wiki/Korupsi_di_Indonesia' },
        { judul: 'Kronisme Orde Baru', url: 'https://id.wikipedia.org/wiki/Orde_Baru#Korupsi_dan_kronisme' },
      ],
    },
    {
      id: 'krisis-ekonomi',
      ikon: 'TrendingDown',
      judul: 'Krisis Ekonomi 1997',
      ringkasan: 'Krisis moneter Asia menghantam Indonesia paling keras. Rupiah jatuh dari Rp2.500 menjadi Rp16.000 per dolar. Jutaan orang jatuh ke garis kemiskinan.',
      tahun: '1997–1998',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Indonesians_lining_up_to_buy_kerosene_1998.jpg/800px-Indonesians_lining_up_to_buy_kerosene_1998.jpg',
      fotoKeterangan: 'Warga Indonesia mengantri membeli minyak tanah pada 1998',
      latarBelakang: 'Krisis finansial Asia bermula dari Thailand pada Juli 1997 ketika Bath Thailand kolaps. Efek domino menjalar ke seluruh Asia Tenggara, dan Indonesia terdampak paling parah. Fondasi ekonomi Indonesia ternyata sangat rapuh: utang luar negeri swasta sangat besar, cadangan devisa tipis, dan sistem perbankan lemah penuh dengan kredit macet. Rupiah yang semula stabil di Rp2.400/USD mulai jatuh bebas — mencapai Rp5.000 di akhir 1997, lalu Rp10.000, dan akhirnya menembus Rp16.000/USD di awal 1998. Inflasi melonjak di atas 70%. Ribuan perusahaan bangkrut dalam hitungan bulan. Pengangguran meledak. Bank-bank kolaps satu per satu.',
      dampak: 'Puluhan juta rakyat Indonesia jatuh ke bawah garis kemiskinan dalam waktu singkat. Harga sembako melonjak tak terkendali — harga beras, minyak goreng, dan kebutuhan pokok lainnya naik berkali lipat. Antrian panjang terjadi di depan toko dan bank. Kerusuhan sosial pecah di berbagai kota karena kelangkaan barang dan frustasi ekonomi. Krisis ekonomi ini menjadi pemicu langsung yang mempercepat runtuhnya Orde Baru — rakyat yang selama ini diam mulai berani turun ke jalan menuntut perubahan.',
      referensi: [
        { judul: 'Krisis Finansial Asia 1997 - Wikipedia', url: 'https://id.wikipedia.org/wiki/Krisis_finansial_Asia_1997' },
        { judul: 'Krisis Moneter Indonesia 1997-1998', url: 'https://id.wikipedia.org/wiki/Krisis_moneter_Indonesia_1997%E2%80%931998' },
      ],
    },
    {
      id: 'kebebasan-dibungkam',
      ikon: 'Users',
      judul: 'Kebebasan Dibungkam',
      ringkasan: 'Pers disensor ketat, oposisi dilarang, aktivis ditangkap. Mahasiswa dan rakyat akhirnya berani turun ke jalan menuntut kebebasan dan demokrasi.',
      tahun: '1966–1998',
      latarBelakang: 'Selama Orde Baru, kebebasan berpendapat dan pers dikontrol sangat ketat oleh Departemen Penerangan. Semua media massa harus memiliki SIUPP (Surat Izin Usaha Penerbitan Pers) yang bisa dicabut sewaktu-waktu jika dianggap "tidak sejalan" dengan pemerintah. Puluhan media pernah dibredel — termasuk Tempo, Editor, dan Detik pada 1994. Organisasi masyarakat sipil yang kritis dibubarkan atau dilarang. Aktivis pro-demokrasi ditangkap dengan tuduhan subversif. Mahasiswa yang demonstrasi bisa diculik dan "dihilangkan". Tidak ada ruang bagi oposisi politik yang sejati — PDI dan PPP hanya menjadi oposisi boneka yang dikontrol rezim.',
      dampak: 'Pembungkaman ini menciptakan budaya takut dan apatis politik di masyarakat. Namun di balik itu, kekecewaan dan kemarahan terus menumpuk. Ketika krisis ekonomi melanda, bendungan itu jebol — mahasiswa dari UI, ITB, UGM, Trisakti, dan universitas lain mulai berani turun ke jalan secara masif. Mereka menuntut reformasi total: kebebasan pers, penghapusan dwifungsi ABRI, pemberantasan KKN, dan pengunduran diri Soeharto. Gerakan mahasiswa 1998 ini akhirnya berhasil menggulingkan rezim Orde Baru.',
      referensi: [
        { judul: 'Kebebasan Pers di Indonesia - Wikipedia', url: 'https://id.wikipedia.org/wiki/Kebebasan_pers_di_Indonesia' },
        { judul: 'Gerakan Mahasiswa 1998', url: 'https://id.wikipedia.org/wiki/Demonstrasi_mahasiswa_Indonesia_1998' },
      ],
    },
  ],

  // Cita-Cita & Tujuan Reformasi
  citaCita: {
    timeline: [
      { label: 'Tuntutan', deskripsi: 'Mahasiswa menuntut reformasi total' },
      { label: 'Gerakan Massal', deskripsi: 'Rakyat turun ke jalan' },
      { label: 'Jatuhnya Soeharto', deskripsi: '21 Mei 1998' },
      { label: 'Demokratisasi', deskripsi: 'Pemilu bebas & pers merdeka' },
      { label: 'Reformasi Berkelanjutan', deskripsi: 'Proses masih berjalan' },
    ],
    tujuan: [
      {
        judul: 'Demokrasi Sejati',
        ikon: 'Vote',
        deskripsi: 'Sistem politik yang memberikan kekuasaan kepada rakyat melalui pemilu yang jujur, adil, dan bebas. Setiap warga negara memiliki hak untuk memilih dan dipilih tanpa intimidasi. Partai politik bisa berkompetisi secara sehat tanpa dominasi satu kekuatan.',
      },
      {
        judul: 'Keadilan Hukum',
        ikon: 'Scale',
        deskripsi: 'Supremasi hukum di mana semua orang sama di hadapan hukum — tidak ada yang kebal hukum, tidak peduli seberapa tinggi jabatannya. Lembaga peradilan yang independen, bebas dari intervensi politik dan kekuasaan. Pemberantasan korupsi di semua tingkatan.',
      },
      {
        judul: 'Kesejahteraan Rakyat',
        ikon: 'Heart',
        deskripsi: 'Pembangunan ekonomi yang merata dan berkeadilan, bukan hanya menguntungkan segelintir elite. Akses pendidikan dan kesehatan yang terjangkau untuk semua lapisan masyarakat. Perlindungan sosial bagi kelompok rentan dan pengurangan kesenjangan ekonomi.',
      },
    ],
  },

  // Konteks Sejarah
  konteksSejarah: {
    paragraf: 'Indonesia di bawah Orde Baru mengalami pertumbuhan ekonomi rata-rata 7% per tahun selama tiga dekade. Namun di balik angka-angka makro yang impresif, terdapat masalah struktural yang mengakar: korupsi sistemik, ketimpangan ekonomi yang lebar, pembungkaman kebebasan sipil, dan tidak adanya mekanisme checks and balances. Ketika krisis ekonomi Asia 1997 melanda, fondasi yang rapuh ini langsung runtuh — memicu krisis multidimensi yang berujung pada kejatuhan rezim Soeharto pada 21 Mei 1998.',
    fakta: [
      { label: 'Rupiah Anjlok', nilai: 'Rp2.400 → Rp16.000/USD' },
      { label: 'Lama Berkuasa', nilai: '32 tahun satu pemimpin' },
      { label: 'Tragedi Trisakti', nilai: '4 mahasiswa gugur 12 Mei 1998' },
      { label: 'Pemilu Demokratis', nilai: '48 partai di Pemilu 1999' },
    ],
  },
};

// ─── KRISIS & GERAKAN 1998 ───────────────────────────
export const krisisGerakan: KrisisEvent[] = [
  {
    tahun: 'Jan 1998',
    judul: 'Rupiah Terjun Bebas',
    deskripsi: 'Nilai tukar rupiah menembus Rp10.000/dolar, kemudian Rp16.000. IMF memberikan pinjaman darurat dengan syarat reformasi ekonomi yang menyakitkan.',
    highlight: true,
    tag: 'Ekonomi',
  },
  {
    tahun: 'Feb–Apr 1998',
    judul: 'Aksi Mahasiswa Meluas',
    deskripsi: 'Demonstrasi mahasiswa di universitas-universitas besar: UI, ITB, UGM, UNAIR. Tuntutan: hapus KKN, reformasi politik, turunkan Soeharto.',
    highlight: false,
    tag: 'Sosial',
  },
  {
    tahun: '12 Mei 1998',
    judul: 'Tragedi Trisakti',
    deskripsi: 'Empat mahasiswa Trisakti — Elang, Heri, Hendriawan, dan Hafidin — ditembak dan gugur saat demonstrasi damai. Peristiwa ini membakar kemarahan nasional.',
    highlight: true,
    tag: 'Tragedi',
  },
  {
    tahun: '13–15 Mei 1998',
    judul: 'Kerusuhan Jakarta',
    deskripsi: 'Kerusuhan massal melanda Jakarta dan beberapa kota besar. Pusat perbelanjaan dibakar, ribuan orang tewas, kelompok Tionghoa menjadi sasaran kekerasan.',
    highlight: true,
    tag: 'Krisis',
  },
  {
    tahun: '19 Mei 1998',
    judul: 'DPR/MPR Diduduki Mahasiswa',
    deskripsi: 'Ratusan ribu mahasiswa menduduki gedung DPR/MPR. Ribuan orang merayap di atap gedung parlemen. Momen ikonik yang menandai keruntuhan kekuasaan Orde Baru.',
    highlight: true,
    tag: 'Bersejarah',
  },
  {
    tahun: '21 Mei 1998',
    judul: 'Soeharto Mengundurkan Diri',
    deskripsi: 'Soeharto menyatakan mundur dari jabatan presiden setelah 32 tahun berkuasa. B.J. Habibie dilantik sebagai presiden — membuka era baru Reformasi Indonesia.',
    highlight: true,
    tag: 'Bersejarah',
  },
];

// ─── 6 PRESIDEN ERA REFORMASI ────────────────────────
export const presidents: President[] = [

  // ═══════════════════════════════════════════════════
  // B.J. HABIBIE — Layout A (Foto kiri, konten kanan)
  // ═══════════════════════════════════════════════════
  {
    id: 'habibie',
    layout: 'A',
    periode: '1998–1999',
    jabatan: 'Presiden ke-3 RI',
    nama: 'B.J. Habibie',
    namaLengkap: 'Bacharuddin Jusuf Habibie',
    fotoUrl: '/habibie.jpeg',
    fotoGallery: [
      '/habibie.jpeg',
      '/habibie.jpeg', // Placeholder - user can replace with actual gallery photos
      '/habibie.jpeg', // Placeholder - user can replace with actual gallery photos
    ],
    fotoKeterangan: 'B.J. Habibie, Presiden ke-3 Republik Indonesia',
    fotoLisensi: 'Wikimedia Commons / Domain Publik',
    warnaTema: '#8B1A1A',
    fallbackGradient: 'linear-gradient(135deg,#1A1A2E,#2A0A0A)',
    quote: 'Apa yang saya ingin lakukan adalah memberikan yang terbaik bagi bangsa dan negara yang saya cintai.',
    quoteSumber: 'B.J. Habibie',
    ringkasan: 'Menggantikan Soeharto pada 21 Mei 1998, Habibie menjabat hanya 16 bulan namun melakukan lebih banyak reformasi mendasar daripada siapapun. Ia membuka kebebasan pers, membebaskan tapol, menyelenggarakan Pemilu 1999 yang demokratis, dan memberi kesempatan referendum bagi Timor Timur — keputusan-keputusan yang mengubah wajah Indonesia selamanya.',
    kebijakan: [
      {
        ikon: 'Newspaper',
        judul: 'UU Pers No. 40/1999',
        kategori: 'Politik',
        deskripsi: 'Sensor media massa resmi dicabut. UU ini menjamin kebebasan pers sebagai hak asasi warga negara. Ratusan media baru — koran, majalah, stasiun TV dan radio — bermunculan dalam hitungan bulan.',
        dampak: 'Indonesia memiliki salah satu pers paling bebas di Asia Tenggara dalam waktu sangat singkat.',
        refUrl: 'https://id.wikipedia.org/wiki/Undang-Undang_Nomor_40_Tahun_1999',
      },
      {
        ikon: 'Users',
        judul: 'Pembebasan Tahanan Politik',
        kategori: 'Politik',
        deskripsi: 'Ribuan tahanan politik yang dipenjara rezim Orde Baru dibebaskan, termasuk aktivis, jurnalis, dan tokoh oposisi. Larangan organisasi kemasyarakatan dicabut secara bertahap.',
        dampak: 'Ruang sipil terbuka kembali setelah puluhan tahun dibungkam.',
        refUrl: 'https://id.wikipedia.org/wiki/Reformasi_Indonesia',
      },
      {
        ikon: 'Vote',
        judul: 'UU Partai Politik & Pemilu',
        kategori: 'Politik',
        deskripsi: 'Undang-undang yang memungkinkan sistem multipartai disahkan. Pemilu 1999 diikuti 48 partai politik — pertama kalinya sejak 1955 ada persaingan politik yang nyata, bebas, dan adil.',
        dampak: 'Fondasi demokrasi multipartai Indonesia diletakkan dalam waktu kurang dari setahun.',
        refUrl: 'https://id.wikipedia.org/wiki/Pemilihan_umum_legislatif_Indonesia_1999',
      },
      {
        ikon: 'MapPin',
        judul: 'Referendum Timor Timur',
        kategori: 'Politik',
        deskripsi: 'Habibie mengizinkan referendum untuk Timor Timur — keputusan berani yang ditentang keras oleh kalangan militer. Hasilnya: 78,5% warga Timtim memilih merdeka pada Agustus 1999.',
        dampak: 'Timor Timur menjadi negara Timor Leste yang merdeka. Indonesia kehilangan satu provinsi tapi mendapat pengakuan dan kepercayaan internasional.',
        kontroversial: true,
        refUrl: 'https://id.wikipedia.org/wiki/Referendum_Timor_Timur_1999',
      },
      {
        ikon: 'Scale',
        judul: 'Penghapusan Dwifungsi ABRI',
        kategori: 'Hukum',
        deskripsi: 'Proses pemisahan fungsi militer dari politik sipil dimulai di era Habibie. TNI/Polri mulai diarahkan keluar dari jabatan-jabatan sipil yang selama Orde Baru mereka kuasai.',
        dampak: 'Reformasi TNI berjalan meski lambat dan panjang, membuka jalan bagi supremasi sipil dalam demokrasi.',
        refUrl: 'https://id.wikipedia.org/wiki/Dwifungsi_ABRI',
      },
    ],
    events: [
      {
        tanggal: '21 Mei 1998',
        judul: 'Habibie Dilantik sebagai Presiden',
        deskripsi: 'Soeharto mengundurkan diri dan Habibie dilantik saat itu juga sebagai Presiden RI ke-3. Momen bersejarah yang menandai berakhirnya 32 tahun Orde Baru.',
        highlight: true,
        tag: 'Bersejarah',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Pengunduran_diri_Soeharto',
        videoLabel: 'Detik-detik Pengunduran Diri Soeharto',
        videoUrl: 'https://www.youtube.com/watch?v=aNgR1CGCMQY',
      },
      {
        tanggal: 'Jun 1998',
        judul: 'Kebebasan Pers Dibuka',
        deskripsi: 'Sensor dan kontrol media dicabut. Ratusan surat kabar, majalah, dan stasiun radio bermunculan. Indonesia memasuki era kebebasan pers yang belum pernah ada sebelumnya.',
        highlight: false,
        tag: 'Pers',
        refLabel: 'UU Pers 1999',
        refUrl: 'https://id.wikipedia.org/wiki/Undang-Undang_Nomor_40_Tahun_1999',
      },
      {
        tanggal: 'Agt 1998',
        judul: 'Tapol Dibebaskan',
        deskripsi: 'Ribuan tahanan politik masa Orde Baru dibebaskan secara bertahap. Termasuk tokoh-tokoh yang telah dipenjara belasan tahun tanpa proses peradilan yang adil.',
        highlight: false,
        tag: 'HAM',
      },
      {
        tanggal: '30 Agt 1999',
        judul: 'Referendum Timor Timur',
        deskripsi: '78,5% warga Timor Timur memilih merdeka dalam referendum yang diawasi PBB. Hasilnya mengejutkan dunia dan menandai perpisahan bersejarah antara Indonesia dan Timtim.',
        highlight: true,
        tag: 'Referendum',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Referendum_Timor_Timur_1999',
      },
      {
        tanggal: '7 Jun 1999',
        judul: 'Pemilu Demokratis Pertama — 48 Partai',
        deskripsi: 'Pemilu legislatif diikuti 48 partai politik dengan 120 juta pemilih. PDIP memenangkan suara terbanyak. Pemilu ini dinilai sebagai yang paling demokratis dalam sejarah RI.',
        highlight: true,
        tag: 'Pemilu',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Pemilihan_umum_legislatif_Indonesia_1999',
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // GUS DUR — Layout Aflip (Foto kanan, konten kiri)
  // ═══════════════════════════════════════════════════
  {
    id: 'gus-dur',
    layout: 'Aflip',
    periode: '1999–2001',
    jabatan: 'Presiden ke-4 RI',
    nama: 'Abdurrahman Wahid',
    namaLengkap: 'K.H. Abdurrahman Wahid (Gus Dur)',
    fotoUrl: '/gusdur.jpeg',
    fotoGallery: [
      '/gusdur.jpeg',
      '/gusdur.jpeg', // Placeholder - user can replace with actual gallery photos
      '/gusdur.jpeg', // Placeholder - user can replace with actual gallery photos
    ],
    fotoKeterangan: 'Abdurrahman Wahid (Gus Dur), Presiden ke-4 RI',
    fotoLisensi: 'Wikimedia Commons / Domain Publik',
    warnaTema: '#8B1A1A',
    fallbackGradient: 'linear-gradient(135deg,#1A1A2E,#2A1A30)',
    quote: 'Tidak penting apa pun agama atau sukumu. Kalau kamu bisa melakukan sesuatu yang baik untuk semua orang, orang tidak pernah tanya apa agamamu.',
    quoteSumber: 'Abdurrahman Wahid',
    ringkasan: 'Tokoh ulama berpengaruh yang terpilih melalui MPR membawa angin segar pluralisme dan kebebasan sipil yang belum pernah ada sebelumnya. Gus Dur dikenal karena keberaniannya mencabut diskriminasi etnis, membuka dialog damai, dan sikap humorisnya. Namun kepemimpinannya yang kontroversial berujung pada pelengseran oleh MPR pada 2001.',
    kebijakan: [
      {
        ikon: 'Globe',
        judul: 'Penghapusan Diskriminasi Etnis Tionghoa',
        kategori: 'Politik',
        deskripsi: 'Inpres No. 6/2000 mencabut larangan aktivitas budaya Tionghoa yang berlaku sejak 1967. Imlek diperbolehkan dirayakan secara terbuka. Bahasa dan aksara Mandarin bebas digunakan kembali di ruang publik.',
        dampak: 'Masyarakat Tionghoa akhirnya bisa merayakan identitas budaya mereka secara terbuka setelah 32 tahun dilarang.',
        refUrl: 'https://id.wikipedia.org/wiki/Instruksi_Presiden_Indonesia_Nomor_6_Tahun_2000',
      },
      {
        ikon: 'Shield',
        judul: 'Pendirian Departemen HAM',
        kategori: 'Hukum',
        deskripsi: 'Dibentuk Kementerian/Departemen HAM khusus untuk menangani kasus-kasus pelanggaran hak asasi manusia — terutama kasus-kasus masa Orde Baru yang belum terselesaikan.',
        dampak: 'Landasan kelembagaan perlindungan HAM di Indonesia mulai terbentuk secara formal.',
        refUrl: 'https://id.wikipedia.org/wiki/Kementerian_Hukum_dan_Hak_Asasi_Manusia_Indonesia',
      },
      {
        ikon: 'MessageCircle',
        judul: 'Dialog Damai Aceh & Papua',
        kategori: 'Politik',
        deskripsi: 'Gus Dur membuka dialog langsung dengan GAM di Aceh dan tokoh-tokoh Papua. Pendekatan diplomatik menggantikan pendekatan militer represif yang selama ini diterapkan Orde Baru.',
        dampak: 'Membuka pintu perdamaian Aceh yang kelak terwujud di era SBY melalui MoU Helsinki 2005.',
        refUrl: 'https://id.wikipedia.org/wiki/Konflik_Aceh',
      },
      {
        ikon: 'Landmark',
        judul: 'Implementasi Otonomi Daerah',
        kategori: 'Politik',
        deskripsi: 'UU Otonomi Daerah yang disahkan era Habibie mulai diimplementasikan secara nyata. Kewenangan besar diberikan ke kabupaten/kota, bukan sekadar provinsi.',
        dampak: 'Pergeseran kekuasaan dari pusat ke daerah yang paling masif dalam sejarah RI — mengubah seluruh peta politik lokal.',
        refUrl: 'https://id.wikipedia.org/wiki/Otonomi_daerah_di_Indonesia',
      },
      {
        ikon: 'AlertTriangle',
        judul: 'Dekrit Presiden & Pelengseran',
        kategori: 'Politik',
        deskripsi: 'Konflik berkepanjangan dengan DPR akhirnya memuncak ketika Gus Dur mengeluarkan dekrit membubarkan DPR. MPR berbalik melengserkannya pada Juli 2001 setelah ia dinyatakan melanggar konstitusi.',
        dampak: 'Menunjukkan pentingnya checks and balances dalam sistem demokrasi yang masih muda dan rapuh.',
        kontroversial: true,
        refUrl: 'https://id.wikipedia.org/wiki/Pemakzulan_Abdurrahman_Wahid',
      },
    ],
    events: [
      {
        tanggal: 'Okt 1999',
        judul: 'Gus Dur Terpilih sebagai Presiden',
        deskripsi: 'MPR memilih Abdurrahman Wahid sebagai presiden keempat RI melalui proses yang alot dan penuh negosiasi. Megawati yang partainya memenangkan pemilu justru menjadi wakil presiden.',
        highlight: true,
        tag: 'Bersejarah',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Abdurrahman_Wahid',
      },
      {
        tanggal: 'Jan 2000',
        judul: 'Imlek Jadi Hari Libur Nasional',
        deskripsi: 'Untuk pertama kalinya dalam 32 tahun, Imlek diakui dan dirayakan secara terbuka. Keputusan ini disambut antusias oleh komunitas Tionghoa Indonesia di seluruh nusantara.',
        highlight: true,
        tag: 'Sosial',
        refUrl: 'https://id.wikipedia.org/wiki/Tahun_Baru_Imlek_di_Indonesia',
      },
      {
        tanggal: '2000',
        judul: 'Dialog Damai Aceh Dimulai',
        deskripsi: 'Pemerintah RI dan GAM memulai negosiasi damai di Jenewa. Meski gagal mencapai perjanjian permanen, ini menjadi fondasi penting bagi perdamaian Aceh di masa SBY.',
        highlight: false,
        tag: 'Perdamaian',
        refUrl: 'https://id.wikipedia.org/wiki/Konflik_Aceh',
      },
      {
        tanggal: '2001',
        judul: 'Dekrit Presiden Dikeluarkan',
        deskripsi: 'Gus Dur mengeluarkan dekrit membubarkan DPR dan menyatakan keadaan darurat nasional. Keputusan kontroversial ini menimbulkan krisis konstitusional yang parah.',
        highlight: false,
        tag: 'Konstitusi',
        refUrl: 'https://id.wikipedia.org/wiki/Abdurrahman_Wahid',
      },
      {
        tanggal: '23 Jul 2001',
        judul: 'Dilengserkan MPR',
        deskripsi: 'MPR mencabut mandat Gus Dur dan melantik Megawati Sukarnoputri sebagai presiden. Gus Dur menolak keputusan itu sebagai ilegal namun tidak melakukan perlawanan kekerasan.',
        highlight: true,
        tag: 'Pemakzulan',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Pemakzulan_Abdurrahman_Wahid',
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // MEGAWATI — Layout E (Foto kiri + timeline horizontal)
  // ═══════════════════════════════════════════════════
  {
    id: 'megawati',
    layout: 'E',
    periode: '2001–2004',
    jabatan: 'Presiden ke-5 RI',
    nama: 'Megawati',
    namaLengkap: 'Megawati Sukarnoputri',
    fotoUrl: '/megawati.jpeg',
    fotoGallery: [
      '/megawati.jpeg',
      '/megawati.jpeg', // Placeholder - user can replace with actual gallery photos
      '/megawati.jpeg', // Placeholder - user can replace with actual gallery photos
    ],
    fotoKeterangan: 'Megawati Sukarnoputri, Presiden ke-5 RI dan presiden perempuan pertama Indonesia',
    fotoLisensi: 'Wikimedia Commons / Domain Publik',
    warnaTema: '#B8892A',
    fallbackGradient: 'linear-gradient(135deg,#2A1A0E,#412402)',
    quote: 'Saya adalah anak bangsa yang menjunjung tinggi nilai-nilai demokrasi.',
    quoteSumber: 'Megawati Sukarnoputri',
    ringkasan: 'Presiden perempuan pertama Indonesia dan putri Soekarno. Di tengah ancaman terorisme yang mengguncang pasca-Bom Bali dan tekanan ekonomi yang belum pulih sepenuhnya, Megawati mendirikan KPK — lembaga yang kelak menjadi simbol paling kuat dari reformasi pemberantasan korupsi di Indonesia.',
    kebijakan: [
      {
        ikon: 'Search',
        judul: 'Pendirian KPK',
        kategori: 'Hukum',
        deskripsi: 'UU No. 30/2002 mendirikan Komisi Pemberantasan Korupsi sebagai lembaga independen dengan kewenangan penuh untuk menyelidiki, menuntut, dan mengadili koruptor dari semua tingkatan.',
        dampak: 'KPK berhasil menjerat ratusan pejabat korup — gubernur, menteri, hingga anggota DPR — dalam dua dekade berikutnya.',
        refUrl: 'https://id.wikipedia.org/wiki/Komisi_Pemberantasan_Korupsi',
      },
      {
        ikon: 'BookOpen',
        judul: 'Selesainya Amandemen UUD 1945 (Ke-4)',
        kategori: 'Konstitusi',
        deskripsi: 'Proses amandemen konstitusi yang dimulai sejak 1999 akhirnya tuntas di era Megawati pada 2002. Hasilnya: presiden dibatasi 2 periode, Pilpres langsung ditetapkan, dan Mahkamah Konstitusi serta DPD dibentuk.',
        dampak: 'Fondasi konstitusional demokrasi Indonesia modern selesai dibangun — perubahan paling fundamental sejak kemerdekaan.',
        refUrl: 'https://id.wikipedia.org/wiki/Undang-Undang_Dasar_Negara_Republik_Indonesia_Tahun_1945',
      },
      {
        ikon: 'Zap',
        judul: 'Penanganan Terorisme Pasca Bom Bali',
        kategori: 'Keamanan',
        deskripsi: 'Setelah Bom Bali 2002 yang menewaskan 202 orang, pemerintah membentuk Densus 88, mengesahkan UU Antiterorisme, dan mulai memberantas jaringan Jemaah Islamiyah secara serius dan sistematis.',
        dampak: 'Indonesia berhasil memproses dan menghukum puluhan teroris, termasuk dalang dan pelaku langsung Bom Bali.',
        refUrl: 'https://id.wikipedia.org/wiki/Bom_Bali_2002',
      },
      {
        ikon: 'TrendingUp',
        judul: 'Stabilisasi Ekonomi Pasca-Krisis',
        kategori: 'Ekonomi',
        deskripsi: 'Rupiah berhasil distabilkan di kisaran Rp8.000–9.000, inflasi ditekan, cadangan devisa dipulihkan secara bertahap. Pertumbuhan ekonomi kembali ke angka positif setelah kontraksi parah 1998.',
        dampak: 'Fondasi ekonomi yang lebih stabil untuk era SBY yang kemudian tumbuh pesat rata-rata 6% per tahun.',
        refUrl: 'https://id.wikipedia.org/wiki/Ekonomi_Indonesia',
      },
      {
        ikon: 'Building',
        judul: 'Privatisasi BUMN',
        kategori: 'Ekonomi',
        deskripsi: 'Sejumlah BUMN dijual atau dilepas sebagian sahamnya ke publik untuk menambal defisit anggaran. Kebijakan ini memenuhi syarat IMF namun dikritik keras sebagai melepas aset negara.',
        dampak: 'Kontroversi yang masih diperdebatkan: antara efisiensi pasar dengan kedaulatan ekonomi nasional.',
        kontroversial: true,
        refUrl: 'https://id.wikipedia.org/wiki/Badan_Usaha_Milik_Negara',
      },
    ],
    events: [
      {
        tanggal: '23 Jul 2001',
        judul: 'Megawati Dilantik sebagai Presiden',
        deskripsi: 'MPR melantik Megawati sebagai Presiden RI ke-5, menggantikan Gus Dur. Ia menjadi perempuan pertama yang menjabat presiden dalam sejarah Indonesia.',
        highlight: true,
        tag: 'Bersejarah',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Megawati_Sukarnoputri',
      },
      {
        tanggal: '12 Okt 2002',
        judul: 'Bom Bali I — 202 Jiwa Melayang',
        deskripsi: 'Ledakan bom di Kuta, Bali menewaskan 202 orang dari 21 negara — tragedi terorisme terbesar dalam sejarah Indonesia. Dunia berduka dan perburuan pelaku dimulai.',
        highlight: true,
        tag: 'Tragedi',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Bom_Bali_2002',
      },
      {
        tanggal: '2002',
        judul: 'Amandemen UUD ke-4 Selesai',
        deskripsi: 'MPR menyelesaikan paket amandemen UUD 1945 yang keempat dan terakhir. Pilpres langsung dan pembentukan MK menjadi bagian dari reformasi konstitusional yang monumental.',
        highlight: false,
        tag: 'Konstitusi',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Amandemen_Undang-Undang_Dasar_1945',
      },
      {
        tanggal: '2003',
        judul: 'KPK Resmi Berdiri',
        deskripsi: 'Komisi Pemberantasan Korupsi resmi beroperasi sebagai lembaga independen anti-korupsi. KPK dilengkapi kewenangan penyadapan, penangkapan, dan penuntutan yang tidak dimiliki aparat biasa.',
        highlight: true,
        tag: 'Reformasi',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Komisi_Pemberantasan_Korupsi',
      },
      {
        tanggal: '2004',
        judul: 'Pemilu Legislatif & Pilpres Langsung Pertama',
        deskripsi: 'Pemilu legislatif diikuti 24 partai. Ini sekaligus persiapan untuk Pilpres langsung pertama dalam sejarah Indonesia — mekanisme yang baru saja dikukuhkan oleh amandemen konstitusi.',
        highlight: false,
        tag: 'Pemilu',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Pemilihan_umum_legislatif_Indonesia_2004',
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // SBY — Layout Cflip (Foto kanan, konten kiri + zigzag)
  // ═══════════════════════════════════════════════════
  {
    id: 'sby',
    layout: 'Cflip',
    periode: '2004–2014',
    jabatan: 'Presiden ke-6 RI',
    nama: 'SBY',
    namaLengkap: 'Susilo Bambang Yudhoyono',
    fotoUrl: '/sby.jpeg',
    fotoGallery: [
      '/sby.jpeg',
      '/sby.jpeg', // Placeholder - user can replace with actual gallery photos
      '/sby.jpeg', // Placeholder - user can replace with actual gallery photos
    ],
    fotoKeterangan: 'Susilo Bambang Yudhoyono (SBY), Presiden ke-6 RI',
    fotoLisensi: 'Wikimedia Commons / Domain Publik',
    warnaTema: '#0F6E56',
    fallbackGradient: 'linear-gradient(135deg,#0A2E24,#0F6E56)',
    quote: 'Saya tidak akan pernah mengecewakan rakyat yang telah memilih saya dengan penuh kepercayaan.',
    quoteSumber: 'Susilo Bambang Yudhoyono',
    ringkasan: 'Presiden pertama yang dipilih langsung oleh rakyat Indonesia. Satu dekade SBY — dua periode penuh 2004–2014 — ditandai stabilitas politik yang belum pernah ada sebelumnya, pertumbuhan ekonomi 6% per tahun, perdamaian Aceh, dan KPK yang mulai menggigit. Namun masa ini juga diwarnai kritik atas lambatnya pemberantasan korupsi di dalam pemerintahannya sendiri.',
    kebijakan: [
      {
        ikon: 'Vote',
        judul: 'Pilpres Langsung Pertama (2004)',
        kategori: 'Politik',
        deskripsi: 'SBY adalah presiden pertama yang dipilih langsung oleh seluruh rakyat Indonesia dalam sejarah bangsa. Sistem ini menggantikan pemilihan melalui MPR yang berlaku sejak kemerdekaan 1945.',
        dampak: 'Demokrasi Indonesia menjadi lebih langsung, akuntabel, dan representatif — lompatan besar menuju kedewasaan demokrasi.',
        refUrl: 'https://id.wikipedia.org/wiki/Pemilihan_umum_presiden_Indonesia_2004',
      },
      {
        ikon: 'FileText',
        judul: 'MoU Helsinki — Perdamaian Aceh',
        kategori: 'Politik',
        deskripsi: 'Perjanjian damai antara RI dan GAM ditandatangani di Helsinki, Finlandia (15 Agustus 2005), mengakhiri konflik bersenjata 30 tahun yang menelan puluhan ribu korban jiwa.',
        dampak: 'Aceh damai. Ribuan mantan kombatan GAM reintegrasi ke masyarakat. Pilkada Aceh berjalan. MoU Helsinki dianggap sebagai capaian diplomasi terbesar SBY.',
        refUrl: 'https://id.wikipedia.org/wiki/Nota_Kesepahaman_Helsinki',
      },
      {
        ikon: 'DollarSign',
        judul: 'Program BLT (Bantuan Langsung Tunai)',
        kategori: 'Ekonomi',
        deskripsi: 'Ketika subsidi BBM dikurangi pada 2005, pemerintah membagikan uang tunai langsung kepada rakyat miskin sebagai kompensasi. Program ini menjadi model perlindungan sosial modern Indonesia.',
        dampak: 'Jutaan keluarga miskin mendapat bantuan langsung. Model social safety net Indonesia modern dimulai dari sini.',
        kontroversial: true,
        refUrl: 'https://id.wikipedia.org/wiki/Bantuan_Langsung_Tunai',
      },
      {
        ikon: 'TrendingUp',
        judul: 'Pertumbuhan Ekonomi 6% Per Tahun',
        kategori: 'Ekonomi',
        deskripsi: 'Di era SBY, Indonesia bergabung ke G-20 (2008). PDB tumbuh rata-rata 6% per tahun, inflasi terkendali, investasi asing meningkat pesat, dan kelas menengah bertumbuh signifikan.',
        dampak: 'Indonesia menjadi salah satu ekonomi berkembang terbesar dan paling stabil di dunia — berhasil melewati krisis finansial global 2008 tanpa resesi.',
        refUrl: 'https://id.wikipedia.org/wiki/Ekonomi_Indonesia',
      },
      {
        ikon: 'Scale',
        judul: 'Penguatan KPK & Pemberantasan Korupsi',
        kategori: 'Hukum',
        deskripsi: 'KPK yang baru berdiri diberi keleluasaan beroperasi. Puluhan pejabat kelas atas ditangkap termasuk gubernur, menteri, dan anggota DPR. Operasi tangkap tangan (OTT) menjadi modus andalan KPK.',
        dampak: 'KPK menangani lebih dari 500 kasus dalam satu dekade era SBY — menjadi lembaga paling ditakuti koruptor di Indonesia.',
        refUrl: 'https://id.wikipedia.org/wiki/Komisi_Pemberantasan_Korupsi',
      },
      {
        ikon: 'Globe',
        judul: 'Diplomasi Aktif & Keanggotaan G20',
        kategori: 'Luar Negeri',
        deskripsi: 'Indonesia aktif di forum internasional. Saat krisis finansial global 2008, Indonesia menjadi salah satu negara yang relatif tidak terdampak berkat kebijakan moneter yang prudent dan hati-hati.',
        dampak: 'Posisi Indonesia di panggung global meningkat signifikan — diakui sebagai demokrasi besar ketiga di dunia.',
        refUrl: 'https://id.wikipedia.org/wiki/Hubungan_luar_negeri_Indonesia',
      },
    ],
    events: [
      {
        tanggal: 'Sep 2004',
        judul: 'SBY Menang Pilpres Langsung Pertama',
        deskripsi: 'SBY bersama JK memenangkan pilpres langsung pertama dengan 60,6% suara. Kemenangan telak ini menjadi legitimasi kuat untuk pemerintahan baru.',
        highlight: true,
        tag: 'Bersejarah',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Pemilihan_umum_presiden_Indonesia_2004',
      },
      {
        tanggal: '26 Des 2004',
        judul: 'Tsunami Aceh — 165.000 Jiwa',
        deskripsi: 'Gempa 9,1 SR diikuti tsunami dahsyat menghantam Aceh dan Sumatera Utara. Lebih dari 165.000 orang tewas. Tragedi ini justru membuka jalan perdamaian Aceh.',
        highlight: true,
        tag: 'Bencana',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Gempa_bumi_dan_tsunami_Samudra_Hindia_2004',
      },
      {
        tanggal: '15 Agt 2005',
        judul: 'MoU Helsinki — Aceh Damai',
        deskripsi: 'Perjanjian damai RI-GAM ditandatangani di Helsinki. Mengakhiri 30 tahun konflik bersenjata di Aceh yang menelan puluhan ribu korban jiwa dari kedua belah pihak.',
        highlight: true,
        tag: 'Perdamaian',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Nota_Kesepahaman_Helsinki',
      },
      {
        tanggal: '2005',
        judul: 'Kenaikan BBM & Program BLT',
        deskripsi: 'Pemerintah menaikkan harga BBM 28% untuk mengurangi beban subsidi. Sebagai kompensasi, BLT (Bantuan Langsung Tunai) dikucurkan ke 19,2 juta keluarga miskin.',
        highlight: false,
        tag: 'Ekonomi',
        refUrl: 'https://id.wikipedia.org/wiki/Bantuan_Langsung_Tunai',
      },
      {
        tanggal: 'Jul 2009',
        judul: 'SBY Terpilih Kembali — 60,8% Suara',
        deskripsi: 'SBY-Boediono memenangkan pilpres satu putaran dengan 60,8% suara — kemenangan terbesar dalam sejarah pilpres langsung Indonesia.',
        highlight: false,
        tag: 'Pemilu',
        refUrl: 'https://id.wikipedia.org/wiki/Pemilihan_umum_presiden_Indonesia_2009',
      },
      {
        tanggal: '2004–2014',
        judul: 'KPK Tangkap Ratusan Koruptor',
        deskripsi: 'Selama satu dekade SBY, KPK menangani ratusan kasus korupsi dan menangkap pejabat-pejabat tinggi. Gubernur, bupati, menteri, anggota DPR — tidak ada yang kebal di hadapan KPK.',
        highlight: false,
        tag: 'Anti-Korupsi',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Komisi_Pemberantasan_Korupsi',
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // JOKOWI — Layout Balt (Foto kiri, konten kanan + pull quote)
  // ═══════════════════════════════════════════════════
  {
    id: 'jokowi',
    layout: 'Balt',
    periode: '2014–2024',
    jabatan: 'Presiden ke-7 RI',
    nama: 'Jokowi',
    namaLengkap: 'Joko Widodo',
    fotoUrl: '/jokowi.jpeg',
    fotoGallery: [
      '/jokowi.jpeg',
      '/jokowi.jpeg', // Placeholder - user can replace with actual gallery photos
      '/jokowi.jpeg', // Placeholder - user can replace with actual gallery photos
    ],
    fotoKeterangan: 'Joko Widodo (Jokowi), Presiden ke-7 RI',
    fotoLisensi: 'Wikimedia Commons / Domain Publik',
    warnaTema: '#3B3B5C',
    fallbackGradient: 'linear-gradient(135deg,#1A1A2E,#3B3B5C)',
    quote: 'Kerja, kerja, kerja!',
    quoteSumber: 'Joko Widodo',
    ringkasan: 'Mantan pedagang mebel dari Solo yang menjadi wali kota, gubernur, lalu presiden — simbol nyata demokrasi reformasi yang membuka ruang bagi siapapun. Jokowi memfokuskan Indonesia pada infrastruktur masif dan hilirisasi industri, namun kepemimpinannya periode kedua dikritik atas pelemahan KPK dan erosi kualitas demokrasi.',
    kebijakan: [
      {
        ikon: 'Construction',
        judul: 'Program Infrastruktur Masif',
        kategori: 'Infrastruktur',
        deskripsi: 'Ribuan kilometer jalan tol dibangun, MRT dan LRT Jakarta beroperasi, puluhan bandara baru diresmikan, ribuan km rel kereta api — investasi infrastruktur terbesar dalam sejarah Republik Indonesia.',
        dampak: 'Konektivitas antarpulau membaik signifikan. Biaya logistik mulai turun. Kawasan terpencil terkoneksi ke pusat ekonomi.',
        refUrl: 'https://id.wikipedia.org/wiki/Pembangunan_infrastruktur_Indonesia',
      },
      {
        ikon: 'Heart',
        judul: 'Kartu Sakti (KIS, KIP, KKS)',
        kategori: 'Sosial',
        deskripsi: 'Kartu Indonesia Sehat (KIS), Kartu Indonesia Pintar (KIP), dan Kartu Keluarga Sejahtera (KKS) memberikan akses kesehatan, pendidikan, dan bantuan tunai kepada puluhan juta keluarga miskin.',
        dampak: 'Jutaan orang mendapat akses layanan dasar yang sebelumnya tidak terjangkau. Angka kemiskinan turun ke single-digit untuk pertama kalinya.',
        refUrl: 'https://id.wikipedia.org/wiki/Program_Nusantara_Sehat',
      },
      {
        ikon: 'Home',
        judul: 'Dana Desa',
        kategori: 'Sosial',
        deskripsi: 'Setiap desa mendapat alokasi dana langsung dari APBN — rata-rata Rp1 miliar per tahun. Program ini mentransfer kekuasaan dan sumber daya ke level paling bawah pemerintahan secara langsung.',
        dampak: 'Lebih dari 74.000 desa mendapat dana untuk membangun infrastruktur lokal dan layanan masyarakat. Kemiskinan desa berkurang signifikan.',
        refUrl: 'https://id.wikipedia.org/wiki/Dana_Desa',
      },
      {
        ikon: 'Building2',
        judul: 'Pemindahan Ibu Kota ke IKN Nusantara',
        kategori: 'Politik',
        deskripsi: 'UU IKN disahkan 2022. Pembangunan ibu kota baru di Kalimantan Timur dimulai — proyek ambisius senilai Rp466 triliun yang dikritik soal transparansi, dampak lingkungan, dan manfaat jangka panjangnya.',
        dampak: 'Proyek masih berjalan dan menjadi salah satu debat kebijakan terbesar Indonesia di era Jokowi.',
        kontroversial: true,
        refUrl: 'https://id.wikipedia.org/wiki/Ibu_kota_negara_baru_Indonesia',
      },
      {
        ikon: 'FileWarning',
        judul: 'Revisi UU KPK 2019',
        kategori: 'Hukum',
        deskripsi: 'Revisi UU KPK yang disahkan DPR dan ditandatangani Jokowi dinilai melemahkan independensi KPK secara signifikan — dewan pengawas KPK dibentuk dan izin penyadapan harus disetujui.',
        dampak: 'Indeks persepsi korupsi Indonesia turun. KPK dianggap kehilangan tajinya setelah revisi yang kontroversial ini.',
        kontroversial: true,
        refUrl: 'https://id.wikipedia.org/wiki/Komisi_Pemberantasan_Korupsi',
      },
      {
        ikon: 'Factory',
        judul: 'Hilirisasi Industri & Larangan Ekspor Nikel',
        kategori: 'Ekonomi',
        deskripsi: 'Indonesia melarang ekspor bijih nikel mentah sejak 2020, memaksa investasi smelter nikel di dalam negeri. Kebijakan ini dikritik Uni Eropa ke WTO namun dipertahankan sebagai strategi kedaulatan ekonomi.',
        dampak: 'Indonesia menjadi pemain penting dalam rantai pasokan baterai kendaraan listrik global — nilai tambah nikel meningkat drastis.',
        refUrl: 'https://id.wikipedia.org/wiki/Hilirisasi',
      },
    ],
    events: [
      {
        tanggal: 'Jul 2014',
        judul: 'Jokowi Terpilih sebagai Presiden',
        deskripsi: 'Jokowi-JK memenangkan pilpres 2014 dengan 53,15% suara, mengalahkan Prabowo-Hatta. Kemenangan orang biasa ini dianggap sebagai puncak dari semangat reformasi.',
        highlight: true,
        tag: 'Bersejarah',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Pemilihan_umum_presiden_Indonesia_2014',
      },
      {
        tanggal: '2015',
        judul: 'MRT Jakarta Groundbreaking',
        deskripsi: 'Pembangunan MRT Jakarta dimulai secara resmi. Proyek senilai Rp16 triliun ini menjadi simbol ambisi infrastruktur Jokowi dan beroperasi penuh pada 2019.',
        highlight: false,
        tag: 'Infrastruktur',
        refUrl: 'https://id.wikipedia.org/wiki/Mass_Rapid_Transit_Jakarta',
      },
      {
        tanggal: 'Apr 2019',
        judul: 'Jokowi Terpilih Kembali',
        deskripsi: 'Jokowi-Ma\'ruf Amin memenangkan pilpres 2019 dengan 55,5% suara, kembali mengalahkan Prabowo-Sandi. Pilpres paling ramai dan penuh kontroversi dalam sejarah reformasi.',
        highlight: true,
        tag: 'Pemilu',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Pemilihan_umum_presiden_Indonesia_2019',
      },
      {
        tanggal: 'Sep 2019',
        judul: 'Revisi UU KPK — Kontroversi Besar',
        deskripsi: 'DPR mengesahkan revisi UU KPK yang dinilai melemahkan lembaga anti-korupsi. Demonstrasi besar-besaran mahasiswa di seluruh Indonesia mewarnai pengesahan UU ini.',
        highlight: true,
        tag: 'Kontroversi',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Revisi_Undang-Undang_KPK_2019',
      },
      {
        tanggal: '2022',
        judul: 'UU IKN Disahkan',
        deskripsi: 'DPR mengesahkan UU Ibu Kota Negara. Pembangunan Nusantara di Kalimantan Timur dimulai. Proyek ambisius yang menelan kritik keras dari berbagai kalangan.',
        highlight: false,
        tag: 'Kebijakan',
        refUrl: 'https://id.wikipedia.org/wiki/Ibu_kota_negara_baru_Indonesia',
      },
      {
        tanggal: 'Okt 2024',
        judul: 'Jokowi Mengakhiri Jabatan',
        deskripsi: 'Jokowi menyelesaikan dua periode jabatannya dan menyerahkan tampuk kepemimpinan kepada Prabowo Subianto — transisi kekuasaan yang berlangsung damai.',
        highlight: false,
        tag: 'Transisi',
        refUrl: 'https://id.wikipedia.org/wiki/Joko_Widodo',
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // PRABOWO — Layout Dflip (Foto kanan, konten kiri + amber)
  // ═══════════════════════════════════════════════════
  {
    id: 'prabowo',
    layout: 'Dflip',
    periode: '2024–Kini',
    jabatan: 'Presiden ke-8 RI',
    nama: 'Prabowo',
    namaLengkap: 'Prabowo Subianto',
    fotoUrl: '/prabowo.jpeg',
    fotoGallery: [
      '/prabowo.jpeg',
      '/prabowo.jpeg', // Placeholder - user can replace with actual gallery photos
      '/prabowo.jpeg', // Placeholder - user can replace with actual gallery photos
    ],
    fotoKeterangan: 'Prabowo Subianto, Presiden ke-8 RI',
    fotoLisensi: 'Wikimedia Commons / Domain Publik',
    warnaTema: '#EF9F27',
    fallbackGradient: 'linear-gradient(135deg,#2E1F00,#6B4400)',
    quote: 'Kita harus berani bermimpi besar untuk Indonesia yang lebih adil dan lebih makmur.',
    quoteSumber: 'Prabowo Subianto',
    ringkasan: 'Mantan rival politik Jokowi yang kini meneruskan kepemimpinannya. Prabowo memenangkan pilpres satu putaran dengan margin besar dan dilantik secara damai — menandai kedewasaan demokrasi Indonesia. Era ini masih sangat awal dan arah kebijakannya masih terus dibentuk. Halaman ini akan diperbarui seiring berjalannya waktu.',
    kebijakan: [
      {
        ikon: 'UtensilsCrossed',
        judul: 'Program Makan Bergizi Gratis',
        kategori: 'Sosial',
        deskripsi: 'Program unggulan Prabowo yang memberikan makan bergizi gratis kepada anak sekolah dan ibu hamil di seluruh Indonesia. Dimulai secara bertahap sejak Januari 2025 dengan anggaran triliunan rupiah.',
        dampak: 'Menyentuh jutaan anak sekolah di seluruh Indonesia, mendukung gizi dan prestasi belajar generasi penerus.',
        refUrl: 'https://id.wikipedia.org/wiki/Program_Makan_Bergizi_Gratis',
      },
      {
        ikon: 'Wheat',
        judul: 'Swasembada Pangan & Energi',
        kategori: 'Ekonomi',
        deskripsi: 'Program ambisius untuk mencapai kemandirian pangan dan energi nasional. Meliputi intensifikasi pertanian, pembukaan lahan baru, dan akselerasi energi terbarukan di seluruh kepulauan Indonesia.',
        dampak: 'Target jangka menengah yang masih dalam proses implementasi — hasil nyata diharapkan terlihat dalam 2–3 tahun ke depan.',
        refUrl: 'https://id.wikipedia.org/wiki/Prabowo_Subianto',
      },
      {
        ikon: 'Users',
        judul: 'Kabinet Indonesia Maju — 48 Menteri',
        kategori: 'Politik',
        deskripsi: 'Prabowo membentuk kabinet dengan 48 menteri — terbesar dalam sejarah RI. Koalisi luas yang mencakup mantan rival politiknya, termasuk partai-partai yang sebelumnya berseberangan.',
        dampak: 'Stabilitas politik terjaga, namun efisiensi dan koordinasi kabinet yang besar ini masih menjadi pertanyaan.',
        kontroversial: true,
        refUrl: 'https://id.wikipedia.org/wiki/Kabinet_Merah_Putih',
      },
      {
        ikon: 'Shield',
        judul: 'Reformasi Birokrasi & Efisiensi Anggaran',
        kategori: 'Hukum',
        deskripsi: 'Prabowo menginstruksikan pemangkasan anggaran perjalanan dinas dan pembelian barang tidak produktif. Fokus pada efisiensi belanja negara dan pengalihan ke program produktif.',
        dampak: 'Penghematan diperkirakan ratusan triliun rupiah yang dapat dialihkan untuk program prioritas nasional.',
        refUrl: 'https://id.wikipedia.org/wiki/Prabowo_Subianto',
      },
      {
        ikon: 'Globe',
        judul: 'Diplomasi Aktif & Kunjungan Luar Negeri',
        kategori: 'Luar Negeri',
        deskripsi: 'Dalam bulan-bulan pertama kepemimpinannya, Prabowo aktif melakukan kunjungan ke berbagai negara mitra strategis — AS, China, Rusia, India, dan negara-negara ASEAN.',
        dampak: 'Memposisikan Indonesia sebagai kekuatan diplomatik bebas aktif di tengah persaingan geopolitik global yang semakin panas.',
        refUrl: 'https://id.wikipedia.org/wiki/Prabowo_Subianto',
      },
    ],
    events: [
      {
        tanggal: 'Feb 2024',
        judul: 'Prabowo Menang Pilpres Satu Putaran',
        deskripsi: 'Prabowo-Gibran memenangkan pilpres dengan 58,6% suara — menang satu putaran tanpa perlu pemungutan suara ulang. Kemenangan besar yang mengejutkan banyak kalangan.',
        highlight: true,
        tag: 'Bersejarah',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Pemilihan_umum_presiden_Indonesia_2024',
      },
      {
        tanggal: '20 Okt 2024',
        judul: 'Pelantikan Berlangsung Damai',
        deskripsi: 'Prabowo dilantik sebagai Presiden ke-8 RI dalam upacara yang khidmat dan damai. Jokowi hadir dan menyerahkan kekuasaan — simbol transisi demokratis yang sehat.',
        highlight: true,
        tag: 'Bersejarah',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Prabowo_Subianto',
      },
      {
        tanggal: 'Jan 2025',
        judul: 'Program Makan Bergizi Gratis Dimulai',
        deskripsi: 'Program makan bergizi gratis mulai dilaksanakan secara bertahap di berbagai wilayah Indonesia. Ratusan ribu anak sekolah menjadi penerima manfaat pertama.',
        highlight: false,
        tag: 'Program',
        refLabel: 'Wikipedia',
        refUrl: 'https://id.wikipedia.org/wiki/Program_Makan_Bergizi_Gratis',
      },
    ],
    statusCards: {
      tercapai: ['Transisi damai', 'Pilpres satu putaran', 'Kabinet terbentuk'],
      berjalan: ['Makan bergizi gratis', 'Swasembada pangan', 'Reformasi birokrasi'],
      dinantikan: ['Arah demokrasi', 'Independensi KPK', 'Kebijakan anti-korupsi'],
    },
  },
];

// ─── DAMPAK KESELURUHAN ───────────────────────────────
export const dampak: DampakItem[] = [
  {
    ikon: 'Vote',
    judul: 'Demokrasi Electoral',
    deskripsi: 'Dari pemilihan oleh MPR menjadi pilpres langsung oleh rakyat. Indonesia kini menyelenggarakan pemilu yang diakui bebas dan adil secara internasional.',
    nilai: '6 Pilpres',
  },
  {
    ikon: 'Newspaper',
    judul: 'Kebebasan Pers',
    deskripsi: 'Dari sensor total ke salah satu pers paling bebas di Asia Tenggara. Ribuan media cetak, online, dan penyiaran beroperasi tanpa izin pemerintah.',
    nilai: 'Top 5 ASEAN',
  },
  {
    ikon: 'Search',
    judul: 'Pemberantasan Korupsi',
    deskripsi: 'KPK berhasil menjerat ratusan pejabat korup dari semua tingkatan — gubernur, menteri, hingga ketua DPR. Sebuah pencapaian yang tidak terbayangkan di era Orde Baru.',
    nilai: '1.500+ Kasus',
  },
  {
    ikon: 'MapPin',
    judul: 'Otonomi Daerah',
    deskripsi: 'Desentralisasi kekuasaan dari pusat ke 514 kabupaten/kota. Pilkada langsung memungkinkan pemimpin lokal dipilih oleh rakyat setempat.',
    nilai: '514 Daerah',
  },
  {
    ikon: 'TrendingUp',
    judul: 'Pertumbuhan Ekonomi',
    deskripsi: 'Indonesia berhasil bangkit dari krisis 1998 menjadi ekonomi terbesar ke-16 di dunia. PDB tumbuh dari US$95 miliar menjadi lebih dari US$1,3 triliun.',
    nilai: 'Top 20 Dunia',
  },
  {
    ikon: 'Shield',
    judul: 'HAM & Kebebasan Sipil',
    deskripsi: 'Tahanan politik dibebaskan, diskriminasi etnis dihapus, kebebasan berkumpul dan berekspresi dijamin konstitusi. Indonesia telah jauh dari era represi Orde Baru.',
    nilai: 'Reformasi',
  },
];

// ─── REFORMASI KINI ───────────────────────────────────
export const reformasiKini: KiniItem[] = [
  {
    ikon: 'CheckCircle',
    judul: 'Pemilu Rutin & Damai',
    deskripsi: 'Sejak 1999, Indonesia konsisten menyelenggarakan pemilu yang relatif bebas, adil, dan berlangsung damai — termasuk pilkada serentak di ratusan daerah.',
    status: 'positif',
  },
  {
    ikon: 'AlertCircle',
    judul: 'Tantangan Demokrasi',
    deskripsi: 'Kualitas demokrasi dipertanyakan — pelemahan KPK, oligarki politik, dan konsentrasi kekuasaan keluarga menjadi isu yang mengkhawatirkan para pengamat.',
    status: 'negatif',
  },
  {
    ikon: 'TrendingUp',
    judul: 'Ekonomi yang Tangguh',
    deskripsi: 'Indonesia masuk G-20, ekonomi terbesar di ASEAN, dan telah melewati berbagai krisis global. Kelas menengah tumbuh pesat walau ketimpangan masih jadi tantangan.',
    status: 'positif',
  },
  {
    ikon: 'Users',
    judul: 'Masyarakat Sipil yang Kuat',
    deskripsi: 'LSM, jurnalis investigatif, dan aktivis masyarakat sipil terus mengawasi jalannya pemerintahan — warisan langsung dari semangat reformasi 1998.',
    status: 'positif',
  },
  {
    ikon: 'AlertTriangle',
    judul: 'Korupsi Masih Mengakar',
    deskripsi: 'Meski KPK telah aktif, korupsi sistemik masih menjadi tantangan besar. Indeks persepsi korupsi Indonesia masih rendah dibandingkan negara-negara berkembang lain.',
    status: 'negatif',
  },
  {
    ikon: 'Zap',
    judul: 'Digitalisasi & Demokrasi Digital',
    deskripsi: 'Media sosial mengubah cara warga berpolitik. Informasi mengalir bebas tapi disinformasi juga merajalela — tantangan baru demokrasi di era digital.',
    status: 'netral',
  },
];

// ─── VIDEO & MEDIA ────────────────────────────────────
export const media: MediaItem[] = [
  {
    judul: 'Detik-detik Soeharto Mundur — 21 Mei 1998',
    deskripsi: 'Rekaman lengkap pernyataan pengunduran diri Soeharto yang mengakhiri 32 tahun kekuasaan Orde Baru.',
    videoId: 'naB1dO801WQ',
    channel: 'Arsip Nasional',
  },
  {
    judul: 'Tragedi Trisakti 1998',
    deskripsi: 'Dokumentasi peristiwa penembakan mahasiswa Trisakti yang menjadi pemantik gerakan reformasi nasional.',
    videoId: 'uFvK2vjNkrY',
    channel: 'Historia Indonesia',
  },
  {
    judul: 'Reformasi Indonesia: 25 Tahun Perjalanan',
    deskripsi: 'Dokumenter komprehensif tentang perjalanan reformasi Indonesia dari 1998 hingga kini, dengan wawancara tokoh-tokoh kunci.',
    videoId: '68B70TbRsr8',
    channel: 'KOMPAS TV',
  },
  {
    judul: 'Penyebab Kenapa Gus Dur Disebut Bapak Pluralisme Indonesia',
    deskripsi: 'Potret kepemimpinan Abdurrahman Wahid dan warisannya yang abadi bagi keberagaman Indonesia.',
    videoId: '2mbHkdNJbHY',
    channel: 'CNN Indonesia',
  },
];

// ─── REFERENSI ────────────────────────────────────────
export const referensi: ReferensiItem[] = [
  {
    judul: 'Reformasi Indonesia — Wikipedia',
    tahun: '2024',
    url: 'https://id.wikipedia.org/wiki/Reformasi_Indonesia',
    jenis: 'Wikipedia',
  },
  {
    judul: 'Pemilihan Umum Indonesia 1999',
    tahun: '2024',
    url: 'https://id.wikipedia.org/wiki/Pemilihan_umum_legislatif_Indonesia_1999',
    jenis: 'Wikipedia',
  },
  {
    judul: 'Nota Kesepahaman Helsinki',
    tahun: '2024',
    url: 'https://id.wikipedia.org/wiki/Nota_Kesepahaman_Helsinki',
    jenis: 'Wikipedia',
  },
  {
    judul: 'Komisi Pemberantasan Korupsi — KPK',
    tahun: '2024',
    url: 'https://id.wikipedia.org/wiki/Komisi_Pemberantasan_Korupsi',
    jenis: 'Wikipedia',
  },
  {
    judul: 'Tragedi Trisakti 12 Mei 1998',
    tahun: '2024',
    url: 'https://id.wikipedia.org/wiki/Tragedi_Trisakti',
    jenis: 'Wikipedia',
  },
  {
    judul: 'Tsunami Aceh 2004 — Gempa Samudra Hindia',
    tahun: '2024',
    url: 'https://id.wikipedia.org/wiki/Gempa_bumi_dan_tsunami_Samudra_Hindia_2004',
    jenis: 'Wikipedia',
  },
  {
    judul: 'Bom Bali 2002',
    tahun: '2024',
    url: 'https://id.wikipedia.org/wiki/Bom_Bali_2002',
    jenis: 'Wikipedia',
  },
  {
    judul: 'Pemilihan Umum Presiden Indonesia 2024',
    tahun: '2024',
    url: 'https://id.wikipedia.org/wiki/Pemilihan_umum_presiden_Indonesia_2024',
    jenis: 'Wikipedia',
  },
];

// ─── TIM PENULIS ─────────────────────────────────────
export const tim: Tim = {
  mapel: 'Sejarah',
  kelas: 'XI SIJA 1',
  sekolah: 'SMK NEGERI 7',
  tahunAjaran: '2025/2026',
  anggota: [
    { nama: 'Fajar Ghozalah Ndaki', peran: 'Riset & Konten Kebijakan', presensi: '14' },
    {
      nama: 'Irsyad Abdul Jabbar Al Harits',
      peran: 'Desain & Visualisasi',
      presensi: '19',
      sosmed: {
        email: 'irsyadabdul999@gmail.com',
        github: 'alharitsirsyad-max',
        linkedin: 'https://www.linkedin.com/in/irsyad-abdul-jabbar-al-harits-963b97407',
        whatsapp: '089513766615',
        instagram: 'abdulll78880',
      },
    },
    { nama: 'Maulana Al Ghiffari', peran: 'Riset Peristiwa & Referensi', presensi: '23' },
  ],
};
