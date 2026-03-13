// calculators.js - Единый файл со всеми калькуляторами
// Обновлено: 2026 год, включая налог на безопасность (Julgeolekumaks)

// Словарь переводов
const translations = {
  // Основные термины
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
  },
  socialTax: {
    en: 'Social tax',
    et: 'Sotsiaalmaks',
    ru: 'Социальный налог'
  },
  employerCosts: {
    en: 'Employer costs',
    et: 'Tööandja kulud',
    ru: 'Расходы работодателя'
  },
  taxableIncome: {
    en: 'Taxable income',
    et: 'Maksustatav tulu',
    ru: 'Налогооблагаемый доход'
  },
  annualMinimum: {
    en: 'Annual minimum',
    et: 'Aastane miinimum',
    ru: 'Годовой минимум'
  },
  selectRate: {
    en: 'Select rate',
    et: 'Vali määr',
    ru: 'Выберите ставку'
  },
  
  // Заголовки секций
  employeeDeductions: {
    en: 'Employee deductions',
    et: 'Töötaja kinnipidamised',
    ru: 'Удержания с работника'
  },
  employerCosts: {
    en: 'Employer costs (additional)',
    et: 'Tööandja kulud (lisaks)',
    ru: 'Расходы работодателя (дополнительно)'
  },
  taxCalculations: {
    en: 'Tax calculations',
    et: 'Maksuarvutused',
    ru: 'Расчет налогов'
  },
  totalDeductions: {
    en: 'Total deductions',
    et: 'Kinnipidamised kokku',
    ru: 'Всего удержаний'
  },
  profitBeforeTax: {
    en: 'Profit before tax',
    et: 'Kasum enne maksustamist',
    ru: 'Прибыль до налогообложения'
  },
  profitAfterTax: {
    en: 'Profit after tax',
    et: 'Kasum pärast maksustamist',
    ru: 'Прибыль после налогов'
  },
  afterSecurityTax: {
    en: 'After security tax',
    et: 'Pärast julgeolekumaksu',
    ru: 'После налога безопасности'
  },
  
  // Сообщения
  enterAmount: {
    en: 'Enter amount',
    et: 'Sisesta summa',
    ru: 'Введите сумму'
  },
  baseAmount: {
    en: 'Base amount',
    et: 'Baassumma',
    ru: 'Базовая сумма'
  },
  totalWithVat: {
    en: 'Total with VAT',
    et: 'Koos käibemaksuga',
    ru: 'С НДС всего'
  },
  
  // Примечания (notes)
  securityTaxNote: {
    en: 'Note: Security tax applies to total company profit, not just dividends',
    et: 'Märkus: Julgeolekumaks kehtib kogu ettevõtte kasumile, mitte ainult dividendidele',
    ru: 'Примечание: Налог на безопасность применяется ко всей прибыли компании, а не только к дивидендам'
  },
  socialTaxNote: {
    en: 'Note: Social tax is calculated on the full income (minimum annual base €',
    et: 'Märkus: Sotsiaalmaks arvutatakse kogu tulult (aastane miinimumbaas €',
    ru: 'Примечание: Социальный налог рассчитывается со всего дохода (минимальная годовая база €'
  },
  socialTaxNoteEnd: {
    en: ')',
    et: ')',
    ru: ')'
  },

  monthlyIncome: {
  en: 'Monthly income',
  et: 'Igakuine sissetulek',
  ru: 'Ежемесячный доход'
},
monthlyTaxFreeAllowance: {
  en: 'Monthly tax-free allowance',
  et: 'Igakuine maksuvaba tulu',
  ru: 'Месячный необлагаемый доход'
},
monthlyTaxableIncome: {
  en: 'Monthly taxable income',
  et: 'Igakuine maksustatav tulu',
  ru: 'Месячный налогооблагаемый доход'
},
afterTaxMonthly: {
  en: 'After tax (monthly)',
  et: 'Pärast makse (kuus)',
  ru: 'После налогов (в месяц)'
},
afterTaxAnnual: {
  en: 'After tax (yearly)',
  et: 'Pärast makse (aastas)',
  ru: 'После налогов (в год)'
},
annualIncome: {
  en: 'Annual income',
  et: 'Aastane sissetulek',
  ru: 'Годовой доход'
},
socialTaxBaseAnnual: {
  en: 'Social tax base (annual)',
  et: 'Sotsiaalmaksu baas (aastas)',
  ru: 'База соцналога (годовая)'
},
annualSocialTax: {
  en: 'Annual social tax',
  et: 'Aastane sotsiaalmaks',
  ru: 'Годовой социальный налог'
},
monthlyTotalDeductions: {
  en: 'Total monthly deductions',
  et: 'Igakuised kinnipidamised kokku',
  ru: 'Всего месячных удержаний'
},
socialTaxMonthly: {
  en: 'Social tax (monthly)',
  et: 'Sotsiaalmaks (kuus)',
  ru: 'Социальный налог (в месяц)'
},
annualSummary: {
  en: 'Annual summary',
  et: 'Aasta kokkuvõte',
  ru: 'Годовой итог'
},
freelancerNote: {
  en: 'Social tax is calculated based on annual income with a minimum annual base. Monthly amount is an estimate.',
  et: 'Sotsiaalmaks arvutatakse aastase tulu alusel, millel on aastane miinimumbaas. Kuu summa on hinnanguline.',
  ru: 'Социальный налог рассчитывается на основе годового дохода с минимальной годовой базой. Сумма за месяц является оценочной.'
}
};

