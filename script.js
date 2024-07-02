document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');
    
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const taller = document.getElementById('taller').value;

        if (nombre === '' || email === '' || taller === '') {
            alert('Por favor, complete todos los campos.');
        } else {
            alert('Mensaje enviado!');
            form.submit();
        }
    });
});
