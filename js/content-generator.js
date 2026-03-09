const fs = require('fs');
const path = require('path');

const languages = ['en', 'et', 'ru'];

// Словарь переводов для всех языков
const translations = {
  
// Добавьте в объект translations:

freeConsultation: {
  en: 'Free consultation',
  et: 'Tasuta konsultatsioon',
  ru: 'Бесплатная консультация'
},
guides: {
  en: 'Guides',
  et: 'Juhendid',
  ru: 'Руководства'
},
lastUpdated: {
  en: 'Last updated:',
  et: 'Viimati uuendatud:',
  ru: 'Обновлено:'
},
minRead: {
  en: 'min read',
  et: 'min lugemist',
  ru: 'мин чтения'
},
contents: {
  en: 'Contents',
  et: 'Sisukord',
  ru: 'Содержание'
},
introduction: {
  en: 'Introduction',
  et: 'Sissejuhatus',
  ru: 'Введение'
},
keyPoints: {
  en: 'Key Points',
  et: 'Põhipunktid',
  ru: 'Ключевые моменты'
},
detailedOverview: {
  en: 'Detailed Overview',
  et: 'Üksikasjalik ülevaade',
  ru: 'Подробный обзор'
},
legalFramework: {
  en: 'Legal Framework',
  et: 'Õiguslik raamistik',
  ru: 'Правовая основа'
},
practicalSteps: {
  en: 'Practical Steps',
  et: 'Praktilised sammud',
  ru: 'Практические шаги'
},
faq: {
  en: 'FAQ',
  et: 'KKK',
  ru: 'Часто задаваемые вопросы'
},
relatedGuides: {
  en: 'Related Guides',
  et: 'Seotud juhendid',
  ru: 'Похожие руководства'
},
needHelpWith: {
  en: 'Need help with',
  et: 'Vajad abi',
  ru: 'Нужна помощь с'
},
ctaText: {
  en: 'Let Fonsalus OÜ handle the complexity while you focus on your business.',
  et: 'Las Fonsalus OÜ tegeleb keerukusega, sina keskendu oma ettevõttele.',
  ru: 'Позвольте Fonsalus OÜ заняться сложностями, пока вы фокусируетесь на бизнесе.'
},
getFreeConsultation: {
  en: 'Get free consultation',
  et: 'Küsi tasuta konsultatsiooni',
  ru: 'Получить бесплатную консультацию'
},
guideIntroText: {
  en: 'This comprehensive guide will help you understand all the important aspects and requirements for Estonian businesses.',
  et: 'See põhjalik juhend aitab teil mõista kõiki olulisi aspekte ja nõudeid Eesti ettevõtetele.',
  ru: 'Это подробное руководство поможет вам понять все важные аспекты и требования для эстонского бизнеса.'
},
keyPoint1: {
  en: 'Important regulations and compliance requirements for',
  et: 'Olulised regulatsioonid ja nõuetele vastavus',
  ru: 'Важные нормативные требования и соответствие для'
},
keyPoint2: {
  en: 'Step-by-step implementation guide',
  et: 'Samm-sammuline juhend',
  ru: 'Пошаговое руководство по внедрению'
},
keyPoint3: {
  en: 'Common pitfalls and how to avoid them',
  et: 'Levinud lõksud ja kuidas neid vältida',
  ru: 'Распространенные ошибки и как их избежать'
},
keyPoint4: {
  en: 'Expert recommendations from Fonsalus team',
  et: 'Fonsaluse meeskonna ekspertsoovitused',
  ru: 'Рекомендации экспертов Fonsalus'
},
overviewText: {
  en: 'When dealing with this topic in Estonia, there are several crucial factors to consider. The Estonian business environment offers unique advantages, but also requires careful attention to local regulations and reporting standards.',
  et: 'Eesti ettevõtluskeskkond pakub ainulaadseid eeliseid, kuid nõuab ka hoolikat tähelepanu kohalikele regulatsioonidele ja aruandlusstandarditele.',
  ru: 'При рассмотрении этой темы в Эстонии есть несколько важных факторов. Эстонская бизнес-среда предлагает уникальные преимущества, но также требует внимательного отношения к местным нормативным актам и стандартам отчетности.'
},
needPersonalAssistance: {
  en: 'Need personal assistance?',
  et: 'Vajad personaalset abi?',
  ru: 'Нужна персональная помощь?'
},
specialistText: {
  en: 'Our team at Fonsalus OÜ specializes in exactly these matters.',
  et: 'Meie meeskond Fonsalus OÜ-s on spetsialiseerunud just nendele küsimustele.',
  ru: 'Наша команда в Fonsalus OÜ специализируется именно на таких вопросах.'
},
forFreeConsultation: {
  en: 'for a free consultation',
  et: 'tasuta konsultatsiooniks',
  ru: 'для бесплатной консультации'
},
legalText: {
  en: 'The Estonian legislation provides a clear framework for',
  et: 'Eesti seadusandlus pakub selget raamistikku',
  ru: 'Эстонское законодательство предоставляет четкую основу для'
},
legalTextEnd: {
  en: 'Key regulations include the Accounting Act, Commercial Code, and relevant tax laws that directly impact how businesses should operate.',
  et: 'Peamised regulatsioonid hõlmavad raamatupidamisseadust, äriseadustikku ja asjakohaseid maksuseadusi, mis mõjutavad otseselt ettevõtete toimimist.',
  ru: 'Ключевые нормативные акты включают Закон о бухгалтерском учете, Коммерческий кодекс и соответствующие налоговые законы, которые напрямую влияют на то, как должны работать предприятия.'
},
step1: {
  en: 'Assess your specific situation and requirements',
  et: 'Hinnake oma konkreetset olukorda ja vajadusi',
  ru: 'Оцените свою конкретную ситуацию и требования'
},
step2: {
  en: 'Prepare necessary documentation',
  et: 'Valmistage ette vajalik dokumentatsioon',
  ru: 'Подготовьте необходимую документацию'
},
step3: {
  en: 'Register with relevant authorities if needed',
  et: 'Vajadusel registreeruge vastavates asutustes',
  ru: 'Зарегистрируйтесь в соответствующих органах при необходимости'
},
step4: {
  en: 'Implement proper accounting procedures',
  et: 'Rakendage korralikud raamatupidamisprotseduurid',
  ru: 'Внедрите надлежащие процедуры бухгалтерского учета'
},
step5: {
  en: 'Regular compliance checks and reporting',
  et: 'Regulaarne vastavuskontroll ja aruandlus',
  ru: 'Регулярные проверки соответствия и отчетность'
},
faqQuestion1: {
  en: 'What are the deadlines for',
  et: 'Millised on tähtajad',
  ru: 'Каковы сроки для'
},
faqAnswer1: {
  en: 'Deadlines vary depending on your specific situation. Generally, monthly reports are due by the 10th of the following month, while annual reports must be submitted within 6 months after the end of the financial year.',
  et: 'Tähtajad sõltuvad teie konkreetsest olukorrast. Üldjuhul tuleb igakuised aruanded esitada järgmise kuu 10. kuupäevaks, aastaaruanded 6 kuu jooksul pärast majandusaasta lõppu.',
  ru: 'Сроки зависят от вашей конкретной ситуации. Обычно ежемесячные отчеты должны быть поданы до 10 числа следующего месяца, а годовые отчеты - в течение 6 месяцев после окончания финансового года.'
},
faqQuestion2: {
  en: 'Do I need a local accountant?',
  et: 'Kas mul on vaja kohalikku raamatupidajat?',
  ru: 'Нужен ли мне местный бухгалтер?'
},
faqAnswer2: {
  en: 'While not strictly required by law, having a local expert like Fonsalus OÜ ensures compliance and helps avoid costly mistakes. We recommend consulting with a professional familiar with Estonian regulations.',
  et: 'Kuigi seadus seda otseselt ei nõua, tagab kohaliku eksperdi (nt Fonsalus OÜ) kasutamine nõuete täitmise ja aitab vältida kulukaid vigu. Soovitame konsulteerida Eesti eeskirju tundva spetsialistiga.',
  ru: 'Хотя закон строго не требует этого, наличие местного эксперта, такого как Fonsalus OÜ, обеспечивает соблюдение требований и помогает избежать дорогостоящих ошибок. Мы рекомендуем консультироваться со специалистом, знакомым с эстонскими нормативными актами.'
},
registryCode: {
  en: 'Registry code',
  et: 'Registrikood',
  ru: 'Регистрационный код'
},
allRightsReserved: {
  en: 'All rights reserved',
  et: 'Kõik õigused kaitstud',
  ru: 'Все права защищены'
},

// Для FAQ
allQuestions: {
  en: 'All Questions',
  et: 'Kõik küsimused',
  ru: 'Все вопросы'
},
searchInFaq: {
  en: 'Search in FAQ...',
  et: 'Otsi KKK-st...',
  ru: 'Поиск по FAQ...'
},
noAnswerFound: {
  en: 'Didn\'t find your answer?',
  et: 'Ei leidnud oma vastust?',
  ru: 'Не нашли свой ответ?'
},
contactUsForPersonalHelp: {
  en: 'Contact us for personalized assistance with your specific situation.',
  et: 'Võtke meiega ühendust personaalse abi saamiseks oma konkreetses olukorras.',
  ru: 'Свяжитесь с нами для получения персональной помощи по вашей конкретной ситуации.'
},
askYourQuestion: {
  en: 'Ask your question',
  et: 'Küsi oma küsimus',
  ru: 'Задать вопрос'
},
popularTopics: {
  en: 'Popular Topics',
  et: 'Populaarsed teemad',
  ru: 'Популярные темы'
},
dividendTax: {
  en: 'Dividend Tax',
  et: 'Dividendimaks',
  ru: 'Налог на дивиденды'
},
companyFormation: {
  en: 'Company Formation',
  et: 'Ettevõtte asutamine',
  ru: 'Регистрация компании'
},
eResidency: {
  en: 'e-Residency',
  et: 'e-Residentsus',
  ru: 'e-Резидентство'
},
annualReport: {
  en: 'Annual Report',
  et: 'Majandusaasta aruanne',
  ru: 'Годовой отчет'
},
additionalResources: {
  en: 'Additional Resources',
  et: 'Lisamaterjalid',
  ru: 'Дополнительные ресурсы'
},
guidesDescription: {
  en: 'Step-by-step guides for common tasks',
  et: 'Samm-sammulised juhendid levinud ülesannete jaoks',
  ru: 'Пошаговые руководства для типовых задач'
},
calculatorsDescription: {
  en: 'Free financial calculators',
  et: 'Tasuta finantskalkulaatorid',
  ru: 'Бесплатные финансовые калькуляторы'
},
blogDescription: {
  en: 'Latest articles and insights',
  et: 'Viimased artiklid ja teadmised',
  ru: 'Последние статьи и аналитика'
},
relatedQuestions: {
  en: 'Related Questions',
  et: 'Seotud küsimused',
  ru: 'Похожие вопросы'
},
stillHaveQuestions: {
  en: 'Still have questions?',
  et: 'Kas teil on veel küsimusi?',
  ru: 'Остались вопросы?'
},
noRelatedQuestions: {
  en: 'No related questions found.',
  et: 'Seotud küsimusi ei leitud.',
  ru: 'Похожие вопросы не найдены.'
},
faqIntro: {
  en: 'Find answers to the most common questions about Estonian taxes, accounting, payroll, and company management.',
  et: 'Leia vastused kõige levinumatele küsimustele Eesti maksude, raamatupidamise, palgaarvestuse ja ettevõtte juhtimise kohta.',
  ru: 'Найдите ответы на самые распространенные вопросы об эстонских налогах, бухгалтерии, зарплате и управлении компанией.'
},
// Для навигации
services: {
  en: 'Services',
  et: 'Teenused',
  ru: 'Услуги'
},
tools: {
  en: 'Tools',
  et: 'Tööriistad',
  ru: 'Инструменты'
},
insights: {
  en: 'Insights',
  et: 'Artiklid',
  ru: 'Блог'
},
contact: {
  en: 'Contact',
  et: 'Kontakt',
  ru: 'Контакты'
},

// Для блога
blog: {
  en: 'Blog',
  et: 'Blogi',
  ru: 'Блог'
},
categories: {
  en: 'Categories',
  et: 'Kategooriad',
  ru: 'Категории'
},
recentPosts: {
  en: 'Recent Posts',
  et: 'Viimased postitused',
  ru: 'Последние статьи'
},
loading: {
  en: 'Loading...',
  et: 'Laen...',
  ru: 'Загрузка...'
},

// Названия категорий
categoryAccounting: {
  en: 'Accounting',
  et: 'Raamatupidamine',
  ru: 'Бухгалтерия'
},
categoryAccountingDesc: {
  en: 'Latest accounting news and tips',
  et: 'Viimased raamatupidamisuudised ja näpunäited',
  ru: 'Новости бухгалтерии и полезные советы'
},
categoryTax: {
  en: 'Tax',
  et: 'Maksud',
  ru: 'Налоги'
},
categoryTaxDesc: {
  en: 'Tax updates and guides',
  et: 'Maksuuudised ja juhendid',
  ru: 'Новости налогов и руководства'
},
categoryPayroll: {
  en: 'Payroll',
  et: 'Palk',
  ru: 'Зарплата'
},
categoryPayrollDesc: {
  en: 'Salary and payroll information',
  et: 'Palga ja palgaarvestuse teave',
  ru: 'Информация о зарплате и расчетах'
},
categoryAml: {
  en: 'AML',
  et: 'AML',
  ru: 'AML'
},
categoryAmlDesc: {
  en: 'Anti-money laundering compliance',
  et: 'Rahapesu tõkestamise nõuded',
  ru: 'Требования по борьбе с отмыванием денег'
},
viewAll: {
  en: 'View all',
  et: 'Vaata kõiki',
  ru: 'Все статьи'
},

// Для налогового баннера
currentTaxRates: {
  en: 'Current tax rates 2026',
  et: 'Kehtivad maksumäärad 2026',
  ru: 'Актуальные налоговые ставки 2026'
},
vat: {
  en: 'VAT',
  et: 'KM',
  ru: 'НДС'
},
incomeTax: {
  en: 'Income tax',
  et: 'Tulumaks',
  ru: 'Подоходный налог'
},

// Для подписки
newsletterTitle: {
  en: 'Subscribe to our newsletter',
  et: 'Telli uudiskiri',
  ru: 'Подпишитесь на рассылку'
},
newsletterDesc: {
  en: 'Get the latest articles and tax updates directly to your inbox',
  et: 'Saa uusimad artiklid ja maksu-uudised otse oma postkasti',
  ru: 'Получайте новые статьи и обновления налогов на email'
},
emailPlaceholder: {
  en: 'Your email',
  et: 'Sinu email',
  ru: 'Ваш email'
},
subscribe: {
  en: 'Subscribe',
  et: 'Telli',
  ru: 'Подписаться'
},

// Для футера
accounting: {
  en: 'Accounting',
  et: 'Raamatupidamine',
  ru: 'Бухгалтерия'
},
payroll: {
  en: 'Payroll',
  et: 'Palk',
  ru: 'Зарплата'
},
consulting: {
  en: 'Consulting',
  et: 'Konsultatsioon',
  ru: 'Консультации'
},
calculators: {
  en: 'Calculators',
  et: 'Kalkulaatorid',
  ru: 'Калькуляторы'
},
salaryCalc: {
  en: 'Salary Calculator',
  et: 'Palgakalkulaator',
  ru: 'Калькулятор зарплаты'
},
dividendCalc: {
  en: 'Dividend Tax',
  et: 'Dividendimaks',
  ru: 'Налог на дивиденды'
},
vatCalc: {
  en: 'VAT Calculator',
  et: 'Käibemaksukalkulaator',
  ru: 'Калькулятор НДС'
},
resources: {
  en: 'Resources',
  et: 'Resursid',
  ru: 'Ресурсы'
},
guides: {
  en: 'Guides',
  et: 'Juhendid',
  ru: 'Руководства'
},
industries: {
  en: 'Industries',
  et: 'Tegevusalad',
  ru: 'Отрасли'
},
comparisons: {
  en: 'Comparisons',
  et: 'Võrdlused',
  ru: 'Сравнения'
},
faq: {
  en: 'FAQ',
  et: 'KKK',
  ru: 'Частые вопросы'
},
company: {
  en: 'Company',
  et: 'Ettevõttest',
  ru: 'Компания'
},
privacy: {
  en: 'Privacy',
  et: 'Privaatsus',
  ru: 'Конфиденциальность'
},
  
  // Для блога
  needPersonalizedAdvice: {
    en: 'Need personalized advice?',
    et: 'Vajad personaalset nõuannet?',
    ru: 'Нужен персональный совет?'
  },
  contactUs: {
    en: 'Contact us',
    et: 'Võta meiega ühendust',
    ru: 'Свяжитесь с нами'
  },
  readMore: {
    en: 'Read more',
    et: 'Loe edasi',
    ru: 'Читать далее'
  },
  category: {
    en: 'Category',
    et: 'Kategooria',
    ru: 'Категория'
  },
  allPosts: {
    en: 'All Posts',
    et: 'Kõik postitused',
    ru: 'Все статьи'
  },
  noPosts: {
    en: 'No posts yet.',
    et: 'Postitusi veel pole.',
    ru: 'Статей пока нет.'
  },
  
  // Для гайдов
  needPersonalAssistance: {
    en: 'Need personal assistance?',
    et: 'Vajad personaalset abi?',
    ru: 'Нужна персональная помощь?'
  },
  contactUsToday: {
    en: 'Contact us today',
    et: 'Võta täna ühendust',
    ru: 'Свяжитесь с нами сегодня'
  },
  
  // Для инструментов
  freeTools: {
    en: 'Free tools for Estonian businesses',
    et: 'Tasuta tööriistad Eesti ettevõtetele',
    ru: 'Бесплатные инструменты для эстонского бизнеса'
  },
  // Добавьте в объект translations:

toolsTitle: {
  en: 'Financial Tools for Estonian Businesses',
  et: 'Finantsvahendid Eesti ettevõtetele',
  ru: 'Финансовые инструменты для эстонского бизнеса'
},
toolsDescription: {
  en: 'Free calculators and templates to help you manage your finances',
  et: 'Tasuta kalkulaatorid ja mallid, mis aitavad teil oma rahaasju hallata',
  ru: 'Бесплатные калькуляторы и шаблоны для управления финансами'
},
taxTables: {
  en: 'Tax Tables',
  et: 'Maksutabelid',
  ru: 'Налоговые таблицы'
},
templates: {
  en: 'Templates',
  et: 'Mallid',
  ru: 'Шаблоны'
},
socialTax: {
  en: 'Social tax',
  et: 'Sotsiaalmaks',
  ru: 'Социальный налог'
},
unemploymentInsurance: {
  en: 'Unemployment insurance',
  et: 'Töötuskindlustus',
  ru: 'Страхование от безработицы'
},
ratesAsOf2026: {
  en: 'Rates as of 2026',
  et: 'Määrad alates 2026',
  ru: 'Ставки на 2026 год'
},
aboutOurTools: {
  en: 'About our tools',
  et: 'Meie tööriistadest',
  ru: 'О наших инструментах'
},
toolsInfoText: {
  en: 'All our calculators and templates are designed specifically for Estonian businesses and are updated according to the latest tax regulations and labor laws.',
  et: 'Kõik meie kalkulaatorid ja mallid on loodud spetsiaalselt Eesti ettevõtetele ja neid uuendatakse vastavalt uusimatele maksueeskirjadele ja tööseadustele.',
  ru: 'Все наши калькуляторы и шаблоны разработаны специально для эстонского бизнеса и обновляются в соответствии с последними налоговыми нормами и трудовым законодательством.'
},
freeToUse: {
  en: '100% Free to use',
  et: '100% Tasuta kasutada',
  ru: '100% Бесплатно'
},
updated2026: {
  en: 'Updated for 2026',
  et: 'Uuendatud 2026',
  ru: 'Обновлено на 2026'
},
basedOnLaw: {
  en: 'Based on current laws',
  et: 'Põhineb kehtivatel seadustel',
  ru: 'Основано на действующем законодательстве'
},
mobileFriendly: {
  en: 'Mobile friendly',
  et: 'Mobiilisõbralik',
  ru: 'Адаптировано для мобильных'
},
needHelpWithCalculations: {
  en: 'Need help with calculations?',
  et: 'Vajad abi arvutustega?',
  ru: 'Нужна помощь с расчетами?'
},
  
  // Для услуг
  getQuote: {
    en: 'Get a quote',
    et: 'Küsi hinnapakkumist',
    ru: 'Получить расчёт'
  },
  learnMore: {
    en: 'Learn more',
    et: 'Loe rohkem',
    ru: 'Узнать больше'
  },
  
  // Общие
  home: {
    en: 'Home',
    et: 'Avaleht',
    ru: 'Главная'
  },
  readGuide: {
    en: 'Read Guide →',
    et: 'Loe juhendit →',
    ru: 'Читать руководство →'
  },

  // Для калькуляторов
  relatedCalculators: {
  en: 'Related Calculators',
  et: 'Seotud kalkulaatorid',
  ru: 'Похожие калькуляторы'
},
howToUseCalculator: {
  en: 'How to use this calculator?',
  et: 'Kuidas seda kalkulaatorit kasutada?',
  ru: 'Как использовать этот калькулятор?'
},
calculatorUsageText: {
  en: 'Enter your numbers in the fields above and the results will update automatically. All calculations are based on current Estonian tax rates and regulations.',
  et: 'Sisestage oma numbrid ülaltoodud väljadele ja tulemused uuenevad automaatselt. Kõik arvutused põhinevad kehtivatel Eesti maksumääradel ja määrustel.',
  ru: 'Введите свои числа в поля выше, и результаты обновятся автоматически. Все расчеты основаны на текущих налоговых ставках и правилах Эстонии.'
},
noRelatedCalculators: {
  en: 'No related calculators found.',
  et: 'Seotud kalkulaatoreid ei leitud.',
  ru: 'Похожие калькуляторы не найдены.'
},
// Подвал
footerDescription: {
  en: 'Your trusted partner for Estonian business consulting, accounting, and tax optimization.',
  et: 'Teie usaldusväärne partner Eesti ärikonsultatsioonide, raamatupidamise ja maksuoptimeerimise alal.',
  ru: 'Ваш надежный партнер в сфере бизнес-консалтинга, бухгалтерии и налоговой оптимизации в Эстонии.'
},
aboutUs: {
  en: 'About Us',
  et: 'Meist',
  ru: 'О нас'
},
termsOfUse: {
  en: 'Terms of Use',
  et: 'Kasutustingimused',
  ru: 'Условия использования'
},
cookiePolicy: {
  en: 'Cookie Policy',
  et: 'Küpsiste poliitika',
  ru: 'Политика cookies'
},
backToTop: {
  en: 'Back to top',
  et: 'Tagasi üles',
  ru: 'Наверх'
},
profitCalc: {
  en: 'Profit Calculator',
  et: 'Kasumikalkulaator',
  ru: 'Калькулятор прибыли'
}
};

