const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach((item, index, array) => {
  array[index] = 'teste';
  console.log(item.toUpperCase(), index, array);
});

console.log(carros);

const li = document.querySelectorAll('li');
li.forEach((i) => i.classList.add('ativa'));
li.forEach(function (item) {
  item.classList.add('ativa');
});

const carros2 = ['Ford', 'Fiat', 'Honda'];
const novaArray = carros2.map((item, index, array) => {
  console.log(item.toUpperCase(), index, array);
  return item.toUpperCase();
});

console.log((novaArray[0] = 'teste'));
console.log(novaArray);
console.log(carros2);

const numeros = [2, 4, 5, 6, 7, 89];
const numerosX2 = numeros.map((n) => n * 2);
console.log(numeros);
console.log(numerosX2);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'CSS 1',
    min: 20,
  },
  {
    nome: 'JS 1',
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);
console.log(tempoAulas);

const nomeAulas = (aula) => aula.nome; // as duas fazem mesma coisa/função escritas de maneiras diferente
const nomeAulas2 = function (aula) {
  return aula.nome;
};

const arrayNomeAulas = aulas.map(nomeAulas);
console.log(arrayNomeAulas);

const aulas3 = [10, 25, 30];

const reduceAulas = aulas3.reduce((acumulador, item) => {
  console.log(acumulador, item);
  return acumulador + item;
}, 0);

console.log(reduceAulas);

const numeros2 = [10, 25, 30, 80, 55, 60];
const maiorNumero = numeros2.reduce(
  (anterior, atual) => (anterior > atual ? anterior : atual),
  0
);
// if (anterior > atual) return anterior;
// else return atual;
console.log(maiorNumero);

const aulas4 = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'CSS 1',
    min: 20,
  },
  {
    nome: 'JS 1',
    min: 25,
  },
];
const listaAulas3 = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {});

console.log(listaAulas3);

const frutas = ['banana', 'pera', 'uva'];
const temUva = frutas.some((item) => {
  console.log(item);
  return item === 'uva  ';
});

console.log(temUva);

const every = frutas.every((fruta) => {
  console.log(fruta);
  return fruta;
});

console.log(every);

const numeros3 = [3, 57, 7, 9, 76];
const maiorQue3 = numeros3.every((n) => n >= 3);
console.log(maiorQue3); // true

const frutas2 = ['banana', 'pera', 'uva'];
const indexUva = frutas2.findIndex((item) => {
  return item === 'uva';
});
console.log(indexUva);

const frutas3 = ['banana', undefined, null, 'pera', 0, 'uva'];
const arrayFrutas = frutas3.filter((item) => {
  console.log(item);
  return item;
});
console.log(arrayFrutas);

const aulas5 = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'CSS 1',
    min: 20,
  },
  {
    nome: 'JS 1',
    min: 25,
  },
];

const maiores15 = aulas5.filter((aula) => {
  console.log(aula.min);
  return aula.min >= 15;
});
console.log(maiores15);
