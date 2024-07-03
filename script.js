document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');

    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const taller = document.getElementById('taller').value;

        // Simple email format validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (nombre === '' || email === '' || taller === '') {
            alert('Por favor, complete todos los campos.');
        } else if (!emailPattern.test(email)) {
            alert('Por favor, ingrese un email válido.');
        } else {
            alert('Mensaje enviado!');
            form.submit();
        }
    });
});
