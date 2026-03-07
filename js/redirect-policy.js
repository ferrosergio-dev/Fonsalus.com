// ==================== АВТОМАТИЧЕСКИЙ РЕДИРЕКТ НА ПОЛИТИКИ ====================
(function() {
    // Проверяем, не было ли уже редиректа в этой сессии
    if (sessionStorage.getItem('policy-redirected')) {
        return;
    }
    
    // Определяем язык браузера
    const userLang = navigator.language.substring(0, 2);
    let targetUrl = '/en/policy.html';
    
    if (userLang === 'ru') {
        targetUrl = '/ru/policy.html';
    } else if (userLang === 'et') {
        targetUrl = '/et/policy.html';
    }
    
    // Запоминаем, что редирект был
    sessionStorage.setItem('policy-redirected', 'true');
    
    // Выполняем редирект
    window.location.replace(targetUrl);
})();