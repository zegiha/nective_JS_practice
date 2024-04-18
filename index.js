const loading = document.createElement('div');
loading.appendChild(
  document.createTextNode("로딩중...")
);
loading.className += 'loading';

const box = document.createElement('div');
box.className += 'box';

function renderPost(idText, titleText, bodyText) {
  const data = {
    id: idText,
    title: titleText,
    contents: bodyText,
  }
  localStorage.setItem("post-info", JSON.stringify(data));
  location.href = 'post.html';
}

function renderList(idText, titleText, contentsText) {
  const item = document.createElement('div');
  item.className += 'item';
  item.addEventListener('click', () => {
    renderPost(idText, titleText, contentsText)
  });

  const row = document.createElement('div');
  row.className += 'row';

  const title = document.createElement('div');
  title.className += 'title';
  title.appendChild(
    document.createTextNode(titleText)
  );

  const id = document.createElement('div');
  id.className += 'id';
  id.appendChild(
    document.createTextNode(`id: ${idText}`)
  );

  const contents = document.createElement('div');
  contents.className += 'contents';
  contents.appendChild(
    document.createTextNode(contentsText)
  );

  row.append(title, id);
  item.append(row, contents);
  box.appendChild(item);
}

async function getPostList() {
  document.body.appendChild(loading);

  const postList = await fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json());
  loading.remove();

  const wrapper = document.getElementById('wrapper');
  wrapper.append(box);
  postList.map((v) => {
    renderList(v.id, v.title, v.body);
  })
}

getPostList();