import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Sehandiki Triansyah',
  tagline: 'Web Developer (Front End & Back End)',
  education: 'Teknik Informatika (S1) • Universitas Gunadarma',
  status: 'Available for Web Developer Roles & Projects',
  bio: 'Fresh graduate S1 Teknik Informatika Universitas Gunadarma dengan IPK 3.38/4.00. Memiliki pemahaman kuat dalam pengembangan aplikasi web, baik sisi front end maupun back end, melalui proyek perkuliahan dan pengembangan mandiri. Terbiasa bekerja dengan HTML, CSS, JavaScript, framework PHP Laravel, serta pengelolaan basis data relasional MySQL.',
  experienceStart: 'Fresh Graduate 2026',
  avatarUrl: '/projects/sehanavatar.jpeg',
  interests: [
    'Front End & Back End Development',
    'Laravel & PHP Ecosystem',
    'Relational Databases (MySQL & PostgreSQL)',
    'RESTful API Engineering',
    'Modern JavaScript & React.js'
  ],
  contact: {
    email: 'sehandiki17@gmail.com',
    github: 'https://github.com/SEHANDIKITRIANSYAH12',
    linkedin: 'https://linkedin.com/in/sehandikitriansyah',
    location: 'Rangkasbitung, Banten • Depok, Jawa Barat'
  }
};

