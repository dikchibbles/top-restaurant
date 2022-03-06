import createInitialLayout from './pageLoad.js';
import createAboutUsLayout from './aboutUs.js';
import createContactLayout from './contact.js';

createInitialLayout();

const aboutUsBtn = document.querySelector('.about-us');
const contactBtn = document.querySelector('.contact');

aboutUsBtn.addEventListener('click', createAboutUsLayout);
contactBtn.addEventListener('click', createContactLayout);

