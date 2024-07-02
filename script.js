document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');
    
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent default form submission
        
        // Get form input values
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const taller = document.getElementById('taller').value;

        // Validate form inputs
        if (nombre === '' || email === '' || taller === '') {
            alert('Por favor, complete todos los campos.');  // Show alert if any field is empty
        } else {
            alert('Mensaje enviado!');  // Show alert on successful submission
            // Simulate form submission
            setTimeout(() => {
                window.location.href = 'success.html';  // Redirect to success page
            }, 500);
        }
    });
});
