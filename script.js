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
// Apply saved theme from localStorage on page load
document.addEventListener("DOMContentLoaded", function () {
    let savedTheme = localStorage.getItem("theme") || "styles2.css"; // Default theme
    document.getElementById("themeStylesheet").setAttribute("href", savedTheme);
});

// Function to switch theme
function switchTheme() {
    // Disable AOS animation and remove fadeIn animation temporarily
    const mainlyElements = document.querySelectorAll('.mainly');
    mainlyElements.forEach((element) => {
        element.style.animation = 'none'; // Disable fade-in animation
    });

    // Get the current theme link
    let theme = document.getElementById("themeStylesheet");
    let newTheme = theme.getAttribute("href") === "styles.css" ? "styles2.css" : "styles.css";

    // Apply the new theme
    theme.setAttribute("href", newTheme);
    localStorage.setItem("theme", newTheme);

    // Add transition effect only to specific elements like background and text color
    document.body.classList.add("theme-transition");

    // Remove transition class after a short delay
    setTimeout(() => {
        document.body.classList.remove("theme-transition");
    }, 1000); // Duration should match your CSS transition

    // Re-enable fade-in animation after switching the theme
    setTimeout(() => {
        mainlyElements.forEach((element) => {
            element.style.animation = ''; // Re-enable fade-in animation
        });
    }, 1000); // Delay to match the theme switch transition
}
