const doc = fetch('./doc.txt');

doc
  .then((resolucao) => resolucao.text())
  .then((body) => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.textContent = body;
  });
