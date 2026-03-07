// ==================== BLOG PAGE - ESTONIAN ====================
document.addEventListener('DOMContentLoaded', function() {
    // Elementid
    const blogPosts = document.getElementById('blogPosts');
    const posts = Array.from(document.querySelectorAll('.post-card'));
    const filterChips = document.querySelectorAll('.filter-chip');
    const sortSelect = document.getElementById('sortSelect');
    const searchInput = document.getElementById('searchInput');
    const postsCount = document.getElementById('postsCount');
    const noResults = document.getElementById('noResults');
    const clearSearchBtn = document.getElementById('clearSearch');
    const tags = document.querySelectorAll('.tag[data-tag]');
    
    // Seisund
    let currentFilter = 'all';
    let currentSort = 'newest';
    let currentSearch = '';
    let currentTag = '';
    
    // Filtreerimise ja sorteerimise funktsioon
    function filterAndSortPosts() {
        // Filtreeri kategooria, otsingu ja sildi järgi
        let visiblePosts = posts.filter(post => {
            // Kategooria filter
            if (currentFilter !== 'all' && post.dataset.category !== currentFilter) {
                return false;
            }
            
            // Sildi filter
            if (currentTag && !post.dataset.tags.includes(currentTag)) {
                return false;
            }
            
            // Otsing pealkirjas, kategoorias ja siltides
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
        
        // Sorteeri
        visiblePosts.sort((a, b) => {
            if (currentSort === 'newest') {
                return new Date(b.dataset.date) - new Date(a.dataset.date);
            } else if (currentSort === 'oldest') {
                return new Date(a.dataset.date) - new Date(b.dataset.date);
            } else if (currentSort === 'category') {
                const categoryCompare = a.dataset.category.localeCompare(b.dataset.category);
                if (categoryCompare !== 0) return categoryCompare;
                return new Date(b.dataset.date) - new Date(a.dataset.date);
            } else if (currentSort === 'title') {
                return a.dataset.title.localeCompare(b.dataset.title);
            }
        });
        
        // Uuenda DOM-i
        posts.forEach(post => post.classList.add('hidden'));
        visiblePosts.forEach(post => post.classList.remove('hidden'));
        
        // Uuenda järjekorda
        visiblePosts.forEach(post => blogPosts.appendChild(post));
        
        // Uuenda loendurit ja näita "tulemusi pole" teadet
        const count = visiblePosts.length;
        postsCount.textContent = `Kuvatakse ${count} artiklit`;
        
        if (count === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
        
        // Uuenda aktiivset filtrit
        filterChips.forEach(chip => {
            if (chip.dataset.filter === currentFilter) {
                chip.classList.add('active');
            } else {
                chip.classList.remove('active');
            }
        });
        
        // Uuenda aktiivset silti
        tags.forEach(tag => {
            if (tag.dataset.tag === currentTag) {
                tag.classList.add('active');
            } else {
                tag.classList.remove('active');
            }
        });
    }
    
    // Filtri nupud
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            currentFilter = this.dataset.filter;
            currentTag = ''; // Lähtesta silt kategooria vahetamisel
            filterAndSortPosts();
        });
    });
    
    // Sorteerimine
    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        filterAndSortPosts();
    });
    
    // Otsing (viivitusega jõudluse parandamiseks)
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentSearch = this.value.trim();
            filterAndSortPosts();
        }, 300);
    });
    
    // Siltide klikid
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            if (this.classList.contains('more-tag')) return;
            
            if (currentTag === this.dataset.tag) {
                currentTag = ''; // Eemalda silt
            } else {
                currentTag = this.dataset.tag;
                currentFilter = 'all'; // Lähtesta filter "kõik" peale
            }
            filterAndSortPosts();
        });
    });
    
    // Kõigi filtrite lähtestamine
    clearSearchBtn.addEventListener('click', function() {
        currentFilter = 'all';
        currentSort = 'newest';
        currentSearch = '';
        currentTag = '';
        searchInput.value = '';
        sortSelect.value = 'newest';
        filterAndSortPosts();
    });
    
    // Initsialiseerimine
    filterAndSortPosts();
});