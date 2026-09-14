// ============================================================
// LP Data Constants
// ⚡ FUTURE: Replace each export with an API fetch from boilerplate-lp
//    e.g. const config = await fetch('/api/lp/config').then(r => r.json())
// ============================================================

import type {
  ContactPerson,
  FaqItem,
  FeatureItem,
  LpConfig,
  ReturnOption,
  ScoreCard,
  Screenshot,
  SurveyOption,
  Testimonial,
} from '../types';

// ─── Core Config ────────────────────────────────────────────
// Future: GET /api/lp/config
export const LP_CONFIG: LpConfig = {
  waNumber: '6285255499299',
  flashWindowMs: 12 * 60 * 60 * 1000, // 12 hours
  logoUrl: 'https://toefl.fullbrightindonesia.org/logo/Logo-Fullbright.webp',
  selfStudyCheckoutUrl: 'https://member.fullbrightindonesia.com/paket-gold-e-course-toefl',
  selfStudyFreeTrialUrl: 'https://class.fullbrightindonesia.com/register',
};

export const waUrl = (text: string): string =>
  `https://wa.me/${LP_CONFIG.waNumber}?text=${encodeURIComponent(text)}`;

// ─── Flash Sale ──────────────────────────────────────────────
export const FLASH_SALE_LABEL = '🔥 FLASH SALE SEPTEMBER · DISKON 60%';
export const FLASH_SALE_LABEL_SHORT = '🔥 FLASH SALE SEPTEMBER · 60%';

// ─── TOEFL Score Screenshots ─────────────────────────────────
// Future: GET /api/lp/screenshots
export const TOEFL_SCREENSHOTS: Screenshot[] = [
  { src: '/assets/toefl1.webp', score: '547' },
  { src: '/assets/toefl2.webp', score: '543' },
  { src: '/assets/toefl3.webp', score: '563' },
  { src: '/assets/toefl4.webp', score: '560' },
  { src: '/assets/toefl5.webp', score: '507' },
  { src: '/assets/toefl6.webp', score: '513' },
  { src: '/assets/toefl7.webp', score: '537' },
  { src: '/assets/toefl9.webp', score: '560' },
];

// ─── Google Reviews ──────────────────────────────────────────
// Future: GET /api/lp/reviews/count
export const REVIEW_COUNT = 19;
export const reviewSrc = (i: number): string => `/assets/Riview (${i + 1}).webp`;