// Все типы контента
const contentTypes = [
  'guides', 
  'industries', 
  'comparisons', 
  'faq', 
  'calculators',
  'services',
  'blog',
  'tools'
];

// Шаблоны для разных типов контента
const templates = {
  guides: path.join(__dirname, '../templates/guide-template.html'),
  industries: path.join(__dirname, '../templates/industry-template.html'),
  comparisons: path.join(__dirname, '../templates/comparison-template.html'),
  faq: path.join(__dirname, '../templates/faq-template.html'),
  calculators: path.join(__dirname, '../templates/calculator-template.html'),
  services: path.join(__dirname, '../templates/service-template.html'),
  blog: path.join(__dirname, '../templates/blog-post-template.html'),
  blogIndex: path.join(__dirname, '../templates/blog-index-template.html'),
  tools: path.join(__dirname, '../templates/tool-template.html'),
  toolsIndex: path.join(__dirname, '../templates/tools-index-template.html')
};

// Функция для замены всех переводных плейсхолдеров
function replaceTranslations(html, lang) {
  let result = html;
  
  // Заменяем все плейсхолдеры вида {{t:key}} на соответствующий перевод
  Object.keys(translations).forEach(key => {
    const placeholder = `{{t:${key}}}`;
    const translation = translations[key][lang] || translations[key]['en'] || key;
    result = result.split(placeholder).join(translation);
  });
  
  return result;
}

