async function asyncSemPromise() {
  //Console não ira esperar.
  await setTimeout(() => console.log('Depois de 1s'), 1000);
  console.log('acabou');
}
asyncSemPromise();

//Jeito que funciona
async function asyncSemPromise2() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('Depois de 1s');
      resolve();
    }, 1000);
  });
  console.log('acabou');
}
asyncSemPromise2();
