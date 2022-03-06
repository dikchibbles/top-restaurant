export default function createContactLayout() {
    const contactDiv = document.querySelector('.main>div');
    contactDiv.innerHTML = '';
    contactDiv.className = 'contact-div';
    
    // CONTACT INFO
    const contactInfoDiv = document.createElement('div');
    const contactInfoAddress = document.createElement('h3');
    contactInfoAddress.innerText = 'Mezhdunarodnaya Street, 8, Krasnogorsk, Moscow Region, Russia, 143402';
    contactInfoDiv.append(contactInfoAddress);

    // CONTACT MAP
    const contactMapDiv = document.createElement('div');
    contactMapDiv.classList.add('contact-map');
    contactMapDiv.style = 'position:relative;overflow:hidden;';
    contactMapDiv.innerHTML = '<a href="https://yandex.ru/maps/org/nobu/98964215212/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Nobu</a><a href="https://yandex.ru/maps/10735/krasnogorsk/category/restaurant/184106394/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Restaurant in Krasnogorsk</a><a href="https://yandex.ru/maps/10735/krasnogorsk/category/cafe/184106390/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">Cafe in Krasnogorsk</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUBEVUxpC" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>'
    





    contactDiv.append(contactInfoDiv, contactMapDiv);

    const title = document.querySelector('.title');
    title.textContent = 'CONTACT US'
}