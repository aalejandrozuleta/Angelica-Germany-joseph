const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async language => {
    const requestJson = await fetch(`/public/assets/languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }

    localStorage.setItem('language', language);
};

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});

document.addEventListener('DOMContentLoaded', () => {
    const storedLanguage = localStorage.getItem('language');
    
    if (storedLanguage) {
        changeLanguage(storedLanguage);
    }
});
