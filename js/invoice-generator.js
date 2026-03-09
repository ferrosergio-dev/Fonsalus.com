// js/invoice-generator.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('invoiceForm');
    if (!form) return;

    // Элементы формы
    const sellerName = document.getElementById('sellerName');
    const sellerRegCode = document.getElementById('sellerRegCode');
    const sellerVat = document.getElementById('sellerVat');
    const sellerAddress = document.getElementById('sellerAddress');
    
    const buyerName = document.getElementById('buyerName');
    const buyerRegCode = document.getElementById('buyerRegCode');
    const buyerVat = document.getElementById('buyerVat');
    const buyerAddress = document.getElementById('buyerAddress');
    
    const invoiceDate = document.getElementById('invoiceDate');
    const dueDate = document.getElementById('dueDate');
    const invoiceNumber = document.getElementById('invoiceNumber');
    
    const itemsTable = document.getElementById('itemsTable');
    const addItemBtn = document.getElementById('addItem');
    const subtotalSpan = document.getElementById('subtotal');
    const vatSpan = document.getElementById('vat');
    const totalSpan = document.getElementById('total');
    
    const generateBtn = document.getElementById('generateInvoice');
    const previewDiv = document.getElementById('preview');

    // Установка сегодняшней даты по умолчанию
    if (invoiceDate) {
        const today = new Date().toISOString().split('T')[0];
        invoiceDate.value = today;
        
        // Дата оплаты через 14 дней
        const due = new Date();
        due.setDate(due.getDate() + 14);
        if (dueDate) dueDate.value = due.toISOString().split('T')[0];
    }

    // Номер счета по умолчанию
    if (invoiceNumber) {
        const year = new Date().getFullYear();
        const month = String(new Date().getMonth() + 1).padStart(2, '0');
        invoiceNumber.value = `INV-${year}${month}-001`;
    }

    // Добавление позиции в счет
    if (addItemBtn) {
        addItemBtn.addEventListener('click', addItem);
    }

    function addItem() {
        const tbody = itemsTable.querySelector('tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="text" class="item-name" placeholder="Service/Product" value="Consulting"></td>
            <td><input type="number" class="item-quantity" value="1" min="1"></td>
            <td><input type="text" class="item-unit" value="hour"></td>
            <td><input type="number" class="item-price" value="50" min="0" step="0.01"></td>
            <td><input type="number" class="item-vat" value="22" min="0" max="100"></td>
            <td class="item-total">€0.00</td>
            <td><button type="button" class="remove-item btn-small">✕</button></td>
        `;
        tbody.appendChild(newRow);
        
        // Добавляем обработчики
        newRow.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', calculateTotals);
        });
        newRow.querySelector('.remove-item').addEventListener('click', function() {
            newRow.remove();
            calculateTotals();
        });
        
        calculateTotals();
    }

    // Расчет итогов
    function calculateTotals() {
        const rows = itemsTable.querySelectorAll('tbody tr');
        let subtotal = 0;
        let vatTotal = 0;
        
        rows.forEach(row => {
            const name = row.querySelector('.item-name')?.value || '';
            const quantity = parseFloat(row.querySelector('.item-quantity')?.value) || 0;
            const price = parseFloat(row.querySelector('.item-price')?.value) || 0;
            const vatRate = parseFloat(row.querySelector('.item-vat')?.value) || 0;
            
            const lineTotal = quantity * price;
            const lineVat = lineTotal * (vatRate / 100);
            
            subtotal += lineTotal;
            vatTotal += lineVat;
            
            const totalCell = row.querySelector('.item-total');
            if (totalCell) {
                totalCell.textContent = `€${(lineTotal + lineVat).toFixed(2)}`;
            }
        });
        
        const total = subtotal + vatTotal;
        
        if (subtotalSpan) subtotalSpan.textContent = `€${subtotal.toFixed(2)}`;
        if (vatSpan) vatSpan.textContent = `€${vatTotal.toFixed(2)}`;
        if (totalSpan) totalSpan.textContent = `€${total.toFixed(2)}`;
        
        return { subtotal, vatTotal, total };
    }

    // Генерация предпросмотра
    if (generateBtn) {
        generateBtn.addEventListener('click', generatePreview);
    }

    function generatePreview() {
        const totals = calculateTotals();
        
        const preview = `
            <div class="invoice-preview">
                <h2>INVOICE</h2>
                <div class="invoice-header">
                    <div class="seller">
                        <h3>Seller:</h3>
                        <p>${sellerName?.value || 'Fonsalus OÜ'}<br>
                        Reg: ${sellerRegCode?.value || '12119841'}<br>
                        VAT: ${sellerVat?.value || 'EE102456789'}<br>
                        ${sellerAddress?.value || 'Tallinn, Estonia'}</p>
                    </div>
                    <div class="buyer">
                        <h3>Buyer:</h3>
                        <p>${buyerName?.value || 'Client Company'}<br>
                        Reg: ${buyerRegCode?.value || ''}<br>
                        VAT: ${buyerVat?.value || ''}<br>
                        ${buyerAddress?.value || ''}</p>
                    </div>
                </div>
                
                <div class="invoice-details">
                    <p>Invoice No: ${invoiceNumber?.value || 'INV-2026-001'}</p>
                    <p>Date: ${invoiceDate?.value || new Date().toISOString().split('T')[0]}</p>
                    <p>Due Date: ${dueDate?.value || ''}</p>
                </div>
                
                <table class="items-preview">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Unit</th>
                            <th>Price</th>
                            <th>VAT%</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${generatePreviewRows()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5" class="text-right">Subtotal:</td>
                            <td>${totals.subtotal.toFixed(2)} €</td>
                        </tr>
                        <tr>
                            <td colspan="5" class="text-right">VAT Total:</td>
                            <td>${totals.vatTotal.toFixed(2)} €</td>
                        </tr>
                        <tr>
                            <td colspan="5" class="text-right"><strong>TOTAL:</strong></td>
                            <td><strong>${totals.total.toFixed(2)} €</strong></td>
                        </tr>
                    </tfoot>
                </table>
                
                <div class="invoice-footer">
                    <p>Payment terms: 14 days</p>
                    <p>Bank: Swedbank Estonia<br>
                    IBAN: EE12 3456 7890 1234 5678<br>
                    SWIFT: HABAEE2X</p>
                </div>
            </div>
        `;
        
        if (previewDiv) {
            previewDiv.innerHTML = preview;
            previewDiv.style.display = 'block';
        }
    }

    function generatePreviewRows() {
        const rows = itemsTable.querySelectorAll('tbody tr');
        let html = '';
        
        rows.forEach(row => {
            const name = row.querySelector('.item-name')?.value || '';
            const quantity = row.querySelector('.item-quantity')?.value || '0';
            const unit = row.querySelector('.item-unit')?.value || '';
            const price = row.querySelector('.item-price')?.value || '0';
            const vat = row.querySelector('.item-vat')?.value || '22';
            const total = row.querySelector('.item-total')?.textContent || '€0.00';
            
            html += `
                <tr>
                    <td>${name}</td>
                    <td>${quantity}</td>
                    <td>${unit}</td>
                    <td>${price} €</td>
                    <td>${vat}%</td>
                    <td>${total}</td>
                </tr>
            `;
        });
        
        return html;
    }

    // Добавляем первую строку по умолчанию
    if (itemsTable && itemsTable.querySelector('tbody tr') === null) {
        addItem();
    }
});