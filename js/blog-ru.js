// ==================== БЛОГ РУССКАЯ ВЕРСИЯ ====================
document.addEventListener('DOMContentLoaded', function() {
    // Элементы
    const blogPosts = document.getElementById('blogPosts');
    const posts = Array.from(document.querySelectorAll('.post-card'));
    const filterChips = document.querySelectorAll('.filter-chip');
    const sortSelect = document.getElementById('sortSelect');
    const searchInput = document.getElementById('searchInput');
    const postsCount = document.getElementById('postsCount');
    const noResults = document.getElementById('noResults');
    const clearSearchBtn = document.getElementById('clearSearch');
    const tags = document.querySelectorAll('.tag[data-tag]');
    const moreTag = document.querySelector('.more-tag');
    
    // Состояние
    let currentFilter = 'all';
    let currentSort = 'newest';
    let currentSearch = '';
    let currentTag = '';
    
    // Функция фильтрации и сортировки
    function filterAndSortPosts() {
        // Фильтрация по категории, поиску и тегу
        let visiblePosts = posts.filter(post => {
            // Фильтр по категории
            if (currentFilter !== 'all' && post.dataset.category !== currentFilter) {
                return false;
            }
            
            // Фильтр по тегу
            if (currentTag && !post.dataset.tags.includes(currentTag)) {
                return false;
            }
            
            // Поиск по заголовку, категории и тегам
            if (currentSearch) {
                const searchLower = currentSearch.toLowerCase();
                const title = post.dataset.title.toLowerCase();
                const category = post.dataset.category.toLowerCase();
                const tags = post.dataset.tags.toLowerCase();
                const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
                
                return title.includes(searchLower) || 
                       category.includes(searchLower) || 
                       tags.includes(searchLower) ||
                       excerpt.includes(searchLower);
            }
            
            return true;
        });
        
        // Сортировка
        visiblePosts.sort((a, b) => {
            if (currentSort === 'newest') {
                return new Date(b.dataset.date) - new Date(a.dataset.date);
            } else if (currentSort === 'oldest') {
                return new Date(a.dataset.date) - new Date(b.dataset.date);
            } else if (currentSort === 'category') {
                const categoryCompare = a.dataset.category.localeCompare(b.dataset.category, 'ru');
                if (categoryCompare !== 0) return categoryCompare;
                return new Date(b.dataset.date) - new Date(a.dataset.date);
            } else if (currentSort === 'title') {
                return a.dataset.title.localeCompare(b.dataset.title, 'ru');
            }
        });
        
        // Обновляем DOM
        posts.forEach(post => post.classList.add('hidden'));
        visiblePosts.forEach(post => post.classList.remove('hidden'));
        
        // Обновляем порядок
        visiblePosts.forEach(post => blogPosts.appendChild(post));
        
        // Обновляем счетчик и показываем/скрываем "нет результатов"
        const count = visiblePosts.length;
        postsCount.textContent = `Показано ${count} ${getPlural(count, 'статья', 'статьи', 'статей')}`;
        
        if (count === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
        
        // Обновляем активный фильтр
        filterChips.forEach(chip => {
            if (chip.dataset.filter === currentFilter) {
                chip.classList.add('active');
            } else {
                chip.classList.remove('active');
            }
        });
        
        // Обновляем активный тег
        tags.forEach(tag => {
            if (tag.dataset.tag === currentTag) {
                tag.classList.add('active');
            } else {
                tag.classList.remove('active');
            }
        });
    }
    
    // Вспомогательная функция для склонения
    function getPlural(number, one, few, many) {
        if (number % 10 === 1 && number % 100 !== 11) {
            return one;
        } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
            return few;
        } else {
            return many;
        }
    }
    
    // Обработчики фильтров
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            currentFilter = this.dataset.filter;
            currentTag = ''; // Сбрасываем тег при смене категории
            filterAndSortPosts();
        });
    });
    
    // Обработчик сортировки
    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        filterAndSortPosts();
    });
    
    // Обработчик поиска (с задержкой для производительности)
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentSearch = this.value.trim();
            filterAndSortPosts();
        }, 300);
    });
    
    // Обработчики тегов
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            if (this.classList.contains('more-tag')) return;
            
            if (currentTag === this.dataset.tag) {
                currentTag = ''; // Снимаем тег
            } else {
                currentTag = this.dataset.tag;
                currentFilter = 'all'; // Сбрасываем фильтр на "все"
            }
            filterAndSortPosts();
        });
    });
    
    // Обработчик для "ещё" (можно расширить позже)
    if (moreTag) {
        moreTag.addEventListener('click', function() {
            alert('Функция "ещё теги" будет добавлена позже');
        });
    }
    
    // Очистка всех фильтров
    clearSearchBtn.addEventListener('click', function() {
        currentFilter = 'all';
        currentSort = 'newest';
        currentSearch = '';
        currentTag = '';
        searchInput.value = '';
        sortSelect.value = 'newest';
        filterAndSortPosts();
    });
    
    // Инициализация
    filterAndSortPosts();
});