document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');
    
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message sent!');
    });
});