// Кэш для налоговых ставок
let taxRatesCache = null;
let currentPensionRate = 2; // По умолчанию 2%

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
    console.log('✅ Tax rates loaded for 2026');
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

// === ОБЩИЙ КАЛЬКУЛЯТОР ЗАРПЛАТЫ ===
async function calculateSalary(gross, isPensioner = false) {
  if (!taxRatesCache) await loadTaxRates();
  if (!taxRatesCache) return null;

  // Получаем ставки
  const personalIncomeTax = taxRatesCache.personalIncomeTax.rate / 100;
  const unemploymentEmployee = taxRatesCache.unemploymentInsurance.employee / 100;
  const socialTax = taxRatesCache.socialTax.rate / 100;
  const unemploymentEmployer = taxRatesCache.unemploymentInsurance.employer / 100;
  const securityTax = taxRatesCache.securityTax.appliedToPersonalGrossIncome?.rate / 100 || 0;
  
  // Пенсионные накопления (пенсионеры освобождены)
  const pensionRate = isPensioner ? 0 : currentPensionRate / 100;
  
  // Необлагаемый минимум
  const taxFreeAllowance = isPensioner 
    ? taxRatesCache.taxFreeAllowance.pensionerMaxMonthly 
    : taxRatesCache.taxFreeAllowance.maxMonthly;

  // Расчет удержаний с работника
  const taxableIncome = Math.max(0, gross - taxFreeAllowance);
  const incomeTax = taxableIncome * personalIncomeTax;
  const unemployment = gross * unemploymentEmployee;
  const pension = gross * pensionRate;
  const security = gross * securityTax;
  
  const totalDeductions = incomeTax + unemployment + pension + security;
  const net = gross - totalDeductions;

  // Расчет расходов работодателя
  const employerSocialTax = gross * socialTax;
  const employerUnemployment = gross * unemploymentEmployer;
  const totalEmployerCost = gross + employerSocialTax + employerUnemployment;

  return {
    net,
    incomeTax,
    unemployment,
    pension,
    security,
    employerSocialTax,
    employerUnemployment,
    totalEmployerCost,
    taxableIncome,
    taxFreeAllowance
  };
}

// === КАЛЬКУЛЯТОР ЗАРПЛАТЫ (ОСНОВНОЙ) ===
window.salaryCalc = async function() {
  console.log('salaryCalc called');
  const gross = getNumberFromInput('salary');
  
  if (!taxRatesCache) await loadTaxRates();
  if (!taxRatesCache || gross === 0) {
    document.getElementById('salaryResult').innerHTML = t('enterAmount');
    return;
  }

  const result = await calculateSalary(gross, false);
  
  if (result) {
    document.getElementById('salaryResult').innerHTML = `
      <div class="calc-result-detailed">
        <div class="result-main">
          <strong>${t('net')}: €${formatMoney(result.net)}</strong>
        </div>
        <div class="result-details">
          <h4>${t('employeeDeductions')}:</h4>
          <table class="calc-table">
            <tr><td>${t('incomeTax')} (22%):</td><td class="amount">€${formatMoney(result.incomeTax)}</td></tr>
            <tr><td>${t('unemployment')} (1.6%):</td><td class="amount">€${formatMoney(result.unemployment)}</td></tr>
            <tr><td>${t('pension')} (${currentPensionRate}%):</td><td class="amount">€${formatMoney(result.pension)}</td></tr>
            <tr><td>${t('securityTax')} (2%):</td><td class="amount">€${formatMoney(result.security)}</td></tr>
            <tr class="total"><td>${t('totalDeductions')}:</td><td class="amount">€${formatMoney(result.incomeTax + result.unemployment + result.pension + result.security)}</td></tr>
          </table>
          
          <h4>${t('employerCosts')}:</h4>
          <table class="calc-table">
            <tr><td>${t('socialTax')} (33%):</td><td class="amount">€${formatMoney(result.employerSocialTax)}</td></tr>
            <tr><td>${t('unemployment')} (0.8%):</td><td class="amount">€${formatMoney(result.employerUnemployment)}</td></tr>
          </table>
        </div>
      </div>
    `;
  }
};

