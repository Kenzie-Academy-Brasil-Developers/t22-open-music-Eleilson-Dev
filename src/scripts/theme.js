// esse é o script responsavel por alterar o tema e armazenar o thema selecionado no localstorange
import { lightThemeIcon, darkThemeIcon } from './icons.js';

const body = document.body;
const btnThemeToggle = document.querySelector('#theme-toggle');

const updateThemeIcon = () => {
  const isDarkTheme = body.classList.contains('dark-theme');
  btnThemeToggle.innerHTML = isDarkTheme ? darkThemeIcon : lightThemeIcon;
};

const changeTheme = () => {
  const currentTheme = localStorage.getItem('@openMusic:theme');

  if (currentTheme) {
    document.body.classList.add(currentTheme);
    updateThemeIcon();
  }

  btnThemeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const theme = body.classList.contains('dark-theme') ? 'dark-theme' : '';

    localStorage.setItem('@openMusic:theme', theme);

    updateThemeIcon();
  });
};

export default changeTheme;
