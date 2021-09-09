fetch('https://pokeapi.co/api/v2/pokemon/1/ ')
  .then((response) => response.json())
  .then((pokemon) => {
    console.log(pokemon);
  });