// === КАЛЬКУЛЯТОР ЗАРПЛАТЫ (HERO) ===
window.salaryCalcHero = async function() {
  console.log('salaryCalcHero called');
  const gross = getNumberFromInput('salaryHero');
  
  if (!taxRatesCache) await loadTaxRates();
  if (!taxRatesCache || gross === 0) {
    document.getElementById('salaryHeroResult').innerHTML = t('enterAmount');
    return;
  }

  const result = await calculateSalary(gross, false);
  
  if (result) {
    document.getElementById('salaryHeroResult').innerHTML = `
      <div class="calc-result-detailed">
        <div class="result-main">
          <strong>${t('net')}: €${formatMoney(result.net)}</strong>
        </div>
        <div class="result-details">
          <h4>${t('employeeDeductions')}:</h4>
          <table class="calc-table">
            <tr><td>${t('incomeTax')} (22%):</td><td class="amount">€${formatMoney(result.incomeTax)}</td></tr>
            <tr><td>${t('unemployment')} (1.6%):</td><td class="amount">€${formatMoney(result.unemployment)}</td></tr>
            <tr><td>${t('pension')} (${currentPensionRate}%):</td><td class="amount">€${formatMoney(result.pension)}</td></tr>
            <tr><td>${t('securityTax')} (2%):</td><td class="amount">€${formatMoney(result.security)}</td></tr>
            <tr class="total"><td>${t('totalDeductions')}:</td><td class="amount">€${formatMoney(result.incomeTax + result.unemployment + result.pension + result.security)}</td></tr>
          </table>
        </div>
      </div>
    `;
  }
};

// === КАЛЬКУЛЯТОР ЗАРПЛАТЫ (ДЛЯ ПЕНСИОНЕРОВ) ===
window.salaryPensionerCalc = async function() {
  console.log('salaryPensionerCalc called');
  const gross = getNumberFromInput('salaryPensioner');
  
  if (!taxRatesCache) await loadTaxRates();
  if (!taxRatesCache || gross === 0) {
    document.getElementById('salaryPensionerResult').innerHTML = t('enterAmount');
    return;
  }

  const result = await calculateSalary(gross, true);
  
  if (result) {
    document.getElementById('salaryPensionerResult').innerHTML = `
      <div class="calc-result-detailed">
        <div class="result-main">
          <strong>${t('net')}: €${formatMoney(result.net)}</strong>
        </div>
        <div class="result-details">
          <h4>${t('employeeDeductions')}:</h4>
          <table class="calc-table">
            <tr><td>${t('incomeTax')} (22%):</td><td class="amount">€${formatMoney(result.incomeTax)}</td></tr>
            <tr><td>${t('unemployment')} (1.6%):</td><td class="amount">€${formatMoney(result.unemployment)}</td></tr>
            <tr><td>${t('pension')} (0%):</td><td class="amount">€0.00</td></tr>
            <tr><td>${t('securityTax')} (2%):</td><td class="amount">€${formatMoney(result.security)}</td></tr>
            <tr class="total"><td>${t('totalDeductions')}:</td><td class="amount">€${formatMoney(result.incomeTax + result.unemployment + result.security)}</td></tr>
          </table>
          
          <h4>${t('employerCosts')}:</h4>
          <table class="calc-table">
            <tr><td>${t('socialTax')} (33%):</td><td class="amount">€${formatMoney(result.employerSocialTax)}</td></tr>
            <tr><td>${t('unemployment')} (0.8%):</td><td class="amount">€${formatMoney(result.employerUnemployment)}</td></tr>
          </table>
        </div>
      </div>
    `;
  }
};

