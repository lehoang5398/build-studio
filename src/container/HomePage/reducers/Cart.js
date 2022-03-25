const initialState = {
  Products:[],
}

const todoProduct = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newProducts = [...state.Products];
      // const carts = state.Products.filter(Product => Product.id === action.payload.id);
      // if(carts.length === 0 ){
        newProducts.push(action.payload);
      // }else {
      //   newProducts.pop(action.payload);
      // }
      return {
        Products : newProducts,
      };
    }
    case 'REMOVE_CART': {
      return {
        ...state,
        Products:[]
      }
    }
    case 'REMOVE_CART_ITEM':{
      const newProducts = state.Products.filter(Product => Product.id !== action.payload);
      return {
        Products: newProducts
      }
    }

    default:
      return state;
  }
}
export default todoProduct;