export type Language = 'TJK' | 'ENG' | 'RUS';

export const TRANSLATIONS = {
  TJK: {
    // Navbar
    navHome: 'Асосӣ',
    navAbout: 'Дар бораи ман',
    navServices: 'Хидматҳо',
    navPortfolio: 'Портфолио',
    navProcess: 'Раванди кор',
    navTestimonials: 'Овезаҳо',
    navContact: 'Алоқа',
    navAdmin: 'Админ',
    navContactMe: 'Тамос бо ман',
    navNavigationTitle: 'Навигатсия',
    navLanguageTitle: 'Интихоби Забон',
    navAdminPanelBtn: 'Панели Админ',

    // Hero
    heroAvailable: 'Барои лоиҳаҳои нав дастрас',
    heroTitlePrefix: 'Ман вебсайтҳо ва ',
    heroTitleGlow: 'системаҳои муосир',
    heroTitleSuffix: ' месозам',
    heroSubtitle: 'Созиши вебсайтҳои премиум, Telegram Mini App, ERP ва системаҳои бизнесӣ барои ширкатҳо ва брендҳои пешрафта бо сифати ҷаҳонӣ.',
    heroBtnPortfolio: 'Дидани корҳо',
    heroBtnContact: 'Тамос гирифтан',
    heroStatProjects: 'Лоиҳаҳо',
    heroStatSatisfaction: 'Қаноатмандӣ',
    heroStatExperience: 'Сол Таҷриба',
    heroDirectContact: 'АЛОҚАИ МУСТАҚИМ:',
    heroLatestProject: 'Лоиҳаи Навтарин',
    heroPosTitle: 'Тоҷик POS / Низоми Савдо',
    heroPosSubtitle: 'Интегратсия бо ERP фаъол аст',
    heroScrollDown: 'Поён ҳаракат кунед',

    // About
    aboutSectionTag: 'МАЪЛУМОТ ДАР БОРАИ МАН',
    aboutTitlePrefix: 'Тарҳрезӣ ва сохтани ',
    aboutTitleGlow: 'ояндаи рақамии тиҷорати Шумо',
    aboutHighlights: [
      'Низоми идоракунии тиҷорати мураккаб (ERP/POS)',
      'Таҳияи босуръати Telegram WebApp/Mini App бо назардошти UX',
      'Мутобиқсозии комил барои дастгоҳҳои мобилӣ ва десктоп',
      'Бехатарӣ ва махфияти пурраи базаи додаҳо (GDPR созгор)',
    ],
    aboutStatProjects: 'Лоиҳаҳои Варақгардон',
    aboutStatProjectsSub: 'Мукаммал ва омодаи кор',
    aboutStatExp: 'Таҷрибаи Касбӣ',
    aboutStatExpSub: 'Дар бозори байналмилалӣ',
    aboutStatSat: 'Қаноатмандии Мизоҷон',
    aboutStatSatSub: 'Кафолати пурраи сифат',
    aboutStatMini: 'Telegram Mini Apps',
    aboutStatMiniSub: 'Пешсафи бозор дар ТҶ',

    // Services
    servicesSectionTag: 'МАҶМӮИ ХИДМАТҲО',
    servicesTitle: 'Хидматҳои касбӣ ва инноватсионӣ',
    servicesSubtitle: 'Лоиҳакашӣ бо истифода аз технологияҳои замонавӣ, устуворӣ дар сатҳи амният ва суръати фаврӣ барои рушди тиҷорати Шумо.',
    servicesPremiumBadge: 'Премиум',

    // Technologies
    techSectionTag: 'ТЕХНОЛОГИЯҲО',
    techTitle: 'Абзорҳои муосири таҳия',
    techSubtitle: 'Истифодаи технологияҳои беҳтарин дар сатҳи ҷаҳонӣ барои кафолат додани суръати фаврӣ, устуворӣ ва амнияти баланди лоиҳаҳо.',
    techCatFrontend: 'ИНТЕРФЕЙС (FRONTEND)',
    techCatBackend: 'БАЙТ-КОД / СЕРВЕР (BACKEND)',
    techCatDatabase: 'МАХЗАНИ ДОДАҲО (DATABASES)',
    techCatOther: 'ИНТЕГРАТСИЯҲО ВА ДИГАР',

    // Process
    processSectionTag: 'РАВАНДИ ИҶРО',
    processTitle: 'Чӣ гуна мо якҷоя кор мекунем?',
    processSubtitle: 'Аз ғоя то лоиҳаи омода ва коркунанда — панҷ қадами асосии касбӣ барои расидан ба натиҷаи беҳтарини тиҷоратӣ.',
    processPhaseResult: 'Натиҷаи марҳила:',
    processStepLabel: 'МАРҲИЛАИ',

    // Portfolio
    portfolioSectionTag: 'КОРҲОИ НАМУНАВӢ',
    portfolioTitle: 'Портфолиои лоиҳаҳои муосир',
    portfolioSubtitle: 'Намунаи вебсайтҳо ва барномаҳои сохташуда, ки тиҷорати мизоҷонро ба сатҳи комилан нав бардоштаанд.',
    portfolioCatAll: 'Ҳама',
    portfolioCatWebsites: 'Вебсайтҳо',
    portfolioCatMiniapps: 'Mini Apps',
    portfolioCatErp: 'ERP',
    portfolioCatPos: 'POS Савдо',
    portfolioCatBots: 'Ботҳо',
    portfolioViewLive: 'Боздиди мустақим',
    portfolioViewGithub: 'Код дар GitHub',
    portfolioComingSoon: 'Ба зудӣ',
    portfolioFilterLabel: 'ФИЛТР:',
    portfolioInDevLabel: 'ДАР ҲОЛИ ТАҲИЯ',
    portfolioInDevSub: 'Ба зудӣ муаррифӣ мешавад',
    portfolioMoreDetails: 'Муфассал / Ҷузъиёт',
    portfolioEmptyTitle: 'Дар ин бахш ҳоло лоиҳа нест.',
    portfolioEmptySub: 'Ба зудӣ лоиҳаҳаҳои нав илова карда мешаванд.',
    portfolioModalFullDetails: 'ҶУЗЪИЁТИ ПУРРАИ ЛОИҲА',
    portfolioModalFeatures: 'ФУНКСИЯҲОИ АСОСӢ:',
    portfolioModalTechUsed: 'ТЕХНОЛОГИЯҲОИ ИСТИФОДАШУДА:',

    // Testimonials
    testimonialsSectionTag: 'ФИКРИ МИЗОҶОН',
    testimonialsTitle: 'Мизоҷони қаноатманд ояндаи моанд',
    testimonialsSubtitle: 'Таҷриба ва назари роҳбарону шариконе, ки ба дониш ва касбияти мо эътимод намудаанд.',

    // Contact
    contactSectionTag: 'ТАМОС ГИРИФТАН',
    contactTitleSuffix: 'Лоиҳаи худро ба мо бовар кунед',
    contactSubtitle: 'Барои сохтани вебсайт ё тиҷорати оқилонаи худ ба мо нависед. Мо дар муддати кӯтоҳтарин ба Шумо ҷавоб хоҳем дод.',
    contactInfoTitle: 'Маълумот барои тамос',
    contactInfoDesc: 'Ман барои ҳамкорӣ ва муҳокимаи лоиҳаҳои нав ҳамеша омодаам. Аз тариқи воситаҳои зер тамос гиред.',
    contactFormName: 'Номи Шумо',
    contactFormContact: 'Суроға / Нишонии тамос (Telegram ё Телефон)',
    contactFormService: 'Намуди хидмат',
    contactFormCompany: 'Номи ширкат (Ихтиёрӣ)',
    contactFormMessage: 'Паёми Шумо',
    contactFormSubmit: 'Ирсоли паём',
    contactFormSending: 'Дар ҳоли ирсол...',
    contactFormSuccess: 'Паёми Шумо бомуваффақият ирсол шуд! Дар наздиктарин фурсат бо Шумо тамос мегирам.',
    contactFormError: 'Хатогӣ ҳангоми ирсол. Лутфан дубора кӯшиш кунед ё мустақиман тариқи Telegram нависед.',
    contactFormTitle: 'Дархости фармоиш ё лоиҳа',
    contactResponseTime: '⚡ ИНТИЗОРИИ ҶАВОБ: Хеле зуд (одатан дар давоми 15-30 дақиқа)',
    contactValidationError: 'Илтимос, майдонҳои асосиро (Ном, Алоқа, Паём) пур кунед.',
    contactFormSendAnother: 'Ирсоли паёми дигар',
    contactServiceLanding: 'Landing Page сомона',
    contactServiceCorporate: 'Вебсайти Корпоративӣ',
    contactServiceMiniApp: 'Telegram Mini App (WebApp)',
    contactServiceErp: 'Системаи мураккаби ERP',
    contactServicePos: 'Системаи POS / Савдо',
    contactServiceBot: 'Роботи Telegram Bot',
    contactServiceUiux: 'UI/UX Дизайн дар Figma',
    contactChannelTelegram: 'Telegram Бевосита',
    contactChannelWhatsApp: 'WhatsApp Алоқа',
    contactChannelInstagram: 'Instagram Канал',
    contactChannelEmail: 'Почтаи Электронӣ',
    contactInfoSubtitle: 'Роҳҳои мустақим барои муҳокима',
    footerRightsReserved: 'Ҳамаи ҳуқуқҳо ҳифз шудаанд.',
    footerPremiumDeveloper: 'Premium Tajik Developer',
    footerMadeWith: 'Сохта шудааст бо',
    footerInDushanbe: 'дар Душанбе, Тоҷикистон',

    // Admin Panel
    adminLoginTitle: 'ДАСТРАСӢ БА СИСТЕМА (ADMIN)',
    adminPasswordPlaceholder: 'Калиди махфиро ворид кунед...',
    adminLoginBtn: 'Воридшавӣ',
    adminLoggingIn: 'Санҷиши дастрасӣ...',
    adminLogoutBtn: 'Баромад',
    adminTabDashboard: 'Панел',
    adminTabProjects: 'Лоиҳаҳо',
    adminTabServices: 'Хидматҳо',
    adminTabTestimonials: 'Тавсияҳо',
    adminTabProfile: 'Профил',
    adminTabStats: 'Омор',
    adminTabMessages: 'Паёмҳо',
    adminProfileTitle: 'Танзимоти Профили Таҳиягар',
    adminProfileDesc: 'Маълумоти умумии худро, ки дар бахши "Дар бораи ман" ва саҳифаҳои асосӣ нишон дода мешаванд, танзим кунед.',
    adminWebsiteLogoLabel: 'Логотипи Вебсайт'
  },
  ENG: {
    // Navbar
    navHome: 'Home',
    navAbout: 'About Me',
    navServices: 'Services',
    navPortfolio: 'Portfolio',
    navProcess: 'Process',
    navTestimonials: 'Reviews',
    navContact: 'Contact',
    navAdmin: 'Admin',
    navContactMe: 'Contact Me',
    navNavigationTitle: 'Navigation',
    navLanguageTitle: 'Select Language',
    navAdminPanelBtn: 'Admin Panel',

    // Hero
    heroAvailable: 'Available for new projects',
    heroTitlePrefix: 'I build websites & ',
    heroTitleGlow: 'modern systems',
    heroTitleSuffix: ' for business',
    heroSubtitle: 'Development of premium websites, Telegram Mini Apps, ERP, and business automation systems for progressive companies at a global level of quality.',
    heroBtnPortfolio: 'View Works',
    heroBtnContact: 'Get in Touch',
    heroStatProjects: 'Projects',
    heroStatSatisfaction: 'Satisfaction',
    heroStatExperience: 'Years Experience',
    heroDirectContact: 'DIRECT CONTACT:',
    heroLatestProject: 'Latest Project',
    heroPosTitle: 'Tajik POS / Trade System',
    heroPosSubtitle: 'ERP Integration Active',
    heroScrollDown: 'Scroll Down',

    // About
    aboutSectionTag: 'INFO ABOUT ME',
    aboutTitlePrefix: 'Structuring and built ',
    aboutTitleGlow: 'your digital business future',
    aboutHighlights: [
      'Sophisticated business management systems (ERP/POS)',
      'Rapid design of interactive Telegram WebApp/Mini Apps',
      'Perfect adaptability across both mobile and desktop',
      'Total security and privacy database controls (GDPR ready)',
    ],
    aboutStatProjects: 'Successful Projects',
    aboutStatProjectsSub: 'Completed & live online',
    aboutStatExp: 'Expertise Years',
    aboutStatExpSub: 'In international markets',
    aboutStatSat: 'Client Satisfaction',
    aboutStatSatSub: 'Guaranteed highest quality',
    aboutStatMini: 'Telegram Mini Apps',
    aboutStatMiniSub: 'Market leader in TJ',

    // Services
    servicesSectionTag: 'SERVICES LIST',
    servicesTitle: 'Professional & Innovative Services',
    servicesSubtitle: 'Crafted using cutting-edge technologies, emphasizing premium security and incredible performance to grow your business.',
    servicesPremiumBadge: 'Premium',

    // Technologies
    techSectionTag: 'TECH STACK',
    techTitle: 'Modern Development Tools',
    techSubtitle: 'Employing global industry standards to guarantee blazing speed, total reliability, and maximum database security.',
    techCatFrontend: 'INTERFACE (FRONTEND)',
    techCatBackend: 'SERVER CODE (BACKEND)',
    techCatDatabase: 'DATABASES',
    techCatOther: 'INTEGRATIONS & OTHER',

    // Process
    processSectionTag: 'WORK PROCESS',
    processTitle: 'How we collaborate together?',
    processSubtitle: 'From concept brainstorming to a fully functional launched product — five structural steps for achieving commercial success.',
    processPhaseResult: 'Phase deliverable:',
    processStepLabel: 'PHASE',

    // Portfolio
    portfolioSectionTag: 'SUCCESS STORIES',
    portfolioTitle: 'Modern Project Portfolio',
    portfolioSubtitle: 'Selected successful installations that have pushed client goals to an entirely new height.',
    portfolioCatAll: 'All',
    portfolioCatWebsites: 'Websites',
    portfolioCatMiniapps: 'Mini Apps',
    portfolioCatErp: 'ERP',
    portfolioCatPos: 'POS systems',
    portfolioCatBots: 'Bots',
    portfolioViewLive: 'Live Demo',
    portfolioViewGithub: 'GitHub Code',
    portfolioComingSoon: 'Coming Soon',
    portfolioFilterLabel: 'FILTER:',
    portfolioInDevLabel: 'UNDER DEVELOPMENT',
    portfolioInDevSub: 'Will be presented soon',
    portfolioMoreDetails: 'Details',
    portfolioEmptyTitle: 'No items in this section yet.',
    portfolioEmptySub: 'New works will be appended shortly.',
    portfolioModalFullDetails: 'FULL PROJECT PROFILE',
    portfolioModalFeatures: 'KEY FEATURES:',
    portfolioModalTechUsed: 'TECHNOLOGIES USED:',

    // Testimonials
    testimonialsSectionTag: 'CLIENT CRITIQUES',
    testimonialsTitle: 'Satisfied customers guide our future',
    testimonialsSubtitle: 'Direct reviews and verdicts from executives who put trust in our professional development capabilities.',

    // Contact
    contactSectionTag: 'GET IN TOUCH',
    contactTitleSuffix: 'Entrust your project to us',
    contactSubtitle: 'Reach out to build a powerful web presence or automate your business. We will respond within hours.',
    contactInfoTitle: 'Contact Information',
    contactInfoDesc: 'I am always available to consult, discuss partnerships, or launch new projects. Reach out below.',
    contactFormName: 'Your Name',
    contactFormContact: 'Contact handle (Telegram or Phone number)',
    contactFormService: 'Service desired',
    contactFormCompany: 'Company Name (Optional)',
    contactFormMessage: 'Your Message',
    contactFormSubmit: 'Send Message',
    contactFormSending: 'Sending message...',
    contactFormSuccess: 'Message received successfully! I will reach out to you shortly.',
    contactFormError: 'Error sending message. Please try again or write directly on Telegram.',
    contactFormTitle: 'Project or Order Inquiry',
    contactResponseTime: '⚡ RESPONSE TIME: Blazing fast (usually within 15-30 minutes)',
    contactValidationError: 'Please fill in the required fields (Name, Contact handle, Message).',
    contactFormSendAnother: 'Send another message',
    contactServiceLanding: 'Landing Page Website',
    contactServiceCorporate: 'Corporate Business Site',
    contactServiceMiniApp: 'Telegram Mini App (WebApp)',
    contactServiceErp: 'Complex ERP System',
    contactServicePos: 'POS Retail System',
    contactServiceBot: 'Telegram Bot Automations',
    contactServiceUiux: 'Premium UI/UX Figma Design',
    contactChannelTelegram: 'Direct Telegram Chat',
    contactChannelWhatsApp: 'WhatsApp Contact',
    contactChannelInstagram: 'Instagram Feed',
    contactChannelEmail: 'Direct E-mail Inbox',
    contactInfoSubtitle: 'Direct channels for brief chat',
    footerRightsReserved: 'All rights reserved.',
    footerPremiumDeveloper: 'Premium Developer',
    footerMadeWith: 'Made with',
    footerInDushanbe: 'in Dushanbe, Tajikistan',

    // Admin Panel
    adminLoginTitle: 'ADMINISTRATIVE ACCESS LOCK',
    adminPasswordPlaceholder: 'Enter secret passphrase...',
    adminLoginBtn: 'Authorize',
    adminLoggingIn: 'Verifying keys...',
    adminLogoutBtn: 'Disconnect',
    adminTabDashboard: 'Dashboard',
    adminTabProjects: 'Projects',
    adminTabServices: 'Services',
    adminTabTestimonials: 'Reviews',
    adminTabProfile: 'Profile',
    adminTabStats: 'Stats',
    adminTabMessages: 'Inbox',
    adminProfileTitle: 'Developer Profile settings',
    adminProfileDesc: 'Configure general profile information, shown inside About page and principal section cards.',
    adminWebsiteLogoLabel: 'Website Logo Image'
  },
  RUS: {
    // Navbar
    navHome: 'Главная',
    navAbout: 'Обо мне',
    navServices: 'Услуги',
    navPortfolio: 'Портфолио',
    navProcess: 'Рабочий процесс',
    navTestimonials: 'Отзывы',
    navContact: 'Контакты',
    navAdmin: 'Админ',
    navContactMe: 'Связаться',
    navNavigationTitle: 'Навигация',
    navLanguageTitle: 'Выбор Языка',
    navAdminPanelBtn: 'Панель управления',

    // Hero
    heroAvailable: 'Доступен для новых проектов',
    heroTitlePrefix: 'Я создаю сайты и ',
    heroTitleGlow: 'современные системы',
    heroTitleSuffix: ' для бизнеса',
    heroSubtitle: 'Разработка премиальных веб-сайтов, Telegram Mini Apps, ERP и комплексных автоматизаций для прогрессивных компаний на мировом уровне качества.',
    heroBtnPortfolio: 'Смотреть работы',
    heroBtnContact: 'Связаться с нами',
    heroStatProjects: 'Проектов',
    heroStatSatisfaction: 'Удовлетворенность',
    heroStatExperience: 'Лет Опыта',
    heroDirectContact: 'ПРЯМАЯ СВЯЗЬ:',
    heroLatestProject: 'Новейший проект',
    heroPosTitle: 'Таджик POS / Системы Продаж',
    heroPosSubtitle: 'ERP интеграция активирована',
    heroScrollDown: 'Прокрутить вниз',

    // About
    aboutSectionTag: 'ИНФОРМАЦИЯ ОБО МНЕ',
    aboutTitlePrefix: ' Проектирование и создание ',
    aboutTitleGlow: 'цифрового будущего вашего бизнеса',
    aboutHighlights: [
      'Сложные системы управления процессами предприятия (ERP/POS)',
      'Быстрая разработка премиальных Telegram WebApp/Mini Apps',
      'Безупречная кросс-платформенная отзывчивость (мобильные и ПК)',
      'Полная защита, шифрование и конфиденциальность БД (GDPR готов)',
    ],
    aboutStatProjects: 'Успешных проектов',
    aboutStatProjectsSub: 'Реализовано и работает онлайн',
    aboutStatExp: 'Профессиональный стаж',
    aboutStatExpSub: 'На международном рынке',
    aboutStatSat: 'Довольные клиенты',
    aboutStatSatSub: 'Полная гарантия качества',
    aboutStatMini: 'Telegram Mini Apps',
    aboutStatMiniSub: 'Лидер рынка в Таджикистане',

    // Services
    servicesSectionTag: 'СПЕКТР УСЛУГ',
    servicesTitle: 'Профессиональные и Инновационные Услуги',
    servicesSubtitle: 'Разработка на базе современнейших технологий с акцентом на надежность, абсолютную безопасность данных и максимальное быстродействие.',
    servicesPremiumBadge: 'Премиум',

    // Technologies
    techSectionTag: 'ТЕХНОЛОГИИ',
    techTitle: 'Инструментарий разработки',
    techSubtitle: 'Применение передовых мировых технологий для гарантии молниеносной отрисовки, устойчивости и безопасности данных.',
    techCatFrontend: 'ИНТЕРФЕЙС (FRONTEND)',
    techCatBackend: 'СЕРВЕРНЫЙ КОД (BACKEND)',
    techCatDatabase: 'БАЗЫ ДАННЫХ (DATABASES)',
    techCatOther: 'ИНТЕГРАЦИИ И ДРУГОЕ',

    // Process
    processSectionTag: 'ПРОЦЕСС РАБОТЫ',
    processTitle: 'Как мы взаимодействуем вместе?',
    processSubtitle: 'От первой консультации и согласования ТЗ до запуска готового продукта — пять шагов для достижения коммерческого прорыва.',
    processPhaseResult: 'Результат этапа:',
    processStepLabel: 'ШАГ',

    // Portfolio
    portfolioSectionTag: 'ПРИМЕРЫ РАБОТ',
    portfolioTitle: 'Современное портфолио проектов',
    portfolioSubtitle: 'Реальные примеры программных решений и порталов, которые вывели бизнес-процессы клиентов на новый уровень.',
    portfolioCatAll: 'Все',
    portfolioCatWebsites: 'Сайты',
    portfolioCatMiniapps: 'Mini Apps',
    portfolioCatErp: 'ERP системы',
    portfolioCatPos: 'POS системы',
    portfolioCatBots: 'Боты',
    portfolioViewLive: 'Смотреть демо',
    portfolioViewGithub: 'Код на GitHub',
    portfolioComingSoon: 'Скоро запуск',
    portfolioFilterLabel: 'ФИЛЬТР:',
    portfolioInDevLabel: 'В ПРОЦЕССЕ РАЗРАБОТКИ',
    portfolioInDevSub: 'Будет представлено в скором времени',
    portfolioMoreDetails: 'Подробнее',
    portfolioEmptyTitle: 'В этой категории пока нет проектов.',
    portfolioEmptySub: 'Скоро мы добавим новые интересные работы.',
    portfolioModalFullDetails: 'ПОЛНЫЕ ПОДРОБНОСТИ О ПРОЕКТЕ',
    portfolioModalFeatures: 'ОСНОВНЫЕ ФУНКЦИИ:',
    portfolioModalTechUsed: 'ИСПОЛЬЗУЕМЫЕ ТЕХНОЛОГИИ:',

    // Testimonials
    testimonialsSectionTag: 'МНЕНИЯ КЛИЕНТОВ',
    testimonialsTitle: 'Довольные клиенты — наше вдохновение',
    testimonialsSubtitle: 'Искренние отзывы от основателей компаний и технических лидеров, доверившихся нашему профессионализму.',

    // Contact
    contactSectionTag: 'ОБРАТНАЯ СВЯЗЬ',
    contactTitleSuffix: 'Доверьте ваш проект экспертам',
    contactSubtitle: 'Напишите нам для разработки качественного корпоративного сайта или автоматизации бизнес процессов. Мы скоро свяжемся.',
    contactInfoTitle: 'Контактные данные',
    contactInfoDesc: 'Всегда открыт для коллабораций, подробной консультации и запуска масштабных веб-продуктов.',
    contactFormName: 'Ваше имя',
    contactFormContact: 'Контактные данные (Telegram ник или Телефон)',
    contactFormService: 'Выберите услугу',
    contactFormCompany: 'Название компании (Опционально)',
    contactFormMessage: 'Ваше сообщение',
    contactFormSubmit: 'Отправить сообщение',
    contactFormSending: 'Отправка сообщения...',
    contactFormSuccess: 'Сообщение доставлено успешно! Мы свяжемся с вами в самый кратчайший срок.',
    contactFormError: 'Ошибка отправки данных. Пожалуйста, попытайтесь снова или напишите напрямую в Telegram.',
    contactFormTitle: 'Запрос на заказ или проект',
    contactResponseTime: '⚡ СКОРОСТЬ ОТВЕТА: Очень быстро (обычно в течение 15-30 минут)',
    contactValidationError: 'Пожалуйста, заполните обязательные поля (Имя, Контакт, Сообщение).',
    contactFormSendAnother: 'Отправить другое сообщение',
    contactServiceLanding: 'Разработка Landing Page',
    contactServiceCorporate: 'Корпоративный Веб-сайт',
    contactServiceMiniApp: 'Telegram Mini App (WebApp)',
    contactServiceErp: 'Сложные ERP Системы',
    contactServicePos: 'POS Системы / Торговля',
    contactServiceBot: 'Умные Telegram Боты',
    contactServiceUiux: 'Разработка UI/UX дизайнов',
    contactChannelTelegram: 'Прямой Telegram чат',
    contactChannelWhatsApp: 'Ассистент WhatsApp',
    contactChannelInstagram: 'Личный Instagram',
    contactChannelEmail: 'Письмо на Эл. Почту',
    contactInfoSubtitle: 'Прямые каналы для связи',
    footerRightsReserved: 'Все права защищены.',
    footerPremiumDeveloper: 'Премиум Разработчик',
    footerMadeWith: 'Создано с',
    footerInDushanbe: 'в Душанбе, Таджикистан',

    // Admin Panel
    adminLoginTitle: 'АВТОРИЗАЦИЯ РУКОВОДИТЕЛЯ',
    adminPasswordPlaceholder: 'Введите секретный ключ доступа...',
    adminLoginBtn: 'Авторизоваться',
    adminLoggingIn: 'Проверка прав доступа...',
    adminLogoutBtn: 'Выйти из кабинета',
    adminTabDashboard: 'Дашборд',
    adminTabProjects: 'Проекты',
    adminTabServices: 'Услуги',
    adminTabTestimonials: 'Отзывы',
    adminTabProfile: 'Профиль',
    adminTabStats: 'Омор/Статы',
    adminTabMessages: 'Запросы',
    adminProfileTitle: 'Настройки главного профиля',
    adminProfileDesc: 'Конфигурируйте карточки биографии, имени и вступительные заголовки, отображаемые на главной.',
    adminWebsiteLogoLabel: 'Логотип интернет-портала'
  }
};

