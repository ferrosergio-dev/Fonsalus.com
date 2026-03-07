// ===== SUPPORT.JS - Общий скрипт для страниц поддержки =====
// Версия: 3.0 (полностью без onclick, только event listeners)

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XCK6M7C5DG');

function trackDonationClick(type) {
    console.log('Track donation click:', type);
    gtag('event', 'donation_click', {
        'event_category': 'support',
        'event_label': type
    });
    
    // Яндекс.Метрика (если доступна)
    if (typeof ym !== 'undefined') {
        ym(107164704, 'reachGoal', 'donation_click', {action: type});
    }
}

// Переводы
let currentLanguage = 'en';

const translations = {
    en: {
        title: "Support Developer",
        subtitle: "Your contribution helps improve the app",
        thankYouTitle: "Thank You!",
        thankYouText: "Thank you for using 'Personality Compass'! Your support helps improve the app and add new features.",
        cryptoSection: "Cryptocurrency Donations",
        cryptoSubtitle: "Fast and available worldwide",
        whyCrypto: "Why cryptocurrency?",
        recommended: "Recommended",
        fastTransactions: "Fast transfers",
        fastTransactionsDesc: "Minutes instead of days",
        lowFees: "Low fees",
        lowFeesDesc: "Especially USDT on TRC20",
        globalAccess: "Borderless and unrestricted",
        globalAccessDesc: "Available from anywhere in the world",
        bankDetails: "Bank Details",
        quickActions: "Quick Actions",
        copyIban: "Copy IBAN",
        openBankApp: "Open banking app",
        nameCopied: "Name copied to clipboard",
        referenceCopied: "Payment reference copied",
        ibanCopied: "IBAN copied!",
        addressCopied: "Address copied",
        copy: "Copy",
        network: "Network",
        address: "Address",
        copyAddress: "Copy address",
        howToSendCrypto: "How to send cryptocurrency",
        important: "Important",
        cryptoNetworkWarning: "Make sure to use the correct network when sending. USDT on TRC20 is recommended for low fees.",
        cryptoInstructions: "Simple instructions for sending cryptocurrency:",
        step1Copy: "Copy the address",
        step1Desc: "Click the copy icon next to the desired address",
        step2Open: "Open your crypto wallet",
        step2Desc: "Binance, Trust Wallet, MetaMask or another",
        step3Paste: "Paste the address and amount",
        step3Desc: "Make sure you select the correct network",
        step4Confirm: "Confirm the transfer",
        step4Desc: "Check the details and confirm sending",
        nameLabel: "Recipient name:",
        ibanLabel: "IBAN:",
        referenceLabel: "Payment reference:",
        referenceText: "Personality Compass app donation",
        bankAppInstructions: "Open your banking app and use the details above for transfer. Don't forget to specify the payment reference.",
        rememberToCopy: "Don't forget to copy",
        close: "Close",
        backToMain: "← Back to Main Page",
        privacyNote: "All information is provided for voluntary donations. We do not store any payment data.",
        qrInstructions: "Scan QR code with your banking app"
    },
    ru: {
        title: "Поддержать разработчика",
        subtitle: "Ваш вклад помогает улучшать приложение",
        thankYouTitle: "Спасибо!",
        thankYouText: "Спасибо, что используете 'Личностный Компас'! Ваша поддержка помогает улучшать приложение и добавлять новые функции.",
        cryptoSection: "Криптовалюта",
        cryptoSubtitle: "Быстро и доступно по всему миру",
        whyCrypto: "Почему криптовалюта?",
        recommended: "Рекомендуется",
        fastTransactions: "Быстрые переводы",
        fastTransactionsDesc: "Минуты вместо дней",
        lowFees: "Низкие комиссии",
        lowFeesDesc: "Особенно USDT на TRC20",
        globalAccess: "Без границ и ограничений",
        globalAccessDesc: "Доступно из любой точки мира",
        bankDetails: "Банковские реквизиты",
        quickActions: "Быстрые действия",
        copyIban: "Скопировать IBAN",
        openBankApp: "Открыть банковское приложение",
        nameCopied: "Имя скопировано в буфер",
        referenceCopied: "Назначение скопировано",
        ibanCopied: "IBAN скопирован!",
        addressCopied: "Адрес скопирован",
        copy: "Копировать",
        network: "Сеть",
        address: "Адрес",
        copyAddress: "Скопировать адрес",
        howToSendCrypto: "Как отправить криптовалюту",
        important: "Важно",
        cryptoNetworkWarning: "Убедитесь, что используете правильную сеть при отправке. USDT на TRC20 рекомендуется для низких комиссий.",
        cryptoInstructions: "Простая инструкция для отправки криптовалюты:",
        step1Copy: "Скопируйте адрес",
        step1Desc: "Нажмите на иконку копирования рядом с нужным адресом",
        step2Open: "Откройте ваш крипто-кошелек",
        step2Desc: "Binance, Trust Wallet, MetaMask или другой",
        step3Paste: "Вставьте адрес и сумму",
        step3Desc: "Убедитесь, что выбрали правильную сеть",
        step4Confirm: "Подтвердите перевод",
        step4Desc: "Проверьте детали и подтвердите отправку",
        nameLabel: "Имя получателя:",
        ibanLabel: "IBAN:",
        referenceLabel: "Назначение платежа:",
        referenceText: "Пожертвование на приложение Personality Compass",
        bankAppInstructions: "Откройте ваше банковское приложение и используйте реквизиты выше для перевода. Не забудьте указать назначение платежа.",
        rememberToCopy: "Не забудьте скопировать",
        close: "Закрыть",
        backToMain: "← На главную страницу",
        privacyNote: "Вся информация предоставлена для добровольных пожертвований. Мы не храним никаких платежных данных.",
        qrInstructions: "Отсканируйте QR-код банковским приложением"
    },
    et: {
        title: "Toeta arendajat",
        subtitle: "Sinu annetus aitab rakendust paremaks teha",
        thankYouTitle: "Aitäh!",
        thankYouText: "Täname, et kasutad 'Isiksuse Kompassi'! Sinu toetus aitab rakendust täiustada ja uusi funktsioone lisada.",
        cryptoSection: "Krüptoraha annetused",
        cryptoSubtitle: "Kiire ja kättesaadav üle kogu maailma",
        whyCrypto: "Miks krüptoraha?",
        recommended: "Soovitatav",
        fastTransactions: "Kiired ülekanded",
        fastTransactionsDesc: "Minutid päevade asemel",
        lowFees: "Madalad tasud",
        lowFeesDesc: "Eriti USDT TRC20 võrgustikus",
        globalAccess: "Piirideta ja piiramatult",
        globalAccessDesc: "Kättesaadav igast maailma otsast",
        bankDetails: "Pangaandmed",
        quickActions: "Kiirtegevused",
        copyIban: "Kopeeri IBAN",
        openBankApp: "Ava pangarakendus",
        nameCopied: "Nimi kopeeritud",
        referenceCopied: "Makseviide kopeeritud",
        ibanCopied: "IBAN kopeeritud!",
        addressCopied: "Aadress kopeeritud",
        copy: "Kopeeri",
        network: "Võrk",
        address: "Aadress",
        copyAddress: "Kopeeri aadress",
        howToSendCrypto: "Kuidas saata krüptoraha",
        important: "Oluline",
        cryptoNetworkWarning: "Veendu, et kasutad õiget võrku saatmisel. USDT TRC20 võrgus on soovitatav madalate tasude tõttu.",
        cryptoInstructions: "Lihtne juhend krüptoraha saatmiseks:",
        step1Copy: "Kopeeri aadress",
        step1Desc: "Klõpsa kopeerimisikoonil soovitud aadressi kõrval",
        step2Open: "Ava oma krüptorahakott",
        step2Desc: "Binance, Trust Wallet, MetaMask või muu",
        step3Paste: "Kleebi aadress ja summa",
        step3Desc: "Veendu, et valisid õige võrgu",
        step4Confirm: "Kinnita ülekanne",
        step4Desc: "Kontrolli üksikasjad ja kinnita saatmine",
        nameLabel: "Saaja nimi:",
        ibanLabel: "IBAN:",
        referenceLabel: "Makseviide:",
        referenceText: "Personality Compass app donation",
        bankAppInstructions: "Ava oma pangarakendus ja kasuta ülaltoodud andmeid ülekande tegemiseks. Ära unusta määrata makseviidet.",
        rememberToCopy: "Ära unusta kopeerida",
        close: "Sulge",
        backToMain: "← Tagasi pealehele",
        privacyNote: "Kogu teave on esitatud vabatahtlike annetuste jaoks. Me ei säilita ühtegi makseandmeid.",
        qrInstructions: "Skänneeri QR-kood oma pangarakendusega"
    }
};

