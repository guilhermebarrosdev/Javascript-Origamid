const carro = {
  marca: 'Honda',
  ano: '2021',
};

const { marca, ano } = carro;

console.log(marca, ano);
console.log(carro);

//Sem destructuring
const client = {
  nome: 'Guilherme',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2', 'Livro 3'],
      videos: ['video 1', 'video 2'],
    },
    fisicas: {
      cadernos: ['Cadernos 1'],
    },
  },
};

console.log(client.compras.digitais.livros);
console.log(client.compras.digitais.videos);

//Com destructuring
const {
  digitais,
  fisicas,
  digitais: { livros, videos },
} = client.compras;
console.log(livros);
console.log(videos);
console.log(digitais);
console.log(fisicas);
