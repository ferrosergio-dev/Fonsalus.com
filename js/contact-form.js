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
    
    // Собираем данные формы
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    try {
      // Здесь будет ваш backend endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        form.reset();
        if (successMessage) {
          successMessage.classList.add('visible');
          setTimeout(() => {
            successMessage.classList.remove('visible');
          }, 5000);
        }
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please try again.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send message';
    }
  });
});