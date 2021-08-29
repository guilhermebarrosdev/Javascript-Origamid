const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];
const dados = [
  new String('Tipo 1'),
  ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

const carros = new Array('Ford', 'Fiat', 'Honda');
carros[2] = 'Ferrari';
carros[3] = 'Kia';
carros[20] = 'BMW';

console.log(carros.length);

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);
console.log(li);
console.log(arrayLi);

const obj = {
  0: 'Guilherme',
  1: 'Barros',
  2: 'teste',
  length: 3,
};

const arrayObj = Array.from(obj);
console.log(arrayObj);

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas[2][0].length);

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
console.log(instrumentos);

const carros = ['Ford', 'Fiat', 'vw'];
carros.unshift('Kia', 'Ferrari');
carros.push('BWM', 'JAGUAR');
console.log(carros);
console.log(carros.splice(2, 0, 'Fusca'));

console.log(['item1', 'item2', 'item3', 'item4', 'item5'].copyWithin(0, 0, 3));

console.log(['item1', 'item2', 'item3', 'item4', 'item5'].fill('Banana', 0, 3));

let htmlString = '<h2>Titulo Principal</h2>';
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');
console.log(htmlString);

const linguagens = ['html', 'css', 'javascript', 'php', 'python', 'javascript'];
const cloneLinguagens = linguagens.slice();

console.log(linguagens.pop());
console.log(linguagens);
console.log(cloneLinguagens);
