const initialState = {
  unit: '$',
}

const UnitMoney = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_UNIT_MONEY': {
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
export default UnitMoney;
