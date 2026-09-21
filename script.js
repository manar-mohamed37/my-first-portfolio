// Select the theme toggle button and the body element
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Add a click event listener to the button
themeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');
    
    // Change the button text based on the active mode
    if(body.classList.contains('dark-mode')) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});
