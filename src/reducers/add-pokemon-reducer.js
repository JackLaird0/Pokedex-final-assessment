const defaultState = {
  normal: [],
  poison: [],
  bug: [],
  fighting: [],
  ground: [],
  ghost: [],
  flying: [],
  rock: [],
  steel: []
}

export const addPokemonReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_POKEMON':
      const newState = Object.assign({}, state, {[action.pokeType]: action.pokemon})
      return newState
    default: 
      return state
  }
}