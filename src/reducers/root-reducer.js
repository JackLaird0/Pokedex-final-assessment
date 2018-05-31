import { combineReducers } from 'redux'
import fakeReducer from './fake-reducer'
import { pokemonTypeReducer } from './pokemon-type-reducer'
import { addPokemonReducer } from './add-pokemon-reducer'
import { selectTypeReducer } from './select-type-reducer'

const rootReducer = combineReducers({
  types: pokemonTypeReducer,
  pokemon: addPokemonReducer,
  selectedType: selectTypeReducer
})

export default rootReducer
