const links = document.querySelectorAll('a');

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
}

async function fetchPage(url) {
  document.querySelector('.content').innerHTML = 'Carregando';
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  console.log(pageText);
  replaceContent(pageText);
}

function replaceContent(newText) {
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector('title').innerHTML;
}

window.addEventListener('popstate', () => {
  console.log(window.location.href);
  fetchPage(window.location.href);
});

links.forEach((link) => {
  link.addEventListener('click', handleClick);
});