export const techStackData: TechItem[] = [
  // client interface layer
  {
    name: 'HTML5',
    category: 'frontend',
    layer: 'client',
    iconKey: 'html5',
    color: '#e34f26',
    roleTag: 'Semantic Markup',
    usageContext: 'Struktur semantik dokumen web, aksesibilitas, SEO-friendly layout, dan form controls',
    projectLinks: ['pos-laravel', 'kelurahan-palmeriam']
  },
  {
    name: 'CSS3',
    category: 'frontend',
    layer: 'client',
    iconKey: 'css',
    color: '#1572b6',
    roleTag: 'Modern Styling',
    usageContext: 'Styling tata letak responsif dengan Flexbox, CSS Grid, animasi transisi, dan media queries',
    projectLinks: ['pos-laravel', 'kelurahan-palmeriam']
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    layer: 'client',
    iconKey: 'javascript',
    color: '#f7df1e',
    roleTag: 'Client Logic',
    usageContext: 'Pemrograman logika interaktif, asynchronous fetch API, manipulasi DOM, dan event handling',
    projectLinks: ['pos-laravel', 'kelurahan-palmeriam', 'restapi-database-service']
  },
  {
    name: 'React.js',
    category: 'frontend',
    layer: 'client',
    iconKey: 'react',
    color: '#0284c7',
    roleTag: 'Component UI',
    usageContext: 'Pembuatan antarmuka web berbasis komponen reaktif, custom hooks, dan state management modular',
    projectLinks: ['kelurahan-palmeriam']
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    layer: 'client',
    iconKey: 'tailwindcss',
    color: '#06b6d4',
    roleTag: 'Utility Styling',
    usageContext: 'Desain responsif cepat berbasis utility classes, estetika modern, dan konsistensi token desain',
    projectLinks: ['pos-laravel', 'kelurahan-palmeriam']
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    layer: 'client',
    iconKey: 'bootstrap',
    color: '#7952b3',
    roleTag: 'Grid & Component UI',
    usageContext: 'Pengembangan layout responsif dengan sistem 12-grid, modal dialog, formulir, dan komponen admin',
    projectLinks: ['pos-laravel', 'kelurahan-palmeriam']
  },

  // backend engine layer
  {
    name: 'PHP',
    category: 'backend',
    layer: 'backend',
    iconKey: 'php',
    color: '#777bb4',
    roleTag: 'Server Scripting',
    usageContext: 'Pemrograman backend server-side, penanganan sesi pengguna, dan manipulasi data dinamis',
    projectLinks: ['pos-laravel', 'kelurahan-palmeriam', 'restapi-database-service']
  },
  {
    name: 'Laravel',
    category: 'backend',
    layer: 'backend',
    iconKey: 'laravel',
    color: '#ef4444',
    roleTag: 'MVC & REST Engine',
    usageContext: 'Pengembangan web berskala penuh dengan pola MVC, Eloquent ORM, migrasi database, dan REST API',
    projectLinks: ['pos-laravel', 'kelurahan-palmeriam', 'restapi-database-service']
  },
  {
    name: 'Node.js (Express)',
    category: 'backend',
    layer: 'backend',
    iconKey: 'nodejs',
    color: '#22c55e',
    roleTag: 'REST Microservices',
    usageContext: 'Pembuatan RESTful API asynchronous, routing cepat dengan Express, dan integrasi middleware',
    projectLinks: ['restapi-database-service']
  },
  {
    name: 'Java (Spring Boot)',
    category: 'backend',
    layer: 'backend',
    iconKey: 'springboot',
    color: '#6db33f',
    roleTag: 'Enterprise Backend',
    usageContext: 'Implementasi konsep Object-Oriented Programming (OOP) tingkat lanjut dan arsitektur enterprise',
    projectLinks: ['restapi-database-service']
  },

  // database layer
  {
    name: 'MySQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'mysql',
    color: '#0284c7',
    roleTag: 'Relational Core',
    usageContext: 'Perancangan skema relasional, normalisasi tabel, integritas transaksi ACID, dan relasi multi-tabel',
    projectLinks: ['pos-laravel', 'kelurahan-palmeriam', 'restapi-database-service']
  },
  {
    name: 'PostgreSQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'postgresql',
    color: '#2563eb',
    roleTag: 'Advanced Relational',
    usageContext: 'Penyimpanan data relasional tingkat lanjut, query kompleks, indexing teroptimasi, dan konsistensi data',
    projectLinks: ['restapi-database-service']
  },
  {
    name: 'MongoDB (Dasar)',
    category: 'backend',
    layer: 'database',
    iconKey: 'mongodb',
    color: '#10b981',
    roleTag: 'NoSQL Document Store',
    usageContext: 'Pengelolaan data dokumen berbasis JSON tanpa skema kaku untuk kebutuhan penyimpanan fleksibel',
    projectLinks: ['restapi-database-service']
  },

  // tools and workflow layer
  {
    name: 'Git & GitHub',
    category: 'tools',
    layer: 'devops',
    iconKey: 'git',
    color: '#f97316',
    roleTag: 'Version Control',
    usageContext: 'Pelacakan versi kode sumber, alur branching kolaboratif, commit rapi, dan manajemen repositori',
    projectLinks: ['pos-laravel', 'kelurahan-palmeriam', 'restapi-database-service']
  },
  {
    name: 'Postman',
    category: 'tools',
    layer: 'devops',
    iconKey: 'postman',
    color: '#ff6c37',
    roleTag: 'API Testing & Docs',
    usageContext: 'Pengujian endpoint REST API, validasi request/response payload JSON, dan automasi tes integrasi',
    projectLinks: ['kelurahan-palmeriam', 'restapi-database-service']
  },
  {
    name: 'Figma (Dasar)',
    category: 'tools',
    layer: 'devops',
    iconKey: 'figma',
    color: '#a259ff',
    roleTag: 'UI Wireframing',
    usageContext: 'Eksplorasi wireframe desain antarmuka web, inspeksi layout visual, dan kolaborasi desain UI/UX',
    projectLinks: ['pos-laravel', 'kelurahan-palmeriam']
  },
  {
    name: 'XAMPP & VS Code',
    category: 'tools',
    layer: 'devops',
    iconKey: 'xampp',
    color: '#fb7185',
    roleTag: 'Local Environment',
    usageContext: 'Manajemen server Apache lokal, server MySQL, dan lingkungan penulisan kode modern yang efisien',
    projectLinks: ['pos-laravel', 'kelurahan-palmeriam']
  }
];

