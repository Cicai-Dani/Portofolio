document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:3000/translations')
        .then(response => response.json())
        .then(data => {
            const translations = data;
        
            const languageSwitcher = document.getElementById('languageSwitcher');
            languageSwitcher.addEventListener('change', () => {
                changeLanguage(languageSwitcher.value, translations);
            });

            const defaultLanguage = 'en';
            changeLanguage(defaultLanguage, translations);
        })
        .catch(error => console.error('Error loading translations:', error));
});

function changeLanguage(language, translations) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

  
  