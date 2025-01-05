document.addEventListener('DOMContentLoaded', async () => {
    const apiUrl = 'https://in3.dev/inv/';
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Užpildome sąskaitos duomenis
    document.getElementById('invoice-number').innerText = data.number;
    document.getElementById('invoice-date').innerText = data.date;
    document.getElementById('seller').innerText = `${data.seller.name}, ${data.seller.address}`;
    document.getElementById('buyer').innerText = `${data.buyer.name}, ${data.buyer.address}`;

    // Prekių sąrašas
    const itemsBody = document.getElementById('items-body');
    let subtotal = 0;

    data.items.forEach(item => {
        const row = document.createElement('tr');
        const discount = item.discount
            ? `${item.discount.type === 'fixed' ? '-' : '-'}${item.discount.value}${item.discount.type === 'percent' ? '%' : '€'}`
            : 'Nėra';

        const itemTotal = item.quantity * item.price - (item.discount?.value || 0);
        subtotal += itemTotal;

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${discount}</td>
            <td>${itemTotal.toFixed(2)}</td>
        `;
        itemsBody.appendChild(row);
    });

    // Transporto išlaidos, PVM ir galutinė suma
    const transportCost = data.transportCost;
    const vat = (subtotal + transportCost) * 0.21;
    const total = subtotal + transportCost + vat;

    document.getElementById('transport-cost').innerText = `${transportCost.toFixed(2)} €`;
    document.getElementById('vat').innerText = `${vat.toFixed(2)} €`;
    document.getElementById('total').innerText = `${total.toFixed(2)} €`;
});