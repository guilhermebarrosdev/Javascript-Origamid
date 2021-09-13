const somar = (a, b) => a + b;
const quadrado = (a) => a * a;
console.log(somar(4, 5));
console.log(quadrado(4));

const instrumento = 'Violão';

//IIFE como era feito antes p isolar escopo
(() => {
  const instrumento = 'Guitarra';
  console.log(instrumento);
})();

console.log(instrumento);
