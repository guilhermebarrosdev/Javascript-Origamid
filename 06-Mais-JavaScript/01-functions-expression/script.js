// Remova o erro
const priceNumber = (n) => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(() => {
  const letras = 'A';
  console.log(letras);
})();
// console.log(letras); //letras is not defined

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();

active(() => console.log('Teste active'));
