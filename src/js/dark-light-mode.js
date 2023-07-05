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

const themeSwitcher = document.querySelector('.switcher');
const bodyElement = document.querySelector('body');
const otherElements = document.querySelectorAll(
  '.slider, .general-header, .header-logo-icon, .gallery-heading, .see-more, .gallery-books-title, .shopping-title, .choosenbook-title, .choosenbook-descr, .icon-open, .categories-link'
);

themeSwitcher.addEventListener('click', toggleTheme);

function toggleTheme() {
  bodyElement.classList.toggle('dark');
  saveTheme(bodyElement.classList.contains('dark') ? 'dark' : 'light');
  otherElements.forEach(function (element) {
    element.classList.toggle('dark');
  });
}

function saveTheme(themeName) {
  localStorage.setItem('theme', themeName);
}

const activeTheme = localStorage.getItem('theme');
if (activeTheme === 'dark') {
  bodyElement.classList.add('dark');
  otherElements.forEach(function (element) {
    element.classList.add('dark');
  });
} else {
  bodyElement.classList.remove('dark');
  otherElements.forEach(function (element) {
    element.classList.remove('dark');
  });
}
