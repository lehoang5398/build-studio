import { CHECK_UNIT_MONEY } from '../constants';

const initialState = {
  unit: '$',
};

const unitMoneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_UNIT_MONEY: {
      const unitMoney = action.payload;
      return {
        ...state,
        unit: unitMoney,
      };
    }
    default:
      return state;
  }
};
export default unitMoneyReducer;
