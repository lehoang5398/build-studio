const initialState = {
  categoryId: null,
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_CATEGORY' :{
      const NewCategoryId = action.payload;
      return {
        ...state,
        categoryId:NewCategoryId,
      };
    }
    default:
      return state;
  } 
}
export default categoryReducer;