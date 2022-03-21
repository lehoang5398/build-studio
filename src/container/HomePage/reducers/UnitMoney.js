const initialState = {
  unit: '$',
}

const unitMoney = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_UNIT_MONEY': {
      const unitMoney = action.payload
      return {
        ...state,
        unit:unitMoney,
      };
    }
    default: 
    return state;
  }
}
export default unitMoney;
