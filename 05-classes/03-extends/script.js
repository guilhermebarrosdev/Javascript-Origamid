class Veiculo {
  constructor(rodas, combustivel) {
    this.combustivel = combustivel;
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  acelerar() {
    super.acelerar();
    console.log('Acelerou rapido');
  }
  empinar() {
    console.log(`Moto empinou com ${this.rodas} rodas`);
  }
}

const honda = new Moto(2, 'gasolina', true);
const civic = new Veiculo(4, 'flex');
