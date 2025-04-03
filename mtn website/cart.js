document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector('.cart-list');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button data-id="${product.id}">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });
    }

    cartContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const productId = event.target.getAttribute('data-id');
            removeFromCart(productId);
        }
    });

    function removeFromCart(productId) {
        const updatedCart = cart.filter(product => product.id != productId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        location.reload();
    }
});