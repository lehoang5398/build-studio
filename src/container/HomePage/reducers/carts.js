const initialState = {
  Products:[],
}

const todoProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newCarts = [...state.Products];
      newCarts.push(action.payload);
      return {
        Products : newCarts,
      };
    }
    case 'REMOVE_CART': {
      return {
        ...state,
        Products:[]
      }
    }
    case 'REMOVE_CART_ITEM':{
      const newCarts = state.Products.filter(Product => Product.id !== action.payload);
      return {
        Products: newCarts
      }
    }

    default:
      return state;
  }
}
export default todoProductsReducer;