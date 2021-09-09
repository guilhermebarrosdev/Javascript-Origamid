const bgColor = fetch('./style.css');

bgColor
  .then((r) => r.text())
  .then((body) => {
    const conteudo = document.querySelector('.conteudo');
    const style = document.createElement('style');
    style.textContent = body;
    console.log(style);
    conteudo.appendChild(style);
  });
