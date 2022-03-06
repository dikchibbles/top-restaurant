import {createInitialLayout, recreateMainPage} from './pageLoad.js';
import createAboutUsLayout from './aboutUs.js';
import createContactLayout from './contact.js';

createInitialLayout();

const aboutUsBtn = document.querySelector('.about-us');
const contactBtn = document.querySelector('.contact');
const logo = document.querySelector('.logo-main');

aboutUsBtn.addEventListener('click', createAboutUsLayout);
contactBtn.addEventListener('click', createContactLayout);
logo.addEventListener('click', recreateMainPage);

