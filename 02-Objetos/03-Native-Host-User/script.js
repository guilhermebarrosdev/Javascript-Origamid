// Liste 5 objetos nativos
Object;
Array;
Function;
String;
Number;

// Liste 5 objetos do browser
Window;
Document;
NodeList;
HTMLAllCollection;
history;

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
webkitVisibilityState;
webkitIsFullScreen;

if (typeof document.webkitVisibilityState !== 'undefined') {
  console.log('Existe');
} else {
  console.log('Não existe');
}
