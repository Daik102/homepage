const workList = [{
  title: 'battleship',
  header: '13. Battleship',
  description: 'Search and destroy the enemy fleet before they beat you. The legendary rank Admiral isn\'t easy to achieve.',
}, {
  title: 'weather-app',
  header: '12. Weather App',
  description: 'Let\'s check the weather in your city. Three time spans (Hourly, today/tomorrow, and 15 days) are available.',
}, {
  title: 'todo-list',
  header: '11. ToDo List',
  description: 'If you have many things to do, you can manage your todos with this app.',
}, {
  title: 'restaurant-page',
  header: '10. Restaurant Page',
  description: 'Welcome to our restaurant! We offer the best burgers and shakes for you.',
}, {
  title: 'tic-tac-toe',
  header: '9. Tic Tac Toe',
  description: 'A very simple game to play. Human mode and robot mode are available. Can you beat the robot easily?',
}, {
  title: 'library',
  header: '8. Library',
  description: 'If you\'re a book person, you can manage your books with this app. What\'s your five-star books?',
}, {
  title: 'admin-dashboard',
  header: '7. Admin Dashboard',
  description: 'This is my alternative portfolio page with different layout and design. All project links are the same.',
}, {
  title: 'sign-up-form',
  header: '6. Sign-up Form',
  description: 'A sign-up page featured with Cyberpunk. <span class="italic">Do androids dream of electric sheep? </span> by Philip K. Dick is my favorite novel.',
}, {
  title: 'calculator',
  header: '5. Calculator',
  description: 'A simple calculator with a bit of retro taste. If you try to divide with zero something strange might happen...',
}, {
  title: 'etch-a-sketch',
  header: '4. Etch-a-Sketch',
  description: 'Draw a pixel art with this app! Color picker, size adjustment, grid mode and graduation mode are available.',
}, {
  title: 'rock-paper-scissors',
  header: '3. Rock Paper Scissors',
  description: 'You came to the entrance of the dungeon, where the monsters live. You fight them with the rock-paper-scissors game.',
}, {
  title: 'landing-page',
  header: '2. Landing Page',
  description: 'A very simple landing-page with a bit of cute taste. You might see a great quote there.',
}, {
  title: 'odin-recipes',
  header: '1. Recipes',
  description: 'The first project on the Odin Project. For people who love cooking, there are three recipes you can check out.',
}, ];

const workListItemContainer = document.querySelector('.work-list-item-container');
let workHTML = '';

for (const work of workList) {
  workHTML += `
    <li class="work-list-item">
      <a tabindex="-1" href="https://daik102.github.io/${work.title}/" target="_blank">
        <img class="site-screenshot" src="./screenshots/${work.title}.png" alt="">
      </a>
      <div class="title-row">
        <a href="https://daik102.github.io/${work.title}/" target="_blank">
          <h3 class="work-title">${work.header}</h3>
        </a>
        <a href="https://github.com/Daik102/${work.title}" target="_blank">
          <img class="icon work-icon" src="./icons/github-mark.svg" alt="github"/>
        </a>
      </div>
      <a tabindex="-1" href="https://daik102.github.io/${work.title}/" target="_blank">
        <p class="work-description">${work.description}</p>
      </a>
    </li>
  `;
}

workListItemContainer.innerHTML = workHTML;

const lightSwitchBtn = document.querySelector('.light-switch-btn');
const header = document.querySelector('.header');
const headerImageContainer = document.querySelector('.header-img-container');
const headerDescriptionContainer = document.querySelector('.header-description-container');
const headerDescription = document.querySelector('.header-description');
const main = document.querySelector('.main');
const headerTitles = document.querySelectorAll('.header-title');
const workListItems = document.querySelectorAll('.work-list-item');
const workTitles = document.querySelectorAll('.work-title');
const workDescriptions = document.querySelectorAll('.work-description');
const icons = document.querySelectorAll('.icon');
const cssbattleIcons = document.querySelectorAll('.cssbattle-icon');
const youtubeIcons = document.querySelectorAll('.youtube-icon');
const footer = document.querySelector('.footer');
const footerImgContainer = document.querySelector('.footer-img-container');
const footerDescription = document.querySelector('.footer-description');
const emailAddress = document.querySelector('.email-address');

lightSwitchBtn.addEventListener('click', (e) => {
  let target = e.target.parentElement;
  let whiteFilter = '';
  let icon = '';
  let mode = '';
  let topPhoto = '';
  let bottomPhoto = '';
  
  if (target.classList.contains('dark-mode')) {
    lightSwitchBtn.classList.toggle('dark-mode');
    whiteFilter = 'white-filter';
    icon = 'sun';
    mode = 'light-mode'
    topPhoto = 'night-park-clock';
    bottomPhoto = 'night-park-house';
  } else {
    lightSwitchBtn.classList.toggle('dark-mode');
    icon = 'moon';
    mode = 'dark-mode';
    topPhoto = 'forest-road-and-clouds';
    bottomPhoto = 'shadow-on-the-road';
  }
  
  lightSwitchBtn.innerHTML = `
    <img class="icon header-icon light-switch-icon ${whiteFilter}" src="./icons/${icon}.svg" alt="${mode}">
  `;

  headerImageContainer.innerHTML = `
    <img class="top-photo" src="./photos/${topPhoto}.jpg" alt="">
    <h1 class="my-name">Daik</h1>
  `;

  footerImgContainer.innerHTML = `
    <img class="bottom-photo" src="./photos/${bottomPhoto}.jpg" alt="">
  `;

  header.classList.toggle('dark-purple-image');
  headerDescriptionContainer.classList.toggle('dark-header-description-container');
  headerDescription.classList.toggle('white-color');
  headerDescription.classList.toggle('dark-gray-background');
  main.classList.toggle('dark-purple-background');
  headerTitles.forEach((title) => title.classList.toggle('white-color'));
  workListItems.forEach((item) => item.classList.toggle('dark-gray-background'));
  workListItems.forEach((item) => item.classList.toggle('dark-list-item'));
  workTitles.forEach((title) => title.classList.toggle('purple-color'));
  workDescriptions.forEach((description) => description.classList.toggle('white-color'));
  icons.forEach((icon) => icon.classList.toggle('white-filter'));
  cssbattleIcons.forEach((icon) => icon.classList.toggle('yellow-filter'));
  youtubeIcons.forEach((icon) => icon.classList.toggle('no-filter'));
  footer.classList.toggle('super-dark-purple-background');
  footerDescription.classList.toggle('white-color');
  emailAddress.classList.toggle('white-color');
});
