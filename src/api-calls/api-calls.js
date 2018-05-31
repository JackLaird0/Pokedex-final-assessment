export const fetchPokemonTypes = () => {
  return fetch('localhost:3001/types')
    .then( response => response.json())
    .then( pokeTypes => pokeTypes)
    .catch( error => console.log(error))
}