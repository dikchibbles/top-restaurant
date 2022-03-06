(()=>{"use strict";let e=function(e,t,a,s){return{name:e,description:t,imageUrl:a,author:s}};!function(){const t=document.querySelector("#content"),a=document.createElement("div");a.classList.add("header");const s=document.createElement("div");s.classList.add("header-nav");const n=document.createElement("div");n.classList.add("header-logo");const o=document.createElement("a");o.classList.add("logo-main"),o.href="#",o.innerHTML="<h2>NOBU</h2>",n.appendChild(o);const u=document.createElement("div");u.classList.add("header-tabs");const r=document.createElement("a");r.href="#",r.classList.add("about-us"),r.textContent="About Us";const i=document.createElement("a");i.href="#",i.classList.add("contact"),i.textContent="Contact",u.append(r,i),s.append(n,u);const m=document.createElement("div");m.classList.add("header-restname");const c=document.createElement("h1");c.textContent="EXTRAVAGANCE AT ITS BEST",c.classList.add("title"),m.appendChild(c),a.append(s,m);const l=document.createElement("div");l.classList.add("main");const d=document.createElement("div");d.classList.add("menu-items"),[e("Bolognese","A classic italian dish that is known     around the world for its simplicity and incredible taste.","bolognese.jpeg",'Photo by <a href="https://unsplash.com/@sorinpopa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">sorin popa</a> on <a href="https://unsplash.com/s/photos/bolognese?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'),e("Caesar's salad","An immortal foundational dish.","caesar.jpeg",'Photo by <a href="https://unsplash.com/@yoavaziz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yoav Aziz</a> on <a href="https://unsplash.com/s/photos/caesar-salad?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'),e("Tomahawk Steak","Meat","steak.jpeg",'Photo by <a href="https://unsplash.com/@mham3816?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Madie Hamilton</a> on <a href="https://unsplash.com/s/photos/tomahawk-steak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>')].forEach((e=>{const t=document.createElement("div");t.classList.add("menu-card");let a=document.createElement("div");a.classList.add("item-img"),a.style=`background: url(../src/${e.imageUrl}); background-size: cover; height: 150px;`,a.innerHTML=`<p>${e.author}</p>`;let s=document.createElement("h3");s.textContent=e.name;let n=document.createElement("p");n.textContent=e.description,t.append(a,s,n),d.append(t)})),l.append(d);const p=document.createElement("div");p.classList.add("footer");let h=document.createElement("p"),f=document.createElement("p");f.innerHTML='Photo by <a href="https://unsplash.com/@nickkarvounis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Karvounis</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',h.textContent="Made by me",p.append(h,f),t.append(a,l,p)}();const t=document.querySelector(".about-us"),a=document.querySelector(".contact"),s=document.querySelector(".logo-main");t.addEventListener("click",(function(){const e=document.querySelector(".main>div");e.innerHTML="",e.className="text-about";const t=document.createElement("p");t.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit nibh feugiat commodo pretium. Aenean ut accumsan nunc. Sed et ligula interdum, rhoncus elit placerat, dictum elit. Cras ut neque neque. Vivamus convallis, urna elementum ultrices rutrum, lacus felis gravida urna, commodo convallis nulla massa ac dolor. Integer id pharetra risus. Ut neque mi, accumsan eu justo vel, sodales pellentesque neque. Vestibulum quam urna, pulvinar id rutrum vitae, porta eget mauris. Nulla aliquam lorem at justo molestie ultricies. Donec cursus rutrum maximus. Suspendisse et pellentesque libero.\n\n Integer vehicula nisl porttitor euismod dictum. Aenean purus quam, dapibus rhoncus porttitor vel, gravida ut ante. Donec non neque non augue maximus condimentum sit amet vel quam. Nam risus neque, venenatis quis nibh sit amet, faucibus iaculis libero. Ut luctus maximus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent porta vel odio vitae elementum. Nullam sodales malesuada porttitor.\n\n Mauris maximus odio eu tellus egestas, et maximus libero maximus. Integer mattis ultrices luctus. Ut ac auctor tellus, vel semper urna. Vestibulum risus mi, bibendum sagittis turpis eget, commodo sagittis ligula. Etiam luctus convallis nisi ut dapibus. Aenean ut diam ac orci molestie congue id sit amet ex. Nam quis massa quis justo pretium convallis. Aenean quis rutrum erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus felis mi, dignissim sit amet lectus vel, egestas vestibulum urna.",e.append(t),document.querySelector(".title").textContent="ABOUT US"})),a.addEventListener("click",(function(){const e=document.querySelector(".main>div");e.innerHTML="",e.className="contact-div";const t=document.createElement("div"),a=document.createElement("h3");a.innerText="Mezhdunarodnaya Street, 8, Krasnogorsk, Moscow Region, Russia, 143402",t.append(a);const s=document.createElement("div");s.classList.add("contact-map"),s.style="position:relative;overflow:hidden;",s.innerHTML='<a href="https://yandex.ru/maps/org/nobu/98964215212/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Nobu</a><a href="https://yandex.ru/maps/10735/krasnogorsk/category/restaurant/184106394/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Restaurant in Krasnogorsk</a><a href="https://yandex.ru/maps/10735/krasnogorsk/category/cafe/184106390/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">Cafe in Krasnogorsk</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUBEVUxpC" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',e.append(t,s),document.querySelector(".title").textContent="CONTACT US"})),s.addEventListener("click",(function(){const t=document.querySelector(".main>div");t.innerHTML="",t.className="menu-items",[e("Bolognese","A classic italian dish that is known     around the world for its simplicity and incredible taste.","bolognese.jpeg",'Photo by <a href="https://unsplash.com/@sorinpopa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">sorin popa</a> on <a href="https://unsplash.com/s/photos/bolognese?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'),e("Caesar's salad","An immortal foundational dish.","caesar.jpeg",'Photo by <a href="https://unsplash.com/@yoavaziz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yoav Aziz</a> on <a href="https://unsplash.com/s/photos/caesar-salad?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'),e("Tomahawk Steak","Meat","steak.jpeg",'Photo by <a href="https://unsplash.com/@mham3816?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Madie Hamilton</a> on <a href="https://unsplash.com/s/photos/tomahawk-steak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>')].forEach((e=>{const a=document.createElement("div");a.classList.add("menu-card");let s=document.createElement("div");s.classList.add("item-img"),s.style=`background: url(../src/${e.imageUrl}); background-size: cover; height: 150px;`,s.innerHTML=`<p>${e.author}</p>`;let n=document.createElement("h3");n.textContent=e.name;let o=document.createElement("p");o.textContent=e.description,a.append(s,n,o),t.append(a)})),document.querySelector(".title").textContent="EXTRAVAGANCE AT ITS BEST"}))})();