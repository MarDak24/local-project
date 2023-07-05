// const themeSwitcher = document.querySelector('.switcher');
// const bodyElement = document.querySelector('body');
// const otherElements = document.querySelectorAll(
//   '.slider',
//   '.general-header',
//   '.header-logo-icon',
//   '.gallery-heading',
//   '.see-more',
//   '.gallery-books-title',
//   '.shopping-title',
//   '.choosenbook-title',
//   '.choosenbook-descr',
//   '.icon-open',
//   '.categories-link'
// );

// themeSwitcher.addEventListener('click', toggleTheme);

// function toggleTheme() {
//   const isDarkMode = bodyElement.classList.toggle('dark');
//   const themeName = isDarkMode ? 'dark' : 'light';
//   saveTheme(themeName);
// }

// function saveTheme(themeName) {
//   localStorage.setItem('theme', themeName);
// }

// const activeTheme = localStorage.getItem('theme');
// if (activeTheme === 'dark') {
//   bodyElement.classList.add('dark');
// } else {
//   bodyElement.classList.remove('dark');
// }

// otherElements.forEach(function (element) {
//   if (activeTheme === 'dark') {
//     element.classList.add('dark');
//   } else {
//     element.classList.remove('dark');
//   }
// });

// ПРАЦЮЄ
// const themeSwitcher = document.querySelector('.switcher');
// const bodyElement = document.querySelector('body');
// const otherElements = document.querySelectorAll(
//   '.slider, .general-header, .header-logo-icon, .gallery-heading, .see-more, .gallery-books-title, .shopping-title, .choosenbook-title, .choosenbook-descr, .icon-open, .categories-link'
// );

// themeSwitcher.addEventListener('click', toggleTheme);

// function toggleTheme() {
//   bodyElement.classList.toggle('dark');
//   saveTheme(bodyElement.classList.contains('dark') ? 'dark' : 'light');
//   otherElements.forEach(function (element) {
//     element.classList.toggle('dark');
//   });
// }

// function saveTheme(themeName) {
//   localStorage.setItem('theme', themeName);
// }

// const activeTheme = localStorage.getItem('theme');
// if (activeTheme === 'dark') {
//   bodyElement.classList.add('dark');
//   otherElements.forEach(function (element) {
//     element.classList.add('dark');
//   });
// } else {
//   bodyElement.classList.remove('dark');
//   otherElements.forEach(function (element) {
//     element.classList.remove('dark');
//   });
// }
// const elements = document.querySelectorAll(
//   '.slider, .general-header, .header-logo-icon, .gallery-heading, .see-more, .gallery-books-title, .shopping-title, .choosenbook-title, .choosenbook-descr, .icon-open, .categories-link, .header-shopping-text, .book-modal, .close-icon, .add-btn, .choosenbook-popup-title, .choosenbook-popup-descr, .icon-untitled-header'
// );
const themeSwitcher = document.querySelector('.switcher');

themeSwitcher.addEventListener('click', toggleTheme);

function toggleTheme() {
  document.body.classList.toggle('dark');
  const elements = document.querySelectorAll(
    '.slider, .general-header, .header-logo-icon, .gallery-heading, .see-more, .gallery-books-title, .shopping-title, .choosenbook-title, .choosenbook-descr, .icon-open, .categories-link, .header-shopping-text, .book-modal, .close-icon, .add-btn, .choosenbook-popup-title, .choosenbook-popup-descr, .mob-menu-leveling'
  );
  elements.forEach(function (element) {
    if (document.body.classList.contains('dark')) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  });
  saveTheme(document.body.classList.contains('dark') ? 'dark' : 'light');
}

function saveTheme(themeName) {
  localStorage.setItem('theme', themeName);
}

const activeTheme = localStorage.getItem('theme');
if (activeTheme === 'dark') {
  document.body.classList.add('dark');
  const elements = document.querySelectorAll(
    '.slider, .general-header, .header-logo-icon, .gallery-heading, .see-more, .gallery-books-title, .shopping-title, .choosenbook-title, .choosenbook-descr, .icon-open, .categories-link, .header-shopping-text, .book-modal, .close-icon, .add-btn, .choosenbook-popup-title, .choosenbook-popup-descr'
  );
  elements.forEach(function (element) {
    element.classList.add('dark');
  });
} else {
  // Зміна: Не виконувати жодних дій, якщо активна тема не встановлена
}