function generateAll() {
  console.log('🚀 Начинаю генерацию сайта...\n');
  
  languages.forEach(lang => {
    console.log(`\n📁 Обрабатываю язык: ${lang.toUpperCase()}`);
    
    // Генерируем основные типы страниц
    generateContentPages(lang);
    
    // Генерируем страницы блога
    generateBlogPages(lang);
    
    // Генерируем страницы инструментов
    generateToolPages(lang);
    
    // Генерируем индексные страницы
    generateIndexPages(lang);
  });
  
  console.log('\n✨ Генерация завершена!');
}

function generateContentPages(lang) {
  const types = ['guides', 'industries', 'comparisons', 'faq', 'calculators', 'services'];
  
  types.forEach(type => {
    const jsonPath = path.join(__dirname, `../data/${lang}/${type}.json`);
    
    if (!fs.existsSync(jsonPath)) {
      console.log(`  ⚠️  Нет файла: data/${lang}/${type}.json - пропускаю`);
      return;
    }
    
    try {
      const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      
      if (!fs.existsSync(templates[type])) {
        console.log(`  ⚠️  Нет шаблона для ${type} - пропускаю`);
        return;
      }
      
      const template = fs.readFileSync(templates[type], 'utf8');
      
      const outputDir = path.join(__dirname, `../${lang}/${type}`);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      const dataKey = type === 'services' ? 'services' : type;
      
      if (!data[dataKey] || !Array.isArray(data[dataKey])) {
        console.log(`  ⚠️  Нет массива данных для ${type} в JSON`);
        return;
      }
      
      data[dataKey].forEach(item => {
        let html = template
          .replace(/{{title}}/g, item.title || '')
          .replace(/{{description}}/g, item.description || '')
          .replace(/{{slug}}/g, item.slug || '')
          .replace(/{{lang}}/g, lang)
          .replace(/{{icon}}/g, item.icon || '📄')
          .replace(/{{readTime}}/g, item.readTime || '5')
          .replace(/{{date}}/g, item.date || '2026-03-01')
          .replace(/{{category}}/g, item.category || '')
          .replace(/{{categoryName}}/g, item.categoryName || '')
          .replace(/{{content}}/g, item.content || '<p>Content coming soon...</p>');
        
        if (type === 'services') {
          html = html.replace(/{{price}}/g, item.price || 'Contact us');
          html = html.replace(/{{features}}/g, item.features ? item.features.join(', ') : '');
        }
        
        // Заменяем все переводы
        html = replaceTranslations(html, lang);
        
        const filePath = path.join(outputDir, `${item.slug}.html`);
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`  ✅ ${lang}/${type}/${item.slug}.html`);
      });
      
      console.log(`  📊 ${type}: ${data[dataKey].length} страниц`);
      
    } catch (err) {
      console.log(`  ❌ Ошибка в ${lang}/${type}.json:`, err.message);
    }
  });
}

