const cep = fetch('https://viacep.com.br/ws/13054211/json/');

cep
  .then((r) => r.text())
  .then((body) => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.textContent = body;
  });
