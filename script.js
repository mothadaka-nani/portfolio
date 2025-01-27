// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// Highlight active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        if (
            scrollPosition >= section.offsetTop - 100 &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});

// Optional: Contact form validation (if you add a contact form)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();
        const errorMessage = document.querySelector('#error-message');

        if (!email || !message) {
            errorMessage.textContent = 'Please fill out all fields.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
        } else {
            errorMessage.textContent = '';
            alert('Message sent successfully!');
            contactForm.reset();
        }
    });
}
