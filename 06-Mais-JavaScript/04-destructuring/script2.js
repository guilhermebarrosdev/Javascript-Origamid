const cliente = {
  nome: 'Guilherme',
  compras: 10,
  email: 'guilherme@gmail.com',
};

const { nome: nomaGuilherme } = cliente;
console.log(nomaGuilherme);

const { email = 'email@gmail.com' } = cliente; // propriedade com sinal de igual serve como valor default
console.log(email);

//Sem destructuring
const frutas = ['banana', 'pera', 'uva'];
console.log(frutas[0]);

//Com destructuring
const [primeira, segunda, terceira] = frutas;
console.log(primeira, segunda, terceira);

//Criar varias variaveis ao mesmo tempo
const [primeiro, segundo, terceiro] = ['item 1', 'item 2', 'item 3'];
console.log(primeiro, segundo, terceiro);

function handleKeyboard({ key }) {
  console.log(key);
}

document.addEventListener('keyup', handleKeyboard);
