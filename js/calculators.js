// calculators.js - Единый файл со всеми калькуляторами

// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  console.log('Calculators.js loaded'); // Для отладки
  
  // Назначаем обработчики для всех калькуляторов
  setupCalculators();
});

function setupCalculators() {
  // Калькулятор зарплаты в hero
  const salaryHeroBtn = document.querySelector('.hero-right button[onclick="salaryCalcHero()"]');
  if (salaryHeroBtn) {
    salaryHeroBtn.onclick = function(e) {
      e.preventDefault();
      salaryCalcHero();
      return false;
    };
  }
  
  // Калькулятор зарплаты в сетке
  const salaryBtn = document.querySelector('.calculator-grid button[onclick="salaryCalc()"]');
  if (salaryBtn) {
    salaryBtn.onclick = function(e) {
      e.preventDefault();
      salaryCalc();
      return false;
    };
  }
  
  // Калькулятор дивидендов
  const dividendBtn = document.querySelector('.calculator-grid button[onclick="dividendCalc()"]');
  if (dividendBtn) {
    dividendBtn.onclick = function(e) {
      e.preventDefault();
      dividendCalc();
      return false;
    };
  }
  
  // Калькулятор VAT
  const vatBtn = document.querySelector('.calculator-grid button[onclick="vatCalc()"]');
  if (vatBtn) {
    vatBtn.onclick = function(e) {
      e.preventDefault();
      vatCalc();
      return false;
    };
  }
  
  // Калькулятор income tax
  const incomeBtn = document.querySelector('.calculator-grid button[onclick="incomeCalc()"]');
  if (incomeBtn) {
    incomeBtn.onclick = function(e) {
      e.preventDefault();
      incomeCalc();
      return false;
    };
  }
  
  // Калькулятор фрилансера
  const freelanceBtn = document.querySelector('.calculator-grid button[onclick="freelanceCalc()"]');
  if (freelanceBtn) {
    freelanceBtn.onclick = function(e) {
      e.preventDefault();
      freelanceCalc();
      return false;
    };
  }
}

// Функция для безопасного получения числа из input
function getNumberFromInput(id) {
  const input = document.getElementById(id);
  if (!input) return 0;
  
  let value = parseFloat(input.value);
  if (isNaN(value) || value < 0) value = 0;
  return value;
}

// Калькулятор зарплаты в hero
function salaryCalcHero() {
  console.log('salaryCalcHero called'); // Для отладки
  const gross = getNumberFromInput('salaryHero');
  
  const tax = gross * 0.2;
  const pension = gross * 0.02;
  const unemployment = gross * 0.016;
  const net = gross - tax - pension - unemployment;
  
  const resultEl = document.getElementById('salaryHeroResult');
  if (resultEl) {
    resultEl.innerText = 'Net: ' + Math.round(net) + ' €';
    resultEl.style.display = 'block';
  }
}

// Калькулятор зарплаты в сетке
function salaryCalc() {
  console.log('salaryCalc called'); // Для отладки
  const gross = getNumberFromInput('salary');
  
  const tax = gross * 0.2;
  const pension = gross * 0.02;
  const unemployment = gross * 0.016;
  const net = gross - tax - pension - unemployment;
  
  const resultEl = document.getElementById('salaryResult');
  if (resultEl) {
    resultEl.innerText = 'Net: ' + Math.round(net) + ' €';
    resultEl.style.display = 'block';
  }
}

// Калькулятор дивидендов
function dividendCalc() {
  console.log('dividendCalc called'); // Для отладки
  const dividend = getNumberFromInput('dividend');
  
  const tax = dividend * 0.2;
  
  const resultEl = document.getElementById('dividendResult');
  if (resultEl) {
    resultEl.innerText = 'Tax: ' + Math.round(tax) + ' €';
    resultEl.style.display = 'block';
  }
}

// Калькулятор VAT
function vatCalc() {
  console.log('vatCalc called'); // Для отладки
  const amount = getNumberFromInput('vat');
  
  const vat = amount * 0.22;
  
  const resultEl = document.getElementById('vatResult');
  if (resultEl) {
    resultEl.innerText = 'VAT: ' + Math.round(vat) + ' €';
    resultEl.style.display = 'block';
  }
}

// Калькулятор income tax
function incomeCalc() {
  console.log('incomeCalc called'); // Для отладки
  const income = getNumberFromInput('income');
  
  const tax = income * 0.2;
  
  const resultEl = document.getElementById('incomeResult');
  if (resultEl) {
    resultEl.innerText = 'Tax: ' + Math.round(tax) + ' €';
    resultEl.style.display = 'block';
  }
}

// Калькулятор фрилансера
function freelanceCalc() {
  console.log('freelanceCalc called'); // Для отладки
  const freelance = getNumberFromInput('freelance');
  
  const afterTax = freelance * 0.78;
  
  const resultEl = document.getElementById('freelanceResult');
  if (resultEl) {
    resultEl.innerText = 'After tax: ' + Math.round(afterTax) + ' €';
    resultEl.style.display = 'block';
  }
}

// Добавляем обработчики для input, чтобы считать при нажатии Enter
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.calculator-grid input, #salaryHero');
  
  inputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        
        // Определяем, какую функцию вызвать
        if (this.id === 'salaryHero') {
          salaryCalcHero();
        } else if (this.id === 'salary') {
          salaryCalc();
        } else if (this.id === 'dividend') {
          dividendCalc();
        } else if (this.id === 'vat') {
          vatCalc();
        } else if (this.id === 'income') {
          incomeCalc();
        } else if (this.id === 'freelance') {
          freelanceCalc();
        }
      }
    });
  });
});