// Default translation objects for the static data array values so that they reflect perfectly when language shifts
export const defaultProfileTranslations = {
  TJK: {
    name: 'Раҳматулло',
    role: 'АСОСГУЗОРИ RAHMATULLO.COM / TAJIK DIGITAL DEVELOPER',
    introTitle: 'Салом! Ман Раҳматулло, таҳиягари касбӣ бо ҳадафи баланд бардоштани сатҳи рақамии тиҷорат дар Тоҷикистон ҳастам.',
    bio: 'Ман ба сохтани вебсайтҳои тез, зебо ва профессионалӣ диққат медиҳам. Ҳадафи ман сохтани системаҳоест, ки брендҳоро калонтар, васеътар ва қавитар нишон медиҳанд. Суръати кори баланд, амният ва таҷрибаи бароҳати истифодабаранда (UX) асоси кори маро ташкил медиҳанд.',
    quote: 'Ҳар як сомона ё барномае, ки мо месозем, бояд бозигари асосӣ ва қавии ҳамон соҳа бошад. Мо на танҳо код менависем — мо ояндаи тиҷорати шуморо маҷозӣ месозем.',
  },
  ENG: {
    name: 'Rahmatullo',
    role: 'FOUNDER OF RAHMATULLO.COM / TAJIK DIGITAL DEVELOPER',
    introTitle: 'Hello! I am Rahmatullo, a professional developer with a mission to elevate the digital presence of businesses in Tajikistan.',
    bio: 'I specialize in creating speedy, visually outstanding, and highly professional web layouts. My focus is building robust systems that make brands look massive, authoritative, and strong. Unprecedented loading speeds, bulletproof security, and beautiful user experience (UX) form the foundation of my engineering.',
    quote: 'Every website or custom service we deploy must represent the market leader in that specific vertical. We do not just compile scripts — we engineer the future of your company.',
  },
  RUS: {
    name: 'Рахматулло',
    role: 'ОСНОВАТЕЛЬ RAHMATULLO.COM / TAJIK DIGITAL DEVELOPER',
    introTitle: 'Привет! Я Рахматулло, эксперт по веб-разработке с миссией масштабирования цифровых технологий в Таджикистане.',
    bio: 'Я специализируюсь на создании молниеносных, прекрасных и высококлассных веб-систем. Моя цель — разработка платформ, придающих авторитет, силу и максимальную видимость вашему бренду. Высокая скорость рендеринга, безопасность транзакций и безупречное UX-проектирование — основы моего мастерства.',
    quote: 'Каждый интернет-ресурс, запущенный нами, обязан быть ключевым игроком в своей рыночной нише. Мы пишем не просто код — мы формулируем виртуальное превосходство вашего бизнеса.',
  }
};