function generateBlogPages(lang) {
  const jsonPath = path.join(__dirname, `../data/${lang}/blog-posts.json`);
  
  if (!fs.existsSync(jsonPath)) {
    console.log(`  ⚠️  Нет файла: data/${lang}/blog-posts.json - пропускаю блог`);
    return;
  }
  
  try {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    
    if (!fs.existsSync(templates.blog)) {
      console.log(`  ⚠️  Нет шаблона blog-post-template.html`);
      return;
    }
    
    const template = fs.readFileSync(templates.blog, 'utf8');
    
    // Создаем папки для категорий блога
    const categories = ['accounting', 'tax', 'payroll', 'aml'];
    
    categories.forEach(category => {
      const categoryDir = path.join(__dirname, `../${lang}/blog/${category}`);
      if (!fs.existsSync(categoryDir)) {
        fs.mkdirSync(categoryDir, { recursive: true });
      }
    });
    
    // Генерируем посты
    data.posts.forEach(post => {
      let html = template
        .replace(/{{title}}/g, post.title || '')
        .replace(/{{description}}/g, post.description || '')
        .replace(/{{slug}}/g, post.slug || '')
        .replace(/{{lang}}/g, lang)
        .replace(/{{date}}/g, post.date || '2026-03-01')
        .replace(/{{category}}/g, post.category || '')
        .replace(/{{categoryName}}/g, post.categoryName || '')
        .replace(/{{content}}/g, post.content || '<p>Full article coming soon...</p>');
      
      // Заменяем все переводы
      html = replaceTranslations(html, lang);
      
      const filePath = path.join(__dirname, `../${lang}/blog/${post.category}/${post.slug}.html`);
      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`  ✅ ${lang}/blog/${post.category}/${post.slug}.html`);
    });
    
    console.log(`  📊 Блог: ${data.posts.length} постов`);
    
    // Генерируем индексные страницы для каждой категории
    generateBlogCategoryIndexes(lang, data);
    
  } catch (err) {
    console.log(`  ❌ Ошибка в blog-posts.json:`, err.message);
  }
}

