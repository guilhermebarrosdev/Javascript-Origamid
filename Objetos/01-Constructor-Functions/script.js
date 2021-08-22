// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Noma pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    return console.log(nome + ' andou');
  };
}
// Crie 3 pessoas, João - 20anos, Maria - 25anos, Bruno - 15anos

const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (DOM) para manipulação
// de listas de elementos do DOM. Deve conter as seguintes
// propriedades e métodos:
//
// elemets, retorna uma NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe de todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
    this.removeClass = function (classe) {
      elementList.forEach((element) => {
        element.classList.remove(classe);
      });
    };
  };
}

const listaItens = new Dom('li');
const ul = new Dom('ul');

// listaItens.addClass('ativar');
// ul.addClass('ativar-ul');