export const projectsData: Project[] = [
  {
    id: 'pos-laravel',
    title: 'Aplikasi Web Point of Sale (POS)',
    subtitle: 'Sistem Kasir & Manajemen Stok Berbasis Laravel 10 & MySQL (Tugas Akhir Kuliah)',
    category: 'fullstack',
    summary: 'Aplikasi Point of Sale (POS) berbasis web menggunakan PHP Laravel 10 dengan pola MVC untuk mendukung kelancaran proses transaksi penjualan, manajemen inventori stok produk, cetak struk kasir, dan laporan harian.',
    description: 'Skripsi / Tugas Akhir S1 Teknik Informatika di Universitas Gunadarma bertajuk "Rancang Bangun Aplikasi Web Point Of Sale Menggunakan Framework Laravel 10 Dan MySQL". Sistem dirancang dengan arsitektur MVC kokoh untuk memproses transaksi kasir dengan cepat, menghitung kalkulasi kembalian dan pajak secara otomatis, mengurangi stok produk seketika, mencetak struk kasir, serta menyusun laporan analitik penjualan harian dan bulanan.',
    architecture: [
      'Pola arsitektur MVC (Model-View-Controller) menggunakan framework PHP Laravel 10',
      'Desain skema basis data relasional ternormalisasi dengan MySQL untuk integritas data transaksi dan inventori',
      'Tampilan antarmuka kasir yang responsif dan mudah digunakan menggunakan Bootstrap dan Tailwind CSS',
      'Modul transaksi kasir real-time, manajemen stok produk otomatis, dan cetak struk pembayaran',
      'Pengujian fungsional (functional testing) menyeluruh untuk memastikan aplikasi bebas dari bug utama'
    ],
    stack: [
      'Laravel 10',
      'PHP',
      'MySQL',
      'Bootstrap',
      'Tailwind CSS',
      'JavaScript',
      'MVC Architecture',
      'Functional Testing'
    ],
    highlights: [
      'Skripsi Tugas Akhir S1 Teknik Informatika Universitas Gunadarma (Lulus 2026)',
      'Sistem transaksi kasir responsif dengan cetak struk dan manajemen stok otomatis',
      'Desain database relasional MySQL dengan laporan penjualan harian terperinci'
    ],
    challenges: 'Menjamin integritas data transaksi saat pergerakan stok berlangsung simultan dan mengoptimalkan query MySQL agar proses pencarian produk kasir tetap cepat.',
    role: 'Full-Stack Web Developer',
    githubUrl: 'https://github.com/SEHANDIKITRIANSYAH12',
    imageUrl: '/projects/pos-system.svg',
    imageFit: 'contain',
    featured: true,
    metrics: [
      { label: 'Tugas Akhir', value: 'Univ. Gunadarma' },
      { label: 'IPK Kelulusan', value: '3.38 / 4.00' },
      { label: 'Arsitektur', value: 'Laravel 10 MVC' }
    ]
  },
  {
    id: 'kelurahan-palmeriam',
    title: 'Sistem Informasi Kelurahan Palmeriam',
    subtitle: 'Platform Informasi & Layanan Administrasi Kependudukan Berbasis Chatbot (Proyek Mandiri)',
    category: 'fullstack',
    summary: 'Website sistem informasi Kelurahan Palmeriam, Jakarta Timur, untuk menyediakan informasi dan layanan administrasi kependudukan digital kepada masyarakat dilengkapi chatbot interaktif.',
    description: 'Proyek mandiri pengembangan website sistem informasi Kelurahan Palmeriam Jakarta Timur. Sistem menyediakan kanal informasi digital bagi warga, pengajuan surat pengantar kependudukan secara online, panel admin untuk verifikasi berkas pengajuan dan publikasi pengumuman kelurahan, serta asisten chatbot terintegrasi untuk menjawab pertanyaan umum seputar syarat dokumen secara otomatis.',
    architecture: [
      'Portal layanan kependudukan digital untuk pengajuan berkas dan surat pengantar warga',
      'Integrasi chatbot otomatis untuk menjawab pertanyaan umum seputar syarat dan alur dokumen 24/7',
      'Panel admin terpadu untuk pengelolaan data warga, validasi pengajuan surat, dan pengumuman kelurahan',
      'Basis data relasional MySQL yang terhubung sinkron melalui REST API',
      'Tampilan antarmuka responsif dan ramah mobile menggunakan Bootstrap dan Tailwind CSS'
    ],
    stack: [
      'PHP',
      'Laravel',
      'MySQL',
      'REST API',
      'Chatbot',
      'Bootstrap',
      'Tailwind CSS',
      'JavaScript'
    ],
    highlights: [
      'Digitalisasi pengurusan surat kependudukan warga Palmeriam Jakarta Timur',
      'Fitur chatbot otomatis untuk menjawab pertanyaan alur dan syarat dokumen',
      'Panel admin pengelolaan data pengajuan berkas warga dan pengumuman secara real-time'
    ],
    challenges: 'Merancang alur dialog chatbot yang ramah bagi berbagai kalangan warga serta mengintegrasikan panel admin dengan database relasional MySQL agar pengajuan surat tertata rapi.',
    role: 'Full-Stack Web Developer (Proyek Mandiri)',
    githubUrl: 'https://github.com/SEHANDIKITRIANSYAH12',
    imageUrl: '/projects/kelurahan-chatbot.svg',
    imageFit: 'contain',
    featured: true,
    metrics: [
      { label: 'Tahun Proyek', value: '2024' },
      { label: 'Layanan Warga', value: 'Chatbot & Admin' },
      { label: 'Basis Data', value: 'MySQL Relasional' }
    ]
  },
  {
    id: 'restapi-database-service',
    title: 'Backend REST API & Database Services',
    subtitle: 'Arsitektur REST API Terstandar, Otentikasi & Database Relasional (MySQL/PostgreSQL)',
    category: 'backend',
    summary: 'Layanan backend RESTful API dengan penerapan pola OOP & MVC, otentikasi data aman, serta pemodelan skema database relasional MySQL dan PostgreSQL teruji Postman.',
    description: 'Implementasi arsitektur backend komprehensif menggunakan PHP (Laravel), Node.js (Express), dan Java (Spring Boot) yang menerapkan prinsip Object-Oriented Programming (OOP) dan Model-View-Controller (MVC). Menjamin konsistensi transaksi ACID pada database MySQL dan PostgreSQL, pengujian endpoint otomatis via Postman, serta integrasi payload JSON terstandar.',
    architecture: [
      'Pengembangan endpoint RESTful API terstandar dengan format JSON konsisten dan status code HTTP tepat',
      'Penerapan pola OOP dan MVC untuk pemisahan logika bisnis, kontroler, dan representasi model data',
      'Perancangan skema relasional ternormalisasi dengan MySQL dan PostgreSQL serta eksplorasi MongoDB',
      'Validasi request parameter, error handling menyeluruh, dan pengujian API menggunakan Postman',
      'Manajemen repositori dan version control kolaboratif melalui Git & GitHub'
    ],
    stack: [
      'PHP (Laravel)',
      'Node.js (Express)',
      'Java (Spring Boot)',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Postman',
      'REST API'
    ],
    highlights: [
      'Standarisasi RESTful API endpoint untuk integrasi berbagai klien web',
      'Penerapan prinsip OOP dan arsitektur MVC yang modular dan mudah dipelihara',
      'Pemodelan basis data relasional ACID compliant dengan MySQL & PostgreSQL'
    ],
    challenges: 'Menjaga standarisasi struktur response payload JSON dan mengoptimalkan performa query relasional multi-tabel.',
    role: 'Backend & API Developer',
    githubUrl: 'https://github.com/SEHANDIKITRIANSYAH12',
    imageUrl: '/projects/rest-api.svg',
    imageFit: 'contain',
    featured: true,
    metrics: [
      { label: 'Arsitektur', value: 'OOP & MVC REST API' },
      { label: 'Database', value: 'MySQL & PostgreSQL' },
      { label: 'Pengujian API', value: 'Postman Verified' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'edu-gunadarma',
    period: '2022 - 2026',
    role: 'S1 Teknik Informatika (IPK 3.38 / 4.00)',
    organization: 'Universitas Gunadarma • Depok, Jawa Barat',
    badge: 'Pendidikan Formal (Lulus 2026)',
    category: 'education',
    description:
      'Menyelesaikan studi sarjana S1 Teknik Informatika di Universitas Gunadarma dengan IPK 3.38 / 4.00. Memiliki pemahaman kuat dalam pengembangan aplikasi web (front end & back end), basis data relasional, rekayasa perangkat lunak, struktur data, dan jaringan komputer. Berhasil menyelesaikan Skripsi/Tugas Akhir bertajuk "Rancang Bangun Aplikasi Web Point Of Sale Menggunakan Framework Laravel 10 Dan MySQL".',
    highlights: [
      'Lulusan S1 Teknik Informatika Universitas Gunadarma dengan IPK 3.38 / 4.00',
      'Skripsi/Tugas Akhir: Aplikasi POS Web Menggunakan Laravel 10 & MySQL',
      'Mata Kuliah Unggulan: Pemrograman Web, Basis Data, RPL, Struktur Data, Jaringan Komputer'
    ],
    tech: ['Laravel 10', 'PHP', 'MySQL', 'JavaScript (ES6+)', 'Bootstrap', 'Tailwind CSS', 'MVC', 'OOP']
  },
  {
    id: 'cert-ai-ml',
    period: '2024 - 2025',
    role: 'Sertifikasi Machine Learning & Artificial Intelligence',
    organization: 'Digital Talent Scholarship, Dicoding & DQLab',
    badge: 'Pelatihan & Sertifikasi AI',
    category: 'bootcamp',
    description:
      'Mengikuti serangkaian pelatihan dan sertifikasi kompetensi kecerdasan buatan, termasuk program Kecerdasan Artifisial (Micro Skill) dari Kemenkominfo Digital Talent Scholarship, Belajar Dasar AI dari Dicoding Academy, serta pelatihan Machine Learning dengan Python dari DQLab.',
    highlights: [
      'Kecerdasan Artifisial (Micro Skill) – Digital Talent Scholarship (Kemenkominfo)',
      'Belajar Dasar AI – Dicoding Academy Certification',
      'Machine Learning dengan Python – DQLab'
    ],
    tech: ['Machine Learning', 'Python', 'Artificial Intelligence', 'Data Analysis', 'Algorithms']
  },
  {
    id: 'cert-enterprise-ai',
    period: '2024 - 2025',
    role: 'Pelatihan Enterprise Generative AI & Cloud',
    organization: 'IBM Granite & AWS Generative AI',
    badge: 'Sertifikasi Global',
    category: 'bootcamp',
    description:
      'Menyelesaikan program pelatihan teknologi kecerdasan buatan tingkat lanjut dari IBM Granite dan AWS Generative AI untuk memahami implementasi model enterprise AI, arsitektur komputasi awan, dan integrasi kecerdasan artifisial generatif pada aplikasi modern.',
    highlights: [
      'IBM Granite Enterprise AI Foundation',
      'AWS Generative AI Training Program',
      'Penerapan Konsep AI Generatif pada Sistem Berbasis Web'
    ],
    tech: ['AWS Generative AI', 'IBM Granite', 'Cloud Ecosystem', 'Prompt Engineering']
  },
  {
    id: 'cert-web-gunadarma',
    period: '2023 - 2024',
    role: 'Sertifikasi Fundamental Web & Pemrograman JavaScript',
    organization: 'Universitas Gunadarma',
    badge: 'Sertifikasi Akademik',
    category: 'project',
    description:
      'Memperoleh sertifikasi kompetensi resmi Fundamental Web dan Javascript For Beginner yang diselenggarakan oleh Universitas Gunadarma, memperkuat keahlian manipulasi DOM, pemrograman asynchronous (ES6+), semantic HTML5, dan desain web responsif.',
    highlights: [
      'Sertifikasi Fundamental Web – Universitas Gunadarma',
      'Sertifikasi Javascript For Beginner – Universitas Gunadarma',
      'Penguasaan Asynchronous JavaScript, Fetch API, DOM APIs, dan Responsive Styling'
    ],
    tech: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'DOM APIs', 'Responsive Web Design']
  }
];
