// seo-blog.js - загружает посты блога на главную
document.addEventListener('DOMContentLoaded', function() {
  fetch('/data/blog-posts.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('blogPosts');
      if (!container) return;
      
      container.innerHTML = '';
      
      data.posts.slice(0, 3).forEach(post => {
        const div = document.createElement('div');
        div.className = 'blog-card';
        div.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.description}</p>
          <a href="/en/blog/${post.slug}.html">Read more →</a>
        `;
        container.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Error loading blog posts:', error);
    });
});