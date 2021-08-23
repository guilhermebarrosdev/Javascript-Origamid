console.log(Number.isNaN(1)); // False
console.log(Number.isInteger(1.5)); // False

console.log(parseFloat('99.90 reais')); // 99.90
console.log(parseInt('99.90 reais')); // 99

const preco = 10.231123;
console.log(preco.toFixed());

let valor = 9.99;
valor = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
console.log(valor);

console.log(Math.PI);

const aleatorio = Math.floor(Math.random() * (40 - 20)) + 20;
console.log(aleatorio);
