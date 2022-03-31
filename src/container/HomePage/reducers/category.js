import { CHECK_CATEGORY, UNSELECT_PRODUCT } from '../constants';

const initialState = {
  categoryId: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_CATEGORY: {
      state.categoryId.push(action.payload);
      return {
        categoryId: [...state.categoryId],
      };
    }
    case UNSELECT_PRODUCT: {
      const idx = state.categoryId.findIndex((item) => item === action.payload);
      state.categoryId.splice(idx, 1);
      return {
        categoryId: [...state.categoryId],
      };
    }
    default:
      return state;
  }
};
export default categoryReducer;
