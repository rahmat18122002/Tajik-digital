export interface Project {
  id: string;
  title: string;
  category: string;
  categoryId: 'websites' | 'miniapps' | 'erp' | 'pos' | 'bots';
  techStack: string[];
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  fallbackImage: string;
  liveUrl?: string;
  githubUrl?: string;
  isComingSoon?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string;
  glowColor: 'blue' | 'purple' | 'gold' | 'teal';
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  phaseResult: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  rating: number;
  feedback: string;
  gender: 'male' | 'female';
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'other';
  glowColor: string;
  level: string; // e.g. "95%"
}

export interface DeveloperStats {
  projectsCount: number;
  experienceYears: number;
  clientsSatisfaction: number;
  miniAppsCreated: number;
}

export interface DeveloperProfile {
  name: string;
  role: string;
  introTitle: string;
  bio: string;
  quote: string;
  avatarUrl: string;
  telegram: string;
  whatsapp: string;
  github: string;
  websiteName: string;
  logoUrl?: string;
}

// Actual generated image paths
export const IMAGES = {
  heroBg: '/src/assets/images/tech_cyber_workspace_1780079481647.png',
  ceoAvatar: '/src/assets/images/ceo_avatar_1780079501339.png'
};

export const DEVELOPER_PROFILE: DeveloperProfile = {
  name: 'Раҳматулло',
  role: 'АСОСГУЗОРИ RAHMATULLO.COM / TAJIK DIGITAL DEVELOPER',
  introTitle: 'Салом! Ман Раҳматулло, таҳиягари касбӣ бо ҳадафи баланд бардоштани сатҳи рақамии тиҷорат дар Тоҷикистон ҳастам.',
  bio: 'Ман ба сохтани вебсайтҳои тез, зебо ва профессионалӣ диққат медиҳам. Ҳадафи ман сохтани системаҳоест, ки брендҳоро калонтар, васеътар ва қавитар нишон медиҳанд. Суръати кори баланд, амният ва таҷрибаи бароҳати истифодабаранда (UX) асоси кори маро ташкил медиҳанд.',
  quote: 'Ҳар як сомона ё барномае, ки мо месозем, бояд бозигари асосӣ ва қавии ҳамон соҳа бошад. Мо на танҳо код менависем — мо ояндаи тиҷорати шуморо маҷозӣ месозем.',
  avatarUrl: '/src/assets/images/ceo_avatar_1780079501339.png',
  telegram: 'aliali18122002',
  whatsapp: '992900050518',
  github: 'tajik-dev',
  websiteName: 'TAJIK DIGITAL'
};

