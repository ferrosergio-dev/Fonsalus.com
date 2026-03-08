// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileNav.classList.toggle('active');
      
      // Блокировка скролла body при открытом меню
      if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
    
    // Закрытие меню при клике на ссылку
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Закрытие при изменении размера окна (если стали десктопом)
    window.addEventListener('resize', function() {
      if (window.innerWidth > 900) {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
  
  // Исправление для старых браузеров - проверка поддержки backdrop-filter
  if (!CSS.supports('backdrop-filter', 'blur(10px)')) {
    document.documentElement.classList.add('no-backdrop-filter');
  }
});