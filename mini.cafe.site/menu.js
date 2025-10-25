// menu.js — handles ordering and order summary

const orders = {}; // Example: { "Latte": { qty: 1, price: 120 }, ... }

function orderItem(name, price) {
    alert("You ordered " + name + "!");

    if (!orders[name]) {
        orders[name] = { qty: 0, price: price };
    }
    orders[name].qty += 1;

    renderSummary();
}

function renderSummary() {
    const orderListEl = document.getElementById('order-list');
    const entries = Object.entries(orders);

    if (entries.length === 0) {
        orderListEl.innerText = 'No orders yet.';
        return;
    }

    let lines = [];
    let total = 0;
    for (const [name, info] of entries) {
        const line = `${info.qty} x ${name} — ₱${info.price} each (Subtotal: ₱${info.qty * info.price})`;
        lines.push(line);
        total += info.qty * info.price;
    }
    lines.push('-----------------------------');
    lines.push('Total: ₱' + total);

    orderListEl.innerText = lines.join('\n');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.item-image img').forEach(img => {
        if (!img.src) {
            img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">' +
                '<rect width="100%" height="100%" fill="#e6e2d3"/>' +
                '<text x="50%" y="50%" font-size="20" dominant-baseline="middle" text-anchor="middle" fill="#8a8a8a">Image</text>' +
                '</svg>'
            );
        }
        if (!img.alt || img.alt.trim() === '') img.alt = 'Menu item';
    });
});
