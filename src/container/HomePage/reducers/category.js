import { CHECK_CATEGORY } from '../constants';

const initialState = {
  categoryId: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_CATEGORY: {
      const newCategoryId = action.payload;
      return {
        ...state,
        categoryId: newCategoryId,
      };
    }
    default:
      return state;
  }
};
export default categoryReducer;
