// js/contact-form.js
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const formGroups = form.querySelectorAll('.form-group');
  const submitBtn = form.querySelector('button[type="submit"]');
  const successMessage = document.querySelector('.form-success');
  
  // Валидация формы
  function validateForm() {
    let isValid = true;
    
    formGroups.forEach(group => {
      const input = group.querySelector('input, select, textarea');
      const errorEl = group.querySelector('.form-error');
      
      if (input && input.hasAttribute('required') && !input.value.trim()) {
        errorEl.textContent = 'This field is required';
        errorEl.classList.add('visible');
        isValid = false;
      } else if (input && input.type === 'email' && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          errorEl.textContent = 'Please enter a valid email address';
          errorEl.classList.add('visible');
          isValid = false;
        } else {
          errorEl.classList.remove('visible');
        }
      } else if (errorEl) {
        errorEl.classList.remove('visible');
      }
    });
    
    return isValid;
  }

  // Валидация при вводе
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', function() {
      const group = this.closest('.form-group');
      const errorEl = group.querySelector('.form-error');
      if (errorEl) {
        errorEl.classList.remove('visible');
      }
    });
  });

  // Отправка формы
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Проверка Turnstile
    const turnstileResponse = document.querySelector('[name="cf-turnstile-response"]')?.value;
    if (!turnstileResponse) {
      alert('Please complete the captcha');
      return;
    }
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Используем FormData напрямую (не JSON)
    const formData = new FormData(form);
    
    try {
      // Отправляем на /contact (ваш Cloudflare Worker)
      const response = await fetch('/contact', {
        method: 'POST',
        body: formData  // Отправляем как form-data, не JSON!
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        form.reset();
        
        // Сбрасываем Turnstile
        if (window.turnstile) {
          window.turnstile.reset();
        }
        
        if (successMessage) {
          successMessage.textContent = result.message || 'Thank you! Your message has been sent. We\'ll get back to you within 24 hours.';
          successMessage.classList.add('visible');
          
          // Прокручиваем к сообщению об успехе
          successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          setTimeout(() => {
            successMessage.classList.remove('visible');
          }, 5000);
        }
      } else {
        // Показываем ошибку от сервера
        alert(result.error || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send message';
    }
  });
});