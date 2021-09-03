const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick() {
  setTimeout(() => {
    console.log(this);
    this.classList.toggle('active');
  }, 1000);
}

setTimeout(() => {
  console.log('testando');
});

for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}

function loop(texto) {
  console.log(texto);
}
setInterval(loop, 1000, 'passou 1s');
//loop a cada segundo
let i = 0;
const meuLoop = setInterval(() => {
  console.log(i++);
  if (i > 20) {
    clearInterval(meuLoop);
  }
}, 1000);