// === УСТАНОВКА СТАВКИ ПЕНСИОННЫХ НАКОПЛЕНИЙ ===
window.setPensionRate = function(rate) {
  currentPensionRate = parseInt(rate);
  console.log(`Pension rate set to ${currentPensionRate}%`);
  // Пересчитываем результаты, если поля не пустые
  if (document.getElementById('salary')?.value) {
    salaryCalc();
  }
  if (document.getElementById('salaryHero')?.value) {
    salaryCalcHero();
  }
  if (document.getElementById('salaryPensioner')?.value) {
    salaryPensionerCalc();
  }
};

// === КАЛЬКУЛЯТОР ДИВИДЕНДОВ ===
window.dividendCalc = async function() {
  console.log('dividendCalc called');
  const netAmount = getNumberFromInput('dividend');
  
  if (!taxRatesCache) await loadTaxRates();
  if (!taxRatesCache || netAmount === 0) {
    document.getElementById('dividendResult').innerHTML = t('enterAmount');
    return;
  }
  
  const dividendTaxRate = taxRatesCache.corporateIncomeTax.rate / 100;
  const securityTaxRate = taxRatesCache.securityTax.appliedToCorporateProfit?.rate / 100 || 0;
  
  // Расчет налога на дивиденды (22/78 от нетто)
  const grossAmount = netAmount / (1 - dividendTaxRate);
  const dividendTax = grossAmount * dividendTaxRate;
  
  // Налог на безопасность рассчитывается от общей прибыли компании,
  // но для простоты показываем потенциальную нагрузку
  const estimatedSecurityTax = grossAmount * securityTaxRate;
  
  document.getElementById('dividendResult').innerHTML = `
    <div class="calc-result-detailed">
      <div class="result-main">
        <strong>${t('dividendTax')}: €${formatMoney(dividendTax)}</strong>
      </div>
      <div class="result-details">
        <table class="calc-table">
          <tr><td>${t('grossAmount')}:</td><td class="amount">€${formatMoney(grossAmount)}</td></tr>
          <tr><td>${t('netAmount')}:</td><td class="amount">€${formatMoney(netAmount)}</td></tr>
          ${estimatedSecurityTax > 0 ? `
            <tr><td>${t('securityTax')} (2%):</td><td class="amount">€${formatMoney(estimatedSecurityTax)}</td></tr>
            <tr><td colspan="2"><small>${t('securityTaxNote')}</small></td></tr>
          ` : ''}
        </table>
      </div>
    </div>
  `;
};

// === КАЛЬКУЛЯТОР ПРИБЫЛИ ПРЕДПРИЯТИЯ ===
window.corporateProfitCalc = async function() {
  console.log('corporateProfitCalc called');
  const profit = getNumberFromInput('corporateProfit');
  
  if (!taxRatesCache) await loadTaxRates();
  if (!taxRatesCache || profit === 0) {
    document.getElementById('corporateProfitResult').innerHTML = t('enterAmount');
    return;
  }
  
  const securityTaxRate = taxRatesCache.securityTax.appliedToCorporateProfit?.rate / 100 || 0;
  const securityTax = profit * securityTaxRate;
  const afterTax = profit - securityTax;
  
  document.getElementById('corporateProfitResult').innerHTML = `
    <div class="calc-result-detailed">
      <div class="result-main">
        <strong>${t('afterSecurityTax')}: €${formatMoney(afterTax)}</strong>
      </div>
      <div class="result-details">
        <table class="calc-table">
          <tr><td>${t('profitBeforeTax')}:</td><td class="amount">€${formatMoney(profit)}</td></tr>
          <tr><td>${t('securityTax')} (2%):</td><td class="amount">€${formatMoney(securityTax)}</td></tr>
          <tr><td>${t('profitAfterTax')}:</td><td class="amount">€${formatMoney(afterTax)}</td></tr>
        </table>
      </div>
    </div>
  `;
};

