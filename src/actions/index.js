export const fakeAction = () => ({ type: 'FAKE'})

export const addPokemonType = (types) => ({
  type: 'ADD_POKEMON_TYPE',
  types
})

export const addPokemon = (pokemon, pokeType) => ({
  type: 'ADD_POKEMON',
  pokemon,
  pokeType
})

export const selectedType = (selectedType) => ({
  type: 'SELECT_TYPE',
  selectedType
})