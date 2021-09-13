// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background, color) {
  background = background || 'blue';
  if (color === undefined) {
    color = 'red';
  }
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
}

function createButton2(background = 'blue', color = 'red') {
  const buttonElement2 = document.createElement('button');
  buttonElement2.style.background = background;
  buttonElement2.style.color = color;
  return buttonElement2;
}

const blueButton = createButton2();
const redButton = createButton();
console.log(blueButton);
console.log(redButton);

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];
comidas.push(...frutas);
console.log(comidas);
