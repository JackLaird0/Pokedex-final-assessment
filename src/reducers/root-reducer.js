import { combineReducers } from 'redux'
import fakeReducer from './fake-reducer'
import { pokemonTypeReducer } from './pokemon-type-reducer'

const rootReducer = combineReducers({
  fake: fakeReducer,
  types: pokemonTypeReducer
})

export default rootReducer
