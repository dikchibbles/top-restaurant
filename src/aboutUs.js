export default function createAboutUsLayout() {
    const aboutUs = document.querySelector('.main>div');
    aboutUs.innerHTML = '';
    aboutUs.className = 'text-about';
    const aboutUsText = document.createElement('p');
    aboutUsText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit nibh feugiat commodo pretium. Aenean ut accumsan nunc. Sed et ligula interdum, rhoncus elit placerat, dictum elit. Cras ut neque neque. Vivamus convallis, urna elementum ultrices rutrum, lacus felis gravida urna, commodo convallis nulla massa ac dolor. Integer id pharetra risus. Ut neque mi, accumsan eu justo vel, sodales pellentesque neque. Vestibulum quam urna, pulvinar id rutrum vitae, porta eget mauris. Nulla aliquam lorem at justo molestie ultricies. Donec cursus rutrum maximus. Suspendisse et pellentesque libero.\n\n Integer vehicula nisl porttitor euismod dictum. Aenean purus quam, dapibus rhoncus porttitor vel, gravida ut ante. Donec non neque non augue maximus condimentum sit amet vel quam. Nam risus neque, venenatis quis nibh sit amet, faucibus iaculis libero. Ut luctus maximus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent porta vel odio vitae elementum. Nullam sodales malesuada porttitor.\n\n Mauris maximus odio eu tellus egestas, et maximus libero maximus. Integer mattis ultrices luctus. Ut ac auctor tellus, vel semper urna. Vestibulum risus mi, bibendum sagittis turpis eget, commodo sagittis ligula. Etiam luctus convallis nisi ut dapibus. Aenean ut diam ac orci molestie congue id sit amet ex. Nam quis massa quis justo pretium convallis. Aenean quis rutrum erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus felis mi, dignissim sit amet lectus vel, egestas vestibulum urna."
    aboutUs.append(aboutUsText)

    const title = document.querySelector('.title');
    title.textContent = 'ABOUT US'
}