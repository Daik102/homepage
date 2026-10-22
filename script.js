const linkList = [{
  name: 'github',
  url: 'https://github.com/Daik102',
  class: '',
  icon: './icons/github-mark.svg',
}, {
  name: 'css-battle',
  url: 'https://cssbattle.dev/player/hikebed',
  class: 'cssbattle-icon',
  icon: './icons/sword-cross.svg',
}, {
  name: 'youtube',
  url: 'https://www.youtube.com/@nostalgicwalkway/videos',
  class: 'youtube-icon',
  icon: './icons/youtube-icon.png',
}];

const headerLinkContainer = document.querySelector('.header-link-container');
const footerLinkContainer = document.querySelector('.footer-link-container');
let linkHTML = '';

for (const link of linkList) {
  linkHTML += `
    <li>
      <a href="${link.url}">
        <img class="icon link-icon ${link.class}" src="${link.icon}" alt="${link.name}">
      </a>
    </li>
  `;
}

footerLinkContainer.innerHTML = linkHTML;

linkHTML += `
  <li>
    <button class="light-switch-btn dark-mode">
      <img class="icon header-icon light-switch-icon" src="./icons/moon.svg" alt="dark-mode">
    </button>
  </li>
`;

headerLinkContainer.innerHTML = linkHTML;

const workList = [{
  title: 'shopping-cart',
  header: '16. Shopping Cart',
  description: 'An e-commerce web app featuring API-driven product renderings, live cart updates, and client-side routing.',
  url: 'https://shopping-cart-daik102.vercel.app/',
  repoUrl: 'https://github.com/Daik102/shopping-cart',
}, {
  title: 'memory-card',
  header: '15. Memory Card',
  description: 'A mini game app. Choose cards without repeats. It renders beautiful images from Unsplash API using useEffect.',
  url: 'https://memory-card-dun-sigma.vercel.app',
  repoUrl: 'https://github.com/Daik102/memory-card',
}, {
  title: 'cv-application',
  header: '14. CV Application',
  description: 'A live CV app that renders inputs simultaneously using useState and stores data using localStorage.',
  url: 'https://cv-application-beta-indol.vercel.app',
  repoUrl: 'https://github.com/Daik102/cv-application',
}, {
  title: 'battleship',
  header: '13. Battleship',
  description: 'A good old search and destroy battle game. The legendary rank Admiral isn\'t easy to achieve.',
  url: 'https://daik102.github.io/battleship/',
  repoUrl: 'https://github.com/Daik102/battleship',
}, {
  title: 'weather-app',
  header: '12. Weather App',
  description: 'A weather app fetching data from Visual Crossing weather API. you can switch the mode between hourly, today/tomorrow, and 15 days.',
  url: 'https://daik102.github.io/weather-app/',
  repoUrl: 'https://github.com/Daik102/weather-app',
}, {
  title: 'todo-list',
  header: '11. ToDo List',
  description: 'A todo app with project based task management and CRUD functionality.',
  url: 'https://daik102.github.io/todo-list/',
  repoUrl: 'https://github.com/Daik102/todo-list',
}, {
  title: 'restaurant-page',
  header: '10. Restaurant Page',
  description: 'A project for practicing ES6 modules and SPA routing. It uses Webpack as a build tool. Enjoy burgers and shakes.',
  url: 'https://daik102.github.io/restaurant-page/',
  repoUrl: 'https://github.com/Daik102/restaurant-page',
}, {
  title: 'tic-tac-toe',
  header: '9. Tic Tac Toe',
  description: 'A mini game app. The robot mode implements a smart algorithm. Give it a try.',
  url: 'https://daik102.github.io/tic-tac-toe/',
  repoUrl: 'https://github.com/Daik102/tic-tac-toe',
}, {
  title: 'library',
  header: '8. Library',
  description: 'A book managing app featuring object-oriented data model, constraint validation API and CRUD functionality.',
  url: 'https://daik102.github.io/library/',
  repoUrl: 'https://github.com/Daik102/library',
}, {
  title: 'admin-dashboard',
  header: '7. Admin Dashboard',
  description: 'An admin dashboard-like portfolio page featuring grid based structure and multi-column layout using auto-fit and minmax.',
  url: 'https://daik102.github.io/admin-dashboard/',
  repoUrl: 'https://github.com/Daik102/admin-dashboard',
}, {
  title: 'sign-up-form',
  header: '6. Sign-up Form',
  description: 'A sign-up page featuring constraint validation API and Cyberpunk taste. <span class="italic">Do Androids Dream of Electric Sheep?</span> is my best.',
  url: 'https://daik102.github.io/sign-up-form/',
  repoUrl: 'https://github.com/Daik102/sign-up-form',
}, {
  title: 'calculator',
  header: '5. Calculator',
  description: 'A calculator with a retro taste. Don\'t divide with zero if you\'re not a fan of the digital rain.',
  url: 'https://daik102.github.io/calculator/',
  repoUrl: 'https://github.com/Daik102/calculator',
}, {
  title: 'etch-a-sketch',
  header: '4. Etch-a-Sketch',
  description: 'A Drawing app. The color picker, size adjustment, grid mode and graduation mode are implemented.',
  url: 'https://daik102.github.io/etch-a-sketch/',
  repoUrl: 'https://github.com/Daik102/etch-a-sketch',
}, {
  title: 'rock-paper-scissors',
  header: '3. Rock Paper Scissors',
  description: 'A mini game app. You came to the dungeon to fight the monsters with the rock-paper-scissors game.',
  url: 'https://daik102.github.io/rock-paper-scissors/',
  repoUrl: 'https://github.com/Daik102/rock-paper-scissors',
}, {
  title: 'landing-page',
  header: '2. Landing Page',
  description: 'A landing-page with cute animals. You might see a great quote there.',
  url: 'https://daik102.github.io/landing-page/',
  repoUrl: 'https://github.com/Daik102/landing-page',
}, {
  title: 'odin-recipes',
  header: '1. Recipes',
  description: 'The first project on The Odin Project. A recipe app that has three recipes for now.',
  url: 'https://daik102.github.io/odin-recipes/',
  repoUrl: 'https://github.com/Daik102/odin-recipes',
}, ];

