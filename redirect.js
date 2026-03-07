// Automatic language redirect
(function() {
    // Check if already redirected in this session
    if (sessionStorage.getItem('redirected')) {
        return;
    }

    // Get browser language
    const userLang = navigator.language.substring(0, 2);
    let targetUrl = '/en/index.html';  // ← ИЗМЕНЕНО: теперь на файл
    
    if (userLang === 'ru') {
        targetUrl = '/ru/index.html';  // ← ИЗМЕНЕНО
    } else if (userLang === 'et') {
        targetUrl = '/et/index.html';  // ← ИЗМЕНЕНО
    }
    
    // Mark as redirected
    sessionStorage.setItem('redirected', 'true');
    
    // Execute redirect
    window.location.replace(targetUrl);
})();