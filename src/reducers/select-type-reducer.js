export const selectTypeReducer = (state = '', action) => {
  switch (action.type) {
    case 'SELECT_TYPE':
      return action.selectedType
    default: 
      return state
  }
}