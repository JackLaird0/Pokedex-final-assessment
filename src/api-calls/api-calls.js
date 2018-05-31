export const fetchPokemonTypes = () => {
  return fetch('http://localhost:3001/types/')
    .then( response => response.json())
    .then( pokeTypes => pokeTypes)
    .catch( error => console.log(error))
}

export const displayPokemon = (pokemon) => {
  const selectedPokemon = pokemon.map( async (pokeId) => {
    const response = await fetch(`http://localhost:3001/pokemon/${pokeId}`);
    const pokeData = await response.json();
    return pokeData
  })
  return Promise.all(selectedPokemon)
}