export const DEVELOPER_STATS: DeveloperStats = {
  projectsCount: 47,
  experienceYears: 6,
  clientsSatisfaction: 99,
  miniAppsCreated: 18
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'landing',
    title: 'Landing Page Website / Саҳифаи муосир',
    description: 'Вебсайтҳои яксаҳифагии ҷолиб барои таблиғи маҳсулот ё хидматҳои мушаххас бо конверсияи баланд.',
    benefits: ['Дизайни муосири мобилӣ', 'Суръати ниҳоят тез', 'Аниматсияҳои ҷолиб'],
    icon: 'Layers',
    glowColor: 'blue'
  },
  {
    id: 'business',
    title: 'Сомонаҳои корпоративӣ',
    description: 'Сохтани вебсайтҳои бисёрфунксионалӣ барои муаррифӣ ва рушди ширкат дар фазои онлайн.',
    benefits: ['Системаи идоракунии мазмун (CMS)', 'Интегратсия бо шабакаҳои иҷтимоӣ', 'Оптимизатсияи SEO'],
    icon: 'Globe',
    glowColor: 'purple'
  },
  {
    id: 'realestate',
    title: 'Платформаҳои хариду фурӯши амвол',
    description: 'Сомонаҳои мукаммал барои корхонаҳои риэлторӣ, бо филтрҳои пешрафта, харитаҳо ва галереяи аксҳо.',
    benefits: ['Ҷустуҷӯи зуд ва қулай', 'Кабинети шахсии агентҳо', 'Интеграцияи Telegram-Овеза'],
    icon: 'Home',
    glowColor: 'gold'
  },
  {
    id: 'erp',
    title: 'Системаҳои идоракунии ERP',
    description: 'Системаҳои махсусгардонидашуда барои автоматизатсияи пурраи равандҳои корӣ, ҳисоботҳо ва назорати молия.',
    benefits: ['Таҳлили визуалии тиҷорат', 'Назорати кормандон ва анбор', 'Амнияти баланди додаҳо'],
    icon: 'Activity',
    glowColor: 'teal'
  },
  {
    id: 'pos',
    title: 'Системаҳои POS / Савдо',
    description: 'Автоматикунонии тарабхонаҳо, супермаркетҳо ва нуқтаҳои савдо бо дастгирии чекҳо ва ҳисобҳои молӣ.',
    benefits: ['Пайвастшавӣ ба принтерҳои чек', 'Ҳолати корӣ дар офлайн', 'Дастрасӣ аз ҳама дастгоҳҳо'],
    icon: 'CreditCard',
    glowColor: 'blue'
  },
  {
    id: 'telegram_bot',
    title: 'Ботҳои автоматикунонидашуда',
    description: 'Ботҳои интеллектуалӣ барои Telegram, ки хидматрасонии мизоҷон ва фурӯшро автоматикӣ мекунанд.',
    benefits: ['Ҷавобҳои худкори 24/7', 'Интегратсия бо базаи маълумот', 'Пардохтҳо дар дохили бот'],
    icon: 'MessageSquareCheck',
    glowColor: 'purple'
  },
  {
    id: 'mini_app',
    title: 'Telegram Mini Apps (WebApps)',
    description: 'Веб-барномаҳои мукаммал мустақим дар дохили Telegram бо функсияҳои премиум, вебсайт ва мағоза.',
    benefits: ['Кушодашавии фаврӣ', 'Интерфейси Native ба монанди iOS/Android', 'Дастрасии бевосита ба корбарон'],
    icon: 'Smartphone',
    glowColor: 'gold'
  },
  {
    id: 'admin_panel',
    title: 'Панели Идоракунии Умумӣ',
    description: 'Админ-панелҳои зебо ва содда барои назорати вебсайтҳо, ботҳо ва замимаҳои шумо.',
    benefits: ['Барои истифода хеле содда', 'Экспорти додаҳо ба Excel/PDF', 'Графикҳои интерактивӣ'],
    icon: 'LayoutDashboard',
    glowColor: 'teal'
  },
  {
    id: 'ui_ux',
    title: 'UI/UX Дизайни Миллӣ ва Премиум',
    description: 'Аввал тарҳрезӣ ва сохтани макетҳои интерактивӣ дар Figma бо назардошти усулҳои замонавии сатҳи ҷаҳонӣ.',
    benefits: ['Прототипи содда ва мукаммал', 'Сохтори ба корбар форам', 'Дизайни эксклюзивӣ'],
    icon: 'Figma',
    glowColor: 'blue'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'tamosho_cinema',
    title: 'Tamosho Cinema - Telegram Mini App',
    category: 'Telegram Mini App',
    categoryId: 'miniapps',
    techStack: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Framer Motion', 'Telegram API'],
    description: 'Платформаи тамошои филмҳо ва сериалҳои муосир мустақим дар дохили барномаи Telegram бо суръати фавқулодда.',
    longDescription: 'Барномаи пешрафта бо тарҳи Awwwards, ки ба корбарон имкон медиҳад филмҳои тоҷикӣ ва хориҷиро бе берун шудан аз Telegram тамошо кунанд. Система профили корбар, пардохтҳои онлайн, ҷустуҷӯ ва боркунии фаврӣ дорад.',
    features: ['Плеери видеоии интегратсияшуда', 'Пардохти худкор бо кортҳои Тоҷикистон', 'Рӯйхати филмҳои дӯстдошта', 'Тавсияҳои интеллектуалӣ бо AI'],
    image: 'https://picsum.photos/seed/cinema/800/600',
    fallbackImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://t.me/tamosho_cinema_bot',
    githubUrl: 'https://github.com/tajik-dev/tamosho-mini-app'
  },
  {
    id: 'quran_platform',
    title: 'Интерфейси Мукаммали "Муаллими Қуръон"',
    category: 'Вебсайт / Платформа',
    categoryId: 'websites',
    techStack: ['Next.js', 'Tailwind CSS', 'Firebase Auth', 'Howler.js', 'Audio Context API'],
    description: 'Платформаи таълимӣ бо тафсир, аудио ва транскриптҳои оятҳои Қуръон ба забони тоҷикӣ бо тарҳи мақбул ва оромбахш.',
    longDescription: 'Лоиҳаи мураккаби таълимӣ ва маънавӣ бо китобхонаи мукаммал, функсияи гӯш кардани қориён бо тарзи интерактивӣ. Яке аз аввалин сомонаҳои премиуми динии Тоҷикистон бо системаи пешрафтаи аудио.',
    features: ['Плеери аудиоии бидуни таваққуф', 'Имкони такрори оятҳо барои ҳифз', 'Тарҷума ва тафсири тоҷикӣ', 'Ҳолати шабонаи оромбахш'],
    image: 'https://picsum.photos/seed/mosque/800/600',
    fallbackImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://quran-tajik.vercel.app',
    githubUrl: 'https://github.com/tajik-dev/quran-tajik-platform'
  },
  {
    id: 'musofir_khona',
    title: 'Мусофир Хона - Портали Хариду Фурӯши Амвол',
    category: 'Системаи Амвол / Вебсайт',
    categoryId: 'websites',
    techStack: ['React', 'Tailwind CSS', 'Supabase', 'Google Maps API', 'Leaflet'],
    description: 'Платформаи премиум барои ҷустуҷӯ, иҷора ва хариди амволи ғайриманқул дар шаҳри Душанбе ва дигар минтақаҳо.',
    longDescription: 'Лоиҳае, ки ба корбарон интерфейси бароҳат барои дарёфти хонаҳои иҷора пешниҳод мекунад. Интегратсия бо харитаҳо ва панели шахсии соҳибхонаҳо имкон медиҳад, ки амвол дар чанд сония ба қайд гирифта шавад.',
    features: ['Ҷустуҷӯ бо филтрҳои касбӣ', 'Харитаи интерактивии хонаҳо', 'Чат бо низоми Telegram Notification', 'Суръати тез дар мобилӣ'],
    image: 'https://picsum.photos/seed/realestate/800/600',
    fallbackImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://musofirkhona.tj',
    githubUrl: 'https://github.com/tajik-dev/musofir-estate'
  },
  {
    id: 'prestige_construction',
    title: 'Сайт барои Ширкати Сохтмонӣ',
    category: 'Вебсайт / Корпоративӣ',
    categoryId: 'websites',
    techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'Three.js (subtle)', 'GLSL'],
    description: 'Муаррифии лоиҳаҳои сохтмонии интеллектуалӣ дар Тоҷикистон бо эффектҳои визуалии 3D ва макетҳои интерактивӣ.',
    longDescription: 'Вебсайти премиум бо эффекти кинематографӣ ва суръати баланд барои ширкати сохтмонии пешбари Душанбе. Намоиши нақшаҳои биноҳо ошёна ба ошёна ва ҳуҷра ба ҳуҷра бо низоми худкори бандкунӣ.',
    features: ['Аниматсияҳои фарогир (3D effects)', 'Тарҳҳои интерактивии ошёнаҳо', 'Боркунии тез ва SEO-созгор', 'Интеграцияи алоқаи мустақим'],
    image: 'https://picsum.photos/seed/construction/800/600',
    fallbackImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://sohtmon-premium.tj',
    githubUrl: 'https://github.com/tajik-dev/construction-agency'
  },
  {
    id: 'tajik_pos',
    title: 'Тоҷик POS / Низоми Муосири Савдо',
    category: 'Системаи POS',
    categoryId: 'pos',
    techStack: ['React', 'TypeScript', 'Node.js', 'Electron', 'SQLite', 'Tailwind CSS'],
    description: 'Системаи пурқудрати савдо барои супермаркетҳо ва фурӯшгоҳҳои Тоҷикистон бо дастгирии фискалӣ ва чопи чекҳо.',
    longDescription: 'Барномаи десктопӣ ва веб, ки барои осон кардани кори хазинадорон сохта шудааст. Он дорои функсияи идоракунии муштариён, бонуси кортӣ, ҳисоботи ҳаррӯзаи фоида ва фурӯши молҳо бо штрих-код мебошад.',
    features: ['Кори мукаммал дар офлайн', 'Интегратсия бо сканери штрих-код', 'Админ-панели таҳлилӣ', 'Шаблони чеки фармоишӣ'],
    image: 'https://picsum.photos/seed/pos/800/600',
    fallbackImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://pos-demo.tj',
    githubUrl: 'https://github.com/tajik-dev/pos-cashier-system'
  },
  {
    id: 'shomi_dushanbe',
    title: 'Шоми Душанбе - Платформаи Тарабхона',
    category: 'Вебсайт / Платформа',
    categoryId: 'websites',
    techStack: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'PostgreSQL'],
    description: 'Вебсайти премиум бо менюи интерактивии 3D, фармоиш ва банд кардани мизҳои тарабхона барои шаҳрвандон.',
    longDescription: 'Сайт барои силсилатарабхонаҳои машҳур, ки фармоиши ғизо, менюи аксдор ва интихоби мизҳои холӣ ба таври визуалӣ дорад.',
    features: ['Менюи босуръати визуалӣ', 'Банд кардани мизи тарабхона', 'Интегратсия бо хаткашонҳо', 'Ҳисоби худкори хароҷот'],
    image: 'https://picsum.photos/seed/restaurant/800/600',
    fallbackImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://shomi-dushanbe.tj',
    githubUrl: 'https://github.com/tajik-dev/restaurant-portal'
  },
  {
    id: 'premium_erp',
    title: 'Премиум Бизнес Модул - Низоми ERP',
    category: 'Системаи ERP',
    categoryId: 'erp',
    techStack: ['React', 'Svelte', 'Node.js', 'PostgreSQL', 'Socket.io', 'Recharts'],
    description: 'Низоми назорати оқилонаи тиҷорат ва автоматизатсияи ҷараёни корҳои ширкатҳои саноатӣ дар кишвар.',
    longDescription: 'Системаи ҳамаҷонибаи ERP барои идоракунии кормандон, ҳисоботи муомилоти молиявӣ, банақшагирии захираҳо ва таҳлили фаврӣ. Дастгирии паёмнависии дохилӣ ва ҳуҷҷатгузории электронӣ.',
    features: ['Модули молия ва баҳисобгирӣ', 'Назорати автоматии анбор', 'Диаграммаҳои таҳлилии dynamic', 'Ҳамгироии СМС-Хабардорӣ'],
    image: 'https://picsum.photos/seed/dashboard/800/600',
    fallbackImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://erp-business.tj',
    githubUrl: 'https://github.com/tajik-dev/erp-business-module'
  },
  {
    id: 'coming_soon_ai',
    title: 'Лоиҳаи Навтарин: Интеллекти Сунъӣ (AI) & Telegram Bot',
    category: 'Ба зудӣ (Coming Soon)',
    categoryId: 'miniapps',
    techStack: ['React', 'Gemini AI Pro', 'Telegram Cloud API', 'Supabase Realtime'],
    description: 'Системаи автоматии зеҳнӣ дар дохили Telegram, ки тиҷорати шуморо ба воситаи AI агентҳо пурра автоматӣ мекунад.',
    longDescription: 'Ин як лоиҳаи навбатии бузург ва инноватсионист, ки ҳоло дар марҳилаи фаъоли таҳия ва рамзгузорӣ қарор дорад. Система қодир аст паёмҳо, фармоишҳо ва зангҳоро бо истифодаи мукаммали OpenAI & Google Gemini идора кунад.',
    features: ['Гӯш кардани овозҳо ва ҷавобҳо бо AI', 'Пайвастшавӣ ба CRM-ҳои Тоҷикистон', 'Панели таҳлилии вақти воқеӣ', 'Агентҳои фурӯши худкор'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    isComingSoon: true
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Банақшагирӣ ва Равшансозии Ҳадафҳо',
    description: 'Таҳлили тиҷорати шумо, муҳокимаи ҷузъиёт, сохтани супориши техникӣ ва кашидани тарҳи аввалия барои ба натиҷаи беҳтарин расидан.',
    phaseResult: 'Супориши техникӣ (ТЗ) ва сохтори умумӣ',
    iconName: 'Compass'
  },
  {
    stepNumber: '02',
    title: 'UI/UX Дизайн (Эстетика ва Осонии Барнома)',
    description: 'Омодасозии тарҳи беназир ва премиум дар Figma. Мо ба ҳар як пиксел, ранг, аниматсия ва соддагии интерфейси барнома диққат медиҳем.',
    phaseResult: 'Макетҳои интерактивии тайёр дар Figma',
    iconName: 'Palette'
  },
  {
    stepNumber: '03',
    title: 'Раванди Кодрезӣ (Таҳия ва Барномасозӣ)',
    description: 'Навиштани коди тоза, бо суръати аҷиб ва бехатарии комил. Истифодаи технологияҳои пешрафта ба монанди React, TS ва Telegram API.',
    phaseResult: 'Намунаи аввалини кори сайт ё барнома',
    iconName: 'Cpu'
  },
  {
    stepNumber: '04',
    title: 'Санҷиши Пурра ва Назорати Сифат',
    description: 'Пешгирӣ ва ислоҳи пурраи хатогиҳо, санҷиши суръати вокуниш дар ҳама намуди дастгоҳҳо ва бехатарии пурраи базаи додаҳо.',
    phaseResult: 'Ҳисоботи санҷиши 100% сифати код',
    iconName: 'ShieldAlert'
  },
  {
    stepNumber: '05',
    title: 'Ба кор андохтан ва Дастгирии Минбаъда',
    description: 'Интиқоли сомона ба сервер (Cloud Run / Vercel), сохтани пайванд бо домени шумо ва омодасозии видео-дастур барои идораи осони сайт.',
    phaseResult: 'Лоиҳаи фаъол ва дастгирии ройгони 3-моҳа',
    iconName: 'Rocket'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Алишер Раҳимов',
    position: 'Менеҷери Асосӣ',
    company: 'Иттиҳодияи Сохтмон КД',
    rating: 5,
    feedback: 'Раҳматулло ба мо сомонаи премиуми корпоративӣ сохт. Эффектҳои олии 3D ва суръати вокуниши сайт мизоҷони моро ба ваҷд овард. Суръати кори ӯ фавқулодда аст! Беҳтарин интихоб барои ширкатҳои калон.',
    gender: 'male'
  },
  {
    id: 't2',
    name: 'Мадина Комилова',
    position: 'Асосгузор ва Роҳбар',
    company: 'SilkRoad Fashion',
    rating: 5,
    feedback: 'Telegram Mini App-е, ки Раҳматулло барои мағозаи мо сохт, фурӯши моро 2 баробар афзоиш дод! Мизоҷон ҳоло бевосита дар дохили Telegram фармоиш ва пардохт мекунанд. Хеле кори касбӣ, ташаккури зиёд!',
    gender: 'female'
  },
  {
    id: 't3',
    name: 'Ҷамшед Ёров',
    position: 'Директори Техникӣ',
    company: 'ТоҷикМаркет Гурӯҳ',
    rating: 5,
    feedback: 'Автоматикунонии системаи ERP барои анбори мо яке аз мураккабтарин корҳо буд. Раҳматулло системаеро таҳия кард, ки тамоми кормандон бе душворӣ истифода мебаранд ва ҳисоботҳо дақиқ сохта мешаванд.',
    gender: 'male'
  },
  {
    id: 't4',
    name: 'Парвиз Саидов',
    position: 'Роҳбар ва Директор',
    company: 'Тамос Кино Гурӯҳ',
    rating: 5,
    feedback: 'Платформаи видеоии Telegram Mini App комилан бенуқсон кор мекунад. Зиёда аз 10,000 корбар ҳар рӯз филмҳоро тамошо мекунанд ва система ҳеҷ гоҳ таваққуф накардааст. Ба кордонии ӯ баҳои 10/10 медиҳам.',
    gender: 'male'
  }
];

export const TECH_STACK_DATA: TechItem[] = [
  { name: 'React', category: 'frontend', glowColor: '#0ea5e9', level: '98%' },
  { name: 'TypeScript', category: 'frontend', glowColor: '#3178c6', level: '95%' },
  { name: 'Tailwind CSS', category: 'frontend', glowColor: '#38bdf8', level: '100%' },
  { name: 'Next.js', category: 'frontend', glowColor: '#ffffff', level: '92%' },
  { name: 'Framer Motion', category: 'frontend', glowColor: '#d946ef', level: '96%' },
  { name: 'Node.js', category: 'backend', glowColor: '#22c55e', level: '94%' },
  { name: 'Express', category: 'backend', glowColor: '#bc1a42', level: '95%' },
  { name: 'Telegram Bot API', category: 'other', glowColor: '#229ed9', level: '99%' },
  { name: 'PostgreSQL', category: 'database', glowColor: '#336791', level: '90%' },
  { name: 'Supabase', category: 'database', glowColor: '#3ecf8e', level: '93%' },
  { name: 'Firebase', category: 'database', glowColor: '#ffca28', level: '91%' },
  { name: 'Vercel / Cloud Run', category: 'other', glowColor: '#14b8a6', level: '95%' }
];
