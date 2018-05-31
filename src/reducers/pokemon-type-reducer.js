export const pokemonTypeReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POKEMON_TYPE':
      return action.types
    default: 
      return state
  }
}