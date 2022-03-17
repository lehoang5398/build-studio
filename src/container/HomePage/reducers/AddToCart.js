const initialState = {
  Product:[],
}

const todoProduct = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return {
        state,
      };
    }
    default:
      return state;
  }
}
export default todoProduct;