// ─── Score Ticker ────────────────────────────────────────────
// Future: GET /api/lp/scores-ticker
export const SCORE_CARDS: ScoreCard[] = [
  { avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjU5AMTzLrJktkSAtgPl67tp9gcrVdfNprQkFE3OTlWsG2HLAYKC=w108-h108-p-rp-mo-br100', name: 'Kak Rani', score: 547 },
  { avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUIlyFVfg_CALswxLovEgu-9KN1G8qj5gZtWp7wBgK0kZTCUDQ=w108-h108-p-rp-mo-br100', name: 'Kak Ayu', score: 543 },
  { avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjV5Szg5YHC8wz4qGbdkyShVXvqJJmsdU-7k86b01QvrG9eS3bQv=w108-h108-p-rp-mo-br100', name: 'Mbak Widya', score: 563 },
  { avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjXRbjwvAkh5Knchil81RMVI9JoXdsQWp9wX1k-eB1LIfnpZ7hY=w108-h108-p-rp-mo-br100', name: 'Pak Yohanes', score: 560 },
  { avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjU3DvvpNvLJTv0Uu_Se4Ke4KXRZ7xS2wTByWCN2Yo1LNbBCxa0=w108-h108-p-rp-mo-br100', name: 'Kak Uly Sinaga', score: 507 },
  { avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWbvvA2Wwy2D6SF141W1iTa3Hd3QeOJqaWOfjyv1J_ObcaJtKY=w108-h108-p-rp-mo-br100', name: 'Kak Nadia Ayu', score: 513 },
];

// ─── Agitation Table ─────────────────────────────────────────
// Future: GET /api/lp/agitation
export const AGITATION_ROWS: { action: string; result: string }[] = [
  { action: 'Sudah download banyak PDF materi', result: 'Tapi bingung mulai dari mana' },
  { action: 'Sudah nonton banyak video TOEFL', result: 'Tapi besoknya lupa lagi materinya' },
  { action: 'Sudah mengerjakan banyak latihan soal', result: 'Tapi kesalahan yang sama terus terulang' },
  { action: 'Sudah ikut kursus bahasa Inggris', result: 'Tapi materinya terlalu umum, bukan pola TOEFL' },
  { action: 'Sudah di kursus, berusaha ikutin semua jadwal kelas', result: 'Tapi sekali jadwal bentrok, materi jadi tertinggal' },
];

// ─── LMS Features ────────────────────────────────────────────
// Future: GET /api/lp/features
export const LMS_FEATURES: FeatureItem[] = [
  {
    id: '01',
    label: 'Diagnostic Test',
    value: 'Rp 120.000',
    title: 'Tidak Lagi Bingung Harus Mulai dari Mana',
    description: 'Kerjakan Diagnostic Test lebih dulu untuk mengetahui baseline skor TOEFL ITP kamu. Hasilnya menentukan materi mana yang perlu diprioritaskan.',
    gif: '/assets/diagnostic.gif',
    tags: ['Baseline skor per section', 'Materi prioritas otomatis'],
    imageLeft: false,
  },
  {
    id: '02',
    label: 'Materi & Roadmap',
    value: 'Rp 300.000',
    title: 'Materi Sudah Urut, Kamu Tinggal Mengikuti',
    description: 'Materi Structure, Listening, dan Reading tersusun rapi dari Hari 1 sampai Hari 15, jadi kamu tidak perlu menyusun sendiri urutan belajarnya.',
    gif: '/assets/materi.gif',
    tags: ['60 video full skills', 'Urut Hari 1–15'],
    imageLeft: true,
  },
  {
    id: '03',
    label: 'AI Assistant',
    value: 'Rp 100.000',
    title: 'Kalau Bingung, Ada yang Langsung Menjawab',
    description: 'Setiap video dilengkapi rangkuman materi dan AI Assistant yang siap menjelaskan ulang topik yang belum kamu pahami, tanpa perlu menunggu jadwal.',
    gif: '/assets/video-ai.gif',
    tags: ['Rangkuman tiap video', 'Tanya AI 24/7'],
    imageLeft: false,
  },
  {
    id: '04',
    label: 'Latihan Soal',
    value: 'Rp 150.000',
    title: 'Tahu Persis Bagian yang Belum Kamu Kuasai',
    description: 'Setiap topik punya latihan soal dengan navigasi antar nomor dan progress tracker, jadi kamu tahu persis bagian mana yang belum dikuasai.',
    gif: '/assets/latihan.gif',
    tags: ['Latihan per topik', 'Progress tracker'],
    imageLeft: true,
  },
  {
    id: '05',
    label: 'Drill Soal',
    value: 'Rp 100.000',
    title: 'Kesalahan yang Sama Tidak Terulang Lagi',
    description: 'Asah kemampuan spesifik lewat drill per skill — Listening, Structure, dan Reading — dengan paket soal yang bisa diulang sampai benar-benar paham.',
    gif: '/assets/drill.gif',
    tags: ['84 paket drill', 'Bisa diulang tanpa batas'],
    imageLeft: false,
  },
  {
    id: '06',
    label: 'Simulasi & Ujian',
    value: 'Rp 150.000',
    title: 'Supaya Nanti Saat Tes TOEFL Asli Tidak Kaget',
    description: 'Mode Simulasi tanpa timer dengan feedback instan untuk latihan, dan Mode Final dengan timer serta kondisi seperti ujian TOEFL ITP sebenarnya.',
    gif: '/assets/simulasi.gif',
    tags: ['Mode latihan + feedback', 'Mode Final bertimer'],
    tutorOnly: true,
    imageLeft: true,
  },
  {
    id: '07',
    label: 'Dashboard Progress',
    value: 'Rp 85.000',
    title: 'Progresmu Terlihat, Bukan Cuma Terasa Sibuk',
    description: 'Soal dikerjakan, akurasi, waktu belajar, streak harian, hingga tren skor per section terekam otomatis, jadi progresmu selalu terlihat jelas.',
    gif: null, // beranda.gif — belum tersedia
    tags: ['Akurasi & streak harian', 'Tren skor per section'],
    imageLeft: false,
  },
];

export const FEATURES_TOTAL_VALUE = 'Rp 1.005.000';
export const FEATURES_START_PRICE = 'Rp 99.000';

// ─── Why Full Bright ─────────────────────────────────────────
// Future: GET /api/lp/why-us
export const WHY_ITEMS: { icon: string; title: string; description: string; color: string }[] = [
  {
    icon: '📖',
    title: 'Lembaga Resmi ITP & IIEF Jakarta',
    description: 'Sertifikat terjamin sah dan diakui langsung sebagai syarat submission beasiswa luar negeri.',
    color: '#1D4ED8',
  },
  {
    icon: '📈',
    title: 'Alumni Lulus Beasiswa ke Luar Negeri',
    description: 'UK, Jerman, Australia: bukti nyata metode belajar bertahap ini bekerja, bukan sekadar janji.',
    color: '#D70808',
  },
  {
    icon: '👥',
    title: 'Pengajar Praktisi Skor 600+',
    description: 'Belajar dari yang sudah membuktikan sendiri skornya, bukan yang cuma tahu teori.',
    color: '#D70808',
  },
  {
    icon: '⏱',
    title: 'Cukup 1 Jam Sehari, Mulai dari Sekarang',
    description: 'Tidak perlu menunggu waktu luang besar. 1 jam sehari dari sekarang jauh lebih ringan daripada belajar maraton menjelang deadline.',
    color: '#D70808',
  },
];

// ─── Stats Bar ───────────────────────────────────────────────
// Future: GET /api/lp/stats
export const STATS: { value: string; label: string }[] = [
  { value: '45.000+', label: 'Alumni Sukses' },
  { value: '4.9/5', label: 'Rating Rata-rata' },
  { value: '13+', label: 'Tahun Pengalaman' },
  { value: '95%', label: 'Skor Naik Signifikan' },
];

// ─── Text Testimonials ────────────────────────────────────────
// Future: GET /api/lp/testimonials/text
export const TEXT_TESTIMONIALS: Testimonial[] = [
  {
    university: 'University of Nottingham, UK',
    headline: 'Sangat Terjangkau Untuk Mahasiswa',
    quote: '"Full Bright ini tempat yang paling "pas" buat teman-teman Mahasiswa menaklukkan Tes TOEFL & IELTS"',
    name: 'Andi Manggala Putra',
    role: 'Accounting and Finance',
    avatarSrc: '/assets/People 1.webp',
  },
  {
    university: 'Stuttgart University, Germany',
    headline: 'A Good Place to Learn TOEFL & IELTS',
    quote: '"Fullbright growing together with their students. This place is good place to learn TOEFL & IELTS. Thank you for the teacher and friendly staff. Now I can see the world"',
    name: 'Hajrah',
    role: 'Student Water Resources Engineering and Management',
    avatarSrc: '/assets/People 2.webp',
  },
];

// ─── FAQ ─────────────────────────────────────────────────────
// Future: GET /api/lp/faq
export const FAQ_CATEGORIES: string[] = [
  'Belajar Mandiri (LMS)',
  'Metode & Efektivitas',
  'Dibimbing Tutor',
  'Sertifikat & Legalitas',
  'Pendaftaran & Pembayaran',
  'Jaminan & Garansi',
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Belajar Mandiri (LMS)',
    question: 'Kalau ambil paket Self-Study LMS, apa saja yang saya dapat?',
    answer: 'Kamu dapat akses penuh ke LMS Full Bright: 60+ video materi Full Skills (Listening, Structure, Reading), materi terstruktur hari ke-1 sampai ke-15, 1.000+ nomor latihan soal beserta pembahasan, diagnostic test, simulasi dan post test full skills, serta grup WA diskusi. Semua bisa diakses kapan saja tanpa terikat jadwal kelas.',
  },
  {
    category: 'Belajar Mandiri (LMS)',
    question: 'Bagaimana cara akses LMS setelah saya bayar?',
    answer: 'Setelah pembayaran berhasil, kamu langsung menerima email berisi link dan akun untuk masuk ke platform LMS Full Bright. Akses berlaku 2 tahun dan bisa dibuka dari HP maupun laptop, kapan pun kamu punya waktu.',
  },
  {
    category: 'Belajar Mandiri (LMS)',
    question: 'Saya belajar sendiri di LMS. Kalau bingung, bisa tanya ke siapa?',
    answer: 'Kamu tetap tidak belajar sendirian. Setiap peserta LMS masuk ke grup WA diskusi, jadi kalau ada soal atau materi yang bikin bingung, kamu bisa langsung bertanya dan dibantu. Ini bedanya dengan belajar otodidak dari YouTube — di sana tidak ada yang menjawab kalau kamu stuck.',
  },
  {
    category: 'Belajar Mandiri (LMS)',
    question: 'Apakah bisa dicoba dulu sebelum bayar?',
    answer: 'Bisa. Tersedia free trial LMS dengan akses 1 modul agar kamu bisa merasakan sendiri kualitas video materi dan latihan soalnya sebelum memutuskan. Kalau cocok, tinggal lanjut ambil paketnya.',
  },
  {
    category: 'Belajar Mandiri (LMS)',
    question: 'Apakah bisa belajar tanpa terikat jadwal karena saya sibuk?',
    answer: 'Justru itu kelebihan paket belajar mandiri: tidak ada jam kelas yang harus dikejar. Semua materi tersedia di LMS 24/7 dan bisa diulang berapa kali pun. Banyak alumni kami karyawan, PNS aktif, dan mahasiswa tingkat akhir yang belajar di sela-sela kesibukan.',
  },
  {
    category: 'Metode & Efektivitas',
    question: 'Apakah metode ini cocok untuk pemula yang grammar-nya sangat lemah?',
    answer: 'Sangat cocok. Materi disusun dari level dasar dan berurutan hari ke-1 sampai ke-15, jadi kamu tidak perlu grammar sempurna untuk memulai. Fokusnya bukan menguasai semua tata bahasa Inggris, tapi mengenali pola soal yang benar-benar keluar di TOEFL ITP.',
  },
  {
    category: 'Metode & Efektivitas',
    question: 'Kenapa belajar di sini beda dengan belajar sendiri dari buku dan YouTube?',
    answer: 'Dua hal yang paling sering bikin belajar otodidak gagal: materinya tidak terstruktur dan tidak ada yang bisa ditanya kalau salah. Di Full Bright, materi sudah berurutan dan fokus ke pola soal TOEFL, setiap latihan ada pembahasannya, dan ada grup diskusi untuk bertanya.',
  },
  {
    category: 'Metode & Efektivitas',
    question: 'Berapa kenaikan skor yang bisa saya harapkan?',
    answer: 'Berdasarkan data alumni, peserta yang mengikuti materi secara konsisten dan mengerjakan semua bank soal rata-rata naik 80–100 poin. Yang paling banyak dirasakan alumni adalah jadi paham pola soal TOEFL, dan dari situ skornya ikut naik.',
  },
  {
    category: 'Metode & Efektivitas',
    question: 'Apakah dijamin bisa mencapai skor 500?',
    answer: 'Kami tidak menjanjikan skor 500 secara mutlak karena hasil tergantung konsistensi masing-masing peserta. Yang bisa kami jamin: metode yang sudah terbukti pada 45.000+ alumni, materi yang fokus dan terstruktur, serta pendampingan selama program.',
  },
  {
    category: 'Metode & Efektivitas',
    question: 'Apakah ada batasan usia untuk mengikuti program ini?',
    answer: 'Program terbuka untuk usia 17 hingga 45 tahun. Cocok untuk pelajar, mahasiswa, fresh graduate, maupun karyawan yang butuh skor TOEFL untuk studi, karir, atau beasiswa.',
  },
  {
    category: 'Dibimbing Tutor',
    question: 'Apa bedanya paket Dibimbing Tutor dengan Self-Study LMS?',
    answer: 'Semua materi LMS tetap kamu dapat. Tambahannya khusus di paket Dibimbing Tutor: LIVE ZOOM 15 hari bersama instruktur, rekaman ZOOM, dan sertifikat TOEFL Prediction. Cocok kalau kamu merasa lebih terbantu dengan penjelasan langsung dan tempo belajar yang dipandu.',
  },
  {
    category: 'Dibimbing Tutor',
    question: 'Kapan jadwal LIVE ZOOM-nya dan apakah bisa dipilih?',
    answer: 'Khusus paket Dibimbing Tutor. Tersedia 5 pilihan sesi harian:\n\n• Pagi (09.00 – 10.00 WIB)\n• Siang (13.00 – 14.00 WIB)\n• Sore (16.00 – 17.00 WIB)\n• Malam (19.00 – 20.00 WIB)\n• Malam (20.15 – 21.15 WIB)\n\nCatatan: Jika berhalangan hadir LIVE ZOOM, jangan khawatir — materi bisa diakses di rekaman ZOOM.',
  },
  {
    category: 'Dibimbing Tutor',
    question: 'Kalau saya tidak bisa hadir LIVE ZOOM, bagaimana?',
    answer: 'Khusus paket Dibimbing Tutor. Setiap sesi direkam dan rekamannya bisa diakses seumur hidup, jadi kamu tetap bisa mengejar materi kalau berhalangan hadir. Kelas hanya 60 menit per hari agar tetap muat di jadwal yang padat.',
  },
  {
    category: 'Sertifikat & Legalitas',
    question: 'Apakah saya dapat sertifikat TOEFL?',
    answer: 'Sertifikat TOEFL Prediction diberikan khusus untuk paket Dibimbing Tutor setelah mengikuti post test. Paket Self-Study LMS fokus pada materi dan latihan, tanpa sertifikat.',
  },
  {
    category: 'Sertifikat & Legalitas',
    question: 'Apakah lembaganya resmi dan sertifikatnya valid?',
    answer: 'Full Bright Indonesia adalah lembaga resmi dengan legalitas lengkap: SK Kemenkumham RI Nomor AHU-0055720-AH.0114 Tahun 2020, SK Izin Operasional LKP 503/20177/LKP/DPM-PTSP/8/2024, NPSN Nomor K9998700, dan bekerja sama dengan IIEF Jakarta. Sertifikat dapat digunakan untuk daftar kuliah S1/S2/S3, lamar kerja, seleksi CPNS, rekrutmen BUMN, ujian skripsi, kenaikan pangkat, dan pendaftaran beasiswa.',
  },
  {
    category: 'Pendaftaran & Pembayaran',
    question: 'Bagaimana cara mendaftar dan metode pembayaran apa saja?',
    answer: 'Klik tombol daftar, pilih paket yang sesuai, lalu selesaikan pembayaran. Setelah itu kamu langsung menerima email konfirmasi beserta akses LMS dan grup WhatsApp. Pembayaran bisa via transfer bank, GoPay, OVO, DANA, dan QRIS.',
  },
  {
    category: 'Jaminan & Garansi',
    question: 'Apakah ada garansi kalau skor saya belum mencapai target?',
    answer: 'Garansi mengulang sampai skor target tercapai berlaku khusus untuk Paket Bundling (Dibimbing Tutor). Jika sudah mengikuti program secara penuh dan konsisten tapi skor belum tercapai, kamu bisa claim garansi dan mengulang kelas di batch berikutnya.',
  },
];

// ─── Survey Options ───────────────────────────────────────────
// Future: GET /api/lp/survey-options
export const SURVEY_OPTIONS: SurveyOption[] = [
  { label: 'Bingung mulai belajar dari mana' },
  { label: 'Sudah belajar tapi skor masih stuck' },
  { label: 'Masih ragu apakah perlu ikut kursus' },
  { label: 'Lainnya' },
];

// ─── Return Popup ─────────────────────────────────────────────
// Future: GET /api/lp/exit-intent
export const RETURN_OPTIONS: ReturnOption[] = [
  {
    label: 'Harganya masih terlalu mahal buatku',
    waMsg: 'Halo Admin Full Bright Indonesia. Saya mau konsultasi soal paket dan harga sebelum daftar.',
    subtext: 'Ada yang ingin ditanyakan soal harga atau paket?',
  },
  {
    label: 'Belum yakin bisa mencapai target TOEFL-ku',
    waMsg: 'Halo Admin Full Bright Indonesia. Saya mau konsultasi soal metode belajar dan hasil yang bisa dicapai sebelum daftar.',
    subtext: 'Mau tahu apakah program ini cocok untuk target skor kamu?',
  },
  {
    label: 'Belum yakin program ini cocok untuk kebutuhanku',
    waMsg: 'Halo Admin Full Bright Indonesia. Saya mau konsultasi apakah program ini cocok dengan kebutuhan saya sebelum daftar.',
    subtext: 'Konsultasikan dulu apakah program ini cocok untukmu.',
  },
  {
    label: 'Masih membandingkan dengan program lain',
    waMsg: 'Halo Admin Full Bright Indonesia. Saya masih membandingkan dengan program lain, mau tanya-tanya dulu.',
    subtext: 'Masih membandingkan? Tanya tim kami tentang programnya.',
  },
];

// ─── Contact Persons ──────────────────────────────────────────
// Future: GET /api/lp/contacts
export const CONTACT_PERSONS: ContactPerson[] = [
  { name: 'Ms. Aini', phone: '+62 819-5948-6507' },
  { name: 'Mr. Choiri', phone: '+62 887-4487-5322' },
  { name: 'Ms. Fini', phone: '+62 852-5549-9299' },
];

export const CONTACT_EMAIL = 'info@fullbrightindonesia.org';
export const CONTACT_ADDRESS = 'Gedung Yotta Signature Perintis, Jl. Perintis Kemerdekaan No.97 Lantai 3, Tamalanrea Jaya, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90245';
