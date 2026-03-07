// ==================== ПЕРЕВОДЫ ====================
const translations = {
    en: {
        mainTitle: "Personality Type Not Found",
        subTitle: "Even your personality type isn't this hard to find!",
        messageLabel: "Message for you:",
        btnRandom: "🎲 Random",
        homeButton: "← Go to Home Page",
        footerNote: "Click the buttons above for a personalized 404 message based on Enneagram types!",
        messages: {
            default: {
                text: "Even your personality type isn't this hard to find!",
                author: "— Personality Compass"
            },
            1: {
                text: "This page is imperfect. But Type 1 knows that sometimes the journey matters more than the destination.",
                author: "— Type 1: The Perfectionist"
            },
            2: {
                text: "Looking for something? Type 2 wants to help you find it! Maybe try the navigation menu?",
                author: "— Type 2: The Helper"
            },
            3: {
                text: "404? That's not very productive. Type 3 suggests you redirect that energy to the home page!",
                author: "— Type 3: The Achiever"
            },
            4: {
                text: "This page is uniquely missing. Type 4 appreciates the poetry of its absence.",
                author: "— Type 4: The Individualist"
            },
            5: {
                text: "Type 5 has analyzed the situation. Conclusion: this page doesn't exist. Solution: go home.",
                author: "— Type 5: The Investigator"
            },
            6: {
                text: "Type 6 is concerned. What if the page never existed? What if it's hiding? Better go somewhere safe.",
                author: "— Type 6: The Loyalist"
            },
            7: {
                text: "Missing page? Type 7 sees it as an opportunity to explore somewhere new! Like the home page!",
                author: "— Type 7: The Enthusiast"
            },
            8: {
                text: "Type 8 demands to know who removed this page. While they investigate, you should go home.",
                author: "— Type 8: The Challenger"
            },
            9: {
                text: "Type 9 is at peace with this page not being here. It's all part of the universe's harmony.",
                author: "— Type 9: The Peacemaker"
            }
        }
    },
    ru: {
        mainTitle: "Тип личности не найден",
        subTitle: "Даже ваш тип личности проще найти, чем эту страницу!",
        messageLabel: "📝 Сообщение для вас:",
        btnRandom: "🎲 Случайно",
        homeButton: "← На главную страницу",
        footerNote: "Нажимайте на кнопки выше, чтобы увидеть персонализированные сообщения 404 для разных типов Эннеаграммы!",
        messages: {
            default: {
                text: "Даже ваш тип личности проще найти, чем эту страницу!",
                author: "— Personality Compass"
            },
            1: {
                text: "Эта страница несовершенна. Но Тип 1 знает, что иногда путь важнее цели.",
                author: "— Тип 1: Перфекционист"
            },
            2: {
                text: "Что-то ищете? Тип 2 хочет помочь вам найти это! Может, попробуете меню навигации?",
                author: "— Тип 2: Помощник"
            },
            3: {
                text: "404? Это не очень продуктивно. Тип 3 предлагает перенаправить эту энергию на главную страницу!",
                author: "— Тип 3: Достигатель"
            },
            4: {
                text: "Эта страница уникально отсутствует. Тип 4 ценит поэзию её отсутствия.",
                author: "— Тип 4: Индивидуалист"
            },
            5: {
                text: "Тип 5 проанализировал ситуацию. Вывод: этой страницы не существует. Решение: идти домой.",
                author: "— Тип 5: Наблюдатель"
            },
            6: {
                text: "Тип 6 обеспокоен. Что, если страницы никогда не существовало? Что, если она прячется? Лучше пойти в безопасное место.",
                author: "— Тип 6: Лоялист"
            },
            7: {
                text: "Страница не найдена? Тип 7 видит в этом возможность исследовать что-то новое! Например, главную страницу!",
                author: "— Тип 7: Энтузиаст"
            },
            8: {
                text: "Тип 8 требует знать, кто удалил эту страницу. Пока они расследуют, вам лучше пойти на главную.",
                author: "— Тип 8: Защитник"
            },
            9: {
                text: "Тип 9 спокоен из-за отсутствия этой страницы. Всё это часть гармонии вселенной.",
                author: "— Тип 9: Миротворец"
            }
        }
    },
    et: {
        mainTitle: "Isiksusetüüpi ei leitud",
        subTitle: "Isegi sinu isiksusetüüpi on lihtsam leida kui seda lehte!",
        messageLabel: "📝 Sõnum sulle:",
        btnRandom: "🎲 Juhuslik",
        homeButton: "← Tagasi pealehele",
        footerNote: "Vajuta ülalolevaid nuppe, et näha erinevaid 404 sõnumeid Enneagrammi tüüpide põhjal!",
        messages: {
            default: {
                text: "Isegi sinu isiksusetüüpi on lihtsam leida kui seda lehte!",
                author: "— Personality Compass"
            },
            1: {
                text: "See leht on ebatäiuslik. Aga Tüüp 1 teab, et mõnikord on teekond olulisem kui sihtkoht.",
                author: "— Tüüp 1: Perfektsionist"
            },
            2: {
                text: "Otsid midagi? Tüüp 2 tahab aidata sul seda leida! Proovi navigatsioonimenüüd?",
                author: "— Tüüp 2: Abistaja"
            },
            3: {
                text: "404? See pole kuigi produktiivne. Tüüp 3 soovitab see energia suunata pealehele!",
                author: "— Tüüp 3: Saavutaja"
            },
            4: {
                text: "See leht on unikaalselt puudu. Tüüp 4 hindab selle puudumise poeesiat.",
                author: "— Tüüp 4: Individualist"
            },
            5: {
                text: "Tüüp 5 analüüsis olukorda. Järeldus: seda lehte pole olemas. Lahendus: mine koju.",
                author: "— Tüüp 5: Vaatleja"
            },
            6: {
                text: "Tüüp 6 on mures. Mis siis, kui lehte pole kunagi olnudki? Mis siis, kui see peidab end? Parem minna turvalisse kohta.",
                author: "— Tüüp 6: Lojaalne"
            },
            7: {
                text: "Lehte ei leitud? Tüüp 7 näeb selles võimalust avastada midagi uut! Näiteks pealehte!",
                author: "— Tüüp 7: Entusiast"
            },
            8: {
                text: "Tüüp 8 nõuab teada, kes selle lehe eemaldas. Kuni nad uurivad, mine sina pealehele.",
                author: "— Tüüp 8: Kaitsja"
            },
            9: {
                text: "Tüüp 9 on rahul selle lehe puudumisega. See kõik on osa universumi harmooniast.",
                author: "— Tüüp 9: Rahutegija"
            }
        }
    }
};