function generateBlogCategoryIndexes(lang, data) {
  const categories = {
    accounting: { en: 'Accounting', et: 'Raamatupidamine', ru: 'Бухгалтерия' },
    tax: { en: 'Tax', et: 'Maksud', ru: 'Налоги' },
    payroll: { en: 'Payroll', et: 'Palk', ru: 'Зарплата' },
    aml: { en: 'AML', et: 'AML', ru: 'AML' }
  };
  
  if (!fs.existsSync(templates.blogIndex)) {
    console.log(`  ⚠️  Нет шаблона blog-index-template.html`);
    return;
  }
  
  const template = fs.readFileSync(templates.blogIndex, 'utf8');
  
  // Для каждой категории
  Object.keys(categories).forEach(category => {
    const categoryPosts = data.posts.filter(post => post.category === category);
    const categoryName = categories[category][lang] || category;
    
    let html = template
      .replace(/{{title}}/g, `${categoryName} | Fonsalus Blog`)
      .replace(/{{description}}/g, `Read our latest articles about ${categoryName} in Estonia`)
      .replace(/{{lang}}/g, lang)
      .replace(/{{category}}/g, category)
      .replace(/{{categoryName}}/g, categoryName)
      .replace(/{{posts}}/g, generatePostsList(categoryPosts, lang, category));
    
    // Заменяем переводы
    html = replaceTranslations(html, lang);
    
    const indexPath = path.join(__dirname, `../${lang}/blog/${category}/index.html`);
    fs.writeFileSync(indexPath, html, 'utf8');
    console.log(`  📑 ${lang}/blog/${category}/index.html`);
  });
  
  // Главная страница блога
  let mainIndexHtml = template
    .replace(/{{title}}/g, 'Blog | Fonsalus')
    .replace(/{{description}}/g, 'Latest insights and articles about Estonian accounting and taxes')
    .replace(/{{lang}}/g, lang)
    .replace(/{{category}}/g, '')
    .replace(/{{categoryName}}/g, translations.allPosts[lang])
    .replace(/{{posts}}/g, generatePostsList(data.posts, lang, ''));
  
  // Заменяем переводы
  mainIndexHtml = replaceTranslations(mainIndexHtml, lang);
  
  const mainIndexPath = path.join(__dirname, `../${lang}/blog/index.html`);
  fs.writeFileSync(mainIndexPath, mainIndexHtml, 'utf8');
  console.log(`  📑 ${lang}/blog/index.html`);
}

