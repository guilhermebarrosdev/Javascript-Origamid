function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = text;
    return buttonElement;
  }
  return Object.freeze({
    text,
    element,
  });
}

const btnComprar = createButton('Comprar');
const btnVender = createButton('Vender');
console.log(btnComprar, btnVender);

btnComprar.text = 'Novo Texto'; //Nao funciona por conta do freeze
