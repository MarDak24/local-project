// let changeThemeButtons = document.querySelectorAll('.changeTheme');

// changeThemeButtons.forEach(button => {
//   button.addEventListener('click', function () {
//     let theme = this.dataset.theme;
//     applyTheme(theme);
//   });
// });

// function applyTheme(themeName) {
//   document
//     .querySelector('[title="theme"]')
//     .setAttribute('href', `css/${themeName}.css`);
//   changeThemeButtons.forEach(button => {
//     button.style.display = 'block';
//   });
//   document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
//   localStorage.setItem('theme', themeName);
// }

// let activeTheme = localStorage.getItem('theme'); // Проверяем есть ли в LocalStorage записано значение для 'theme' и присваиваем его переменной.

// if (activeTheme === null || activeTheme === 'light') {
//   applyTheme('light');
// } else if (activeTheme === 'dark') {
//   applyTheme('dark');
// }

// робоче
// const changeThemeButtons = document.querySelectorAll('.changeTheme');

// // Перебираємо всі кнопки з класом "changeTheme" і додаємо обробник події для кожної кнопки
// changeThemeButtons.forEach(button => {
//   button.addEventListener('click', function () {
//     const theme = this.dataset.theme; // Отримуємо значення атрибуту "data-theme" кнопки, яке відповідає темі
//     applyTheme(theme); // Застосовуємо вибрану тему
//   });
// });

// function applyTheme(themeName) {
//   const themeStylesheet = document.querySelector('[title="theme"]'); // Отримуємо елемент <link> для стилів теми
//   themeStylesheet.setAttribute('href', `css/${themeName}.css`); // Змінюємо значення атрибуту "href" для підключення відповідного CSS-файлу теми

//   changeThemeButtons.forEach(button => {
//     button.style.display = ''; // Очищуємо значення атрибуту "display" для всіх кнопок
//   });

//   const selectedButton = document.querySelector(`[data-theme="${themeName}"]`); // Знаходимо обрану кнопку за допомогою атрибуту "data-theme"
//   selectedButton.style.display = 'none'; // Приховуємо обрану кнопку, змінюючи значення атрибуту "display"

//   localStorage.setItem('theme', themeName); // Зберігаємо обрану тему у локальному сховищі
// }

// const activeTheme = localStorage.getItem('theme'); // Отримуємо збережену тему з локального сховища

// // Перевіряємо, чи є збережена тема або встановлене значення "light" і застосовуємо відповідну тему
// if (activeTheme === null || activeTheme === 'light') {
//   applyTheme('light');
// } else if (activeTheme === 'dark') {
//   applyTheme('dark');
// }

// для роботи   const themeStylesheet = document.querySelector('[title="theme"]');

const themeSwitcher = document.querySelector('.theme-switcher');
const slider = document.querySelector('.slider');

themeSwitcher.addEventListener('click', function () {
  toggleTheme();
});

function toggleTheme() {
  const isDarkMode = themeSwitcher.classList.toggle('dark');
  const themeName = isDarkMode ? 'dark' : 'light';
  applyTheme(themeName);
}

function applyTheme(themeName) {
  const themeStylesheet = document.querySelector('[title="theme"]');
  themeStylesheet.setAttribute('href', `css/${themeName}.css`);
  localStorage.setItem('theme', themeName);
}

const activeTheme = localStorage.getItem('theme');
if (activeTheme === 'dark') {
  themeSwitcher.classList.add('dark');
  applyTheme('dark');
} else {
  applyTheme('light');
}
