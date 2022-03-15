const initialState = {
  Products: [],
  id: [],
  activeId: null,
}

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_PRICE': {
      return {
        ...state,
      };
    }
    case 'VIEW_PRODUCT': {
      return {
        state,
      }
    }
    default:
      return state;
  }
}

export default hobbyReducer;