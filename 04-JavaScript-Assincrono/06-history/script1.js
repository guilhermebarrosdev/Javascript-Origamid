window.history.pushState(null, null, 'sobre.html');

window.addEventListener('popstate', () => {
  console.log('Teste');
});
