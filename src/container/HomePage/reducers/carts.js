import { ADD_TO_CART, REMOVE_CART, REMOVE_CART_ITEM } from '../constants';

const initialState = {
  products: [],
};

const todoProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newCarts = [...state.products];
      newCarts.push(action.payload);
      return {
        products: newCarts,
      };
    }
    case REMOVE_CART: {
      return {
        ...state,
        products: [],
      };
    }
    case REMOVE_CART_ITEM: {
      const newCarts = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        products: newCarts,
      };
    }

    default:
      return state;
  }
};
export default todoProductsReducer;
