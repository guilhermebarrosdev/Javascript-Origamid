const comida = 'Pizza';
const agua = new String('Agua');

console.log(comida.length);

const frase = 'A melhor comida';

console.log(frase[frase.length]);
console.log(frase.charAt(frase.length));

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseFinal = frase + linguagem;
const fraseFinal2 = frase.concat(linguagem, '!!', ' asdsdadas');

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta));

console.log(fruta.startsWith('Ba'));
console.log(fruta.endsWith('na'));

const transacao1 = 'Depósito de Cliente';
const transacao2 = 'Depósito de Fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

console.log(transacao1.slice(-5));

console.log(fruta.indexOf('na')); //2

const preco = 'R$ 99,00';
console.log(preco.padStart(11, '.')); // ...R$ 99,00

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 1.199', 'R$ 11.199'];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10, '-'));
});

const palavra = 'Blá';
console.log(palavra.repeat(5)); //BláBláBláBláBlá

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
console.log(listaItens);

const arrayLista = listaItens.split(', ');
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(
  sexo1.toLowerCase() === 'feminino',
  sexo2.toLowerCase() === 'feminino',
  sexo3.toLowerCase() === 'feminino'
); // Retorna todos true

const valor = ' R$ 23.00 ';
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00 '
valor.trimEnd(); // ' R$ 23.00'