export const defaultServicesTranslations: Record<Language, Record<string, { title: string, description: string, benefits: string[] }>> = {
  TJK: {
    landing: {
      title: 'Landing Page Website / Саҳифаи муосир',
      description: 'Вебсайтҳои яксаҳифагии ҷолиб барои таблиғи маҳсулот ё хидматҳои мушаххас бо конверсияи баланд.',
      benefits: ['Дизайни муосири мобилӣ', 'Суръати ниҳоят тез', 'Аниматсияҳои ҷолиб']
    },
    business: {
      title: 'Сомонаҳои корпоративӣ',
      description: 'Сохтани вебсайтҳои бисёрфунксионалӣ барои муаррифӣ ва рушди ширкат дар фазои онлайн.',
      benefits: ['Системаи идоракунии мазмун (CMS)', 'Интегратсия бо шабакаҳои иҷтимоӣ', 'Оптимизатсияи SEO']
    },
    realestate: {
      title: 'Платформаҳои хариду фурӯши амвол',
      description: 'Сомонаҳои мукаммал барои корхонаҳои риэлторӣ, бо филтрҳои пешрафта, харитаҳо ва галереяи аксҳо.',
      benefits: ['Ҷустуҷӯи зуд ва қулай', 'Кабинети шахсии агентҳо', 'Интеграцияи Telegram-Овеза']
    },
    erp: {
      title: 'Системаҳои идоракунии ERP',
      description: 'Системаҳои махсусгардонидашуда барои автоматизатсияи пурраи равандҳои корӣ, ҳисоботҳо ва назорати молия.',
      benefits: ['Таҳлили визуалии тиҷорат', 'Назорати кормандон ва анбор', 'Амнияти баланди додаҳо']
    },
    pos: {
      title: 'Системаҳои POS / Савдо',
      description: 'Автоматикунонии тарабхонаҳо, супермаркетҳо ва нуқтаҳои савдо бо дастгирии чекҳо ва ҳисобҳои молӣ.',
      benefits: ['Пайвастшавӣ ба принтерҳои чек', 'Ҳолати корӣ дар офлайн', 'Дастрасӣ аз ҳама дастгоҳҳо']
    },
    telegram_bot: {
      title: 'Ботҳои автоматикунонидашуда',
      description: 'Ботҳои интеллектуалӣ барои Telegram, ки хидматрасонии мизоҷон ва фурӯшро автоматикӣ мекунанд.',
      benefits: ['Ҷавобҳои худкори 24/7', 'Интегратсия бо базаи маълумот', 'Пардохтҳо дар дохили бот']
    },
    mini_app: {
      title: 'Telegram Mini Apps (WebApps)',
      description: 'Веб-барномаҳои мукаммал мустақим дар дохили Telegram бо функсияҳои премиум, вебсайт ва мағоза.',
      benefits: ['Кушодашавии фаврӣ', 'Интерфейси Native ба монанди iOS/Android', 'Дастрасии бевосита ба корбарон']
    },
    admin_panel: {
      title: 'Панели Идоракунии Умумӣ',
      description: 'Админ-панелҳои зебо ва содда барои назорати вебсайтҳо, ботҳо ва замимаҳои шумо.',
      benefits: ['Барои истифода хеле содда', 'Экспорти додаҳо ба Excel/PDF', 'Графикҳои интерактивӣ']
    },
    ui_ux: {
      title: 'UI/UX Дизайни Миллӣ ва Премиум',
      description: 'Аввал тарҳрезӣ ва сохтани макетҳои интерактивӣ дар Figma бо назардошти усулҳои замонавии сатҳи ҷаҳонӣ.',
      benefits: ['Прототипи содда ва мукаммал', 'Сохтори ба корбар форам', 'Дизайни эксклюзивӣ']
    }
  },
  ENG: {
    landing: {
      title: 'Landing Page Website / Modern Page',
      description: 'Exquisite single-page landing architectures built specifically to guide maximum sales conversion and highlight premium offers.',
      benefits: ['Mobile-first ultra responsive layouts', 'Extreme frame loading rates', 'Mesmerizing micro-animations']
    },
    business: {
      title: 'Corporate Systems',
      description: 'Design of beautiful and cohesive corporate web platforms to secure trust and elevate online branding.',
      benefits: ['Advanced modular CMS engine', 'Fluid social media triggers', 'High-ranking SEO blueprint']
    },
    realestate: {
      title: 'Real Estate Aggregators',
      description: 'Complete systems tailored for agencies, fitted with interactive search matrices, mapping, and elegant card portfolios.',
      benefits: ['Blazing-fast filtered query search', 'Private profiles for staff agents', 'Auto Telegram Alert integration']
    },
    erp: {
      title: 'ERP Process Management Systems',
      description: 'Tailor-programmed intranets configured to automate general workflows, aggregate analytical metrics, and secure finances.',
      benefits: ['Stunning interactive visualization charts', 'Live warehouse and staff telemetry', 'Military-grade data encryption']
    },
    pos: {
      title: 'POS Selling & Register Terminals',
      description: 'Ultimate modules for high-throughput restaurants, markets and grocery points, complete with checkout printer bindings.',
      benefits: ['Direct hardware receipt integrations', 'Flawless standalone offline capability', 'Universal secure network access']
    },
    telegram_bot: {
      title: 'Autonomous Telegram Bots',
      description: 'Algorithmic conversational responders mapping client support requests, logging data pipelines, and finalizing sales organically.',
      benefits: ['Robust round-the-clock automation', 'Optimized database connectivity', 'Direct native in-chat billing']
    },
    mini_app: {
      title: 'Telegram Mini Apps (WebApps)',
      description: 'Uncompromising modular applications rendering directly inside Telegram for unmatched ease-of-use and frictionless sales.',
      benefits: ['Instantaneous initial rendering speeds', 'Fully custom native look & feel', 'Zero conversion drop-offs']
    },
    admin_panel: {
      title: 'Central Control Dashboards',
      description: 'Spectacular, easily configurable backend modules to monitor, manage, and scale files, assets, and database feeds.',
      benefits: ['Highly intuitive layout hierarchy', 'Seamless spreadsheet / PDF exporting', 'Interactive responsive analytics']
    },
    ui_ux: {
      title: 'National & Premium UI/UX Artistry',
      description: 'Elite layout sketching, style boards and high-fidelity interaction prototyping built in Figma using standard conventions.',
      benefits: ['High precision design drafts', 'Strongly human-centered layouts', 'Unique hand-crafted original elements']
    }
  },
  RUS: {
    landing: {
      title: 'Landing Page / Промо-сайт',
      description: 'Одностраничные высокопроизводительные лендинги для яркой презентации преимуществ, товаров или услуг.',
      benefits: ['Современный мобильный интерфейс', 'Максимальное быстродействие', 'Завораживающие микро-анимации']
    },
    business: {
      title: 'Корпоративные Веб-порталы',
      description: 'Многофункциональные платформы для продвижения услуг компании, укрепления репутации бренда и поиска клиентов.',
      benefits: ['Удобная модульная CMS-система', 'Интеграция с СМС и соцсетями', 'Семантическая SEO оптимизация']
    },
    realestate: {
      title: 'Платформы по Недвижимости',
      description: 'Разработка обширных баз данных недвижимости с умным поиском, фильтрами, метками на картах и галереей.',
      benefits: ['Мгновенный подбор по параметрам', 'Личные кабинеты для риелторов', 'Авто-уведомления в Telegram бот']
    },
    erp: {
      title: 'Системы автоматизации ERP',
      description: 'Масштабируемые CRM и ERP решения для ведения учета, финансовой аналитики, управления кадрами и контроля процессов.',
      benefits: ['Бизнес-аналитика в виде графиков', 'Аудит действий персонала и склада', 'Наивысший уровень шифрования данных']
    },
    pos: {
      title: 'POS-Терминалы / Системы Торговли',
      description: 'Автоматизация розничных сетей, кафе и рынков со встроенной аналитикой, складскими запасами и печатью чеков.',
      benefits: ['Прямая печать чеков на принтеры', 'Надежность при работе без интернета', 'Контроль кассы с любого смартфона']
    },
    telegram_bot: {
      title: 'Многозадачные Чат-боты',
      description: 'Умные роботизированные решения для общения с лидами, ответов 24/7 и интеграции со внутренними сервисами.',
      benefits: ['Исключение человеческого фактора 24/7', 'Надежная синхронизация с СУБД', 'Прием транзакций в окне чата']
    },
    mini_app: {
      title: 'Telegram Mini Apps (WebApps)',
      description: 'Полноценные веб-приложения, вшитые внутрь Telegram, с доступом к нативным инструментам, чатам и геолокации.',
      benefits: ['Мгновенный запуск без установки', 'Нативный дизайн (похож на iOS/Android)', 'Органический вирусный охват']
    },
    admin_panel: {
      title: 'Универсальные Панели Идора',
      description: 'Интуитивно понятные админ-панели для администрирования веб-сайтов, приложений и внешних баз данных.',
      benefits: ['Упрощенное юзабилити платформы', 'Автоматический экспорт в PDF / Excel', 'Интерактивные реал-тайм графики']
    },
    ui_ux: {
      title: 'Премиальный UI/UX Дизайн',
      description: 'Разработка интерактивных дизайн-макетов в Figma с учетом международных тенденций пользовательского опыта.',
      benefits: ['Полные кликабельные прототипы', 'Удобнейшая эргономика страниц', 'Исключительная визуальная идентичность']
    }
  }
};

