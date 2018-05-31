export const selectTypeReducer = (state = '', action) => {
  switch (action.type) {
    case 'SELECT_TYPE':
      console.log('bon jour')
      return action.selectedType
    default: 
      console.log('hola')
      return state
  }
}