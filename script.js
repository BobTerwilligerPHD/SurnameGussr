// Login / Account Functionality
const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
const loginAccountLink = document.querySelector('.top-left .top-link');

// Update the login link based on the user's login status
if (isLoggedIn) {
    loginAccountLink.textContent = 'Account';
    loginAccountLink.href = '/account'; // Redirect to account page when logged in
} else {
    loginAccountLink.textContent = 'Login';
    loginAccountLink.href = '/login'; // Redirect to login page if not logged in
}

// Toggle between dark and light modes
const themeSwitcher = document.getElementById('theme-switcher-grid');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon-overlay');

themeSwitcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        moon.style.display = 'block';
        sun.style.display = 'none';
        localStorage.setItem('theme', 'dark-mode');
    } else {
        moon.style.display = 'none';
        sun.style.display = 'block';
        localStorage.setItem('theme', 'light-mode');
    }
});
document
  .getElementById("theme-switcher-grid")
  .addEventListener("click", function () {
    this.classList.toggle("night-theme");
    document.body.style.backgroundColor = this.classList.contains("night-theme")
      ? "var(--bg-color-dark)"
      : "var(--bg-color-light)";
  });
