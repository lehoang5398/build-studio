
export const UnitMoney = (data) =>{
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

export const setCart = (cart) => {
  return {
    type: 'ADD_TO_CART',
    payload:cart,
  }
}

export const removeCart = (cart) => {
  return{ 
    type:'REMOVE_CART',
    payload:cart,
  }
}