const workListItemContainer = document.querySelector('.work-list-item-container');
let workHTML = '';

for (const work of workList) {
  workHTML += `
    <li class="work-list-item">
      <a tabindex="-1" href="${work.url}">
        <img class="site-screenshot" src="./screenshots/${work.title}.png" alt="">
      </a>
      <div class="title-row">
        <a href="${work.url}">
          <h3 class="work-title">${work.header}</h3>
        </a>
        <a href="${work.repoUrl}">
          <img class="icon work-icon" src="./icons/github-mark.svg" alt="github"/>
        </a>
      </div>
      <a tabindex="-1" href="${work.url}">
        <p class="work-description">${work.description}</p>
      </a>
    </li>
  `;
}

workListItemContainer.innerHTML = workHTML;

const lightSwitchBtn = document.querySelector('.light-switch-btn');
const lightSwitchIcon = document.querySelector('.light-switch-icon');
const topPhotoElement = document.querySelector('.top-photo');
const bottomPhotoElement = document.querySelector('.bottom-photo');
const headerTitles = document.querySelectorAll('.header-title');
const icons = document.querySelectorAll('.icon');
const cssbattleIcons = document.querySelectorAll('.cssbattle-icon');
const youtubeIcons = document.querySelectorAll('.youtube-icon');
const header = document.querySelector('.header');
const headerDescriptionContainer = document.querySelector('.header-description-container');
const headerDescription = document.querySelector('.header-description');
const main = document.querySelector('.main');
const workListItems = document.querySelectorAll('.work-list-item');
const workTitles = document.querySelectorAll('.work-title');
const workDescriptions = document.querySelectorAll('.work-description');
const footer = document.querySelector('.footer');
const footerDescription = document.querySelector('.footer-description');
const emailAddress = document.querySelector('.email-address');

function toggleDarkMode(e) {
  lightSwitchBtn.classList.toggle('dark-mode');

  const target = e.target.parentElement;
  let icon = 'sun';
  let mode = 'light-mode';
  let topPhoto = 'night-park-clock';
  let bottomPhoto = 'night-park-house';

  if (target.classList.contains('dark-mode')) {
    icon = 'moon';
    mode = 'dark-mode';
    topPhoto = 'forest-road-and-clouds';
    bottomPhoto = 'shadow-on-the-road';
  }
  
  lightSwitchIcon.setAttribute('src', `./icons/${icon}.svg`);
  lightSwitchIcon.setAttribute('alt', `${mode}`);
  topPhotoElement.setAttribute('src', `./photos/${topPhoto}.jpg`);
  bottomPhotoElement.setAttribute('src', `./photos/${bottomPhoto}.jpg`);
  // Cross sectional toggles
  headerTitles.forEach((title) => title.classList.toggle('white-color'));
  icons.forEach((icon) => icon.classList.toggle('white-filter'));
  cssbattleIcons.forEach((icon) => icon.classList.toggle('yellow-filter'));
  youtubeIcons.forEach((icon) => icon.classList.toggle('no-filter'));
  // Header toggles
  header.classList.toggle('dark-purple-image');
  headerDescriptionContainer.classList.toggle('dark-header-description-container');
  headerDescription.classList.toggle('white-color');
  headerDescription.classList.toggle('dark-gray-background');
  // Main toggles
  main.classList.toggle('dark-purple-background');
  workListItems.forEach((item) => item.classList.toggle('dark-gray-background'));
  workListItems.forEach((item) => item.classList.toggle('dark-list-item'));
  workTitles.forEach((title) => title.classList.toggle('purple-color'));
  workDescriptions.forEach((description) => description.classList.toggle('white-color'));
  // Footer toggles
  footer.classList.toggle('super-dark-purple-background');
  footerDescription.classList.toggle('white-color');
  emailAddress.classList.toggle('white-color');
}

lightSwitchBtn.addEventListener('click', (e) => toggleDarkMode(e));
