// 404.js - добавляем интерактивности на страницу ошибки
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Забавный счетчик "потерянных страниц"
  const lostPages = Math.floor(Math.random() * 1000) + 1;
  console.log(`📊 404 Error: You've discovered page #${lostPages} that doesn't exist in our ledger.`);
  
  // 2. Анимируем нули при наведении
  const zeros = document.querySelectorAll('.zero');
  zeros.forEach(zero => {
    zero.addEventListener('mouseenter', function() {
      this.style.animation = 'spin 0.5s linear infinite';
    });
    
    zero.addEventListener('mouseleave', function() {
      this.style.animation = '';
      // Возвращаем исходную анимацию из CSS
      setTimeout(() => {
        this.style.animation = 'float 3s ease-in-out infinite';
      }, 100);
    });
  });
  
  // 3. Счетчик времени на странице 404 (шутка)
  let secondsOnPage = 0;
  const timer = setInterval(() => {
    secondsOnPage++;
    if (secondsOnPage === 10) {
      console.log('⏱️ You\'ve been lost for 10 seconds. Want some help?');
    }
    if (secondsOnPage === 30) {
      console.log('🧮 30 seconds! Our accountants are worried about you.');
      clearInterval(timer);
    }
  }, 1000);
  
  // 4. Подсказка при попытке уйти
  const homeLink = document.querySelector('.home-link');
  if (homeLink) {
    homeLink.addEventListener('mouseenter', () => {
      console.log('✅ Good choice! Back to safe harbor.');
    });
  }
  
  // 5. Случайная бухгалтерская шутка в консоль
  const jokes = [
    "Why did the accountant go broke? He lost his balance!",
    "What's an accountant's favorite song? 'I will survive' (audit season)",
    "Why do accountants love winter? Because it's tax season!",
    "What's the difference between an accountant and a terrorist? You can negotiate with a terrorist.",
    "An accountant is someone who solves a problem you didn't know you had in a way you don't understand."
  ];
  
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  console.log(`🎭 Joke for you: ${randomJoke}`);
  
  // 6. Обработка поиска (если форма существует)
  const searchForm = document.querySelector('.search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const query = this.querySelector('input').value.trim();
      
      if (query.toLowerCase().includes('help') || query.toLowerCase().includes('lost')) {
        alert('🧙‍♂️ You found the easter egg! Here\'s a hint: try the navigation menu above.');
      } else if (query) {
        // Здесь можно сделать редирект на реальный поиск
        window.location.href = `/en/search/?q=${encodeURIComponent(query)}`;
      }
    });
  }
  
  // 7. Добавляем случайное движение для фонового шарика
  const bg = document.querySelector('.error-bg');
  if (bg) {
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      bg.style.transform = `translate(calc(-50% + ${mouseX * 50}px), calc(-50% + ${mouseY * 30}px)) scale(1.2)`;
    });
  }
  
  // 8. Забавный факт о том, сколько людей попадают на 404
  fetch('https://api.github.com/repos/fonsalus/fonsalus.com')
    .then(() => {
      console.log('📈 Fun fact: You\'re not alone! About 5% of all site visits end up on 404 pages.');
    })
    .catch(() => {
      // Тихо падаем, если не получилось
    });
});