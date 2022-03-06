export default function createInitialLayout () {
    const contentDiv = document.querySelector('#content');

    // Header Stuff
    const header = document.createElement('div');
    header.classList.add('header');
    // Header Nav Stuff
    const headerNav = document.createElement('div');
    headerNav.classList.add('header-nav');

    const logoDiv = document.createElement('div');
    logoDiv.classList.add('header-logo');
    const logo = document.createElement('h2');
    logo.innerText = 'NOBU';
    logoDiv.appendChild(logo);
    
    const tabsDiv = document.createElement('div');
    tabsDiv.classList.add('header-tabs');
    const aboutUs = document.createElement('a');
    aboutUs.href = '#';
    aboutUs.classList.add('about-us')
    aboutUs.textContent = 'About Us';
    const contact = document.createElement('a');
    contact.href = '#';
    contact.classList.add('contact')
    contact.textContent = 'Contact';
    tabsDiv.append(aboutUs, contact);

    headerNav.append(logoDiv, tabsDiv)

    // Header Restaurant Name Stuff

    const headerName = document.createElement('div');
    headerName.classList.add('header-restname');
    const restName = document.createElement('h1');
    restName.textContent = 'EXTRAVAGANCE AT ITS BEST';
    restName.classList.add('title')
    headerName.appendChild(restName);

    header.append(headerNav, headerName);


    // Main Body Stuff
    const main = document.createElement('div');
    main.classList.add('main');
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    let bolognese = menuItem('Bolognese', 'A classic italian dish that is known \
    around the world for its simplicity and incredible taste.', 'bolognese.jpeg', `Photo by <a href="https://unsplash.com/@sorinpopa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">sorin popa</a> on <a href="https://unsplash.com/s/photos/bolognese?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`);
    let caesar = menuItem("Caesar's salad", 'An immortal foundational dish.', 'caesar.jpeg', 'Photo by <a href="https://unsplash.com/@yoavaziz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yoav Aziz</a> on <a href="https://unsplash.com/s/photos/caesar-salad?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>');
    let steak = menuItem('Tomahawk Steak', 'Meat', 'steak.jpeg', 'Photo by <a href="https://unsplash.com/@mham3816?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Madie Hamilton</a> on <a href="https://unsplash.com/s/photos/tomahawk-steak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>');
    let menuArray = [bolognese, caesar, steak];
    menuArray.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');
        let img = document.createElement('div');
        img.classList.add('item-img');
        img.style = `background: url(../src/${item.imageUrl}); background-size: cover; height: 150px;`;
        img.innerHTML = `<p>${item.author}</p>`;
        let title = document.createElement('h3');
        title.textContent = item.name;
        let description = document.createElement('p');
        description.textContent = item.description;
        menuCard.append(img, title, description);
        menuItems.append(menuCard);
    })
    main.append(menuItems);



    // Footer stuff
    const footer = document.createElement('div');
    footer.classList.add('footer');
    let p = document.createElement('p');
    let imageAuthor = document.createElement('p');
    imageAuthor.innerHTML = 'Photo by <a href="https://unsplash.com/@nickkarvounis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Karvounis</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    p.textContent = 'Made by me'
    footer.append(p, imageAuthor)


    contentDiv.append(header, main, footer)

    


};

let menuItem = function(name, description, imageUrl, author) {
    return {name, description, imageUrl, author}
}