// === КАЛЬКУЛЯТОР VAT ===
window.vatCalc = async function() {
  console.log('vatCalc called');
  const amount = getNumberFromInput('vat');
  const operation = document.querySelector('input[name="vatOperation"]:checked')?.value || 'add';
  
  if (!taxRatesCache) await loadTaxRates();
  if (!taxRatesCache || amount === 0) {
    document.getElementById('vatResult').innerHTML = t('enterAmount');
    return;
  }
  
  const vatRate = taxRatesCache.vat.standard / 100;
  
  let result;
  if (operation === 'add') {
    const vat = amount * vatRate;
    const withVat = amount + vat;
    result = {
      type: 'add',
      vat,
      withVat
    };
  } else {
    const base = amount / (1 + vatRate);
    const vat = amount - base;
    result = {
      type: 'remove',
      vat,
      base
    };
  }
  
  document.getElementById('vatResult').innerHTML = `
    <div class="calc-result-detailed">
      <div class="result-main">
        <strong>${t('vat')}: €${formatMoney(result.vat)}</strong>
      </div>
      <div class="result-details">
        <table class="calc-table">
          ${result.type === 'add' ? `
            <tr><td>${t('baseAmount')}:</td><td class="amount">€${formatMoney(amount)}</td></tr>
            <tr><td>${t('vat')} (24%):</td><td class="amount">€${formatMoney(result.vat)}</td></tr>
            <tr><td>${t('totalWithVat')}:</td><td class="amount">€${formatMoney(result.withVat)}</td></tr>
          ` : `
            <tr><td>${t('totalWithVat')}:</td><td class="amount">€${formatMoney(amount)}</td></tr>
            <tr><td>${t('vat')} (24%):</td><td class="amount">€${formatMoney(result.vat)}</td></tr>
            <tr><td>${t('baseAmount')}:</td><td class="amount">€${formatMoney(result.base)}</td></tr>
          `}
        </table>
      </div>
    </div>
  `;
};

// === КАЛЬКУЛЯТОР ПОДОХОДНОГО НАЛОГА ===
window.incomeCalc = async function() {
  console.log('incomeCalc called');
  const income = getNumberFromInput('income');
  const isPensioner = document.getElementById('incomeIsPensioner')?.checked || false;
  
  if (!taxRatesCache) await loadTaxRates();
  if (!taxRatesCache || income === 0) {
    document.getElementById('incomeResult').innerHTML = t('enterAmount');
    return;
  }
  
  const taxRate = taxRatesCache.personalIncomeTax.rate / 100;
  const securityTaxRate = taxRatesCache.securityTax.appliedToPersonalGrossIncome?.rate / 100 || 0;
  
  const taxFreeAllowance = isPensioner 
    ? taxRatesCache.taxFreeAllowance.pensionerMaxMonthly 
    : taxRatesCache.taxFreeAllowance.maxMonthly;
  
  const taxableIncome = Math.max(0, income - taxFreeAllowance);
  const incomeTax = taxableIncome * taxRate;
  const securityTax = income * securityTaxRate;
  const totalTax = incomeTax + securityTax;
  const afterTax = income - totalTax;
  
  document.getElementById('incomeResult').innerHTML = `
    <div class="calc-result-detailed">
      <div class="result-main">
        <strong>${t('afterTax')}: €${formatMoney(afterTax)}</strong>
      </div>
      <div class="result-details">
        <table class="calc-table">
          <tr><td>${t('monthlyIncome')}:</td><td class="amount">€${formatMoney(income)}</td></tr>
          <tr><td>${t('monthlyTaxFreeAllowance')}:</td><td class="amount">€${formatMoney(taxFreeAllowance)}</td></tr>
          <tr><td>${t('monthlyTaxableIncome')}:</td><td class="amount">€${formatMoney(taxableIncome)}</td></tr>
          <tr><td>${t('incomeTax')} (22%):</td><td class="amount">€${formatMoney(incomeTax)}</td></tr>
          <tr><td>${t('securityTax')} (2%):</td><td class="amount">€${formatMoney(securityTax)}</td></tr>
          <tr class="total"><td>${t('totalDeductions')}:</td><td class="amount">€${formatMoney(totalTax)}</td></tr>
        </table>
      </div>
    </div>
  `;
};

