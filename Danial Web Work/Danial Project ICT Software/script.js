// Theme Switcher Functionality
const themeSwitcher = document.getElementById('themeSwitcher');

// Load saved theme from local storage
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
};

// Toggle theme on button click
themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});


// JavaScript for Toggle Functionality
document.getElementById('toggle-cv-button').addEventListener('click', function() {
    var cvSection = document.getElementById('cv-section');
    if (cvSection.style.display === 'none' || cvSection.style.display === '') {
        cvSection.style.display = 'block';
        this.textContent = 'Hide My CV'; // Change button text
    } else {
        cvSection.style.display = 'none';
        this.textContent = 'Show My CV'; // Change button text back
    }
});




