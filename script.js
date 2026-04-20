document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Thank you for your message. The AI Research Lab will contact you soon.');
      form.reset();
    });
  }
});