export const defaultProjectsTranslations: Record<Language, Record<string, { title: string, category: string, description: string, longDescription: string, features: string[] }>> = {
  TJK: {
    tamosho_cinema: {
      title: 'Tamosho Cinema - Telegram Mini App',
      category: 'Telegram Mini App',
      description: 'Платформаи тамошои филмҳо ва сериалҳои муосир мустақим дар дохили барномаи Telegram бо суръати фавқулодда.',
      longDescription: 'Барномаи пешрафта бо тарҳи Awwwards, ки ба корбарон имкон медиҳад филмҳои тоҷикӣ ва хориҷиро бе берун шудан аз Telegram тамошо кунанд. Система профили корбар, пардохтҳои онлайн, ҷустуҷӯ ва боркунии фаврӣ дорад.',
      features: ['Плеери видеоии интегратсияшуда', 'Пардохти худкор бо кортҳои Тоҷикистон', 'Рӯйхати филмҳои дӯстдошта', 'Тавсияҳои интеллектуалӣ бо AI']
    },
    quran_platform: {
      title: 'Интерфейси Мукаммали "Муаллими Қуръон"',
      category: 'Вебсайт / Платформа',
      description: 'Платформаи таълимӣ бо тафсир, аудио ва транскриптҳои оятҳои Қуръон ба забони тоҷикӣ бо тарҳи мақбул ва оромбахш.',
      longDescription: 'Лоиҳаи мураккаби таълимӣ ва маънавӣ бо китобхонаи мукаммал, функсияи гӯш кардани қориён бо тарзи интерактивӣ. Яке аз аввалин сомонаҳои премиуми динии Тоҷикистон бо системаи пешрафтаи аудио.',
      features: ['Плеери аудиоии бидуни таваққуф', 'Имкони такрори оятҳо барои ҳифз', 'Тарҷума ва тафсири тоҷикӣ', 'Ҳолати шабонаи оромбахш']
    },
    musofir_khona: {
      title: 'Мусофир Хона - Портали Хариду Фурӯши Амвол',
      category: 'Системаи Амвол / Вебсайт',
      description: 'Платформаи премиум барои ҷустуҷӯ, иҷора ва хариди амволи ғайриманқул дар шаҳри Душанбе ва дигар минтақаҳо.',
      longDescription: 'Лоиҳае, ки ба корбарон интерфейси бароҳат барои дарёфти хонаҳои иҷора пешниҳод мекунад. Интегратсия бо харитаҳо ва панели шахсии соҳибхонаҳо имкон медиҳад, ки амвол дар чанд сония ба қайд гирифта шавад.',
      features: ['Ҷустуҷӯ бо филтрҳои касбӣ', 'Харитаи интерактивии хонаҳо', 'Чат бо низоми Telegram Notification', 'Суръати тез дар мобилӣ']
    },
    prestige_construction: {
      title: 'Сайт барои Ширкати Сохтмонӣ',
      category: 'Вебсайт / Корпоративӣ',
      description: 'Муаррифии лоиҳаҳои сохтмонии интеллектуалӣ дар Тоҷикистон бо эффектҳои визуалии 3D ва макетҳои интерактивӣ.',
      longDescription: 'Вебсайти премиум бо эффекти кинематографӣ ва суръати баланд барои ширкати сохтмонии пешбари Душанбе. Намоиши нақшаҳои биноҳо ошёна ба ошёна ва ҳуҷра ба ҳуҷра бо низоми худкори бандкунӣ.',
      features: ['Аниматсияҳои фарогир (3D effects)', 'Тарҳҳои интерактивии ошёнаҳо', 'Боркунии тез ва SEO-созгор', 'Интеграцияи алоқаи мустақим']
    },
    tajik_pos: {
      title: 'Тоҷик POS / Низоми Муосири Савдо',
      category: 'Системаи POS',
      description: 'Системаи пурқудрати савдо барои супермаркетҳо ва фурӯшгоҳҳои Тоҷикистон бо дастгирии фискалӣ ва чопи чекҳо.',
      longDescription: 'Барномаи десктопӣ ва веб, ки барои осон кардани кори хазинадорон сохта шудааст. Он дорои функсияи идоракунии муштариён, бонуси кортӣ, ҳисоботи ҳаррӯзаи фоида ва фурӯши молҳо бо штрих-код мебошад.',
      features: ['Кори мукаммал дар офлайн', 'Интегратсия бо сканери штрих-код', 'Админ-панели таҳлилӣ', 'Шаблони чеки фармоишӣ']
    },
    shomi_dushanbe: {
      title: 'Шоми Душанбе - Платформаи Тарабхона',
      category: 'Вебсайт / Платформа',
      description: 'Вебсайти премиум бо менюи интерактивии 3D, фармоиш ва банд кардани мизҳои тарабхона барои шаҳрвандон.',
      longDescription: 'Сайт барои силсилатарабхонаҳои машҳур, ки фармоиши ғизо, менюи аксдор ва интихоби мизҳои холӣ ба таври визуалӣ дорад.',
      features: ['Менюи босуръати визуалӣ', 'Банд кардани мизи тарабхона', 'Интегратсия бо хаткашонҳо', 'Ҳисоби худкори хароҷот']
    },
    premium_erp: {
      title: 'Премиум Бизнес Модул - Низоми ERP',
      category: 'Системаи ERP',
      description: 'Низоми назорати оқилонаи тиҷорат ва автоматизатсияи ҷараёни корҳои ширкатҳои саноатӣ дар кишвар.',
      longDescription: 'Системаи ҳамаҷонибаи ERP барои идоракунии кормандон, ҳисоботи муомилоти молиявӣ, банақшагирии захираҳо ва таҳлили фаврӣ. Дастгирии паёмнависии дохилӣ ва ҳуҷҷатгузории электронӣ.',
      features: ['Модули молия ва баҳисобгирӣ', 'Назорати автоматии анбор', 'Диаграммаҳои таҳлилии dynamic', 'Ҳамгироии СМС-Хабардорӣ']
    },
    coming_soon_ai: {
      title: 'Лоиҳаи Навтарин: Интеллекти Сунъӣ (AI) & Telegram Bot',
      category: 'Ба зудӣ (Coming Soon)',
      description: 'Системаи автоматии зеҳнӣ дар дохили Telegram, ки тиҷорати шуморо ба воситаи AI агентҳо пурра автоматӣ мекунад.',
      longDescription: 'Ин як лоиҳаи навбатии бузург ва инноватсионист, ки ҳоло дар марҳилаи фаъоли таҳия ва рамзгузорӣ қарор дорад. Система қодир аст паёмҳо, фармоишҳо ва зангҳоро бо истифодаи мукаммали OpenAI & Google Gemini идора кунад.',
      features: ['Гӯш кардани овозҳо ва ҷавобҳо бо AI', 'Пайвастшавӣ CRM-ҳои Тоҷикистон', 'Панели таҳлилии вақти воқеӣ', 'Агентҳои фурӯши худкор']
    }
  },
  ENG: {
    tamosho_cinema: {
      title: 'Tamosho Cinema - Telegram Mini App',
      category: 'Telegram Mini App',
      description: 'An elite cinemas and multimedia streaming layout built directly inside Telegram messenger with supersonic execution speed.',
      longDescription: 'A premium-grade Awwwards styled user experience which hosts high-fidelity sound and playback. Complete native platform fitted with online checkout and bookmark lists.',
      features: ['Embedded robust multimedia player', 'Auto checkout for domestic banking cards', 'Private saved catalog lists', 'Smart AI recommendations engine']
    },
    quran_platform: {
      title: '"Teacher of Quran" Educational Platform',
      category: 'Website / Digital Platform',
      description: 'Beautiful interactive learning environment hosting translations, vocal audios, phonetics, and commentaries with highly comforting visuals.',
      longDescription: 'A comprehensive spiritual and cultural digital system containing full audio suites and a virtual library. Built with advanced web audio APIs and a relaxing dusk theme.',
      features: ['Gapless persistent audio player', 'Interactive verse loop selectors for memorization', 'Highly accurate translations', 'Deep breath dark reading modes']
    },
    musofir_khona: {
      title: 'Musofir Khona - Real Estate Premium Portal',
      category: 'Property Portal / Web App',
      description: 'An exquisite aggregator platform tailored to browse, lease, and trade premium homes and apartments within major Tajikistan cities.',
      longDescription: 'Features highly detailed search fields, interactive street mapping bindings, and instant Telegram dispatcher notification relays for house listing owners.',
      features: ['Professional faceted modular filters', 'Interactive map tracking modules', 'Direct client-owner Slack & TG notification relay', 'Supremely optimized mobile responsiveness']
    },
    prestige_construction: {
      title: 'Prestige Construction Corporate Website',
      category: 'Corporate Web Presence',
      description: 'Showcasing futuristic architectural projects inside Tajikistan with gorgeous 3D rendering canvases and floor plans.',
      longDescription: 'Cinematic corporate solution designed to highlight architectural landmarks in Dushanbe. Features full interactive blueprint reviews and floor selection filters.',
      features: ['Immersive web canvas visuals', 'Fully interactive floor selection blueprints', 'High ranking SEO structural layout', 'Direct calendar reservation system']
    },
    tajik_pos: {
      title: 'Tajik POS / Sophisticated Retail Engine',
      category: 'Point of Sale (POS) System',
      description: 'Robust modern terminal tailored for retail centers and diners, supporting fiscal ledger, barcodes, and direct checkout printing.',
      longDescription: 'Desktop-grade responsive system architected to absolute fluid execution rates. Features smart loyalty profiles, real-time margins computation, and multi-vault database.',
      features: ['Complete offline operational safety fallback', 'Direct bar-code hardware scanner bindings', 'Rich interactive telemetry control maps', 'Highly configurable layout checking templates']
    },
    shomi_dushanbe: {
      title: 'Shomi Dushanbe - Fine Dining Platform',
      category: 'E-commerce Dining System',
      description: 'Premium dining portals featuring high fidelity visual catalogs, smart table placement reservations, and checkout delivery.',
      longDescription: 'A customized interactive system serving renowned restaurant networks. Fully supports customizable dishes, table locations tracking, and real-time ledger.',
      features: ['Blazing fast intuitive menu arrays', 'Interactive graphical table booking systems', 'Delivery dispatch integration maps', 'Automated calculations & receipt slips']
    },
    premium_erp: {
      title: 'Premium Business ERP Core Module',
      category: 'Enterprise Integration System',
      description: 'Full-featured enterprise resource planner constructed to coordinate, log, and synchronize assets, human resource files, and logistics.',
      longDescription: 'Integrated cloud platform with live charts, custom data exports, collaborative team messaging boards and automated reporting grids.',
      features: ['Detailed accounting & bookkeeping structures', 'Automated supply ledger logs tracking', 'Live charts rendering analytics', 'Direct SMS-gateway event dispatch triggers']
    },
    coming_soon_ai: {
      title: 'Under Active Launch: Cognitive AI Chatbot Core',
      category: 'Under Development (Coming Soon)',
      description: 'Intelligent cognitive customer engagement agents bound inside Telegram to automate client support, sales, and lead generation.',
      longDescription: 'A large scalable machine intelligence rollout leveraging Google Gemini models to automatically reply to voice logs, qualify leads, and synchronize files with CRM.',
      features: ['Advanced conversational voice processing in Tajik', 'Seamless local CRM pipeline synchronization', 'High fidelity interactive analytical telemetry', 'Self-optimizing autonomous checkout guides']
    }
  },
  RUS: {
    tamosho_cinema: {
      title: 'Tamosho Cinema - Telegram Mini App',
      category: 'Telegram Mini App',
      description: 'Передовая мультимедийная стриминговая платформа сериалов и фильмов прямо внутри Telegram чата.',
      longDescription: 'Высококлассное приложение со стильным Awwwards UI, воспроизводящее контент без буферизации. Содержит систему подписок, профили, систему рекомендаций.',
      features: ['Встроенный кастомный плеер', 'Подключение онлайн эквайринга в Таджикистане', 'Списки избранного', 'Рекомендательный ИИ-алгоритм']
    },
    quran_platform: {
      title: 'Образовательный портал "Муаллими Куран"',
      category: 'Вебсайт / Платформа',
      description: 'Духовный просветительский портал с тафсиром, аудиозаписями чтецов и легкой транскрипцией аятов.',
      longDescription: 'Сложный интерактивный сервис, включающий глубокие аудио-настройки, режим зацикливания аудио для легкого запоминания и аудиозаписи лучших мировых лекторов.',
      features: ['Стабильный фоновый аудиоплеер', 'Настройка повторения аятов для заучивания', 'Русские и таджикские переводы', 'Удобный ночной режим для чтения']
    },
    musofir_khona: {
      title: 'Мусофир Хона - Элитный Портал Недвижимости',
      category: 'Портал Недвижимости / Веб-сайт',
      description: 'Масштабный портал объявлений по аренде, покупке и продаже недвижимости во всех регионах Таджикистана.',
      longDescription: 'Современный маркетплейс, объединяющий арендаторов и владельцев. Содержит систему автопубликации объявлений, интерактивные карты и оповещения арендодателей.',
      features: ['Детальный фильтр поиска квартир', 'Интерактивная карта объектов', 'Мгновенные Telegram оповещения', 'Высокое быстродействие на смартфонах']
    },
    prestige_construction: {
      title: 'Сайт Строительного Холдинга "Prestige"',
      category: 'Сайт / Корпоративный',
      description: 'Интерактивная презентация девелоперских объектов премиум-класса с 3D рендерами и планировками.',
      longDescription: 'Сайт с кинематографическими переводами и анимациями для застройщика Душанбе. Возможность изучать архитектуру этажей и бронировать квартиры онлайн.',
      features: ['Эффектные интерактивные анимации', 'Визуальная планировка этажей/квартир', 'Мгновенный рендеринг страниц', 'Формы быстрой записи на просмотр']
    },
    tajik_pos: {
      title: 'Тоҷик POS / Торгово-кассовая Система',
      category: 'POS-система савдо',
      description: 'Интеллектуальный кассовый модуль для розничных супермаркетов, баров и аптек с печатью чеков.',
      longDescription: 'Кросс-платформенная ERP-панель продавца, оптимизирующая учет остатков, штрих-коды, начисление бонусов и финансовые сверки.',
      features: ['100% стабильная работа без интернета', 'Прямая синхронизация со сканером', 'Админ-панель детальной аналитики', 'Настраиваемые шаблоны фискальных чеков']
    },
    shomi_dushanbe: {
      title: 'Шоми Душанбе - Портал Ресторанной Сети',
      category: 'Вебсайт / Платформа',
      description: 'Эстетичный сайт с интерактивным иллюстрированным меню, бронированием столиков и доставкой блюд.',
      longDescription: 'Удобная платформа для заказа еды, просмотра залов и онлайн предоплаты броней. Интеграция с курьерскими картами в реальном времени.',
      features: ['Яркое наглядное меню в реальном времени', 'Визуальная бронь столиков на залах', 'Логистика курьерской доставки', 'Автоматический финансовый калькулятор']
    },
    premium_erp: {
      title: 'Премиум ERP модуль управления бизнесом',
      category: 'ERP-система автоматизации',
      description: 'Многозадачная корпоративная система для координации бухгалтерии, логистики, складов и задач.',
      longDescription: 'Облачная база процессов предприятия, объединяющая табели, заявки, инвентаризацию, финансовый аудит и автоматические сверки.',
      features: ['Детальный учет бухгалтерии и кассы', 'Управление складской логистикой', 'Таблицы реал-тайм показателей', 'Встроенный триггер СМС-оповещений']
    },
    coming_soon_ai: {
      title: 'В разработке: Когнитивный Чат-бот на базе ИИ',
      category: 'В разработке (Скоро запуск)',
      description: 'Мультиязычная автоматизированная служба поддержки и телемаркетинга прямо в Telegram чате на базе моделей ИИ.',
      longDescription: 'Масштабный проект, задействующий алгоритмы Google Gemini для свободного понимания голосовых заметок, классификации сделок и интеграции с CRM.',
      features: ['Голосовое распознавание речи со звуков', 'Синхронизация с локальными CRM системами', 'Реалтайм панели конверсии лидов', 'Автоматические скрипты допродаж']
    }
  }
};

