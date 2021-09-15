// const regexp = /\w+[-.]/gi;
// const regexp2 = new RegExp('\\w', 'gi');

// const regexpJava = /Java/g;

// const frase = 'JavaScript e Java Linguagem 101';
// console.log(frase.replace(regexp2, 'X')); // XXXXXXXXXX X XXXX XXXXXXXXX XXX

// console.log(regexpJava.lastIndex); //0
// console.log(regexpJava.test(frase)); //true
// console.log(regexpJava.lastIndex); //4
// console.log(regexpJava.test(frase)); //true
// console.log(regexpJava.lastIndex); //17
// console.log(regexpJava.test(frase)); //false

// let i = 1;
// while (regexpJava.test(frase)) {
//   console.log(i++, regexpJava.lastIndex); //1 4, 2 17
// }

// const frase2 = 'JavaScript, TypeScript, CoffeeScript, Java';
// const regexpScript = /\w+/g;

// console.log(regexpScript.exec(frase2)); //JavaScript
// console.log(regexpScript.exec(frase2)); //TypeScript
// console.log(regexpScript.exec(frase2)); //CoffeeScript
// console.log(regexpScript.exec(frase2)); //Java
// console.log(regexpScript.exec(frase2)); //null

// let regexpResult;
// while ((regexpResult = regexpScript.exec(frase2)) !== null) {
//   console.log(regexpResult[0]); // JavaScript, TypeScript, CoffeeScript, Java
// }

// const frase3 = 'JavaScript, TypeScript, CoffeeScript, Java';
// const regexp3 = /\w+/g;

// const resultados = frase3.match(regexp3);
// console.log(resultados);

// const frase4 = 'JavaScript, TypeScript, CoffeeScript, Java';
// const regexp4 = /\w+/g;

// const resultados2 = frase4.split(regexp4);
// console.log(resultados2); //[ '', ', ', ', ', ', ', '' ]

// const tags = `
//   <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//   </ul>
//     `;

// const regexpTags = /(?<=<\/?)\w+/g;

// const resultado3 = tags.replace(regexpTags, 'div');
// console.log(resultado3); //  <div><div>Item 1</div><div>Item 2</div></div>

// const emails2 = `
//   empresa@email.com
//   contato@email.com
//   suporte@email.com
// `;

// const regexpEmail = /(\w+@)[\w.]+/g;

// const resultadosEmail = emails2.replace(regexpEmail, '$1gmail.com');
// console.log(resultadosEmail); //  empresa@gmail.com contato@gmail.com suporte@gmail.com

const regexpEmails = /(\w+)(@[\w]+)/g;
const emails3 = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`;

const resultadosEmail2 = emails3.replace(regexpEmails, function (...args) {
  console.log(args);
  if (args[2] === '@homail') {
    return `${args[1]}@hotmail`;
  } else if (args[2] === '@ggmail') {
    return `${args[1]}@gmail`;
  } else if (args[2] === '@oulook') {
    return `${args[1]}@outlook`;
  } else {
    return args[0];
  }
});

console.log(resultadosEmail2);
// joao@hotmail.com.br
// marta@gmail.com.br
// bruna@outlook.com.brresa@gmail.com contato@gmail.com suporte@gmail.com
