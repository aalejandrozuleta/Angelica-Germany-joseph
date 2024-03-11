const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-theme-icon');

document.addEventListener('DOMContentLoaded', () => {
    const themeState = localStorage.getItem('themeState');

    if (themeState === 'dark') {
        enableDarkTheme();
    } else {
        disableDarkTheme();
    }
});

toggleTheme.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        disableDarkTheme();
    } else {
        enableDarkTheme();
    }
});

function enableDarkTheme() {
    document.body.classList.add('dark');
    toggleIcon.src = '/public/assets/icons/summer.png';
    localStorage.setItem('themeState', 'dark');
}

function disableDarkTheme() {
    document.body.classList.remove('dark');
    toggleIcon.src = '/public/assets/icons/moon.png';
    localStorage.setItem('themeState', 'light');
}
