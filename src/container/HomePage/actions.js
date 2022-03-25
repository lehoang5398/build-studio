
export const unitMoney = (data) =>{
  return {
    type:'CHECK_UNIT_MONEY',
    payload:data,
  }
}

export const categoryProduct = (data) =>{
  return{
    type:'CHECK_CATEGORY',
    payload:data,
  }
}

export const setCarts = (carts) => {
  return {
    type: 'ADD_TO_CART',
    payload:carts,
  }
}

export const removeCartItem = (idCartItem) => {
  return {
    type : 'REMOVE_CART_ITEM',
    payload:idCartItem,
  }
}

export const removeCart = (carts) => {
  return{ 
    type:'REMOVE_CART',
    payload:carts,
  }
}