export const defaultProcessTranslationsByStep: Record<Language, Record<string, { title: string, description: string, phaseResult: string }>> = {
  TJK: {
    '01': {
      title: 'Банақшагирӣ ва Равшансозии Ҳадафҳо',
      description: 'Таҳлили тиҷорати шумо, муҳокимаи ҷузъиёт, сохтани супориши техникӣ ва кашидани тарҳи аввалия барои ба натиҷаи беҳтарин расидан.',
      phaseResult: 'Супориши техникӣ (ТЗ) ва сохтори умумӣ'
    },
    '02': {
      title: 'UI/UX Дизайн (Эстетика ва Осонии Барнома)',
      description: 'Омодасозии тарҳи беназир ва премиум дар Figma. Мо ба ҳар як пиксел, ранг, аниматсия ва соддагии интерфейси барнома диққат медиҳем.',
      phaseResult: 'Макетҳои интерактивии тайёр дар Figma'
    },
    '03': {
      title: 'Раванди Кодрезӣ (Таҳия ва Барномасозӣ)',
      description: 'Навиштани коди тоза, бо суръати аҷиб ва бехатарии комил. Истифодаи технологияҳои пешрафта ба монанди React, TS ва Telegram API.',
      phaseResult: 'Намунаи аввалини кори сайт ё барнома'
    },
    '04': {
      title: 'Санҷиши Пурра ва Назорати Сифат',
      description: 'Пешгирӣ ва ислоҳи пурраи хатогиҳо, санҷиши суръати вокуниш дар ҳама намуди дастгоҳҳо ва бехатарии пурраи базаи додаҳо.',
      phaseResult: 'Ҳисоботи санҷиши 100% сифати код'
    },
    '05': {
      title: 'Ба кор андохтан ва Дастгирии Минбаъда',
      description: 'Интиқоли сомона ба сервер (Cloud Run / Vercel), сохтани пайванд бо домени шумо ва омодасозии видео-дастур барои идораи осони сайт.',
      phaseResult: 'Лоиҳаи фаъол ва дастгирии ройгони 3-моҳа'
    }
  },
  ENG: {
    '01': {
      title: 'Planning & Strategic Structuring',
      description: 'Rigorous analysis of your business processes, target groups, defining specifications, design criteria and generating blueprints.',
      phaseResult: 'Technical Specifications (TS) and general architectural map'
    },
    '02': {
      title: 'UI/UX Design (Premium Aesthetic & Feel)',
      description: 'Figma layout creation. We tune every pixel, palette range, responsive curve and responsive micro-interaction to represent world-class standards.',
      phaseResult: 'Approved interactive Figma design prototypes'
    },
    '03': {
      title: 'Advanced Engineering (Clean Code Development)',
      description: 'Translating designs into optimized highly performant script sheets utilizing React, TypeScript, and state-of-the-art frameworks.',
      phaseResult: 'Interactive visual workspace prototype builds'
    },
    '04': {
      title: 'Exhaustive QA & Stress Verification',
      description: 'Full-spectrum debugging across varying device sizes, screen matrices, loading capacities, and verifying data safety protocols.',
      phaseResult: 'Complete performance and stress scorecard (100% passes)'
    },
    '05': {
      title: 'Cloud Launch & Deployment Operations',
      description: 'Binding assets to domain targets on scalable host systems (Cloud Run / Vercel), configuring DB networks, and deploying operational manuals.',
      phaseResult: 'Live running platform with three months of continuous support'
    }
  },
  RUS: {
    '01': {
      title: 'Планирование и Сбор Требований',
      description: 'Тщательный анализ бизнес-процессов вашей ниши, формирование технического задания и прототипирование будущей архитектуры.',
      phaseResult: 'Согласованное ТЗ и общая структура базы данных'
    },
    '02': {
      title: 'UI/UX Проектирование (Премиум Дизайн)',
      description: 'Проектирование пользовательского интерфейса в Figma. Внимание к каждой детали, адаптивной сетке, гайдлайнам и брендингу.',
      phaseResult: 'Полный кликабельный дизайн-прототип в Figma'
    },
    '03': {
      title: 'Программирование (Написание Кода)',
      description: 'Качественная верстка и функциональное программирование. Оптимальный чистый код без сторонних тяжелых библиотек.',
      phaseResult: 'Реализованная рабочая альфа-версия сервиса'
    },
    '04': {
      title: 'Комплексное Тестирование и QA',
      description: 'Полный контроль надежности и быстродействия кода, симуляция стресс-нагрузок, верификация защиты персональных данных.',
      phaseResult: 'Протестированная и отлаженная сборка проекта'
    },
    '05': {
      title: 'Деплой на сервер и Запуск проекта',
      description: 'Запуск ПО на быстрых серверах (Cloud Run / Vercel), подключение вашего домена и выдача видео-руководств по наполнению сайта.',
      phaseResult: 'Запущенный сайт и 3 месяца экспертного автосопровождения'
    }
  }
};

