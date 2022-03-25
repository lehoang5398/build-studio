const initialState = {
  CategoryID: null,
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_CATEGORY' :{
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
export default categoryReducer;