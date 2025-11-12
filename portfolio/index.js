const toggleButton = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLightTheme = document.body.classList.contains('light-theme');
    toggleBtn.textContent = isLightTheme ? '🌞' : '🌙';
});

