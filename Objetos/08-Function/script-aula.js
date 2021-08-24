const perimetro = new Function('lado', 'return lado * 4');
// console.log(perimetro(5));

function somar(n1, n2) {
  return n1 + n2;
}

// console.log(somar.name);

function darOi(nome, idade) {
  // console.log('Oi para você ' + nome + idade);
}

darOi.call(null, 'Guilherme ', 25);

function descricaoCarro(velocidade) {
  // console.log(this.marca + ' ' + this.ano + ' ' + velocidade);
}

descricaoCarro.call({ marca: 'Honda', ano: 2020 }, '220Km/h');

const carros = ['Ford', 'Fiat', 'BWM'];
const frutas = ['banana', 'uve', 'pera'];

// carros.forEach.call((frutas, item) => {
//   // console.log(item); // log das frutas
// });

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};

const li = {
  element: document.querySelector('li'),
};

Dom.prototype.ativo.call(li, 'ativar');
const ul = new Dom('ul');

const frutas2 = ['banana', 'uva', 'pera'];
Array.prototype.mostrarThis = function () {
  console.log(this);
};

Array.prototype.pop.call(frutas2);
frutas2.pop();

const arrayLike = {
  0: 'item 1',
  1: 'item 2',
  2: 'item 3',
  length: 3,
};
const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains('ativo');
});

console.log(filtro);
console.log(li);

const filtro2 = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains('ativo');
});

console.log(filtro2);

const numeros = [2, 45, 6, 4, 3, 677, 654, 555];
console.log(Math.max.apply(null, numeros));

const $ = document.querySelectorAll.bind(document);
console.log($('li')); //NodeList dos li

const carro = {
  marca: 'Ford',
  ano: 2020,
  acelerar: function (acelerando, tempo) {
    return `${this.marca} acelerou para ${acelerando}Km/h em ${tempo}'s`;
  },
};

console.log(carro.acelerar(100, 5)); // Ford acelerou para 100Km/h em 5's

const honda = {
  marca: 'Honda',
};

const acelerarHonda = carro.acelerar.bind(honda);
console.log(acelerarHonda(100, 4)); // Honda acelerou para 100Km/h em 4's
