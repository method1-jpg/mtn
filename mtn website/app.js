document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: '2GB NO-EXPIRY', price: 'GHS 13', image: 'images.png' },
        { id: 2, name: '3GB NO-EXPIRY', price: 'GHS 19', image: 'images.png' },
        { id: 3, name: '4GB NO-EXPIRY', price: 'GHS 24', image: 'images.png' },
        { id: 4, name: '5GB NO-EXPIRY', price: 'GHS 27', image: 'images.png' },
        { id: 5, name: '6GB NO-EXPIRY', price: 'GHS 32', image: 'images.png' },
        { id: 6, name: '7GB NO-EXPIRY', price: 'GHS 36', image: 'images.png' },
    ];

    const productContainer = document.querySelector('.product-list');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button data-id="${product.id}">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });

    productContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const productId = event.target.getAttribute('data-id');
            console.log(`Product ID ${productId} button clicked`);
            addToCart(productId);
        }
    });

    function addToCart(productId) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = products.find(p => p.id == productId);
        if (product) {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log(`${product.name} has been added to the cart.`);
            alert(`${product.name} has been added to the cart.`);
        } else {
            console.error(`Product with ID ${productId} not found.`);
        }
    }
});