function generatePostsList(posts, lang, category) {
  if (!posts.length) return `<p>${translations.noPosts[lang]}</p>`;
  
  return posts.map(post => `
    <article class="post-preview glass-card">
      <h3><a href="/${lang}/blog/${post.category}/${post.slug}.html">${post.title}</a></h3>
      <p>${post.description}</p>
      <div class="post-meta">
        <small>${post.date}</small>
        <a href="/${lang}/blog/${post.category}/${post.slug}.html" class="read-more">${translations.readMore[lang]} →</a>
      </div>
    </article>
  `).join('');
}

function generateToolPages(lang) {
  const jsonPath = path.join(__dirname, `../data/${lang}/tools.json`);
  
  if (!fs.existsSync(jsonPath)) {
    console.log(`  ⚠️  Нет файла: data/${lang}/tools.json - пропускаю инструменты`);
    return;
  }
  
  try {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    
    if (!fs.existsSync(templates.tools)) {
      console.log(`  ⚠️  Нет шаблона tool-template.html`);
      return;
    }
    
    const template = fs.readFileSync(templates.tools, 'utf8');
    
    const toolsDir = path.join(__dirname, `../${lang}/tools`);
    if (!fs.existsSync(toolsDir)) {
      fs.mkdirSync(toolsDir, { recursive: true });
    }
    
    data.tools.forEach(tool => {
      let html = template
        .replace(/{{title}}/g, tool.title || '')
        .replace(/{{description}}/g, tool.description || '')
        .replace(/{{slug}}/g, tool.slug || '')
        .replace(/{{lang}}/g, lang)
        .replace(/{{toolContent}}/g, tool.content || '<div class="tool-placeholder">Tool content goes here</div>')
        .replace(/{{toolScript}}/g, tool.script || '');
      
      // Заменяем переводы
      html = replaceTranslations(html, lang);
      
      const filePath = path.join(toolsDir, `${tool.slug}.html`);
      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`  ✅ ${lang}/tools/${tool.slug}.html`);
    });
    
    console.log(`  📊 Инструменты: ${data.tools.length} страниц`);
    
    if (fs.existsSync(templates.toolsIndex)) {
      const indexTemplate = fs.readFileSync(templates.toolsIndex, 'utf8');
      let indexHtml = indexTemplate
        .replace(/{{lang}}/g, lang)
        .replace(/{{title}}/g, 'Financial Tools and Calculators')
        .replace(/{{description}}/g, translations.freeTools[lang]);
      
      // Заменяем переводы
      indexHtml = replaceTranslations(indexHtml, lang);
      
      const indexPath = path.join(toolsDir, 'index.html');
      fs.writeFileSync(indexPath, indexHtml, 'utf8');
      console.log(`  📑 ${lang}/tools/index.html`);
    }
    
  } catch (err) {
    console.log(`  ❌ Ошибка в tools.json:`, err.message);
  }
}

