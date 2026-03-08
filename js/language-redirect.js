// Автоматический редирект по языку браузера
(function() {
    // НЕ выполняем редирект, если мы уже на языковой версии
    if (window.location.pathname.match(/^\/(en|et|ru)\//)) {
        return;
    }
    
    // НЕ выполняем редирект, если уже редиректили в этой сессии
    if (sessionStorage.getItem('languageRedirected')) {
        return;
    }
    
    // Получаем язык браузера (первые 2 символа)
    const userLang = navigator.language.substring(0, 2).toLowerCase();
    
    // Определяем целевой URL
    let targetPath = '/en/';  // По умолчанию английский
    
    if (userLang === 'ru') {
        targetPath = '/ru/';
    } else if (userLang === 'et') {
        targetPath = '/et/';
    }
    
    // Сохраняем флаг редиректа
    sessionStorage.setItem('languageRedirected', 'true');
    
    // Выполняем редирект (только если это не тот же путь)
    if (window.location.pathname !== targetPath) {
        console.log('Redirecting to language: ' + targetPath);
        window.location.replace(targetPath);
    }
})();