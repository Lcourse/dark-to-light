const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun')

        form.classList.add('dark');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
});


/*
// JavaScript para alternar o modo escuro / modo claro
const modeIcon = document.getElementById('mode_icon');
const body = document.body;

let darkMode = false;

modeIcon.addEventListener('click', () => {
    darkMode = !darkMode;
    body.classList.toggle('dark-mode', darkMode);
});

// Verifique o localStorage para manter o tema selecionado entre as sessões
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    darkMode = true;
    body.classList.add('dark-mode');
}

*/