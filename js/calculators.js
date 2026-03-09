// calculators.js - Единый файл со всеми калькуляторами

// Словарь переводов
const translations = {
  tax: {
    en: 'Tax',
    et: 'Maks',
    ru: 'Налог'
  },
  fromGross: {
    en: 'from gross',
    et: 'brutost',
    ru: 'с брутто'
  },
  net: {
    en: 'Net',
    et: 'Neto',
    ru: 'На руки'
  },
  afterTax: {
    en: 'After tax',
    et: 'Pärast maksustamist',
    ru: 'После налогов'
  },
  vat: {
    en: 'VAT',
    et: 'Käibemaks',
    ru: 'НДС'
  },
  incomeTax: {
    en: 'Income tax',
    et: 'Tulumaks',
    ru: 'Подоходный налог'
  },
  pension: {
    en: 'Pension',
    et: 'Pension',
    ru: 'Пенсионные'
  },
  unemployment: {
    en: 'Unemployment',
    et: 'Töötuskindlustus',
    ru: 'Безработица'
  },
  securityTax: {
    en: 'Security tax',
    et: 'Julgeolekumaks',
    ru: 'Налог безопасности'
  },
  dividendTax: {
    en: 'Dividend tax',
    et: 'Dividendimaks',
    ru: 'Налог на дивиденды'
  },
  grossAmount: {
    en: 'Gross amount',
    et: 'Brutosumma',
    ru: 'Сумма брутто'
  },
  netAmount: {
    en: 'Net amount',
    et: 'Netosumma',
    ru: 'Сумма нетто'
  }
};

// Кэш для налоговых ставок
let taxRatesCache = null;

function getCurrentLanguage() {
  const path = window.location.pathname;
  if (path.includes('/en/')) return 'en';
  if (path.includes('/et/')) return 'et';
  if (path.includes('/ru/')) return 'ru';
  
  const htmlLang = document.documentElement.lang;
  if (htmlLang && ['en', 'et', 'ru'].includes(htmlLang)) return htmlLang;
  
  return 'en';
}

function t(key) {
  const lang = getCurrentLanguage();
  return translations[key]?.[lang] || translations[key]?.['en'] || key;
}

// Загрузка налоговых ставок
async function loadTaxRates() {
  if (taxRatesCache) return taxRatesCache;
  
  try {
    const response = await fetch('/data/tax-rates.json');
    const data = await response.json();
    taxRatesCache = data.rates;
    console.log('✅ Tax rates loaded');
    return taxRatesCache;
  } catch (error) {
    console.error('❌ Failed to load tax rates:', error);
    return null;
  }
}

// Функция для безопасного получения числа из input
function getNumberFromInput(id) {
  const input = document.getElementById(id);
  if (!input) return 0;
  
  let value = parseFloat(input.value.replace(',', '.'));
  if (isNaN(value) || value < 0) value = 0;
  return value;
}

