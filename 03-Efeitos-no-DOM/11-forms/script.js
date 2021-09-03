const contato = document.querySelector('#contato');
const dados = {};
function handleChange(event) {
  dados[event.target.name] = event.target.value;
  console.log(dados);
}
contato.addEventListener('change', handleChange);
