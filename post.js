const data = JSON.parse(localStorage.getItem("post-info"));
localStorage.removeItem("post-info");
if(data == null) location.href = 'index.html';

const docsTitle = document.createElement('title');
docsTitle.appendChild(document.createTextNode(`notice: ${data.title}`));
document.head.appendChild(docsTitle);

const title = document.getElementById('title');
const id = document.getElementById('id');
const contents = document.getElementById('contents');
const back = document.getElementById('back');

title.appendChild(document.createTextNode(data.title));
id.appendChild(document.createTextNode(`id: ${data.id}`));
contents.appendChild(document.createTextNode(data.contents));

back.addEventListener('click', () => {
    location.href = 'index.html';
})