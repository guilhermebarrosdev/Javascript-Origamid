// Com function constructor
function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function () {
  const buttonElement = document.createElement('button');
  buttonElement.textContent = this.text;
  buttonElement.background = this.background;
  return buttonElement;
};

//Com class
class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    console.log(this);
    return targetElement;
  }
  static blueButton(text) {
    return new Button(text, 'blue', 'white');
  }
}

const botaoAzul = Button.blueButton('Clique');
const blueButton = new Button('Comprar', 'blue', 'white');
console.log(blueButton.appendTo('body'));
