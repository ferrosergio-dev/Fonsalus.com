// js/translations.js
(function() {
  console.log('Translations script loaded - PRESERVING FORMATTING');
  
  // Словарь переводов для всех языков
  const translations = {
    footerDescription: {
      en: 'Your trusted partner for Estonian accounting and business consulting.',
      et: 'Teie usaldusväärne partner Eesti raamatupidamise ja ärikonsultatsioonide alal.',
      ru: 'Ваш надежный партнер в сфере бухгалтерии и бизнес-консалтинга в Эстонии.'
    },
    services: {
      en: 'Services',
      et: 'Teenused',
      ru: 'Услуги'
    },
    accounting: {
      en: 'Accounting',
      et: 'Raamatupidamine',
      ru: 'Бухгалтерия'
    },
    payroll: {
      en: 'Payroll',
      et: 'Palk',
      ru: 'Зарплата'
    },
    consulting: {
      en: 'Consulting',
      et: 'Konsultatsioon',
      ru: 'Консультации'
    },
    companyFormation: {
      en: 'Company Formation',
      et: 'Ettevõtte asutamine',
      ru: 'Регистрация компании'
    },
    calculators: {
      en: 'Calculators',
      et: 'Kalkulaatorid',
      ru: 'Калькуляторы'
    },
    salaryCalc: {
      en: 'Salary Calculator',
      et: 'Palgakalkulaator',
      ru: 'Калькулятор зарплаты'
    },
    dividendCalc: {
      en: 'Dividend Tax',
      et: 'Dividendimaks',
      ru: 'Налог на дивиденды'
    },
    vatCalc: {
      en: 'VAT Calculator',
      et: 'Käibemaksukalkulaator',
      ru: 'Калькулятор НДС'
    },
    profitCalc: {
      en: 'Profit Calculator',
      et: 'Kasumikalkulaator',
      ru: 'Калькулятор прибыли'
    },
    resources: {
      en: 'Resources',
      et: 'Resursid',
      ru: 'Ресурсы'
    },
    guides: {
      en: 'Guides',
      et: 'Juhendid',
      ru: 'Руководства'
    },
    industries: {
      en: 'Industries',
      et: 'Tegevusalad',
      ru: 'Отрасли'
    },
    comparisons: {
      en: 'Comparisons',
      et: 'Võrdlused',
      ru: 'Сравнения'
    },
    faq: {
      en: 'FAQ',
      et: 'KKK',
      ru: 'Часто задаваемые вопросы'
    },
    company: {
      en: 'Company',
      et: 'Ettevõttest',
      ru: 'Компания'
    },
    aboutUs: {
      en: 'About Us',
      et: 'Meist',
      ru: 'О нас'
    },
    blog: {
      en: 'Blog',
      et: 'Blogi',
      ru: 'Блог'
    },
    contact: {
      en: 'Contact',
      et: 'Kontakt',
      ru: 'Контакты'
    },
    privacy: {
      en: 'Privacy',
      et: 'Privaatsus',
      ru: 'Конфиденциальность'
    },
    registryCode: {
      en: 'Registry code',
      et: 'Registrikood',
      ru: 'Регистрационный код'
    },
    allRightsReserved: {
      en: 'All rights reserved',
      et: 'Kõik õigused kaitstud',
      ru: 'Все права защищены'
    },
    termsOfUse: {
      en: 'Terms of Use',
      et: 'Kasutustingimused',
      ru: 'Условия использования'
    },
    cookiePolicy: {
      en: 'Cookie Policy',
      et: 'Küpsiste poliitika',
      ru: 'Политика cookies'
    },
    backToTop: {
      en: 'Back to top',
      et: 'Tagasi üles',
      ru: 'Наверх'
    }
  };

  // Функция для получения текущего языка
  function getCurrentLanguage() {
    const htmlLang = document.documentElement.lang;
    if (htmlLang && ['en', 'et', 'ru'].includes(htmlLang)) {
      return htmlLang;
    }
    const path = window.location.pathname;
    const match = path.match(/^\/(en|et|ru)\//);
    return match ? match[1] : 'en';
  }

  // Функция для замены текста внутри элемента, сохраняя HTML структуру
  function replaceTextPreservingHtml(element, searchText, replaceText) {
    if (!element || !searchText) return false;
    
    let replaced = false;
    
    // Проходим по всем дочерним узлам
    element.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        // Это текстовый узел - заменяем в нем текст
        if (node.textContent.includes(searchText)) {
          node.textContent = node.textContent.replace(new RegExp(searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replaceText);
          replaced = true;
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Это элемент - рекурсивно обрабатываем его дочерние узлы
        if (replaceTextPreservingHtml(node, searchText, replaceText)) {
          replaced = true;
        }
      }
    });
    
    return replaced;
  }

  function replacePlaceholders() {
    const lang = getCurrentLanguage();
    console.log('Running replacePlaceholders for language:', lang);
    
    // Список всех плейсхолдеров и соответствующих ключей
    const placeholderMappings = [
      // Заглавные варианты
      { pattern: '{{T:SERVICES}}', key: 'services' },
      { pattern: '{{T:CALCULATORS}}', key: 'calculators' },
      { pattern: '{{T:RESOURCES}}', key: 'resources' },
      { pattern: '{{T:COMPANY}}', key: 'company' },
      
      // Варианты с t:
      { pattern: '{{t:services}}', key: 'services' },
      { pattern: '{{t:accounting}}', key: 'accounting' },
      { pattern: '{{t:payroll}}', key: 'payroll' },
      { pattern: '{{t:consulting}}', key: 'consulting' },
      { pattern: '{{t:companyFormation}}', key: 'companyFormation' },
      { pattern: '{{t:calculators}}', key: 'calculators' },
      { pattern: '{{t:salaryCalc}}', key: 'salaryCalc' },
      { pattern: '{{t:dividendCalc}}', key: 'dividendCalc' },
      { pattern: '{{t:vatCalc}}', key: 'vatCalc' },
      { pattern: '{{t:profitCalc}}', key: 'profitCalc' },
      { pattern: '{{t:resources}}', key: 'resources' },
      { pattern: '{{t:guides}}', key: 'guides' },
      { pattern: '{{t:industries}}', key: 'industries' },
      { pattern: '{{t:comparisons}}', key: 'comparisons' },
      { pattern: '{{t:faq}}', key: 'faq' },
      { pattern: '{{t:company}}', key: 'company' },
      { pattern: '{{t:aboutUs}}', key: 'aboutUs' },
      { pattern: '{{t:blog}}', key: 'blog' },
      { pattern: '{{t:contact}}', key: 'contact' },
      { pattern: '{{t:privacy}}', key: 'privacy' },
      { pattern: '{{t:registryCode}}', key: 'registryCode' },
      { pattern: '{{t:allRightsReserved}}', key: 'allRightsReserved' },
      { pattern: '{{t:termsOfUse}}', key: 'termsOfUse' },
      { pattern: '{{t:cookiePolicy}}', key: 'cookiePolicy' },
      { pattern: '{{t:backToTop}}', key: 'backToTop' },
      { pattern: '{{t:footerDescription}}', key: 'footerDescription' }
    ];

    // Для каждого плейсхолдера ищем и заменяем во всем документе
    placeholderMappings.forEach(mapping => {
      const replacement = translations[mapping.key]?.[lang] || translations[mapping.key]?.en;
      if (replacement) {
        // Ищем все элементы, которые могут содержать этот плейсхолдер
        const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, a, span, div, button, .footer-title, .footer-links a, .footer-legal p, .footer-description');
        
        elements.forEach(el => {
          if (replaceTextPreservingHtml(el, mapping.pattern, replacement)) {
            console.log(`Replaced ${mapping.pattern} with "${replacement}" in`, el);
          }
        });
        
        // Также проверяем атрибуты
        const elementsWithAttr = document.querySelectorAll('[placeholder*="' + mapping.pattern + '"], [aria-label*="' + mapping.pattern + '"], [title*="' + mapping.pattern + '"]');
        elementsWithAttr.forEach(el => {
          ['placeholder', 'aria-label', 'title'].forEach(attr => {
            if (el.hasAttribute(attr) && el.getAttribute(attr).includes(mapping.pattern)) {
              const newValue = el.getAttribute(attr).replace(new RegExp(mapping.pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement);
              el.setAttribute(attr, newValue);
            }
          });
        });
      }
    });
    
    // Заменяем {{lang}} в ссылках
    const links = document.querySelectorAll('a[href*="{{lang}}"]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        link.setAttribute('href', href.replace(/{{lang}}/g, lang));
      }
    });
    
    console.log('All replacements completed');
  }

  // Запускаем после полной загрузки страницы
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replacePlaceholders);
  } else {
    replacePlaceholders();
  }
  
  // Дополнительные запуски для надежности
  setTimeout(replacePlaceholders, 100);
  setTimeout(replacePlaceholders, 500);
})();