// === КАЛЬКУЛЯТОР ФРИЛАНСЕРА ===
window.freelanceCalc = async function() {
  console.log('freelanceCalc called');
  const monthlyIncome = getNumberFromInput('freelance');
  
  if (!taxRatesCache) await loadTaxRates();
  if (!taxRatesCache || monthlyIncome === 0) {
    document.getElementById('freelanceResult').innerHTML = t('enterAmount');
    return;
  }
  
  // Годовой доход (предполагаем, что ввели месячный)
  const annualIncome = monthlyIncome * 12;
  
  const personalTaxRate = taxRatesCache.personalIncomeTax.rate / 100;
  const socialTaxRate = taxRatesCache.socialTax.rate / 100;
  const securityTaxRate = taxRatesCache.securityTax.appliedToPersonalGrossIncome?.rate / 100 || 0;
  const monthlyTaxFreeAllowance = taxRatesCache.taxFreeAllowance.maxMonthly;
  
  // Месячный налогооблагаемый доход
  const monthlyTaxableIncome = Math.max(0, monthlyIncome - monthlyTaxFreeAllowance);
  const monthlyIncomeTax = monthlyTaxableIncome * personalTaxRate;
  const monthlySecurityTax = monthlyIncome * securityTaxRate;
  
  // Социальный налог (годовой расчет)
  const annualSocialTaxBase = Math.max(annualIncome, taxRatesCache.socialTax.annualMinimum || 0);
  const annualSocialTax = annualSocialTaxBase * socialTaxRate;
  const monthlySocialTax = annualSocialTax / 12;
  
  // Пенсионные накопления (опционально)
  const monthlyPensionContribution = monthlyIncome * (currentPensionRate / 100);
  
  // Итоги за месяц
  const monthlyTotalTax = monthlyIncomeTax + monthlySecurityTax + monthlySocialTax;
  const monthlyAfterTax = monthlyIncome - monthlyTotalTax - monthlyPensionContribution;
  
  // Итоги за год
  const annualTotalTax = monthlyTotalTax * 12;
  const annualAfterTax = monthlyAfterTax * 12;
  
  document.getElementById('freelanceResult').innerHTML = `
    <div class="calc-result-detailed">
      <div class="result-main">
        <strong>${t('afterTaxMonthly')}: €${formatMoney(monthlyAfterTax)}</strong><br>
        <small>${t('afterTaxAnnual')}: €${formatMoney(annualAfterTax)}</small>
      </div>
      <div class="result-details">
        <h4>${t('taxCalculations')}:</h4>
        <table class="calc-table">
          <tr><td>${t('monthlyIncome')}:</td><td class="amount">€${formatMoney(monthlyIncome)}</td></tr>
          <tr><td>${t('monthlyTaxFreeAllowance')}:</td><td class="amount">€${formatMoney(monthlyTaxFreeAllowance)}</td></tr>
          <tr><td>${t('monthlyTaxableIncome')}:</td><td class="amount">€${formatMoney(monthlyTaxableIncome)}</td></tr>
          <tr><td>${t('incomeTax')} (22%):</td><td class="amount">€${formatMoney(monthlyIncomeTax)}</td></tr>
          <tr><td>${t('securityTax')} (2%):</td><td class="amount">€${formatMoney(monthlySecurityTax)}</td></tr>
          <tr><td>${t('socialTaxMonthly')} (33%):</td><td class="amount">€${formatMoney(monthlySocialTax)}</td></tr>
          ${currentPensionRate > 0 ? `
            <tr><td>${t('pension')} (${currentPensionRate}%):</td><td class="amount">€${formatMoney(monthlyPensionContribution)}</td></tr>
          ` : ''}
          <tr class="total"><td>${t('monthlyTotalDeductions')}:</td><td class="amount">€${formatMoney(monthlyTotalTax + monthlyPensionContribution)}</td></tr>
        </table>
        
        <h4>${t('annualSummary')}:</h4>
        <table class="calc-table">
          <tr><td>${t('annualIncome')}:</td><td class="amount">€${formatMoney(annualIncome)}</td></tr>
          <tr><td>${t('socialTaxBaseAnnual')}:</td><td class="amount">€${formatMoney(annualSocialTaxBase)}</td></tr>
          <tr><td>${t('annualSocialTax')} (33%):</td><td class="amount">€${formatMoney(annualSocialTax)}</td></tr>
        </table>
        
        <p class="note"><small>${t('socialTaxNote')} €${taxRatesCache.socialTax.annualMinimum || 6000}${t('socialTaxNoteEnd')}</small></p>
        <p class="note"><small>${t('freelancerNote')}</small></p>
      </div>
    </div>
  `;
};

// Загружаем ставки при старте
loadTaxRates();