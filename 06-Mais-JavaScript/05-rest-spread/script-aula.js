function perimetroForma(lado, totalLados = 4) {
  // totalLados = totalLados || 4; // Jeito antigo
  const argArr = Array.from(arguments);
  argArr.forEach(() => {
    console.log(argArr);
  });
  console.log(argArr);
  console.log(arguments);
  return lado * totalLados;
}
console.log(perimetroForma(10, 5));
console.log(perimetroForma(10));

function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + ' ganhou um ' + premio);
  });
}
anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];
const comidas = [...frutas, 'Pizza', ...legumes];

console.log(comidas);

const numeroMaximo = Math.max(4, 5, 20, 10, 30, 2, 33, 5); // 33
const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
const numeroMaximoSpread = Math.max(...listaNumeros);

console.log(numeroMaximoSpread); //55

const btns = document.querySelectorAll('button');
const btnsArray = [...btns];
console.log(btnsArray);

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];
console.log(fraseArray);
