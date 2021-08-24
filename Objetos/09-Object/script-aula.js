const pessoa = new Object({
  nome: 'Guilherme',
});

console.log(pessoa);

const carro = {
  marca: 'Marca',
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  },
};
console.log(carro);

const honda = Object.create(carro).init('Honda');
console.log(honda.acelerar()); // Honda acelerou

const ferrari = Object.create(carro).init('Ferrari');
console.log(ferrari.acelerar()); // Ferrari acelerou

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
};

const moto = {
  capacete: true,
};

Object.assign(moto, funcaoAutomovel);
Object.defineProperties(moto, {
  rodas: {
    enumerable: true,
    get() {
      return 2;
    },
    set(valor) {
      this.rodas = valor * 4 + ' Total de rodas';
    },
  },
});

console.log(moto);

const innerHeightConfig = Object.getOwnPropertyDescriptor(
  window,
  'innerHeight'
);

Object.getOwnPropertyNames(Array.prototype);

const frutas = ['uva'];

console.log(Object.getPrototypeOf(frutas));
console.log(Array.prototype);

const frutas1 = ['banana', 'pera', 'uva'];
const frutas2 = ['banana', 'pera', 'uva'];

const novaFrutas = frutas1;
novaFrutas[0] = 'morango';

console.log(frutas1);

Object.is(frutas1, frutas2);

const carro = {
  marca: 'Ford',
  ano: 2020,
};

Object.freeze(carro);
carro.marca = 'Honda';

console.log(carro);
console.log(Object.isFrozen(carro)); // true

const frutas3 = ['uva', 'banana', 'pera', 'morango'];
const frase = 'Hello world';
const somar = function (a, b) {
  return a + b;
};
const carro = {
  marca: 'BWM',
};

console.log(frutas3.toString());
console.log(Object.prototype.toString.call(frutas)); // "[object Array]"
console.log(Object.prototype.toString.call(frase)); // "[object String]"
console.log(Object.prototype.toString.call(somar)); // "[object Function]"