export const defaultTestimonialTranslations: Record<Language, Record<string, { name: string, position: string, company: string, feedback: string }>> = {
  TJK: {
    t1: {
      name: 'Алишер Раҳимов',
      position: 'Менеҷери Асосӣ',
      company: 'Иттиҳодияи Сохтмон КД',
      feedback: 'Раҳматулло ба мо сомонаи премиуми корпоративӣ сохт. Эффектҳои олии 3D ва суръати вокуниши сайт мизоҷони моро ба ваҷд овард. Суръати кори ӯ фавқулодда аст! Беҳтарин интихоб барои ширкатҳои калон.'
    },
    t2: {
      name: 'Мадина Комилова',
      position: 'Асосгузор ва Роҳбар',
      company: 'SilkRoad Fashion',
      feedback: 'Telegram Mini App-е, ки Раҳматулло барои мағозаи мо сохт, фурӯши моро 2 баробар афзоиш дод! Мизоҷон ҳоло бевосита дар дохили Telegram фармоиш ва пардохт мекунанд. Хеле кори касбӣ, ташаккури зиёд!'
    },
    t3: {
      name: 'Ҷамшед Ёров',
      position: 'Директори Техникӣ',
      company: 'ТоҷикМаркет Гурӯҳ',
      feedback: 'Автоматикунонии системаи ERP барои анбори мо яке аз мураккабтарин корҳо буд. Раҳматулло системаеро таҳия кард, ки тамоми кормандон бе душворӣ истифода мебаранд ва ҳисоботҳо дақиқ сохта мешаванд.'
    },
    t4: {
      name: 'Парвиз Саидов',
      position: 'Роҳбар ва Директор',
      company: 'Тамос Кино Гурӯҳ',
      feedback: 'Платформаи видеоии Telegram Mini App комилан бенуқсон кор мекунад. Зиёда аз 10,000 корбар ҳар рӯз филмҳоро тамошо мекунанд ва система ҳеҷ гоҳ таваққуф накардааст. Ба кордонии ӯ баҳои 10/10 медиҳам.'
    }
  },
  ENG: {
    t1: {
      name: 'Alisher Rahimov',
      position: 'General Manager',
      company: 'Construction Association KD',
      feedback: 'Rahmatullo synthesized a spectacular custom corporate website for us. The interactive 3D structures and performance figures absolutely astonished our corporate clients. Truly outstanding delivery speed!'
    },
    t2: {
      name: 'Madina Komilova',
      position: 'Founder & CEO',
      company: 'SilkRoad Fashion',
      feedback: 'The Telegram Mini App created by Rahmatullo for our showroom raised online order figures by over 200%! Clients complete everything in-chat securely. Elite level engineering, highly appreciated!'
    },
    t3: {
      name: 'Jamshed Yorov',
      position: 'Chief Technology Officer',
      company: 'TajikMarket Group',
      feedback: 'Configuring warehouse ERP operations was historically a complicated target for our workflow. He constructed a remarkably intuitive custom environment that operates fluently with simple manuals.'
    },
    t4: {
      name: 'Parviz Saidov',
      position: 'Director of Operations',
      company: 'Tamos Cinema Group',
      feedback: 'Our multimedia TG Mini App functions precisely without an issue. Over 10,000 active users browse and play items daily with zero server pauses. Uncompromising 10/10 developer rating.'
    }
  },
  RUS: {
    t1: {
      name: 'Алишер Рахимов',
      position: 'Генеральный Директор',
      company: 'Иттиходияи Сохтмон КД',
      feedback: 'Рахматулло создал роскошный корпоративный сайт для нашего строительного холдинга. Великолепные 3D эффекты и молниеносный шеринг впечатлили всех партнеров. Работаем теперь только с ним!'
    },
    t2: {
      name: 'Мадина Комилова',
      position: 'Основательница и Директор',
      company: 'SilkRoad Fashion Area',
      feedback: 'Telegram Mini App, созданный для нашего модного бренда, увеличил продажи в два раза! Клиенты буквально за секунду заказывают и платят в самом мессенджере. Изумительная работа, спасибо!'
    },
    t3: {
      name: 'Джамшед Ёров',
      position: 'Технический Директор',
      company: 'ТоҷикМаркет Групп',
      feedback: 'Оцифровка логистического учета на наших складах была вызовом. Интегрированная им ERP-система оказалась невероятно простой и надежной, персонал освоил платформу за считанные дни.'
    },
    t4: {
      name: 'Парвиз Саидов',
      position: 'Родбар / Исполнительный директор',
      company: 'Тамос Кино Холдинг',
      feedback: 'Наш мультимедийный Mini App стриминг-сервис в Telegram работает абсолютно безупречно. Свыше заходов 10 000 зрителей ежедневно без торможений СУБД. Рекомендуем данного специалиста.'
    }
  }
};
