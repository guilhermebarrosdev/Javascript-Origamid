function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return 'Abraçou';
  };
  this.andar = function () {
    return 'Andou pelo objeto';
  };
}

let obj = {
  nome: 'Andre',
  idade: 33,
};

Pessoa.prototype.andar = function () {
  return this.nome + ' pessoa andou';
};

Pessoa.prototype.nadar = function () {
  return this.nome + ' pessoa nadou';
};

const guilherme = new Pessoa('Guilherme', 25);
console.log(Pessoa.prototype);
console.log(guilherme.prototype);

const pais = 'Brasil';
const cidade = new String('Campinas');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];
const lista = document.querySelectorAll('li');

//Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return true;
  },
};
