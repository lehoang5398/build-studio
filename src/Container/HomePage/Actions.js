
export const UnitMoney = (data) =>{
  return {
    type:'CHANGE_UNIT_MONEY',
    payload:data,
  }
}
export const CategoryProduct = (data) =>{
  return{
    type:'ADD_CATEGORY',
    payload:data,
  }
}
export const AddToCart = (data) => {
  return {
    type: 'ADD_TO_CART',
    payload:data,
  }
}