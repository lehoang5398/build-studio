const initialState = {
  Products:[],
}

const todoProduct = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newProducts = [...state.Products];
      newProducts.push(action.payload);
      return {
        ...state,
        Products:newProducts,
      };
    }
    case 'REMOVE_CART': {
      return {
        state
      }
    } 
    default:
      return state;
  }
}
export default todoProduct;