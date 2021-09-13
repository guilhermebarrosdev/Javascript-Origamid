let item1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
  }
}
// func1, possui acesso à
// item1 e item2
// func2, possui acesso à
// item1, item2 e item3

function contagem() {
  let total = 0;
  return function incrementar() {
    total++;
    console.log(total); // 1, 2, 3
  };
}
const ativarIncrementar = contagem();
ativarIncrementar(); // 1
ativarIncrementar(); // 2
ativarIncrementar(); // 3