// Функции перевода
function changeLanguage(lang) {
    console.log('Changing language to:', lang);
    currentLanguage = lang;
    updateContent();
    
    // Обновляем активную кнопку
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Обновляем URL для SEO
    const newPath = `/${lang}/support.html`;
    if (window.location.pathname !== newPath) {
        window.location.href = newPath;
    }
    
    trackDonationClick(`language_${lang}`);
}

function updateContent() {
    console.log('Updating content for language:', currentLanguage);
    const t = translations[currentLanguage];
    if (!t) {
        console.error('Translations not found for language:', currentLanguage);
        return;
    }
    
    // Обновляем все элементы с data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    
    // Обновляем заголовок страницы
    document.title = t.title + " - Personality Compass";
}

// Clipboard functions
async function copyToClipboard(text, messageKey) {
    console.log('Copying to clipboard:', text, messageKey);
    try {
        await navigator.clipboard.writeText(text);
        showToast(translations[currentLanguage][messageKey] || translations[currentLanguage].copied || 'Copied!');
        trackDonationClick('copy_' + messageKey);
    } catch (err) {
        // Fallback для старых браузеров
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast(translations[currentLanguage][messageKey] || translations[currentLanguage].copied || 'Copied!');
        trackDonationClick('copy_' + messageKey);
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Показать инструкции по криптовалюте
function showCryptoInstructions() {
    console.log('showCryptoInstructions called');
    
    // Получаем элементы модального окна
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const modalTitle = document.getElementById('modal-title');
    
    // Проверяем, что все элементы существуют
    if (!modal) {
        console.error('Modal element not found! Check HTML - expected <div id="modal">');
        alert('Ошибка: элемент modal не найден');
        return;
    }
    
    if (!modalContent) {
        console.error('Modal content element not found! Check HTML - expected <div id="modal-content">');
        alert('Ошибка: элемент modal-content не найден');
        return;
    }
    
    if (!modalTitle) {
        console.error('Modal title element not found! Check HTML - expected <h3 id="modal-title">');
        alert('Ошибка: элемент modal-title не найден');
        return;
    }
    
    const t = translations[currentLanguage];
    
    modalTitle.textContent = t.howToSendCrypto;
    
    modalContent.innerHTML = `
        <p style="margin-bottom: 20px; color: #666;">${t.cryptoInstructions}</p>
        
        <div style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 25px;">
            <div style="display: flex; gap: 15px; align-items: flex-start;">
                <div style="background: #667eea; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">1</div>
                <div>
                    <strong style="color: #667eea; display: block; margin-bottom: 5px;">${t.step1Copy}</strong>
                    <p style="margin: 0; color: #666;">${t.step1Desc}</p>
                </div>
            </div>
            
            <div style="display: flex; gap: 15px; align-items: flex-start;">
                <div style="background: #667eea; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">2</div>
                <div>
                    <strong style="color: #667eea; display: block; margin-bottom: 5px;">${t.step2Open}</strong>
                    <p style="margin: 0; color: #666;">${t.step2Desc}</p>
                </div>
            </div>
            
            <div style="display: flex; gap: 15px; align-items: flex-start;">
                <div style="background: #667eea; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">3</div>
                <div>
                    <strong style="color: #667eea; display: block; margin-bottom: 5px;">${t.step3Paste}</strong>
                    <p style="margin: 0; color: #666;">${t.step3Desc}</p>
                </div>
            </div>
            
            <div style="display: flex; gap: 15px; align-items: flex-start;">
                <div style="background: #667eea; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">4</div>
                <div>
                    <strong style="color: #667eea; display: block; margin-bottom: 5px;">${t.step4Confirm}</strong>
                    <p style="margin: 0; color: #666;">${t.step4Desc}</p>
                </div>
            </div>
        </div>
        
        <div style="background: #fef8e7; border-left: 4px solid #f0b400; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <strong style="color: #b85c00; display: block; margin-bottom: 8px;">⚠️ ${t.important}</strong>
            <p style="margin: 0; color: #666;">${t.cryptoNetworkWarning}</p>
        </div>
    `;
    
    // Показываем модальное окно
    modal.style.display = 'flex';
    console.log('Modal display set to flex');
    
    trackDonationClick('crypto_instructions');
}

function closeModal() {
    console.log('Closing modal');
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
        console.log('Modal hidden');
    }
}

// Показать адреса криптовалют (альтернативная функция)
function showCryptoAddresses() {
    console.log('showCryptoAddresses called');
    // ... (код функции)
}

// Функция для обработки копирования по data-атрибутам
function handleCopyClick(button) {
    const text = button.getAttribute('data-copy') || button.getAttribute('data-copy-text');
    const type = button.getAttribute('data-copy-type') || 'addressCopied';
    
    if (text) {
        copyToClipboard(text, type);
    } else {
        console.error('No data-copy or data-copy-text found on button', button);
        // Пробуем найти текст внутри кнопки
        const spanText = button.querySelector('span')?.textContent;
        if (spanText && spanText !== 'Copy' && spanText !== 'Kopeeri' && spanText !== 'Копировать') {
            copyToClipboard(spanText, type);
        }
    }
}

// Функция для показа инструкций банка
function showBankInstructions() {
    console.log('showBankInstructions called');
    const t = translations[currentLanguage];
    if (t && t.bankAppInstructions) {
        // Показываем toast с инструкцией
        showToast(t.bankAppInstructions);
        
        // Дополнительно показываем модальное окно с IBAN для копирования
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modal-content');
        const modalTitle = document.getElementById('modal-title');
        
        if (modal && modalContent && modalTitle) {
            modalTitle.textContent = t.quickActions || 'Quick Actions';
            
            modalContent.innerHTML = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="font-size: 48px; margin-bottom: 15px;">🏦</div>
                    <p style="margin-bottom: 20px; color: #666;">${t.bankAppInstructions}</p>
                    
                    <div style="background: #f8f9ff; padding: 20px; border-radius: 12px; margin: 20px 0;">
                        <strong style="color: #667eea; display: block; margin-bottom: 10px;">IBAN:</strong>
                        <div style="font-family: monospace; font-size: 16px; word-break: break-all; margin-bottom: 15px;">
                            EE457700771003417343
                        </div>
                        <button class="copy-btn" data-copy="EE457700771003417343" data-copy-type="ibanCopied" style="position: relative; top: 0; right: 0; margin: 0 auto; display: inline-block;">
                            📋 ${t.copyIban || 'Copy IBAN'}
                        </button>
                    </div>
                    
                    <p style="color: #999; font-size: 14px; margin-top: 20px;">${t.rememberToCopy || 'Don\'t forget to copy'}</p>
                </div>
            `;
            
            // Добавляем обработчик для новой кнопки копирования в модальном окне
            const newCopyBtn = modalContent.querySelector('.copy-btn');
            if (newCopyBtn) {
                newCopyBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    handleCopyClick(this);
                });
            }
            
            modal.style.display = 'flex';
        }
        
        trackDonationClick('bank_instructions');
    }
}

// Инициализация всех обработчиков событий - ИСПРАВЛЕНО
function initEventListeners() {
    console.log('Initializing event listeners');
    
    // Кнопки языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            if (lang) {
                changeLanguage(lang);
            }
        });
    });
    
    // Кнопки копирования (в карточках криптовалют и банковских реквизитах)
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            handleCopyClick(this);
        });
    });
    
    // Кнопка "Как отправить криптовалюту"
    document.querySelectorAll('[data-action="crypto-instructions"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showCryptoInstructions();
            trackDonationClick('crypto_instructions');
        });
    });
    
    // Кнопка "Скопировать IBAN" в быстрых действиях - ИСПРАВЛЕНО (поддерживает оба формата)
    document.querySelectorAll('[data-action="copy-iban"], .action-btn[data-copy]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            handleCopyClick(this);
        });
    });
    
    // Кнопка "Открыть банковское приложение" - ИСПРАВЛЕНО
    document.querySelectorAll('[data-action="open-bank-app"], [data-action="bank-instructions"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showBankInstructions();
        });
    });
    
    // Кнопки закрытия модального окна
    document.querySelectorAll('[data-action="close-modal"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        });
    });
    
    // Ссылка "На главную"
    document.querySelectorAll('[data-action="back-to-main"]').forEach(link => {
        link.addEventListener('click', function(e) {
            trackDonationClick('back_to_main');
            // Не делаем preventDefault, так это ссылка
        });
    });
    
    console.log('Event listeners initialized');
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    console.log('Support.js loaded - initializing');
    
    // Определяем язык из URL
    const path = window.location.pathname;
    if (path.includes('/ru/')) {
        currentLanguage = 'ru';
    } else if (path.includes('/et/')) {
        currentLanguage = 'et';
    } else {
        currentLanguage = 'en';
    }
    
    console.log('Detected language from URL:', currentLanguage);
    
    // Принудительно обновляем контент
    updateContent();
    
    // Отмечаем активную кнопку языка (по data-lang)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
            console.log('Active language button set to:', currentLanguage);
        }
    });
    
    // Проверяем наличие модального окна
    const modal = document.getElementById('modal');
    if (modal) {
        console.log('Modal element found with ID "modal"');
        
        // Добавляем обработчик клика вне модального окна
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
        
        // Проверяем дочерние элементы
        const modalContent = document.getElementById('modal-content');
        const modalTitle = document.getElementById('modal-title');
        const closeBtn = document.querySelector('.close-btn');
        
        if (modalContent) console.log('Modal content found with ID "modal-content"');
        else console.error('Modal content NOT found! Expected <div id="modal-content">');
        
        if (modalTitle) console.log('Modal title found with ID "modal-title"');
        else console.error('Modal title NOT found! Expected <h3 id="modal-title">');
        
        if (closeBtn) console.log('Close button found');
        else console.error('Close button NOT found! Expected <button class="close-btn">');
        
    } else {
        console.error('Modal element NOT found! Check HTML for <div id="modal">');
    }
    
    // Инициализируем все обработчики событий
    initEventListeners();
    
    console.log('Support.js fully loaded');
});

// Для обратной совместимости
window.changeLanguage = changeLanguage;
window.copyToClipboard = copyToClipboard;
window.showCryptoInstructions = showCryptoInstructions;
window.showCryptoAddresses = showCryptoAddresses;
window.closeModal = closeModal;
window.trackDonationClick = trackDonationClick;