const initialState = {
  Products:[],
}

const todoProduct = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newProducts = [...state.Products];
      const carts = state.Products.filter(Product => Product.id === action.payload.id);
      if(carts.length === 0 ){
        newProducts.push(action.payload);
      }else {
        newProducts.pop(action.payload);
      }
      return {
        ...state,
        Products:newProducts,
      };
    }
    case 'REMOVE_CART': {
      return {
        ...state,
        Products:[]
      }
    } 

    default:
      return state;
  }
}
export default todoProduct;