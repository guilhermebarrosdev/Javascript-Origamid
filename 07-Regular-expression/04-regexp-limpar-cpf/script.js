const cpfsList = document.querySelectorAll('.cpf li');
// console.log(cpfs);

function elementsInnerText([...elements]) {
  return elements.map((element) => {
    return element.innerText;
  });
}

//refatorada
const elementsInnerText2 = ([...elements]) =>
  elements.map((element) => element.innerText);

// console.log(elementsInnerText(cpfs));
// console.log(elementsInnerText2(cpfs));

const limparCpf = (cpf) => cpf.replace(/\D/g, '');
// console.log(limparCpf('111.111.111-11')); // 11111111111

const construirCpf = (cpf) =>
  cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
// console.log(construirCpf('11111111111')); // 111.111.111-11

const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCpf).map(construirCpf);
};

const resultado = elementsInnerText2(cpfsList);
// console.log(formatarCPFS(resultado));

const substituirCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText2(cpfsElements);
  const cpfsFormatados = formatarCPFS(cpfs);
  cpfsElements.forEach((element, index) => {
    element.textContent = cpfsFormatados[index];
  });
  console.log(cpfsFormatados);
};

substituirCPFS(cpfsList);
