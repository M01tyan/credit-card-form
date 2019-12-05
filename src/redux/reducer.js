const reducer = (state = {}, action) => {
  switch(action.type) {
    case 'CHANGE_NUMBER':
     return {
       ...state,
       number : action.value
     }
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.value
      }
    case 'CHANGE_MONTH':
      return {
        ...state,
        month: action.value
      }
    case 'CHANGE_YEAR':
      return {
        ...state,
        year: action.value
      }
    case 'CHANGE_CW':
      return {
        ...state,
        cw: action.value
      }
    case 'CHANGE_FOCUS':
      return {
        ...state,
        focus: action.value
      }
    default:
      return state
  }
}

export default reducer