// Форматирование чисел
function formatMoney(amount) {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// === КАЛЬКУЛЯТОР ЗАРПЛАТЫ ===
window.salaryCalcHero = async function() {
  console.log('salaryCalcHero called');
  const gross = getNumberFromInput('salaryHero');
  
  if (!taxRatesCache) await loadTaxRates();
  if (!taxRatesCache || gross === 0) {
    document.getElementById('salaryHeroResult').innerHTML = 'Enter amount';
    return;
  }
  
  // Получаем ставки
  const personalIncomeTax = taxRatesCache.personalIncomeTax.rate / 100;
  const unemploymentEmployee = taxRatesCache.unemploymentInsurance.employee / 100;
  
  const pensionRate = Array.isArray(taxRatesCache.pensionContribution.rate) 
    ? taxRatesCache.pensionContribution.rate[0] / 100
    : taxRatesCache.pensionContribution.rate / 100;
  
  const securityTax = taxRatesCache.securityTax.appliedToPersonalGrossIncome?.rate / 100 || 0;
  const taxFreeAllowance = taxRatesCache.taxFreeAllowance.maxMonthly;
  
  // Расчет налогов
  const taxableIncome = Math.max(0, gross - taxFreeAllowance);
  const incomeTax = taxableIncome * personalIncomeTax;
  const unemployment = gross * unemploymentEmployee;
  const pension = gross * pensionRate;
  const security = gross * securityTax;
  
  const totalDeductions = incomeTax + unemployment + pension + security;
  const net = gross - totalDeductions;
  
  const resultEl = document.getElementById('salaryHeroResult');
  if (resultEl) {
    resultEl.innerHTML = `
      <div class="calc-result-detailed">
        <strong>${t('net')}: €${formatMoney(net)}</strong><br>
        <small>
          ${t('incomeTax')}: €${formatMoney(incomeTax)}<br>
          ${t('unemployment')}: €${formatMoney(unemployment)}<br>
          ${t('pension')}: €${formatMoney(pension)}<br>
          ${t('securityTax')}: €${formatMoney(security)}
        </small>
      </div>
    `;
  }
};

window.salaryCalc = async function() {
  console.log('salaryCalc called');
  const gross = getNumberFromInput('salary');
  
  if (!taxRatesCache) await loadTaxRates();
  if (!taxRatesCache || gross === 0) {
    document.getElementById('salaryResult').innerHTML = 'Enter amount';
    return;
  }
  
  const personalIncomeTax = taxRatesCache.personalIncomeTax.rate / 100;
  const unemploymentEmployee = taxRatesCache.unemploymentInsurance.employee / 100;
  
  const pensionRate = Array.isArray(taxRatesCache.pensionContribution.rate) 
    ? taxRatesCache.pensionContribution.rate[0] / 100
    : taxRatesCache.pensionContribution.rate / 100;
  
  const securityTax = taxRatesCache.securityTax.appliedToPersonalGrossIncome?.rate / 100 || 0;
  const taxFreeAllowance = taxRatesCache.taxFreeAllowance.maxMonthly;
  
  const taxableIncome = Math.max(0, gross - taxFreeAllowance);
  const incomeTax = taxableIncome * personalIncomeTax;
  const unemployment = gross * unemploymentEmployee;
  const pension = gross * pensionRate;
  const security = gross * securityTax;
  
  const totalDeductions = incomeTax + unemployment + pension + security;
  const net = gross - totalDeductions;
  
  const resultEl = document.getElementById('salaryResult');
  if (resultEl) {
    resultEl.innerHTML = `
      <div class="calc-result-detailed">
        <strong>${t('net')}: €${formatMoney(net)}</strong><br>
        <small>
          ${t('incomeTax')}: €${formatMoney(incomeTax)}<br>
          ${t('unemployment')}: €${formatMoney(unemployment)}<br>
          ${t('pension')}: €${formatMoney(pension)}<br>
          ${t('securityTax')}: €${formatMoney(security)}
        </small>
      </div>
    `;
  }
};

// === КАЛЬКУЛЯТОР ДИВИДЕНДОВ ===
window.dividendCalc = async function() {
  console.log('dividendCalc called');
  const netAmount = getNumberFromInput('dividend');
  
  if (!taxRatesCache) await loadTaxRates();
  if (!taxRatesCache || netAmount === 0) {
    document.getElementById('dividendResult').innerHTML = 'Enter amount';
    return;
  }
  
  const taxRate = taxRatesCache.corporateIncomeTax.rate / 100;
  const grossAmount = netAmount / (1 - taxRate);
  const taxAmount = grossAmount * taxRate;
  
  let securityTax = 0;
  if (taxRatesCache.securityTax.appliedToCorporateProfit?.rate) {
    securityTax = grossAmount * (taxRatesCache.securityTax.appliedToCorporateProfit.rate / 100);
  }
  
  const resultEl = document.getElementById('dividendResult');
  if (resultEl) {
    resultEl.innerHTML = `
      <div class="calc-result-detailed">
        <strong>${t('dividendTax')}: €${formatMoney(taxAmount)}</strong><br>
        <small>
          ${t('grossAmount')}: €${formatMoney(grossAmount)}<br>
          ${t('netAmount')}: €${formatMoney(netAmount)}<br>
          ${securityTax > 0 ? `${t('securityTax')}: €${formatMoney(securityTax)}` : ''}
        </small>
      </div>
    `;
  }
};

// === КАЛЬКУЛЯТОР VAT ===
window.vatCalc = async function() {
  console.log('vatCalc called');
  const amount = getNumberFromInput('vat');
  
  if (!taxRatesCache) await loadTaxRates();
  if (!taxRatesCache || amount === 0) {
    document.getElementById('vatResult').innerHTML = 'Enter amount';
    return;
  }
  
  const vatRate = taxRatesCache.vat.standard / 100;
  const vat = amount * vatRate;
  const withVat = amount + vat;
  
  const resultEl = document.getElementById('vatResult');
  if (resultEl) {
    resultEl.innerHTML = `
      <div class="calc-result-detailed">
        <strong>${t('vat')}: €${formatMoney(vat)}</strong><br>
        <small>
          Total with VAT: €${formatMoney(withVat)}
        </small>
      </div>
    `;
  }
};

// === КАЛЬКУЛЯТОР INCOME TAX ===
window.incomeCalc = async function() {
  console.log('incomeCalc called');
  const income = getNumberFromInput('income');
  
  if (!taxRatesCache) await loadTaxRates();
  if (!taxRatesCache || income === 0) {
    document.getElementById('incomeResult').innerHTML = 'Enter amount';
    return;
  }
  
  const taxRate = taxRatesCache.personalIncomeTax.rate / 100;
  const taxFreeAllowance = taxRatesCache.taxFreeAllowance.maxMonthly;
  
  const taxableIncome = Math.max(0, income - taxFreeAllowance);
  const tax = taxableIncome * taxRate;
  
  const resultEl = document.getElementById('incomeResult');
  if (resultEl) {
    resultEl.innerHTML = `
      <div class="calc-result-detailed">
        <strong>${t('tax')}: €${formatMoney(tax)}</strong><br>
        <small>
          Taxable amount: €${formatMoney(taxableIncome)}
        </small>
      </div>
    `;
  }
};

// === КАЛЬКУЛЯТОР ФРИЛАНСЕРА ===
window.freelanceCalc = async function() {
  console.log('freelanceCalc called');
  const income = getNumberFromInput('freelance');
  
  if (!taxRatesCache) await loadTaxRates();
  if (!taxRatesCache || income === 0) {
    document.getElementById('freelanceResult').innerHTML = 'Enter amount';
    return;
  }
  
  const personalTaxRate = taxRatesCache.personalIncomeTax.rate / 100;
  const socialTaxRate = taxRatesCache.socialTax.rate / 100;
  const taxFreeAllowance = taxRatesCache.taxFreeAllowance.maxMonthly;
  
  const taxableIncome = Math.max(0, income - taxFreeAllowance);
  const incomeTax = taxableIncome * personalTaxRate;
  const socialTax = income * (socialTaxRate * 0.7);
  
  const afterTax = income - incomeTax - socialTax;
  
  const resultEl = document.getElementById('freelanceResult');
  if (resultEl) {
    resultEl.innerHTML = `
      <div class="calc-result-detailed">
        <strong>${t('afterTax')}: €${formatMoney(afterTax)}</strong><br>
        <small>
          ${t('incomeTax')}: €${formatMoney(incomeTax)}<br>
          Social tax: €${formatMoney(socialTax)}
        </small>
      </div>
    `;
  }
};

// Загружаем ставки при старте
loadTaxRates();