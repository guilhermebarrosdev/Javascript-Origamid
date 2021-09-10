class Button {
  constructor(options) {
    this.options = options;
  }
  static createButton(text, background) {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = text;
    buttonElement.style.background = background;
    return buttonElement;
  }
}

const optionsBlue = {
  backgroundColor: 'blue',
  text: 'Comprar',
  color: 'white',
};

const blueButton = new Button(optionsBlue);

const blueButtonStatic = Button.createButton('Clique', 'blue');
console.log(blueButtonStatic);
