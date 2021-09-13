function Pessoa(nome) {
  if (!(this instanceof Pessoa))
    // Jeito novo é new.target
    return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

const designer = Pessoa('Guilherme');
console.log(designer);
