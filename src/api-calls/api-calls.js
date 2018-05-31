export const fetchPokemonTypes = () => {
  return fetch('http://localhost:3001/types/')
    .then( response => response.json())
    .then( pokeTypes => pokeTypes)
    .catch( error => console.log(error))
}

export const fetchPokemon = async (pokeId) => {
  const response = await fetch(`http://localhost:3001/pokemon/${pokeId}`);
  const pokemon = await response.json();
  return pokemon
}