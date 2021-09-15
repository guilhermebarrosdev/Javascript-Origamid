const regexpCEP = /\d{5}[-\s]?\d{3}/g;

const ceps = ['12345-123', '54321 321', '14253965'];

for (cep of ceps) {
  console.log(cep, cep.match(regexpCEP));
}
