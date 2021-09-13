const frutas = ['banana', 'pera', 'uva'];
const frase = 'Isso é JavaScript';

for (const fruta of frutas) {
  console.log(fruta);
}

for (const letras of frase) {
  console.log(letras);
}

const buttons = document.querySelectorAll('button');

for (const btn of buttons) {
  btn.style.color = 'blue';
}

console.log(buttons); //Log da NodeList
console.log(...buttons); //Log em cada um dos botões

const carro = {
  marca: 'BMW',
  ano: 2021,
};

for (const key in carro) {
  console.log(carro[key]);
}

const btnUnico = document.querySelector('button');
const btnStyle = getComputedStyle(btnUnico);

for (const style in btnStyle) {
  console.log(`${style} : ${btnStyle[style]}`);
}

//Loop Do While
let i = 0;
do {
  console.log(i++);
} while (i <= 10);
