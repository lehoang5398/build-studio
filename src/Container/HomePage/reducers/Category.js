const initialState = {
  CategoryID: null,
}

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY' :{
      const NewCategoryId = action.payload;
      return {
        ...state,
        CategoryID:NewCategoryId,
      };
    }
    default:
      return state;
  } 
}
export default CategoryReducer;