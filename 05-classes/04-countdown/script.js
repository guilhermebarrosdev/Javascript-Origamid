import Countdown from './countdown.js';

const tempoParaONatal = new Countdown('24 December 2021 23:59:59');
const tempoParaOAnoNovo = new Countdown('31 December 2021 23:59:59');
console.log(`${tempoParaONatal.days} dias para o Natal`);
console.log(`${tempoParaONatal.hours} horas para o Natal`);
console.log(`${tempoParaONatal.minutes} minutos para o Natal`);
console.log(`${tempoParaONatal.seconds} segundos para o Natal`);
console.log(tempoParaONatal.total);
console.log(tempoParaOAnoNovo.total);
setInterval(() => console.log(tempoParaONatal.total), 1000);