// ==================== СОСТОЯНИЕ ====================
let currentLanguage = 'en';
let currentType = 'default';

// ==================== ОПРЕДЕЛЕНИЕ ЯЗЫКА ====================
function detectLanguage() {
    const referrer = document.referrer;
    if (referrer.includes('/ru/')) return 'ru';
    if (referrer.includes('/et/')) return 'et';
    
    const browserLang = navigator.language;
    if (browserLang.startsWith('ru')) return 'ru';
    if (browserLang.startsWith('et')) return 'et';
    
    return 'en';
}

// ==================== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА ====================
function switchLanguage(lang) {
    currentLanguage = lang;
    
    document.getElementById('homeButton').href = '/' + lang + '/';
    updateUITexts();
    showMessage(currentType);
    
    // Обновляем активную кнопку языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

// ==================== ОБНОВЛЕНИЕ ТЕКСТОВ ИНТЕРФЕЙСА ====================
function updateUITexts() {
    const t = translations[currentLanguage];
    
    document.getElementById('mainTitle').textContent = t.mainTitle;
    document.getElementById('subTitle').textContent = t.subTitle;
    document.getElementById('messageLabel').textContent = t.messageLabel;
    document.getElementById('btnRandom').textContent = t.btnRandom;
    document.getElementById('homeButton').innerHTML = t.homeButton;
    document.getElementById('footerNote').textContent = t.footerNote;
}

// ==================== ПОКАЗ СООБЩЕНИЯ ====================
function showMessage(type) {
    currentType = type;
    const t = translations[currentLanguage];
    const message = t.messages[type] || t.messages.default;
    
    document.getElementById('messageText').textContent = message.text;
    document.getElementById('messageAuthor').textContent = message.author;
    
    // Обновляем активную кнопку типа
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.type === type) {
            btn.classList.add('active');
        }
    });
}

// ==================== НАВЕШИВАНИЕ ОБРАБОТЧИКОВ ====================
function initEventListeners() {
    // Кнопки типов
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.dataset.type;
            if (type === 'random') {
                const types = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
                const randomType = types[Math.floor(Math.random() * types.length)];
                showMessage(randomType);
            } else {
                showMessage(type);
            }
        });
    });
    
    // Кнопки языков
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener('DOMContentLoaded', function() {
    currentLanguage = detectLanguage();
    switchLanguage(currentLanguage);
    
    const types = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    showMessage(randomType);
    
    initEventListeners(); // <- ЭТО БЫЛО ПРОПУЩЕНО!
});