function generateIndexPages(lang) {
  const types = ['guides', 'industries', 'comparisons', 'faq', 'calculators', 'services'];
  
  types.forEach(type => {
    const jsonPath = path.join(__dirname, `../data/${lang}/${type}.json`);
    if (!fs.existsSync(jsonPath)) return;
    
    try {
      const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      const dataKey = type === 'services' ? 'services' : type;
      
      if (!data[dataKey]) return;
      
      const indexPath = path.join(__dirname, `../${lang}/${type}/index.html`);
      
      let indexHtml = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${type} | Fonsalus ${lang}</title>
  <meta name="description" content="Browse our collection of ${type} about Estonian accounting and taxes">
  <link rel="stylesheet" href="/css/main.css">
  <link rel="stylesheet" href="/css/nav.css">
  <link rel="stylesheet" href="/css/components.css">
  <link rel="stylesheet" href="/css/footer.css">
</head>
<body>
  <!-- Header из шаблона -->
  
  <main class="index-page">
    <div class="container">
      <h1>${type.charAt(0).toUpperCase() + type.slice(1)}</h1>
      <div class="items-grid">
        ${data[dataKey].map(item => `
          <div class="item-card glass-card">
            <h3><a href="/${lang}/${type}/${item.slug}.html">${item.icon || '📄'} ${item.title}</a></h3>
            <p>${item.description}</p>
            <a href="/${lang}/${type}/${item.slug}.html" class="read-more">${translations.readGuide[lang]}</a>
          </div>
        `).join('\n        ')}
      </div>
    </div>
  </main>
  
  <!-- Footer из шаблона -->
</body>
</html>`;
      
      fs.writeFileSync(indexPath, indexHtml, 'utf8');
      console.log(`  📑 ${lang}/${type}/index.html`);
      
    } catch (err) {
      console.log(`  ⚠️  Ошибка при создании index для ${type}:`, err.message);
    }
  });
}

generateAll();