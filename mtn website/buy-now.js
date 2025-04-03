document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('buy-now-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            product: formData.get('product')
        };

        console.log('Form Data:', data); // Log the data to the console for debugging

        // Construct the payment gateway URL with query parameters
        const paymentGatewayUrl = new URL('https://test-checkout.korapay.com/pay/nEkgLTbuOUbdxRn');
        paymentGatewayUrl.searchParams.append('name', data.name);
        paymentGatewayUrl.searchParams.append('email', data.email);
        paymentGatewayUrl.searchParams.append('phone', data.phone);
        paymentGatewayUrl.searchParams.append('address', data.address);
        paymentGatewayUrl.searchParams.append('product', data.product);

        // Redirect the user to the payment gateway
        window.location.href = test-checout.kora.toString();
    });
});