// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const { backgroundColor, margin, color } = btnStyles;
console.log(
  `backgroundColor = ${backgroundColor}\ncolor = ${color}\nmargin = ${margin}`
);

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(`curso ativo = ${cursoAtivo}\ncurso inativo = ${cursoInativo}`);
// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo',
};

const { cor: bobCor } = cachorro;
console.log(bobCor);
