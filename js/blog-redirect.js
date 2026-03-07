// ==================== АВТОМАТИЧЕСКИЙ РЕДИРЕКТ ПО ЯЗЫКУ ====================
(function() {
    // Проверяем, не было ли уже редиректа в этой сессии
    if (sessionStorage.getItem('blog-redirected')) {
        return;
    }
    
    // Определяем язык браузера
    const userLang = navigator.language.substring(0, 2);
    let targetUrl = '/blog/en/index.html';
    
    if (userLang === 'ru') {
        targetUrl = '/blog/ru/index.html';
    } else if (userLang === 'et') {
        targetUrl = '/blog/et/index.html';
    }
    
    // Запоминаем, что редирект был
    sessionStorage.setItem('blog-redirected', 'true');
    
    // Выполняем редирект
    window.location.replace(targetUrl);
})();