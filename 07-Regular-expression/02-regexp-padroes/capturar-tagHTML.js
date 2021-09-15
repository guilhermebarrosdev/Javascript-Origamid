//Tag completa
const regexpTAG = /<\/?[\w\s="']+\/?>/gi;
const tags = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>',
];
for (tag of tags) {
  console.log(tag, tag.match(regexpTAG));
}

//Apenas nome isolado da tag
const regexpTAG2 = /(?<=<\/?)[\w]+/gi;
const tags2 = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>',
];
for (tag of tags2) {
  console.log(tag, tag.match(regexpTAG2));
}
